import React from "react";

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
    red: "text-red-400 border-red-900/60 focus-within:border-red-500 bg-red-950/30",
    blue: "text-blue-400 border-blue-900/60 focus-within:border-blue-500 bg-blue-950/30",
    gray: "text-gray-300 border-gray-700 focus-within:border-gray-500 bg-gray-900",
  };
  
  const barColor = cor === "red" ? "bg-red-600" : cor === "blue" ? "bg-blue-600" : "bg-gray-600";
  const percent = max ? Math.max(0, Math.min(100, (valor / max) * 100)) : 0;
  
  // Se tem max, o valor atual alinha à direita (para encontrar a barra). 
  // Se não tem (Defesa), alinha ao centro.
  const alignClass = max !== undefined ? "text-right" : "text-center";

  return (
    <div className="flex flex-col items-center flex-1 relative group min-w-0">
      {/* Label */}
      <span className={`text-[10px] font-bold mb-1 uppercase tracking-wider whitespace-nowrap overflow-hidden text-ellipsis ${colorClasses[cor].split(' ')[0]}`}>
        {icon} {label}
      </span>
      
      <div className={`relative w-full rounded-lg border overflow-hidden shadow-sm transition-all h-10 flex items-center ${colorClasses[cor]}`}>
        {/* Barra de Progresso (Fundo) */}
        {max !== undefined && (
          <div 
            className={`absolute bottom-0 left-0 h-1 transition-all duration-500 ease-out opacity-60 ${barColor}`} 
            style={{ 
                width: `${percent}%`, 
                backgroundColor: percent < 30 && cor === 'red' ? '#ef4444' : '' 
            }}
          ></div>
        )}
        
        {/* Container dos Inputs */}
        <div className="flex items-center justify-center w-full px-1 relative z-10 h-full">
            
            {/* INPUT VALOR ATUAL */}
            <input
                type="number"
                value={valor}
                onChange={(e) => onChange(Number(e.target.value))}
                // Se tiver max, usa flex-1 para ocupar metade. Se não, w-full para ocupar tudo.
                className={`${max !== undefined ? 'flex-1' : 'w-full'} bg-transparent ${alignClass} font-black text-sm md:text-base tracking-tight focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none px-0.5`}
                placeholder="0"
            />
            
            {/* DIVISOR E MAX (Só renderiza se tiver max) */}
            {max !== undefined && onMaxChange && (
                <>
                    <span className="text-gray-500 font-mono text-xs opacity-50 mx-0.5">/</span>
                    <input 
                        type="number" 
                        value={max}
                        onChange={(e) => onMaxChange(Number(e.target.value))}
                        className="flex-1 bg-transparent text-left font-black text-xs md:text-sm text-gray-500 focus:text-white focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none px-0.5 tracking-tight"
                    />
                </>
            )}
        </div>
      </div>
    </div>
  );
};