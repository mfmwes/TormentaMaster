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
};

export const BattleMap = ({ mapaUrl, tokens, onMoveToken, readonly = false }: BattleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  // Estado local para saber quem está sendo arrastado e onde ele está AGORA (sem esperar o servidor)
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [tempPosition, setTempPosition] = useState<{x: number, y: number} | null>(null);

  // Limpa o estado se soltar o mouse fora da div
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (draggingId) finalizarArrasto();
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, [draggingId, tempPosition]);

  const iniciarArrasto = (id: string, e: React.MouseEvent, currentX: number, currentY: number) => {
    if (!readonly) {
        e.stopPropagation();
        setDraggingId(id);
        setTempPosition({ x: currentX, y: currentY });
    }
  };

  const moverArrasto = (e: React.MouseEvent) => {
    if (!draggingId || !mapRef.current) return;

    const rect = mapRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Atualiza APENAS o visual localmente (super fluido)
    setTempPosition({ 
        x: Math.max(0, Math.min(100, x)), 
        y: Math.max(0, Math.min(100, y)) 
    });
  };

  const finalizarArrasto = () => {
    if (draggingId && tempPosition && onMoveToken) {
        // Busca os dados originais para saber o tipo
        const tokenOriginal = tokens.find(t => t.id === draggingId);
        if (tokenOriginal) {
            // SÓ AGORA envia para o servidor
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
      {/* MAPA */}
      {mapaUrl ? (
          <img src={mapaUrl} className="w-full h-full object-contain pointer-events-none" alt="Mapa" />
      ) : (
          <div className="flex items-center justify-center h-full text-gray-600 font-mono text-xs">
              Sem imagem de mapa carregada.
          </div>
      )}

      {/* TOKENS */}
      {tokens.map((t) => {
        // Se este token está sendo arrastado, usa a posição TEMPORÁRIA. Se não, usa a do BANCO.
        const isDragging = draggingId === t.id;
        const posX = isDragging && tempPosition ? tempPosition.x : t.x;
        const posY = isDragging && tempPosition ? tempPosition.y : t.y;

        return (
            <div
            key={t.id}
            onMouseDown={(e) => iniciarArrasto(t.id, e, t.x, t.y)}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 shadow-lg flex items-center justify-center transition-transform z-10 
                ${readonly ? 'cursor-default' : 'cursor-grab active:cursor-grabbing'}
                ${t.tipo === 'AMEACA' ? 'border-red-500 bg-red-900' : 'border-blue-500 bg-blue-900'}
                ${isDragging ? 'scale-125 z-50 shadow-xl ring-2 ring-white' : ''}
            `}
            style={{
                left: `${posX}%`,
                top: `${posY}%`,
                width: '40px',
                height: '40px',
                // Removemos a transition do CSS quando estamos arrastando para não dar delay
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
            
            {/* Nome flutuante */}
            <div className={`absolute -bottom-6 bg-black/80 text-white text-[8px] px-1 rounded whitespace-nowrap pointer-events-none ${isDragging ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`}>
                {t.nome}
            </div>
            </div>
        );
      })}
    </div>
  );
};