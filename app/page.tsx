"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [nomeSala, setNomeSala] = useState("");
  const router = useRouter();

  const irParaSala = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nomeSala.trim()) return;
    // Redireciona para /nome-da-sala
    // O encodeURIComponent garante que espaços virem %20, etc.
    router.push(`/${encodeURIComponent(nomeSala.trim().toLowerCase())}`);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-white p-4 font-sans">
      <div className="max-w-md w-full text-center space-y-8">
        <div>
          <h1 className="text-5xl font-black text-red-600 mb-2 tracking-tighter">
            TORMENTA<span className="text-white font-light">MASTER</span>
          </h1>
          <p className="text-gray-400">Gerenciador de combate para Tormenta20</p>
        </div>

        <form onSubmit={irParaSala} className="flex flex-col gap-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <input
              type="text"
              className="relative w-full bg-gray-900 border border-gray-800 text-white text-lg p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-600"
              placeholder="Nome da Sala (ex: masmorra)"
              value={nomeSala}
              onChange={(e) => setNomeSala(e.target.value)}
              autoFocus
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition transform active:scale-95 uppercase tracking-widest"
          >
            Entrar / Criar Sala
          </button>
        </form>

        <div className="text-xs text-gray-600 mt-8">
          <p>Digite o nome de uma sala.</p>
          <p>Se ela não existir, você poderá criá-la.</p>
        </div>
      </div>
    </div>
  );
}