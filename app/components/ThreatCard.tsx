import { Ameaca } from "../types/game";
import { CONDICOES_DB } from "../data/condicoes";
import { StatBox } from "./ui/StatBox";
import { DiceText } from "./ui/DiceText";
import { useState } from "react";

type Props = {
  ameaca: Ameaca;
  onUpdate: (id: string, campo: keyof Ameaca, valor: any) => void;
  // Para atualizar atributos aninhados, usaremos uma lógica simples no onUpdate ou um wrapper aqui
  onDelete: (id: string) => void;
  onClone: (ameaca: Ameaca) => void;
  onSaveModel: (ameaca: Ameaca) => void;
  onToggleCondition: (id: string) => void;
  onRoll: (expr: string) => void;
  onRollIniciativa: () => void;
};

export const ThreatCard = ({ 
  ameaca, onUpdate, onDelete, onClone, onSaveModel, onToggleCondition, onRoll, onRollIniciativa
}: Props) => {
  const morta = ameaca.pvAtual <= 0;
  const [showImgInput, setShowImgInput] = useState(false);

  // Helper para atualizar atributo específico
  const updateAtributo = (key: string, val: string) => {
     onUpdate(ameaca.id, "atributos", { ...ameaca.atributos, [key]: val });
  };

  return (
    <div className={`bg-gray-900 rounded-xl border shadow-xl overflow-hidden flex flex-col transition-all ${ameaca.iniciativaAtual !== undefined ? 'border-red-900/50' : 'border-gray-800'} ${morta ? 'opacity-50 grayscale' : ''}`}>
      
      {/* HEADER VISUAL */}
      <div className="relative group/header">
        {ameaca.imagemUrl && (
           <div className="absolute inset-0 z-0 opacity-20 transition-opacity group-hover/header:opacity-30">
              <img src={ameaca.imagemUrl} alt={ameaca.nome} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/50 to-gray-900"></div>
           </div>
        )}

        <div className="p-4 bg-gray-800/80 border-b border-gray-800 relative z-10 backdrop-blur-sm">
            {/* Badge Iniciativa */}
            <div className="absolute top-0 left-0 z-20">
                {ameaca.iniciativaAtual !== undefined ? (
                    <div onClick={onRollIniciativa} className="bg-red-900/90 text-white text-[10px] font-bold px-2 py-1 rounded-br shadow-md cursor-pointer hover:bg-red-800 transition border-b border-r border-red-800 backdrop-blur-md">
                      INIC: {ameaca.iniciativaAtual}
                    </div>
                ) : (
                    <button onClick={onRollIniciativa} className="bg-gray-700/90 text-gray-300 text-[10px] font-bold px-2 py-1 rounded-br shadow-md hover:bg-yellow-600 hover:text-white transition flex items-center gap-1 border-b border-r border-gray-600 backdrop-blur-md">
                      ⚡ Rolar
                    </button>
                )}
            </div>

            {/* Controles */}
            <div className="absolute top-2 right-2 flex gap-1 bg-black/40 rounded p-1 backdrop-blur-md">
              <button onClick={() => setShowImgInput(!showImgInput)} className="text-gray-400 hover:text-blue-400 p-1 transition" title="Imagem">🖼️</button>
              <button onClick={() => onSaveModel(ameaca)} className="text-gray-400 hover:text-yellow-400 p-1 transition" title="Salvar">💾</button>
              <button onClick={() => onDelete(ameaca.id)} className="text-gray-400 hover:text-red-500 p-1 transition" title="Excluir">🗑️</button>
            </div>

            {/* Input Imagem */}
            {showImgInput && (
                <div className="mt-8 mb-2"><input type="text" placeholder="Link da imagem..." className="w-full bg-black/60 text-xs text-blue-200 border border-blue-900 rounded p-2 focus:outline-none" value={ameaca.imagemUrl || ""} onChange={(e) => onUpdate(ameaca.id, "imagemUrl", e.target.value)} autoFocus /></div>
            )}
            
            {/* Identificação */}
            <div className={`flex items-start gap-3 ${showImgInput ? '' : 'mt-6'}`}>
                {ameaca.imagemUrl ? (
                    <img src={ameaca.imagemUrl} className="w-12 h-12 rounded-full border-2 border-red-900/50 object-cover shadow-lg bg-gray-900" alt="" />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center text-xl text-gray-500 shadow-inner">👾</div>
                )}
                
                <div className="flex-grow">
                    <div className="flex items-center gap-2">
                        <input className="bg-transparent text-lg font-bold w-full text-white focus:outline-none focus:border-b focus:border-red-500 placeholder-gray-500 drop-shadow-md" value={ameaca.nome} onChange={(e) => onUpdate(ameaca.id, "nome", e.target.value)} placeholder="Nome" />
                        {/* Badge ND */}
                        <div className="bg-yellow-700/80 text-white mt-3 text-xs font-bold px-1.5 py-0.5 rounded border border-yellow-600 shadow-sm whitespace-nowrap" title="Nível de Desafio">
                            ND {ameaca.nd || "?"}
                        </div>
                    </div>
                    {/* Tipo e Tamanho */}
                    <input className="bg-transparent text-xs font-mono text-gray-400 w-full focus:outline-none focus:text-gray-200" value={ameaca.tipo || ""} onChange={(e) => onUpdate(ameaca.id, "tipo", e.target.value)} placeholder="Tipo / Tamanho" />
                </div>
            </div>
            
            {/* Condições */}
            <div className="flex flex-wrap gap-1 mt-3 min-h-[24px]">
              {ameaca.condicoes.map(c => (
                <span key={c} title={CONDICOES_DB.find(db => db.nome === c)?.efeito} className="px-1.5 py-0.5 rounded bg-red-900/60 border border-red-800 text-[10px] text-red-100 cursor-help font-bold uppercase tracking-wider hover:bg-red-800 transition backdrop-blur-sm shadow-sm">{c}</span>
              ))}
              <button onClick={() => onToggleCondition(ameaca.id)} className="px-1.5 py-0.5 rounded bg-gray-800/60 border border-gray-600 text-[10px] text-gray-400 hover:text-white hover:border-gray-400 transition backdrop-blur-sm">+ Condição</button>
            </div>
        </div>
      </div>

      {/* CORPO */}
      <div className="p-4 flex flex-col gap-4 flex-grow bg-gray-900">
        <div className="flex gap-2">
          <StatBox label="PV" icon="❤️" cor="red" valor={ameaca.pvAtual} max={ameaca.pvMax} onChange={(v) => onUpdate(ameaca.id, "pvAtual", v)} onMaxChange={(v) => onUpdate(ameaca.id, "pvMax", v)} />
          <StatBox label="PM" icon="💧" cor="blue" valor={ameaca.pmAtual} max={ameaca.pmMax} onChange={(v) => onUpdate(ameaca.id, "pmAtual", v)} onMaxChange={(v) => onUpdate(ameaca.id, "pmMax", v)} />
          <StatBox label="DEF" icon="🛡️" cor="gray" valor={ameaca.defesa} onChange={(v) => onUpdate(ameaca.id, "defesa", v)} />
        </div>

        {/* Deslocamento (Input simples) */}
        <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-950 p-1 rounded px-2">
            <span>🦶 Deslocamento:</span>
            <input className="bg-transparent flex-grow text-gray-300 focus:outline-none" value={ameaca.deslocamento || "9m"} onChange={(e) => onUpdate(ameaca.id, "deslocamento", e.target.value)} />
        </div>

        <div>
          <label className="text-[10px] text-gray-500 font-bold mb-1 block">ATAQUES & HABILIDADES</label>
          <div className="bg-gray-950 rounded-t p-2 border border-gray-700 border-b-0 min-h-[36px]">
            <DiceText texto={ameaca.ataques || ""} onRolar={onRoll} />
          </div>
          <textarea className="w-full bg-gray-900 p-2 rounded-b text-sm text-gray-400 border border-gray-700 focus:outline-none focus:border-red-500 h-24 resize-none" value={ameaca.ataques} onChange={(e) => onUpdate(ameaca.id, "ataques", e.target.value)} />
        </div>
        
        <div>
          <label className="text-[10px] text-gray-500 font-bold mb-1 block">PERÍCIAS</label>
          <div className="bg-gray-950 rounded-t p-2 border border-gray-700 border-b-0 min-h-[36px]">
            <DiceText texto={ameaca.pericias || ""} onRolar={onRoll} />
          </div>
          <textarea className="w-full bg-gray-900 p-2 rounded-b text-sm text-gray-400 border border-gray-700 focus:outline-none focus:border-blue-500 h-14 resize-none" value={ameaca.pericias} onChange={(e) => onUpdate(ameaca.id, "pericias", e.target.value)} />
        </div>
      </div>

      {/* FOOTER: ATRIBUTOS */}
      <div className="grid grid-cols-6 gap-0 border-t border-gray-800 bg-gray-950">
         {['for', 'des', 'con', 'int', 'sab', 'car'].map(attr => (
             <div key={attr} className="flex flex-col items-center p-2 border-r border-gray-800 last:border-0 group hover:bg-gray-900 transition">
                 <span className="text-[8px] uppercase font-bold text-gray-600 mb-0.5">{attr}</span>
                 <input 
                    className="w-full bg-transparent text-center font-bold text-gray-400 text-sm focus:text-white focus:outline-none" 
                    value={(ameaca.atributos as any)[attr]} 
                    onChange={(e) => updateAtributo(attr, e.target.value)}
                 />
             </div>
         ))}
      </div>

      <div className="px-4 py-2 bg-gray-800/30 border-t border-gray-800 flex justify-end">
        <button onClick={() => onClone(ameaca)} className="text-xs font-bold text-gray-500 hover:text-white flex items-center gap-1">📑 Duplicar</button>
      </div>
    </div>
  );
};