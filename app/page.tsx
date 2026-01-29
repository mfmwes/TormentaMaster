"use client";

import React, { useState, useEffect } from "react";

/* =======================
   DADOS: CONDIÇÕES T20
======================= */

const CONDICOES_DB = [
  { nome: "Abalado", efeito: "–2 em testes de perícia. Se ficar abalado novamente, fica apavorado." },
  { nome: "Agarrado", efeito: "Desprevenido e imóvel, –2 em ataque, só ataca com armas leves." },
  { nome: "Alquebrado", efeito: "Custo de mana aumenta em +1." },
  { nome: "Apavorado", efeito: "–5 em testes de perícia, deve fugir da fonte do medo." },
  { nome: "Atordoado", efeito: "Desprevenido e não pode fazer ações." },
  { nome: "Caído", efeito: "–5 na Defesa (corpo a corpo), +5 Defesa (distância), –5 em ataque corpo a corpo, deslocamento 1,5m." },
  { nome: "Cego", efeito: "Desprevenido e lento, não faz testes de Percepção (visão), –5 em perícias de For/Des. Alvos têm camuflagem total." },
  { nome: "Confuso", efeito: "Comporta-se aleatoriamente (role 1d6 no início do turno)." },
  { nome: "Debilitado", efeito: "–5 em Força, Destreza e Constituição. Se novamente, fica inconsciente." },
  { nome: "Desprevenido", efeito: "–5 na Defesa e em Reflexos." },
  { nome: "Doente", efeito: "Sob efeito de uma doença." },
  { nome: "Em Chamas", efeito: "Sofre 1d6 de dano de fogo no início do turno. Ação padrão para apagar." },
  { nome: "Enfeitiçado", efeito: "Prestativo com a fonte (+10 em Diplomacia contra o alvo)." },
  { nome: "Enjoado", efeito: "Só pode realizar uma ação padrão ou de movimento." },
  { nome: "Enredado", efeito: "Lento, vulnerável e –2 em testes de ataque." },
  { nome: "Envenenado", efeito: "Efeito varia conforme o veneno (dano recorrente, etc)." },
  { nome: "Esmorecido", efeito: "–5 em Inteligência, Sabedoria e Carisma." },
  { nome: "Exausto", efeito: "Debilitado, lento e vulnerável. Se novamente, fica inconsciente." },
  { nome: "Fascinado", efeito: "–5 em Percepção, não pode agir, apenas observa." },
  { nome: "Fatigado", efeito: "Fraco e vulnerável. Se novamente, fica exausto." },
  { nome: "Fraco", efeito: "–2 em Força, Destreza e Constituição. Se novamente, fica debilitado." },
  { nome: "Frustrado", efeito: "–2 em Inteligência, Sabedoria e Carisma. Se novamente, fica esmorecido." },
  { nome: "Imóvel", efeito: "Deslocamento reduzido a 0m." },
  { nome: "Inconsciente", efeito: "Indefeso e sem ações." },
  { nome: "Indefeso", efeito: "Desprevenido, –10 na Defesa, falha em Reflexos, sofre golpe de misericórdia." },
  { nome: "Lento", efeito: "Deslocamento à metade, não pode correr ou investir." },
  { nome: "Ofuscado", efeito: "–2 em testes de ataque e de Percepção." },
  { nome: "Paralisado", efeito: "Imóvel e indefeso, só ações mentais." },
  { nome: "Pasmo", efeito: "Não pode fazer ações." },
  { nome: "Petrificado", efeito: "Inconsciente e RD 8." },
  { nome: "Sangrando", efeito: "Perde 1d6 PV no início do turno (CD 15 Con para parar)." },
  { nome: "Sobrecarregado", efeito: "Penalidade de armadura –5, deslocamento –3m." },
  { nome: "Surdo", efeito: "Sem Percepção (ouvir), –5 em Iniciativa, ruim para magias." },
  { nome: "Surpreendido", efeito: "Desprevenido e sem ações." },
  { nome: "Vulnerável", efeito: "–2 na Defesa." },
];

/* =======================
   TIPOS
======================= */

type Ameaca = {
  id: string;
  nome: string;
  defesa: number;
  pvAtual: number;
  pvMax: number;
  pmAtual: number;
  pmMax: number;
  ataques: string;
  pericias: string;
  iniciativaAtual?: number;
  condicoes: string[]; // Array com nomes das condições
};

