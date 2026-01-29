"use client";

import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";

// Tipos e Utils
import { Ameaca, Jogador, ModeloAmeaca, LogEntry, ItemTimeline, Atributos } from "../types/game";
import { rolarDados } from "../utils/dice";

// Componentes do Mestre
import { ModalRolagem } from "../components/modals/ModalRolagem";
import { ModalCondicoes } from "../components/modals/ModalCondicoes";
import { ModalBestiario } from "../components/modals/ModalBestiario";
import { ModalImportacao } from "../components/modals/ModalImportacao";
import { ThreatCard } from "../components/ThreatCard";
import { DiceLog } from "../components/ui/DiceLog";
import { BattleMap } from "../components/BattleMap";

// Componentes de Acesso e Jogador
import { ModalLoginMestre } from "../components/modals/ModalLoginMestre";
import { PlayerScreen } from "../components/PlayerScreen";

export default function MesaPage() {
  const params = useParams();
  const salaId = params.salaId as string;

  // ---------------------------------------------------------
  // 1. CONEXÃO COM O BACKEND (CONVEX)
  // ---------------------------------------------------------
  const dadosRemotos = useQuery(api.mesa.lerSala, { codigo: salaId });
  const salvarRemoto = useMutation(api.mesa.atualizarSala);
  const definirSenhaRemoto = useMutation(api.mesa.definirSenha);
  const verificarSenhaRemoto = useMutation(api.mesa.verificarSenha);
  const criarSalaRemoto = useMutation(api.mesa.criarSala); // <--- NOVO HOOK

  // ---------------------------------------------------------
  // 2. ESTADOS DA UI
  // ---------------------------------------------------------
  const [isMaster, setIsMaster] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Dados do Jogo (Estado Local para UI Otimista)
  const [ameacas, setAmeacas] = useState<Ameaca[]>([]);
  const [jogadores, setJogadores] = useState<Jogador[]>([]);
  const [historico, setHistorico] = useState<LogEntry[]>([]);
  const [turnoIndex, setTurnoIndex] = useState(-1);
  const [mapaUrl, setMapaUrl] = useState("");
  
  // Bestiário (Local Storage apenas)
  const [bestiario, setBestiario] = useState<ModeloAmeaca[]>([]); 

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

  // ---------------------------------------------------------
  // 3. SINCRONIZAÇÃO E SEGURANÇA
  // ---------------------------------------------------------

  useEffect(() => {
    if (dadosRemotos?.dados) {
      setAmeacas(dadosRemotos.dados.ameacas || []);
      setJogadores(dadosRemotos.dados.jogadores || []);
      setHistorico(dadosRemotos.dados.historico || []);
      setTurnoIndex(dadosRemotos.dados.turnoIndex ?? -1);
      setMapaUrl(dadosRemotos.dados.mapaUrl || "");

      // Se tiver mapa e o mestre estiver logado, abre o mapa
      if (dadosRemotos.dados.mapaUrl && isMaster && !showMap) setShowMap(true);
    }

    // Verifica se precisa criar senha (primeiro acesso)
    if (dadosRemotos && !dadosRemotos.senha && !isMaster && !showLoginModal) {
       setShowLoginModal(true);
    }
  }, [dadosRemotos, isMaster]);

  useEffect(() => {
    const best = localStorage.getItem("t20-bestiario-v3");
    if (best) setBestiario(JSON.parse(best));
  }, []);
  useEffect(() => { 
    if (bestiario.length > 0) localStorage.setItem("t20-bestiario-v3", JSON.stringify(bestiario)); 
  }, [bestiario]);

  const tentarLogin = async (senhaDigitada: string) => {
    if (!dadosRemotos) return;
    
    const temSenha = (dadosRemotos as any).senha; 

    if (!temSenha) {
        await definirSenhaRemoto({ codigo: salaId, senha: senhaDigitada });
        setIsMaster(true);
        setShowLoginModal(false);
    } else {
        const valido = await verificarSenhaRemoto({ codigo: salaId, tentativa: senhaDigitada });
        if (valido) {
            setIsMaster(true);
            setShowLoginModal(false);
        } else {
            alert("Senha incorreta!");
        }
    }
  };

  const salvarGlobal = (partial: { 
    ameacas?: Ameaca[], 
    jogadores?: Jogador[], 
    historico?: LogEntry[], 
    turnoIndex?: number, 
    mapaUrl?: string 
  }) => {
    if (partial.ameacas) setAmeacas(partial.ameacas);
    if (partial.jogadores) setJogadores(partial.jogadores);
    if (partial.historico) setHistorico(partial.historico);
    if (partial.turnoIndex !== undefined) setTurnoIndex(partial.turnoIndex);
    if (partial.mapaUrl !== undefined) setMapaUrl(partial.mapaUrl);

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

  // ---------------------------------------------------------
  // 4. LÓGICA DE JOGO (MÉTODOS)
  // ---------------------------------------------------------

  const rolar = (expr: string, origem = "Sistema", rotulo = "Rolagem") => {
    const res = rolarDados(expr);
    if (!res) return;
    const novoLog: LogEntry = {
      id: crypto.randomUUID(),
      hora: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      origem, rotulo, resultado: res.total.toString(), detalhes: res.detalhes, critico: res.detalhes.includes("20")
    };
    setModalResultado(res);
    if (!showLog) setShowLog(true);
    salvarGlobal({ historico: [...historico.slice(-49), novoLog] });
  };

  const updateAmeaca = (id: string, campo: keyof Ameaca, valor: any) => {
    salvarGlobal({ ameacas: ameacas.map(a => a.id === id ? { ...a, [campo]: valor } : a) });
  };
  const removeAmeaca = (id: string) => salvarGlobal({ ameacas: ameacas.filter(a => a.id !== id) });
  
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
    salvarGlobal({ ameacas: [...ameacas, { ...original, id: crypto.randomUUID(), nome: `${original.nome} (Cópia)`, iniciativaAtual: undefined, x: 50, y: 50 }] });
  };

  const toggleCondicao = (id: string, cond: string) => {
    salvarGlobal({ ameacas: ameacas.map(a => a.id !== id ? a : { ...a, condicoes: a.condicoes.includes(cond) ? a.condicoes.filter(c => c !== cond) : [...a.condicoes, cond] }) });
  };

  const rolarIniciativaIndividual = (id: string) => {
    const am = ameacas.find(a => a.id === id);
    if (am) {
      const match = am.pericias.match(/Iniciativa\s*:?\s*([+-]?\d+)/i);
      const mod = match ? parseInt(match[1]) : 0;
      const total = Math.floor(Math.random() * 20) + 1 + mod;
      
      const novoLog: LogEntry = { id: crypto.randomUUID(), hora: new Date().toLocaleTimeString(), origem: am.nome, rotulo: "Iniciativa", resultado: total.toString(), detalhes: "Auto", critico: false };
      
      salvarGlobal({ 
          ameacas: ameacas.map(a => a.id === id ? { ...a, iniciativaAtual: total } : a),
          historico: [...historico.slice(-49), novoLog]
      });
    }
  };

  const rolarIniciativaGlobal = () => {
    const novas = ameacas.map(a => {
        const match = a.pericias.match(/Iniciativa\s*:?\s*([+-]?\d+)/i);
        const mod = match ? parseInt(match[1]) : 0;
        return { ...a, iniciativaAtual: Math.floor(Math.random() * 20) + 1 + mod };
    });
    salvarGlobal({ ameacas: novas, turnoIndex: 0, historico: [...historico.slice(-49), { id: crypto.randomUUID(), hora: new Date().toLocaleTimeString(), origem: "Mestre", rotulo: "Iniciativa em Massa", resultado: "Rolado", detalhes: "Todos", critico: false }] });
  };

  const moverToken = (id: string, tipo: "AMEACA" | "JOGADOR", x: number, y: number) => {
    if (tipo === "AMEACA") salvarGlobal({ ameacas: ameacas.map(a => a.id === id ? { ...a, x, y } : a) });
    else salvarGlobal({ jogadores: jogadores.map(j => j.id === id ? { ...j, x, y } : j) });
  };

  const addJogador = () => {
    if (novoNomeJog) {
      salvarGlobal({ jogadores: [...jogadores, { id: crypto.randomUUID(), nome: novoNomeJog, iniciativa: Number(novoInicJog), x: 50, y: 50 }] });
      setNovoNomeJog("");
    }
  };

  const timeline: ItemTimeline[] = [
    ...ameacas.filter(a => a.iniciativaAtual !== undefined).map(a => ({ id: a.id, nome: a.nome, iniciativa: a.iniciativaAtual!, tipo: "AMEACA" as const })),
    ...jogadores.map(j => ({ id: j.id, nome: j.nome, iniciativa: j.iniciativa, tipo: "JOGADOR" as const }))
  ].sort((a, b) => b.iniciativa - a.iniciativa);

  const proximoTurno = () => { if (timeline.length > 0) salvarGlobal({ turnoIndex: (turnoIndex + 1) % timeline.length }); };
  const ameacasFiltradas = ameacas.filter(a => a.nome.toLowerCase().includes(busca.toLowerCase()) || a.tipo.toLowerCase().includes(busca.toLowerCase()));
  const tokensMap = [...ameacas.map(a => ({ id: a.id, nome: a.nome, tipo: "AMEACA" as const, x: a.x || 50, y: a.y || 50, imagemUrl: a.imagemUrl })), ...jogadores.map(j => ({ id: j.id, nome: j.nome, tipo: "JOGADOR" as const, x: j.x || 50, y: j.y || 50 }))];

  const salvarModelo = (a: Ameaca) => {
    const modelo: ModeloAmeaca = { ...a, pvPadrao: a.pvMax, pmPadrao: a.pmMax };
    setBestiario(prev => [...prev.filter(b => b.nome !== a.nome), modelo]);
    alert("Salvo no Bestiário Local!");
  };
  const importarModelo = (m: ModeloAmeaca) => {
    salvarGlobal({ ameacas: [...ameacas, { ...m, id: crypto.randomUUID(), pvAtual: m.pvPadrao, pmAtual: m.pmPadrao, condicoes: [], iniciativaAtual: undefined, x: 50, y: 50 }] });
    setMostrarBestiario(false);
  };
  const processarImportacaoTexto = (dados: Partial<Ameaca>) => {
    const atributosPadrao: Atributos = { for: "0", des: "0", con: "0", int: "0", sab: "0", car: "0" };
    const nova: Ameaca = {
        id: crypto.randomUUID(), nome: dados.nome || "Ameaça", nd: dados.nd || "?", tipo: dados.tipo || "Criatura", deslocamento: dados.deslocamento || "9m",
        defesa: dados.defesa || 10, pvMax: dados.pvMax || 10, pvAtual: dados.pvMax || 10, pmMax: dados.pmMax || 0, pmAtual: dados.pmMax || 0,
        acoes: dados.acoes || [], pericias: dados.pericias || "Iniciativa +0", atributos: dados.atributos || atributosPadrao,
        condicoes: [], imagemUrl: "", iniciativaAtual: undefined, x: 50, y: 50
    } as Ameaca;
    salvarGlobal({ ameacas: [...ameacas, nova] });
    setMostrarImportacao(false);
  };

  // ---------------------------------------------------------
  // 5. RENDERIZAÇÃO
  // ---------------------------------------------------------

  // 1. Loading
  if (dadosRemotos === undefined) {
    return <div className="h-screen bg-gray-950 flex items-center justify-center text-white animate-pulse">Carregando Masmorra...</div>;
  }

  // 2. Não Encontrado (404) -> OFERECE CRIAR SALA
  if (dadosRemotos === null) {
    return (
        <div className="h-screen bg-gray-950 flex flex-col items-center justify-center text-white p-4 text-center">
            <h1 className="text-6xl font-black text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-300 mb-2">A sala <span className="text-red-500 font-mono font-bold">"{salaId}"</span> não existe.</p>
            <p className="text-gray-500 mb-8 text-sm">Deseja fundar esta nova mesa de jogo?</p>
            
            <button 
                onClick={() => criarSalaRemoto({ codigo: salaId })}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-red-900/20 transition hover:scale-105 active:scale-95"
            >
                🔥 Criar Sala Agora
            </button>
            
            <a href="/" className="mt-8 text-gray-600 hover:text-gray-400 text-xs underline">Voltar para o início</a>
        </div>
    );
  }

  // A) Modal de Login
  if (showLoginModal) {
      return <ModalLoginMestre ehPrimeiroAcesso={!(dadosRemotos as any).senha} onConfirmar={tentarLogin} />;
  }

  // B) Visão do Jogador
  if (!isMaster) {
      return (
          <div className="relative w-full h-full">
              <button onClick={() => setShowLoginModal(true)} className="fixed top-4 right-4 z-[100] bg-black/30 hover:bg-red-600 text-white/50 hover:text-white p-2 rounded-full backdrop-blur transition border border-white/10" title="Acesso do Mestre">🔒</button>
              
              <PlayerScreen 
                ameacas={ameacas} 
                jogadores={jogadores} 
                turnoIndex={turnoIndex} 
                mapaUrl={mapaUrl}
                historico={historico}
              />
          </div>
      );
  }

  // C) Dashboard Mestre
  return (
    <div className="flex bg-gray-950 min-h-screen text-gray-100 font-sans overflow-x-hidden">
      <div className={`flex-grow p-4 md:p-6 pb-20 w-full transition-all duration-300 ease-in-out ${showLog ? 'xl:mr-80' : ''}`}>
        
        <ModalRolagem resultado={modalResultado} fechar={() => setModalResultado(null)} />
        {modalCondicaoId && <ModalCondicoes ameaca={ameacas.find(a => a.id === modalCondicaoId)!} fechar={() => setModalCondicaoId(null)} toggleCondicao={toggleCondicao} />}
        {mostrarBestiario && <ModalBestiario modelos={bestiario} fechar={() => setMostrarBestiario(false)} importar={importarModelo} excluir={(n: string) => setBestiario(prev => prev.filter(b => b.nome !== n))} />}
        {mostrarImportacao && <ModalImportacao fechar={() => setMostrarImportacao(false)} confirmar={processarImportacaoTexto} />}
        
        {/* HEADER */}
        <header className="flex flex-col xl:flex-row justify-between items-center mb-6 gap-4 border-b border-gray-800 pb-4">
            <h1 className="text-3xl font-black text-red-600 flex items-center gap-2">
                TORMENTA<span className="text-white font-light">MASTER</span> 
                <span className="text-xs text-gray-500 font-mono border border-gray-800 px-2 py-0.5 rounded bg-black/20">Sala: {salaId}</span>
            </h1>
            
            {showMap ? (
                <div className="flex-grow max-w-lg mx-2 animate-in fade-in">
                    <input className="w-full bg-gray-900 border border-blue-900 text-blue-100 text-xs rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Cole o link da imagem do mapa..." value={mapaUrl} onChange={(e) => salvarGlobal({ mapaUrl: e.target.value })} />
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
               <button onClick={() => { if(confirm("Resetar Combate?")) salvarGlobal({ ameacas: ameacas.map(a => ({...a, pvAtual: a.pvMax, pmAtual: a.pmMax, condicoes: []})), turnoIndex: -1, historico: [] }) }} className="bg-green-900 border-green-700 px-3 py-2 rounded font-bold text-sm" title="Descanso">💤</button>
            </div>
        </header>

        {/* MAPA */}
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
                            <input type="number" className="w-10 bg-gray-950 text-center rounded text-white font-bold border border-gray-700 text-sm" value={item.iniciativa} onChange={(e) => { if(item.tipo === 'AMEACA') salvarGlobal({ ameacas: ameacas.map(a => a.id === item.id ? { ...a, iniciativaAtual: Number(e.target.value) } : a) }); else salvarGlobal({ jogadores: jogadores.map(j => j.id === item.id ? { ...j, iniciativa: Number(e.target.value) } : j) }) }} />
                            <span className={`flex-grow font-bold text-sm ${item.tipo === 'AMEACA' ? 'text-red-200' : 'text-blue-200'} ${isTurno ? 'text-white' : ''}`}>{item.nome}</span>
                            {item.tipo === 'JOGADOR' && <button onClick={() => salvarGlobal({ jogadores: jogadores.filter(j => j.id !== item.id) })} className="text-gray-500 hover:text-red-500 font-bold px-2 text-xs">✕</button>}
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