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
  tipo: string; // Padrão, Movimento, Completa, Livre
  teste: string; // Ex: +10
  dano: string; // Ex: 1d8+5
  descricao: string;
};

export type Aprimoramento = {
  id: string;
  custo: string;     // Ex: "+1", "+2 PM"
  descricao: string; // O que o aprimoramento faz
  roll?: string;     // Ex: "+2d8" (Rolagem extra se houver)
};

export type Magia = {
  id: string;
  nome: string;
  pm: string;
  circulo: string;
  
  // Campos técnicos
  execucao: string;
  alcance: string;
  area: string;      
  alvo: string;      
  duracao: string;
  resistencia: string;
  
  efeito: string;        
  danoBase?: string;     
  
  aprimoramentos: Aprimoramento[]; 
};

// --- CORREÇÃO: ADICIONADO TIPO QUE FALTAVA ---
export type ResultadoRolagem = {
  total: number;
  detalhes: string;
};
// ---------------------------------------------

export type Ameaca = {
  id: string;
  nome: string;
  nd: string;
  tipo: string; // Monstro, Humanoide, etc.
  deslocamento: string;
  
  defesa: number;
  pvAtual: number;
  pvMax: number;
  pmAtual: number;
  pmMax: number;

  atributos: Atributos;
  pericias: string;
  condicoes: string[];
  acoes: Acao[];
  magias: Magia[];

  // Token
  imagemUrl?: string;
  imagemStorageId?: string | null;
  x?: number;
  y?: number;
  tamanho?: number;
  
  // Combate
  iniciativaAtual?: number;
};

export type Jogador = {
  id: string;
  nome: string;
  iniciativa: number;
  x?: number;
  y?: number;
  tamanho?: number;
  imagemUrl?: string;
  imagemStorageId?: string | null;
};

export type ItemTimeline = {
  id: string;
  nome: string;
  iniciativa: number;
  tipo: "AMEACA" | "JOGADOR";
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

export type ModeloAmeaca = Omit<Ameaca, "id" | "pvAtual" | "pmAtual" | "iniciativaAtual" | "condicoes" | "x" | "y"> & {
  pvPadrao: number;
  pmPadrao: number;
};