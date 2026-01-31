import { useState } from "react";
import { SPELLS_DB } from "../../data/spellsDB";
import { Magia, Aprimoramento } from "../../types/game";

type Props = {
  fechar: () => void;
  aoSelecionar: (magia: Magia) => void;
};

export const ModalSearchSpell = ({ fechar, aoSelecionar }: Props) => {
  const [busca, setBusca] = useState("");

  // Filtra as magias do JSON
  const magiasFiltradas = SPELLS_DB.filter((m) =>
    m.name.toLowerCase().includes(busca.toLowerCase())
  ).sort((a, b) => a.name.localeCompare(b.name));

  const selecionarMagia = (rawSpell: any) => {
    // Converte o formato do JSON para o formato do seu sistema (Magia)
    const novaMagia: Magia = {
      id: crypto.randomUUID(),
      nome: rawSpell.name,
      pm: "1", // Padrão, já que o JSON não tem esse campo explícito
      circulo: "1º", // Padrão
      execucao: rawSpell.execution || "",
      alcance: rawSpell.range || "",
      area: rawSpell.area || "",
      alvo: rawSpell.target || "",
      duracao: rawSpell.duration || "",
      resistencia: rawSpell.resistence || "", // Nota: seu JSON usa 'resistence'
      efeito: rawSpell.description || "",
      danoBase: "", // O JSON não separa o dano, então fica vazio para preencher
      aprimoramentos: (rawSpell.enhancements || []).map((enh: any) => ({
        id: crypto.randomUUID(),
        custo: enh.cost,
        descricao: enh.description,
        roll: ""
      }) as Aprimoramento)
    };

    aoSelecionar(novaMagia);
    fechar();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-gray-900 border border-purple-500/50 rounded-2xl w-full max-w-2xl h-[80vh] flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gray-950/50 rounded-t-2xl">
          <h2 className="text-xl font-black text-purple-400 flex items-center gap-2">
            🔮 Grimório de Tormenta
          </h2>
          <button onClick={fechar} className="text-gray-500 hover:text-white">✕</button>
        </div>

        {/* Busca */}
        <div className="p-4 bg-gray-900">
          <input
            autoFocus
            type="text"
            placeholder="Digite o nome da magia..."
            className="w-full bg-black/50 border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all text-lg"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        {/* Lista */}
        <div className="flex-grow overflow-y-auto p-4 custom-scrollbar space-y-2">
          {magiasFiltradas.length === 0 ? (
            <div className="text-center text-gray-600 py-10">Nenhuma magia encontrada com esse nome.</div>
          ) : (
            magiasFiltradas.map((spell: any, idx) => (
              <div
                key={idx}
                onClick={() => selecionarMagia(spell)}
                className="bg-gray-800/50 hover:bg-purple-900/20 border border-gray-700 hover:border-purple-500/50 p-3 rounded-lg cursor-pointer transition-all group"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-white group-hover:text-purple-300 transition-colors">{spell.name}</span>
                  <span className="text-[10px] bg-gray-900 px-2 py-0.5 rounded text-gray-400 border border-gray-700">{spell.execution}</span>
                </div>
                <p className="text-xs text-gray-400 line-clamp-2">{spell.description}</p>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-gray-800 text-center text-xs text-gray-600 bg-gray-950/50 rounded-b-2xl">
          {magiasFiltradas.length} magias encontradas
        </div>
      </div>
    </div>
  );
};