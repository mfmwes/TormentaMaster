"use client";
import { useState, useEffect } from "react";
import { Ameaca, Jogador, ModeloAmeaca, LogEntry, ItemTimeline, Atributos } from "./types/game";
import { rolarDados } from "./utils/dice";
import { ModalRolagem } from "./components/modals/ModalRolagem";
import { ModalCondicoes } from "./components/modals/ModalCondicoes";
import { ModalBestiario } from "./components/modals/ModalBestiario";
import { ModalImportacao } from "./components/modals/ModalImportacao";
import { ThreatCard } from "./components/ThreatCard";
import { DiceLog } from "./components/ui/DiceLog";

export default function Page() {
  const [ameacas, setAmeacas] = useState<Ameaca[]>([]);
  const [jogadores, setJogadores] = useState<Jogador[]>([]);
  const [bestiario, setBestiario] = useState<ModeloAmeaca[]>([]);
  
  // UI States
  const [modalResultado, setModalResultado] = useState<any | null>(null);
  const [modalCondicaoId, setModalCondicaoId] = useState<string | null>(null);
  const [mostrarBestiario, setMostrarBestiario] = useState(false);
  const [mostrarImportacao, setMostrarImportacao] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // LOG & BUSCA & TURNO
  const [historico, setHistorico] = useState<LogEntry[]>([]);
  const [showLog, setShowLog] = useState(false);
  const [busca, setBusca] = useState("");
  const [turnoIndex, setTurnoIndex] = useState(-1); // Estado do Turno

  const [novoNomeJog, setNovoNomeJog] = useState("");
  const [novoInicJog, setNovoInicJog] = useState("");

  useEffect(() => {
    setIsClient(true);
    // Versão V7 para garantir compatibilidade com o player
    const mesa = localStorage.getItem("t20-master-screen-v7"); 
    if (mesa) { 
        const p = JSON.parse(mesa); 
        setAmeacas(p.ameacas||[]); 
        setJogadores(p.jogadores||[]); 
        setHistorico(p.historico||[]);
        setTurnoIndex(p.turnoIndex ?? -1);
    }
    const best = localStorage.getItem("t20-bestiario-v3");
    if (best) setBestiario(JSON.parse(best));
  }, []);

  // Salva TUDO, incluindo o turnoIndex, para o Player ler
  useEffect(() => { 
      if(isClient) localStorage.setItem("t20-master-screen-v7", JSON.stringify({ameacas, jogadores, historico, turnoIndex})); 
  }, [ameacas, jogadores, historico, turnoIndex, isClient]);
  
  useEffect(() => { if(isClient) localStorage.setItem("t20-bestiario-v3", JSON.stringify(bestiario)); }, [bestiario, isClient]);

  const rolar = (expr: string, origem = "Sistema", rotulo = "Rolagem") => {
      const res = rolarDados(expr);
      if(!res) return;
      
      const novoLog: LogEntry = {
          id: crypto.randomUUID(),
          hora: new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit', second:'2-digit'}),
          origem, rotulo, resultado: res.total.toString(), detalhes: res.detalhes, critico: res.detalhes.includes("20")
      };
      
      setHistorico(prev => [...prev.slice(-49), novoLog]);
      setModalResultado(res);
      if (!showLog) setShowLog(true);
  };

  const calcularIniciativa = (pericias: string) => {
    const match = pericias.match(/Iniciativa\s*:?\s*([+-]?\d+)/i);
    return Math.floor(Math.random() * 20) + 1 + (match ? parseInt(match[1]) : 0);
  };
  const rolarIniciativaIndividual = (id: string) => {
      const am = ameacas.find(a => a.id === id);
      if(am) {
          const val = calcularIniciativa(am.pericias);
          setAmeacas(prev => prev.map(a => a.id === id ? { ...a, iniciativaAtual: val } : a));
          rolar("1d20+?", am.nome, "Iniciativa (Auto)");
      }
  };
  const rolarIniciativaGlobal = () => {
    setAmeacas(prev => prev.map(a => ({ ...a, iniciativaAtual: calcularIniciativa(a.pericias) })));
    rolar("Iniciativa em Massa", "Mestre", "Todos os Monstros");
    setTurnoIndex(0);
  };

  const updateAmeaca = (id: string, campo: keyof Ameaca, valor: any) => setAmeacas(prev => prev.map(a => a.id === id ? { ...a, [campo]: valor } : a));
  const removeAmeaca = (id: string) => setAmeacas(prev => prev.filter(a => a.id !== id));
  const cloneAmeaca = (original: Ameaca) => setAmeacas([...ameacas, { ...original, id: crypto.randomUUID(), nome: `${original.nome} (Cópia)`, iniciativaAtual: undefined }]);
  const toggleCondicao = (id: string, cond: string) => setAmeacas(prev => prev.map(a => a.id !== id ? a : { ...a, condicoes: a.condicoes.includes(cond) ? a.condicoes.filter(c => c !== cond) : [...a.condicoes, cond] }));
  const descansar = () => { if(confirm("Resetar Combate?")) { setAmeacas(prev => prev.map(a => ({...a, pvAtual: a.pvMax, pmAtual: a.pmMax, condicoes: []}))); setTurnoIndex(-1); setHistorico([]); }};

  const atributosPadrao: Atributos = { for: "0", des: "0", con: "0", int: "0", sab: "0", car: "0" };
  const addAmeaca = () => {
    setAmeacas([...ameacas, { 
      id: crypto.randomUUID(), nome: "Nova Ameaça", nd: "1", tipo: "Monstro", deslocamento: "9m",
      defesa: 10, pvAtual: 10, pvMax: 10, pmAtual: 0, pmMax: 0, acoes: [], pericias: "Iniciativa +0", atributos: atributosPadrao, condicoes: [],
      iniciativaAtual: undefined, imagemUrl: ""
    }]);
  };
  
  const processarImportacaoTexto = (dados: Partial<Ameaca>) => {
    setAmeacas([...ameacas, { 
        id: crypto.randomUUID(),
        nome: dados.nome || "Ameaça", nd: dados.nd || "?", tipo: dados.tipo || "Criatura", deslocamento: dados.deslocamento || "9m",
        defesa: dados.defesa || 10, pvMax: dados.pvMax || 10, pvAtual: dados.pvMax || 10, pmMax: dados.pmMax || 0, pmAtual: dados.pmMax || 0,
        acoes: dados.acoes || [], pericias: dados.pericias || "Iniciativa +0", atributos: dados.atributos || atributosPadrao,
        condicoes: [], imagemUrl: "", iniciativaAtual: undefined
    } as Ameaca]);
    setMostrarImportacao(false);
  };
  
  const salvarModelo = (a: Ameaca) => {
    // Corrige o objeto para o formato ModeloAmeaca (sem ID, status atual, etc)
    const novoModelo: ModeloAmeaca = {
      nome: a.nome, nd: a.nd, tipo: a.tipo, deslocamento: a.deslocamento, defesa: a.defesa,
      pvPadrao: a.pvMax, pmPadrao: a.pmMax, pvMax: a.pvMax, pmMax: a.pmMax,
      acoes: a.acoes, pericias: a.pericias, atributos: a.atributos, imagemUrl: a.imagemUrl
    };
    setBestiario(prev => [...prev.filter(b => b.nome !== a.nome), novoModelo]);
    alert("Salvo!");
  };

  const importarModelo = (m: ModeloAmeaca) => {
    setAmeacas([...ameacas, { ...m, id: crypto.randomUUID(), pvAtual: m.pvPadrao, pmAtual: m.pmPadrao, condicoes: [], iniciativaAtual: undefined }]);
    setMostrarBestiario(false);
  };
  
  const exportar = () => { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify({ameacas, jogadores, bestiario, historico, turnoIndex}, null, 2)], {type: "application/json"})); a.download = "t20-backup-v7.json"; a.click(); };
  const importar = (e: any) => { const r = new FileReader(); r.onload = (ev) => { try { const d = JSON.parse(ev.target?.result as string); setAmeacas(d.ameacas); setJogadores(d.jogadores); setBestiario(d.bestiario); setHistorico(d.historico||[]); setTurnoIndex(d.turnoIndex ?? -1); } catch(e){} }; if(e.target.files?.[0]) r.readAsText(e.target.files[0]); };

  const timeline: ItemTimeline[] = [
    ...ameacas.filter(a => a.iniciativaAtual !== undefined).map(a => ({ id: a.id, nome: a.nome, iniciativa: a.iniciativaAtual!, tipo: "AMEACA" as const })),
    ...jogadores.map(j => ({ id: j.id, nome: j.nome, iniciativa: j.iniciativa, tipo: "JOGADOR" as const }))
  ].sort((a, b) => b.iniciativa - a.iniciativa);

  const proximoTurno = () => { if (timeline.length > 0) setTurnoIndex((prev) => (prev + 1) % timeline.length); };
  const ameacasFiltradas = ameacas.filter(a => a.nome.toLowerCase().includes(busca.toLowerCase()) || a.tipo.toLowerCase().includes(busca.toLowerCase()));

  // Abre a janela do jogador em nova aba
  const abrirModoJogador = () => {
    window.open('/player', 'PlayerView', 'width=1280,height=720,menubar=no,toolbar=no');
  };

  if (!isClient) return <div>Carregando...</div>;
  
  return (
    <div className="flex bg-gray-950 min-h-screen text-gray-100 font-sans overflow-x-hidden">
      
      <div className={`flex-grow p-4 md:p-6 pb-20 w-full transition-all duration-300 ease-in-out ${showLog ? 'xl:mr-80' : ''}`}>
        
        <ModalRolagem resultado={modalResultado} fechar={() => setModalResultado(null)} />
        {modalCondicaoId && <ModalCondicoes ameaca={ameacas.find(a => a.id === modalCondicaoId)!} fechar={() => setModalCondicaoId(null)} toggleCondicao={toggleCondicao} />}
        {mostrarBestiario && <ModalBestiario modelos={bestiario} fechar={() => setMostrarBestiario(false)} importar={importarModelo} excluir={(n: string) => setBestiario(prev => prev.filter(b => b.nome !== n))} />}
        {mostrarImportacao && <ModalImportacao fechar={() => setMostrarImportacao(false)} confirmar={processarImportacaoTexto} />}
        
        <header className="flex flex-col xl:flex-row justify-between items-center mb-6 gap-4 border-b border-gray-800 pb-4">
            <h1 className="text-3xl font-black text-red-600">TORMENTA<span className="text-white font-light">MASTER</span></h1>
            
            <div className="relative w-full max-w-md mx-4">
                <input type="text" placeholder="🔍 Buscar ameaça..." className="w-full bg-gray-900 border border-gray-700 rounded-full py-2 px-4 text-sm focus:outline-none focus:border-red-500" value={busca} onChange={(e) => setBusca(e.target.value)} />
                {busca && <button onClick={() => setBusca("")} className="absolute right-3 top-2 text-gray-500 hover:text-white">✕</button>}
            </div>

            <div className="flex gap-2 items-center flex-wrap justify-center">
               <div className="flex mr-2 bg-gray-900 rounded p-1 border border-gray-800">
                  <button onClick={exportar} className="px-3 text-xs text-gray-400 hover:text-white border-r border-gray-700">⬇️</button>
                  <label className="px-3 text-xs text-gray-400 hover:text-white cursor-pointer">⬆️ <input type="file" className="hidden" onChange={importar} /></label>
               </div>
               
               {/* BOTÃO MODO TV */}
               <button onClick={abrirModoJogador} className="bg-purple-900 hover:bg-purple-800 border border-purple-600 px-3 py-2 rounded font-bold text-sm flex items-center gap-2 shadow-lg shadow-purple-900/20 transition hover:scale-105" title="Abrir em nova janela para TV/Stream">
                   📺 Modo TV
               </button>

               <button onClick={() => setShowLog(!showLog)} className={`bg-gray-800 border px-3 py-2 rounded font-bold text-sm transition ${showLog ? 'border-blue-500 text-blue-400' : 'border-gray-700 hover:bg-gray-700'}`}>📜 Log</button>
               <button onClick={() => setMostrarImportacao(true)} className="bg-gray-800 hover:bg-gray-700 border border-gray-700 px-3 py-2 rounded font-bold text-sm">📋 Importar</button>
               <button onClick={addAmeaca} className="bg-gray-800 border-gray-700 px-3 py-2 rounded font-bold text-sm">+ Nova</button>
               <button onClick={() => setMostrarBestiario(true)} className="bg-indigo-900 border-indigo-700 px-3 py-2 rounded font-bold text-sm">📚 Bestiário</button>
               <button onClick={rolarIniciativaGlobal} className="bg-yellow-600 border-yellow-500 px-3 py-2 rounded font-bold text-sm">⚡ Iniciar</button>
               <button onClick={descansar} className="bg-green-900 border-green-700 px-3 py-2 rounded font-bold text-sm" title="Descanso">💤</button>
            </div>
        </header>

        <section className="mb-8 bg-gray-900/50 rounded-xl border border-gray-800 p-4 relative">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-gray-400 text-xs font-bold uppercase">Ordem de Turno</h2>
                <button onClick={proximoTurno} className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded font-bold transition flex items-center gap-1">▶ Próximo Turno</button>
            </div>
            <div className="flex flex-col gap-1 max-h-60 overflow-y-auto pr-1">
                {timeline.map((item, idx) => {
                    const isTurno = idx === turnoIndex;
                    return (
                        <div key={`${item.tipo}-${item.id}`} className={`flex items-center gap-3 p-2 border-l-4 rounded transition-all ${isTurno ? 'bg-gray-700 border-yellow-400' : 'bg-opacity-20 border-transparent ' + (item.tipo === 'AMEACA' ? 'bg-gray-800 border-l-red-800' : 'bg-blue-900 border-l-blue-800')}`} onClick={() => setTurnoIndex(idx)}>
                            <span className={`font-mono w-6 font-bold text-center ${isTurno ? 'text-yellow-400' : 'text-gray-500'}`}>{isTurno ? '▶' : `#${idx+1}`}</span>
                            <input type="number" className="w-10 bg-gray-950 text-center rounded text-white font-bold border border-gray-700 text-sm" value={item.iniciativa} onChange={(e) => { if(item.tipo === 'AMEACA') updateAmeaca(item.id, 'iniciativaAtual', Number(e.target.value)); else setJogadores(prev => prev.map(j => j.id === item.id ? {...j, iniciativa: Number(e.target.value)} : j)) }} />
                            <span className={`flex-grow font-bold text-sm ${item.tipo === 'AMEACA' ? 'text-red-200' : 'text-blue-200'} ${isTurno ? 'text-white' : ''}`}>{item.nome}</span>
                            {item.tipo === 'JOGADOR' && <button onClick={() => setJogadores(prev => prev.filter(j => j.id !== item.id))} className="text-gray-500 hover:text-red-500 font-bold px-2 text-xs">✕</button>}
                        </div>
                    );
                })}
            </div>
            <div className="flex gap-2 mt-3 pt-3 border-t border-gray-800">
                <input placeholder="Nome Jogador" className="bg-gray-950 p-1.5 rounded text-white border border-gray-700 text-xs flex-grow" value={novoNomeJog} onChange={e => setNovoNomeJog(e.target.value)} />
                <input type="number" placeholder="Inic" className="bg-gray-950 p-1.5 rounded text-white border border-gray-700 text-xs w-14 text-center" value={novoInicJog} onChange={e => setNovoInicJog(e.target.value)} />
                <button onClick={() => { if(novoNomeJog) { setJogadores([...jogadores, {id: crypto.randomUUID(), nome: novoNomeJog, iniciativa: Number(novoInicJog)}]); setNovoNomeJog(""); }}} className="bg-blue-700 hover:bg-blue-600 px-3 rounded font-bold text-xs">ADD</button>
            </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ameacasFiltradas.length === 0 && ameacas.length > 0 && <div className="col-span-full text-center py-10 text-gray-500">Sem resultados para "{busca}".</div>}
            {ameacasFiltradas.map(a => (
                <div key={a.id} className={`transition-all duration-500 ${timeline[turnoIndex]?.id === a.id ? 'ring-2 ring-yellow-400 shadow-2xl shadow-yellow-900/20 scale-[1.02] z-10' : ''}`}>
                    <ThreatCard ameaca={a} onUpdate={updateAmeaca} onDelete={removeAmeaca} onClone={cloneAmeaca} onSaveModel={salvarModelo} onToggleCondition={() => setModalCondicaoId(a.id)} onRoll={rolar} onRollIniciativa={() => rolarIniciativaIndividual(a.id)} />
                </div>
            ))}
        </div>
      </div>
      <DiceLog historico={historico} limpar={() => setHistorico([])} isOpen={showLog} onClose={() => setShowLog(false)} />
    </div>
  );
}