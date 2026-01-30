export type Atributos = {
  for: string;
  des: string;
  con: string;
  int: string;
  sab: string;
  car: string;
};

export type Acao = {
  id: string;
  nome: string;
  tipo: string;
  teste: string;
  dano: string;
  descricao: string;
};

export type Condicao = string;

export type Ameaca = {
  id: string;
  nome: string;
  nd: string;
  tipo: string;
  deslocamento: string;
  defesa: number;
  pvAtual: number;
  pvMax: number;
  pmAtual: number;
  pmMax: number;
  acoes: Acao[];
  pericias: string;
  atributos: Atributos;
  condicoes: Condicao[];
  iniciativaAtual?: number;
  imagemUrl?: string;
  imagemStorageId?: string | null;
  x?: number;
  y?: number;
  tamanho?: number; // <--- NOVO CAMPO
};

export type Jogador = {
  id: string;
  nome: string;
  iniciativa: number;
  imagemUrl?: string;
  imagemStorageId?: string | null;
  x?: number;
  y?: number;
  tamanho?: number; // <--- NOVO CAMPO
};

export type ModeloAmeaca = Ameaca & {
  pvPadrao: number;
  pmPadrao: number;
};

export type LogEntry = {
  id: string;
  hora: string;
  origem: string;
  rotulo: string;
  resultado: string;
  detalhes: string;
  critico: boolean;
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
  expressao?: string;
};