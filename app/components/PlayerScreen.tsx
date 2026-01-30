import { useState } from "react";
import { Ameaca, Jogador, ItemTimeline, LogEntry } from "../types/game";
import { BattleMap } from "../components/BattleMap";
import { DiceLog } from "../components/ui/DiceLog";

type Props = {
  ameacas: Ameaca[];
  jogadores: Jogador[];
  turnoIndex: number;
  mapaUrl: string;
  historico: LogEntry[];
  onMoveToken: (id: string, tipo: "AMEACA" | "JOGADOR", x: number, y: number) => void;
  onResizeToken?: (id: string, tipo: "AMEACA" | "JOGADOR", novoTamanho: number) => void;
};

export const PlayerScreen = ({ ameacas, jogadores, turnoIndex, mapaUrl, historico, onMoveToken, onResizeToken }: Props) => {
  const [showLog, setShowLog] = useState(false);

  const timeline: ItemTimeline[] = [
    ...ameacas.filter(a => a.iniciativaAtual !== undefined).map(a => ({ id: a.id, nome: a.nome, iniciativa: a.iniciativaAtual!, tipo: "AMEACA" as const })),
    ...jogadores.map(j => ({ id: j.id, nome: j.nome, iniciativa: j.iniciativa, tipo: "JOGADOR" as const }))
  ].sort((a, b) => b.iniciativa - a.iniciativa);

  const ativo = timeline[turnoIndex];
  
  const dadosAtivo = ativo?.tipo === 'AMEACA' 
    ? ameacas.find(a => a.id === ativo.id) 
    : jogadores.find(j => j.id === ativo.id);

  const tokensMap = [
      ...ameacas.map(a => ({ id: a.id, nome: a.nome, tipo: "AMEACA" as const, x: a.x || 50, y: a.y || 50, tamanho: a.tamanho, imagemUrl: a.imagemUrl })),
      ...jogadores.map(j => ({ id: j.id, nome: j.nome, tipo: "JOGADOR" as const, x: j.x || 50, y: j.y || 50, tamanho: j.tamanho, imagemUrl: j.imagemUrl }))
  ];

  if (timeline.length === 0 && !mapaUrl) {
    return <div className="h-screen bg-black flex items-center justify-center text-gray-500 font-bold tracking-widest uppercase animate-pulse">Aguardando Combate...</div>;
  }

  return (
    <div className="h-screen w-screen bg-gray-950 overflow-hidden flex flex-col relative font-sans">
      <div className="absolute top-4 left-4 z-50">
        <button onClick={() => setShowLog(!showLog)} className={`bg-gray-900/80 backdrop-blur border px-4 py-2 rounded-full font-bold text-sm transition shadow-2xl flex items-center gap-2 ${showLog ? 'border-blue-500 text-blue-400' : 'border-gray-700 hover:bg-gray-800 text-white'}`}>
          📜 Log <span className="text-[10px] bg-gray-800 px-1.5 rounded-full border border-gray-700">{historico.length}</span>
        </button>
      </div>

      <DiceLog historico={historico} limpar={() => {}} isOpen={showLog} onClose={() => setShowLog(false)} />

      <div className="flex-grow relative w-full h-full overflow-hidden">
        {mapaUrl ? (
           <div className="w-full h-full">
               <BattleMap 
                  mapaUrl={mapaUrl} 
                  tokens={tokensMap} 
                  readonly={false}
                  isGm={false}
                  onMoveToken={onMoveToken} 
                  onResizeToken={onResizeToken}
               />
               
               {ativo && (
                  <div className="absolute top-4 right-4 bg-gray-900/90 border border-yellow-500 p-3 rounded-xl shadow-2xl flex items-center gap-3 max-w-sm backdrop-blur-md z-40 animate-in slide-in-from-right pointer-events-none">
                      <div className="relative">
                        {dadosAtivo?.imagemUrl ? <img src={dadosAtivo.imagemUrl} className="w-14 h-14 rounded-full border-2 border-white object-cover" alt="" /> : <div className="w-14 h-14 bg-gray-800 rounded-full border border-gray-600 flex items-center justify-center text-xl">{ativo.tipo === 'AMEACA' ? '👾' : '🛡️'}</div>}
                        <div className="absolute -bottom-2 -right-2 bg-black text-white text-[10px] px-1.5 py-0.5 rounded border border-gray-700">{ativo.iniciativa}</div>
                      </div>
                      <div>
                          <div className="text-yellow-500 text-[10px] font-bold uppercase tracking-widest leading-none mb-1">Turno Atual</div>
                          <div className="text-white text-lg font-black truncate leading-none max-w-[150px]">{ativo.nome}</div>
                      </div>
                  </div>
               )}
           </div>
        ) : (
           <div className="w-full h-full flex items-center justify-center relative">
               <div className="absolute inset-0 z-0">
                  {dadosAtivo?.imagemUrl ? (
                      <img src={dadosAtivo.imagemUrl} className="w-full h-full object-cover opacity-30 blur-xl scale-110 transition-all duration-1000" alt="" />
                  ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black opacity-80" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
              </div>
              {ativo ? (
                  <div className="relative z-10 flex flex-col items-center animate-in fade-in zoom-in duration-500">
                      <div className="relative mb-8">
                          <div className="absolute inset-0 bg-red-500 rounded-full blur-[100px] opacity-20"></div>
                          {dadosAtivo?.imagemUrl ? (
                              <img src={dadosAtivo.imagemUrl} className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-red-500/50 shadow-[0_0_60px_rgba(220,38,38,0.3)]" alt="" />
                          ) : (
                              <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-800 rounded-full border-4 border-gray-600 flex items-center justify-center text-8xl shadow-2xl">
                                  {ativo.tipo === 'JOGADOR' ? '🛡️' : '👾'}
                              </div>
                          )}
                          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-900 border border-gray-700 text-white px-6 py-2 rounded-full font-black text-2xl shadow-xl z-20">
                              {ativo.iniciativa}
                          </div>
                      </div>
                      <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-lg text-center tracking-tight px-4">
                          {ativo.nome}
                      </h1>
                      <p className="text-xl text-red-400 font-bold uppercase tracking-[0.3em] mt-2 text-center">Turno Atual</p>
                  </div>
              ) : (
                  <div className="relative z-10 text-center animate-pulse">
                      <div className="text-6xl mb-4">⚔️</div>
                      <h2 className="text-2xl text-gray-500 font-bold uppercase tracking-widest">Aguardando Início do Turno...</h2>
                  </div>
              )}
           </div>
        )}
      </div>

      {/* TIMELINE INFERIOR (CORRIGIDO: ALTURA AUMENTADA PARA h-48) */}
      <div className="h-48 bg-gray-900/95 backdrop-blur-md border-t border-gray-800 p-2 relative z-40 flex items-center overflow-hidden">
          <div className="flex gap-4 overflow-x-auto overflow-y-hidden h-full items-center px-4 scrollbar-hide w-full">
              {timeline.map((item, idx) => {
                  const isCurrent = idx === turnoIndex;
                  const dadosItem = item.tipo === 'AMEACA' 
                    ? ameacas.find(a => a.id === item.id) 
                    : jogadores.find(j => j.id === item.id);

                  return (
                      <div key={`${item.tipo}-${item.id}`} className={`flex-shrink-0 w-32 h-32 p-2 rounded-xl border transition-all duration-300 flex flex-col justify-between items-center ${isCurrent ? 'bg-yellow-900/40 border-yellow-500 scale-105 shadow-lg' : 'bg-gray-800 border-gray-700 opacity-60'}`}>
                          
                          {/* NOME */}
                          <div className="font-bold text-white text-xs text-center w-full truncate" title={item.nome}>
                              {item.nome}
                          </div>
                          
                          {/* IMAGEM */}
                          <div className="flex items-center justify-center">
                             {dadosItem?.imagemUrl ? (
                                <img src={dadosItem.imagemUrl} className="w-12 h-12 rounded-full object-cover border-2 border-gray-600 bg-black" alt="" />
                             ) : (
                                <span className="text-4xl">{item.tipo === 'AMEACA' ? '👾' : '🛡️'}</span>
                             )}
                          </div>
                          
                          {/* INICIATIVA */}
                          <div className="text-[10px] text-gray-400 font-mono text-center bg-black/40 rounded px-2 py-0.5 w-full">
                              Inic: {item.iniciativa}
                          </div>
                      </div>
                  )
              })}
          </div>
      </div>
    </div>
  );
};