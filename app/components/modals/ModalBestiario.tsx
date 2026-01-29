import { ModeloAmeaca } from "../../types/game";

type ModalBestiarioProps = {
  modelos: ModeloAmeaca[];
  fechar: () => void;
  importar: (modelo: ModeloAmeaca) => void;
  excluir: (nome: string) => void;
};

export const ModalBestiario = ({ modelos, fechar, importar, excluir }: ModalBestiarioProps) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" 
      onClick={fechar}
    >
      <div 
        className="bg-gray-800 border-2 border-yellow-600 rounded-xl w-full max-w-3xl shadow-2xl flex flex-col max-h-[85vh]" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-gray-900 rounded-t-xl">
          <h3 className="text-yellow-500 font-bold text-xl uppercase tracking-widest">
            📚 Bestiário
          </h3>
          <button 
            onClick={fechar} 
            className="text-gray-400 hover:text-white text-2xl font-bold leading-none"
          >
            ✕
          </button>
        </div>
        
        {/* Conteúdo */}
        <div className="p-4 overflow-y-auto flex-grow">
          {modelos.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              <p className="mb-2 text-lg">Nenhum modelo salvo.</p>
              <p className="text-xs">Clique no ícone 💾 no card de uma ameaça para salvar um modelo aqui.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modelos.map((m, idx) => (
                <div 
                  key={idx} 
                  className="bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-yellow-500 transition relative group"
                >
                  <h4 className="font-bold text-white text-lg truncate" title={m.nome}>{m.nome}</h4>
                  
                  <div className="flex gap-3 text-xs text-gray-400 mt-1 mb-3">
                    <span className="flex items-center gap-1" title="Vida Padrão">❤️ {m.pvPadrao}</span>
                    <span className="flex items-center gap-1" title="Mana Padrão">💧 {m.pmPadrao}</span>
                    <span className="flex items-center gap-1" title="Defesa">🛡️ {m.defesa}</span>
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