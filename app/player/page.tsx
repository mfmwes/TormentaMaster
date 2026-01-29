"use client";
 import { useState, useEffect } from "react";
import { Ameaca, Jogador, ItemTimeline } from "../types/game";

export default function PlayerView() {
  const [ameacas, setAmeacas] = useState<Ameaca[]>([]);
  const [jogadores, setJogadores] = useState<Jogador[]>([]);
  const [turnoIndex, setTurnoIndex] = useState(-1);

  // Sincronização em Tempo Real (Via LocalStorage)
  useEffect(() => {
    const carregarDados = () => {
      const mesa = localStorage.getItem("t20-master-screen-v7"); // Lê a mesma chave do mestre
      if (mesa) {
        const p = JSON.parse(mesa);
        setAmeacas(p.ameacas || []);
        setJogadores(p.jogadores || []);
        setTurnoIndex(p.turnoIndex ?? -1);
      }
    };

    // 1. Carrega assim que abre
    carregarDados();

    // 2. Ouve eventos de mudança no Storage (quando o Mestre mexe em outra aba)
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "t20-master-screen-v7") {
        carregarDados();
      }
    };

    window.addEventListener("storage", handleStorage);
    
    // 3. Polling de segurança (para garantir atualização caso o evento falhe)
    const interval = setInterval(carregarDados, 1000);

    return () => {
      window.removeEventListener("storage", handleStorage);
      clearInterval(interval);
    };
  }, []);

  // Recria a Timeline igual à do Mestre
  const timeline: ItemTimeline[] = [
    ...ameacas.filter(a => a.iniciativaAtual !== undefined).map(a => ({ id: a.id, nome: a.nome, iniciativa: a.iniciativaAtual!, tipo: "AMEACA" as const })),
    ...jogadores.map(j => ({ id: j.id, nome: j.nome, iniciativa: j.iniciativa, tipo: "JOGADOR" as const }))
  ].sort((a, b) => b.iniciativa - a.iniciativa);

  // Pega quem é o personagem ativo
  const ativo = timeline[turnoIndex];
  const dadosAtivo = ativo?.tipo === 'AMEACA' ? ameacas.find(a => a.id === ativo.id) : null;

  if (timeline.length === 0) {
    return <div className="h-screen bg-black flex items-center justify-center text-gray-500 font-bold tracking-widest uppercase">Aguardando Combate...</div>;
  }

  return (
    <div className="h-screen w-screen bg-gray-950 text-white overflow-hidden flex flex-col relative font-sans selection:bg-red-900">
      
      {/* BACKGROUND (Imagem borrada do monstro ou fundo padrão) */}
      <div className="absolute inset-0 z-0">
          {dadosAtivo?.imagemUrl ? (
              <img src={dadosAtivo.imagemUrl} className="w-full h-full object-cover opacity-30 blur-xl scale-110 transition-all duration-1000" />
          ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black opacity-80" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
      </div>

      {/* ÁREA CENTRAL - PERSONAGEM ATIVO */}
      <div className="relative z-10 flex-grow flex items-center justify-center p-10">
         {ativo ? (
             <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
                 {/* Avatar Gigante */}
                 <div className="relative mb-8">
                     {/* Efeito de brilho vermelho atrás */}
                     <div className="absolute inset-0 bg-red-500 rounded-full blur-[100px] opacity-20"></div>
                     
                     {dadosAtivo?.imagemUrl ? (
                         <img src={dadosAtivo.imagemUrl} className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-red-500/50 shadow-[0_0_60px_rgba(220,38,38,0.3)]" />
                     ) : (
                         <div className="w-64 h-64 md:w-96 md:h-96 bg-gray-800 rounded-full border-4 border-gray-600 flex items-center justify-center text-8xl shadow-2xl">
                             {ativo.tipo === 'JOGADOR' ? '🛡️' : '👾'}
                         </div>
                     )}
                     
                     {/* Badge de Iniciativa Flutuante */}
                     <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 border border-gray-700 text-white px-6 py-2 rounded-full font-black text-2xl shadow-xl z-20">
                         {ativo.iniciativa}
                     </div>
                 </div>

                 {/* Nome Gigante */}
                 <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-lg text-center tracking-tight">
                     {ativo.nome}
                 </h1>
                 <p className="text-xl text-red-400 font-bold uppercase tracking-[0.3em] mt-2 text-center shadow-black drop-shadow-sm">Turno Atual</p>
             </div>
         ) : (
             <div className="text-4xl font-bold text-gray-600">Preparem-se...</div>
         )}
      </div>

      {/* RODAPÉ - LISTA DE INICIATIVA (Carrossel) */}
      <div className="relative z-20 bg-gray-900/80 backdrop-blur-md border-t border-gray-800 p-4 pb-8">
          <div className="max-w-[90%] mx-auto">
              <h3 className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4 ml-2">Ordem de Iniciativa</h3>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
                  {timeline.map((item, idx) => {
                      const isCurrent = idx === turnoIndex;
                      const isPast = turnoIndex > -1 && idx < turnoIndex;
                      
                      return (
                          <div key={`${item.tipo}-${item.id}`} className={`flex-shrink-0 w-48 p-3 rounded-xl border transition-all duration-500 snap-center ${
                              isCurrent 
                              ? 'bg-red-900/40 border-red-500 shadow-lg shadow-red-900/20 scale-105' 
                              : isPast 
                                ? 'bg-gray-900 border-gray-800 opacity-50 grayscale'
                                : 'bg-gray-800 border-gray-700'
                          }`}>
                              <div className="flex justify-between items-start mb-2">
                                  <span className={`font-bold text-2xl ${isCurrent ? 'text-white' : 'text-gray-500'}`}>{item.iniciativa}</span>
                                  {item.tipo === 'AMEACA' && <span className="text-[10px] bg-red-950 text-red-400 px-1.5 py-0.5 rounded border border-red-900">INIMIGO</span>}
                              </div>
                              <div className={`font-bold truncate ${isCurrent ? 'text-white text-lg' : 'text-gray-400'}`}>{item.nome}</div>
                          </div>
                      );
                  })}
              </div>
          </div>
      </div>
    </div>
  );
}