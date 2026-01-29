import { Ameaca } from "../types/game";
import { CONDICOES_DB } from "../data/condicoes";
import { StatBox } from "./ui/StatBox";
import { DiceText } from "./ui/DiceText";

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

export const ThreatCard = ({ 
  ameaca, 
  onUpdate, 
  onDelete, 
  onClone, 
  onSaveModel, 
  onToggleCondition, 
  onRoll,
  onRollIniciativa
}: Props) => {
  const morta = ameaca.pvAtual <= 0;

  return (
    <div className={`bg-gray-900 rounded-xl border shadow-xl overflow-hidden flex flex-col transition-all ${ameaca.iniciativaAtual !== undefined ? 'border-red-900/50' : 'border-gray-800'} ${morta ? 'opacity-50 grayscale' : ''}`}>
      {/* Header */}
      <div className="p-4 bg-gray-800/50 border-b border-gray-800 relative">
        
        {/* Badge de Iniciativa (Novo) */}
        <div className="absolute top-0 left-0">
            {ameaca.iniciativaAtual !== undefined ? (
                <div 
                    onClick={onRollIniciativa}
                    className="bg-red-900/80 text-white text-[10px] font-bold px-2 py-1 rounded-br shadow-md cursor-pointer hover:bg-red-800 transition border-b border-r border-red-800"
                    title="Clique para Rerolar"
                >
                  INIC: {ameaca.iniciativaAtual}
                </div>
            ) : (
                <button 
                    onClick={onRollIniciativa}
                    className="bg-gray-700 text-gray-400 text-[10px] font-bold px-2 py-1 rounded-br shadow-md hover:bg-yellow-600 hover:text-white transition flex items-center gap-1 border-b border-r border-gray-600"
                    title="Entrar no Combate (Rolar Iniciativa)"
                >
                  ⚡ Rolar
                </button>
            )}
        </div>

        <div className="absolute top-2 right-2 flex gap-1">
          <button onClick={() => onSaveModel(ameaca)} className="text-gray-500 hover:text-yellow-400 p-1" title="Salvar no Bestiário">💾</button>
          <button onClick={() => onDelete(ameaca.id)} className="text-gray-500 hover:text-red-500 p-1" title="Excluir">🗑️</button>
        </div>
        
        {/* Input Nome com margem top para não bater na badge */}
        <input 
            className="bg-transparent text-lg font-bold w-10/12 text-white focus:outline-none focus:border-b focus:border-red-500 mt-4 placeholder-gray-600" 
            value={ameaca.nome} 
            onChange={(e) => onUpdate(ameaca.id, "nome", e.target.value)} 
            placeholder="Nome da Ameaça"
        />
        
        {/* Badges de Condição */}
        <div className="flex flex-wrap gap-1 mt-2 min-h-[24px]">
          {ameaca.condicoes.map(c => (
            <span key={c} title={CONDICOES_DB.find(db => db.nome === c)?.efeito} className="px-1.5 py-0.5 rounded bg-red-900/40 border border-red-800 text-[10px] text-red-200 cursor-help font-bold uppercase tracking-wider hover:bg-red-800 transition">{c}</span>
          ))}
          <button onClick={() => onToggleCondition(ameaca.id)} className="px-1.5 py-0.5 rounded bg-gray-800 border border-gray-700 text-[10px] text-gray-400 hover:text-white hover:border-gray-500 transition">+ Condição</button>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4 flex-grow">
        <div className="flex gap-2">
          <StatBox label="PV" icon="❤️" cor="red" valor={ameaca.pvAtual} max={ameaca.pvMax} onChange={(v) => onUpdate(ameaca.id, "pvAtual", v)} onMaxChange={(v) => onUpdate(ameaca.id, "pvMax", v)} />
          <StatBox label="PM" icon="💧" cor="blue" valor={ameaca.pmAtual} max={ameaca.pmMax} onChange={(v) => onUpdate(ameaca.id, "pmAtual", v)} onMaxChange={(v) => onUpdate(ameaca.id, "pmMax", v)} />
          <StatBox label="DEF" icon="🛡️" cor="gray" valor={ameaca.defesa} onChange={(v) => onUpdate(ameaca.id, "defesa", v)} />
        </div>

        <div>
          <label className="text-[10px] text-gray-500 font-bold mb-1 block">ATAQUES</label>
          <div className="bg-gray-950 rounded-t p-2 border border-gray-700 border-b-0 min-h-[36px]">
            <DiceText texto={ameaca.ataques || ""} onRolar={onRoll} />
          </div>
          <textarea className="w-full bg-gray-900 p-2 rounded-b text-sm text-gray-400 border border-gray-700 focus:outline-none focus:border-red-500 h-16 resize-none" value={ameaca.ataques} onChange={(e) => onUpdate(ameaca.id, "ataques", e.target.value)} />
        </div>
        
        <div>
          <label className="text-[10px] text-gray-500 font-bold mb-1 block">PERÍCIAS</label>
          <div className="bg-gray-950 rounded-t p-2 border border-gray-700 border-b-0 min-h-[36px]">
            <DiceText texto={ameaca.pericias || ""} onRolar={onRoll} />
          </div>
          <textarea className="w-full bg-gray-900 p-2 rounded-b text-sm text-gray-400 border border-gray-700 focus:outline-none focus:border-blue-500 h-14 resize-none" value={ameaca.pericias} onChange={(e) => onUpdate(ameaca.id, "pericias", e.target.value)} />
        </div>
      </div>

      <div className="px-4 py-2 bg-gray-800/30 border-t border-gray-800 flex justify-end">
        <button onClick={() => onClone(ameaca)} className="text-xs font-bold text-gray-500 hover:text-white flex items-center gap-1">📑 Duplicar</button>
      </div>
    </div>
  );
};