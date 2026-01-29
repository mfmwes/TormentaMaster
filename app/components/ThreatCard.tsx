import { Ameaca, Acao } from "../types/game";
import { CONDICOES_DB } from "../data/condicoes";
import { StatBox } from "./ui/StatBox";
import { DiceText } from "./ui/DiceText";
import { useState } from "react";

type Props = {
  ameaca: Ameaca;
  onUpdate: (id: string, campo: keyof Ameaca, valor: any) => void;
  onDelete: (id: string) => void;
  onClone: (ameaca: Ameaca) => void;
  onSaveModel: (ameaca: Ameaca) => void;
  onToggleCondition: (id: string) => void;
  onRoll: (expr: string, origem?: string, rotulo?: string) => void;
  onRollIniciativa: () => void;
};

export const ThreatCard = ({ ameaca, onUpdate, onDelete, onClone, onSaveModel, onToggleCondition, onRoll, onRollIniciativa }: Props) => {
  const morta = ameaca.pvAtual <= 0;
  const [showImgInput, setShowImgInput] = useState(false);

  const calcMod = (valorStr: string) => { const v = parseInt(valorStr); return isNaN(v) ? 0 : Math.floor((v - 10) / 2); };
  const formatMod = (valorStr: string) => { const m = calcMod(valorStr); return m >= 0 ? `+${m}` : `${m}`; };
  const updateAtributo = (key: string, val: string) => onUpdate(ameaca.id, "atributos", { ...ameaca.atributos, [key]: val });
  
  const addAcao = () => onUpdate(ameaca.id, "acoes", [...ameaca.acoes, { id: crypto.randomUUID(), nome: "Nova Ação", tipo: "Padrão", teste: "", dano: "", descricao: "" }]);
  const updateAcao = (id: string, k: keyof Acao, v: string) => onUpdate(ameaca.id, "acoes", ameaca.acoes.map(a => a.id === id ? { ...a, [k]: v } : a));
  const removeAcao = (id: string) => onUpdate(ameaca.id, "acoes", ameaca.acoes.filter(a => a.id !== id));

  const rolarComContexto = (e: React.MouseEvent, expr: string, rotulo: string) => {
      e.stopPropagation(); // Impede cliques acidentais
      e.preventDefault();

      let formula = expr.trim();
      // Lógica inteligente: se for "+10" vira "1d20+10". Se for "10" (e for teste), vira "1d20+10".
      if (rotulo.includes("Teste") || rotulo.includes("Atq")) {
          if (formula.startsWith('+') || formula.startsWith('-')) formula = `1d20${formula}`;
          else if (/^\d+$/.test(formula)) formula = `1d20+${formula}`;
      }
      // Se for dano e for só número (ex: 5), mantemos 5 (rolarDados deve tratar ou falhar, mas geralmente dano tem dado)
      
      onRoll(formula, ameaca.nome, rotulo);
  };

  return (
    <div className={`bg-gray-900 rounded-2xl border shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl ${ameaca.iniciativaAtual !== undefined ? 'border-red-800 shadow-red-900/20' : 'border-gray-800'} ${morta ? 'opacity-50 grayscale border-gray-700' : ''}`}>
      
      {/* HEADER VISUAL */}
      <div className="relative group/header">
        {ameaca.imagemUrl && (
           <div className="absolute inset-0 z-0 opacity-20 transition-opacity group-hover/header:opacity-30">
              <img src={ameaca.imagemUrl} alt={ameaca.nome} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-gray-900/60 to-gray-900"></div>
           </div>
        )}

        <div className="p-5 bg-gray-800/80 border-b border-gray-800 relative z-10 backdrop-blur-md">
            {/* Badge Iniciativa */}
            <div className="absolute top-0 left-0 z-20">
                {ameaca.iniciativaAtual !== undefined ? (
                    <div onClick={onRollIniciativa} className="bg-red-700 text-white text-xs font-bold px-3 py-1.5 rounded-br-lg shadow-md cursor-pointer hover:bg-red-600 transition border-b border-r border-red-900 backdrop-blur-md flex flex-col items-center leading-none">
                      <span className="text-[9px] opacity-80 uppercase mb-0.5">Inic</span><span className="text-lg">{ameaca.iniciativaAtual}</span>
                    </div>
                ) : (
                    <button onClick={onRollIniciativa} className="bg-gray-700/80 text-gray-300 text-xs font-bold px-3 py-2 rounded-br-lg shadow-md hover:bg-yellow-600 hover:text-white transition flex items-center gap-2 border-b border-r border-gray-600 backdrop-blur-md"><span>⚡ Rolar</span></button>
                )}
            </div>

            {/* Controles */}
            <div className="absolute top-3 right-3 flex gap-2 bg-black/40 rounded-lg p-1.5 backdrop-blur-md opacity-100 md:opacity-0 group-hover/header:opacity-100 transition-opacity">
              <button onClick={() => setShowImgInput(!showImgInput)} className="text-gray-400 hover:text-blue-400 p-1" title="Imagem">🖼️</button>
              <button onClick={() => onSaveModel(ameaca)} className="text-gray-400 hover:text-yellow-400 p-1" title="Salvar">💾</button>
              <button onClick={() => onDelete(ameaca.id)} className="text-gray-400 hover:text-red-500 p-1" title="Excluir">🗑️</button>
            </div>

            {showImgInput && (<div className="mt-8 mb-4 animate-in fade-in slide-in-from-top-2"><input className="w-full bg-black/60 text-sm text-blue-200 border border-blue-900/50 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Link da imagem..." value={ameaca.imagemUrl || ""} onChange={(e) => onUpdate(ameaca.id, "imagemUrl", e.target.value)} autoFocus /></div>)}
            
            <div className={`flex items-start gap-4 ${showImgInput ? '' : 'mt-4 pl-12 md:pl-0'}`}>
                {ameaca.imagemUrl ? <img src={ameaca.imagemUrl} className="w-16 h-16 rounded-full border-2 border-red-500/50 object-cover shadow-lg bg-gray-900 hidden md:block" alt="" /> : <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-gray-700 hidden md:flex items-center justify-center text-2xl text-gray-500 shadow-inner">👾</div>}
                <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                        <input className="bg-transparent text-2xl font-black w-full text-white focus:outline-none focus:border-b focus:border-red-500 placeholder-gray-500 drop-shadow-md truncate" value={ameaca.nome} onChange={(e) => onUpdate(ameaca.id, "nome", e.target.value)} placeholder="Nome da Ameaça" />
                        <div className="bg-yellow-900/40 text-yellow-200 text-xs font-bold px-2 py-1 rounded border border-yellow-700/50 shadow-sm whitespace-nowrap flex items-center gap-1"><span className="text-yellow-500 uppercase text-[9px]">ND</span><input className="bg-transparent w-6 text-center focus:outline-none" value={ameaca.nd || "?"} onChange={(e) => onUpdate(ameaca.id, "nd", e.target.value)} /></div>
                    </div>
                    <input className="bg-transparent text-sm font-mono text-gray-400 w-full focus:outline-none focus:text-gray-200" value={ameaca.tipo || ""} onChange={(e) => onUpdate(ameaca.id, "tipo", e.target.value)} placeholder="Tipo / Tamanho" />
                </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4 min-h-[28px]">
              {ameaca.condicoes.map(c => <span key={c} title={CONDICOES_DB.find(db => db.nome === c)?.efeito} className="px-2 py-1 rounded-md bg-red-950/60 border border-red-800 text-xs text-red-200 cursor-help font-bold uppercase tracking-wide hover:bg-red-900 transition backdrop-blur-sm shadow-sm flex items-center gap-1">{c}</span>)}
              <button onClick={() => onToggleCondition(ameaca.id)} className="px-2 py-1 rounded-md bg-gray-800/60 border border-gray-600 text-xs text-gray-400 hover:text-white hover:border-gray-400 transition backdrop-blur-sm flex items-center gap-1 hover:bg-gray-700">+ <span className="hidden sm:inline">Condição</span></button>
            </div>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-6 flex-grow bg-gray-950">
        <div className="flex gap-4">
          <StatBox label="Vida (PV)" icon="❤️" cor="red" valor={ameaca.pvAtual} max={ameaca.pvMax} onChange={(v) => onUpdate(ameaca.id, "pvAtual", v)} onMaxChange={(v) => onUpdate(ameaca.id, "pvMax", v)} />
          <StatBox label="Mana (PM)" icon="💧" cor="blue" valor={ameaca.pmAtual} max={ameaca.pmMax} onChange={(v) => onUpdate(ameaca.id, "pmAtual", v)} onMaxChange={(v) => onUpdate(ameaca.id, "pmMax", v)} />
          <StatBox label="Defesa" icon="🛡️" cor="gray" valor={ameaca.defesa} onChange={(v) => onUpdate(ameaca.id, "defesa", v)} />
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-500 bg-gray-900 p-2 rounded-lg border border-gray-800">
            <span className="text-lg">🦶</span> <input className="bg-transparent flex-grow text-gray-300 focus:outline-none font-medium" value={ameaca.deslocamento || "9m"} onChange={(e) => onUpdate(ameaca.id, "deslocamento", e.target.value)} placeholder="Deslocamento" />
        </div>

        {/* LISTA DE AÇÕES VISUAL (CORRIGIDA) */}
        <div>
          <div className="flex justify-between items-center mb-3 px-1">
            <label className="text-xs text-gray-500 font-bold uppercase tracking-wider">Ações & Habilidades</label>
            <button onClick={addAcao} className="text-xs bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded border border-gray-700 transition shadow-sm">+ Adicionar</button>
          </div>
          
          <div className="flex flex-col gap-3">
            {ameaca.acoes.map((acao) => (
              <div key={acao.id} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden group/acao hover:border-gray-700 transition shadow-sm">
                
                {/* Linha 1: Título e Tipo */}
                <div className="flex justify-between items-center bg-gray-950/50 p-2 border-b border-gray-800/50">
                    <div className="flex items-center gap-2 flex-grow">
                        <input className="font-bold text-sm text-red-200 bg-transparent focus:outline-none w-full placeholder-red-900/50" value={acao.nome} onChange={e => updateAcao(acao.id, 'nome', e.target.value)} placeholder="Nome da Ação" />
                    </div>
                    <div className="flex items-center gap-2">
                        <input className="text-[10px] bg-gray-900 text-gray-400 border border-gray-800 rounded px-2 py-0.5 w-20 text-center focus:border-blue-500 focus:outline-none uppercase tracking-wide" value={acao.tipo} onChange={e => updateAcao(acao.id, 'tipo', e.target.value)} placeholder="TIPO" />
                        <button onClick={() => removeAcao(acao.id)} className="text-gray-600 hover:text-red-500 w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover/acao:opacity-100 transition">✕</button>
                    </div>
                </div>

                {/* Linha 2: Mecânica (Testes e Dano) - CENTRALIZADA E FUNCIONAL */}
                <div className="flex gap-2 p-2 bg-gray-900/30">
                    
                    {/* Grupo Ataque */}
                    <div className="flex-1 relative h-8 bg-gray-950 border border-gray-800 rounded flex items-center">
                        <span className="absolute left-2 text-[10px] text-gray-500 font-bold pointer-events-none">ATQ</span>
                        <input 
                            className={`w-full h-full bg-transparent text-xs text-center font-bold px-8 focus:outline-none ${acao.teste ? 'text-yellow-400' : 'text-gray-600'}`} 
                            value={acao.teste} onChange={e => updateAcao(acao.id, 'teste', e.target.value)} placeholder="+0" 
                        />
                        {acao.teste && (
                            <button 
                                type="button"
                                onClick={(e) => rolarComContexto(e, acao.teste, `${acao.nome} (Teste)`)} 
                                className="absolute right-0 top-0 h-full w-8 flex items-center justify-center bg-gray-900 hover:bg-yellow-600 text-yellow-500 hover:text-white transition border-l border-gray-800 z-10" 
                                title="Rolar Ataque"
                            >
                                🎲
                            </button>
                        )}
                    </div>

                    {/* Grupo Dano */}
                    <div className="flex-[1.5] relative h-8 bg-gray-950 border border-gray-800 rounded flex items-center">
                        <span className="absolute left-2 text-[10px] text-gray-500 font-bold pointer-events-none">DANO</span>
                        <input 
                            className={`w-full h-full bg-transparent text-xs text-center font-bold px-8 focus:outline-none ${acao.dano ? 'text-red-400' : 'text-gray-600'}`} 
                            value={acao.dano} onChange={e => updateAcao(acao.id, 'dano', e.target.value)} placeholder="-" 
                        />
                        {acao.dano && (
                            <button 
                                type="button"
                                onClick={(e) => rolarComContexto(e, acao.dano, `${acao.nome} (Dano)`)} 
                                className="absolute right-0 top-0 h-full w-8 flex items-center justify-center bg-gray-900 hover:bg-red-600 text-red-500 hover:text-white transition border-l border-gray-800 z-10" 
                                title="Rolar Dano"
                            >
                                🎲
                            </button>
                        )}
                    </div>
                </div>
                
                {/* Linha 3: Descrição */}
                <div className="px-2 pb-2">
                    <textarea className="text-xs text-gray-400 bg-transparent resize-none focus:outline-none focus:text-gray-200 w-full min-h-[1.5em] leading-relaxed pl-1 border-l-2 border-gray-800 focus:border-gray-600" 
                        value={acao.descricao} onChange={e => updateAcao(acao.id, 'descricao', e.target.value)} placeholder="Descrição do efeito..." rows={Math.max(1, Math.min(5, acao.descricao.split('\n').length))} />
                </div>
              </div>
            ))}
            {ameaca.acoes.length === 0 && <div className="text-sm text-gray-600 text-center py-6 border-2 border-dashed border-gray-800 rounded-lg hover:border-gray-700 cursor-pointer transition" onClick={addAcao}>+ Adicionar primeira ação</div>}
          </div>
        </div>

        <div>
          <label className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2 block">Perícias</label>
          <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden group/pericias focus-within:border-blue-500 transition">
             <div className="bg-gray-950/50 p-2 border-b border-gray-800/50 min-h-[30px]">
                <DiceText texto={ameaca.pericias || ""} onRolar={(expr) => onRoll(expr, ameaca.nome, "Perícia")} />
             </div>
             <textarea className="w-full bg-gray-900 p-3 text-sm text-gray-400 focus:outline-none h-20 resize-none" value={ameaca.pericias} onChange={(e) => onUpdate(ameaca.id, "pericias", e.target.value)} />
          </div>
        </div>
      </div>

      {/* FOOTER: ATRIBUTOS (Sem balão azul) */}
      <div className="grid grid-cols-6 gap-px bg-gray-800 border-t border-gray-800">
         {['for', 'des', 'con', 'int', 'sab', 'car'].map(attr => {
             const valorStr = (ameaca.atributos as any)[attr];
             const mod = formatMod(valorStr);
             return (
                 <div key={attr} className="flex flex-col items-center justify-center p-3 bg-gray-950 hover:bg-gray-900 transition cursor-default relative group/attr">
                     <button onClick={(e) => rolarComContexto(e, `1d20${mod}`, `Teste de ${attr.toUpperCase()}`)} className="text-[10px] uppercase font-bold text-gray-600 mb-1 tracking-widest hover:text-red-400 transition" title={`Rolar ${attr.toUpperCase()} (${mod})`}>
                        {attr}
                     </button>
                     <input className="w-full bg-transparent text-center font-bold text-gray-300 text-lg focus:text-white focus:outline-none" value={valorStr} onChange={(e) => updateAtributo(attr, e.target.value)} />
                 </div>
             );
         })}
      </div>

      <div className="bg-gray-900 p-2 flex justify-center border-t border-gray-800">
          <button onClick={() => onClone(ameaca)} className="text-xs font-bold text-gray-600 hover:text-white flex items-center gap-2 py-1 px-4 rounded hover:bg-gray-800 transition">📑 Duplicar Ameaça</button>
      </div>
    </div>
  );
};