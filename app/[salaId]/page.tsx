"use client";

import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";

// Imports dos seus componentes e tipos
import { Ameaca, Jogador, ModeloAmeaca, LogEntry, ItemTimeline, Atributos } from "../types/game";
import { rolarDados } from "../utils/dice";
import { ModalRolagem } from "../components/modals/ModalRolagem";
import { ModalCondicoes } from "../components/modals/ModalCondicoes";
import { ModalBestiario } from "../components/modals/ModalBestiario";
import { ModalImportacao } from "../components/modals/ModalImportacao";
import { ThreatCard } from "../components/ThreatCard";
import { DiceLog } from "../components/ui/DiceLog";
import { BattleMap } from "../components/BattleMap";

export default function MesaPage() {
  // 1. Pega o ID da sala da URL (ex: /caverna-do-dragao)
  const params = useParams();
  const salaId = params.salaId as string;

  // 2. Hooks do Convex (Backend)
  const dadosRemotos = useQuery(api.mesa.lerSala, { codigo: salaId });
  const salvarRemoto = useMutation(api.mesa.atualizarSala);

  // 3. Estados Locais (UI)
  const [ameacas, setAmeacas] = useState<Ameaca[]>([]);
  const [jogadores, setJogadores] = useState<Jogador[]>([]);
  const [historico, setHistorico] = useState<LogEntry[]>([]);
  const [turnoIndex, setTurnoIndex] = useState(-1);
  const [mapaUrl, setMapaUrl] = useState("");
  const [bestiario, setBestiario] = useState<ModeloAmeaca[]>([]); // Bestiário continua local por enquanto

  // UI Toggles
  const [modalResultado, setModalResultado] = useState<any | null>(null);
  const [modalCondicaoId, setModalCondicaoId] = useState<string | null>(null);
  const [mostrarBestiario, setMostrarBestiario] = useState(false);
  const [mostrarImportacao, setMostrarImportacao] = useState(false);
  const [showLog, setShowLog] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [busca, setBusca] = useState("");
  
  // Inputs temporários
  const [novoNomeJog, setNovoNomeJog] = useState("");
  const [novoInicJog, setNovoInicJog] = useState("");

  // =========================================================
  // 🔄 SINCRONIZAÇÃO (A MÁGICA ACONTECE AQUI)
  // =========================================================

  // 1. RECEBER DADOS: Quando o Convex avisa que mudou algo na nuvem
  useEffect(() => {
    if (dadosRemotos?.dados) {
      setAmeacas(dadosRemotos.dados.ameacas || []);
      setJogadores(dadosRemotos.dados.jogadores || []);
      setHistorico(dadosRemotos.dados.historico || []);
      setTurnoIndex(dadosRemotos.dados.turnoIndex ?? -1);
      setMapaUrl(dadosRemotos.dados.mapaUrl || "");
      
      // Se tiver mapa vindo do banco, abre o toggle do mapa
      if (dadosRemotos.dados.mapaUrl && !showMap) setShowMap(true);
    }
  }, [dadosRemotos]);

  // Carregar Bestiário Local (apenas localstorage para preferência pessoal)
  useEffect(() => {
    const best = localStorage.getItem("t20-bestiario-v3");
    if (best) setBestiario(JSON.parse(best));
  }, []);
  useEffect(() => { 
    localStorage.setItem("t20-bestiario-v3", JSON.stringify(bestiario)); 
  }, [bestiario]);

  // 2. ENVIAR DADOS: Função central para salvar no banco
  // Ela recebe os valores NOVOS, e usa os valores do ESTADO para o que não mudou
  const salvarGlobal = (partial: { 
    ameacas?: Ameaca[], 
    jogadores?: Jogador[], 
    historico?: LogEntry[], 
    turnoIndex?: number, 
    mapaUrl?: string 
  }) => {
    // Atualiza o estado local para feedback instantâneo (Optimistic UI)
    if (partial.ameacas) setAmeacas(partial.ameacas);
    if (partial.jogadores) setJogadores(partial.jogadores);
    if (partial.historico) setHistorico(partial.historico);
    if (partial.turnoIndex !== undefined) setTurnoIndex(partial.turnoIndex);
    if (partial.mapaUrl !== undefined) setMapaUrl(partial.mapaUrl);

    // Envia para o Convex
    salvarRemoto({
      codigo: salaId,
      dados: {
        ameacas: partial.ameacas ?? ameacas,
        jogadores: partial.jogadores ?? jogadores,
        historico: partial.historico ?? historico,
        turnoIndex: partial.turnoIndex ?? turnoIndex,
        mapaUrl: partial.mapaUrl ?? mapaUrl
      }
    });
  };

  // =========================================================
  // 🎮 LÓGICA DO JOGO (Refatorada para usar salvarGlobal)
  // =========================================================

  const rolar = (expr: string, origem = "Sistema", rotulo = "Rolagem") => {
    const res = rolarDados(expr);
    if (!res) return;

    const novoLog: LogEntry = {
      id: crypto.randomUUID(),
      hora: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      origem, rotulo, resultado: res.total.toString(), detalhes: res.detalhes, critico: res.detalhes.includes("20")
    };

    const novoHistorico = [...historico.slice(-49), novoLog];
    
    setModalResultado(res);
    if (!showLog) setShowLog(true);
    
    // Salva no banco
    salvarGlobal({ historico: novoHistorico });
  };

  // --- CRUD AMEAÇAS ---
  const updateAmeaca = (id: string, campo: keyof Ameaca, valor: any) => {
    const novasAmeacas = ameacas.map(a => a.id === id ? { ...a, [campo]: valor } : a);
    salvarGlobal({ ameacas: novasAmeacas });
  };

  const removeAmeaca = (id: string) => {
    const novasAmeacas = ameacas.filter(a => a.id !== id);
    salvarGlobal({ ameacas: novasAmeacas });
  };

  const addAmeaca = () => {
    const atributosPadrao: Atributos = { for: "0", des: "0", con: "0", int: "0", sab: "0", car: "0" };
    const nova: Ameaca = {
      id: crypto.randomUUID(), nome: "Nova Ameaça", nd: "1", tipo: "Monstro", deslocamento: "9m",
      defesa: 10, pvAtual: 10, pvMax: 10, pmAtual: 0, pmMax: 0, acoes: [], 
      pericias: "Iniciativa +0", atributos: atributosPadrao, condicoes: [], 
      iniciativaAtual: undefined, imagemUrl: "", x: 50, y: 50
    };
    salvarGlobal({ ameacas: [...ameacas, nova] });
  };

  const cloneAmeaca = (original: Ameaca) => {
    const copia = { ...original, id: crypto.randomUUID(), nome: `${original.nome} (Cópia)`, iniciativaAtual: undefined, x: 50, y: 50 };
    salvarGlobal({ ameacas: [...ameacas, copia] });
  };

  const toggleCondicao = (id: string, cond: string) => {
    const novasAmeacas = ameacas.map(a => a.id !== id ? a : { ...a, condicoes: a.condicoes.includes(cond) ? a.condicoes.filter(c => c !== cond) : [...a.condicoes, cond] });
    salvarGlobal({ ameacas: novasAmeacas });
  };

  // --- INICIATIVA ---
  const calcularIniciativa = (pericias: string) => {
    const match = pericias.match(/Iniciativa\s*:?\s*([+-]?\d+)/i);
    return Math.floor(Math.random() * 20) + 1 + (match ? parseInt(match[1]) : 0);
  };

  const rolarIniciativaIndividual = (id: string) => {
    const am = ameacas.find(a => a.id === id);
    if (am) {
      const val = calcularIniciativa(am.pericias);
      const novasAmeacas = ameacas.map(a => a.id === id ? { ...a, iniciativaAtual: val } : a);
      
      // Rola dado (log) e atualiza ficha ao mesmo tempo
      // Nota: Para simplificar, aqui chamamos o salvarGlobal 2x indiretamente ou construimos a logica.
      // Vamos fazer manual para garantir 1 save:
      const res = rolarDados("1d20+?"); 
      const novoLog: LogEntry = { id: crypto.randomUUID(), hora: new Date().toLocaleTimeString(), origem: am.nome, rotulo: "Iniciativa", resultado: val.toString(), detalhes: "Auto", critico: false };
      
      salvarGlobal({ 
          ameacas: novasAmeacas,
          historico: [...historico.slice(-49), novoLog]
      });
    }
  };

  const rolarIniciativaGlobal = () => {
    const novasAmeacas = ameacas.map(a => ({ ...a, iniciativaAtual: calcularIniciativa(a.pericias) }));
    // Gera log
    const novoLog: LogEntry = { id: crypto.randomUUID(), hora: new Date().toLocaleTimeString(), origem: "Mestre", rotulo: "Iniciativa em Massa", resultado: "Rolado", detalhes: "Todos", critico: false };
    
    salvarGlobal({ 
        ameacas: novasAmeacas, 
        turnoIndex: 0,
        historico: [...historico.slice(-49), novoLog]
    });
  };

  // --- MAPA E MOVIMENTO ---
  const moverToken = (id: string, tipo: "AMEACA" | "JOGADOR", x: number, y: number) => {
    if (tipo === "AMEACA") {
      const novas = ameacas.map(a => a.id === id ? { ...a, x, y } : a);
      salvarGlobal({ ameacas: novas });
    } else {
      const novos = jogadores.map(j => j.id === id ? { ...j, x, y } : j);
      salvarGlobal({ jogadores: novos });
    }
  };

  const atualizarMapaUrl = (url: string) => {
      salvarGlobal({ mapaUrl: url });
  };

  // --- JOGADORES ---
  const addJogador = () => {
    if (novoNomeJog) {
      const novo = { id: crypto.randomUUID(), nome: novoNomeJog, iniciativa: Number(novoInicJog), x: 50, y: 50 };
      salvarGlobal({ jogadores: [...jogadores, novo] });
      setNovoNomeJog("");
    }
  };

  const removeJogador = (id: string) => {
      salvarGlobal({ jogadores: jogadores.filter(j => j.id !== id) });
  };
  
  const updateJogadorInic = (id: string, val: number) => {
      salvarGlobal({ jogadores: jogadores.map(j => j.id === id ? { ...j, iniciativa: val } : j) });
  };

  // --- CONTROLE DE TURNO E DESCANSO ---
  const timeline: ItemTimeline[] = [
    ...ameacas.filter(a => a.iniciativaAtual !== undefined).map(a => ({ id: a.id, nome: a.nome, iniciativa: a.iniciativaAtual!, tipo: "AMEACA" as const })),
    ...jogadores.map(j => ({ id: j.id, nome: j.nome, iniciativa: j.iniciativa, tipo: "JOGADOR" as const }))
  ].sort((a, b) => b.iniciativa - a.iniciativa);

  const proximoTurno = () => {
    if (timeline.length > 0) {
        salvarGlobal({ turnoIndex: (turnoIndex + 1) % timeline.length });
    }
  };

  const descansar = () => {
    if (confirm("Resetar Combate?")) {
      const novasAmeacas = ameacas.map(a => ({ ...a, pvAtual: a.pvMax, pmAtual: a.pmMax, condicoes: [] }));
      salvarGlobal({ 
          ameacas: novasAmeacas, 
          turnoIndex: -1, 
          historico: [] 
      });
    }
  };

  // --- IMPORT/EXPORT (Bestiário e Arquivo) ---
  // Nota: Bestiário continua local, mas salvar na mesa envia pra nuvem
  const salvarModelo = (a: Ameaca) => {
    const novoModelo: ModeloAmeaca = {
      nome: a.nome, nd: a.nd, tipo: a.tipo, deslocamento: a.deslocamento, defesa: a.defesa,
      pvPadrao: a.pvMax, pmPadrao: a.pmMax, pvMax: a.pvMax, pmMax: a.pmMax,
      acoes: a.acoes, pericias: a.pericias, atributos: a.atributos, imagemUrl: a.imagemUrl
    };
    setBestiario(prev => [...prev.filter(b => b.nome !== a.nome), novoModelo]);
    alert("Salvo no Bestiário Local!");
  };

  const importarModelo = (m: ModeloAmeaca) => {
    const nova = { ...m, id: crypto.randomUUID(), pvAtual: m.pvPadrao, pmAtual: m.pmPadrao, condicoes: [], iniciativaAtual: undefined, x: 50, y: 50 };
    salvarGlobal({ ameacas: [...ameacas, nova] });
    setMostrarBestiario(false);
  };

  const processarImportacaoTexto = (dados: Partial<Ameaca>) => {
    const atributosPadrao = { for: "0", des: "0", con: "0", int: "0", sab: "0", car: "0" };
    const nova: Ameaca = {
        id: crypto.randomUUID(),
        nome: dados.nome || "Ameaça", nd: dados.nd || "?", tipo: dados.tipo || "Criatura", deslocamento: dados.deslocamento || "9m",
        defesa: dados.defesa || 10, pvMax: dados.pvMax || 10, pvAtual: dados.pvMax || 10, pmMax: dados.pmMax || 0, pmAtual: dados.pmMax || 0,
        acoes: dados.acoes || [], pericias: dados.pericias || "Iniciativa +0", atributos: dados.atributos || atributosPadrao,
        condicoes: [], imagemUrl: "", iniciativaAtual: undefined, x: 50, y: 50
    } as Ameaca;
    
    salvarGlobal({ ameacas: [...ameacas, nova] });
    setMostrarImportacao(false);
  };

  // Filtragem e Tokens
  const ameacasFiltradas = ameacas.filter(a => a.nome.toLowerCase().includes(busca.toLowerCase()) || a.tipo.toLowerCase().includes(busca.toLowerCase()));
  
  const tokensMap = [
      ...ameacas.map(a => ({ id: a.id, nome: a.nome, tipo: "AMEACA" as const, x: a.x || 50, y: a.y || 50, imagemUrl: a.imagemUrl })),
      ...jogadores.map(j => ({ id: j.id, nome: j.nome, tipo: "JOGADOR" as const, x: j.x || 50, y: j.y || 50 }))
  ];

  if (dadosRemotos === undefined) return <div className="h-screen flex items-center justify-center text-white font-bold bg-gray-950">Conectando à sala...</div>;

  return (
    <div className="flex bg-gray-950 min-h-screen text-gray-100 font-sans overflow-x-hidden">
      
      <div className={`flex-grow p-4 md:p-6 pb-20 w-full transition-all duration-300 ease-in-out ${showLog ? 'xl:mr-80' : ''}`}>
        
        <ModalRolagem resultado={modalResultado} fechar={() => setModalResultado(null)} />
        {modalCondicaoId && <ModalCondicoes ameaca={ameacas.find(a => a.id === modalCondicaoId)!} fechar={() => setModalCondicaoId(null)} toggleCondicao={toggleCondicao} />}
        {mostrarBestiario && <ModalBestiario modelos={bestiario} fechar={() => setMostrarBestiario(false)} importar={importarModelo} excluir={(n: string) => setBestiario(prev => prev.filter(b => b.nome !== n))} />}
        {mostrarImportacao && <ModalImportacao fechar={() => setMostrarImportacao(false)} confirmar={processarImportacaoTexto} />}
        
        {/* HEADER */}
        <header className="flex flex-col xl:flex-row justify-between items-center mb-6 gap-4 border-b border-gray-800 pb-4">
            <h1 className="text-3xl font-black text-red-600">TORMENTA<span className="text-white font-light">MASTER</span> <span className="text-xs text-gray-600 font-mono ml-2 border border-gray-800 px-2 rounded">Sala: {salaId}</span></h1>
            
            {showMap ? (
                <div className="flex-grow max-w-lg mx-2 animate-in fade-in">
                    <input 
                        className="w-full bg-gray-900 border border-blue-900 text-blue-100 text-xs rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="Cole o link da imagem do mapa..."
                        value={mapaUrl}
                        onChange={(e) => atualizarMapaUrl(e.target.value)}
                    />
                </div>
            ) : (
                <div className="relative w-full max-w-md mx-4">
                    <input type="text" placeholder="🔍 Buscar ameaça..." className="w-full bg-gray-900 border border-gray-700 rounded-full py-2 px-4 text-sm focus:outline-none focus:border-red-500" value={busca} onChange={(e) => setBusca(e.target.value)} />
                    {busca && <button onClick={() => setBusca("")} className="absolute right-3 top-2 text-gray-500 hover:text-white">✕</button>}
                </div>
            )}

            <div className="flex gap-2 items-center flex-wrap justify-center">
               <button onClick={() => setShowMap(!showMap)} className={`border px-3 py-2 rounded font-bold text-sm transition ${showMap ? 'bg-blue-900 border-blue-500 text-white' : 'bg-gray-800 border-gray-700'}`}>🗺️ Mapa</button>
               <button onClick={() => setShowLog(!showLog)} className={`bg-gray-800 border px-3 py-2 rounded font-bold text-sm transition ${showLog ? 'border-blue-500 text-blue-400' : 'border-gray-700 hover:bg-gray-700'}`}>📜</button>
               <button onClick={() => setMostrarImportacao(true)} className="bg-gray-800 hover:bg-gray-700 border border-gray-700 px-3 py-2 rounded font-bold text-sm">📋 Importar</button>
               <button onClick={addAmeaca} className="bg-gray-800 border-gray-700 px-3 py-2 rounded font-bold text-sm">+ Nova</button>
               <button onClick={() => setMostrarBestiario(true)} className="bg-indigo-900 border-indigo-700 px-3 py-2 rounded font-bold text-sm">📚 Bestiário</button>
               <button onClick={rolarIniciativaGlobal} className="bg-yellow-600 border-yellow-500 px-3 py-2 rounded font-bold text-sm">⚡ Iniciar</button>
               <button onClick={descansar} className="bg-green-900 border-green-700 px-3 py-2 rounded font-bold text-sm" title="Descanso">💤</button>
            </div>
        </header>

        {/* ÁREA DO MAPA */}
        {showMap && (
            <div className="mb-8 w-full aspect-video bg-gray-900 rounded-xl overflow-hidden border border-gray-700 relative shadow-2xl animate-in fade-in slide-in-from-top-4">
                <BattleMap mapaUrl={mapaUrl} tokens={tokensMap} onMoveToken={moverToken} />
                <div className="absolute bottom-2 right-2 text-[10px] text-gray-500 bg-black/50 px-2 rounded pointer-events-none">Arraste os tokens</div>
            </div>
        )}

        {/* TIMELINE */}
        <section className="mb-8 bg-gray-900/50 rounded-xl border border-gray-800 p-4 relative">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-gray-400 text-xs font-bold uppercase">Ordem de Turno</h2>
                <button onClick={proximoTurno} className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded font-bold transition flex items-center gap-1">▶ Próximo Turno</button>
            </div>
            <div className="flex flex-col gap-1 max-h-60 overflow-y-auto pr-1">
                {timeline.map((item, idx) => {
                    const isTurno = idx === turnoIndex;
                    return (
                        <div key={`${item.tipo}-${item.id}`} className={`flex items-center gap-3 p-2 border-l-4 rounded transition-all ${isTurno ? 'bg-gray-700 border-yellow-400' : 'bg-opacity-20 border-transparent ' + (item.tipo === 'AMEACA' ? 'bg-gray-800 border-l-red-800' : 'bg-blue-900 border-l-blue-800')}`} onClick={() => salvarGlobal({ turnoIndex: idx })}>
                            <span className={`font-mono w-6 font-bold text-center ${isTurno ? 'text-yellow-400' : 'text-gray-500'}`}>{isTurno ? '▶' : `#${idx+1}`}</span>
                            <input type="number" className="w-10 bg-gray-950 text-center rounded text-white font-bold border border-gray-700 text-sm" value={item.iniciativa} onChange={(e) => { if(item.tipo === 'AMEACA') { const novas = ameacas.map(a => a.id === item.id ? { ...a, iniciativaAtual: Number(e.target.value) } : a); salvarGlobal({ ameacas: novas }); } else { updateJogadorInic(item.id, Number(e.target.value)) } }} />
                            <span className={`flex-grow font-bold text-sm ${item.tipo === 'AMEACA' ? 'text-red-200' : 'text-blue-200'} ${isTurno ? 'text-white' : ''}`}>{item.nome}</span>
                            {item.tipo === 'JOGADOR' && <button onClick={() => removeJogador(item.id)} className="text-gray-500 hover:text-red-500 font-bold px-2 text-xs">✕</button>}
                        </div>
                    );
                })}
            </div>
            <div className="flex gap-2 mt-3 pt-3 border-t border-gray-800">
                <input placeholder="Nome Jogador" className="bg-gray-950 p-1.5 rounded text-white border border-gray-700 text-xs flex-grow" value={novoNomeJog} onChange={e => setNovoNomeJog(e.target.value)} />
                <input type="number" placeholder="Inic" className="bg-gray-950 p-1.5 rounded text-white border border-gray-700 text-xs w-14 text-center" value={novoInicJog} onChange={e => setNovoInicJog(e.target.value)} />
                <button onClick={addJogador} className="bg-blue-700 hover:bg-blue-600 px-3 rounded font-bold text-xs">ADD</button>
            </div>
        </section>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ameacasFiltradas.length === 0 && ameacas.length > 0 && <div className="col-span-full text-center py-10 text-gray-500">Sem resultados para "{busca}".</div>}
            {ameacasFiltradas.map(a => (
                <div key={a.id} className={`transition-all duration-500 ${timeline[turnoIndex]?.id === a.id ? 'ring-2 ring-yellow-400 shadow-2xl shadow-yellow-900/20 scale-[1.02] z-10' : ''}`}>
                    <ThreatCard ameaca={a} onUpdate={updateAmeaca} onDelete={removeAmeaca} onClone={cloneAmeaca} onSaveModel={salvarModelo} onToggleCondition={() => setModalCondicaoId(a.id)} onRoll={rolar} onRollIniciativa={() => rolarIniciativaIndividual(a.id)} />
                </div>
            ))}
        </div>
      </div>
      <DiceLog historico={historico} limpar={() => salvarGlobal({ historico: [] })} isOpen={showLog} onClose={() => setShowLog(false)} />
    </div>
  );
}