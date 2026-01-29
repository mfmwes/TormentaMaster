import React, { useState, useRef, useEffect } from "react";

type Token = {
  id: string;
  nome: string;
  tipo: "AMEACA" | "JOGADOR";
  x: number;
  y: number;
  cor?: string;
  imagemUrl?: string;
  tamanho?: number; 
};

type BattleMapProps = {
  mapaUrl: string;
  tokens: Token[];
  onMoveToken?: (id: string, tipo: "AMEACA" | "JOGADOR", x: number, y: number) => void;
  readonly?: boolean;
  isGm?: boolean; // Nova propriedade para permissão
};

export const BattleMap = ({ mapaUrl, tokens, onMoveToken, readonly = false, isGm = false }: BattleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [tempPosition, setTempPosition] = useState<{x: number, y: number} | null>(null);

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (draggingId) finalizarArrasto();
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, [draggingId, tempPosition]);

  const iniciarArrasto = (id: string, e: React.MouseEvent, currentX: number, currentY: number, tipo: "AMEACA" | "JOGADOR") => {
    if (readonly) return;

    // REGRA DE SEGURANÇA: Jogador não move Ameaça
    if (!isGm && tipo === "AMEACA") return;

    e.stopPropagation();
    e.preventDefault(); // Previne comportamento de arrastar imagem nativa do navegador
    setDraggingId(id);
    setTempPosition({ x: currentX, y: currentY });
  };

  const moverArrasto = (e: React.MouseEvent) => {
    if (!draggingId || !mapRef.current) return;

    const rect = mapRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setTempPosition({ 
        x: Math.max(0, Math.min(100, x)), 
        y: Math.max(0, Math.min(100, y)) 
    });
  };

  const finalizarArrasto = () => {
    if (draggingId && tempPosition && onMoveToken) {
        const tokenOriginal = tokens.find(t => t.id === draggingId);
        if (tokenOriginal) {
            onMoveToken(draggingId, tokenOriginal.tipo, tempPosition.x, tempPosition.y);
        }
    }
    setDraggingId(null);
    setTempPosition(null);
  };

  return (
    <div 
      className="relative w-full h-full bg-gray-950 overflow-hidden select-none"
      onMouseMove={moverArrasto}
      ref={mapRef}
    >
      {mapaUrl ? (
          <img src={mapaUrl} className="w-full h-full object-contain pointer-events-none" alt="Mapa" />
      ) : (
          <div className="flex items-center justify-center h-full text-gray-600 font-mono text-xs">
              Sem imagem de mapa carregada.
          </div>
      )}

      {tokens.map((t) => {
        const isDragging = draggingId === t.id;
        const posX = isDragging && tempPosition ? tempPosition.x : t.x;
        const posY = isDragging && tempPosition ? tempPosition.y : t.y;

        // Define se o cursor mostra que é possível mover
        const podeMover = !readonly && (isGm || t.tipo === "JOGADOR");
        const cursorClass = podeMover ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default';

        return (
            <div
            key={t.id}
            onMouseDown={(e) => iniciarArrasto(t.id, e, t.x, t.y, t.tipo)}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 shadow-lg flex items-center justify-center transition-transform z-10 
                ${cursorClass}
                ${t.tipo === 'AMEACA' ? 'border-red-500 bg-red-900' : 'border-blue-500 bg-blue-900'}
                ${isDragging ? 'scale-125 z-50 shadow-xl ring-2 ring-white' : ''}
            `}
            style={{
                left: `${posX}%`,
                top: `${posY}%`,
                width: '40px',
                height: '40px',
                transition: isDragging ? 'none' : 'all 0.2s ease-out'
            }}
            title={t.nome}
            >
            {t.imagemUrl ? (
                <img src={t.imagemUrl} className="w-full h-full object-cover rounded-full pointer-events-none" />
            ) : (
                <span className="text-white font-bold text-[10px] pointer-events-none select-none">
                    {t.nome.substring(0, 2).toUpperCase()}
                </span>
            )}
            
            <div className={`absolute -bottom-6 bg-black/80 text-white text-[8px] px-1 rounded whitespace-nowrap pointer-events-none ${isDragging ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`}>
                {t.nome}
            </div>
            </div>
        );
      })}
    </div>
  );
};