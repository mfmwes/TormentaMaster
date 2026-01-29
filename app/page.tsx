"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [sala, setSala] = useState("");
  const router = useRouter();

  const entrar = (e: React.FormEvent) => {
    e.preventDefault();
    if(sala) router.push(`/${sala}`); // Redireciona para a sala dinâmica
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-950 text-white">
      <h1 className="text-4xl font-black text-red-600 mb-8">TORMENTA<span className="text-white font-light">MASTER</span></h1>
      <form onSubmit={entrar} className="flex flex-col gap-4 w-full max-w-sm p-6 bg-gray-900 rounded-xl border border-gray-800">
        <label className="text-sm font-bold text-gray-400">Nome da Sala (Mesa)</label>
        <input 
            className="bg-gray-950 border border-gray-700 p-3 rounded text-white focus:border-red-500 outline-none"
            placeholder="Ex: caverna-do-dragao"
            value={sala}
            onChange={e => setSala(e.target.value)}
        />
        <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition">
            Criar / Entrar
        </button>
      </form>
    </div>
  );
}