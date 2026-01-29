import { useState, useRef } from "react";

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
  const [draggingId, setDraggingId] = useState<string | null>(null);

  const handleMouseDown = (id: string, e: React.MouseEvent) => {
    if (!readonly) {
        e.stopPropagation();
        setDraggingId(id);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggingId || !mapRef.current || !onMoveToken) return;

    const rect = mapRef.current.getBoundingClientRect();
    // Calcula % relativo ao tamanho da imagem na tela
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const safeX = Math.max(0, Math.min(100, x));
    const safeY = Math.max(0, Math.min(100, y));

    const token = tokens.find(t => t.id === draggingId);
    if (token) {
        onMoveToken(token.id, token.tipo, safeX, safeY);
    }
  };

  const handleMouseUp = () => {
    setDraggingId(null);
  };

  return (
    <div 
      className="relative w-full h-full bg-gray-950 overflow-hidden select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      ref={mapRef}
    >
      {/* MAPA (IMAGEM) */}
      {mapaUrl ? (
          <img src={mapaUrl} className="w-full h-full object-contain pointer-events-none" alt="Mapa" />
      ) : (
          <div className="flex items-center justify-center h-full text-gray-600 font-mono text-xs">
              Sem imagem de mapa carregada.
          </div>
      )}

      {/* TOKENS */}
      {tokens.map((t) => (
        <div
          key={t.id}
          onMouseDown={(e) => handleMouseDown(t.id, e)}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 shadow-lg flex items-center justify-center transition-transform z-10 
            ${readonly ? 'cursor-default' : 'cursor-grab active:cursor-grabbing active:scale-110 active:z-50'}
            ${t.tipo === 'AMEACA' ? 'border-red-500 bg-red-900' : 'border-blue-500 bg-blue-900'}
          `}
          style={{
            left: `${t.x}%`,
            top: `${t.y}%`,
            width: '40px', // Tamanho fixo para simplificar, ou use % para escalar
            height: '40px',
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
          
          {/* Nome flutuante no hover */}
          <div className="absolute -bottom-6 bg-black/80 text-white text-[8px] px-1 rounded opacity-0 hover:opacity-100 whitespace-nowrap pointer-events-none">
              {t.nome}
          </div>
        </div>
      ))}
    </div>
  );
};