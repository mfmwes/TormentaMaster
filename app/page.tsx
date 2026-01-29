"use client";
import { useState, useEffect, useRef } from "react";
import { Ameaca, Jogador, ModeloAmeaca, ResultadoRolagem, ItemTimeline } from "./types/game";
import { rolarDados } from "./utils/dice";
import { ModalRolagem } from "./components/modals/ModalRolagem";
import { ModalCondicoes } from "./components/modals/ModalCondicoes"; // Importe os que você criou
import { ModalBestiario } from "./components/modals/ModalBestiario"; // Importe os que você criou
import { ThreatCard } from "./components/ThreatCard";

export default function Page() {
  const [ameacas, setAmeacas] = useState<Ameaca[]>([]);
  const [jogadores, setJogadores] = useState<Jogador[]>([]);
  const [bestiario, setBestiario] = useState<ModeloAmeaca[]>([]);
  
  // UI State
  const [modalResultado, setModalResultado] = useState<ResultadoRolagem | null>(null);
  const [modalCondicaoId, setModalCondicaoId] = useState<string | null>(null);
  const [mostrarBestiario, setMostrarBestiario] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const arquivoInputRef = useRef<HTMLInputElement>(null);

  // Inputs temporários
  const [novoNomeJog, setNovoNomeJog] = useState("");
  const [novoInicJog, setNovoInicJog] = useState("");

  /* --- PERSISTÊNCIA --- */
  useEffect(() => {
    setIsClient(true);
    const mesa = localStorage.getItem("t20-master-screen-v3");
    if (mesa) { const p = JSON.parse(mesa); setAmeacas(p.ameacas||[]); setJogadores(p.jogadores||[]); }
    const best = localStorage.getItem("t20-bestiario-v1");
    if (best) setBestiario(JSON.parse(best));
  }, []);

  useEffect(() => { if(isClient) localStorage.setItem("t20-master-screen-v3", JSON.stringify({ameacas, jogadores})); }, [ameacas, jogadores, isClient]);
  useEffect(() => { if(isClient) localStorage.setItem("t20-bestiario-v1", JSON.stringify(bestiario)); }, [bestiario, isClient]);

  /* --- AÇÕES DE AMEAÇA --- */
  const updateAmeaca = (id: string, campo: keyof Ameaca, valor: any) => {
    setAmeacas(prev => prev.map(a => a.id === id ? { ...a, [campo]: valor } : a));
  };
  const addAmeaca = () => setAmeacas([...ameacas, { id: crypto.randomUUID(), nome: "Nova Ameaça", defesa: 10, pvAtual: 10, pvMax: 10, pmAtual: 0, pmMax: 0, ataques: "Ataque +0 (1d4)", pericias: "Iniciativa +0", condicoes: [] }]);
  const removeAmeaca = (id: string) => setAmeacas(prev => prev.filter(a => a.id !== id));
  const cloneAmeaca = (original: Ameaca) => setAmeacas([...ameacas, { ...original, id: crypto.randomUUID(), nome: `${original.nome}`, iniciativaAtual: undefined }]);
  
  const toggleCondicao = (id: string, cond: string) => {
    setAmeacas(prev => prev.map(a => a.id !== id ? a : { ...a, condicoes: a.condicoes.includes(cond) ? a.condicoes.filter(c => c !== cond) : [...a.condicoes, cond] }));
  };

  /* --- ACTIONS GERAIS --- */
  const rolar = (expr: string) => setModalResultado(rolarDados(expr));
  
  const rolarIniciativa = () => {
    setAmeacas(prev => prev.map(a => {
      const match = a.pericias.match(/Iniciativa\s*:?\s*([+-]?\d+)/i);
      return { ...a, iniciativaAtual: Math.floor(Math.random() * 20) + 1 + (match ? parseInt(match[1]) : 0) };
    }));
  };

  const descansar = () => {
    if(confirm("Resetar PV/PM e Condições?")) setAmeacas(prev => prev.map(a => ({...a, pvAtual: a.pvMax, pmAtual: a.pmMax, condicoes: []})));
  };

  /* --- BESTIÁRIO & BACKUP --- */
  const salvarModelo = (a: Ameaca) => {
    setBestiario(prev => [...prev.filter(b => b.nome !== a.nome), {
      nome: a.nome, defesa: a.defesa, pvPadrao: a.pvMax, pvMax: a.pvMax, pmPadrao: a.pmMax, pmMax: a.pmMax, ataques: a.ataques, pericias: a.pericias
    }]);
    alert("Salvo!");
  };
  const importarModelo = (m: ModeloAmeaca) => {
    setAmeacas([...ameacas, { ...m, id: crypto.randomUUID(), pvAtual: m.pvPadrao, pmAtual: m.pmPadrao, iniciativaAtual: undefined, condicoes: [] }]);
    setMostrarBestiario(false);
  };
  
  // Backup Logic (Resumida para caber)
  const exportar = () => {
    const blob = new Blob([JSON.stringify({ameacas, jogadores, bestiario}, null, 2)], {type: "application/json"});
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "backup.json"; a.click();
  };
  const importar = (e: any) => {
     const file = e.target.files?.[0]; if(!file) return;
     const r = new FileReader(); r.onload = (ev) => { try { const d = JSON.parse(ev.target?.result as string); setAmeacas(d.ameacas); setJogadores(d.jogadores); setBestiario(d.bestiario); } catch(e){} }; r.readAsText(file);
  };

  /* --- TIMELINE --- */
  const timeline: ItemTimeline[] = [
    ...ameacas.filter(a => a.iniciativaAtual !== undefined).map(a => ({ id: a.id, nome: a.nome, iniciativa: a.iniciativaAtual!, tipo: "AMEACA" as const })),
    ...jogadores.map(j => ({ id: j.id, nome: j.nome, iniciativa: j.iniciativa, tipo: "JOGADOR" as const }))
  ].sort((a, b) => b.iniciativa - a.iniciativa);


  if (!isClient) return <div>Carregando...</div>;

  return (
    <div className="p-4 md:p-6 bg-gray-950 min-h-screen text-gray-100 font-sans pb-20">
      <ModalRolagem resultado={modalResultado} fechar={() => setModalResultado(null)} />
      {modalCondicaoId && <ModalCondicoes ameaca={ameacas.find(a => a.id === modalCondicaoId)!} fechar={() => setModalCondicaoId(null)} toggleCondicao={toggleCondicao} />}
      {mostrarBestiario && <ModalBestiario modelos={bestiario} fechar={() => setMostrarBestiario(false)} importar={importarModelo} excluir={(n: string) => setBestiario(prev => prev.filter(b => b.nome !== n))} />}

      {/* HEADER SIMPLIFICADO */}
      <header className="flex flex-col xl:flex-row justify-between items-center mb-6 gap-4 border-b border-gray-800 pb-4">
        <h1 className="text-3xl font-black text-red-600">TORMENTA<span className="text-white font-light">MASTER</span></h1>
        <div className="flex gap-2 items-center flex-wrap">
           <div className="flex mr-4 bg-gray-900 rounded p-1">
              <button onClick={exportar} className="px-3 text-xs text-gray-400 hover:text-white">⬇️ Backup</button>
              <label className="px-3 text-xs text-gray-400 hover:text-white cursor-pointer">⬆️ Restaurar <input type="file" className="hidden" onChange={importar} /></label>
           </div>
           <button onClick={addAmeaca} className="btn-primary bg-gray-800 border-gray-700 px-3 py-2 rounded">+ Ameaça</button>
           <button onClick={() => setMostrarBestiario(true)} className="btn-primary bg-indigo-900 border-indigo-700 px-3 py-2 rounded">📚 Bestiário</button>
           <button onClick={rolarIniciativa} className="btn-primary bg-yellow-600 border-yellow-500 px-3 py-2 rounded">⚡ Iniciativa</button>
           <button onClick={descansar} className="btn-primary bg-green-900 border-green-700 px-3 py-2 rounded">💤</button>
        </div>
      </header>

      {/* TIMELINE (Poderia ser um componente separado também) */}
      <section className="mb-8 bg-gray-900/50 rounded-xl border border-gray-800 p-4">
         <h2 className="text-gray-400 text-xs font-bold uppercase mb-2">Ordem de Turno</h2>
         {timeline.map((item, idx) => (
             <div key={item.id} className={`flex items-center gap-3 p-2 mb-1 border-l-4 ${item.tipo === 'AMEACA' ? 'border-red-600 bg-gray-800' : 'border-blue-500 bg-blue-900/20'}`}>
                 <span className="text-gray-500 font-mono w-6">#{idx+1}</span>
                 <span className="text-white font-bold">{item.iniciativa}</span>
                 <span className="flex-grow font-bold text-gray-200">{item.nome}</span>
                 {item.tipo === 'JOGADOR' && <button onClick={() => setJogadores(prev => prev.filter(j => j.id !== item.id))} className="text-red-500">✕</button>}
             </div>
         ))}
         {/* Input Jogador (Simplificado) */}
         <div className="flex gap-2 mt-2">
            <input placeholder="Nome" className="bg-gray-950 p-1 rounded text-white" value={novoNomeJog} onChange={e => setNovoNomeJog(e.target.value)} />
            <input type="number" placeholder="Inic" className="bg-gray-950 p-1 rounded text-white w-16" value={novoInicJog} onChange={e => setNovoInicJog(e.target.value)} />
            <button onClick={() => { if(novoNomeJog) { setJogadores([...jogadores, {id: crypto.randomUUID(), nome: novoNomeJog, iniciativa: Number(novoInicJog)}]); setNovoNomeJog(""); }}} className="bg-blue-700 px-3 rounded">ADD</button>
         </div>
      </section>

      {/* GRID DE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ameacas.map(a => (
          <ThreatCard 
            key={a.id} 
            ameaca={a} 
            onUpdate={updateAmeaca} 
            onDelete={removeAmeaca} 
            onClone={cloneAmeaca} 
            onSaveModel={salvarModelo} 
            onToggleCondition={() => setModalCondicaoId(a.id)}
            onRoll={rolar}
          />
        ))}
      </div>
    </div>
  );
}