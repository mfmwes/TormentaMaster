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

  useEffect(() => { setLocalVal(valor.toString()); }, [valor]);
  useEffect(() => { if (max !== undefined) setLocalMax(max.toString()); }, [max]);

  const salvarVal = () => {
    const num = parseInt(localVal);
    if (!isNaN(num) && num !== valor) onChange(num);
    else if (isNaN(num)) setLocalVal(valor.toString());
  };

  const salvarMax = () => {
    const num = parseInt(localMax);
    if (!isNaN(num) && onMaxChange && num !== max) onMaxChange(num);
  };

  const handleKeyDown = (e: React.KeyboardEvent, saveFn: () => void) => {
    if (e.key === "Enter") { (e.target as HTMLInputElement).blur(); }
  };

  const alterarValor = (delta: number) => {
    const novoValor = valor + delta;
    setLocalVal(novoValor.toString());
    onChange(novoValor);
  };

  // Lógica de Fonte Dinâmica: Se tiver 4+ dígitos, usa fonte menor
  const isLarge = localVal.length >= 4 || localMax.length >= 4;
  const fontSizeClass = isLarge ? "text-xs md:text-xs tracking-tighter" : "text-sm md:text-base";

  const colorClasses = {
    red: "text-red-400 border-red-900/60 focus-within:border-red-500 bg-red-950/30",
    blue: "text-blue-400 border-blue-900/60 focus-within:border-blue-500 bg-blue-950/30",
    gray: "text-gray-300 border-gray-700 focus-within:border-gray-500 bg-gray-900",
  };
  
  const barColor = cor === "red" ? "bg-red-600" : cor === "blue" ? "bg-blue-600" : "bg-gray-600";
  const percent = max && max > 0 ? Math.max(0, Math.min(100, (valor / max) * 100)) : 0;
  const showControls = max !== undefined;

  return (
    <div className="flex flex-col items-center flex-1 min-w-0 group select-none">
      <span className={`text-[10px] font-bold mb-1 uppercase tracking-wider whitespace-nowrap overflow-hidden text-ellipsis ${colorClasses[cor].split(' ')[0]}`}>
        {icon} {label}
      </span>
      
      <div className={`relative w-full rounded-lg border overflow-hidden shadow-sm transition-all flex flex-col ${colorClasses[cor]}`}>
        
        {/* Barra de Progresso */}
        {max !== undefined && (
          <div 
            className={`absolute bottom-0 left-0 h-full transition-all duration-500 ease-out opacity-20 pointer-events-none ${barColor}`} 
            style={{ width: `${percent}%`, backgroundColor: percent < 30 && cor === 'red' ? '#ef4444' : '' }}
          ></div>
        )}
        
        {/* INPUTS */}
        <div className={`flex items-center justify-center w-full px-0.5 relative z-10 ${showControls ? 'pt-1.5 pb-0' : 'py-2.5'}`}>
            
            <input
                type="number"
                value={localVal}
                onChange={(e) => setLocalVal(e.target.value)}
                onBlur={salvarVal}
                onKeyDown={(e) => handleKeyDown(e, salvarVal)}
                // w-1/2 força ocupar metade exata. p-0 remove espaçamento interno.
                className={`${max !== undefined ? 'text-right w-1/2' : 'text-center w-full'} bg-transparent font-black ${fontSizeClass} focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-0`}
                placeholder="0"
            />
            
            {max !== undefined && onMaxChange && (
                <>
                    <span className="text-gray-500 font-mono text-xs opacity-50 mx-px pointer-events-none">/</span>
                    <input 
                        type="number" 
                        value={localMax}
                        onChange={(e) => setLocalMax(e.target.value)}
                        onBlur={salvarMax}
                        onKeyDown={(e) => handleKeyDown(e, salvarMax)}
                        className={`w-1/2 bg-transparent text-left font-black ${fontSizeClass} text-gray-500 focus:text-white focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-0`}
                    />
                </>
            )}
        </div>

        {/* CONTROLES */}
        {showControls && (
            <div className="flex justify-between items-center px-0.5 pb-0.5 pt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-full">
                <div className="flex gap-px">
                    <button onClick={() => alterarValor(-10)} className="h-4 w-5 flex items-center justify-center text-[9px] bg-black/20 hover:bg-black/50 rounded-l text-white/70 hover:text-white transition font-mono border-r border-black/10" title="-10">-10</button>
                    <button onClick={() => alterarValor(-1)} className="h-4 w-5 flex items-center justify-center text-[10px] bg-black/20 hover:bg-black/50 rounded-r text-white/70 hover:text-white transition font-bold" title="-1">-1</button>
                </div>

                <div className="flex gap-px">
                    <button onClick={() => alterarValor(1)} className="h-4 w-5 flex items-center justify-center text-[10px] bg-black/20 hover:bg-black/50 rounded-l text-white/70 hover:text-white transition font-bold border-r border-black/10" title="+1">+1</button>
                    <button onClick={() => alterarValor(10)} className="h-4 w-5 flex items-center justify-center text-[9px] bg-black/20 hover:bg-black/50 rounded-r text-white/70 hover:text-white transition font-mono" title="+10">+10</button>
                </div>
            </div>
        )}
        {!showControls && <div className="h-1"></div>}
      </div>
    </div>
  );
};