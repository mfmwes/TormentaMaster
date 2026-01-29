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
  tipo: string; // Ex: "Padrão", "Livre", "Passiva"
  teste: string; // Ex: "+39", "CD 26"
  dano: string;  // Ex: "4d10+28"
  descricao: string;
};

export type Ameaca = {
  id: string;
  nome: string;
  nd: string;
  tipo: string;           // Ex: "Construto Enorme"
  deslocamento: string;
  defesa: number;
  pvAtual: number;
  pvMax: number;
  pmAtual: number;
  pmMax: number;
  acoes: Acao[];          // <--- MUDANÇA PRINCIPAL: Lista estruturada
  pericias: string;
  atributos: Atributos;
  iniciativaAtual?: number;
  condicoes: string[];
  imagemUrl?: string;
  x?: number; // Posição X em % (0 a 100)
  y?: number; // Posição Y em % (0 a 100)
  tamanho?: number; // 1 = Médio, 2 = Grande...
  cor?: string; // Para diferenciar tokens
};

export type ModeloAmeaca = Omit<Ameaca, "id" | "iniciativaAtual" | "pvAtual" | "pmAtual" | "condicoes"> & {
  pvPadrao: number;
  pmPadrao: number;
};

export type Jogador = {
  id: string;
  nome: string;
  iniciativa: number;
  x?: number;
  y?: number;
  cor?: string;
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

export type LogEntry = {
  id: string;
  hora: string;
  origem: string; // Ex: "Goblin Arqueiro"
  rotulo: string; // Ex: "Ataque (Espada)" ou "Reflexos"
  resultado: string; // Ex: "22"
  detalhes: string; // Ex: "[18] + 4"
  critico: boolean;
};