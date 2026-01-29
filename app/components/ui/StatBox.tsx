import React, { useState, useEffect } from "react";

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
  // ESTADOS LOCAIS
  const [localVal, setLocalVal] = useState<string>(valor.toString());
  const [localMax, setLocalMax] = useState<string>(max?.toString() || "");

  // Sincroniza se o banco mudar externamente
  useEffect(() => { setLocalVal(valor.toString()); }, [valor]);
  useEffect(() => { if (max !== undefined) setLocalMax(max.toString()); }, [max]);

  // Salva ao sair do campo (Blur)
  const salvarVal = () => {
    const num = parseInt(localVal);
    if (!isNaN(num) && num !== valor) onChange(num);
    else if (isNaN(num)) setLocalVal(valor.toString()); // Reverte se inválido
  };

  const salvarMax = () => {
    const num = parseInt(localMax);
    if (!isNaN(num) && onMaxChange && num !== max) onMaxChange(num);
  };

  const handleKeyDown = (e: React.KeyboardEvent, saveFn: () => void) => {
    if (e.key === "Enter") { (e.target as HTMLInputElement).blur(); }
  };

  const colorClasses = {
    red: "text-red-400 border-red-900/60 focus-within:border-red-500 bg-red-950/30",
    blue: "text-blue-400 border-blue-900/60 focus-within:border-blue-500 bg-blue-950/30",
    gray: "text-gray-300 border-gray-700 focus-within:border-gray-500 bg-gray-900",
  };
  
  const barColor = cor === "red" ? "bg-red-600" : cor === "blue" ? "bg-blue-600" : "bg-gray-600";
  const percent = max ? Math.max(0, Math.min(100, (valor / max) * 100)) : 0;
  const alignClass = max !== undefined ? "text-right" : "text-center";

  return (
    <div className="flex flex-col items-center flex-1 relative group min-w-0">
      <span className={`text-[10px] font-bold mb-1 uppercase tracking-wider whitespace-nowrap overflow-hidden text-ellipsis ${colorClasses[cor].split(' ')[0]}`}>
        {icon} {label}
      </span>
      
      <div className={`relative w-full rounded-lg border overflow-hidden shadow-sm transition-all h-10 flex items-center ${colorClasses[cor]}`}>
        {max !== undefined && (
          <div className={`absolute bottom-0 left-0 h-1 transition-all duration-500 ease-out opacity-60 ${barColor}`} style={{ width: `${percent}%`, backgroundColor: percent < 30 && cor === 'red' ? '#ef4444' : '' }}></div>
        )}
        
        <div className="flex items-center justify-center w-full px-1 relative z-10 h-full">
            <input
                type="number"
                value={localVal}
                onChange={(e) => setLocalVal(e.target.value)}
                onBlur={salvarVal}
                onKeyDown={(e) => handleKeyDown(e, salvarVal)}
                className={`${max !== undefined ? 'flex-1' : 'w-full'} bg-transparent ${alignClass} font-black text-sm md:text-base tracking-tight focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none px-0.5`}
                placeholder="0"
            />
            {max !== undefined && onMaxChange && (
                <>
                    <span className="text-gray-500 font-mono text-xs opacity-50 mx-0.5">/</span>
                    <input 
                        type="number" 
                        value={localMax}
                        onChange={(e) => setLocalMax(e.target.value)}
                        onBlur={salvarMax}
                        onKeyDown={(e) => handleKeyDown(e, salvarMax)}
                        className="flex-1 bg-transparent text-left font-black text-xs md:text-sm text-gray-500 focus:text-white focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none px-0.5 tracking-tight"
                    />
                </>
            )}
        </div>
      </div>
    </div>
  );
};