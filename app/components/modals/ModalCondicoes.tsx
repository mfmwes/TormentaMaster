import { Ameaca } from "../../types/game";
import { CONDICOES_DB } from "../../data/condicoes";

type ModalCondicoesProps = {
  ameaca: Ameaca;
  fechar: () => void;
  toggleCondicao: (id: string, cond: string) => void;
};

export const ModalCondicoes = ({ ameaca, fechar, toggleCondicao }: ModalCondicoesProps) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" 
      onClick={fechar}
    >
      <div 
        className="bg-gray-800 border border-gray-600 rounded-xl w-full max-w-2xl shadow-2xl flex flex-col max-h-[90vh]" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-gray-900/50 rounded-t-xl">
          <h3 className="text-white font-bold text-lg">
            Condições: <span className="text-red-400">{ameaca.nome}</span>
          </h3>
          <button 
            onClick={fechar} 
            className="text-gray-400 hover:text-white text-2xl font-bold leading-none"
          >
            ✕
          </button>
        </div>
        
        {/* Lista de Condições */}
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
                  <div className={`font-bold text-sm ${ativa ? "text-red-200" : "text-gray-300"}`}>
                    {c.nome}
                  </div>
                  <div className="text-[10px] text-gray-400 leading-tight mt-0.5">
                    {c.efeito}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Rodapé */}
        <div className="p-4 border-t border-gray-700 bg-gray-900/30 rounded-b-xl flex justify-end">
          <button 
            onClick={fechar} 
            className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded"
          >
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
};