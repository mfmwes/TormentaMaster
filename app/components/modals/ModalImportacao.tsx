import { useState } from "react";
import { Ameaca, Atributos, Acao } from "../../types/game";

type ModalImportacaoProps = {
  fechar: () => void;
  confirmar: (ameaca: Partial<Ameaca>) => void;
};

export const ModalImportacao = ({ fechar, confirmar }: ModalImportacaoProps) => {
  const [texto, setTexto] = useState("");

  const processarTexto = () => {
    let limpo = texto.replace(/–/g, "-").replace(/—/g, "-").replace(/\r/g, "");

    /* --- CABEÇALHO --- */
    const nomeMatch = limpo.match(/^(.+?)\s+ND\s*(\S+)/i);
    const nome = nomeMatch ? nomeMatch[1].trim() : "Ameaça Importada";
    const nd = nomeMatch ? nomeMatch[2].trim() : "?";

    const linhas = limpo.split("\n").filter(l => l.trim().length > 0);
    let tipoCriatura = "Criatura";
    if (nomeMatch && linhas.length > 1 && !linhas[1].match(/^(Iniciativa|Defesa|Pontos)/i)) {
        tipoCriatura = linhas[1].trim();
    }

    /* --- STATS --- */
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
    const periciasT20 = ["Iniciativa", "Percepção", "Furtividade", "Reflexos", "Fortitude", "Vontade", "Luta", "Pontaria", "Misticismo"];
    periciasT20.forEach(pericia => {
      const regex = new RegExp(`${pericia}\\s*([+\\-]\\d+)`, "i");
      const match = limpo.match(regex);
      if (match) listaPericias.push(`${pericia} ${match[1]}`);
    });
    if (!listaPericias.some(p => p.startsWith("Iniciativa"))) listaPericias.unshift("Iniciativa +0");
    const periciasFinal = listaPericias.join(", ");

    /* --- ATRIBUTOS --- */
    const atributos: Atributos = { for: "0", des: "0", con: "0", int: "0", sab: "0", car: "0" };
    const linhaAttr = limpo.match(/For\s*([+\-\d]+|[-–]).*?Des\s*([+\-\d]+|[-–]).*?Con\s*([+\-\d]+|[-–]).*?Int\s*([+\-\d]+|[-–]).*?Sab\s*([+\-\d]+|[-–]).*?Car\s*([+\-\d]+|[-–])/i);
    if (linhaAttr) {
        atributos.for = linhaAttr[1]; atributos.des = linhaAttr[2]; atributos.con = linhaAttr[3];
        atributos.int = linhaAttr[4]; atributos.sab = linhaAttr[5]; atributos.car = linhaAttr[6];
    }

    /* --- PARSER DE AÇÕES (ATAQUES E HABILIDADES) --- */
    let inicioAcoes = limpo.search(/Deslocamento/i);
    if (inicioAcoes !== -1) {
        const resto = limpo.substring(inicioAcoes);
        const quebra = resto.indexOf("\n");
        inicioAcoes += (quebra !== -1 ? quebra : 0);
    } else { inicioAcoes = limpo.search(/Pontos de (Vida|Mana)/i); }

    let fimAcoes = limpo.search(/For\s*[+\-–]?\d+/i);
    if (fimAcoes === -1) fimAcoes = limpo.search(/Tesouro/i);

    const acoesParsed: Acao[] = [];
    
    if (inicioAcoes !== -1 && fimAcoes !== -1 && fimAcoes > inicioAcoes) {
        const blocoTexto = limpo.substring(inicioAcoes, fimAcoes).trim();
        // Quebra por linhas, assumindo que cada habilidade começa em uma nova linha ou é separada por ponto final
        const linhasAcao = blocoTexto.split(/\n+/);
        
        linhasAcao.forEach(linha => {
            if (linha.trim().length < 3) return;

            // Tenta extrair padrões
            // Nome: Geralmente as primeiras palavras, as vezes em MAIÚSCULO (simulado aqui pegando o começo)
            // Tipo: (Padrão), (Livre), (Completa), (Movimento)
            // Teste: +XX ou CD XX
            // Dano: XdX+X
            
            const tipoMatch = linha.match(/\((Padrão|Livre|Movimento|Reação|Completa|Passiva)\)/i);
            const tipo = tipoMatch ? tipoMatch[1] : ""; // Se não achar, deixa vazio (pode ser passiva)

            const testeMatch = linha.match(/([+\-]\d+|CD\s*\d+)/); // Pega "+39" ou "CD 26"
            const teste = testeMatch ? testeMatch[1] : "";

            const danoMatch = linha.match(/\b(\d+d\d+[+\-]?\d*)\b/i); // Pega "4d10+28"
            const dano = danoMatch ? danoMatch[1] : "";

            // O nome é a primeira parte antes do tipo ou antes de um texto longo
            // Simplificação: Pega as 3 primeiras palavras ou até o primeiro parêntese
            const splitParen = linha.split("(")[0];
            const nomeCurto = splitParen.length < 30 ? splitParen.trim() : splitParen.split(" ").slice(0, 3).join(" ");
            
            // Descrição é o resto
            let descricao = linha.replace(nomeCurto, "").trim();
            if (descricao.startsWith("(") && tipo) descricao = descricao.replace(`(${tipo})`, "").trim();

            acoesParsed.push({
                id: crypto.randomUUID(),
                nome: nomeCurto || "Ação",
                tipo: tipo || "Padrão",
                teste: teste,
                dano: dano,
                descricao: linha // Guarda a linha original completa na descrição para contexto, ou a limpa
            });
        });
    }

    confirmar({
      nome, nd, tipo: tipoCriatura, deslocamento, defesa, pvMax: pv, pvAtual: pv, pmMax: pm, pmAtual: pm,
      acoes: acoesParsed, // <--- Aqui vai a lista estruturada
      pericias: periciasFinal, atributos, condicoes: [], imagemUrl: ""
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={fechar}>
      <div className="bg-gray-800 border border-gray-600 rounded-xl w-full max-w-2xl shadow-2xl flex flex-col h-[85vh]" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 border-b border-gray-700 bg-gray-900 rounded-t-xl flex justify-between">
          <h3 className="text-white font-bold text-lg">Importar Ficha T20</h3>
          <button onClick={fechar} className="text-gray-400 hover:text-white">✕</button>
        </div>
        <div className="p-4 flex-grow flex flex-col gap-2 overflow-hidden">
            <textarea className="w-full h-full bg-gray-950 border border-gray-700 rounded p-4 text-sm text-gray-300 focus:border-blue-500 focus:outline-none font-mono resize-none"
                placeholder={`Cole a ficha aqui (Ex: Esmagador Coletivo ND 15...)`}
                value={texto} onChange={(e) => setTexto(e.target.value)} />
        </div>
        <div className="p-4 border-t border-gray-700 bg-gray-900/30 rounded-b-xl flex justify-end gap-3">
           <button onClick={fechar} className="px-4 py-2 text-gray-400 hover:text-white">Cancelar</button>
           <button onClick={processarTexto} disabled={!texto} className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded transition">Processar</button>
        </div>
      </div>
    </div>
  );
};