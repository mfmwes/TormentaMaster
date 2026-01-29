export type Ameaca = {
  id: string;
  nome: string;
  defesa: number;
  pvAtual: number;
  pvMax: number;
  pmAtual: number;
  pmMax: number;
  ataques: string;
  pericias: string;
  iniciativaAtual?: number;
  condicoes: string[];
};

export type ModeloAmeaca = Omit<Ameaca, "id" | "iniciativaAtual" | "pvAtual" | "pmAtual" | "condicoes"> & {
  pvPadrao: number;
  pmPadrao: number;
};

export type Jogador = {
  id: string;
  nome: string;
  iniciativa: number;
};

export type ItemTimeline = {
  id: string;
  nome: string;
  iniciativa: number;
  tipo: "AMEACA" | "JOGADOR";
};

export type ResultadoRolagem = {
  total: number;
  detalhes: string;
  expressao: string;
};