"use client";

import React, { useState } from "react";

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
};

type ResultadoRolagem = {
  total: number;
  detalhes: string;
  expressao: string;
};

/* =======================
   COMPONENTES UI
======================= */

// Componente visual para as caixinhas de PV, PM e Defesa
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
        onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro do modal
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

        // Verifica se a parte bate com o padrão de rolagem para transformar em botão
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
  const [modalResultado, setModalResultado] = useState<ResultadoRolagem | null>(null);

  /* ===== CRUD ===== */

  const adicionarAmeaca = () => {
    const nova: Ameaca = {
      id: crypto.randomUUID(),
      nome: "Nova Ameaça",
      defesa: 15,
      pvAtual: 20,
      pvMax: 20,
      pmAtual: 5,
      pmMax: 5,
      ataques: "Espada Longa +5 (1d8 + 2)\nMordida +2 (1d6)",
      pericias: "Iniciativa +2, Percepção +0",
    };
    setAmeacas([...ameacas, nova]);
  };

  const atualizarAmeaca = <K extends keyof Ameaca>(
    id: string,
    campo: K,
    valor: Ameaca[K]
  ) => {
    setAmeacas(
      ameacas.map((a) => (a.id === id ? { ...a, [campo]: valor } : a))
    );
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
    if (confirm("Remover esta ameaça?")) {
      setAmeacas(ameacas.filter((a) => a.id !== id));
    }
  };

  /* ===== LÓGICA DE DADOS ===== */

  const rolarDiceString = (expressao: string) => {
    // Remove espaços para facilitar o parse matemático (ex: "1d8 + 2" vira "1d8+2")
    const limpo = expressao.replace(/\s/g, "");
    
    let dados = 1;
    let lados = 20;
    let bonus = 0;

    // Caso: Bônus simples (ex: "+5" ou "-2")
    if (limpo.match(/^[+-]\d+$/)) {
      bonus = parseInt(limpo);
    } 
    // Caso: Dado com ou sem bônus (ex: "1d8", "1d8+2", "2d6-1")
    else {
      const match = limpo.match(/(\d+)d(\d+)([+-]\d+)?/);
      if (!match) return; // Se não bater, ignora

      dados = parseInt(match[1]);
      lados = parseInt(match[2]);
      bonus = match[3] ? parseInt(match[3]) : 0;
    }

    const rolagens: number[] = [];
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
      
      return {
        ...ameaca,
        iniciativaAtual: d20 + bonus
      };
    });

    novasAmeacas.sort((a, b) => (b.iniciativaAtual || 0) - (a.iniciativaAtual || 0));
    setAmeacas(novasAmeacas);
  };

  /* ===== RENDER ===== */

  return (
    <div className="p-6 bg-gray-950 min-h-screen text-gray-100 font-sans selection:bg-red-900 selection:text-white">
      <ModalRolagem
        resultado={modalResultado}
        fechar={() => setModalResultado(null)}
      />

      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-4xl font-black text-red-600 tracking-tighter">
            TORMENTA<span className="text-white font-light">MASTER</span>
          </h1>
          <p className="text-gray-500 text-sm">Gerenciador de Combate T20</p>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={adicionarAmeaca}
            className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2.5 rounded-lg font-bold border border-gray-700 transition shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <span>+</span> Nova Ameaça
          </button>
          <button
            onClick={rolarIniciativaGlobal}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2.5 rounded-lg font-bold border border-yellow-500 transition shadow-lg hover:shadow-yellow-900/20 flex items-center gap-2"
          >
            <span>⚡</span> Rolar Iniciativa
          </button>
        </div>
      </header>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ameacas.map((a) => (
          <div
            key={a.id}
            className="bg-gray-900 rounded-xl border border-gray-800 shadow-xl overflow-hidden flex flex-col group hover:border-gray-600 transition-all duration-300"
          >
            {/* Header do Card */}
            <div className="p-4 bg-gray-800/50 border-b border-gray-800 relative">
              {a.iniciativaAtual !== undefined && (
                <div className="absolute -top-0 left-0 bg-yellow-600 text-white text-[10px] font-bold px-2 py-1 rounded-br shadow-md z-10">
                  INICIATIVA: {a.iniciativaAtual}
                </div>
              )}

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
              
              {/* STATUS BARS (Correção 1: Uso do componente StatBox) */}
              <div className="flex gap-3 w-full">
                <StatBox 
                  label="PV" icon="❤️" cor="red" 
                  valor={a.pvAtual} 
                  onChange={(v) => atualizarAmeaca(a.id, "pvAtual", v)} 
                />
                <StatBox 
                  label="PM" icon="💧" cor="blue" 
                  valor={a.pmAtual} 
                  onChange={(v) => atualizarAmeaca(a.id, "pmAtual", v)} 
                />
                <StatBox 
                  label="Defesa" icon="🛡️" cor="gray" 
                  valor={a.defesa} 
                  onChange={(v) => atualizarAmeaca(a.id, "defesa", v)} 
                />
              </div>

              {/* Ataques */}
              <div>
                <label className="text-[10px] uppercase text-gray-500 font-bold mb-1 block">Ataques & Dano</label>
                
                {/* Visualizador com Botões */}
                <div className="bg-gray-950 rounded-t p-3 border border-gray-700 border-b-0 min-h-[40px]">
                  <RenderizadorDeTextoRolavel
                    texto={a.ataques || "..."}
                    rolar={rolarDiceString}
                  />
                </div>
                {/* Editor (Textarea) */}
                <textarea
                  className="w-full bg-gray-900 p-2 rounded-b text-sm text-gray-500 border border-gray-700 focus:border-red-500 focus:text-gray-300 focus:outline-none h-16 resize-none transition-colors"
                  value={a.ataques}
                  placeholder="Ex: Espada +5 (1d8+2)"
                  onChange={(e) => atualizarAmeaca(a.id, "ataques", e.target.value)}
                />
              </div>

              {/* Perícias */}
              <div>
                <label className="text-[10px] uppercase text-gray-500 font-bold mb-1 block">Perícias & Habilidades</label>
                 <div className="bg-gray-950 rounded-t p-3 border border-gray-700 border-b-0 min-h-[40px]">
                  <RenderizadorDeTextoRolavel
                    texto={a.pericias || "..."}
                    rolar={rolarDiceString}
                  />
                </div>
                <textarea
                  className="w-full bg-gray-900 p-2 rounded-b text-sm text-gray-500 border border-gray-700 focus:border-blue-500 focus:text-gray-300 focus:outline-none h-14 resize-none transition-colors"
                  value={a.pericias}
                  placeholder="Ex: Iniciativa +2"
                  onChange={(e) => atualizarAmeaca(a.id, "pericias", e.target.value)}
                />
              </div>

            </div>

            {/* Footer do Card */}
            <div className="px-4 py-3 bg-gray-800/30 border-t border-gray-800 flex justify-end">
              <button
                onClick={() => clonarAmeaca(a)}
                className="text-xs font-bold text-gray-500 hover:text-white flex items-center gap-1 transition-colors px-2 py-1 rounded hover:bg-gray-700"
              >
                📑 Duplicar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}