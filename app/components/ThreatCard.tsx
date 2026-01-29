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
  onRoll: (expr: string) => void;
  onRollIniciativa: () => void;
};

export const ThreatCard = ({ ameaca, onUpdate, onDelete, onClone, onSaveModel, onToggleCondition, onRoll, onRollIniciativa }: Props) => {
  const morta = ameaca.pvAtual <= 0;
  const [showImgInput, setShowImgInput] = useState(false);

  // Helper para atualizar atributos
  const updateAtributo = (key: string, val: string) => onUpdate(ameaca.id, "atributos", { ...ameaca.atributos, [key]: val });

  // Helpers para ações
  const addAcao = () => {
      const nova: Acao = { id: crypto.randomUUID(), nome: "Nova Ação", tipo: "Padrão", teste: "", dano: "", descricao: "" };
      onUpdate(ameaca.id, "acoes", [...ameaca.acoes, nova]);
  };
  const updateAcao = (acaoId: string, campo: keyof Acao, val: string) => {
      const novasAcoes = ameaca.acoes.map(a => a.id === acaoId ? { ...a, [campo]: val } : a);
      onUpdate(ameaca.id, "acoes", novasAcoes);
  };
  const removeAcao = (acaoId: string) => {
      onUpdate(ameaca.id, "acoes", ameaca.acoes.filter(a => a.id !== acaoId));
  };

  return (
    <div className={`bg-gray-900 rounded-2xl border shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl ${ameaca.iniciativaAtual !== undefined ? 'border-red-800 shadow-red-900/20' : 'border-gray-800'} ${morta ? 'opacity-50 grayscale border-gray-700' : ''}`}>
      
      {/* HEADER VISUAL */}
      <div className="relative group/header">
        {/* Imagem de Fundo com Fade */}
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
                      <span className="text-[9px] opacity-80 uppercase mb-0.5">Inic</span>
                      <span className="text-lg">{ameaca.iniciativaAtual}</span>
                    </div>
                ) : (
                    <button onClick={onRollIniciativa} className="bg-gray-700/80 text-gray-300 text-xs font-bold px-3 py-2 rounded-br-lg shadow-md hover:bg-yellow-600 hover:text-white transition flex items-center gap-2 border-b border-r border-gray-600 backdrop-blur-md group/btn">
                      <span>⚡ Rolar</span>
                    </button>
                )}
            </div>

            {/* Controles (Só aparecem no hover ou mobile) */}
            <div className="absolute top-3 right-3 flex gap-2 bg-black/40 rounded-lg p-1.5 backdrop-blur-md opacity-100 md:opacity-0 group-hover/header:opacity-100 transition-opacity">
              <button onClick={() => setShowImgInput(!showImgInput)} className="text-gray-400 hover:text-blue-400 p-1 transition" title="Imagem">🖼️</button>
              <button onClick={() => onSaveModel(ameaca)} className="text-gray-400 hover:text-yellow-400 p-1 transition" title="Salvar Modelo">💾</button>
              <button onClick={() => onDelete(ameaca.id)} className="text-gray-400 hover:text-red-500 p-1 transition" title="Excluir">🗑️</button>
            </div>

            {/* Input Imagem */}
            {showImgInput && (
                <div className="mt-8 mb-4 animate-in fade-in slide-in-from-top-2">
                    <input className="w-full bg-black/60 text-sm text-blue-200 border border-blue-900/50 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Cole o link da imagem aqui..." value={ameaca.imagemUrl || ""} onChange={(e) => onUpdate(ameaca.id, "imagemUrl", e.target.value)} autoFocus />
                </div>
            )}
            
            {/* Identificação Principal */}
            <div className={`flex items-start gap-4 ${showImgInput ? '' : 'mt-4 pl-12 md:pl-0' /* Padding left no mobile pra não bater na inic */}`}>
                {ameaca.imagemUrl ? (
                    <img src={ameaca.imagemUrl} className="w-16 h-16 rounded-full border-2 border-red-500/50 object-cover shadow-lg bg-gray-900 hidden md:block" alt="" />
                ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-gray-700 hidden md:flex items-center justify-center text-2xl text-gray-500 shadow-inner">👾</div>
                )}
                
                <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                        <input className="bg-transparent text-2xl font-black w-full text-white focus:outline-none focus:border-b focus:border-red-500 placeholder-gray-500 drop-shadow-md truncate" value={ameaca.nome} onChange={(e) => onUpdate(ameaca.id, "nome", e.target.value)} placeholder="Nome da Ameaça" />
                        
                        <div className="bg-yellow-900/40 text-yellow-200 text-xs font-bold px-2 py-1 rounded border border-yellow-700/50 shadow-sm whitespace-nowrap flex items-center gap-1">
                            <span className="text-yellow-500 uppercase text-[9px]">ND</span>
                            <input className="bg-transparent w-6 text-center focus:outline-none" value={ameaca.nd || "?"} onChange={(e) => onUpdate(ameaca.id, "nd", e.target.value)} />
                        </div>
                    </div>
                    <input className="bg-transparent text-sm font-mono text-gray-400 w-full focus:outline-none focus:text-gray-200" value={ameaca.tipo || ""} onChange={(e) => onUpdate(ameaca.id, "tipo", e.target.value)} placeholder="Tipo / Tamanho (Ex: Monstro Grande)" />
                </div>
            </div>
            
            {/* Condições */}
            <div className="flex flex-wrap gap-2 mt-4 min-h-[28px]">
              {ameaca.condicoes.map(c => (
                <span key={c} title={CONDICOES_DB.find(db => db.nome === c)?.efeito} className="px-2 py-1 rounded-md bg-red-950/60 border border-red-800 text-xs text-red-200 cursor-help font-bold uppercase tracking-wide hover:bg-red-900 transition backdrop-blur-sm shadow-sm flex items-center gap-1">
                    {c}
                </span>
              ))}
              <button onClick={() => onToggleCondition(ameaca.id)} className="px-2 py-1 rounded-md bg-gray-800/60 border border-gray-600 text-xs text-gray-400 hover:text-white hover:border-gray-400 transition backdrop-blur-sm flex items-center gap-1 hover:bg-gray-700">
                + <span className="hidden sm:inline">Condição</span>
              </button>
            </div>
        </div>
      </div>

      {/* CORPO DO CARD */}
      <div className="p-5 flex flex-col gap-6 flex-grow bg-gray-950">
        
        {/* Status Bars */}
        <div className="flex gap-4">
          <StatBox label="Vida (PV)" icon="❤️" cor="red" valor={ameaca.pvAtual} max={ameaca.pvMax} onChange={(v: number) => onUpdate(ameaca.id, "pvAtual", v)} onMaxChange={(v: number) => onUpdate(ameaca.id, "pvMax", v)} />
          <StatBox label="Mana (PM)" icon="💧" cor="blue" valor={ameaca.pmAtual} max={ameaca.pmMax} onChange={(v: number) => onUpdate(ameaca.id, "pmAtual", v)} onMaxChange={(v: number) => onUpdate(ameaca.id, "pmMax", v)} />
          <StatBox label="Defesa" icon="🛡️" cor="gray" valor={ameaca.defesa} onChange={(v: number) => onUpdate(ameaca.id, "defesa", v)} />
        </div>

        {/* Deslocamento */}
        <div className="flex items-center gap-3 text-sm text-gray-500 bg-gray-900 p-2 rounded-lg border border-gray-800">
            <span className="text-lg">🦶</span> 
            <input className="bg-transparent flex-grow text-gray-300 focus:outline-none font-medium" value={ameaca.deslocamento || "9m"} onChange={(e) => onUpdate(ameaca.id, "deslocamento", e.target.value)} placeholder="Deslocamento" />
        </div>

        {/* === LISTA DE AÇÕES (TABELA SIMÉTRICA) === */}
        <div>
          <div className="flex justify-between items-center mb-2 px-1">
            <label className="text-xs text-gray-500 font-bold uppercase tracking-wider">Ações & Habilidades</label>
            <button onClick={addAcao} className="text-xs bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded border border-gray-700 transition shadow-sm">+ Adicionar</button>
          </div>
          
          <div className="flex flex-col gap-3">
            {ameaca.acoes.map((acao) => (
              <div key={acao.id} className="bg-gray-900 border border-gray-800 rounded-lg p-3 flex flex-col gap-2 group/acao hover:border-gray-600 transition shadow-sm relative">
                
                {/* Botão de Excluir Ação (Absoluto no canto) */}
                <button onClick={() => removeAcao(acao.id)} className="absolute -top-2 -right-2 bg-gray-800 border border-gray-600 text-gray-400 hover:text-red-500 hover:border-red-500 rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover/acao:opacity-100 transition shadow-md z-10">✕</button>

                {/* GRID DE CAMPOS (Aqui está a simetria) */}
                <div className="grid grid-cols-12 gap-2 items-start">
                    
                    {/* 1. Nome (5 colunas) */}
                    <div className="col-span-12 md:col-span-5">
                        <input className="font-bold text-sm text-red-200 bg-transparent focus:outline-none w-full placeholder-red-900/50" value={acao.nome} onChange={e => updateAcao(acao.id, 'nome', e.target.value)} placeholder="Nome da Ação" />
                    </div>

                    {/* 2. Tipo (2 colunas) */}
                    <div className="col-span-3 md:col-span-2">
                        <input className="text-xs bg-gray-950 text-gray-400 border border-gray-800 rounded px-2 py-1 w-full text-center focus:border-blue-500 focus:outline-none" value={acao.tipo} onChange={e => updateAcao(acao.id, 'tipo', e.target.value)} placeholder="Tipo" />
                    </div>

                    {/* 3. Teste (2 colunas) */}
                    <div className="col-span-3 md:col-span-2">
                        <input className={`text-xs bg-gray-950 border border-gray-800 rounded px-2 py-1 w-full text-center focus:border-yellow-500 focus:outline-none ${acao.teste ? 'text-yellow-500 font-bold cursor-pointer hover:bg-gray-800' : 'text-gray-600'}`} 
                            value={acao.teste} onChange={e => updateAcao(acao.id, 'teste', e.target.value)} placeholder="Atq/CD" 
                            title="Clique para rolar" onClick={(e) => { if(acao.teste.includes('+')) onRoll(`1d20${acao.teste}`) }}
                        />
                    </div>

                    {/* 4. Dano (3 colunas) */}
                    <div className="col-span-6 md:col-span-3">
                        <input className={`text-xs bg-gray-950 border border-gray-800 rounded px-2 py-1 w-full text-center focus:border-red-500 focus:outline-none ${acao.dano ? 'text-red-400 font-bold cursor-pointer hover:bg-gray-800' : 'text-gray-600'}`} 
                            value={acao.dano} onChange={e => updateAcao(acao.id, 'dano', e.target.value)} placeholder="Dano" 
                            onClick={(e) => { if(acao.dano) onRoll(acao.dano) }}
                        />
                    </div>
                </div>
                
                {/* Descrição (Full Width) */}
                <textarea className="text-xs text-gray-400 bg-transparent resize-none focus:outline-none focus:text-gray-200 w-full min-h-[1.5em] leading-relaxed pl-1 border-l-2 border-gray-800 focus:border-gray-600" 
                    value={acao.descricao} onChange={e => updateAcao(acao.id, 'descricao', e.target.value)} placeholder="Descrição do efeito..." rows={Math.max(2, Math.min(5, acao.descricao.split('\n').length))} />
              </div>
            ))}
            {ameaca.acoes.length === 0 && <div className="text-sm text-gray-600 text-center py-6 border-2 border-dashed border-gray-800 rounded-lg hover:border-gray-700 cursor-pointer transition" onClick={addAcao}>+ Adicionar primeira ação</div>}
          </div>
        </div>

        {/* Perícias (Text Area mais limpa) */}
        <div>
          <label className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2 block">Perícias</label>
          <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden group/pericias focus-within:border-blue-500 transition">
             <div className="bg-gray-950/50 p-2 border-b border-gray-800/50 min-h-[30px]">
                <DiceText texto={ameaca.pericias || ""} onRolar={onRoll} />
             </div>
             <textarea className="w-full bg-gray-900 p-3 text-sm text-gray-400 focus:outline-none h-20 resize-none" value={ameaca.pericias} onChange={(e) => onUpdate(ameaca.id, "pericias", e.target.value)} />
          </div>
        </div>
      </div>

      {/* FOOTER: ATRIBUTOS (Grade Maior) */}
      <div className="grid grid-cols-6 gap-px bg-gray-800 border-t border-gray-800">
         {['for', 'des', 'con', 'int', 'sab', 'car'].map(attr => (
             <div key={attr} className="flex flex-col items-center justify-center p-3 bg-gray-950 hover:bg-gray-900 transition cursor-default">
                 <span className="text-[10px] uppercase font-bold text-gray-600 mb-1 tracking-widest">{attr}</span>
                 <input 
                    className="w-full bg-transparent text-center font-bold text-gray-300 text-lg focus:text-white focus:outline-none" 
                    value={(ameaca.atributos as any)[attr]} 
                    onChange={(e) => updateAtributo(attr, e.target.value)}
                 />
             </div>
         ))}
      </div>

      {/* Botão de Duplicar no final */}
      <div className="bg-gray-900 p-2 flex justify-center border-t border-gray-800">
          <button onClick={() => onClone(ameaca)} className="text-xs font-bold text-gray-600 hover:text-white flex items-center gap-2 py-1 px-4 rounded hover:bg-gray-800 transition">
              📑 Duplicar Ameaça
          </button>
      </div>
    </div>
  );
};