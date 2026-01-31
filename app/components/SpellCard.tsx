import { useState, useRef, useEffect } from "react";
import { Magia, Aprimoramento } from "../types/game";
import { InputSync } from "./ui/InputSync";

// Utilitário para extrair números de strings (ex: "+2 PM" -> 2, "Truque" -> 0)
const parseCost = (custoStr: string): number => {
  if (!custoStr) return 0;
  if (custoStr.toLowerCase().includes("truque")) return 0;
  const match = custoStr.match(/\d+/);
  return match ? parseInt(match[0]) : 0;
};

// Componente de Textarea (Reutilizado para manter o padrão)
const AutoTextArea = ({ value, onChange, placeholder, className }: any) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [value]);
  return (
    <textarea
      ref={textareaRef}
      className={`${className} resize-none outline-none overflow-hidden block w-full bg-transparent`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={1}
      style={{ minHeight: '1.2em', lineHeight: '1.2' }} 
    />
  );
};

type Props = {
  magia: Magia;
  onUpdate: (campo: keyof Magia, valor: any) => void;
  onDelete: () => void;
  onRoll: (expr: string, rotulo: string) => void;
};

export const SpellCard = ({ magia, onUpdate, onDelete, onRoll }: Props) => {
  // Estado local para controlar quantos upgrades estão ativos
  // Formato: { "id_do_upgrade": quantidade }
  const [activeUpgrades, setActiveUpgrades] = useState<Record<string, number>>({});

  // Calcula o Custo Total (Base + Upgrades Ativos)
  const basePM = parseCost(magia.pm);
  const upgradeCost = (magia.aprimoramentos || []).reduce((acc, up) => {
    const count = activeUpgrades[up.id] || 0;
    return acc + (parseCost(up.custo) * count);
  }, 0);
  const totalPM = basePM + upgradeCost;

  // Funções de Controle de Upgrade
  const toggleUpgrade = (id: string, delta: number) => {
    setActiveUpgrades(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      const clone = { ...prev };
      if (next === 0) delete clone[id];
      else clone[id] = next;
      return clone;
    });
  };

  const updateAprimoramento = (id: string, campo: keyof Aprimoramento, valor: string) => {
    const novos = (magia.aprimoramentos || []).map(up => up.id === id ? { ...up, [campo]: valor } : up);
    onUpdate("aprimoramentos", novos);
  };

  const removeAprimoramento = (id: string) => {
    const novos = (magia.aprimoramentos || []).filter(up => up.id !== id);
    onUpdate("aprimoramentos", novos);
  };

  const addAprimoramento = () => {
    const novo: Aprimoramento = { id: crypto.randomUUID(), custo: "+1", descricao: "", roll: "" };
    onUpdate("aprimoramentos", [...(magia.aprimoramentos || []), novo]);
  };

  return (
    <div className={`bg-gray-900 border ${upgradeCost > 0 ? 'border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.2)]' : 'border-purple-900/30'} rounded overflow-hidden transition-all duration-300`}>
      
      {/* HEADER: Nome, Custo Total e Círculo */}
      <div className="flex justify-between items-center bg-purple-900/10 px-2 py-1 border-b border-purple-900/20">
        <div className="flex items-center gap-1 flex-grow">
          <span className="text-xs">🔮</span>
          <InputSync 
            className="font-bold text-xs text-purple-200 bg-transparent focus:outline-none w-full placeholder-purple-900/50 capitalize" 
            value={magia.nome} 
            onUpdate={v => onUpdate('nome', v)} 
            placeholder="Nome da Magia" 
          />
        </div>
        
        <div className="flex items-center gap-1">
          {/* VISUALIZADOR DE PM DINÂMICO */}
          <div className={`flex items-center rounded px-1.5 py-0 border transition-all ${upgradeCost > 0 ? 'bg-purple-600 border-purple-400 text-white shadow-sm' : 'bg-gray-900 border-purple-900/30 text-purple-500'}`}>
            <span className="text-[8px] mr-1 font-bold opacity-80">PM</span>
            {/* Se tiver upgrade, mostra o Total calculado. Se não, permite editar o Base. */}
            {upgradeCost > 0 ? (
               <span className="text-[10px] font-black min-w-[1rem] text-center">{totalPM}</span>
            ) : (
               <InputSync 
                 className="text-[10px] font-bold bg-transparent w-4 text-center focus:outline-none focus:text-white" 
                 value={magia.pm} 
                 onUpdate={v => onUpdate('pm', v)} 
               />
            )}
          </div>

          <InputSync 
            className="text-[8px] bg-gray-900 text-purple-400 border border-purple-900/30 rounded px-1 w-8 text-center focus:border-purple-500 focus:outline-none uppercase" 
            value={magia.circulo} 
            onUpdate={v => onUpdate('circulo', v)} 
            placeholder="CÍRC" 
          />
          <button onClick={onDelete} className="text-purple-800 hover:text-red-500 w-4 h-4 flex items-center justify-center text-[10px] transition">✕</button>
        </div>
      </div>

      {/* DETALHES TÉCNICOS (GRID) */}
      <div className="grid grid-cols-3 gap-px bg-purple-900/20 border-b border-purple-900/20 text-[9px]">
        {['execucao', 'alcance', 'area', 'alvo', 'duracao', 'resistencia'].map(campo => (
            <div key={campo} className="bg-gray-900/80 p-1 flex flex-col justify-center h-full min-h-[28px]">
                <span className="text-purple-500 font-bold uppercase tracking-wider mb-0.5 text-[8px] truncate block opacity-70" title={campo}>{campo.slice(0,6)}.</span>
                <AutoTextArea 
                    className="bg-transparent text-gray-200 w-full focus:outline-none focus:text-white text-[9px] leading-none py-0 capitalize" 
                    value={(magia as any)[campo]} 
                    onChange={(e: any) => onUpdate(campo as keyof Magia, e.target.value)} 
                    placeholder="-" 
                />
            </div>
        ))}
      </div>

      {/* DESCRIÇÃO E DANO BASE */}
      <div className="p-1.5 border-b border-purple-900/20">
        <div className="flex items-center gap-1 mb-1">
            <span className="text-[8px] text-purple-400 font-bold uppercase">Base:</span>
            <div className="relative h-4 bg-gray-950 border border-purple-900/40 rounded flex items-center w-20">
                <InputSync className="w-full h-full bg-transparent text-[9px] text-center font-bold px-3 focus:outline-none text-purple-200" value={magia.danoBase || ""} onUpdate={v => onUpdate('danoBase', v)} placeholder="Ex: 2d8" />
                {magia.danoBase && (
                    <button 
                        onClick={(e) => { e.stopPropagation(); onRoll(magia.danoBase!, `${magia.nome} (Base)`); }} 
                        className="absolute right-0 top-0 h-full w-4 flex items-center justify-center bg-gray-900 hover:bg-purple-600 text-purple-500 hover:text-white transition border-l border-purple-900/40 z-10" 
                        title="Rolar Base"
                    >🎲</button>
                )}
            </div>
        </div>
        <AutoTextArea 
            className="text-[10px] text-gray-200 bg-black/40 p-1.5 rounded border border-white/5 focus:border-purple-500/50 w-full leading-tight first-letter:uppercase" 
            value={magia.efeito}
            onChange={(e: any) => onUpdate('efeito', e.target.value)}
            placeholder="Descrição..." 
        />
      </div>

      {/* APRIMORAMENTOS INTERATIVOS */}
      {(magia.aprimoramentos && magia.aprimoramentos.length > 0) && (
        <div className="bg-black/20 p-1.5 pt-1 flex flex-col gap-1">
            {magia.aprimoramentos.map(up => {
                const count = activeUpgrades[up.id] || 0;
                const isActive = count > 0;

                return (
                    <div key={up.id} className={`flex items-start gap-1 text-[10px] group/up relative rounded border transition-all duration-200 ${isActive ? 'bg-purple-900/20 border-purple-500/50' : 'border-transparent hover:border-white/5'}`}>
                        
                        {/* BOTÃO DE CONTROLE DE CUSTO/QUANTIDADE */}
                        <div className="flex flex-col items-center justify-start h-full min-w-[2.5rem] p-0.5">
                            <div 
                                onClick={() => toggleUpgrade(up.id, 1)}
                                onContextMenu={(e) => { e.preventDefault(); toggleUpgrade(up.id, -1); }}
                                className={`cursor-pointer rounded px-1 py-0.5 border font-bold whitespace-nowrap w-full text-center transition select-none ${isActive ? 'bg-purple-600 border-purple-400 text-white shadow-md' : 'bg-purple-900/40 border-purple-700/50 text-purple-200 hover:bg-purple-800'}`}
                                title="Clique para adicionar (+1 PM), Botão Direito para remover"
                            >
                                {isActive ? (
                                    <span className="flex items-center justify-center gap-0.5">
                                        <span className="text-[8px] opacity-70">x</span>{count}
                                    </span>
                                ) : (
                                    <InputSync 
                                        className="bg-transparent w-full text-center focus:outline-none text-[9px] pointer-events-none" // pointer-events-none para o clique ir para a div pai
                                        value={up.custo} 
                                        onUpdate={v => updateAprimoramento(up.id, 'custo', v)} 
                                        placeholder="+1" 
                                    />
                                )}
                            </div>
                            {/* Input escondido para edição quando inativo, ou mostrar custo real */}
                            {!isActive && <div className="absolute inset-0 z-10" onClick={() => toggleUpgrade(up.id, 1)} />} 
                            {/* Pequeno botão para remover se estiver ativo (UX mobile) */}
                            {isActive && (
                                <button onClick={() => toggleUpgrade(up.id, -1)} className="text-[8px] text-red-400 hover:text-white mt-0.5">-1</button>
                            )}
                        </div>

                        {/* DESCRIÇÃO */}
                        <div className="flex-grow py-0.5">
                            <AutoTextArea 
                                className={`bg-transparent focus:outline-none w-full text-[10px] leading-tight py-0.5 first-letter:uppercase transition-colors ${isActive ? 'text-white font-medium' : 'text-gray-400'}`}
                                value={up.descricao} 
                                onChange={(e: any) => updateAprimoramento(up.id, 'descricao', e.target.value)} 
                                placeholder="Efeito do aprimoramento..." 
                            />
                        </div>

                        {/* ROLAGEM EXTRA & REMOVER */}
                        <div className="flex flex-col items-end gap-1 min-w-[3rem] py-0.5 pr-0.5">
                             {/* Botão de Excluir (Só aparece no hover e se não estiver ativo para evitar acidentes) */}
                             {!isActive && (
                                 <button onClick={() => removeAprimoramento(up.id)} className="text-gray-700 hover:text-red-500 w-3 h-3 flex items-center justify-center opacity-0 group-hover/up:opacity-100 transition">×</button>
                             )}

                             {/* Input/Botão de Dado */}
                             <div className={`relative h-5 w-full bg-gray-950 border border-gray-800 rounded flex items-center transition-colors ${isActive ? 'border-purple-500/50' : ''}`}>
                                <InputSync 
                                    className={`w-full h-full bg-transparent text-[9px] text-center px-4 focus:outline-none ${isActive ? 'text-purple-300' : 'text-gray-500 focus:text-purple-300'}`} 
                                    value={up.roll || ""} 
                                    onUpdate={v => updateAprimoramento(up.id, 'roll', v)} 
                                    placeholder="+D" 
                                />
                                {up.roll && (
                                    <button 
                                        onClick={(e) => { 
                                            e.stopPropagation(); 
                                            // Se tem count > 1, rola múltiplas vezes ou avisa? 
                                            // Simplificação: Rola a fórmula base do aprimoramento. O mestre soma se for x2.
                                            // OU Melhor: Se for x2, rola 2d8 em vez de 1d8? Complexo de parsear.
                                            // Vamos rolar simples com label indicando quantidade.
                                            const label = isActive ? `${magia.nome} (+${up.custo} x${count})` : `${magia.nome} (+${up.custo})`;
                                            onRoll(up.roll!, label); 
                                        }} 
                                        className="absolute right-0 top-0 h-full w-4 flex items-center justify-center hover:bg-purple-600 text-gray-700 hover:text-white transition rounded-r z-10" 
                                        title="Rolar Dado do Aprimoramento"
                                    >🎲</button>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
      )}

      {/* BOTÃO DE ADICIONAR UPGRADE (SÓ HOVER) */}
      <div className="bg-black/20 px-2 pb-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={addAprimoramento} className="text-[9px] text-purple-500/50 hover:text-purple-300 w-full text-center hover:bg-purple-900/10 rounded transition">+ Upgrade</button>
      </div>
    </div>
  );
};