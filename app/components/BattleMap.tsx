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
  
  // Hover apenas para desktop
  const hoveredTokenRef = useRef<string | null>(null);
  
  // Estado de Seleção (Para Mobile/Desktop controle de tamanho)
  const [selectedTokenId, setSelectedTokenId] = useState<string | null>(null);

  // Estado do Viewport (Zoom e Pan)
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [startPan, setStartPan] = useState({ x: 0, y: 0 });
  const [localDrag, setLocalDrag] = useState<{ id: string, x: number, y: number } | null>(null);
  const [showCtrlWarning, setShowCtrlWarning] = useState(false);
  const warningTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Token selecionado atual (computado)
  const selectedToken = tokens.find(t => t.id === selectedTokenId);

  // --- 1. ATALHOS DE TECLADO (DESKTOP) ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prioridade: Token Selecionado (Clique) > Token Hover (Mouse)
      const targetId = selectedTokenId || hoveredTokenRef.current;
      
      if (!targetId || !onResizeToken) return;

      const token = tokens.find(t => t.id === targetId);
      if (!token) return;

      if (!isGm && token.tipo !== "JOGADOR") return;

      let delta = 0;
      if (e.key === "+" || e.key === "=" || e.key === "Add") delta = 0.1;
      if (e.key === "-" || e.key === "_" || e.key === "Subtract") delta = -0.1;

      if (delta !== 0) {
        // e.preventDefault(); // Comentado para não travar input de texto se houver
        const tamanhoAtual = token.tamanho || 1;
        const novoTamanho = Math.max(0.5, Math.min(6, tamanhoAtual + delta));
        const tamanhoFormatado = parseFloat(novoTamanho.toFixed(1));
        
        onResizeToken(token.id, token.tipo, tamanhoFormatado);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [tokens, onResizeToken, isGm, selectedTokenId]); 

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

  // =========================================================
  // LOGICA DE PAN (MOVER O MAPA) - MOUSE & TOUCH
  // =========================================================
  const startMapPan = (clientX: number, clientY: number) => {
    if (!localDrag) {
      setIsPanning(true);
      setStartPan({ x: clientX - position.x, y: clientY - position.y });
    }
  };

  const moveMapPan = (clientX: number, clientY: number) => {
    if (isPanning) {
      setPosition({ x: clientX - startPan.x, y: clientY - startPan.y });
    }
  };

  // Mouse
  const handleMouseDownMap = (e: React.MouseEvent) => {
    if (e.button === 0) { // Botão esquerdo apenas
       // Se clicou no fundo, deseleciona token
       if (e.target === contentRef.current || e.target === containerRef.current) {
          setSelectedTokenId(null);
       }
       startMapPan(e.clientX, e.clientY);
    }
  };
  
  // Touch (Celular)
  const handleTouchStartMap = (e: React.TouchEvent) => {
    if (e.touches.length === 1) { // 1 dedo = Pan
        // Se tocou no fundo, deseleciona
        if (e.target === contentRef.current || e.target === containerRef.current) {
            setSelectedTokenId(null);
        }
        startMapPan(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  // =========================================================
  // LOGICA DE TOKENS (MOVER & SELECIONAR) - MOUSE & TOUCH
  // =========================================================
  const startTokenDrag = (t: TokenData) => {
    const podeMexer = isGm || t.tipo === "JOGADOR";
    if (readonly && !podeMexer) return;
    
    setSelectedTokenId(t.id); // Seleciona ao começar a arrastar
    setLocalDrag({ id: t.id, x: t.x, y: t.y });
  };

  // Mouse Down no Token
  const handleTokenMouseDown = (e: React.MouseEvent, t: TokenData) => {
    e.stopPropagation(); e.preventDefault();
    startTokenDrag(t);
  };

  // Touch Start no Token
  const handleTokenTouchStart = (e: React.TouchEvent, t: TokenData) => {
    e.stopPropagation(); 
    // Não previna default aqui imediatamente se quiser permitir scroll, 
    // mas para drag n drop geralmente prevenimos.
    // e.preventDefault(); 
    startTokenDrag(t);
  };

  // =========================================================
  // EVENTOS GLOBAIS (WINDOW) PARA ARRASTAR/SOLTAR
  // =========================================================
  useEffect(() => {
    // Função unificada para calcular posição do drag
    const processMove = (clientX: number, clientY: number) => {
        if (localDrag && contentRef.current) {
            const rect = contentRef.current.getBoundingClientRect();
            const x = ((clientX - rect.left) / rect.width) * 100;
            const y = ((clientY - rect.top) / rect.height) * 100;
            setLocalDrag(prev => prev ? { ...prev, x, y } : null);
        }
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
        if (localDrag) { e.preventDefault(); processMove(e.clientX, e.clientY); }
        if (isPanning) { e.preventDefault(); moveMapPan(e.clientX, e.clientY); }
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
        if (localDrag || isPanning) {
            // Importante: previne scroll da tela enquanto arrasta token ou mapa
            if (e.cancelable) e.preventDefault(); 
            processMove(e.touches[0].clientX, e.touches[0].clientY);
            moveMapPan(e.touches[0].clientX, e.touches[0].clientY);
        }
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

    // Adiciona listeners globais
    window.addEventListener("mousemove", handleGlobalMouseMove, { passive: false });
    window.addEventListener("mouseup", handleGlobalUp);
    window.addEventListener("touchmove", handleGlobalTouchMove, { passive: false });
    window.addEventListener("touchend", handleGlobalUp);
    window.addEventListener("touchcancel", handleGlobalUp);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalUp);
      window.removeEventListener("touchmove", handleGlobalTouchMove);
      window.removeEventListener("touchend", handleGlobalUp);
      window.removeEventListener("touchcancel", handleGlobalUp);
    };
  }, [localDrag, isPanning, tokens, onMoveToken, position, startPan]);

  // Função auxiliar para mudar tamanho pelo botão na tela
  const changeSize = (delta: number) => {
      if (!selectedToken || !onResizeToken) return;
      const podeMexer = isGm || selectedToken.tipo === "JOGADOR";
      if (!podeMexer) return;

      const tamanhoAtual = selectedToken.tamanho || 1;
      const novoTamanho = Math.max(0.5, Math.min(6, tamanhoAtual + delta));
      const tamanhoFormatado = parseFloat(novoTamanho.toFixed(1));
      onResizeToken(selectedToken.id, selectedToken.tipo, tamanhoFormatado);
  };

  return (
    <div 
        ref={containerRef}
        className="w-full h-full bg-gray-900 relative overflow-hidden cursor-grab active:cursor-grabbing select-none group touch-none" // touch-none evita zoom nativo do browser no container
        onMouseDown={handleMouseDownMap}
        onTouchStart={handleTouchStartMap}
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
          const isSelected = selectedTokenId === t.id;
          const x = isDragging ? localDrag.x : t.x;
          const y = isDragging ? localDrag.y : t.y;
          const tamanhoMulti = t.tamanho || 1; 
          
          return (
            <div
              key={t.id}
              onMouseEnter={() => { hoveredTokenRef.current = t.id; }}
              onMouseLeave={() => { hoveredTokenRef.current = null; }}
              onMouseDown={(e) => handleTokenMouseDown(e, t)}
              onTouchStart={(e) => handleTokenTouchStart(e, t)}
              
              className={`absolute rounded-full border-2 shadow-lg transition-transform hover:z-[100] flex items-center justify-center cursor-pointer group/token
                ${t.tipo === "AMEACA" ? "border-red-500 bg-red-900" : "border-blue-500 bg-blue-900"}
                ${(isDragging || isSelected) ? 'z-[100] ring-4 ring-yellow-400 scale-105' : 'z-10'}
              `}
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

      {/* CONTROLES DE MAPA (DIREITA INFERIOR) */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-50 items-end">
        
        {/* CONTROLE DE TAMANHO DO TOKEN (SÓ APARECE SE TIVER TOKEN SELECIONADO) */}
        {selectedToken && (
            <div className="bg-gray-900/90 backdrop-blur border border-yellow-500 rounded-lg p-2 mb-2 shadow-2xl animate-in slide-in-from-right flex flex-col items-center gap-1">
                <span className="text-[10px] text-yellow-500 font-bold uppercase truncate max-w-[80px]">{selectedToken.nome}</span>
                <div className="flex items-center gap-1">
                    <button onClick={() => changeSize(-0.2)} className="w-8 h-8 bg-gray-800 hover:bg-gray-700 text-white rounded border border-gray-600 font-bold text-lg flex items-center justify-center active:scale-95">-</button>
                    <span className="text-xs text-white font-mono w-8 text-center">{selectedToken.tamanho || 1}x</span>
                    <button onClick={() => changeSize(0.2)} className="w-8 h-8 bg-gray-800 hover:bg-gray-700 text-white rounded border border-gray-600 font-bold text-lg flex items-center justify-center active:scale-95">+</button>
                </div>
            </div>
        )}

        <button onClick={() => { setScale(1); setPosition({x:0, y:0}); }} className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded shadow border border-gray-600 text-xs font-bold w-full">Reset</button>
        
        <div className="flex bg-gray-800 rounded border border-gray-600 overflow-hidden">
            <button onClick={() => setScale(s => Math.max(0.5, s - 0.2))} className="p-3 hover:bg-gray-700 text-white border-r border-gray-600 active:bg-gray-600">🔍-</button>
            <span className="p-3 text-xs text-gray-300 min-w-[3.5rem] text-center flex items-center justify-center">{Math.round(scale * 100)}%</span>
            <button onClick={() => setScale(s => Math.min(4, s + 0.2))} className="p-3 hover:bg-gray-700 text-white border-l border-gray-600 active:bg-gray-600">🔍+</button>
        </div>
      </div>
    </div>
  );
};