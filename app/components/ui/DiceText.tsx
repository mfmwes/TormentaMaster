
export const DiceText = ({ texto, onRolar }: { texto: string, onRolar: (expr: string) => void }) => {
  const regex = /([+-]\d+|\d+d\d+(?:\s*[+-]\s*\d+)?)/g;
  const partes = texto.split(regex);
  return (
    <div className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">
      {partes.map((parte, index) => {
        if (!parte) return null;
        if (parte.match(/^([+-]\d+|\d+d\d+(?:\s*[+-]\s*\d+)?)$/)) {
          return (
            <button key={index} onClick={() => onRolar(parte)} className="inline-flex items-center justify-center bg-gray-700 hover:bg-red-600 text-red-200 hover:text-white px-1.5 py-0.5 rounded mx-0.5 border border-gray-600 text-xs font-mono font-bold transition-all cursor-pointer shadow-sm active:scale-95">
              🎲 {parte.trim()}
            </button>
          );
        }
        return <span key={index}>{parte}</span>;
      })}
    </div>
  );
};