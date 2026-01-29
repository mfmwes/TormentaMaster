import { ResultadoRolagem } from "../types/game";

export const rolarDados = (expressao: string): ResultadoRolagem | null => {
  const limpo = expressao.replace(/\s/g, "");
  let dados = 1, lados = 20, bonus = 0;

  if (limpo.match(/^[+-]\d+$/)) {
    bonus = parseInt(limpo);
  } else {
    const match = limpo.match(/(\d+)d(\d+)([+-]\d+)?/);
    if (!match) return null;
    dados = parseInt(match[1]);
    lados = parseInt(match[2]);
    bonus = match[3] ? parseInt(match[3]) : 0;
  }

  const rolagens = [];
  let soma = 0;
  for (let i = 0; i < dados; i++) {
    const r = Math.floor(Math.random() * lados) + 1;
    rolagens.push(r);
    soma += r;
  }

  return {
    total: soma + bonus,
    detalhes: `[${rolagens.join(", ")}] ${bonus >= 0 ? '+' : ''} ${bonus}`,
    expressao
  };
};