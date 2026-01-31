import { Ameaca, Acao, Magia, Aprimoramento } from "../types/game";
import { CONDICOES_DB } from "../data/condicoes";
import { StatBox } from "./ui/StatBox";
import { DiceText } from "./ui/DiceText";
import { useState } from "react";
import { InputSync } from "./ui/InputSync";
import { UploadButton } from "./ui/UploadButton";

type Props = {
  ameaca: Ameaca;
  onUpdate: (id: string, campo: string, valor: any) => void;
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
  
  // Ações
  const addAcao = () => onUpdate(ameaca.id, "acoes", [...ameaca.acoes, { id: crypto.randomUUID(), nome: "Nova Ação", tipo: "Padrão", teste: "", dano: "", descricao: "" }]);
  const updateAcao = (id: string, k: keyof Acao, v: string) => onUpdate(ameaca.id, "acoes", ameaca.acoes.map(a => a.id === id ? { ...a, [k]: v } : a));
  const removeAcao = (id: string) => onUpdate(ameaca.id, "acoes", ameaca.acoes.filter(a => a.id !== id));

  // --- LÓGICA DE MAGIAS ---
  const addMagia = () => {
      const nova: Magia = { 
          id: crypto.randomUUID(), nome: "Nova Magia", pm: "1", circulo: "1º", 
          execucao: "Padrão", alcance: "Curto", area: "", alvo: "", 
          duracao: "Instantânea", resistencia: "", efeito: "", danoBase: "", aprimoramentos: []
      };
      const magiasAtuais = ameaca.magias || [];
      onUpdate(ameaca.id, "magias", [...magiasAtuais, nova]);
  };
  
  const updateMagia = (id: string, k: keyof Magia, v: any) => {
      const magiasAtuais = ameaca.magias || [];
      onUpdate(ameaca.id, "magias", magiasAtuais.map(m => m.id === id ? { ...m, [k]: v } : m));
  };
  
  const removeMagia = (id: string) => {
      const magiasAtuais = ameaca.magias || [];
      onUpdate(ameaca.id, "magias", magiasAtuais.filter(m => m.id !== id));
  };

  // --- LÓGICA DE APRIMORAMENTOS (UPGRADES) ---
  const addAprimoramento = (magiaId: string) => {
      const magiasAtuais = ameaca.magias || [];
      const magiaAlvo = magiasAtuais.find(m => m.id === magiaId);
      if(!magiaAlvo) return;

      const novoUpgrade: Aprimoramento = {
          id: crypto.randomUUID(),
          custo: "+1",
          descricao: "",
          roll: ""
      };

      const upgradesAtuais = magiaAlvo.aprimoramentos || [];
      updateMagia(magiaId, "aprimoramentos", [...upgradesAtuais, novoUpgrade]);
  };

  const updateAprimoramento = (magiaId: string, upgradeId: string, k: keyof Aprimoramento, v: string) => {
      const magiasAtuais = ameaca.magias || [];
      const magiaAlvo = magiasAtuais.find(m => m.id === magiaId);
      if(!magiaAlvo) return;

      const upgradesAtualizados = (magiaAlvo.aprimoramentos || []).map(up => up.id === upgradeId ? { ...up, [k]: v } : up);
      updateMagia(magiaId, "aprimoramentos", upgradesAtualizados);
  };

  const removeAprimoramento = (magiaId: string, upgradeId: string) => {
      const magiasAtuais = ameaca.magias || [];
      const magiaAlvo = magiasAtuais.find(m => m.id === magiaId);
      if(!magiaAlvo) return;

      const upgradesAtualizados = (magiaAlvo.aprimoramentos || []).filter(up => up.id !== upgradeId);
      updateMagia(magiaId, "aprimoramentos", upgradesAtualizados);
  };

  const rolarComContexto = (e: React.MouseEvent, expr: string, rotulo: string) => {
      e.stopPropagation(); e.preventDefault();
      let formula = expr.trim();
      if (rotulo.includes("Teste") || rotulo.includes("Atq") || rotulo.includes("Perícia")) {
          if (formula.startsWith('+') || formula.startsWith('-')) formula = `1d20${formula}`;
          else if (/^\d+$/.test(formula)) formula = `1d20+${formula}`;
      }
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
            <div className="absolute top-0 left-0 z-20">
                {ameaca.iniciativaAtual !== undefined ? (
                    <div onClick={onRollIniciativa} className="bg-red-700 text-white text-xs font-bold px-3 py-1.5 rounded-br-lg shadow-md cursor-pointer hover:bg-red-600 transition border-b border-r border-red-900 backdrop-blur-md flex flex-col items-center leading-none">
                      <span className="text-[9px] opacity-80 uppercase mb-0.5">Inic</span><span className="text-lg">{ameaca.iniciativaAtual}</span>
                    </div>
                ) : (
                    <button onClick={onRollIniciativa} className="bg-gray-700/80 text-gray-300 text-xs font-bold px-3 py-2 rounded-br-lg shadow-md hover:bg-yellow-600 hover:text-white transition flex items-center gap-2 border-b border-r border-gray-600 backdrop-blur-md"><span>⚡ Rolar</span></button>
                )}
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-yellow-900/80 text-yellow-200 text-xs font-bold px-3 py-1 rounded-b-lg border-b border-r border-l border-yellow-700/50 shadow-md backdrop-blur flex items-center gap-1 group/nd hover:bg-yellow-800 transition">
                 <span className="text-yellow-500 uppercase text-[9px] mr-1">ND</span>
                 <InputSync className="bg-transparent w-8 text-center focus:outline-none focus:text-white cursor-pointer" value={ameaca.nd || "?"} onUpdate={(v) => onUpdate(ameaca.id, "nd", v)} />
            </div>

            <div className="absolute top-3 right-3 flex gap-2 bg-black/40 rounded-lg p-1.5 backdrop-blur-md opacity-100 md:opacity-0 group-hover/header:opacity-100 transition-opacity z-30">
              <button onClick={() => setShowImgInput(!showImgInput)} className="text-gray-400 hover:text-blue-400 p-1" title="Imagem">🖼️</button>
              <button onClick={() => onSaveModel(ameaca)} className="text-gray-400 hover:text-yellow-400 p-1" title="Salvar">💾</button>
              <button onClick={() => onDelete(ameaca.id)} className="text-gray-400 hover:text-red-500 p-1" title="Excluir">🗑️</button>
            </div>

            {showImgInput && (
              <div className="mt-8 mb-4 animate-in fade-in slide-in-from-top-2 flex gap-2 items-stretch relative z-30">
                  <InputSync 
                    className="w-full bg-black/60 text-sm text-blue-200 border border-blue-900/50 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-colors" 
                    placeholder="Link da imagem..." value={ameaca.imagemUrl || ""} onUpdate={(v) => onUpdate(ameaca.id, "imagemUrl", v)} autoFocus 
                  />
                  <UploadButton compact onUploadComplete={(id) => onUpdate(ameaca.id, "imagemStorageId", id)} className="bg-blue-900 hover:bg-blue-800 border border-blue-700 text-white px-4 rounded-lg flex items-center justify-center transition"/>
                  {(ameaca.imagemUrl || ameaca.imagemStorageId) && (
                    <button onClick={(e) => { e.preventDefault(); onUpdate(ameaca.id, "RESET_IMAGEM", null); }} className="bg-red-900/50 hover:bg-red-600 border border-red-800 text-white px-4 rounded-lg flex items-center justify-center transition" title="Remover Imagem">🗑️</button>
                  )}
              </div>
            )}
            
            <div className={`flex items-start gap-4 ${showImgInput ? '' : 'mt-4 pl-12 md:pl-0'}`}>
                {ameaca.imagemUrl ? <img src={ameaca.imagemUrl} className="w-16 h-16 rounded-full border-2 border-red-500/50 object-cover shadow-lg bg-gray-900 hidden md:block" alt="" /> : <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-gray-700 hidden md:flex items-center justify-center text-2xl text-gray-500 shadow-inner">👾</div>}
                <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                        <InputSync className="bg-transparent text-2xl font-black w-full text-white focus:outline-none focus:border-b focus:border-red-500 placeholder-gray-500 drop-shadow-md truncate" value={ameaca.nome} onUpdate={(v) => onUpdate(ameaca.id, "nome", v)} placeholder="Nome da Ameaça" />
                    </div>
                    <InputSync className="bg-transparent text-sm font-mono text-gray-400 w-full focus:outline-none focus:text-gray-200" value={ameaca.tipo || ""} onUpdate={(v) => onUpdate(ameaca.id, "tipo", v)} placeholder="Tipo / Tamanho" />
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
            <span className="text-lg">🦶</span> <InputSync className="bg-transparent flex-grow text-gray-300 focus:outline-none font-medium" value={ameaca.deslocamento || "9m"} onUpdate={(v) => onUpdate(ameaca.id, "deslocamento", v)} placeholder="Deslocamento" />
        </div>

        {/* AÇÕES */}
        <div>
          <div className="flex justify-between items-center mb-3 px-1">
            <label className="text-xs text-gray-500 font-bold uppercase tracking-wider">Ações & Habilidades</label>
            <button onClick={addAcao} className="text-xs bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded border border-gray-700 transition shadow-sm">+ Adicionar</button>
          </div>
          <div className="flex flex-col gap-3">
            {ameaca.acoes.map((acao) => (
              <div key={acao.id} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden group/acao hover:border-gray-700 transition shadow-sm">
                <div className="flex justify-between items-center bg-gray-950/50 p-2 border-b border-gray-800/50">
                    <div className="flex items-center gap-2 flex-grow">
                        <InputSync className="font-bold text-sm text-red-200 bg-transparent focus:outline-none w-full placeholder-red-900/50" value={acao.nome} onUpdate={v => updateAcao(acao.id, 'nome', v)} placeholder="Nome da Ação" />
                    </div>
                    <div className="flex items-center gap-2">
                        <InputSync className="text-[10px] bg-gray-900 text-gray-400 border border-gray-800 rounded px-2 py-0.5 w-20 text-center focus:border-blue-500 focus:outline-none uppercase tracking-wide" value={acao.tipo} onUpdate={v => updateAcao(acao.id, 'tipo', v)} placeholder="TIPO" />
                        <button onClick={() => removeAcao(acao.id)} className="text-gray-600 hover:text-red-500 w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover/acao:opacity-100 transition">✕</button>
                    </div>
                </div>
                <div className="flex gap-2 p-2 bg-gray-900/30">
                    <div className="flex-1 relative h-8 bg-gray-950 border border-gray-800 rounded flex items-center">
                        <span className="absolute left-2 text-[10px] text-gray-500 font-bold pointer-events-none">ATQ</span>
                        <InputSync className={`w-full h-full bg-transparent text-xs text-center font-bold px-8 focus:outline-none ${acao.teste ? 'text-yellow-400' : 'text-gray-600'}`} value={acao.teste} onUpdate={v => updateAcao(acao.id, 'teste', v)} placeholder="+0" />
                        {acao.teste && (
                            <button type="button" onClick={(e) => rolarComContexto(e, acao.teste, `${acao.nome} (Teste)`)} className="absolute right-0 top-0 h-full w-8 flex items-center justify-center bg-gray-900 hover:bg-yellow-600 text-yellow-500 hover:text-white transition border-l border-gray-800 z-10" title="Rolar Ataque">🎲</button>
                        )}
                    </div>
                    <div className="flex-[1.5] relative h-8 bg-gray-950 border border-gray-800 rounded flex items-center">
                        <span className="absolute left-2 text-[10px] text-gray-500 font-bold pointer-events-none">DANO</span>
                        <InputSync className={`w-full h-full bg-transparent text-xs text-center font-bold px-8 focus:outline-none ${acao.dano ? 'text-red-400' : 'text-gray-600'}`} value={acao.dano} onUpdate={v => updateAcao(acao.id, 'dano', v)} placeholder="-" />
                        {acao.dano && (
                            <button type="button" onClick={(e) => rolarComContexto(e, acao.dano, `${acao.nome} (Dano)`)} className="absolute right-0 top-0 h-full w-8 flex items-center justify-center bg-gray-900 hover:bg-red-600 text-red-500 hover:text-white transition border-l border-gray-800 z-10" title="Rolar Dano">🎲</button>
                        )}
                    </div>
                </div>
                <div className="px-2 pb-2">
                    <textarea className="text-xs text-gray-400 bg-transparent resize-none focus:outline-none focus:text-gray-200 w-full min-h-[1.5em] leading-relaxed pl-1 border-l-2 border-gray-800 focus:border-gray-600" defaultValue={acao.descricao} onBlur={e => updateAcao(acao.id, 'descricao', e.target.value)} placeholder="Descrição do efeito..." key={acao.descricao} rows={Math.max(1, Math.min(5, acao.descricao.split('\n').length))} />
                </div>
              </div>
            ))}
            {ameaca.acoes.length === 0 && <div className="text-sm text-gray-600 text-center py-6 border-2 border-dashed border-gray-800 rounded-lg hover:border-gray-700 cursor-pointer transition" onClick={addAcao}>+ Adicionar primeira ação</div>}
          </div>
        </div>

        {/* --- MAGIAS (NOVO SISTEMA) --- */}
        <div>
          <div className="flex justify-between items-center mb-3 px-1 mt-4 border-t border-gray-800 pt-4">
            <label className="text-xs text-purple-400 font-bold uppercase tracking-wider">Magias & Grimório</label>
            <button onClick={addMagia} className="text-xs bg-purple-900/30 hover:bg-purple-800/50 text-purple-200 px-3 py-1 rounded border border-purple-800 transition shadow-sm">+ Adicionar</button>
          </div>
          
          <div className="flex flex-col gap-3">
            {(ameaca.magias || []).map((magia) => (
              <div key={magia.id} className="bg-gray-900 border border-purple-900/30 rounded-lg overflow-hidden group/magia hover:border-purple-700/50 transition shadow-sm">
                
                {/* HEADER MAGIA */}
                <div className="flex justify-between items-center bg-purple-900/10 p-2 border-b border-purple-900/20">
                    <div className="flex items-center gap-2 flex-grow">
                        <span className="text-lg">🔮</span>
                        <InputSync className="font-bold text-sm text-purple-200 bg-transparent focus:outline-none w-full placeholder-purple-900/50" value={magia.nome} onUpdate={v => updateMagia(magia.id, 'nome', v)} placeholder="Nome da Magia" />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center bg-gray-900 rounded px-2 py-0.5 border border-purple-900/30">
                            <span className="text-[9px] text-purple-500 mr-1 font-bold">PM</span>
                            <InputSync className="text-xs font-bold text-white bg-transparent w-6 text-center focus:outline-none" value={magia.pm} onUpdate={v => updateMagia(magia.id, 'pm', v)} />
                        </div>
                        <InputSync className="text-[10px] bg-gray-900 text-purple-400 border border-purple-900/30 rounded px-2 py-0.5 w-16 text-center focus:border-purple-500 focus:outline-none uppercase tracking-wide" value={magia.circulo} onUpdate={v => updateMagia(magia.id, 'circulo', v)} placeholder="CÍRCULO" />
                        <button onClick={() => removeMagia(magia.id)} className="text-purple-800 hover:text-red-500 w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover/magia:opacity-100 transition">✕</button>
                    </div>
                </div>

                {/* DETALHES MAGIA (GRID 6 COLUNAS) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-purple-900/20 border-b border-purple-900/20 text-[10px]">
                    {['execucao', 'alcance', 'area', 'alvo', 'duracao', 'resistencia'].map(campo => (
                        <div key={campo} className="bg-gray-900/80 p-1.5 flex flex-col justify-center border-b border-purple-900/10 lg:border-b-0">
                            <span className="text-purple-500 font-bold uppercase tracking-wider mb-0.5 text-[9px] truncate" title={campo}>{campo.slice(0,6)}.</span>
                            <InputSync 
                                className="bg-transparent text-gray-300 w-full focus:outline-none focus:text-white truncate" 
                                value={(magia as any)[campo]} 
                                onUpdate={v => updateMagia(magia.id, campo as keyof Magia, v)} 
                                placeholder="-" 
                            />
                        </div>
                    ))}
                </div>
                
                {/* DESCRIÇÃO E DANO BASE */}
                <div className="p-2 border-b border-purple-900/20">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] text-purple-400 font-bold uppercase">Rolagem Base:</span>
                        <div className="relative h-6 bg-gray-950 border border-purple-900/40 rounded flex items-center w-32">
                            <InputSync className="w-full h-full bg-transparent text-xs text-center font-bold px-6 focus:outline-none text-purple-200" value={magia.danoBase || ""} onUpdate={v => updateMagia(magia.id, 'danoBase', v)} placeholder="Ex: 2d8+2" />
                            {magia.danoBase && (
                                <button onClick={(e) => rolarComContexto(e, magia.danoBase!, `${magia.nome} (Base)`)} className="absolute right-0 top-0 h-full w-6 flex items-center justify-center bg-gray-900 hover:bg-purple-600 text-purple-500 hover:text-white transition border-l border-purple-900/40 z-10" title="Rolar">🎲</button>
                            )}
                        </div>
                    </div>
                    <textarea 
                      className="text-xs text-purple-200/70 bg-transparent resize-none focus:outline-none focus:text-purple-100 w-full min-h-[2em] leading-relaxed" 
                      defaultValue={magia.efeito} 
                      onBlur={e => updateMagia(magia.id, 'efeito', e.target.value)}
                      placeholder="Descrição do efeito mágico..." 
                      key={magia.efeito}
                      rows={Math.max(1, Math.min(5, (magia.efeito || "").split('\n').length))} 
                    />
                </div>

                {/* APRIMORAMENTOS (UPGRADES) */}
                <div className="bg-black/20 p-2">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-[9px] text-purple-600 font-bold uppercase tracking-wider">Aprimoramentos</span>
                        <button onClick={() => addAprimoramento(magia.id)} className="text-[9px] bg-purple-900/20 hover:bg-purple-800/40 text-purple-300 px-2 py-0.5 rounded border border-purple-800/50 transition">+ Upgrade</button>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                        {(magia.aprimoramentos || []).map(up => (
                            <div key={up.id} className="flex items-center gap-2 text-xs group/up">
                                {/* CUSTO (+PM) */}
                                <div className="bg-purple-900/40 text-purple-200 rounded px-1.5 py-0.5 border border-purple-700/50 font-bold whitespace-nowrap min-w-[3rem] flex justify-center">
                                    <span className="text-[9px] mr-0.5 opacity-70">PM</span>
                                    <InputSync className="bg-transparent w-full text-center focus:outline-none" value={up.custo} onUpdate={v => updateAprimoramento(magia.id, up.id, 'custo', v)} placeholder="+1" />
                                </div>

                                {/* DESCRIÇÃO */}
                                <InputSync className="bg-transparent text-gray-400 focus:text-purple-100 focus:outline-none flex-grow border-b border-transparent focus:border-purple-800/50 transition-colors" value={up.descricao} onUpdate={v => updateAprimoramento(magia.id, up.id, 'descricao', v)} placeholder="Efeito do aprimoramento..." />

                                {/* ROLAGEM EXTRA */}
                                <div className="relative h-6 w-20 bg-gray-950 border border-gray-800 rounded flex items-center flex-shrink-0 group-hover/up:border-purple-900/30 transition-colors">
                                    <InputSync className="w-full h-full bg-transparent text-[10px] text-center px-5 focus:outline-none text-gray-500 focus:text-purple-300" value={up.roll || ""} onUpdate={v => updateAprimoramento(magia.id, up.id, 'roll', v)} placeholder="+Dice" />
                                    {up.roll && (
                                        <button onClick={(e) => rolarComContexto(e, up.roll!, `${magia.nome} (${up.custo} PM)`)} className="absolute right-0 top-0 h-full w-5 flex items-center justify-center hover:bg-purple-600 text-gray-700 hover:text-white transition rounded-r z-10" title="Rolar Extra">🎲</button>
                                    )}
                                </div>

                                {/* REMOVER */}
                                <button onClick={() => removeAprimoramento(magia.id, up.id)} className="text-gray-700 hover:text-red-500 w-4 h-4 flex items-center justify-center opacity-0 group-hover/up:opacity-100 transition">×</button>
                            </div>
                        ))}
                    </div>
                </div>

              </div>
            ))}
            {(ameaca.magias || []).length === 0 && <div className="text-sm text-purple-900/50 text-center py-4 border-2 border-dashed border-purple-900/20 rounded-lg hover:border-purple-700/50 hover:text-purple-400 cursor-pointer transition" onClick={addMagia}>+ Adicionar grimório</div>}
          </div>
        </div>

        {/* PERÍCIAS */}
        <div>
          <div className="flex items-center gap-2 mb-2 px-1 mt-4">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Perícias & Sentidos</span>
              <div className="h-px bg-gray-800 flex-grow"></div>
          </div>
          
          <div className="bg-gray-950 border border-gray-800 rounded-lg p-3 relative group/pericias hover:border-gray-700 transition">
              <div className="text-sm leading-relaxed text-gray-300 font-medium">
                <DiceText texto={ameaca.pericias || ""} onRolar={(expr) => onRoll(expr, ameaca.nome, "Perícia")} />
              </div>
              <textarea className="w-full bg-transparent text-xs text-gray-600 mt-3 pt-2 border-t border-gray-900 focus:text-gray-300 focus:border-gray-700 focus:outline-none transition-colors resize-none placeholder-gray-700" rows={1} placeholder="Editar perícias..." defaultValue={ameaca.pericias} onBlur={(e) => onUpdate(ameaca.id, "pericias", e.target.value)} key={ameaca.pericias} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-px bg-gray-800 border-t border-gray-800">
         {['for', 'des', 'con', 'int', 'sab', 'car'].map(attr => {
             const valorStr = (ameaca.atributos as any)[attr];
             const mod = formatMod(valorStr);
             return (
                 <div key={attr} className="flex flex-col items-center justify-center p-3 bg-gray-950 hover:bg-gray-900 transition cursor-default relative group/attr">
                     <button onClick={(e) => rolarComContexto(e, `1d20${mod}`, `Teste de ${attr.toUpperCase()}`)} className="text-[10px] uppercase font-bold text-gray-600 mb-1 tracking-widest hover:text-red-400 transition" title={`Rolar ${attr.toUpperCase()} (${mod})`}>{attr}</button>
                     <InputSync className="w-full bg-transparent text-center font-bold text-gray-300 text-lg focus:text-white focus:outline-none" value={valorStr} onUpdate={(v) => updateAtributo(attr, v)} />
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