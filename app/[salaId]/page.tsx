"use client";

import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Ameaca, Atributos, ItemTimeline, Jogador, LogEntry, ModeloAmeaca } from "../types/game";
import { rolarDados } from "../utils/dice";

import { BattleMap } from "../components/BattleMap";
import { ModalBestiario } from "../components/modals/ModalBestiario";
import { ModalCondicoes } from "../components/modals/ModalCondicoes";
import { ModalImportacao } from "../components/modals/ModalImportacao";
import { ModalRolagem } from "../components/modals/ModalRolagem";
import { ThreatCard } from "../components/ThreatCard";
import { DiceLog } from "../components/ui/DiceLog";
import { UploadButton } from "../components/ui/UploadButton";

import { ModalLoginMestre } from "../components/modals/ModalLoginMestre";
import { PlayerScreen } from "../components/PlayerScreen";

export default function MesaPage() {
  const params = useParams();
  const salaId = params.salaId as string;

  const dadosRemotos = useQuery(api.mesa.lerSala, { codigo: salaId });
  const salvarRemoto = useMutation(api.mesa.atualizarSala);
  const definirSenhaRemoto = useMutation(api.mesa.definirSenha);
  const verificarSenhaRemoto = useMutation(api.mesa.verificarSenha);
  const criarSalaRemoto = useMutation(api.mesa.criarSala);

  const [isMaster, setIsMaster] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [ameacas, setAmeacas] = useState<Ameaca[]>([]);
  const [jogadores, setJogadores] = useState<Jogador[]>([]);
  const [historico, setHistorico] = useState<LogEntry[]>([]);
  const [turnoIndex, setTurnoIndex] = useState(-1);
  const [mapaUrl, setMapaUrl] = useState("");
  
  const [bestiario, setBestiario] = useState<ModeloAmeaca[]>([]); 
  const [modalResultado, setModalResultado] = useState<any | null>(null);
  const [modalCondicaoId, setModalCondicaoId] = useState<string | null>(null);
  const [mostrarBestiario, setMostrarBestiario] = useState(false);
  const [mostrarImportacao, setMostrarImportacao] = useState(false);
  const [showLog, setShowLog] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [busca, setBusca] = useState("");
  
  const [novoNomeJog, setNovoNomeJog] = useState("");
  const [novoInicJog, setNovoInicJog] = useState("");
  const [novoAvatarJog, setNovoAvatarJog] = useState<string | null>(null);

  useEffect(() => {
    if (dadosRemotos?.dados) {
      setAmeacas(dadosRemotos.dados.ameacas || []);
      setJogadores(dadosRemotos.dados.jogadores || []);
      setHistorico(dadosRemotos.dados.historico || []);
      setTurnoIndex(dadosRemotos.dados.turnoIndex ?? -1);
      setMapaUrl(dadosRemotos.dados.mapaUrl || "");

      if (dadosRemotos.dados.mapaUrl && isMaster && !showMap) setShowMap(true);
    }

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
    ameacas?: any[], 
    jogadores?: any[], 
    historico?: LogEntry[], 
    turnoIndex?: number, 
    mapaUrl?: string,
    mapaStorageId?: string | null
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
        mapaUrl: partial.mapaUrl ?? mapaUrl,
        mapaStorageId: partial.mapaStorageId !== undefined 
            ? partial.mapaStorageId 
            : (dadosRemotos?.dados as any)?.mapaStorageId
      }
    });
  };

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

  const updateAmeaca = (id: string, campo: string, valor: any) => {
    if (campo === "RESET_IMAGEM") {
      salvarGlobal({ 
        ameacas: ameacas.map(a => a.id === id ? { ...a, imagemUrl: "", imagemStorageId: null } : a) 
      });
      return;
    }
    salvarGlobal({ ameacas: ameacas.map(a => a.id === id ? { ...a, [campo]: valor } : a) });
  };

  const updateJogador = (id: string, campo: string, valor: any) => {
    salvarGlobal({ 
      jogadores: jogadores.map(j => j.id === id ? { ...j, [campo]: valor } : j) 
    });
  };

  const removeAmeaca = (id: string) => salvarGlobal({ ameacas: ameacas.filter(a => a.id !== id) });
  
  const limparTodasAmeacas = () => {
    if (confirm("⚠️ TEM CERTEZA? \n\nIsso apagará TODAS as fichas de ameaça da mesa. Os jogadores serão mantidos.")) {
        salvarGlobal({ ameacas: [], turnoIndex: -1 });
    }
  };

  const addAmeaca = () => {
    const atributosPadrao: Atributos = { for: "0", des: "0", con: "0", int: "0", sab: "0", car: "0" };
    const nova: Ameaca = {
      id: crypto.randomUUID(), nome: "Nova Ameaça", nd: "1", tipo: "Monstro", deslocamento: "9m",
      defesa: 10, pvAtual: 10, pvMax: 10, pmAtual: 0, pmMax: 0, acoes: [], 
      magias: [], // Inicia vazio para evitar erros
      pericias: "Iniciativa +0", atributos: atributosPadrao, condicoes: [], 
      iniciativaAtual: undefined, imagemUrl: "", x: 50, y: 50, tamanho: 1
    };
    
    salvarGlobal({ ameacas: [...ameacas, nova] });
    setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  const cloneAmeaca = (original: Ameaca) => {
    salvarGlobal({ ameacas: [...ameacas, { ...original, id: crypto.randomUUID(), nome: `${original.nome} (Cópia)`, iniciativaAtual: undefined, x: 50, y: 50 }] });
    setTimeout(() => { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }, 100);
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

  const redimensionarToken = (id: string, tipo: "AMEACA" | "JOGADOR", novoTamanho: number) => {
    if (tipo === "AMEACA") salvarGlobal({ ameacas: ameacas.map(a => a.id === id ? { ...a, tamanho: novoTamanho } : a) });
    else salvarGlobal({ jogadores: jogadores.map(j => j.id === id ? { ...j, tamanho: novoTamanho } : j) });
  };

  const addJogador = () => {
    if (novoNomeJog) {
      salvarGlobal({ 
        jogadores: [...jogadores, { 
          id: crypto.randomUUID(), 
          nome: novoNomeJog, 
          iniciativa: Number(novoInicJog), 
          imagemStorageId: novoAvatarJog || undefined, 
          x: 50, y: 50, tamanho: 1 
        }] 
      });
      setNovoNomeJog("");
      setNovoInicJog("");
      setNovoAvatarJog(null);
    }
  };

  const timeline: ItemTimeline[] = [
    ...ameacas.filter(a => a.iniciativaAtual !== undefined).map(a => ({ id: a.id, nome: a.nome, iniciativa: a.iniciativaAtual!, tipo: "AMEACA" as const })),
    ...jogadores.map(j => ({ id: j.id, nome: j.nome, iniciativa: j.iniciativa, tipo: "JOGADOR" as const }))
  ].sort((a, b) => b.iniciativa - a.iniciativa);

  const proximoTurno = () => { if (timeline.length > 0) salvarGlobal({ turnoIndex: (turnoIndex + 1) % timeline.length }); };
  const ameacasFiltradas = ameacas.filter(a => a.nome.toLowerCase().includes(busca.toLowerCase()) || a.tipo.toLowerCase().includes(busca.toLowerCase()));
  
  const tokensMap = [
    ...ameacas.map(a => ({ id: a.id, nome: a.nome, tipo: "AMEACA" as const, x: a.x || 50, y: a.y || 50, tamanho: a.tamanho, imagemUrl: a.imagemUrl })),
    ...jogadores.map(j => ({ id: j.id, nome: j.nome, tipo: "JOGADOR" as const, x: j.x || 50, y: j.y || 50, tamanho: j.tamanho, imagemUrl: j.imagemUrl }))
  ];

  const salvarModelo = (a: Ameaca) => {
    const modelo: ModeloAmeaca = { ...a, pvPadrao: a.pvMax, pmPadrao: a.pmMax };
    setBestiario(prev => [...prev.filter(b => b.nome !== a.nome), modelo]);
    alert("Salvo no Bestiário Local!");
  };
  const importarModelo = (m: ModeloAmeaca) => {
    salvarGlobal({ ameacas: [...ameacas, { ...m, id: crypto.randomUUID(), pvAtual: m.pvPadrao, pmAtual: m.pmPadrao, condicoes: [], iniciativaAtual: undefined, x: 50, y: 50 }] });
    setMostrarBestiario(false);
    setTimeout(() => { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }, 100);
  };
  const processarImportacaoTexto = (dados: Partial<Ameaca>) => {
    const atributosPadrao: Atributos = { for: "0", des: "0", con: "0", int: "0", sab: "0", car: "0" };
    const nova: Ameaca = {
        id: crypto.randomUUID(), nome: dados.nome || "Ameaça", nd: dados.nd || "?", tipo: dados.tipo || "Criatura", deslocamento: dados.deslocamento || "9m",
        defesa: dados.defesa || 10, pvMax: dados.pvMax || 10, pvAtual: dados.pvMax || 10, pmMax: dados.pmMax || 0, pmAtual: dados.pmMax || 0,
        acoes: dados.acoes || [], 
        magias: (dados.magias || []).map(m => ({...m, aprimoramentos: m.aprimoramentos || []})),
        pericias: dados.pericias || "Iniciativa +0", atributos: dados.atributos || atributosPadrao,
        condicoes: [], imagemUrl: "", iniciativaAtual: undefined, x: 50, y: 50, tamanho: 1
    } as Ameaca;
    salvarGlobal({ ameacas: [...ameacas, nova] });
    setMostrarImportacao(false);
    setTimeout(() => { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }, 100);
  };

  // --- ESTILOS PREMIUM ---
  const btnBase = "px-4 py-2 rounded-lg font-bold text-sm transition-all duration-200 flex items-center gap-2 shadow-lg backdrop-blur-sm border border-white/5 active:scale-95";
  const btnPrimary = `${btnBase} bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white shadow-amber-900/20`;
  const btnDanger = `${btnBase} bg-gradient-to-r from-red-900 to-red-700 hover:from-red-800 hover:to-red-600 text-white shadow-red-900/20 border-red-800/50`;
  const btnGlass = `${btnBase} bg-gray-800/40 hover:bg-gray-700/60 text-blue-100 border-white/10 hover:border-blue-400/30 hover:text-white`;
  const btnAction = `${btnBase} bg-blue-900/60 hover:bg-blue-800/80 text-blue-100 border-blue-500/20 hover:border-blue-400/50`;

  if (dadosRemotos === undefined) {
    return <div className="h-screen bg-[#050505] flex items-center justify-center text-white animate-pulse tracking-widest font-mono">CARREGANDO SISTEMA...</div>;
  }

  if (dadosRemotos === null) {
    return (
        <div className="h-screen bg-[#050505] flex flex-col items-center justify-center text-white p-4 text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-[#050505] to-black">
            <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-900 mb-6 drop-shadow-2xl">404</h1>
            <p className="text-2xl text-gray-400 mb-2 font-light">A sala <span className="text-red-500 font-mono font-bold tracking-wider">"{salaId}"</span> não existe.</p>
            <p className="text-gray-600 mb-10 text-sm">O vazio aguarda a sua criação.</p>
            <button onClick={() => criarSalaRemoto({ codigo: salaId })} className={`${btnPrimary} px-8 py-3 text-lg`}>
                🔥 Forjar Nova Mesa
            </button>
            <a href="/" className="mt-12 text-gray-700 hover:text-gray-500 text-xs uppercase tracking-widest transition-colors">Voltar para o início</a>
        </div>
    );
  }

  if (showLoginModal) {
      return <ModalLoginMestre ehPrimeiroAcesso={!(dadosRemotos as any).senha} onConfirmar={tentarLogin} />;
  }

  if (!isMaster) {
      return (
          <div className="relative w-full h-full">
              <button onClick={() => setShowLoginModal(true)} className="fixed top-4 right-4 z-[100] bg-black/50 hover:bg-red-900/80 text-white/50 hover:text-white p-3 rounded-full backdrop-blur-md transition-all border border-white/10 hover:border-red-500 hover:scale-110 shadow-2xl" title="Acesso do Mestre">🔒</button>
              
              <PlayerScreen 
                ameacas={ameacas} 
                jogadores={jogadores} 
                turnoIndex={turnoIndex} 
                mapaUrl={mapaUrl}
                historico={historico}
                onMoveToken={moverToken}
                onResizeToken={redimensionarToken}
              />
          </div>
      );
  }

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-gray-100 font-sans overflow-x-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0a0a0a] to-black">
      
      {/* HEADER FIXO */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl flex flex-col xl:flex-row justify-between items-center gap-4 py-3 px-6 transition-all duration-300">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 flex items-center gap-2 tracking-tighter filter drop-shadow-md">
                TORMENTA<span className="text-gray-500 font-light tracking-widest text-lg">MASTER</span> 
            </h1>
            <span className="hidden md:block h-6 w-px bg-white/10"></span>
            <span className="text-xs text-gray-500 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5 shadow-inner">Sala: <span className="text-gray-300">{salaId}</span></span>
          </div>
          
          {showMap ? (
              <div className="flex-grow max-w-lg mx-2 animate-in fade-in zoom-in duration-300 flex gap-2 items-center">
                  <input className="w-full bg-black/50 border border-white/10 text-gray-300 text-xs rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500/50 focus:bg-black/80 transition-all placeholder-gray-700 shadow-inner" placeholder="Cole o link do mapa ou Upload..." value={mapaUrl} onChange={(e) => salvarGlobal({ mapaUrl: e.target.value })} />
                  <UploadButton label="Upload" onUploadComplete={(id) => salvarGlobal({ mapaStorageId: id, mapaUrl: "" })} className={`${btnAction} py-1.5 px-3 text-xs whitespace-nowrap`}/>
                  {(mapaUrl || (dadosRemotos?.dados as any)?.mapaStorageId) && (
                      <button onClick={() => salvarGlobal({ mapaUrl: "", mapaStorageId: null })} className={`${btnDanger} py-1.5 px-3`} title="Remover Mapa">🗑️</button>
                  )}
              </div>
          ) : (
              <div className="relative w-full max-w-md mx-4 group">
                  <input type="text" placeholder="🔍 Buscar ameaça..." className="w-full bg-black/30 border border-white/10 rounded-full py-2 pl-5 pr-10 text-sm focus:outline-none focus:border-red-500/50 focus:bg-black/60 transition-all text-gray-300 placeholder-gray-600 shadow-inner" value={busca} onChange={(e) => setBusca(e.target.value)} />
                  {busca && <button onClick={() => setBusca("")} className="absolute right-3 top-2 text-gray-600 hover:text-red-400 transition-colors">✕</button>}
              </div>
          )}

          <div className="flex gap-2 items-center flex-wrap justify-center">
             <button onClick={() => setShowMap(!showMap)} className={`${btnGlass} ${showMap ? 'bg-blue-900/40 border-blue-500/40 text-blue-200' : ''}`}>🗺️ <span className="hidden xl:inline">Mapa</span></button>
             <button onClick={() => setShowLog(!showLog)} className={`${btnGlass} ${showLog ? 'bg-blue-900/40 border-blue-500/40 text-blue-200' : ''}`}>📜</button>
             <div className="h-6 w-px bg-white/10 mx-1 hidden lg:block"></div>
             <button onClick={() => setMostrarImportacao(true)} className={btnGlass}>📋 <span className="hidden lg:inline">Importar</span></button>
             <button onClick={() => setMostrarBestiario(true)} className={btnGlass}>📚 <span className="hidden lg:inline">Bestiário</span></button>
             <button onClick={addAmeaca} className={btnAction}>+ <span className="hidden sm:inline">Nova</span></button>
             <div className="h-6 w-px bg-white/10 mx-1 hidden lg:block"></div>
             <button onClick={rolarIniciativaGlobal} className={btnPrimary}>⚡ <span className="hidden lg:inline">Iniciar</span></button>
             <button onClick={limparTodasAmeacas} className={btnDanger} title="Limpar Ameaças">🧹</button>
             <button onClick={() => { if(confirm("Deseja resetar o combate?")) salvarGlobal({ ameacas: ameacas.map(a => ({...a, pvAtual: a.pvMax, pmAtual: a.pmMax, condicoes: []})), turnoIndex: -1, historico: [] }) }} className={`${btnGlass} text-green-100 hover:text-green-300 hover:border-green-500/30`} title="Descanso / Resetar">💤</button>
          </div>
      </header>

      {/* CONTEÚDO PRINCIPAL - Padding Top ajustado para não ficar atrás do header fixo */}
      <div className={`flex-grow p-4 md:p-8 pt-[220px] md:pt-[100px] w-full transition-all duration-300 ease-in-out ${showLog ? 'xl:mr-80' : ''}`}>
        
        <ModalRolagem resultado={modalResultado} fechar={() => setModalResultado(null)} />
        {modalCondicaoId && <ModalCondicoes ameaca={ameacas.find(a => a.id === modalCondicaoId)!} fechar={() => setModalCondicaoId(null)} toggleCondicao={toggleCondicao} />}
        {mostrarBestiario && <ModalBestiario modelos={bestiario} fechar={() => setMostrarBestiario(false)} importar={importarModelo} excluir={(n: string) => setBestiario(prev => prev.filter(b => b.nome !== n))} />}
        {mostrarImportacao && <ModalImportacao fechar={() => setMostrarImportacao(false)} confirmar={processarImportacaoTexto} />}
        
        {/* MAPA */}
        {showMap && (
            <div className="mb-8 w-full aspect-video bg-black/80 rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl animate-in fade-in slide-in-from-top-4 ring-1 ring-white/5">
                <BattleMap mapaUrl={mapaUrl} tokens={tokensMap} onMoveToken={moverToken} onResizeToken={redimensionarToken} isGm={true} />
                <div className="absolute bottom-3 right-3 text-[10px] text-gray-400 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 pointer-events-none shadow-lg">Arraste tokens • Ctrl+Scroll p/ Zoom • Scroll no Token p/ Tamanho</div>
            </div>
        )}

        {/* TIMELINE */}
        <section className="mb-8 bg-gray-900/40 backdrop-blur-md rounded-2xl border border-white/5 p-5 relative shadow-xl overflow-hidden group/timeline hover:border-white/10 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-purple-900/5 pointer-events-none"></div>
            <div className="flex justify-between items-center mb-4 relative z-10">
                <h2 className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>Ordem de Turno</h2>
                <button onClick={proximoTurno} className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-full font-bold transition shadow-lg shadow-blue-900/20 flex items-center gap-1 border border-blue-400/20 active:scale-95">▶ Próximo Turno</button>
            </div>
            
            <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar relative z-10">
                {timeline.map((item, idx) => {
                    const isTurno = idx === turnoIndex;
                    const dadosItem = item.tipo === 'AMEACA' ? ameacas.find(a => a.id === item.id) : jogadores.find(j => j.id === item.id);
                    return (
                        <div key={`${item.tipo}-${item.id}`} className={`flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 relative overflow-hidden group ${isTurno ? 'bg-gradient-to-r from-amber-900/40 to-gray-900/40 border-amber-500/50 shadow-lg shadow-amber-900/10' : 'bg-black/20 border-white/5 hover:bg-white/5 hover:border-white/10'}`} onClick={() => salvarGlobal({ turnoIndex: idx })}>
                            {isTurno && <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.8)]"></div>}
                            <span className={`font-mono w-6 font-bold text-center text-lg ${isTurno ? 'text-amber-400' : 'text-gray-600'}`}>{isTurno ? '▶' : `#${idx+1}`}</span>
                            <input type="number" className={`w-12 bg-black/40 text-center rounded-lg font-bold border text-sm py-1 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${isTurno ? 'text-amber-100 border-amber-900/50' : 'text-gray-400 border-white/5'}`} value={item.iniciativa} onClick={(e) => e.stopPropagation()} onChange={(e) => { if(item.tipo === 'AMEACA') salvarGlobal({ ameacas: ameacas.map(a => a.id === item.id ? { ...a, iniciativaAtual: Number(e.target.value) } : a) }); else salvarGlobal({ jogadores: jogadores.map(j => j.id === item.id ? { ...j, iniciativa: Number(e.target.value) } : j) }) }} />
                            <div className="relative">
                                {dadosItem?.imagemUrl ? <img src={dadosItem.imagemUrl} className={`w-10 h-10 rounded-full object-cover border-2 shadow-md ${isTurno ? 'border-amber-500 shadow-amber-500/20' : 'border-gray-700'}`} /> : <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl bg-black/40 border-2 ${isTurno ? 'border-amber-500/30 text-amber-500' : 'border-white/5 text-gray-600'}`}>{item.tipo === 'AMEACA' ? '👾' : '🛡️'}</div>}
                            </div>
                            <span className={`flex-grow font-bold text-sm tracking-wide ${item.tipo === 'AMEACA' ? 'text-red-300' : 'text-blue-300'} ${isTurno ? 'text-white scale-[1.02]' : ''}`}>{item.nome}</span>
                            {item.tipo === 'JOGADOR' && (
                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
                                    <UploadButton compact className={`w-7 h-7 flex items-center justify-center rounded-lg border transition text-[10px] ${dadosItem?.imagemUrl ? 'bg-blue-600/20 border-blue-500/50 text-blue-200' : 'bg-gray-800 border-gray-600 text-gray-400 hover:text-white'}`} label={dadosItem?.imagemUrl ? "Img" : "📷"} onUploadComplete={(id) => updateJogador(item.id, "imagemStorageId", id)}/>
                                    <button onClick={() => salvarGlobal({ jogadores: jogadores.filter(j => j.id !== item.id) })} className="text-gray-500 hover:text-red-400 hover:bg-red-900/20 w-7 h-7 flex items-center justify-center rounded-lg border border-transparent hover:border-red-900/50 transition" title="Remover Jogador">✕</button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            
            <div className="flex gap-3 mt-4 pt-4 border-t border-white/5 items-center relative z-10">
                <input placeholder="Nome Jogador" className="bg-black/30 p-2 rounded-lg text-gray-300 border border-white/10 text-sm flex-grow focus:outline-none focus:border-blue-500/50 focus:bg-black/50 transition-all placeholder-gray-600" value={novoNomeJog} onChange={e => setNovoNomeJog(e.target.value)} />
                <input type="number" placeholder="Inic" className="bg-black/30 p-2 rounded-lg text-gray-300 border border-white/10 text-sm w-16 text-center focus:outline-none focus:border-blue-500/50" value={novoInicJog} onChange={e => setNovoInicJog(e.target.value)} />
                <UploadButton compact className={`p-2 rounded-lg border text-xs font-bold w-12 flex items-center justify-center ${novoAvatarJog ? 'bg-green-900/30 border-green-500/50 text-green-400' : 'bg-gray-800/50 border-white/10 text-gray-500 hover:text-gray-300'}`} label={novoAvatarJog ? "OK" : "Img"} onUploadComplete={(id) => setNovoAvatarJog(id)}/>
                <button onClick={addJogador} className="bg-blue-700 hover:bg-blue-600 px-6 py-2 rounded-lg font-bold text-xs text-white shadow-lg shadow-blue-900/20 transition active:scale-95">ADD</button>
            </div>
        </section>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
            {ameacasFiltradas.length === 0 && ameacas.length > 0 && <div className="col-span-full text-center py-20 text-gray-600 font-mono tracking-widest uppercase text-sm border-2 border-dashed border-gray-900 rounded-3xl">Sem resultados para "{busca}"</div>}
            {ameacasFiltradas.map(a => (
                <div key={a.id} className={`transition-all duration-500 ${timeline[turnoIndex]?.id === a.id ? 'ring-4 ring-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.2)] scale-[1.02] z-10 rounded-2xl' : ''}`}>
                    <ThreatCard ameaca={a} onUpdate={updateAmeaca} onDelete={removeAmeaca} onClone={cloneAmeaca} onSaveModel={salvarModelo} onToggleCondition={() => setModalCondicaoId(a.id)} onRoll={rolar} onRollIniciativa={() => rolarIniciativaIndividual(a.id)} />
                </div>
            ))}
        </div>
      </div>
      <DiceLog historico={historico} limpar={() => salvarGlobal({ historico: [] })} isOpen={showLog} onClose={() => setShowLog(false)} />
    </div>
  );
}