export type Atributos = {
  for: string;
  des: string;
  con: string;
  int: string;
  sab: string;
  car: string;
};

export type Ameaca = {
  id: string;
  nome: string;
  nd: string;             // NOVO: ND 15
  tipo: string;           // NOVO: Construto Enorme
  deslocamento: string;   // NOVO: 9m (6q)
  defesa: number;
  pvAtual: number;
  pvMax: number;
  pmAtual: number;
  pmMax: number;
  ataques: string;        // Ataques e Habilidades juntos
  pericias: string;
  atributos: Atributos;   // NOVO: Objeto com os 6 atributos
  iniciativaAtual?: number;
  condicoes: string[];
  imagemUrl?: string;
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