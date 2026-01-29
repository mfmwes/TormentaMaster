import { ResultadoRolagem } from "../../types/game";

export const ModalRolagem = ({ resultado, fechar }: { resultado: ResultadoRolagem | null, fechar: () => void }) => {
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