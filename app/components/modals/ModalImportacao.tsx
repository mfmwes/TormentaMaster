import { useState } from "react";
import { Ameaca } from "../../types/game";


type ModalImportacaoProps = {
  fechar: () => void;
  confirmar: (ameaca: Partial<Ameaca>) => void;
};

export const ModalImportacao = ({ fechar, confirmar }: ModalImportacaoProps) => {
  const [texto, setTexto] = useState("");

  const processarTexto = () => {
    // 1. Limpeza básica
    let limpo = texto
      .replace(/–/g, "-")
      .replace(/—/g, "-") // Travessão comum em PDFs de T20
      .replace(/\r/g, "");

    /* --- EXTRAÇÃO DE DADOS --- */

    // 1. Nome e ND (Primeira linha: "Esmagador Coletivo ND 15")
    const nomeMatch = limpo.match(/^(.+?)\s+ND\s*(\S+)/i);
    const nome = nomeMatch ? nomeMatch[1].trim() : "Ameaça Importada";
    const nd = nomeMatch ? nomeMatch[2].trim() : "?";

    // 2. Tipo e Tamanho (Segunda linha: "Construto Enorme")
    // Pegamos a linha logo após o nome/ND, ou a segunda linha do texto
    const linhas = limpo.split("\n").filter(l => l.trim().length > 0);
    let tipo = "Criatura";
    // Se a primeira linha tem ND, a segunda provavelmente é o tipo
    if (nomeMatch && linhas.length > 1) {
        // Verifica se a segunda linha não é Iniciativa ou Defesa
        if (!linhas[1].match(/^(Iniciativa|Defesa|Pontos)/i)) {
            tipo = linhas[1].trim();
        }
    }

    // 3. Stats Básicos
    const defesaMatch = limpo.match(/Defesa\s+(\d+)/i);
    const defesa = defesaMatch ? parseInt(defesaMatch[1]) : 10;

    const pvMatch = limpo.match(/(?:Pontos de Vida|PV)\s+(\d+)/i);
    const pv = pvMatch ? parseInt(pvMatch[1]) : 10;

    const pmMatch = limpo.match(/(?:Pontos de Mana|PM)\s+(\d+)/i);
    const pm = pmMatch ? parseInt(pmMatch[1]) : 0;
    
    const deslocMatch = limpo.match(/Deslocamento\s+(.+?)(\n|$)/i);
    const deslocamento = deslocMatch ? deslocMatch[1].trim() : "9m";

    /* --- PERÍCIAS --- */
    const listaPericias: string[] = [];
    const periciasT20 = [
      "Iniciativa", "Percepção", "Furtividade", "Reflexos", "Fortitude", "Vontade",
      "Acrobacia", "Adestramento", "Atletismo", "Atuação", "Cavalgar", "Conhecimento",
      "Cura", "Diplomacia", "Enganação", "Intimidação", "Intuição", "Investigação",
      "Jogatina", "Ladinagem", "Luta", "Misticismo", "Nobreza", "Ofício", "Pilotagem",
      "Pontaria", "Religião", "Sobrevivência"
    ];

    periciasT20.forEach(pericia => {
      // Regex ajustado para pegar "+12" ou "CD 40" se aparecer perto
      const regex = new RegExp(`${pericia}\\s*([+\\-]\\d+)`, "i");
      const match = limpo.match(regex);
      if (match) listaPericias.push(`${pericia} ${match[1]}`);
    });

    if (!listaPericias.some(p => p.startsWith("Iniciativa"))) {
      listaPericias.unshift("Iniciativa +0");
    }
    const periciasFinal = listaPericias.join(", ");

    /* --- ATRIBUTOS --- */
    // Padrão: For 14, Des -1, Con 15, Int -, Sab 0, Car -
    // O regex pega o valor numérico OU o traço (-)
    const atributos: Atributos = { for: "0", des: "0", con: "0", int: "0", sab: "0", car: "0" };
    
    // Procura a linha que começa com For
    const linhaAtributosMatch = limpo.match(/For\s*([+\-\d]+|[-–]).*?Des\s*([+\-\d]+|[-–]).*?Con\s*([+\-\d]+|[-–]).*?Int\s*([+\-\d]+|[-–]).*?Sab\s*([+\-\d]+|[-–]).*?Car\s*([+\-\d]+|[-–])/i);

    if (linhaAtributosMatch) {
        atributos.for = linhaAtributosMatch[1];
        atributos.des = linhaAtributosMatch[2];
        atributos.con = linhaAtributosMatch[3];
        atributos.int = linhaAtributosMatch[4];
        atributos.sab = linhaAtributosMatch[5];
        atributos.car = linhaAtributosMatch[6];
    }

    /* --- HABILIDADES E ATAQUES --- */
    // Pega tudo entre Deslocamento e Atributos (ou Tesouro)
    let ataquesHabilidades = "";
    
    let inicioAcoes = limpo.search(/Deslocamento/i);
    if (inicioAcoes !== -1) {
        const resto = limpo.substring(inicioAcoes);
        const quebraLinha = resto.indexOf("\n");
        inicioAcoes = inicioAcoes + (quebraLinha !== -1 ? quebraLinha : 0);
    } else {
        inicioAcoes = limpo.search(/Pontos de (Vida|Mana)/i);
    }

    // Tenta achar o fim: ou na linha de atributos ou na linha de Tesouro
    let fimAcoes = limpo.search(/For\s*[+\-–]?\d+/i);
    if (fimAcoes === -1) fimAcoes = limpo.search(/Tesouro/i);

    if (inicioAcoes !== -1 && fimAcoes !== -1 && fimAcoes > inicioAcoes) {
        ataquesHabilidades = limpo.substring(inicioAcoes, fimAcoes).trim();
    } else {
        ataquesHabilidades = "Não foi possível extrair ataques automaticamente.";
    }

    const novaAmeaca: Partial<Ameaca> = {
      nome, nd, tipo, deslocamento,
      defesa, pvMax: pv, pvAtual: pv, pmMax: pm, pmAtual: pm,
      ataques: ataquesHabilidades,
      pericias: periciasFinal,
      atributos,
      condicoes: [], imagemUrl: ""
    };

    confirmar(novaAmeaca);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={fechar}>
      <div className="bg-gray-800 border border-gray-600 rounded-xl w-full max-w-2xl shadow-2xl flex flex-col h-[85vh]" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 border-b border-gray-700 bg-gray-900 rounded-t-xl flex justify-between items-center">
          <div>
            <h3 className="text-white font-bold text-lg">Importar Ficha T20</h3>
            <p className="text-xs text-gray-400">Copie do PDF e cole. O sistema detecta Atributos, ND e Tipo.</p>
          </div>
          <button onClick={fechar} className="text-gray-400 hover:text-white text-xl font-bold">✕</button>
        </div>
        
        <div className="p-4 flex-grow flex flex-col gap-2 overflow-hidden">
            <textarea 
                className="w-full h-full bg-gray-950 border border-gray-700 rounded p-4 text-sm text-gray-300 focus:border-blue-500 focus:outline-none font-mono leading-relaxed resize-none"
                placeholder={`Cole aqui, exemplo:\n\nEsmagador Coletivo ND 15\nConstruto Enorme\nIniciativa +12...\n...\nFor 14, Des -1, Con 15, Int -, Sab 0, Car -`}
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
        </div>

        <div className="p-4 border-t border-gray-700 bg-gray-900/30 rounded-b-xl flex justify-end gap-3">
           <button onClick={fechar} className="px-4 py-2 text-gray-400 hover:text-white text-sm font-bold">Cancelar</button>
           <button onClick={processarTexto} disabled={!texto} className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition">
            Processar Ficha
           </button>
        </div>
      </div>
    </div>
  );
};