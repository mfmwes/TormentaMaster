import React, { useState } from "react";

type Props = {
  ehPrimeiroAcesso: boolean; // Se true, pede para CRIAR senha. Se false, pede para DIGITAR.
  onConfirmar: (senha: string) => void;
};

export const ModalLoginMestre = ({ ehPrimeiroAcesso, onConfirmar }: Props) => {
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha) onConfirmar(senha);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="bg-gray-900 border border-red-900 p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center">
        <div className="text-5xl mb-4">🔒</div>
        <h2 className="text-2xl font-black text-red-500 mb-2">
          {ehPrimeiroAcesso ? "CRIAR SALA" : "ÁREA DO MESTRE"}
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          {ehPrimeiroAcesso 
            ? "Defina uma senha para proteger os controles do Mestre." 
            : "Esta área é restrita. Digite a senha do Mestre."}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            autoFocus
            className="bg-black border border-gray-700 rounded-lg p-3 text-center text-white text-xl focus:border-red-500 outline-none"
            placeholder="Senha..."
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button
            type="submit"
            className="bg-red-700 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition"
          >
            {ehPrimeiroAcesso ? "Definir Senha" : "Entrar como Mestre"}
          </button>
        </form>
        
        {!ehPrimeiroAcesso && (
           <p className="mt-4 text-xs text-gray-600">Não é o mestre? Apenas aguarde o jogo começar.</p>
        )}
      </div>
    </div>
  );
};