// Modelo para o Bestiário (sem ID e sem status voláteis)
type ModeloAmeaca = Omit<Ameaca, "id" | "iniciativaAtual" | "pvAtual" | "pmAtual" | "condicoes"> & {
  pvPadrao: number;
  pmPadrao: number;
};

type Jogador = {
  id: string;
  nome: string;
  iniciativa: number;
};

type ItemTimeline = {
  id: string;
  nome: string;
  iniciativa: number;
  tipo: "AMEACA" | "JOGADOR";
};

type ResultadoRolagem = {
  total: number;
  detalhes: string;
  expressao: string;
};

/* =======================
   COMPONENTES UI AUXILIARES
======================= */

const StatBox = ({ label, valor, onChange, cor = "gray", icon }: any) => {
  const colorClasses: any = {
    red: "text-red-400 border-red-900/50 focus:border-red-500",
    blue: "text-blue-400 border-blue-900/50 focus:border-blue-500",
    gray: "text-gray-300 border-gray-700 focus:border-gray-500",
  };
  return (
    <div className="flex flex-col items-center flex-1">
      <span className={`text-[10px] uppercase font-bold mb-1 ${colorClasses[cor].split(' ')[0]}`}>
        {icon} {label}
      </span>
      <input
        type="number"
        value={valor}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full bg-gray-900 text-center rounded border p-2 font-bold text-lg shadow-inner focus:outline-none transition-colors ${colorClasses[cor]}`}
      />
    </div>
  );
};

/* =======================
   MODAIS
======================= */

const ModalRolagem = ({ resultado, fechar }: { resultado: ResultadoRolagem | null, fechar: () => void }) => {
  if (!resultado) return null;
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[60] p-4" onClick={fechar}>
      <div className="bg-gray-800 border-2 border-red-600 rounded-xl p-6 max-w-sm w-full shadow-2xl relative animate-bounce-short" onClick={e => e.stopPropagation()}>
        <button onClick={fechar} className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl font-bold p-2">✕</button>
        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4 border-b border-gray-700 pb-2 text-center">Resultado</h3>
        <div className="text-center py-2">
          <div className="text-6xl font-black text-white mb-2 drop-shadow-md">{resultado.total}</div>
          <div className="text-sm text-gray-300 font-mono bg-gray-900/50 p-2 rounded inline-block">{resultado.detalhes}</div>
          <div className="text-xs text-gray-500 mt-2 uppercase tracking-wide">Rolagem: {resultado.expressao}</div>
        </div>
        <button onClick={fechar} className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition">Fechar</button>
      </div>
    </div>
  );
};

// Modal de Seleção de Condições
const ModalCondicoes = ({ 
  ameaca, 
  fechar, 
  toggleCondicao 
}: { 
  ameaca: Ameaca, 
  fechar: () => void, 
  toggleCondicao: (id: string, cond: string) => void 
}) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={fechar}>
      <div className="bg-gray-800 border border-gray-600 rounded-xl w-full max-w-2xl shadow-2xl flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
        <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-gray-900/50 rounded-t-xl">
          <h3 className="text-white font-bold text-lg">Condições: <span className="text-red-400">{ameaca.nome}</span></h3>
          <button onClick={fechar} className="text-gray-400 hover:text-white text-2xl font-bold leading-none">✕</button>
        </div>
        
        <div className="p-4 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-2">
          {CONDICOES_DB.map((c) => {
            const ativa = ameaca.condicoes.includes(c.nome);
            return (
              <div 
                key={c.nome} 
                onClick={() => toggleCondicao(ameaca.id, c.nome)}
                className={`cursor-pointer p-2 rounded border transition-all flex items-start gap-3 ${
                  ativa ? "bg-red-900/30 border-red-500" : "bg-gray-700/30 border-gray-700 hover:bg-gray-700"
                }`}
              >
                <div className={`w-4 h-4 mt-1 rounded border flex-shrink-0 flex items-center justify-center ${ativa ? "bg-red-500 border-red-500" : "border-gray-500"}`}>
                  {ativa && <span className="text-white text-[10px]">✓</span>}
                </div>
                <div>
                  <div className={`font-bold text-sm ${ativa ? "text-red-200" : "text-gray-300"}`}>{c.nome}</div>
                  <div className="text-[10px] text-gray-400 leading-tight mt-0.5">{c.efeito}</div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="p-4 border-t border-gray-700 bg-gray-900/30 rounded-b-xl flex justify-end">
          <button onClick={fechar} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded">Concluir</button>
        </div>
      </div>
    </div>
  );
};

// Modal Bestiário
const ModalBestiario = ({ 
  modelos, 
  fechar, 
  importar, 
  excluir 
}: { 
  modelos: ModeloAmeaca[], 
  fechar: () => void, 
  importar: (m: ModeloAmeaca) => void, 
  excluir: (nome: string) => void 
}) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={fechar}>
      <div className="bg-gray-800 border-2 border-yellow-600 rounded-xl w-full max-w-3xl shadow-2xl flex flex-col max-h-[85vh]" onClick={e => e.stopPropagation()}>
        <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-gray-900 rounded-t-xl">
          <h3 className="text-yellow-500 font-bold text-xl uppercase tracking-widest">📚 Bestiário</h3>
          <button onClick={fechar} className="text-gray-400 hover:text-white text-2xl font-bold leading-none">✕</button>
        </div>
        
        <div className="p-4 overflow-y-auto flex-grow">
          {modelos.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              <p>Nenhum modelo salvo.</p>
              <p className="text-xs mt-2">Clique no ícone 💾 no card de uma ameaça para salvar um modelo.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modelos.map((m, idx) => (
                <div key={idx} className="bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-yellow-500 transition relative group">
                  <h4 className="font-bold text-white text-lg">{m.nome}</h4>
                  <div className="flex gap-3 text-xs text-gray-400 mt-1 mb-3">
                    <span className="flex items-center gap-1">❤️ {m.pvPadrao}</span>
                    <span className="flex items-center gap-1">💧 {m.pmPadrao}</span>
                    <span className="flex items-center gap-1">🛡️ {m.defesa}</span>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => importar(m)}
                      className="flex-1 bg-green-700 hover:bg-green-600 text-white text-sm font-bold py-1.5 rounded transition"
                    >
                      + Adicionar à Mesa
                    </button>
                    <button 
                      onClick={() => excluir(m.nome)}
                      className="bg-gray-800 hover:bg-red-900 text-gray-400 hover:text-white px-3 rounded transition"
                      title="Excluir do Bestiário"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* =======================
   RENDERIZADOR DE TEXTO
======================= */

const RenderizadorDeTextoRolavel = ({ texto, rolar }: { texto: string, rolar: (expr: string) => void }) => {
  const regex = /([+-]\d+|\d+d\d+(?:\s*[+-]\s*\d+)?)/g;
  const partes = texto.split(regex);
  return (
    <div className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">
      {partes.map((parte, index) => {
        if (!parte) return null;
        if (parte.match(/^([+-]\d+|\d+d\d+(?:\s*[+-]\s*\d+)?)$/)) {
          return (
            <button
              key={index}
              onClick={() => rolar(parte)}
              className="inline-flex items-center justify-center bg-gray-700 hover:bg-red-600 text-red-200 hover:text-white px-1.5 py-0.5 rounded mx-0.5 border border-gray-600 text-xs font-mono font-bold transition-all cursor-pointer shadow-sm active:scale-95"
            >
              🎲 {parte.trim()}
            </button>
          );
        }
        return <span key={index}>{parte}</span>;
      })}
    </div>
  );
};

/* =======================
   APP PRINCIPAL
======================= */

export default function GerenciadorAmeacas() {
  const [ameacas, setAmeacas] = useState<Ameaca[]>([]);
  const [jogadores, setJogadores] = useState<Jogador[]>([]);
  const [bestiario, setBestiario] = useState<ModeloAmeaca[]>([]);
  
  // Estados de Modais
  const [modalResultado, setModalResultado] = useState<ResultadoRolagem | null>(null);
  const [modalCondicaoId, setModalCondicaoId] = useState<string | null>(null); // ID da ameaça sendo editada
  const [mostrarBestiario, setMostrarBestiario] = useState(false);

  // Inputs Jogador
  const [novoNomeJog, setNovoNomeJog] = useState("");
  const [novoInicJog, setNovoInicJog] = useState("");
  
  const [isClient, setIsClient] = useState(false);

  /* ===== PERSISTÊNCIA ===== */
  useEffect(() => {
    setIsClient(true);
    // Mesa Atual
    const dadosMesa = localStorage.getItem("t20-master-screen-v3");
    if (dadosMesa) {
      try {
        const parsed = JSON.parse(dadosMesa);
        setAmeacas(parsed.ameacas || []);
        setJogadores(parsed.jogadores || []);
      } catch (e) { console.error(e); }
    }
    // Bestiário
    const dadosBestiario = localStorage.getItem("t20-bestiario-v1");
    if (dadosBestiario) {
      try { setBestiario(JSON.parse(dadosBestiario)); } catch (e) { console.error(e); }
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("t20-master-screen-v3", JSON.stringify({ ameacas, jogadores }));
    }
  }, [ameacas, jogadores, isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("t20-bestiario-v1", JSON.stringify(bestiario));
    }
  }, [bestiario, isClient]);

  /* ===== LÓGICA BESTIÁRIO ===== */
  const salvarModelo = (ameaca: Ameaca) => {
    if (bestiario.some(b => b.nome === ameaca.nome)) {
      if (!confirm(`Já existe um modelo chamado "${ameaca.nome}". Deseja sobrescrever?`)) return;
    }
    const novoModelo: ModeloAmeaca = {
      nome: ameaca.nome,
      defesa: ameaca.defesa,
      pvPadrao: ameaca.pvMax,
      pvMax: ameaca.pvMax,
      pmPadrao: ameaca.pmMax,
      pmMax: ameaca.pmMax,
      ataques: ameaca.ataques,
      pericias: ameaca.pericias
    };
    // Remove duplicatas antigas e adiciona novo
    setBestiario([...bestiario.filter(b => b.nome !== ameaca.nome), novoModelo]);
    alert(`"${ameaca.nome}" salvo no Bestiário!`);
  };

  const importarModelo = (modelo: ModeloAmeaca) => {
    const nova: Ameaca = {
      ...modelo,
      id: crypto.randomUUID(),
      pvAtual: modelo.pvPadrao,
      pmAtual: modelo.pmPadrao,
      iniciativaAtual: undefined,
      condicoes: []
    };
    setAmeacas([...ameacas, nova]);
    setMostrarBestiario(false);
  };

  const excluirModelo = (nome: string) => {
    if(confirm(`Excluir "${nome}" do Bestiário?`)) {
      setBestiario(bestiario.filter(b => b.nome !== nome));
    }
  };

  /* ===== CRUD ===== */
  const adicionarAmeaca = () => {
    const nova: Ameaca = {
      id: crypto.randomUUID(),
      nome: "Nova Ameaça",
      defesa: 10, pvAtual: 10, pvMax: 10, pmAtual: 0, pmMax: 0,
      ataques: "Ataque +0 (1d4)", pericias: "Iniciativa +0",
      condicoes: []
    };
    setAmeacas([...ameacas, nova]);
  };

  const atualizarAmeaca = <K extends keyof Ameaca>(id: string, campo: K, valor: Ameaca[K]) => {
    setAmeacas(ameacas.map((a) => (a.id === id ? { ...a, [campo]: valor } : a)));
  };

  const toggleCondicao = (id: string, condNome: string) => {
    setAmeacas(ameacas.map(a => {
      if (a.id !== id) return a;
      const tem = a.condicoes.includes(condNome);
      return {
        ...a,
        condicoes: tem ? a.condicoes.filter(c => c !== condNome) : [...a.condicoes, condNome]
      };
    }));
  };

  const clonarAmeaca = (original: Ameaca) => {
    setAmeacas([...ameacas, { ...original, id: crypto.randomUUID(), nome: `${original.nome} (Cópia)`, iniciativaAtual: undefined }]);
  };

  const removerAmeaca = (id: string) => {
    if (confirm("Remover esta ameaça?")) setAmeacas(ameacas.filter((a) => a.id !== id));
  };

  /* ===== JOGADORES & TIMELINE ===== */
  const timeline: ItemTimeline[] = [
    ...ameacas.filter(a => a.iniciativaAtual !== undefined).map(a => ({ id: a.id, nome: a.nome, iniciativa: a.iniciativaAtual!, tipo: "AMEACA" as const })),
    ...jogadores.map(j => ({ id: j.id, nome: j.nome, iniciativa: j.iniciativa, tipo: "JOGADOR" as const }))
  ].sort((a, b) => b.iniciativa - a.iniciativa);

  const adicionarJogador = () => {
    if (!novoNomeJog) return;
    setJogadores([...jogadores, { id: crypto.randomUUID(), nome: novoNomeJog, iniciativa: Number(novoInicJog) || 0 }]);
    setNovoNomeJog(""); setNovoInicJog("");
  };

  const rolarIniciativaGlobal = () => {
    const novas = ameacas.map(a => {
      const match = a.pericias.match(/Iniciativa\s*:?\s*([+-]?\d+)/i);
      const bonus = match ? parseInt(match[1]) : 0;
      return { ...a, iniciativaAtual: Math.floor(Math.random() * 20) + 1 + bonus };
    });
    setAmeacas(novas);
  };

  const rolarDiceString = (expressao: string) => {
    const limpo = expressao.replace(/\s/g, "");
    let dados = 1, lados = 20, bonus = 0;
    if (limpo.match(/^[+-]\d+$/)) { bonus = parseInt(limpo); } 
    else {
      const match = limpo.match(/(\d+)d(\d+)([+-]\d+)?/);
      if (!match) return;
      dados = parseInt(match[1]); lados = parseInt(match[2]); bonus = match[3] ? parseInt(match[3]) : 0;
    }
    const rolagens = [];
    let soma = 0;
    for (let i = 0; i < dados; i++) {
      const r = Math.floor(Math.random() * lados) + 1;
      rolagens.push(r); soma += r;
    }
    setModalResultado({ total: soma + bonus, detalhes: `[${rolagens.join(", ")}] ${bonus >= 0 ? '+' : ''} ${bonus}`, expressao });
  };

  if (!isClient) return <div className="min-h-screen bg-gray-950 flex items-center justify-center text-gray-500">Preparando mesa...</div>;

  return (
    <div className="p-4 md:p-6 bg-gray-950 min-h-screen text-gray-100 font-sans selection:bg-red-900 selection:text-white">
      <ModalRolagem resultado={modalResultado} fechar={() => setModalResultado(null)} />
      
      {/* Modal Condições */}
      {modalCondicaoId && (
        <ModalCondicoes 
          ameaca={ameacas.find(a => a.id === modalCondicaoId)!}
          fechar={() => setModalCondicaoId(null)}
          toggleCondicao={toggleCondicao}
        />
      )}

      {/* Modal Bestiário */}
      {mostrarBestiario && (
        <ModalBestiario 
          modelos={bestiario}
          fechar={() => setMostrarBestiario(false)}
          importar={importarModelo}
          excluir={excluirModelo}
        />
      )}

      {/* HEADER */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 border-b border-gray-800 pb-4">
        <h1 className="text-3xl md:text-4xl font-black text-red-600 tracking-tighter">
          TORMENTA<span className="text-white font-light">MASTER</span>
        </h1>
        <div className="flex gap-2 flex-wrap justify-center">
          <button onClick={adicionarAmeaca} className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded font-bold border border-gray-700 transition">+ Ameaça</button>
          <button onClick={() => setMostrarBestiario(true)} className="bg-indigo-900 hover:bg-indigo-800 text-white px-4 py-2 rounded font-bold border border-indigo-700 transition flex items-center gap-2">📚 Bestiário</button>
          <button onClick={rolarIniciativaGlobal} className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded font-bold border border-yellow-500 transition">⚡ Iniciativa</button>
        </div>
      </header>

      {/* TIMELINE */}
      <section className="mb-8 bg-gray-900/50 rounded-xl border border-gray-800 p-4">
        <h2 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">Ordem de Turno</h2>
        {timeline.length > 0 ? (
          <div className="flex flex-col gap-1">
            {timeline.map((item, index) => (
              <div key={`${item.tipo}-${item.id}`} className={`flex items-center gap-3 p-2 rounded border-l-4 ${item.tipo === 'AMEACA' ? 'bg-gray-800 border-red-600' : 'bg-blue-900/20 border-blue-500'}`}>
                <span className="text-gray-500 font-mono font-bold w-6 text-right">#{index + 1}</span>
                <span className="bg-gray-950 px-2 py-1 rounded font-bold text-white min-w-[30px] text-center">{item.iniciativa}</span>
                <span className={`font-bold flex-grow ${item.tipo === 'AMEACA' ? 'text-red-200' : 'text-blue-200'}`}>{item.nome}</span>
                {item.tipo === 'JOGADOR' && <button onClick={() => setJogadores(jogadores.filter(j => j.id !== item.id))} className="text-gray-600 hover:text-red-500 px-2">✕</button>}
              </div>
            ))}
          </div>
        ) : <div className="text-gray-600 text-sm text-center italic">Combate não iniciado.</div>}
        <div className="mt-3 flex gap-2 border-t border-gray-800 pt-3">
          <input type="text" placeholder="Nome Jogador" className="bg-gray-950 border border-gray-700 text-gray-300 text-sm rounded px-3 py-1 flex-grow" value={novoNomeJog} onChange={e => setNovoNomeJog(e.target.value)} onKeyDown={e => e.key === 'Enter' && adicionarJogador()} />
          <input type="number" placeholder="Inic." className="bg-gray-950 border border-gray-700 text-gray-300 text-sm rounded px-2 py-1 w-16 text-center" value={novoInicJog} onChange={e => setNovoInicJog(e.target.value)} onKeyDown={e => e.key === 'Enter' && adicionarJogador()} />
          <button onClick={adicionarJogador} className="bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded">ADD</button>
        </div>
      </section>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ameacas.map((a) => (
          <div key={a.id} className={`bg-gray-900 rounded-xl border shadow-xl overflow-hidden flex flex-col transition-all ${a.iniciativaAtual !== undefined ? 'border-red-900/50' : 'border-gray-800'}`}>
            <div className="p-4 bg-gray-800/50 border-b border-gray-800 relative">
              <div className="absolute top-2 right-2 flex gap-1">
                <button onClick={() => salvarModelo(a)} className="text-gray-500 hover:text-yellow-400 p-1 rounded" title="Salvar no Bestiário">💾</button>
                <button onClick={() => removerAmeaca(a.id)} className="text-gray-500 hover:text-red-500 p-1 rounded" title="Excluir">🗑️</button>
              </div>
              <input className="bg-transparent text-lg font-bold w-9/12 text-white focus:outline-none focus:border-b focus:border-red-500" value={a.nome} onChange={(e) => atualizarAmeaca(a.id, "nome", e.target.value)} />
              
              {/* STATUS ATIVOS (BADGES) */}
              <div className="flex flex-wrap gap-1 mt-2 min-h-[24px]">
                {a.condicoes.map(c => (
                  <span key={c} title={CONDICOES_DB.find(db => db.nome === c)?.efeito} className="px-1.5 py-0.5 rounded bg-red-900/40 border border-red-800 text-[10px] text-red-200 cursor-help font-bold uppercase tracking-wider hover:bg-red-800 transition">
                    {c}
                  </span>
                ))}
                <button onClick={() => setModalCondicaoId(a.id)} className="px-1.5 py-0.5 rounded bg-gray-800 border border-gray-700 text-[10px] text-gray-400 hover:text-white hover:border-gray-500 transition">
                  + Condição
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col gap-4 flex-grow">
              <div className="flex gap-2">
                <StatBox label="PV" icon="❤️" cor="red" valor={a.pvAtual} onChange={(v: number) => atualizarAmeaca(a.id, "pvAtual", v)} />
                <StatBox label="PM" icon="💧" cor="blue" valor={a.pmAtual} onChange={(v: number) => atualizarAmeaca(a.id, "pmAtual", v)} />
                <StatBox label="DEF" icon="🛡️" cor="gray" valor={a.defesa} onChange={(v: number) => atualizarAmeaca(a.id, "defesa", v)} />
              </div>

              <div>
                <label className="text-[10px] text-gray-500 font-bold mb-1 block">ATAQUES</label>
                <div className="bg-gray-950 rounded-t p-2 border border-gray-700 border-b-0 min-h-[36px]">
                  <RenderizadorDeTextoRolavel texto={a.ataques || ""} rolar={rolarDiceString} />
                </div>
                <textarea className="w-full bg-gray-900 p-2 rounded-b text-sm text-gray-400 border border-gray-700 focus:outline-none focus:border-red-500 h-16 resize-none" value={a.ataques} onChange={(e) => atualizarAmeaca(a.id, "ataques", e.target.value)} />
              </div>

              <div>
                <label className="text-[10px] text-gray-500 font-bold mb-1 block">PERÍCIAS</label>
                <div className="bg-gray-950 rounded-t p-2 border border-gray-700 border-b-0 min-h-[36px]">
                  <RenderizadorDeTextoRolavel texto={a.pericias || ""} rolar={rolarDiceString} />
                </div>
                <textarea className="w-full bg-gray-900 p-2 rounded-b text-sm text-gray-400 border border-gray-700 focus:outline-none focus:border-blue-500 h-14 resize-none" value={a.pericias} onChange={(e) => atualizarAmeaca(a.id, "pericias", e.target.value)} />
              </div>
            </div>

            <div className="px-4 py-2 bg-gray-800/30 border-t border-gray-800 flex justify-end">
              <button onClick={() => clonarAmeaca(a)} className="text-xs font-bold text-gray-500 hover:text-white flex items-center gap-1">📑 Duplicar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}