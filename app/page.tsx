"use client";

import React, { useState, useEffect } from "react";

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
  iniciativaAtual?: number; // Opcional, pois pode não ter rolado ainda
};

type Jogador = {
  id: string;
  nome: string;
  iniciativa: number;
};

// Tipo unificado para a Timeline
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
   COMPONENTES UI
======================= */

const StatBox = ({
  label,
  valor,
  onChange,
  cor = "gray",
  icon,
}: {
  label: string;
  valor: number;
  onChange: (val: number) => void;
  cor?: "red" | "blue" | "gray";
  icon?: string;
}) => {
  const colorClasses = {
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
   MODAL DE ROLAGEM
======================= */

type ModalRolagemProps = {
  resultado: ResultadoRolagem | null;
  fechar: () => void;
};

const ModalRolagem: React.FC<ModalRolagemProps> = ({ resultado, fechar }) => {
  if (!resultado) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={fechar}>
      <div 
        className="bg-gray-800 border-2 border-red-600 rounded-xl p-6 max-w-sm w-full shadow-2xl relative animate-bounce-short"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={fechar}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl font-bold p-2"
        >
          ✕
        </button>

        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4 border-b border-gray-700 pb-2 text-center">
          Resultado da Rolagem
        </h3>

        <div className="text-center py-2">
          <div className="text-6xl font-black text-white mb-2 drop-shadow-md">
            {resultado.total}
          </div>
          <div className="text-sm text-gray-300 font-mono bg-gray-900/50 p-2 rounded inline-block">
            {resultado.detalhes}
          </div>
          <div className="text-xs text-gray-500 mt-2 uppercase tracking-wide">
            Rolagem: {resultado.expressao}
          </div>
        </div>

        <button
          onClick={fechar}
          className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition shadow-lg shadow-red-900/20"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

/* =======================
   TEXTO ROLÁVEL
======================= */

type RenderizadorProps = {
  texto: string;
  rolar: (expr: string) => void;
};

const RenderizadorDeTextoRolavel: React.FC<RenderizadorProps> = ({
  texto,
  rolar,
}) => {
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
              title="Clique para rolar"
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
   COMPONENTE PRINCIPAL
======================= */

export default function GerenciadorAmeacas() {
  const [ameacas, setAmeacas] = useState<Ameaca[]>([]);
  const [jogadores, setJogadores] = useState<Jogador[]>([]);
  const [modalResultado, setModalResultado] = useState<ResultadoRolagem | null>(null);
  
  // Inputs temporários para adicionar jogador
  const [novoNomeJog, setNovoNomeJog] = useState("");
  const [novoInicJog, setNovoInicJog] = useState("");

  const [isClient, setIsClient] = useState(false);

  /* ===== PERSISTÊNCIA ===== */

  useEffect(() => {
    setIsClient(true);
    const dadosSalvos = localStorage.getItem("t20-master-screen-v2"); // Mudamos a chave para v2
    if (dadosSalvos) {
      try {
        const parsed = JSON.parse(dadosSalvos);
        // Suporte legado ou nova estrutura
        if (Array.isArray(parsed)) {
            setAmeacas(parsed); // Formato antigo
        } else {
            setAmeacas(parsed.ameacas || []);
            setJogadores(parsed.jogadores || []);
        }
      } catch (e) {
        console.error("Erro ao carregar dados", e);
      }
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("t20-master-screen-v2", JSON.stringify({ ameacas, jogadores }));
    }
  }, [ameacas, jogadores, isClient]);


  /* ===== TIMELINE COMPUTADA ===== */
  
  // Junta monstros (que têm iniciativa) e jogadores em uma única lista ordenada
  const timeline: ItemTimeline[] = [
    ...ameacas
      .filter(a => a.iniciativaAtual !== undefined)
      .map(a => ({ id: a.id, nome: a.nome, iniciativa: a.iniciativaAtual!, tipo: "AMEACA" as const })),
    ...jogadores.map(j => ({ id: j.id, nome: j.nome, iniciativa: j.iniciativa, tipo: "JOGADOR" as const }))
  ].sort((a, b) => b.iniciativa - a.iniciativa);


  /* ===== CRUD AMEAÇAS ===== */

  const adicionarAmeaca = () => {
    const nova: Ameaca = {
      id: crypto.randomUUID(),
      nome: "Nova Ameaça",
      defesa: 15,
      pvAtual: 20, pvMax: 20,
      pmAtual: 5, pmMax: 5,
      ataques: "Espada Longa +5 (1d8 + 2)",
      pericias: "Iniciativa +2",
    };
    setAmeacas([...ameacas, nova]);
  };

  const atualizarAmeaca = <K extends keyof Ameaca>(id: string, campo: K, valor: Ameaca[K]) => {
    setAmeacas(ameacas.map((a) => (a.id === id ? { ...a, [campo]: valor } : a)));
  };

  const clonarAmeaca = (original: Ameaca) => {
    const clone: Ameaca = {
      ...original,
      id: crypto.randomUUID(),
      nome: `${original.nome} (Cópia)`,
      iniciativaAtual: undefined,
    };
    setAmeacas([...ameacas, clone]);
  };

  const removerAmeaca = (id: string) => {
    if (confirm("Remover esta ameaça?")) setAmeacas(ameacas.filter((a) => a.id !== id));
  };

  /* ===== CRUD JOGADORES ===== */

  const adicionarJogador = () => {
    if (!novoNomeJog) return;
    const novo: Jogador = {
      id: crypto.randomUUID(),
      nome: novoNomeJog,
      iniciativa: Number(novoInicJog) || 0
    };
    setJogadores([...jogadores, novo]);
    setNovoNomeJog("");
    setNovoInicJog("");
  };

  const removerJogador = (id: string) => {
    setJogadores(jogadores.filter(j => j.id !== id));
  };

  // Função unificada para editar iniciativa direto na timeline
  const atualizarIniciativaTimeline = (id: string, tipo: "AMEACA" | "JOGADOR", novoValor: number) => {
    if (tipo === "AMEACA") {
      setAmeacas(ameacas.map(a => a.id === id ? { ...a, iniciativaAtual: novoValor } : a));
    } else {
      setJogadores(jogadores.map(j => j.id === id ? { ...j, iniciativa: novoValor } : j));
    }
  };

  /* ===== LÓGICA DE DADOS ===== */

  const rolarDiceString = (expressao: string) => {
    const limpo = expressao.replace(/\s/g, "");
    let dados = 1, lados = 20, bonus = 0;

    if (limpo.match(/^[+-]\d+$/)) {
      bonus = parseInt(limpo);
    } else {
      const match = limpo.match(/(\d+)d(\d+)([+-]\d+)?/);
      if (!match) return;
      dados = parseInt(match[1]);
      lados = parseInt(match[2]);
      bonus = match[3] ? parseInt(match[3]) : 0;
    }

    const rolagens = [];
    let soma = 0;
    for (let i = 0; i < dados; i++) {
      const r = Math.floor(Math.random() * lados) + 1;
      rolagens.push(r);
      soma += r;
    }

    setModalResultado({
      total: soma + bonus,
      detalhes: `[${rolagens.join(", ")}] ${bonus >= 0 ? '+' : ''} ${bonus}`,
      expressao: expressao,
    });
  };

  const rolarIniciativaGlobal = () => {
    const novasAmeacas = ameacas.map((ameaca) => {
      const regexIniciativa = /Iniciativa\s*:?\s*([+-]?\d+)/i;
      const match = ameaca.pericias.match(regexIniciativa);
      const bonus = match ? parseInt(match[1]) : 0;
      const d20 = Math.floor(Math.random() * 20) + 1;
      return { ...ameaca, iniciativaAtual: d20 + bonus };
    });
    setAmeacas(novasAmeacas);
    // Nota: A ordenação agora é feita visualmente na variável 'timeline'
  };

  const limparIniciativas = () => {
      if(confirm("Limpar todas as iniciativas?")) {
        setAmeacas(ameacas.map(a => ({...a, iniciativaAtual: undefined})));
        // Opcional: Zerar jogadores também? Vou manter os jogadores pois geralmente é manual
      }
  }

  /* ===== RENDER ===== */

  if (!isClient) return <div className="min-h-screen bg-gray-950 flex items-center justify-center text-gray-500">Preparando mesa...</div>;

  return (
    <div className="p-4 md:p-6 bg-gray-950 min-h-screen text-gray-100 font-sans selection:bg-red-900 selection:text-white">
      <ModalRolagem resultado={modalResultado} fechar={() => setModalResultado(null)} />

      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 border-b border-gray-800 pb-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-red-600 tracking-tighter">
            TORMENTA<span className="text-white font-light">MASTER</span>
          </h1>
        </div>
        
        <div className="flex gap-2 text-sm md:text-base">
          <button onClick={adicionarAmeaca} className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded font-bold border border-gray-700 transition">
            + Ameaça
          </button>
          <button onClick={rolarIniciativaGlobal} className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded font-bold border border-yellow-500 transition">
            ⚡ Rolar Iniciativas
          </button>
           <button onClick={limparIniciativas} className="bg-gray-800 hover:bg-red-900/50 text-gray-400 hover:text-white px-3 py-2 rounded border border-gray-700 transition" title="Limpar iniciativas">
            ↺
          </button>
        </div>
      </header>

      {/* ÁREA DA TIMELINE (Novo) */}
      <section className="mb-8 bg-gray-900/50 rounded-xl border border-gray-800 p-4">
        <h2 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3 flex justify-between items-center">
          Ordem de Iniciativa
          <span className="text-[10px] bg-gray-800 px-2 py-0.5 rounded text-gray-500">Editável</span>
        </h2>
        
        <div className="flex flex-col gap-2">
            {/* Lista da Timeline */}
            {timeline.length > 0 ? (
                <div className="space-y-1">
                    {timeline.map((item, index) => (
                        <div 
                            key={`${item.tipo}-${item.id}`} 
                            className={`flex items-center gap-3 p-2 rounded border-l-4 transition-all ${
                                item.tipo === 'AMEACA' 
                                    ? 'bg-gray-800 border-red-600' 
                                    : 'bg-blue-900/20 border-blue-500'
                            }`}
                        >
                            <span className="text-gray-500 font-mono font-bold w-6 text-right">#{index + 1}</span>
                            <input 
                                type="number" 
                                className="w-12 bg-gray-950 border border-gray-700 rounded p-1 text-center font-bold text-white focus:outline-none focus:border-yellow-500"
                                value={item.iniciativa}
                                onChange={(e) => atualizarIniciativaTimeline(item.id, item.tipo, Number(e.target.value))}
                            />
                            <span className={`font-bold flex-grow ${item.tipo === 'AMEACA' ? 'text-red-200' : 'text-blue-200'}`}>
                                {item.nome}
                            </span>
                            
                            {item.tipo === 'JOGADOR' && (
                                <button 
                                    onClick={() => removerJogador(item.id)}
                                    className="text-gray-600 hover:text-red-500 px-2"
                                >✕</button>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-gray-600 text-sm text-center py-2 italic">A batalha ainda não começou...</div>
            )}

            {/* Adicionar Jogador Rápido */}
            <div className="mt-3 flex gap-2 border-t border-gray-800 pt-3">
                <input 
                    type="text" 
                    placeholder="Nome do Jogador" 
                    className="bg-gray-950 border border-gray-700 text-gray-300 text-sm rounded px-3 py-1 flex-grow focus:outline-none focus:border-blue-500"
                    value={novoNomeJog}
                    onChange={e => setNovoNomeJog(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && adicionarJogador()}
                />
                <input 
                    type="number" 
                    placeholder="Inic." 
                    className="bg-gray-950 border border-gray-700 text-gray-300 text-sm rounded px-2 py-1 w-16 text-center focus:outline-none focus:border-blue-500"
                    value={novoInicJog}
                    onChange={e => setNovoInicJog(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && adicionarJogador()}
                />
                <button 
                    onClick={adicionarJogador}
                    className="bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded"
                >
                    ADD
                </button>
            </div>
        </div>
      </section>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ameacas.map((a) => (
          <div
            key={a.id}
            className={`bg-gray-900 rounded-xl border shadow-xl overflow-hidden flex flex-col group transition-all duration-300 ${
                a.iniciativaAtual !== undefined ? 'border-red-900/50 shadow-red-900/10' : 'border-gray-800'
            }`}
          >
            {/* Header do Card */}
            <div className="p-4 bg-gray-800/50 border-b border-gray-800 relative">
              <button
                onClick={() => removerAmeaca(a.id)}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition p-1 rounded hover:bg-gray-800"
                title="Excluir"
              >
                🗑️
              </button>

              <input
                className="bg-transparent text-lg font-bold w-10/12 text-white placeholder-gray-600 focus:outline-none focus:border-b focus:border-red-500 transition-colors"
                value={a.nome}
                placeholder="Nome da Criatura"
                onChange={(e) => atualizarAmeaca(a.id, "nome", e.target.value)}
              />
            </div>

            <div className="p-4 flex flex-col gap-4 flex-grow">
              <div className="flex gap-3 w-full">
                <StatBox label="PV" icon="❤️" cor="red" valor={a.pvAtual} onChange={(v) => atualizarAmeaca(a.id, "pvAtual", v)} />
                <StatBox label="PM" icon="💧" cor="blue" valor={a.pmAtual} onChange={(v) => atualizarAmeaca(a.id, "pmAtual", v)} />
                <StatBox label="Defesa" icon="🛡️" cor="gray" valor={a.defesa} onChange={(v) => atualizarAmeaca(a.id, "defesa", v)} />
              </div>

              <div>
                <label className="text-[10px] uppercase text-gray-500 font-bold mb-1 block">Ataques & Dano</label>
                <div className="bg-gray-950 rounded-t p-3 border border-gray-700 border-b-0 min-h-[40px]">
                  <RenderizadorDeTextoRolavel texto={a.ataques || "..."} rolar={rolarDiceString} />
                </div>
                <textarea
                  className="w-full bg-gray-900 p-2 rounded-b text-sm text-gray-500 border border-gray-700 focus:border-red-500 focus:text-gray-300 focus:outline-none h-16 resize-none transition-colors"
                  value={a.ataques}
                  placeholder="Ex: Espada +5 (1d8+2)"
                  onChange={(e) => atualizarAmeaca(a.id, "ataques", e.target.value)}
                />
              </div>

              <div>
                <label className="text-[10px] uppercase text-gray-500 font-bold mb-1 block">Perícias & Habilidades</label>
                 <div className="bg-gray-950 rounded-t p-3 border border-gray-700 border-b-0 min-h-[40px]">
                  <RenderizadorDeTextoRolavel texto={a.pericias || "..."} rolar={rolarDiceString} />
                </div>
                <textarea
                  className="w-full bg-gray-900 p-2 rounded-b text-sm text-gray-500 border border-gray-700 focus:border-blue-500 focus:text-gray-300 focus:outline-none h-14 resize-none transition-colors"
                  value={a.pericias}
                  placeholder="Ex: Iniciativa +2"
                  onChange={(e) => atualizarAmeaca(a.id, "pericias", e.target.value)}
                />
              </div>
            </div>

            <div className="px-4 py-3 bg-gray-800/30 border-t border-gray-800 flex justify-end">
              <button onClick={() => clonarAmeaca(a)} className="text-xs font-bold text-gray-500 hover:text-white flex items-center gap-1 transition-colors px-2 py-1 rounded hover:bg-gray-700">
                📑 Duplicar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}