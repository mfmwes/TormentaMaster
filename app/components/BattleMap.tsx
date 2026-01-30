import React, { useRef, useState, useEffect } from "react";

// Tipos
type TokenType = "AMEACA" | "JOGADOR";

type TokenData = {
  id: string;
  nome: string;
  tipo: TokenType;
  x: number;
  y: number;
  imagemUrl?: string;
};

type Props = {
  mapaUrl: string;
  tokens: TokenData[];
  readonly?: boolean;
  isGm: boolean;
  onMoveToken: (id: string, tipo: TokenType, x: number, y: number) => void;
};

export const BattleMap = ({ mapaUrl, tokens, readonly = false, isGm, onMoveToken }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Estado do Viewport (Zoom e Pan)
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Estado de Arrastar o Mapa (Pan)
  const [isPanning, setIsPanning] = useState(false);
  const [startPan, setStartPan] = useState({ x: 0, y: 0 });

  // Estado de Arrastar Token
  const [draggingToken, setDraggingToken] = useState<string | null>(null);

  // Aviso de "Use Ctrl + Scroll"
  const [showCtrlWarning, setShowCtrlWarning] = useState(false);
  const warningTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // --- SOLUÇÃO DO SCROLL: Ctrl + Wheel ---
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleNativeWheel = (e: WheelEvent) => {
      // Verifica se a tecla CTRL (ou Command no Mac) está pressionada
      if (e.ctrlKey || e.metaKey) {
        // Se estiver segurando Ctrl, bloqueia a página e dá ZOOM
        e.preventDefault();

        const zoomIntensity = 0.001;
        setScale((prevScale) => {
          const newScale = prevScale + e.deltaY * -zoomIntensity;
          return Math.min(Math.max(0.5, newScale), 4); // Limites de zoom: 0.5x até 4x
        });
      } else {
        // Se NÃO estiver segurando Ctrl, permite rolar a página normalmente
        // Mas mostra o aviso para o usuário saber como dar zoom
        
        // Lógica para mostrar o aviso e sumir depois de 2 segundos
        setShowCtrlWarning(true);
        if (warningTimeoutRef.current) clearTimeout(warningTimeoutRef.current);
        warningTimeoutRef.current = setTimeout(() => {
            setShowCtrlWarning(false);
        }, 2000);
      }
    };

    // { passive: false } é crucial para permitir o e.preventDefault()
    container.addEventListener('wheel', handleNativeWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleNativeWheel);
      if (warningTimeoutRef.current) clearTimeout(warningTimeoutRef.current);
    };
  }, []);

  // --- CONTROLES DE PAN (ARRASTAR O FUNDO) ---
  const handleMouseDownMap = (e: React.MouseEvent) => {
    if (e.button === 0 && !draggingToken) {
      setIsPanning(true);
      setStartPan({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMoveMap = (e: React.MouseEvent) => {
    if (isPanning) {
      e.preventDefault();
      setPosition({
        x: e.clientX - startPan.x,
        y: e.clientY - startPan.y,
      });
    }
  };

  const handleMouseUpMap = () => {
    setIsPanning(false);
  };

  useEffect(() => {
    const handleGlobalUp = () => setIsPanning(false);
    window.addEventListener("mouseup", handleGlobalUp);
    return () => window.removeEventListener("mouseup", handleGlobalUp);
  }, []);

  // --- MOVIMENTAÇÃO DE TOKEN ---
  const handleTokenMouseDown = (e: React.MouseEvent, t: TokenData) => {
    e.stopPropagation();
    if (readonly && !isGm) return; 
    setDraggingToken(t.id);
  };

  useEffect(() => {
    const handleGlobalMove = (e: MouseEvent) => {
      if (!draggingToken || !contentRef.current) return;

      const rect = contentRef.current.getBoundingClientRect();
      
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      const finalX = Math.max(0, Math.min(100, x));
      const finalY = Math.max(0, Math.min(100, y));

      const token = tokens.find(t => t.id === draggingToken);
      if (token) {
        onMoveToken(token.id, token.tipo, finalX, finalY);
      }
    };

    const handleGlobalUpToken = () => {
      setDraggingToken(null);
    };

    if (draggingToken) {
      window.addEventListener("mousemove", handleGlobalMove);
      window.addEventListener("mouseup", handleGlobalUpToken);
    }

    return () => {
      window.removeEventListener("mousemove", handleGlobalMove);
      window.removeEventListener("mouseup", handleGlobalUpToken);
    };
  }, [draggingToken, tokens, onMoveToken]);


  return (
    <div 
        ref={containerRef}
        className="w-full h-full bg-gray-900 relative overflow-hidden cursor-grab active:cursor-grabbing select-none group"
        onMouseDown={handleMouseDownMap}
        onMouseMove={handleMouseMoveMap}
        onMouseUp={handleMouseUpMap}
    >
      {/* Container Transformado */}
      <div 
        ref={contentRef}
        className="absolute origin-top-left transition-transform duration-75 ease-out"
        style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            width: '100%', 
            height: '100%', 
        }}
      >
        {/* Imagem do Mapa */}
        {mapaUrl ? (
             <img 
                src={mapaUrl} 
                className="w-full h-full object-contain pointer-events-none" 
                alt="Mapa de Batalha" 
             />
        ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-700">
                Sem mapa carregado
            </div>
        )}

        {/* Tokens */}
        {tokens.map((t) => (
          <div
            key={t.id}
            onMouseDown={(e) => handleTokenMouseDown(e, t)}
            className={`absolute w-10 h-10 md:w-14 md:h-14 -ml-5 -mt-5 md:-ml-7 md:-mt-7 rounded-full border-2 shadow-lg transition-transform hover:scale-110 flex items-center justify-center z-10 cursor-pointer ${
              t.tipo === "AMEACA" ? "border-red-500 bg-red-900" : "border-blue-500 bg-blue-900"
            } ${draggingToken === t.id ? 'z-50 ring-2 ring-white' : ''}`}
            style={{ 
                left: `${t.x}%`, 
                top: `${t.y}%`
            }}
            title={t.nome}
          >
            {t.imagemUrl ? (
                <img src={t.imagemUrl} className="w-full h-full object-cover rounded-full pointer-events-none" alt={t.nome} />
            ) : (
                <span className="text-xs font-bold text-white pointer-events-none select-none">
                    {t.nome.substring(0, 2).toUpperCase()}
                </span>
            )}
            
            {/* Nome flutuante */}
            {draggingToken !== t.id && (
                <div 
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-[8px] px-1 rounded whitespace-nowrap pointer-events-none"
                    style={{ transform: `translateX(-50%) scale(${1 / scale})` }} 
                >
                    {t.nome}
                </div>
            )}
          </div>
        ))}
      </div>

      {/* AVISO DE CTRL + SCROLL */}
      {showCtrlWarning && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-50 pointer-events-none animate-in fade-in zoom-in duration-200">
              <div className="bg-black/80 text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl">
                  Segure <span className="text-yellow-400 font-mono">CTRL</span> + Scroll para dar Zoom
              </div>
          </div>
      )}

      {/* Controles Flutuantes */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-50">
        <button 
            onClick={() => { setScale(1); setPosition({x:0, y:0}); }}
            className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded shadow border border-gray-600 text-xs font-bold"
            title="Resetar Visão"
        >
            Reset
        </button>
        <div className="flex bg-gray-800 rounded border border-gray-600 overflow-hidden">
            <button onClick={() => setScale(s => Math.max(0.5, s - 0.2))} className="p-2 hover:bg-gray-700 text-white border-r border-gray-600">-</button>
            <span className="p-2 text-xs text-gray-300 min-w-[3rem] text-center">{Math.round(scale * 100)}%</span>
            <button onClick={() => setScale(s => Math.min(4, s + 0.2))} className="p-2 hover:bg-gray-700 text-white border-l border-gray-600">+</button>
        </div>
      </div>
    </div>
  );
};