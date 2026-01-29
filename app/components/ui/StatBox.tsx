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
    red: "text-red-400 border-red-900/50 focus:border-red-500 bg-red-900/20",
    blue: "text-blue-400 border-blue-900/50 focus:border-blue-500 bg-blue-900/20",
    gray: "text-gray-300 border-gray-700 focus:border-gray-500 bg-gray-900",
  };
  const barColor = cor === "red" ? "bg-red-600" : cor === "blue" ? "bg-blue-600" : "bg-gray-600";
  const percent = max ? Math.max(0, Math.min(100, (valor / max) * 100)) : 0;

  return (
    <div className="flex flex-col items-center flex-1 relative group">
      <span className={`text-[10px] uppercase font-bold mb-1 ${colorClasses[cor].split(' ')[0]}`}>
        {icon} {label}
      </span>
      <div className={`relative w-full rounded border overflow-hidden ${colorClasses[cor]}`}>
        {max !== undefined && (
          <div className={`absolute bottom-0 left-0 h-1 transition-all duration-500 ease-out ${barColor}`} style={{ width: `${percent}%`, backgroundColor: percent < 30 && cor === 'red' ? '#ef4444' : '' }}></div>
        )}
        <div className="flex items-center justify-center">
            <input type="number" value={valor} onChange={(e) => onChange(Number(e.target.value))} className="w-full bg-transparent text-center p-2 font-bold text-lg focus:outline-none z-10" />
            {max !== undefined && onMaxChange && (
                <div className="flex items-center text-xs text-gray-500 font-mono border-l border-white/10 pr-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="mx-1">/</span>
                    <input type="number" value={max} onChange={(e) => onMaxChange(Number(e.target.value))} className="w-8 bg-transparent focus:outline-none focus:text-white appearance-none" />
                </div>
            )}
        </div>
      </div>
    </div>
  );
};