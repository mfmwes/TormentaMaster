type StatBoxProps = {
  label: string;
  valor: number;
  max?: number;
  onChange: (v: number) => void;
  onMaxChange?: (v: number) => void;
  cor?: "red" | "blue" | "gray";
  icon?: string;
};

export const StatBox = ({ label, valor, max, onChange, onMaxChange, cor = "gray", icon }: StatBoxProps) => {
  const colorClasses = {
    red: "text-red-400 border-red-900/60 focus:border-red-500 bg-red-950/30",
    blue: "text-blue-400 border-blue-900/60 focus:border-blue-500 bg-blue-950/30",
    gray: "text-gray-300 border-gray-700 focus:border-gray-500 bg-gray-900",
  };
  
  const barColor = cor === "red" ? "bg-red-600" : cor === "blue" ? "bg-blue-600" : "bg-gray-600";
  const percent = max ? Math.max(0, Math.min(100, (valor / max) * 100)) : 0;

  return (
    <div className="flex flex-col items-center flex-1 relative group">
      {/* Label agora é maior e mais legível */}
      <span className={`text-xs font-bold mb-1 uppercase tracking-wider ${colorClasses[cor].split(' ')[0]}`}>
        {icon} {label}
      </span>
      
      <div className={`relative w-full rounded-lg border overflow-hidden shadow-sm transition-all ${colorClasses[cor]}`}>
        {/* Barra de Progresso */}
        {max !== undefined && (
          <div 
            className={`absolute bottom-0 left-0 h-1.5 transition-all duration-500 ease-out opacity-80 ${barColor}`} 
            style={{ 
                width: `${percent}%`, 
                backgroundColor: percent < 30 && cor === 'red' ? '#ef4444' : '' // Fica vermelho vivo se < 30%
            }}
          ></div>
        )}
        
        <div className="flex items-center justify-center py-1">
            <input
                type="number"
                value={valor}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full bg-transparent text-center p-1 font-bold text-xl md:text-2xl focus:outline-none z-10 drop-shadow-sm"
            />
            {/* Max Input */}
            {max !== undefined && onMaxChange && (
                <div className="flex items-center text-xs text-gray-500 font-mono border-l border-white/10 pr-2 h-6">
                    <span className="mx-1 opacity-50">/</span>
                    <input 
                        type="number" 
                        value={max}
                        onChange={(e) => onMaxChange(Number(e.target.value))}
                        className="w-10 bg-transparent focus:outline-none focus:text-white appearance-none text-gray-400 hover:text-gray-200 transition-colors"
                    />
                </div>
            )}
        </div>
      </div>
    </div>
  );
};