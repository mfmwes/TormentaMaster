import React, { useRef, useState, useEffect } from "react";

// --- TIPOS ---
type TokenType = "AMEACA" | "JOGADOR";

type TokenData = {
  id: string;
  nome: string;
  tipo: TokenType;
  x: number;
  y: number;
  tamanho?: number; 
  imagemUrl?: string;
};

type Props = {
  mapaUrl: string;
  tokens: TokenData[];
  readonly?: boolean;
  isGm: boolean;
  onMoveToken: (id: string, tipo: TokenType, x: number, y: number) => void;
  onResizeToken?: (id: string, tipo: TokenType, novoTamanho: number) => void;
};

export const BattleMap = ({ mapaUrl, tokens, readonly = false, isGm, onMoveToken, onResizeToken }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Guardamos apenas o ID para buscar o dado sempre fresco na lista 'tokens'
  const hoveredTokenRef = useRef<string | null>(null);
  
  // Estado do Viewport (Zoom e Pan)
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [startPan, setStartPan] = useState({ x: 0, y: 0 });
  const [localDrag, setLocalDrag] = useState<{ id: string, x: number, y: number } | null>(null);
  const [showCtrlWarning, setShowCtrlWarning] = useState(false);
  const warningTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // --- 1. DETECÇÃO DE TECLAS (+ e -) ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const hoveredId = hoveredTokenRef.current;
      
      if (!hoveredId || !onResizeToken) return;

      const token = tokens.find(t => t.id === hoveredId);
      if (!token) return;

      // TRAVA DE SEGURANÇA:
      // Se NÃO for GM, só permite redimensionar se o token for do tipo "JOGADOR"
      if (!isGm && token.tipo !== "JOGADOR") return;

      let delta = 0;
      if (e.key === "+" || e.key === "=" || e.key === "Add") delta = 0.1;
      if (e.key === "-" || e.key === "_" || e.key === "Subtract") delta = -0.1;

      if (delta !== 0) {
        e.preventDefault(); 
        const tamanhoAtual = token.tamanho || 1;
        const novoTamanho = Math.max(0.5, Math.min(6, tamanhoAtual + delta));
        const tamanhoFormatado = parseFloat(novoTamanho.toFixed(1));
        
        onResizeToken(token.id, token.tipo, tamanhoFormatado);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [tokens, onResizeToken, isGm]); 

  // --- 2. ZOOM DO MAPA (SCROLL) ---
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleNativeWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const zoomIntensity = 0.001;
        setScale((prevScale) => {
          const newScale = prevScale + e.deltaY * -zoomIntensity;
          return Math.min(Math.max(0.5, newScale), 4);
        });
      } else {
        setShowCtrlWarning(true);
        if (warningTimeoutRef.current) clearTimeout(warningTimeoutRef.current);
        warningTimeoutRef.current = setTimeout(() => { setShowCtrlWarning(false); }, 2000);
      }
    };

    container.addEventListener('wheel', handleNativeWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleNativeWheel);
      if (warningTimeoutRef.current) clearTimeout(warningTimeoutRef.current);
    };
  }, []); 

  // --- CONTROLES DE PAN ---
  const handleMouseDownMap = (e: React.MouseEvent) => {
    if (e.button === 0 && !localDrag) {
      setIsPanning(true);
      setStartPan({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMoveMap = (e: React.MouseEvent) => {
    if (isPanning) {
      e.preventDefault();
      setPosition({ x: e.clientX - startPan.x, y: e.clientY - startPan.y });
    }
  };

  const handleMouseUpMap = () => { setIsPanning(false); };

  // --- MOVIMENTAÇÃO DE TOKEN ---
  const handleTokenMouseDown = (e: React.MouseEvent, t: TokenData) => {
    e.stopPropagation(); 
    e.preventDefault();
    
    // PERMISSÃO DE ARRASTAR: GM move tudo, Jogador move só o dele
    const podeMexer = isGm || t.tipo === "JOGADOR";
    if (readonly && !podeMexer) return; 
    
    setLocalDrag({ id: t.id, x: t.x, y: t.y });
  };

  useEffect(() => {
    const handleGlobalMove = (e: MouseEvent) => {
      if (!localDrag || !contentRef.current) return;
      const rect = contentRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setLocalDrag(prev => prev ? { ...prev, x, y } : null);
    };

    const handleGlobalUp = () => {
      if (localDrag) {
        const tokenOriginal = tokens.find(t => t.id === localDrag.id);
        if (tokenOriginal) {
            const finalX = Math.max(0, Math.min(100, localDrag.x));
            const finalY = Math.max(0, Math.min(100, localDrag.y));
            onMoveToken(localDrag.id, tokenOriginal.tipo, finalX, finalY);
        }
        setLocalDrag(null);
      }
      setIsPanning(false);
    };

    if (localDrag || isPanning) {
      window.addEventListener("mousemove", handleGlobalMove);
      window.addEventListener("mouseup", handleGlobalUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleGlobalMove);
      window.removeEventListener("mouseup", handleGlobalUp);
    };
  }, [localDrag, isPanning, tokens, onMoveToken]);

  return (
    <div 
        ref={containerRef}
        className="w-full h-full bg-gray-900 relative overflow-hidden cursor-grab active:cursor-grabbing select-none group"
        onMouseDown={handleMouseDownMap}
        onMouseMove={handleMouseMoveMap}
        onMouseUp={handleMouseUpMap}
    >
      <div 
        ref={contentRef}
        className="absolute origin-top-left transition-transform duration-75 ease-out"
        style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`, width: '100%', height: '100%' }}
      >
        {mapaUrl ? (
             <img src={mapaUrl} className="w-full h-full object-contain pointer-events-none" alt="Mapa" />
        ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-700">Sem mapa carregado</div>
        )}

        {tokens.map((t) => {
          const isDragging = localDrag?.id === t.id;
          const x = isDragging ? localDrag.x : t.x;
          const y = isDragging ? localDrag.y : t.y;
          const tamanhoMulti = t.tamanho || 1; 
          
          return (
            <div
              key={t.id}
              // AQUI: Atualiza o REF para o ID deste token ao passar o mouse
              onMouseEnter={() => { hoveredTokenRef.current = t.id; }}
              onMouseLeave={() => { hoveredTokenRef.current = null; }}
              onMouseDown={(e) => handleTokenMouseDown(e, t)}
              
              className={`absolute rounded-full border-2 shadow-lg transition-transform hover:z-[100] flex items-center justify-center cursor-pointer group/token ${
                t.tipo === "AMEACA" ? "border-red-500 bg-red-900" : "border-blue-500 bg-blue-900"
              } ${isDragging ? 'z-[100] ring-2 ring-white scale-110' : 'z-10'}`}
              style={{ 
                  left: `${x}%`, top: `${y}%`,
                  width: `${3.5 * tamanhoMulti}rem`, height: `${3.5 * tamanhoMulti}rem`,
                  marginLeft: `-${1.75 * tamanhoMulti}rem`, marginTop: `-${1.75 * tamanhoMulti}rem`,
              }}
            >
              {t.imagemUrl ? (
                  <img src={t.imagemUrl} className="w-full h-full object-cover rounded-full pointer-events-none select-none" draggable={false} alt={t.nome} />
              ) : (
                  <span className="text-xs font-bold text-white pointer-events-none select-none">{t.nome.substring(0, 2).toUpperCase()}</span>
              )}
              
              {!isDragging && (
                  <div 
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap pointer-events-none opacity-0 group-hover/token:opacity-100 transition-opacity duration-200 shadow-md backdrop-blur-sm z-[200]"
                      style={{ transform: `translateX(-50%) scale(${1 / (scale * tamanhoMulti)})` }} 
                  >
                      {t.nome}
                  </div>
              )}
            </div>
          );
        })}
      </div>

      {showCtrlWarning && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-50 pointer-events-none animate-in fade-in zoom-in duration-200">
              <div className="bg-black/80 text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl backdrop-blur-md">
                  Segure <span className="text-yellow-400 font-mono">CTRL</span> + Scroll para Zoom
              </div>
          </div>
      )}

      <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-50">
        <button onClick={() => { setScale(1); setPosition({x:0, y:0}); }} className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded shadow border border-gray-600 text-xs font-bold">Reset</button>
        <div className="flex bg-gray-800 rounded border border-gray-600 overflow-hidden">
            <button onClick={() => setScale(s => Math.max(0.5, s - 0.2))} className="p-2 hover:bg-gray-700 text-white border-r border-gray-600">-</button>
            <span className="p-2 text-xs text-gray-300 min-w-[3rem] text-center">{Math.round(scale * 100)}%</span>
            <button onClick={() => setScale(s => Math.min(4, s + 0.2))} className="p-2 hover:bg-gray-700 text-white border-l border-gray-600">+</button>
        </div>
      </div>
    </div>
  );
};