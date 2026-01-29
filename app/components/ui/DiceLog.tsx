"use client";
import { useEffect, useRef } from "react";
import { LogEntry } from "../../types/game";

type DiceLogProps = {
  historico: LogEntry[];
  limpar: () => void;
  isOpen: boolean; // <--- NOVO
  onClose: () => void; // <--- NOVO
};

export const DiceLog = ({ historico, limpar, isOpen, onClose }: DiceLogProps) => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [historico, isOpen]);

  return (
    <div 
      className={`fixed right-0 top-0 h-full w-80 bg-gray-900 border-l border-gray-800 shadow-2xl z-50 flex flex-col pt-20 pb-4 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="px-4 py-2 border-b border-gray-800 flex justify-between items-center bg-gray-900">
        <h3 className="text-xs font-bold uppercase text-gray-500 tracking-widest">Log de Combate</h3>
        <div className="flex gap-3">
            <button onClick={limpar} className="text-[10px] text-red-500 hover:text-red-400 hover:underline">Limpar</button>
            <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-gray-700">
        {historico.length === 0 && (
            <div className="text-center text-gray-600 text-xs py-10 italic">
                Nenhuma rolagem ainda.<br/>O histórico aparecerá aqui.
            </div>
        )}
        
        {historico.map((log) => (
          <div key={log.id} className="bg-gray-800 rounded border border-gray-700 p-2 text-sm relative animate-in fade-in slide-in-from-right-4">
            <div className="flex justify-between items-start mb-1">
                <span className="font-bold text-blue-300 truncate w-40" title={log.origem}>{log.origem}</span>
                <span className="text-[10px] text-gray-500">{log.hora}</span>
            </div>
            <div className="text-xs text-gray-400 mb-1">{log.rotulo}</div>
            
            <div className="bg-gray-900 p-1 rounded flex justify-between items-center px-2">
                <span className="text-[10px] font-mono text-gray-500">{log.detalhes}</span>
                <span className={`font-bold text-lg ${log.critico ? 'text-yellow-400' : 'text-white'}`}>
                    {log.resultado}
                </span>
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>
    </div>
  );
};