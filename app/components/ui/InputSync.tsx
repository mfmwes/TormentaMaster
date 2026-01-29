import React, { useState, useEffect } from "react";

interface InputSyncProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
  onUpdate: (value: any) => void;
}

export const InputSync = ({ value, onUpdate, className, ...props }: InputSyncProps) => {
  // Estado local para digitação fluida
  const [localValue, setLocalValue] = useState(value);

  // Se o valor mudar no banco (ex: outro jogador editou), atualiza o local
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleBlur = () => {
    // Só salva no banco quando sair do campo
    if (localValue !== value) {
      onUpdate(localValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur(); // Força o blur para salvar
    }
  };

  return (
    <input
      {...props}
      value={localValue}
      onChange={(e) => setLocalValue(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={className}
    />
  );
};