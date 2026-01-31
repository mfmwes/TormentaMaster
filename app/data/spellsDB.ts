export const SPELLS_DB = [
  {
    "name": "Aben\u00e7oar Alimentos",
    "execution": "padr\u00e3o",
    "range": "curto",
    "duration": "cena",
    "description": "Voc\u00ea purifica e aben\u00e7oa uma por\u00e7\u00e3o de comida ou dose de bebida. Isso torna um alimento sujo, estragado ou envenenado pr\u00f3prio para consumo. Al\u00e9m disso, se for consumido at\u00e9 o final da dura\u00e7\u00e3o, o alimento oferece 5 PV tempor\u00e1rios ou 1 PM tempor\u00e1rio (al\u00e9m de quaisquer b\u00f4nus que j\u00e1 oferecesse). B\u00f4nus de alimenta\u00e7\u00e3o duram um dia e cada personagem s\u00f3 pode receber um b\u00f4nus de alimenta\u00e7\u00e3o por dia",
    "enhancements": [
      {
        "cost": "Truque",
        "description": "o alimento \u00e9 purificado (n\u00e3o causa nenhum efeito nocivo se estava estragado ou envenenado), mas n\u00e3o oferece b\u00f4nus ao ser consumido."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o n\u00famero de alvos em +1."
      },
      {
        "cost": "+1 PM",
        "description": "muda a dura\u00e7\u00e3o para permanente, o alvo para 1 frasco com \u00e1gua e adiciona componente material (p\u00f3 de prata no valor de T$ 5). Em vez do normal, cria um frasco de \u00e1gua benta."
      }
    ]
  },
  {
    "name": "Acalmar Animal",
    "execution": "a\u00e7\u00e3o padr\u00e3o",
    "range": "curto",
    "target": "1 animal",
    "duration": "cena",
    "description": "O animal fica prestativo em rela\u00e7\u00e3o a voc\u00ea. Ele n\u00e3o fica sob seu controle, mas percebe suas palavras e a\u00e7\u00f5es da maneira mais favor\u00e1vel poss\u00edvel. Voc\u00ea recebe +10 nos testes de Adestramento e Diplomacia que fizer contra o animal. Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resist\u00eancia. Se voc\u00ea ou seus aliados tomarem qualquer a\u00e7\u00e3o hostil contra o alvo, a magia \u00e9 dissipada e ele retorna \u00e0 atitude que tinha antes (ou piorada, de acordo com o mestre). Se tratar bem o alvo, a atitude pode permanecer mesmo ap\u00f3s o t\u00e9rmino da magia.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 monstro ou esp\u00edrito com Intelig\u00eancia 1 ou 2."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o n\u00famero de alvos em +1."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para 1 monstro ou esp\u00edrito. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "A\u00e7oite Flamejante",
    "execution": "a\u00e7\u00e3o padr\u00e3o",
    "range": "Pessoal",
    "target": "Voc\u00ea",
    "duration": "Sustentada",
    "description": "Uma l\u00edngua de fogo puro, semelhante a um chicote, surge em sua m\u00e3o. Voc\u00ea pode usar uma a\u00e7\u00e3o padr\u00e3o para a\u00e7oitar uma criatura em alcance curto. Quando faz isso, voc\u00ea pode escolher causar 2d6 pontos de dano de fogo ou, se o alvo for M\u00e9dio ou menor, agarr\u00e1-lo. Passar no teste de resist\u00eancia reduz o dano \u00e0 metade ou evita o agarramento, conforme apropriado. Uma criatura agarrada sofre o dano do chicote automaticamente no in\u00edcio de cada um de seus turnos, e pode gastar uma a\u00e7\u00e3o padr\u00e3o para fazer um teste de Atletismo (CD igual a da magia). Se passar, se solta.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 monstro ou esp\u00edrito com Intelig\u00eancia 1 ou 2."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o n\u00famero de alvos em +1."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para 1 monstro ou esp\u00edrito. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Adaga Mental",
    "execution": "padr\u00e3o",
    "range": "curto",
    "target": "1 criatura",
    "duration": "instant\u00e2nea",
    "resistence": "Vontade parcial",
    "description": "Voc\u00ea manifesta e dispara uma adaga imaterial contra a mente do alvo, que sofre 2d6 pontos de dano ps\u00edquico e fica atordoado por uma rodada. Se passar no teste de resist\u00eancia, sofre apenas metade do dano e evita a condi\u00e7\u00e3o. Uma criatura s\u00f3 pode ficar atordoada por esta magia uma vez por cena.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "voc\u00ea lan\u00e7a a magia sem gesticular ou pronunciar palavras (o que permite lan\u00e7ar esta magia de armadura) e a adaga se torna invis\u00edvel. Se o alvo falhar no teste de resist\u00eancia, n\u00e3o percebe que voc\u00ea lan\u00e7ou uma magia contra ele."
      },
      {
        "cost": "+2 PM",
        "description": "muda a dura\u00e7\u00e3o para um dia. Al\u00e9m do normal, voc\u00ea \u201cfinca\u201d a adaga na mente do alvo. Enquanto a magia durar, voc\u00ea sabe a dire\u00e7\u00e3o e localiza\u00e7\u00e3o do alvo, desde que ele esteja no mesmo mundo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d6."
      }
    ]
  },
  {
    "name": "Alarme",
    "range": "curto",
    "area": "esfera de 9m de raio",
    "duration": "1 dia",
    "description": "Voc\u00ea cria uma barreira protetora invis\u00edvel que detecta qualquer criatura que tocar ou entrar na \u00e1rea protegida. Ao lan\u00e7ar a magia, voc\u00ea pode escolher quais criaturas podem entrar na \u00e1rea sem ativar seus efeitos. ''Alarme'' pode emitir um aviso telep\u00e1tico ou sonoro, decidido quando a magia \u00e9 lan\u00e7ada. Um aviso telep\u00e1tico alerta apenas voc\u00ea, inclusive acordando-o se estiver dormindo, mas apenas se estiver a at\u00e9 1km da \u00e1rea protegida. Um aviso sonoro alerta todas as criaturas em alcance longo.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para pessoal. A \u00e1rea \u00e9 emanada a partir de voc\u00ea."
      },
      {
        "cost": "+5 PM",
        "description": "al\u00e9m do normal, voc\u00ea tamb\u00e9m percebe qualquer efeito de adivinha\u00e7\u00e3o que seja usado dentro da \u00e1rea ou atravesse a \u00e1rea. Voc\u00ea pode fazer um teste oposto de Misticismo contra quem usou o efeito; se passar, tem um vislumbre de seu rosto e uma ideia aproximada de sua localiza\u00e7\u00e3o (\u201ctr\u00eas dias de viagem ao norte\u201d, por exemplo)."
      },
      {
        "cost": "+5 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia ou at\u00e9 ser descarregada e a resist\u00eancia para Vontade anula. Quando um intruso entra na \u00e1rea, voc\u00ea pode descarregar a magia como uma rea\u00e7\u00e3o. Se o intruso falhar na resist\u00eancia, ficar\u00e1 paralisado por 1d4 rodadas. Al\u00e9m disso, pelas pr\u00f3ximas 24 horas voc\u00ea e as criaturas escolhidas ganham +10 em testes de Sobreviv\u00eancia para rastrear o intruso."
      }
    ]
  },
  {
    "name": "Amedrontar",
    "execution": "padr\u00e3o",
    "range": "curto",
    "target": "1 animal ou humanoide",
    "duration": "cena",
    "resistence": "Vontade parcial",
    "description": "O alvo \u00e9 envolvido por energias sombrias e assustadoras. Se falhar na resist\u00eancia, fica apavorado por 1 rodada, depois abalado. Se passar, fica abalado por 1d4 rodadas.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "muda o alvo para 1 criatura."
      }
    ]
  },
  {
    "name": "\u00c1rea Escorregadia",
    "execution": "padr\u00e3o",
    "range": "curto",
    "duration": "cena",
    "resistence": "Reflexos",
    "description": "Esta magia recobre uma superf\u00edcie com uma subst\u00e2ncia gordurosa e escorregadia. Criaturas na \u00e1rea devem passar na resist\u00eancia para n\u00e3o cair. Nas rodadas seguintes, criaturas que tentem movimentar-se pela \u00e1rea devem fazer testes de Acrobacia para equil\u00edbrio (CD 10).\n\n\n\n''\u00c1rea Escorregadia'' pode tornar um item escorregadio. Uma criatura segurando um objeto afetado deve passar na resist\u00eancia para n\u00e3o deixar o item cair cada vez que us\u00e1-lo.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "aumenta a \u00e1rea em +1 quadrado de 1,5m."
      },
      {
        "cost": "+2 PM",
        "description": "muda a CD dos testes de Acrobacia para 15."
      },
      {
        "cost": "+5 PM",
        "description": "muda a CD dos testes de Acrobacia para 20."
      }
    ]
  },
  {
    "name": "Arma Espiritual",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "target": "voc\u00ea",
    "description": "Voc\u00ea invoca a arma preferida de sua divindade, que surge flutuando a seu lado. Uma vez por rodada, quando voc\u00ea sofre um ataque corpo a corpo, pode usar uma rea\u00e7\u00e3o para que a arma cause automaticamente 2d6 pontos de dano do tipo da arma \u2014 por exemplo, uma espada longa causa dano de corte \u2014 no oponente que fez o ataque. Esta magia se dissipa se voc\u00ea morrer.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, a arma tamb\u00e9m protege voc\u00ea, oferecendo +1 na Defesa."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o b\u00f4nus na Defesa em +1."
      },
      {
        "cost": "+2 PM",
        "description": "muda o tipo do dano para ess\u00eancia. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+5 PM",
        "description": "invoca duas armas, permitindo que voc\u00ea contra-ataque (ou ataque, se usar o aprimoramento acima) duas vezes por rodada. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Arma M\u00e1gica",
    "execution": "padr\u00e3o",
    "range": "toque",
    "target": "1 arma",
    "description": "A arma \u00e9 considerada m\u00e1gica e fornece +1 nos testes de ataque e rolagens de dano (isso conta como um b\u00f4nus de encanto). Caso voc\u00ea esteja empunhando a arma, pode usar seu atributo-chave em vez do atributo original nos testes de ataque (n\u00e3o cumulativo com efeitos que somam este atributo).",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o b\u00f4nus em +1 (b\u00f4nus m\u00e1ximo limitado pelo c\u00edrculo m\u00e1ximo de magia que voc\u00ea pode lan\u00e7ar)."
      },
      {
        "cost": "+2 PM",
        "description": "a arma causa +1d6 de dano de \u00e1cido, eletricidade, fogo ou frio, escolhido quando a magia \u00e9 lan\u00e7ada. Este aprimoramento s\u00f3 pode ser usado uma vez."
      },
      {
        "cost": "+3 PM",
        "description": "muda o b\u00f4nus de dano do aprimoramento acima para +2d6."
      }
    ]
  },
  {
    "name": "Armadura Arcana",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "target": "voc\u00ea",
    "duration": "cena",
    "description": "Esta magia cria uma pel\u00edcula protetora invis\u00edvel, mas tang\u00edvel, fornecendo +5 na Defesa. Esse b\u00f4nus \u00e9 cumulativo com outras magias, mas n\u00e3o com b\u00f4nus fornecido por armaduras.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "muda a execu\u00e7\u00e3o para rea\u00e7\u00e3o. Em vez do normal, voc\u00ea cria um escudo m\u00e1gico que fornece +5 na Defesa contra o pr\u00f3ximo ataque que sofrer (cumulativo com o b\u00f4nus fornecido pelo efeito b\u00e1sico desta magia e armaduras)."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o b\u00f4nus na Defesa em +1."
      },
      {
        "cost": "+2 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia."
      }
    ]
  },
  {
    "name": "Armamento da Natureza",
    "execution": "padr\u00e3o",
    "range": "toque",
    "target": "1 arma",
    "description": "Voc\u00ea fortalece uma arma mundana primitiva (sem custo em T$, como bord\u00e3o, clava, funda ou tacape), uma arma natural ou um ataque desarmado. O dano da arma aumenta em um passo e ela \u00e9 considerada m\u00e1gica. Ao lan\u00e7ar a, voc\u00ea pode mudar o tipo de dano da arma (escolhendo entre corte, impacto ou perfura\u00e7\u00e3o).",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "fornece +1 nos testes de ataque com a arma."
      },
      {
        "cost": "+2 PM",
        "description": "muda a execu\u00e7\u00e3o para a\u00e7\u00e3o de movimento."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o b\u00f4nus nos testes de ataque em +1."
      },
      {
        "cost": "+5 PM",
        "description": "aumenta o dano da arma em mais um passo."
      }
    ]
  },
  {
    "name": "Aviso",
    "execution": "movimento",
    "range": "longo",
    "target": "1 criatura",
    "duration": "instant\u00e2nea",
    "description": "Envia um aviso telep\u00e1tico para uma criatura, mesmo que n\u00e3o possa v\u00ea-la nem tenha linha de efeito. Escolha um:\n\n\n\n''Alerta:'' o alvo recebe +5 em seu pr\u00f3ximo teste de Iniciativa e de Percep\u00e7\u00e3o dentro da cena.\n\n\n\n''Mensagem:'' o alvo recebe uma mensagem sua de at\u00e9 25 palavras. Voc\u00eas devem ter um idioma em comum para o alvo poder entend\u00ea-lo.\n\n\n\n''Localiza\u00e7\u00e3o:'' o alvo sabe onde voc\u00ea est\u00e1 naquele momento. Se voc\u00ea mudar de posi\u00e7\u00e3o, ele n\u00e3o saber\u00e1.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o alcance em um fator de 10 (90m para 900m, 900m para 9km, e assim por diante)."
      },
      {
        "cost": "+1 PM",
        "description": "se escolher mensagem, o alvo pode enviar uma resposta de at\u00e9 25 palavras para voc\u00ea at\u00e9 o fim de seu pr\u00f3ximo turno."
      }
    ]
  },
  {
    "name": "B\u00ean\u00e7\u00e3o",
    "execution": "padr\u00e3o",
    "range": "curto",
    "target": "criaturas escolhidas",
    "duration": "cena",
    "description": "Aben\u00e7oa os alvos, que recebem +1 em testes de ataque e rolagens de dano. ''B\u00ean\u00e7\u00e3o'' anula ''Perdi\u00e7\u00e3o''.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 cad\u00e1ver e a dura\u00e7\u00e3o para 1 semana. O cad\u00e1ver n\u00e3o se decomp\u00f5e nem pode ser transformado em morto-vivo pela dura\u00e7\u00e3o da magia."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta os b\u00f4nus em +1, limitado pelo c\u00edrculo m\u00e1ximo de magia que voc\u00ea pode lan\u00e7ar."
      }
    ]
  },
  {
    "name": "Caminhos da Natureza",
    "execution": "padr\u00e3o",
    "range": "curto",
    "area": "criaturas escolhidas",
    "duration": "1 dia",
    "description": "Voc\u00ea invoca esp\u00edritos da natureza, pedindo que eles abram seu caminho. As criaturas afetadas recebem deslocamento +3m e ignoram penalidades por terreno dif\u00edcil se estiverem em terrenos naturais.",
    "enhancements": [
      {
        "cost": "Truque",
        "description": "muda o alcance para pessoal e o alvo para voc\u00ea. Em vez do normal, voc\u00ea sabe onde fica o norte, e recebe +5 em testes de Sobreviv\u00eancia para orientar-se."
      },
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, a CD para rastrear os alvos em terreno natural aumenta em +10."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o b\u00f4nus de deslocamento em +3m."
      }
    ]
  },
  {
    "name": "Comando",
    "execution": "padr\u00e3o",
    "target": "1 humanoide",
    "resistence": "Vontade anula",
    "description": "Voc\u00ea d\u00e1 uma ordem irresist\u00edvel, que o alvo deve ser capaz de ouvir (mas n\u00e3o precisa entender). Se falhar na resist\u00eancia, ele deve obedecer ao comando em seu pr\u00f3prio turno da melhor maneira poss\u00edvel. Escolha um dos efeitos.\n\n\n\n''Fuja'': o alvo gasta seu turno se afastando de voc\u00ea (usando todas as suas a\u00e7\u00f5es).\n\n\n\n''Largue'': o alvo solta quaisquer itens que esteja segurando e n\u00e3o pode peg\u00e1-los novamente at\u00e9 o in\u00edcio de seu pr\u00f3ximo turno. Como esta \u00e9 uma a\u00e7\u00e3o livre, ele ainda pode executar outras a\u00e7\u00f5es (exceto pegar aquilo que largou).\n\n\n\n''Pare'': o alvo fica pasmo (apenas uma vez por cena).\n\n\n\n''Senta'': com uma a\u00e7\u00e3o livre, o alvo senta no ch\u00e3o (se estava pendurado ou voando, desce at\u00e9 o ch\u00e3o). Ele pode fazer outras a\u00e7\u00f5es, mas n\u00e3o se levantar at\u00e9 o in\u00edcio de seu pr\u00f3ximo turno.\n\n\n\n''Venha'': o alvo gasta seu turno se aproximando de voc\u00ea (usando todas as suas a\u00e7\u00f5es).",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 criatura."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a quantidade de alvos em +1."
      }
    ]
  },
  {
    "name": "Compreens\u00e3o",
    "execution": "padr\u00e3o",
    "duration": "cena",
    "resistence": "Vontade anula",
    "description": "Essa magia lhe confere compreens\u00e3o sobrenatural. Voc\u00ea pode tocar um texto e entender as palavras mesmo que n\u00e3o conhe\u00e7a o idioma. Se tocar numa criatura inteligente, pode se comunicar com ela mesmo que n\u00e3o tenham um idioma em comum. Se tocar uma criatura n\u00e3o inteligente, como um animal, pode perceber seus sentimentos.\n\n\n\nVoc\u00ea tamb\u00e9m pode gastar uma a\u00e7\u00e3o de movimento para ouvir os pensamentos de uma criatura tocada (voc\u00ea \u201couve\u201d o que o alvo est\u00e1 pensando), mas um alvo involunt\u00e1rio tem direito a um teste de Vontade para proteger seus pensamentos e evitar este efeito.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas. Voc\u00ea pode entender todas as criaturas afetadas, mas s\u00f3 pode ouvir os pensamentos de uma por vez."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para pessoal e o alvo para voc\u00ea. Em vez do normal, voc\u00ea pode falar, entender e escrever qualquer idioma. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Concentra\u00e7\u00e3o de Combate",
    "execution": "livre",
    "target": "voc\u00ea",
    "duration": "1 rodada",
    "description": "Voc\u00ea amplia sua percep\u00e7\u00e3o, antecipando movimentos dos inimigos e achando brechas em sua defesa. Quando faz um ataque, voc\u00ea rola dois dados e usa o melhor resultado.",
    "enhancements": [
      {
        "cost": "+5 PM",
        "description": "al\u00e9m do normal, ao atacar voc\u00ea, um inimigo deve rolar dois dados e usar o pior resultado. Requer 3\u00b0 c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "muda a execu\u00e7\u00e3o para padr\u00e3o, o alcance para curto, o alvo para criaturas escolhidas e a dura\u00e7\u00e3o para cena. Requer 4\u00b0 c\u00edrculo."
      },
      {
        "cost": "+14 PM",
        "description": "muda a execu\u00e7\u00e3o para padr\u00e3o e a dura\u00e7\u00e3o para 1 dia. Al\u00e9m do normal, voc\u00ea recebe um sexto sentido que o avisa de qualquer perigo ou amea\u00e7a. Voc\u00ea fica imune \u00e0s condi\u00e7\u00f5es surpreendido e desprevenido e recebe +10 em Defesa e Reflexos. Requer 5\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Conjurar Monstro",
    "execution": "completa",
    "range": "curto",
    "effect": "1 criatura conjurada",
    "duration": "sustentada",
    "description": "Esta magia conjura um monstro Pequeno que ataca seus inimigos. Voc\u00ea escolhe a apar\u00eancia do monstro e o tipo de dano que ele pode causar, entre corte, impacto e perfura\u00e7\u00e3o. No entanto, ele n\u00e3o \u00e9 uma criatura real, e sim um construto feito de energia. Se for destru\u00eddo, ou quando a magia acaba, desaparece com um brilho, sem deixar nada para tr\u00e1s. Voc\u00ea s\u00f3 pode ter um monstro conjurado por esta magia por vez.\n\n\n\nO monstro surge em um ponto escolhido por voc\u00ea dentro do alcance e pode agir no come\u00e7o do seu pr\u00f3ximo turno, sempre na sua Iniciativa. O monstro tem deslocamento 9m e pode fazer uma a\u00e7\u00e3o de movimento por rodada. Voc\u00ea pode usar uma a\u00e7\u00e3o padr\u00e3o para dar uma das seguintes ordens a ele.\n\n\n\n''Mover'': o monstro se movimenta o dobro do deslocamento nessa rodada.\n\n\n\n''Atacar'': o monstro ataca um alvo em alcance corpo a corpo. O ataque acerta automaticamente e causa 2d4+2 pontos de dano.\n\n\n\n''Lan\u00e7ar Magia'': o monstro pode servir como ponto de origem para uma magia lan\u00e7ada por voc\u00ea com execu\u00e7\u00e3o de uma a\u00e7\u00e3o padr\u00e3o ou menor. Ele pode descarregar um ''Toque Chocante'' em um inimigo distante, ou mesmo \u201ccuspir\u201d uma ''Bola de Fogo''! Voc\u00ea gasta PM normalmente para lan\u00e7ar a magia.\n\n\n\nOutros usos criativos para monstros conjurados ficam a crit\u00e9rio do mestre. O monstro n\u00e3o age sem receber uma ordem.\n\n\n\nPara efeitos de jogo, o monstro conjurado tem For 14, Des 17 e todos os outros atributos nulos. Ele tem 20 pontos de vida, n\u00e3o tem um valor de Defesa (ataques feitos contra ele acertam automaticamente) e usa o seu b\u00f4nus para teste de Reflexos. Ele \u00e9 imune a efeitos que pedem um teste de Fortitude ou Vontade.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "o monstro ganha deslocamento de escalada ou nata\u00e7\u00e3o igual ao seu deslocamento terrestre."
      },
      {
        "cost": "+1 PM",
        "description": "muda o tipo de dano do ataque do monstro para \u00e1cido, fogo, frio ou eletricidade."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o tamanho do monstro para M\u00e9dio. Ele tem For 18, Des 16, 45 PV, deslocamento 12m, e seu ataque causa 2d6+4 pontos de dano."
      },
      {
        "cost": "+2 PM",
        "description": "o monstro ganha resist\u00eancia 5 contra dois tipos de dano (por exemplo, corte e frio)."
      },
      {
        "cost": "+4 PM",
        "description": "o monstro ganha uma nova ordem: ''Arma de Sopro.'' O monstro causa o dobro de seu dano de ataque em um cone de 6m a partir de si (Reflexos reduz \u00e0 metade)."
      },
      {
        "cost": "+5 PM",
        "description": "aumenta o tamanho do monstro para Grande. Ele tem For 24, Des 14, 75 PV, deslocamento 12m, e seu ataque causa 3d6+7 pontos de dano com 3m de alcance. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "o monstro ganha deslocamento de voo igual ao dobro do deslocamento."
      },
      {
        "cost": "+9 PM",
        "description": "o monstro ganha imunidade contra dois tipos de dano."
      },
      {
        "cost": "+9 PM",
        "description": "aumenta o tamanho do monstro para Enorme. Ele tem For 32, Des 12, 110 PV, deslocamento 15m, e seu ataque causa 4d6+11 pontos de dano com 4,5m de alcance. Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Consagrar",
    "execution": "padr\u00e3o",
    "range": "longo",
    "area": "esfera com 9m de raio",
    "duration": "1 dia",
    "resistence": "Reflexos anula",
    "description": "Esta magia s\u00f3 pode ser lan\u00e7ada em uma \u00e1rea com vegeta\u00e7\u00e3o. As plantas se enroscam nas criaturas da \u00e1rea. Aquelas que falharem na resist\u00eancia ficam enredadas. Uma v\u00edtima pode se libertar com uma a\u00e7\u00e3o padr\u00e3o e um teste de Acrobacia ou Atletismo. Al\u00e9m disso, a \u00e1rea \u00e9 considerada terreno dif\u00edcil. No in\u00edcio de seus turnos, a vegeta\u00e7\u00e3o tenta enredar novamente qualquer criatura na \u00e1rea, exigindo um novo teste de Reflexos.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, mortos-vivos na \u00e1rea sofrem \u20132 em testes e Defesa."
      },
      {
        "cost": "Truque",
        "description": "muda a \u00e1rea para alvo de 1 planta e a resist\u00eancia para nenhuma. Em vez do normal, voc\u00ea pode fazer a planta se mover como se fosse animada. Ela n\u00e3o pode causar dano ou atrapalhar a concentra\u00e7\u00e3o de um conjurador."
      },
      {
        "cost": "+1 PM",
        "description": "muda a dura\u00e7\u00e3o para instant\u00e2nea. Em vez do normal, as plantas na \u00e1rea diminuem, como se tivessem sido podadas. Terreno dif\u00edcil muda para terreno normal e\u00a0n\u00e3o oferece camuflagem. Esse efeito anula o uso normal de ''Controlar Plantas''."
      },
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, criaturas que falhem na resist\u00eancia tamb\u00e9m ficam im\u00f3veis."
      }
    ]
  },
  {
    "name": "Criar Elementos",
    "execution": "padr\u00e3o",
    "range": "curto",
    "effect": "elemento escolhido",
    "duration": "instant\u00e2nea",
    "description": "Voc\u00ea cria uma pequena por\u00e7\u00e3o de um elemento, a sua escolha. Os elementos criados s\u00e3o reais, n\u00e3o m\u00e1gicos. Elementos f\u00edsicos devem surgir em uma superf\u00edcie. Em vez de um cubo, pode-se criar objetos simples (sem partes m\u00f3veis) feitos de gelo, terra ou pedra.\n\n\n\n''\u00c1gua'': enche um recipiente de tamanho Min\u00fasculo (como um odre) com \u00e1gua pot\u00e1vel ou cria um cubo de gelo de tamanho Min\u00fasculo.\n\n\n\n''Ar'': cria um vento fraco em um quadrado de 1,5m. Isso purifica a \u00e1rea de qualquer g\u00e1s ou fuma\u00e7a, ou remove n\u00e9voa por uma rodada.\n\n\n\n''Fogo'': cria uma chama que ilumina como uma tocha. Voc\u00ea pode segur\u00e1-la na palma de sua m\u00e3o sem se queimar, ou faz\u00ea-la surgir em um quadrado de 1,5m. Se uma criatura ou objeto estiver no quadrado, sofre 1d6 pontos de dano de fogo; se falhar num teste de Reflexos, pega fogo.\n\n\n\n''Terra'': cria um cubo de tamanho Min\u00fasculo feito de terra, argila ou pedra.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "aumenta a quantidade do elemento em um passo (uma categoria de tamanho para \u00e1gua ou terra, +1 quadrado de 1,5m para ar e fogo)."
      },
      {
        "cost": "+1 PM",
        "description": "muda o efeito para alvo 1 criatura ou objeto e a resist\u00eancia para Reflexos reduz \u00e0 metade. Se escolher \u00e1gua ou terra, voc\u00ea arremessa o cubo ou objeto criado no alvo, causando 2d4 pontos de dano de impacto. Para cada categoria de tamanho acima de Min\u00fasculo, o dano aumenta em um passo. O cubo se desfaz em seguida."
      },
      {
        "cost": "+2 PM",
        "description": "se escolheu fogo, aumenta o dano inicial de cada chama em +1d6."
      }
    ]
  },
  {
    "name": "Criar Ilus\u00e3o",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "effect": "ilus\u00e3o que se estende a at\u00e9 4 cubos de 1",
    "duration": "cena",
    "resistence": "Vontade desacredita",
    "description": "Esta magia cria uma ilus\u00e3o visual (uma criatura, uma parede...) ou sonora (um grito de socorro, um uivo assustador...). A magia cria apenas imagens ou sons simples, com volume equivalente ao tom de voz normal para cada cubo de 1,5m no efeito. N\u00e3o \u00e9 poss\u00edvel criar cheiros, texturas ou temperaturas, nem sons complexos, como uma m\u00fasica ou di\u00e1logo. Criaturas e objetos atravessam uma ilus\u00e3o sem sofrer dano, mas a magia pode, por exemplo, esconder uma armadilha ou inimigo. A magia \u00e9 dissipada se voc\u00ea sair do alcance.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "tamb\u00e9m pode criar ilus\u00f5es de imagem e sons combinados."
      },
      {
        "cost": "+1 PM",
        "description": "tamb\u00e9m pode criar sons complexos com volume m\u00e1ximo equivalente ao que cinco pessoas podem produzir para cada cubo de 1,5m no efeito. Com uma a\u00e7\u00e3o livre, voc\u00ea pode alterar o volume do som ou faz\u00ea-lo se aproximar ou se afastar dentro do alcance."
      },
      {
        "cost": "+2 PM",
        "description": "tamb\u00e9m pode criar sensa\u00e7\u00f5es t\u00e1teis, como texturas; objetos ainda atravessam a ilus\u00e3o, mas criaturas n\u00e3o conseguem atravess\u00e1-la sem passar em um teste de Vontade. A ilus\u00e3o continua sem causar ou sofrer dano. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para longo e o efeito para esfera de 30m de raio. Em vez do normal, voc\u00ea cria um som muito alto, equivalente a uma multid\u00e3o. Criaturas na \u00e1rea lan\u00e7am magias como se estivessem em uma condi\u00e7\u00e3o ruim e a CD de testes de Percep\u00e7\u00e3o para ouvir aumenta em +10. Requer 2\u00ba c\u00edrculo"
      },
      {
        "cost": "+5 PM",
        "description": "muda a dura\u00e7\u00e3o para sustentada. Al\u00e9m do normal, voc\u00ea pode gastar uma a\u00e7\u00e3o livre para modificar livremente a ilus\u00e3o (mas n\u00e3o pode acrescentar novos aprimoramentos ap\u00f3s lan\u00e7\u00e1-la). Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Curar Ferimentos",
    "execution": "padr\u00e3o",
    "range": "toque",
    "target": "1 criatura",
    "duration": "instant\u00e2nea",
    "description": "Voc\u00ea canaliza luz que recupera 2d8+2 pontos de vida na criatura tocada. ''Curar Ferimentos'' anula ''Infligir Ferimentos.''",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "aumenta a cura em +1d8+1."
      },
      {
        "cost": "+2 PM",
        "description": "tamb\u00e9m remove uma condi\u00e7\u00e3o de fadiga do alvo."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para curto."
      }
    ]
  },
  {
    "name": "Despeda\u00e7ar",
    "execution": "padr\u00e3o",
    "range": "curto",
    "target": "1 criatura ou objeto mundano Pequeno",
    "duration": "instant\u00e2nea",
    "resistence": "Fortitude parcial ou Reflexos anula",
    "description": "Esta magia emite um som alto e agudo. O alvo sofre 1d8+2 pontos de dano de impacto (ou o dobro disso e ignora RD se for um construto ou objeto mundano) e fica atordoado por uma rodada (apenas uma vez por cena). Um teste de Fortitude reduz o dano \u00e0 metade e evita o atordoamento.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "muda o alvo para objeto mundano M\u00e9dio. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para objeto mundano Grande. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "muda o alvo para objeto mundano Enorme. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+14 PM",
        "description": "muda o alvo para objeto mundano Colossal. Requer 5\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Detectar Amea\u00e7as",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "duration": "cena",
    "description": "Voc\u00ea recebe uma intui\u00e7\u00e3o agu\u00e7ada sobre perigos ao seu redor. Quando uma criatura hostil ou armadilha entra na \u00e1rea do efeito, voc\u00ea faz um teste de Percep\u00e7\u00e3o (CD determinada pelo mestre de acordo com a situa\u00e7\u00e3o). Se passar, sabe a origem (criatura ou armadilha), dire\u00e7\u00e3o e dist\u00e2ncia do perigo. Se falhar, sabe apenas que o perigo existe.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, voc\u00ea n\u00e3o fica surpreso desprevenido contra perigos detectados com sucesso e recebe +5 em testes de resist\u00eancia contra armadilhas. Requer 2\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Detona\u00e7\u00e3o Congelante",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "duration": "instant\u00e2nea",
    "resistence": "Fortitude Parcial",
    "description": "Voc\u00ea emite uma onda de frio extremo que cobre a \u00e1rea de gelo. Criaturas na \u00e1rea sofrem 2d6 pontos de dano de frio e ficam enredadas e im\u00f3veis por 1d4 rodadas. Passar no teste de resist\u00eancia reduz o dano pela metade e deixa a criatura enredada por uma rodada. Uma criatura voadora que fica im\u00f3vel come\u00e7a a cair no in\u00edcio do seu turno.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "muda a dura\u00e7\u00e3o para sustentada. Ao inv\u00e9s do normal, voc\u00ea emite uma aura de frio constante em alcance curto. Uma criatura que entre na \u00e1rea ou inicie seu turno dentro dela sofre 2d6 pontos de dano de frio e fica enredada e im\u00f3vel por uma rodada. Passar no teste de resist\u00eancia reduz o dano pela metade, evita a condi\u00e7\u00e3o im\u00f3vel e faz com que a criatura n\u00e3o possa mais ficar im\u00f3vel por esta magia nesta cena. Requer 2\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Disfarce Ilus\u00f3rio",
    "duration": "cena",
    "resistence": "Vontade desacredita",
    "description": "Voc\u00ea muda a apar\u00eancia do alvo, incluindo seu equipamento. Isso inclui altura, peso, tom de pele, cor de cabelo, timbre de voz etc. O alvo recebe +10 em testes de Engana\u00e7\u00e3o para disfarce. O alvo n\u00e3o recebe novas habilidades (voc\u00ea pode ficar parecido com outra ra\u00e7a, mas n\u00e3o ganhar\u00e1 as habilidades dela), nem modifica o equipamento (uma espada longa disfar\u00e7ada de bord\u00e3o continua funcionando e causando dano como uma espada).",
    "enhancements": [
      {
        "cost": "Truque",
        "description": "muda o alcance para toque, o alvo para 1 criatura e a dura\u00e7\u00e3o para 1 semana. Em vez do normal, voc\u00ea faz uma pequena altera\u00e7\u00e3o na apar\u00eancia do alvo, como deixar o nariz vermelho ou fazer brotar um ger\u00e2nio no alto da cabe\u00e7a. A mudan\u00e7a \u00e9 inofensiva, mas persistente \u2014 se a flor for arrancada, por exemplo, outra nascer\u00e1 no local."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alcance para curto e o alvo para 1 objeto. Voc\u00ea pode, por exemplo, transformar peda\u00e7os de ferro em moedas de ouro. Voc\u00ea recebe +10 em testes de Engana\u00e7\u00e3o para falsifica\u00e7\u00e3o."
      },
      {
        "cost": "+2 PM",
        "description": "a ilus\u00e3o tamb\u00e9m inclui odores e sensa\u00e7\u00f5es. Isso muda o b\u00f4nus em testes de Engana\u00e7\u00e3o para disfarce para +20."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas. Cada criatura pode ter uma apar\u00eancia diferente. Criaturas involunt\u00e1rias podem anular o efeito com um teste de Vontade. Requer 2\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Disparo G\u00e9lido",
    "execution": "padr\u00e3o",
    "range": "M\u00e9dio",
    "duration": "instant\u00e2nea",
    "resistence": "Fortitude reduz \u00e0 metade",
    "description": "Voc\u00ea dispara um dardo de neve e gelo contra o alvo, que causa 2d8+2 pontos de dano de frio.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "muda a resist\u00eancia para Fortitude parcial. Se passar, a criatura reduz o dano \u00e0 metade; se falhar, fica lenta at\u00e9 o final da cena."
      }
    ]
  },
  {
    "name": "Enfeiti\u00e7ar",
    "execution": "a\u00e7\u00e3o padr\u00e3o",
    "range": "curto",
    "duration": "cena",
    "resistence": "Vontade anula",
    "description": "Esta magia torna o alvo prestativo (veja Diplomacia na p\u00e1gina [[Per\u00edcias T20|Per\u00edcias]] ). Ele n\u00e3o fica sob seu controle, mas percebe suas palavras e a\u00e7\u00f5es da maneira mais favor\u00e1vel poss\u00edvel. Voc\u00ea recebe um b\u00f4nus de +10 em testes de Diplomacia com a v\u00edtima. Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resist\u00eancia. Se voc\u00ea ou seus aliados tomarem qualquer a\u00e7\u00e3o hostil contra o alvo, a magia \u00e9 anulada e o alvo retorna \u00e0 atitude que tinha antes (ou piorada, de acordo com o mestre).",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "em vez do normal, voc\u00ea sugere uma a\u00e7\u00e3o para o alvo e ele obedece. A sugest\u00e3o deve ser feita de modo que pare\u00e7a aceit\u00e1vel, a crit\u00e9rio do mestre. Pedir ao alvo que pule em um precip\u00edcio, por exemplo, anula a magia. J\u00e1 sugerir a um guarda que descanse um pouco, de modo que voc\u00ea e seus aliados passem por ele, \u00e9 aceit\u00e1vel. Quando o alvo executa a a\u00e7\u00e3o, a magia termina. Voc\u00ea pode determinar uma condi\u00e7\u00e3o espec\u00edfica para a sugest\u00e3o: por exemplo, que um rico mercador doe suas moedas para o primeiro mendigo que encontrar."
      },
      {
        "cost": "+5 PM",
        "description": "afeta todos os alvos dentro do alcance."
      }
    ]
  },
  {
    "name": "Escudo da F\u00e9",
    "range": "curto",
    "target": "1 criatura",
    "duration": "1 turno",
    "description": "Um escudo m\u00edstico se manifesta momentaneamente para bloquear um golpe. O alvo recebe +2 na Defesa.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "muda a execu\u00e7\u00e3o para a\u00e7\u00e3o padr\u00e3o, o alcance para toque e a dura\u00e7\u00e3o para cena."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o b\u00f4nus na Defesa em +1."
      },
      {
        "cost": "+2 PM",
        "description": "muda a execu\u00e7\u00e3o para a\u00e7\u00e3o padr\u00e3o, o alcance para toque e a dura\u00e7\u00e3o para cena. A magia cria uma conex\u00e3o m\u00edstica entre voc\u00ea e o alvo. Al\u00e9m do efeito normal, o alvo sofre apenas metade do dano por ataques e efeitos; a outra metade do dano \u00e9 transferida a voc\u00ea. Se a qualquer momento o alvo sair de alcance curto de voc\u00ea, a magia \u00e9 dissipada. Requer 2\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Escurid\u00e3o",
    "execution": "padr\u00e3o",
    "range": "curto",
    "target": "1 objeto",
    "duration": "cena",
    "description": "O alvo emana sombras em uma \u00e1rea com 6m de raio. Criaturas dentro da \u00e1rea recebem camuflagem por escurid\u00e3o. As sombras n\u00e3o podem ser iluminadas por nenhuma fonte de luz natural. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a escurid\u00e3o, que voltar\u00e1 a funcionar caso o objeto seja revelado. Se lan\u00e7ar a magia num objeto de uma criatura involunt\u00e1ria, ela tem direito a um teste de Vontade para anul\u00e1-la. ''Escurid\u00e3o'' anula ''Luz''.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "aumenta a \u00e1rea da escurid\u00e3o em +1,5m de raio."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para 1 criatura e a resist\u00eancia para Fortitude parcial. Voc\u00ea lan\u00e7a a magia nos olhos do alvo, que fica cego pela cena. Se passar na resist\u00eancia, fica cego por uma rodada. Requer 2\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Explos\u00e3o de Chamas",
    "range": "6m",
    "area": "cone",
    "duration": "instant\u00e2nea",
    "execution": "padr\u00e3o",
    "resistence": "Reflexos reduz \u00e0 metade",
    "description": "Um leque de chamas irrompe de suas m\u00e3os, causando 2d6 pontos de dano de fogo \u00e0s criaturas na \u00e1rea.",
    "enhancements": [
      {
        "cost": "Truque",
        "description": "muda o alcance para curto, a \u00e1rea para alvo de 1 objeto e a resist\u00eancia para Reflexos anula. Voc\u00ea gera uma pequena explos\u00e3o que n\u00e3o causa dano mas pode acender uma vela, tocha ou fogueira. Tamb\u00e9m pode fazer um objeto inflam\u00e1vel com RD 0 (como uma corda ou pergaminho) ficar em chamas. Uma criatura em posse de um objeto pode evitar esse efeito se passar no teste de resist\u00eancia."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o dano em +1d6."
      },
      {
        "cost": "+2 PM",
        "description": "Al\u00e9m do normal, o solo continua borbulhando em \u00e1cido venenoso at\u00e9 o final da cena, tornando-se terreno dif\u00edcil. Qualquer criatura que entre na \u00e1rea ou comece o turno dentro dela sofre 2d6 pontos de dano de \u00e1cido (sem direito a teste de resist\u00eancia)."
      }
    ]
  },
  {
    "name": "Hipnotismo",
    "range": "curto",
    "target": "criaturas escolhidas de ND 2 ou menor",
    "duration": "1d4 rodadas",
    "resistence": "Vontade anula",
    "description": "Suas palavras e movimentos ritmados deixam as criaturas fascinadas (veja Condi\u00e7\u00f5es, na p\u00e1gina [[Regras para Combate T20|Regras para Combate]] ). Esta magia s\u00f3 afeta criaturas que possam perceber voc\u00ea. Se usar esta magia em combate, os alvos recebem +5 em seus testes de resist\u00eancia.",
    "enhancements": [
      {
        "cost": "Truque",
        "description": "muda o alvo para 1 criatura e a dura\u00e7\u00e3o para 1 rodada. Em vez de fascinado, o alvo fica pasmo. Uma criatura s\u00f3 pode ser afetada por este truque uma vez por cena."
      },
      {
        "cost": "+1 PM",
        "description": "em vez do normal, se passarem na resist\u00eancia os alvos n\u00e3o saber\u00e3o que foram alvos de uma magia."
      },
      {
        "cost": "+2 PM",
        "description": "muda a dura\u00e7\u00e3o para cena."
      },
      {
        "cost": "+2 PM",
        "description": "afeta alvos de ND 5 ou menor. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+5 PM",
        "description": "afeta alvos de ND 10 ou menor. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "afeta alvos de ND 15 ou menor. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+14 PM",
        "description": "afeta alvos de qualquer ND. Requer 5\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Imagem Espelhada",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "target": "voc\u00ea",
    "duration": "cena",
    "description": "Tr\u00eas c\u00f3pias ilus\u00f3rias suas aparecem. As duplicatas ficam ao seu redor e imitam suas a\u00e7\u00f5es, tornando dif\u00edcil para um inimigo saber quem atacar. Voc\u00ea recebe +6 na Defesa. Cada vez que um ataque contra voc\u00ea erra, uma das imagens desaparece e o b\u00f4nus na Defesa diminui em 2. Um oponente deve ver as c\u00f3pias para ser confundido. Se voc\u00ea estiver invis\u00edvel, ou o atacante fechar os olhos, voc\u00ea n\u00e3o recebe o b\u00f4nus (mas o atacante ainda sofre penalidades normais por n\u00e3o enxergar).",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o n\u00famero de c\u00f3pias em +1 (e o b\u00f4nus na Defesa em +2)."
      },
      {
        "cost": "+5 PM",
        "description": "al\u00e9m do normal, toda vez que uma c\u00f3pia \u00e9 destru\u00edda, emite um clar\u00e3o de luz. A criatura que destruiu a c\u00f3pia fica ofuscada por uma rodada. Requer 2\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Infligir Ferimentos",
    "range": "toque",
    "target": "1 criatura",
    "resistence": "Fortitude reduz \u00e0 metade",
    "description": "Voc\u00ea canaliza energia negativa contra um alvo, causando 2d8+2 pontos de dano de trevas (ou curando 2d8+2 PV, se for um morto-vivo). ''Infligir Ferimentos'' anula ''Curar Ferimentos''.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "como parte da execu\u00e7\u00e3o da magia, voc\u00ea pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e o efeito da magia."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, se falhar na resist\u00eancia, o alvo fica fraco pela cena."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em 1d8+1."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas."
      }
    ]
  },
  {
    "name": "Leque Crom\u00e1tico",
    "execution": "padr\u00e3o",
    "range": "4",
    "area": "cone",
    "duration": "instant\u00e2nea",
    "resistence": "Vontade parcial",
    "description": "Um cone de luzes brilhantes surge a partir das suas m\u00e3os, deixando as criaturas na \u00e1rea atordoadas por 1 rodada e ofuscadas pela cena. Caso passem na resist\u00eancia, n\u00e3o ficam atordoadas. Esta magia afeta apenas criaturas de ND 2 ou menor e n\u00e3o afeta criaturas cegas.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "afeta alvos de ND 5 ou menor. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+5 PM",
        "description": "afeta alvos de ND 10 ou menor. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "afeta alvos de ND 15 ou menor. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+14 PM",
        "description": "afeta alvos de qualquer ND. Requer 5\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Luz",
    "execution": "padr\u00e3o",
    "range": "curto",
    "target": "1 objeto",
    "resistence": "Vontade anula",
    "description": "O alvo emite luz (mas n\u00e3o produz calor) em uma \u00e1rea com 6m de raio. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a luz, que voltar\u00e1 a funcionar caso o objeto seja revelado. Se lan\u00e7ar a magia num objeto de uma criatura involunt\u00e1ria, ela tem direito a um teste de Vontade para anul\u00e1-la. ''Luz'' anula ''Escurid\u00e3o''.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "aumenta a \u00e1rea iluminada em +3m de raio."
      },
      {
        "cost": "+2 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia."
      },
      {
        "cost": "+2 PM",
        "description": "muda a dura\u00e7\u00e3o para permanente e adiciona componente material (p\u00f3 de rubi no valor de T$ 50). Requer 2\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "N\u00e9voa",
    "execution": "padr\u00e3o",
    "range": "curto",
    "effect": "nuvem com 6m de raio e 6m de altura",
    "duration": "cena",
    "description": "Uma n\u00e9voa espessa eleva-se de um ponto a sua escolha, obscurecendo toda a vis\u00e3o \u2014 criaturas a at\u00e9 1,5m t\u00eam camuflagem e criaturas a partir de 3m t\u00eam camuflagem total. Um vento forte dispersa a n\u00e9voa em 4 rodadas e um vendaval a dispersa em 1 rodada. Esta magia n\u00e3o funciona sob a \u00e1gua.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "a magia tamb\u00e9m funciona sob a \u00e1gua, criando uma nuvem de tinta."
      },
      {
        "cost": "+2 PM",
        "description": "voc\u00ea pode escolher criaturas no alcance ao lan\u00e7ar a magia; elas enxergam atrav\u00e9s do efeito. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, a nuvem tem um cheiro horr\u00edvel. No in\u00edcio de seus turnos, qualquer criatura dentro dela, ou qualquer criatura com faro em alcance curto da nuvem, deve fazer um teste de Fortitude. Se falhar, fica enjoada por uma rodada."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, a nuvem tem um tom esverdeado e se torna c\u00e1ustica. No in\u00edcio de seus turnos, criaturas dentro dela sofrem 2d4 pontos de dano de \u00e1cido."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o dano de \u00e1cido em +2d4."
      },
      {
        "cost": "+5 PM",
        "description": "al\u00e9m do normal, a nuvem fica espessa, quase s\u00f3lida. Qualquer criatura dentro dela tem seu deslocamento reduzido para 3m (independentemente de seu deslocamento normal) e sofre \u20132 em testes de ataque e rolagens de dano."
      }
    ]
  },
  {
    "name": "Orienta\u00e7\u00e3o",
    "execution": "padr\u00e3o",
    "range": "curto",
    "target": "1 criatura",
    "duration": "1 rodada",
    "description": "Em seu pr\u00f3ximo teste de per\u00edcia, o alvo pode rolar dois dados e ficar com o melhor resultado.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "muda a dura\u00e7\u00e3o para cena. Em vez do normal, escolha um atributo. Sempre que o alvo fizer um teste de per\u00edcia baseado no atributo escolhido, pode rolar dois dados e ficar com o melhor resultado. N\u00e3o se aplica a testes de ataque ou resist\u00eancia. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para criaturas escolhidas. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Perdi\u00e7\u00e3o",
    "execution": "padr\u00e3o",
    "range": "curto",
    "area": "criaturas escolhidas",
    "duration": "1 dia",
    "target": "criaturas escolhidas de ND 2 ou menor",
    "resistence": "Vontade anula",
    "effect": "1 criatura conjurada",
    "description": "Suas palavras e movimentos ritmados deixam as criaturas fascinadas (veja Condi\u00e7\u00f5es, na p\u00e1gina [[Regras para Combate T20|Regras para Combate]] ). Esta magia s\u00f3 afeta criaturas que possam perceber voc\u00ea. Se usar esta magia em combate, os alvos recebem +5 em seus testes de resist\u00eancia.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 cad\u00e1ver e a dura\u00e7\u00e3o para 1 semana. O cad\u00e1ver n\u00e3o se decomp\u00f5e nem pode ser transformado em morto-vivo pela dura\u00e7\u00e3o da magia."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta os b\u00f4nus em +1, limitado pelo c\u00edrculo m\u00e1ximo de magia que voc\u00ea pode lan\u00e7ar."
      },
      {
        "cost": "Truque",
        "description": "muda o alcance para pessoal e o alvo para voc\u00ea. Em vez do normal, voc\u00ea sabe onde fica o norte, e recebe +5 em testes de Sobreviv\u00eancia para orientar-se."
      },
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, a CD para rastrear os alvos em terreno natural aumenta em +10."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o b\u00f4nus de deslocamento em +3m."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 criatura."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a quantidade de alvos em +1."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas. Voc\u00ea pode entender todas as criaturas afetadas, mas s\u00f3 pode ouvir os pensamentos de uma por vez."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para pessoal e o alvo para voc\u00ea. Em vez do normal, voc\u00ea pode falar, entender e escrever qualquer idioma. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+5 PM",
        "description": "al\u00e9m do normal, ao atacar voc\u00ea, um inimigo deve rolar dois dados e usar o pior resultado. Requer 3\u00b0 c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "muda a execu\u00e7\u00e3o para padr\u00e3o, o alcance para curto, o alvo para criaturas escolhidas e a dura\u00e7\u00e3o para cena. Requer 4\u00b0 c\u00edrculo."
      },
      {
        "cost": "+14 PM",
        "description": "muda a execu\u00e7\u00e3o para padr\u00e3o e a dura\u00e7\u00e3o para 1 dia. Al\u00e9m do normal, voc\u00ea recebe um sexto sentido que o avisa de qualquer perigo ou amea\u00e7a. Voc\u00ea fica imune \u00e0s condi\u00e7\u00f5es surpreendido e desprevenido e recebe +10 em Defesa e Reflexos. Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+1 PM",
        "description": "o monstro ganha deslocamento de escalada ou nata\u00e7\u00e3o igual ao seu deslocamento terrestre."
      },
      {
        "cost": "+1 PM",
        "description": "muda o tipo de dano do ataque do monstro para \u00e1cido, fogo, frio ou eletricidade."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o tamanho do monstro para M\u00e9dio. Ele tem For 18, Des 16, 45 PV, deslocamento 12m, e seu ataque causa 2d6+4 pontos de dano."
      },
      {
        "cost": "+2 PM",
        "description": "o monstro ganha resist\u00eancia 5 contra dois tipos de dano (por exemplo, corte e frio)."
      },
      {
        "cost": "+4 PM",
        "description": "o monstro ganha uma nova ordem: ''Arma de Sopro.'' O monstro causa o dobro de seu dano de ataque em um cone de 6m a partir de si (Reflexos reduz \u00e0 metade)."
      },
      {
        "cost": "+5 PM",
        "description": "aumenta o tamanho do monstro para Grande. Ele tem For 24, Des 14, 75 PV, deslocamento 12m, e seu ataque causa 3d6+7 pontos de dano com 3m de alcance. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "o monstro ganha deslocamento de voo igual ao dobro do deslocamento."
      },
      {
        "cost": "+9 PM",
        "description": "o monstro ganha imunidade contra dois tipos de dano."
      },
      {
        "cost": "+9 PM",
        "description": "aumenta o tamanho do monstro para Enorme. Ele tem For 32, Des 12, 110 PV, deslocamento 15m, e seu ataque causa 4d6+11 pontos de dano com 4,5m de alcance. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, mortos-vivos na \u00e1rea sofrem \u20132 em testes e Defesa."
      },
      {
        "cost": "Truque",
        "description": "muda a \u00e1rea para alvo de 1 planta e a resist\u00eancia para nenhuma. Em vez do normal, voc\u00ea pode fazer a planta se mover como se fosse animada. Ela n\u00e3o pode causar dano ou atrapalhar a concentra\u00e7\u00e3o de um conjurador."
      },
      {
        "cost": "+1 PM",
        "description": "muda a dura\u00e7\u00e3o para instant\u00e2nea. Em vez do normal, as plantas na \u00e1rea diminuem, como se tivessem sido podadas. Terreno dif\u00edcil muda para terreno normal e\u00a0n\u00e3o oferece camuflagem. Esse efeito anula o uso normal de ''Controlar Plantas''."
      },
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, criaturas que falhem na resist\u00eancia tamb\u00e9m ficam im\u00f3veis."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta a quantidade do elemento em um passo (uma categoria de tamanho para \u00e1gua ou terra, +1 quadrado de 1,5m para ar e fogo)."
      },
      {
        "cost": "+1 PM",
        "description": "muda o efeito para alvo 1 criatura ou objeto e a resist\u00eancia para Reflexos reduz \u00e0 metade. Se escolher \u00e1gua ou terra, voc\u00ea arremessa o cubo ou objeto criado no alvo, causando 2d4 pontos de dano de impacto. Para cada categoria de tamanho acima de Min\u00fasculo, o dano aumenta em um passo. O cubo se desfaz em seguida."
      },
      {
        "cost": "+2 PM",
        "description": "se escolheu fogo, aumenta o dano inicial de cada chama em +1d6."
      },
      {
        "cost": "+1 PM",
        "description": "tamb\u00e9m pode criar ilus\u00f5es de imagem e sons combinados."
      },
      {
        "cost": "+1 PM",
        "description": "tamb\u00e9m pode criar sons complexos com volume m\u00e1ximo equivalente ao que cinco pessoas podem produzir para cada cubo de 1,5m no efeito. Com uma a\u00e7\u00e3o livre, voc\u00ea pode alterar o volume do som ou faz\u00ea-lo se aproximar ou se afastar dentro do alcance."
      },
      {
        "cost": "+2 PM",
        "description": "tamb\u00e9m pode criar sensa\u00e7\u00f5es t\u00e1teis, como texturas; objetos ainda atravessam a ilus\u00e3o, mas criaturas n\u00e3o conseguem atravess\u00e1-la sem passar em um teste de Vontade. A ilus\u00e3o continua sem causar ou sofrer dano. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para longo e o efeito para esfera de 30m de raio. Em vez do normal, voc\u00ea cria um som muito alto, equivalente a uma multid\u00e3o. Criaturas na \u00e1rea lan\u00e7am magias como se estivessem em uma condi\u00e7\u00e3o ruim e a CD de testes de Percep\u00e7\u00e3o para ouvir aumenta em +10. Requer 2\u00ba c\u00edrculo"
      },
      {
        "cost": "+5 PM",
        "description": "muda a dura\u00e7\u00e3o para sustentada. Al\u00e9m do normal, voc\u00ea pode gastar uma a\u00e7\u00e3o livre para modificar livremente a ilus\u00e3o (mas n\u00e3o pode acrescentar novos aprimoramentos ap\u00f3s lan\u00e7\u00e1-la). Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta a cura em +1d8+1."
      },
      {
        "cost": "+2 PM",
        "description": "tamb\u00e9m remove uma condi\u00e7\u00e3o de fadiga do alvo."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para curto."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para objeto mundano M\u00e9dio. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para objeto mundano Grande. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "muda o alvo para objeto mundano Enorme. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+14 PM",
        "description": "muda o alvo para objeto mundano Colossal. Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, voc\u00ea n\u00e3o fica surpreso desprevenido contra perigos detectados com sucesso e recebe +5 em testes de resist\u00eancia contra armadilhas. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "muda a dura\u00e7\u00e3o para sustentada. Ao inv\u00e9s do normal, voc\u00ea emite uma aura de frio constante em alcance curto. Uma criatura que entre na \u00e1rea ou inicie seu turno dentro dela sofre 2d6 pontos de dano de frio e fica enredada e im\u00f3vel por uma rodada. Passar no teste de resist\u00eancia reduz o dano pela metade, evita a condi\u00e7\u00e3o im\u00f3vel e faz com que a criatura n\u00e3o possa mais ficar im\u00f3vel por esta magia nesta cena. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "Truque",
        "description": "muda o alcance para toque, o alvo para 1 criatura e a dura\u00e7\u00e3o para 1 semana. Em vez do normal, voc\u00ea faz uma pequena altera\u00e7\u00e3o na apar\u00eancia do alvo, como deixar o nariz vermelho ou fazer brotar um ger\u00e2nio no alto da cabe\u00e7a. A mudan\u00e7a \u00e9 inofensiva, mas persistente \u2014 se a flor for arrancada, por exemplo, outra nascer\u00e1 no local."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alcance para curto e o alvo para 1 objeto. Voc\u00ea pode, por exemplo, transformar peda\u00e7os de ferro em moedas de ouro. Voc\u00ea recebe +10 em testes de Engana\u00e7\u00e3o para falsifica\u00e7\u00e3o."
      },
      {
        "cost": "+2 PM",
        "description": "a ilus\u00e3o tamb\u00e9m inclui odores e sensa\u00e7\u00f5es. Isso muda o b\u00f4nus em testes de Engana\u00e7\u00e3o para disfarce para +20."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas. Cada criatura pode ter uma apar\u00eancia diferente. Criaturas involunt\u00e1rias podem anular o efeito com um teste de Vontade. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+1 PM",
        "description": "muda a resist\u00eancia para Fortitude parcial. Se passar, a criatura reduz o dano \u00e0 metade; se falhar, fica lenta at\u00e9 o final da cena."
      },
      {
        "cost": "+2 PM",
        "description": "em vez do normal, voc\u00ea sugere uma a\u00e7\u00e3o para o alvo e ele obedece. A sugest\u00e3o deve ser feita de modo que pare\u00e7a aceit\u00e1vel, a crit\u00e9rio do mestre. Pedir ao alvo que pule em um precip\u00edcio, por exemplo, anula a magia. J\u00e1 sugerir a um guarda que descanse um pouco, de modo que voc\u00ea e seus aliados passem por ele, \u00e9 aceit\u00e1vel. Quando o alvo executa a a\u00e7\u00e3o, a magia termina. Voc\u00ea pode determinar uma condi\u00e7\u00e3o espec\u00edfica para a sugest\u00e3o: por exemplo, que um rico mercador doe suas moedas para o primeiro mendigo que encontrar."
      },
      {
        "cost": "+5 PM",
        "description": "afeta todos os alvos dentro do alcance."
      },
      {
        "cost": "+1 PM",
        "description": "muda a execu\u00e7\u00e3o para a\u00e7\u00e3o padr\u00e3o, o alcance para toque e a dura\u00e7\u00e3o para cena."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o b\u00f4nus na Defesa em +1."
      },
      {
        "cost": "+2 PM",
        "description": "muda a execu\u00e7\u00e3o para a\u00e7\u00e3o padr\u00e3o, o alcance para toque e a dura\u00e7\u00e3o para cena. A magia cria uma conex\u00e3o m\u00edstica entre voc\u00ea e o alvo. Al\u00e9m do efeito normal, o alvo sofre apenas metade do dano por ataques e efeitos; a outra metade do dano \u00e9 transferida a voc\u00ea. Se a qualquer momento o alvo sair de alcance curto de voc\u00ea, a magia \u00e9 dissipada. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta a \u00e1rea da escurid\u00e3o em +1,5m de raio."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para 1 criatura e a resist\u00eancia para Fortitude parcial. Voc\u00ea lan\u00e7a a magia nos olhos do alvo, que fica cego pela cena. Se passar na resist\u00eancia, fica cego por uma rodada. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "Truque",
        "description": "muda o alcance para curto, a \u00e1rea para alvo de 1 objeto e a resist\u00eancia para Reflexos anula. Voc\u00ea gera uma pequena explos\u00e3o que n\u00e3o causa dano mas pode acender uma vela, tocha ou fogueira. Tamb\u00e9m pode fazer um objeto inflam\u00e1vel com RD 0 (como uma corda ou pergaminho) ficar em chamas. Uma criatura em posse de um objeto pode evitar esse efeito se passar no teste de resist\u00eancia."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o dano em +1d6."
      },
      {
        "cost": "+2 PM",
        "description": "Al\u00e9m do normal, o solo continua borbulhando em \u00e1cido venenoso at\u00e9 o final da cena, tornando-se terreno dif\u00edcil. Qualquer criatura que entre na \u00e1rea ou comece o turno dentro dela sofre 2d6 pontos de dano de \u00e1cido (sem direito a teste de resist\u00eancia)."
      },
      {
        "cost": "Truque",
        "description": "muda o alvo para 1 criatura e a dura\u00e7\u00e3o para 1 rodada. Em vez de fascinado, o alvo fica pasmo. Uma criatura s\u00f3 pode ser afetada por este truque uma vez por cena."
      },
      {
        "cost": "+1 PM",
        "description": "em vez do normal, se passarem na resist\u00eancia os alvos n\u00e3o saber\u00e3o que foram alvos de uma magia."
      },
      {
        "cost": "+2 PM",
        "description": "muda a dura\u00e7\u00e3o para cena."
      },
      {
        "cost": "+2 PM",
        "description": "afeta alvos de ND 5 ou menor. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+5 PM",
        "description": "afeta alvos de ND 10 ou menor. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "afeta alvos de ND 15 ou menor. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+14 PM",
        "description": "afeta alvos de qualquer ND. Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o n\u00famero de c\u00f3pias em +1 (e o b\u00f4nus na Defesa em +2)."
      },
      {
        "cost": "+5 PM",
        "description": "al\u00e9m do normal, toda vez que uma c\u00f3pia \u00e9 destru\u00edda, emite um clar\u00e3o de luz. A criatura que destruiu a c\u00f3pia fica ofuscada por uma rodada. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "como parte da execu\u00e7\u00e3o da magia, voc\u00ea pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e o efeito da magia."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, se falhar na resist\u00eancia, o alvo fica fraco pela cena."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em 1d8+1."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas."
      },
      {
        "cost": "+2 PM",
        "description": "afeta alvos de ND 5 ou menor. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+5 PM",
        "description": "afeta alvos de ND 10 ou menor. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "afeta alvos de ND 15 ou menor. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+14 PM",
        "description": "afeta alvos de qualquer ND. Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta a \u00e1rea iluminada em +3m de raio."
      },
      {
        "cost": "+2 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia."
      },
      {
        "cost": "+2 PM",
        "description": "muda a dura\u00e7\u00e3o para permanente e adiciona componente material (p\u00f3 de rubi no valor de T$ 50). Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+1 PM",
        "description": "a magia tamb\u00e9m funciona sob a \u00e1gua, criando uma nuvem de tinta."
      },
      {
        "cost": "+2 PM",
        "description": "voc\u00ea pode escolher criaturas no alcance ao lan\u00e7ar a magia; elas enxergam atrav\u00e9s do efeito. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, a nuvem tem um cheiro horr\u00edvel. No in\u00edcio de seus turnos, qualquer criatura dentro dela, ou qualquer criatura com faro em alcance curto da nuvem, deve fazer um teste de Fortitude. Se falhar, fica enjoada por uma rodada."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, a nuvem tem um tom esverdeado e se torna c\u00e1ustica. No in\u00edcio de seus turnos, criaturas dentro dela sofrem 2d4 pontos de dano de \u00e1cido."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o dano de \u00e1cido em +2d4."
      },
      {
        "cost": "+5 PM",
        "description": "al\u00e9m do normal, a nuvem fica espessa, quase s\u00f3lida. Qualquer criatura dentro dela tem seu deslocamento reduzido para 3m (independentemente de seu deslocamento normal) e sofre \u20132 em testes de ataque e rolagens de dano."
      },
      {
        "cost": "+2 PM",
        "description": "muda a dura\u00e7\u00e3o para cena. Em vez do normal, escolha um atributo. Sempre que o alvo fizer um teste de per\u00edcia baseado no atributo escolhido, pode rolar dois dados e ficar com o melhor resultado. N\u00e3o se aplica a testes de ataque ou resist\u00eancia. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para criaturas escolhidas. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta as penalidades em \u20131, limitado pelo c\u00edrculo m\u00e1ximo de magia que voc\u00ea pode lan\u00e7ar"
      }
    ]
  },
  {
    "name": "Primor Atl\u00e9tico",
    "target": "1 criatura",
    "duration": "cena",
    "description": "Voc\u00ea modifica os limites f\u00edsicos do alvo, que recebe deslocamento +9m e +10 em testes de Atletismo.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, o alvo recebe um b\u00f4nus adicional de +20 em testes de Atletismo para saltar (para um b\u00f4nus total de +30)."
      },
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, o alvo pode escalar paredes e tetos sem precisar fazer testes de Atletismo. Para isso, precisa estar com as m\u00e3os livres, mas pode usar uma \u00fanica m\u00e3o se ficar parado no lugar. O alvo n\u00e3o fica desprevenido enquanto escala."
      },
      {
        "cost": "+1 PM",
        "description": "muda a execu\u00e7\u00e3o para a\u00e7\u00e3o de movimento, o alcance para pessoal, o alvo para voc\u00ea e a dura\u00e7\u00e3o para instant\u00e2nea. Voc\u00ea salta muito alto e pousa em alcance corpo a corpo de uma criatura em alcance curto. Se fizer um ataque corpo a corpo contra essa criatura nesta rodada, recebe os benef\u00edcios e penalidades de uma investida e sua arma tem o dano aumentado em um dado do mesmo tipo durante este ataque."
      },
      {
        "cost": "+3 PM",
        "description": "al\u00e9m do normal, ao fazer testes de per\u00edcias baseadas em For\u00e7a, Destreza ou Constitui\u00e7\u00e3o, o alvo pode rolar dois dados e escolher o melhor. N\u00e3o afeta testes de ataque ou resist\u00eancia. Requer 2\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Profanar",
    "execution": "padr\u00e3o",
    "range": "longo",
    "area": "esfera com 9m de raio",
    "duration": "1 dia",
    "description": "Esta magia enche a \u00e1rea com energia negativa. Efeitos que causam dano de trevas ou canalizam energia negativa t\u00eam o dano dobrado dentro da \u00e1rea. Esta magia n\u00e3o pode ser lan\u00e7ada em uma \u00e1rea contendo um s\u00edmbolo vis\u00edvel dedicado a uma divindade que n\u00e3o a sua. ''Profanar'' anula ''Consagrar''.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, mortos-vivos na \u00e1rea recebem +2 na Defesa e +2 em todos os testes."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta os b\u00f4nus para mortos-vivos em +1."
      },
      {
        "cost": "+9 PM",
        "description": "muda a execu\u00e7\u00e3o para 1 hora, a dura\u00e7\u00e3o para permanente e adiciona componente material (incenso e \u00f3leos no valor de T$ 1.000). Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Prote\u00e7\u00e3o Divina",
    "execution": "padr\u00e3o",
    "target": "1 criatura",
    "description": "Esta magia cria uma barreira m\u00edstica invis\u00edvel que fornece ao alvo +2 em testes de resist\u00eancia.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o b\u00f4nus concedido em +1."
      },
      {
        "cost": "+2 PM",
        "description": "muda a execu\u00e7\u00e3o para rea\u00e7\u00e3o, o alcance para curto e a dura\u00e7\u00e3o para 1 rodada."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para \u00e1rea de c\u00edrculo com 3m de raio. Todos os aliados dentro do c\u00edrculo recebem o b\u00f4nus da magia. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+5 PM",
        "description": "tamb\u00e9m torna o alvo imune a efeitos de encantamento. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Queda Suave",
    "execution": "rea\u00e7\u00e3o",
    "range": "curto",
    "target": "1 criatura ou objeto com at\u00e9 200kg",
    "duration": "at\u00e9 chegar ao solo ou cena",
    "description": "O alvo cai lentamente. A velocidade da queda \u00e9 reduzida para 18m por rodada \u2014 o suficiente para n\u00e3o causar dano.\n\n\n\nComo lan\u00e7ar esta magia \u00e9 uma rea\u00e7\u00e3o, voc\u00ea pode lan\u00e7\u00e1-la r\u00e1pido o bastante para salvar a si ou um aliado de quedas inesperadas.\n\n\n\nLan\u00e7ada sobre um proj\u00e9til \u2014 como uma flecha ou uma rocha largada do alto de um penhasco \u2014, a magia faz com que ele cause metade do dano normal, devido \u00e0 lentid\u00e3o.\n\n\n\n''Queda Suave'' s\u00f3 funciona em criaturas e objetos em queda livre ou similar; a magia n\u00e3o vai frear um golpe de espada ou o mergulho rasante de um atacante voador.",
    "enhancements": [
      {
        "cost": "Truque",
        "description": "muda o alvo para objeto com at\u00e9 5kg. Em vez do normal, voc\u00ea pode gastar uma a\u00e7\u00e3o de movimento para levitar o alvo at\u00e9 4,5m em qualquer dire\u00e7\u00e3o."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para at\u00e9 10 criaturas ou objetos."
      }
    ]
  },
  {
    "name": "Raio do Enfraquecimento",
    "range": "curto",
    "target": "1 criatura",
    "duration": "cena",
    "resistence": "Fortitude parcial",
    "description": "Voc\u00ea dispara um raio p\u00farpura que drena as for\u00e7as do alvo. Se falhar na resist\u00eancia, o alvo fica fatigado. Se passar, fica vulner\u00e1vel.",
    "enhancements": [
      {
        "cost": "Truque",
        "description": "muda o alcance para toque e a resist\u00eancia para Fortitude anula. Em vez do normal, ao tocar o alvo, sua m\u00e3o emana um brilho p\u00farpura. O alvo fica fatigado. Note que, como efeitos de magia n\u00e3o acumulam, lan\u00e7ar este truque duas vezes contra o mesmo alvo n\u00e3o ir\u00e1 deix\u00e1-lo exausto."
      },
      {
        "cost": "+2 PM",
        "description": "em vez do normal, se falhar na resist\u00eancia o alvo fica exausto. Se passar, fica fatigado. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+5 PM",
        "description": "em vez do normal, se falhar na resist\u00eancia o alvo fica inconsciente. Se passar, fica exausto. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Resist\u00eancia a Energia",
    "execution": "padr\u00e3o",
    "range": "toque",
    "duration": "cena",
    "description": "Ao lan\u00e7ar esta magia, escolha entre \u00e1cido, eletricidade, fogo, frio, luz ou trevas. O alvo recebe resist\u00eancia 10 contra a energia escolhida, passando a ignorar os 10 primeiros pontos de dano de cada ataque feito com essa energia.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta a resist\u00eancia em +5."
      },
      {
        "cost": "+2 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Santu\u00e1rio",
    "execution": "padr\u00e3o",
    "range": "toque",
    "target": "1 criatura",
    "duration": "cena",
    "resistence": "Vontade anula",
    "description": "Qualquer criatura que tente fazer uma a\u00e7\u00e3o hostil contra o alvo deve fazer um teste de Vontade. Se falhar, n\u00e3o consegue, perde a a\u00e7\u00e3o e n\u00e3o pode tentar novamente at\u00e9 o fim da cena. ''Santu\u00e1rio'' n\u00e3o protege o alvo de efeitos de \u00e1rea. Al\u00e9m disso, o pr\u00f3prio alvo tamb\u00e9m n\u00e3o pode fazer a\u00e7\u00f5es hostis, ou a magia \u00e9 dissipada \u2014 mas pode usar outras habilidades e magias de cura e suporte (como ''Curar Ferimentos'', ''B\u00ean\u00e7\u00e3o'' e assim por diante).",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, escolha um tipo de criatura entre animal, construto ou morto-vivo. Voc\u00ea n\u00e3o pode ser percebido por criaturas do tipo escolhido, n\u00e3o importando o sentido usado."
      },
      {
        "cost": "+9 PM",
        "description": "tamb\u00e9m protege o alvo contra efeitos de \u00e1rea. Uma criatura que tente atacar uma \u00e1rea que inclua o alvo deve fazer o teste de Vontade; se falhar, n\u00e3o consegue e perde a a\u00e7\u00e3o. Ela s\u00f3 pode tentar novamente se o alvo sair da \u00e1rea."
      }
    ]
  },
  {
    "name": "Seta Infal\u00edvel de Talude",
    "execution": "padr\u00e3o",
    "target": "at\u00e9 2 criaturas",
    "duration": "instant\u00e2nea",
    "description": "Favorita entre arcanistas iniciantes, esta magia lan\u00e7a duas setas de energia que causando 1d4+1 pontos de dano de ess\u00eancia cada. Voc\u00ea pode lan\u00e7ar as setas em alvos diferentes ou concentr\u00e1-las num mesmo alvo. Caso voc\u00ea possua um b\u00f4nus no dano de magias, como pelo poder Arcano de Batalha, ele \u00e9 aplicado em apenas uma seta (o b\u00f4nus vale para a magia, n\u00e3o cada alvo).",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "muda as setas para lan\u00e7as de energia que surgem e caem do c\u00e9u. Cada lan\u00e7a causa 1d8+1 pontos de dano de ess\u00eancia. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "muda o n\u00famero de setas/lan\u00e7as para tr\u00eas."
      },
      {
        "cost": "+4 PM",
        "description": "muda o n\u00famero de setas/lan\u00e7as para cinco. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "muda o n\u00famero de setas/lan\u00e7as para dez. Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Sil\u00eancio",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "area": "esfera com 6m de raio",
    "duration": "sustentada",
    "description": "Um sil\u00eancio sepulcral recai sobre a \u00e1rea e nenhum som \u00e9 produzido ali. Enquanto estiverem na \u00e1rea, todas as criaturas ficam surdas. Al\u00e9m disso, como lan\u00e7ar magias exige palavras m\u00e1gicas, normalmente nenhuma magia pode ser lan\u00e7ada dentro da \u00e1rea.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "muda a \u00e1rea para alvo de 1 objeto. Em vez do normal, o alvo emana uma \u00e1rea de sil\u00eancio com 3m de raio. Se lan\u00e7ar a magia num objeto de uma criatura involunt\u00e1ria, ela tem direito a um teste de Vontade para anul\u00e1-la."
      },
      {
        "cost": "+2 PM",
        "description": "muda a dura\u00e7\u00e3o para cena. Em vez do normal, nenhum som pode deixar a \u00e1rea, mas criaturas dentro da \u00e1rea podem falar, ouvir e lan\u00e7ar magias com palavras m\u00e1gicas normalmente."
      }
    ]
  },
  {
    "name": "Sono",
    "range": "curto",
    "target": "1 criatura de ND 2 ou menor",
    "duration": "cena",
    "resistence": "Vontade parcial",
    "description": "Um sono m\u00edstico recai sobre o alvo. Se passar na resist\u00eancia, fica fatigado por uma rodada. Se falhar, fica inconsciente e ca\u00eddo.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "muda o alvo para \u00e1rea de quadrado com 3m de lado. Todas as criaturas na \u00e1rea dentro do limite de ND s\u00e3o afetadas."
      },
      {
        "cost": "+2 PM",
        "description": "afeta alvos de ND 5 ou menor. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+5 PM",
        "description": "afeta alvos de ND 10 ou menor. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+14 PM",
        "description": "afeta alvos de qualquer ND. Requer 5\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Suporte Ambiental",
    "execution": "padr\u00e3o",
    "range": "toque",
    "target": "1 criatura",
    "duration": "1 dia",
    "description": "Esta magia garante a sobreviv\u00eancia em ambientes hostis. O alvo fica imune aos efeitos de calor e frio extremos, pode respirar na \u00e1gua, se respirar ar (ou vice versa) e n\u00e3o sufoca em fuma\u00e7a densa.",
    "enhancements": [
      {
        "cost": "+5 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas."
      }
    ]
  },
  {
    "name": "Teia",
    "execution": "padr\u00e3o",
    "range": "curto",
    "area": "cubo com 6m de lado",
    "duration": "cena",
    "resistence": "Reflexos anula",
    "description": "''Teia'' cria v\u00e1rias camadas de fibras entrela\u00e7adas e pegajosas na \u00e1rea. Qualquer criatura na \u00e1rea que falhar na resist\u00eancia fica enredada. Uma v\u00edtima pode se libertar com uma a\u00e7\u00e3o padr\u00e3o e um teste de Acrobacia ou Atletismo. A \u00e1rea ocupada por ''Teia'' \u00e9 terreno dif\u00edcil. A ''Teia'' \u00e9 inflam\u00e1vel. Qualquer ataque que cause dano de fogo destr\u00f3i as teias por onde passar, libertando as criaturas enredadas mas deixando-as em chamas (veja Condi\u00e7\u00f5es, na p\u00e1gina [[Combate T20|Combate]]).",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, criaturas que falhem na resist\u00eancia tamb\u00e9m ficam im\u00f3veis."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, no in\u00edcio de seus turnos a magia afeta novamente qualquer criatura na \u00e1rea, exigindo um novo teste de Reflexos. Requer 2\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a \u00e1rea em +1 cubo de 1,5m."
      }
    ]
  },
  {
    "name": "Toque Chocante",
    "execution": "padr\u00e3o",
    "range": "toque",
    "target": "1 criatura",
    "duration": "instant\u00e2nea",
    "resistence": "Fortitude reduz \u00e0 metade",
    "description": "Arcos el\u00e9tricos envolvem sua m\u00e3o, causando 2d8+2 pontos de dano de eletricidade. Se o alvo usa armadura de metal (ou carrega muito metal, a crit\u00e9rio do mestre), sofre uma penalidade de \u20135 no teste de resist\u00eancia.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o dano em 1d8+1."
      },
      {
        "cost": "+2 PM",
        "description": "como parte da execu\u00e7\u00e3o da magia, voc\u00ea pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para pessoal e o alvo para \u00e1rea de explos\u00e3o com 6m de raio. Voc\u00ea dispara raios pelas pontas dos dedos que afetam todas as criaturas na \u00e1rea."
      }
    ]
  },
  {
    "name": "Tranca Arcana",
    "execution": "padr\u00e3o",
    "range": "toque",
    "target": "1 objeto Grande ou menor",
    "duration": "permanente",
    "description": "Esta magia tranca uma porta ou outro item que possa ser aberto ou fechado (como um ba\u00fa, caixa etc.), aumentando a CD de testes de For\u00e7a ou Ladinagem para abri-lo em +10. Voc\u00ea pode abrir livremente sua pr\u00f3pria tranca sem problemas.\n\n\n\n''Componente material:'' chave de bronze no valor de T$ 25.",
    "enhancements": [
      {
        "cost": "Truque",
        "description": "muda o alcance para curto. Em vez do normal, pode abrir ou fechar um objeto de tamanho M\u00e9dio ou menor, como uma porta ou ba\u00fa. N\u00e3o afeta objetos trancados."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alcance para curto e a dura\u00e7\u00e3o para instant\u00e2nea. Em vez do normal, a magia abre portas, ba\u00fas e janelas trancadas, presas, barradas ou protegidas por outra ''Tranca Arcana'' (neste caso, o efeito \u00e9 dissipado). Ela tamb\u00e9m afrouxa grilh\u00f5es e solta correntes."
      },
      {
        "cost": "+5 PM",
        "description": "aumenta a CD para abrir o alvo em +5."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para 1 objeto de qualquer tamanho, podendo afetar at\u00e9 mesmo os port\u00f5es de um castelo. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Tranquilidade",
    "execution": "a\u00e7\u00e3o padr\u00e3o",
    "range": "curto",
    "target": "1 animal ou humanoide",
    "resistence": "Vontade parcial",
    "description": "Voc\u00ea emana ondas de serenidade. Se falhar na resist\u00eancia, o alvo tem sua atitude mudada para indiferente (veja Diplomacia na p\u00e1gina\u00a0[[Per\u00edcias T20|Per\u00edcias]] ) e n\u00e3o pode atacar ou realizar qualquer tipo de a\u00e7\u00e3o agressiva. Se passar, recebe \u20132 em testes de ataque. Qualquer a\u00e7\u00e3o hostil contra o alvo anula a magia, e ele retorna \u00e0 atitude que tinha antes (ou piorada, de acordo com o mestre).",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 criatura."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o n\u00famero de alvos em +1."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a penalidade em \u20131."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para m\u00e9dio e o alvo para criaturas escolhidas. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Transmutar Objetos",
    "execution": "padr\u00e3o",
    "range": "toque",
    "target": "mat\u00e9ria",
    "duration": "cena",
    "description": "A magia transforma mat\u00e9ria bruta para moldar um novo objeto. Voc\u00ea pode usar mat\u00e9ria-prima mundana para criar um objeto de tamanho Pequeno ou menor e pre\u00e7o m\u00e1ximo de T$ 25, como um balde ou uma espada. O objeto reverte \u00e0 mat\u00e9ria-prima no final da cena, ou se for tocado por um objeto feito de chumbo. Esta magia n\u00e3o pode ser usada para criar objetos consum\u00edveis, como alimentos, itens alqu\u00edmicos ou venenos, nem objetos com mecanismos complexos, como bestas ou armas de fogo. ''Transmutar Objetos'' anula ''Despeda\u00e7ar''.",
    "enhancements": [
      {
        "cost": "Truque",
        "description": "muda o alvo para 1 objeto mundano e a dura\u00e7\u00e3o para instant\u00e2nea. Em vez do normal, voc\u00ea pode alterar as propriedades f\u00edsicas do objeto, como colorir, limpar ou sujar itens pequenos (incluindo pe\u00e7as de roupa), aquecer, esfriar e/ou temperar (mas n\u00e3o produzir) at\u00e9 0,5kg de material inanimado (incluindo comida), ou curar 1 PV do objeto, consertando pequenas falhas como colar um frasco de cer\u00e2mica quebrado, unir os elos de uma corrente ou costurar uma roupa rasgada. Um objeto s\u00f3 pode ser afetado por este truque uma vez por dia."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o limite de tamanho do objeto em uma categoria."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o pre\u00e7o m\u00e1ximo do objeto criado em + T$ 25."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alcance para toque, o alvo para 1 construto e a dura\u00e7\u00e3o para instant\u00e2nea. Em vez do normal, cura 2d8 PV do alvo. Voc\u00ea pode gastar 2 PM adicionais para aumentar a cura em +1d8."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para 1 objeto mundano e a dura\u00e7\u00e3o para instant\u00e2nea. Em vez do normal, voc\u00ea cura todos os PV do alvo, restaurando o objeto totalmente. Este aprimoramento est\u00e1 sujeito aos limites de tamanho e pre\u00e7o do objeto conforme a magia original e n\u00e3o funciona se o objeto tiver sido completamente destru\u00eddo (queimado at\u00e9 virar cinzas ou desintegrado, por exemplo). Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "como o aprimoramento anterior, mas passa a afetar itens m\u00e1gicos"
      }
    ]
  },
  {
    "name": "Vis\u00e3o M\u00edstica",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "target": "voc\u00ea",
    "duration": "cena",
    "description": "Seus olhos brilham com uma luz azul e passam a enxergar auras m\u00e1gicas. Este efeito \u00e9 similar ao uso de Misticismo para detectar magia, mas voc\u00ea detecta todas as auras m\u00e1gicas em alcance m\u00e9dio e recebe todas as informa\u00e7\u00f5es sobre elas sem gastar a\u00e7\u00f5es. Al\u00e9m disso, voc\u00ea pode gastar uma a\u00e7\u00e3o de movimento para descobrir se uma criatura que possa perceber em alcance m\u00e9dio \u00e9 capaz de lan\u00e7ar magias e qual a aura gerada pelas magias de c\u00edrculo mais alto que ela pode lan\u00e7ar.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "recebe vis\u00e3o no escuro."
      },
      {
        "cost": "+2 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia."
      },
      {
        "cost": "+2 PM",
        "description": "tamb\u00e9m pode enxergar objetos e criaturas invis\u00edveis. Eles aparecem como formas transl\u00facidas."
      }
    ]
  },
  {
    "name": "Vitalidade Fantasma",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "target": "voc\u00ea",
    "duration": "instant\u00e2nea",
    "description": "Voc\u00ea suga energia vital da terra, recebendo 2d8 pontos de vida tempor\u00e1rios. Os PV tempor\u00e1rios desaparecem ao final da cena.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta os PV tempor\u00e1rios recebidos em +1d8."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para \u00e1rea: esfera com 6m de raio centrada em voc\u00ea e a resist\u00eancia para Fortitude reduz \u00e0 metade. Em vez do normal, voc\u00ea suga energia das criaturas vivas na \u00e1rea, causando 1d8 pontos de dano de trevas e recebendo PV tempor\u00e1rios iguais ao dano total causado. Os PV tempor\u00e1rios desaparecem ao final da cena. Requer 2\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Aliado Animal",
    "execution": "padr\u00e3o",
    "target": "1 animal prestativo",
    "duration": "1 dia",
    "description": "Voc\u00ea cria um v\u00ednculo mental com um animal prestativo em rela\u00e7\u00e3o a voc\u00ea. O ''Aliado Animal'' obedece a voc\u00ea ao melhor de suas capacidades, mesmo que isso arrisque a vida dele. Ele funciona como um aliado veterano, de um tipo a sua escolha entre ajudante, combatente, fort\u00e3o, guardi\u00e3o, montaria ou perseguidor.",
    "enhancements": []
  },
  {
    "name": "Alterar Tamanho",
    "execution": "padr\u00e3o",
    "range": "curto",
    "target": "1 objeto",
    "duration": "1 dia",
    "description": "Esta magia aumenta ou diminui o tamanho de um item mundano em at\u00e9 tr\u00eas categorias (um objeto Enorme vira Pequeno, por exemplo). Voc\u00ea tamb\u00e9m pode mudar a consist\u00eancia do item, deixando-o r\u00edgido como pedra ou flex\u00edvel como seda (isso n\u00e3o altera sua RD ou PV, apenas suas propriedades f\u00edsicas).",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o n\u00famero de alvos em +1."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo e seu equipamento aumentam de tamanho em uma categoria. O alvo tamb\u00e9m recebe For\u00e7a +4. Um alvo involunt\u00e1rio pode fazer um teste de Fortitude para negar o efeito."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo e seu equipamento diminuem de tamanho em uma categoria. O alvo tamb\u00e9m recebe Destreza +4. Um alvo involunt\u00e1rio pode fazer um teste de Fortitude para negar o efeito. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Amarras Et\u00e9reas",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "target": "1 criatura",
    "description": "Tr\u00eas la\u00e7os de energia surgem do ch\u00e3o e se enroscam no alvo, deixando-o agarrado. A v\u00edtima pode tentar se livrar, gastando uma a\u00e7\u00e3o padr\u00e3o para fazer um teste de Atletismo (CD igual \u00e0 da magia). Se passar, destr\u00f3i um la\u00e7o, mais um la\u00e7o adicional para cada 2 pontos pelos quais superou a CD. Os la\u00e7os tamb\u00e9m podem ser atacados e destru\u00eddos: cada um tem Defesa 10, 10 PV, RD 5 e imunidade a dano m\u00e1gico. Se todos os la\u00e7os forem destru\u00eddos, a magia \u00e9 dissipada. Por serem feitos de energia, os la\u00e7os afetam criaturas incorp\u00f3reas.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o n\u00famero de alvos em +1."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o n\u00famero de cordas em um alvo a sua escolha em +1."
      },
      {
        "cost": "+3 PM",
        "description": "em vez do normal, cada la\u00e7o \u00e9 destru\u00eddo automaticamente com um \u00fanico ataque bem-sucedido; por\u00e9m, cada la\u00e7o destru\u00eddo libera um choque de energia que causa 1d6+1 pontos de dano de ess\u00eancia na criatura amarrada. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Apar\u00eancia Perfeita",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "target": "voc\u00ea",
    "duration": "cena",
    "description": "Esta magia lhe concede um rosto idealizado, porte f\u00edsico garboso, voz melodiosa e olhar sedutor, deixando-o mais atraente e confi\u00e1vel. Enquanto a magia estiver ativa, seu Carisma torna-se 20 (ou recebe um b\u00f4nus de +4, caso seja 20 ou maior) e voc\u00ea recebe +5 nos testes de Diplomacia e Engana\u00e7\u00e3o. Quando a magia acaba, quaisquer observadores percebem a mudan\u00e7a e tendem a suspeitar de voc\u00ea. Da mesma maneira, pessoas que o viram sob o efeito da magia sentir\u00e3o que \u201calgo est\u00e1 errado\u201d ao v\u00ea-lo em condi\u00e7\u00f5es normais. Quando a cena acabar, voc\u00ea pode gastar os PM da magia novamente como uma a\u00e7\u00e3o livre para mant\u00ea-la ativa. Este efeito n\u00e3o fornece PV ou PM adicionais.",
    "enhancements": []
  },
  {
    "name": "Aug\u00fario",
    "execution": "completa",
    "range": "pessoal",
    "target": "voc\u00ea",
    "duration": "instant\u00e2nea",
    "description": "Esta magia diz se uma a\u00e7\u00e3o que voc\u00ea tomar\u00e1 em breve \u2014 no m\u00e1ximo uma hora no futuro \u2014 trar\u00e1 resultados bons ou ruins. O mestre rola 1d6 em segredo; com um resultado de 2 a 6, a magia funciona e voc\u00ea recebe uma das seguintes respostas: \u201cfelicidade\u201d (a a\u00e7\u00e3o trar\u00e1 bons resultados); \u201cmis\u00e9ria\u201d (a a\u00e7\u00e3o trar\u00e1 maus resultados); \u201cfelicidade e mis\u00e9ria\u201d (para ambos) ou \u201cnada\u201d (para a\u00e7\u00f5es que n\u00e3o trar\u00e3o resultados bons ou ruins).\n\n\n\nCom um resultado 1, a magia falha e oferece o resultado \u201cnada\u201d. N\u00e3o h\u00e1 como saber se esse resultado foi dado porque a magia falhou ou n\u00e3o. Lan\u00e7ar esta magia m\u00faltiplas vezes sobre o mesmo assunto gera sempre o primeiro resultado.\n\n\n\nPor exemplo, se o grupo est\u00e1 prestes a entrar em uma c\u00e2mara, o aug\u00fario dir\u00e1 \u201cfelicidade\u201d se a c\u00e2mara cont\u00e9m um tesouro desprotegido, \u201cmis\u00e9ria\u201d se cont\u00e9m um monstro, \u201cfelicidade e mis\u00e9ria\u201d se houver um tesouro e um monstro ou \u201cnada\u201d se a c\u00e2mara estiver vazia.",
    "enhancements": [
      {
        "cost": "+7 PM",
        "description": "o mestre rola 1d12; a magia s\u00f3 falha em um resultado 1."
      },
      {
        "cost": "+12 PM",
        "description": "o mestre rola 1d20; a magia s\u00f3 falha em um resultado 1."
      }
    ]
  },
  {
    "name": "Bola de Fogo",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "area": "esfera de 6m de raio",
    "duration": "instant\u00e2nea",
    "resistence": "Reflexos reduz \u00e0 metade",
    "description": "Você dispara uma pequena pedra flamejante que explode com o impacto, causando 6d6 pontos de dano de fogo em todas as criaturas e objetos livres na área.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d6."
      },
      {
        "cost": "+2 PM",
        "description": "muda a área para efeito de esfera flamejante com tamanho Médio e a duração para cena. Em vez do normal, cria uma esfera flamejante com 1,5m de diâmetro que causa 3d6 pontos de dano a qualquer criatura no mesmo espaço. Você pode gastar uma ação de movimento para fazer a esfera voar 9m em qualquer direção. Ela é imune a dano, mas pode ser apagada com água. Uma criatura só pode sofrer dano da esfera uma vez por rodada."
      },
      {
        "cost": "+3 PM",
        "description": "muda a duração para um dia ou até ser descarregada. Em vez do normal, a pedra flamejante aparece em suas mãos e pode ser detonada como uma reação, descarregando a magia. A pedra pode ser usada como uma arma de arremesso com alcance curto."
      }
    ]
  },

  {
    "name": "Campo de For\u00e7a",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "target": "voc\u00ea",
    "duration": "cena",
    "description": "Esta magia cria uma pel\u00edcula protetora sobre voc\u00ea. Voc\u00ea recebe 30 PV tempor\u00e1rios, mas apenas contra dano de corte, impacto ou perfura\u00e7\u00e3o.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "muda a execu\u00e7\u00e3o para rea\u00e7\u00e3o e a dura\u00e7\u00e3o para instant\u00e2nea. Em vez do normal, voc\u00ea recebe resist\u00eancia 30 contra o pr\u00f3ximo dano que sofrer at\u00e9 o fim do turno atual."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta os PV tempor\u00e1rios em +5 ou a resist\u00eancia a dano em +10."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alcance para curto e o alvo para 1 criatura ou objeto Enorme ou menor. Em vez do normal, cria uma esfera im\u00f3vel e tremeluzente com o tamanho do alvo e centrada nele. Nenhuma criatura, objeto ou efeito de dano pode passar pela esfera, embora criaturas possam respirar normalmente. Criaturas na \u00e1rea podem fazer um teste de Reflexos para evitar serem aprisionadas. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "como o aprimoramento acima, mas tamb\u00e9m muda a dura\u00e7\u00e3o para sustentada. Tudo dentro da esfera fica praticamente sem peso. Uma vez por rodada, voc\u00ea pode gastar uma a\u00e7\u00e3o livre para flutuar a esfera e seu conte\u00fado para qualquer local dentro de alcance longo. Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Camuflagem Ilus\u00f3ria",
    "execution": "padr\u00e3o",
    "range": "toque",
    "target": "1 criatura",
    "description": "O alvo fica com sua imagem nublada, como se vista atrav\u00e9s de um l\u00edquido, recebendo os efeitos de camuflagem.",
    "enhancements": [
      {
        "cost": "+3 PM",
        "description": "a imagem do alvo fica ainda mais distorcida, oferecendo camuflagem total."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas. Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "C\u00edrculo da Justi\u00e7a",
    "execution": "completa",
    "range": "curto",
    "area": "cubo com 9m de lado",
    "duration": "1 dia",
    "resistence": "Vontade parcial",
    "description": "Tamb\u00e9m conhecida como ''L\u00e1grimas do Deus da Trapa\u00e7a,'' esta magia \u00e9 usada em tribunais e para proteger \u00e1reas sens\u00edveis. Criaturas na \u00e1rea sofrem \u201310 em testes de Acrobacia, Engana\u00e7\u00e3o, Furtividade e Ladinagem e n\u00e3o podem mentir deliberadamente \u2014 mas podem tentar evitar perguntas que normalmente responderiam com uma mentira (sendo evasivas ou cometendo omiss\u00f5es, por exemplo). Uma criatura que passe na resist\u00eancia tem as penalidades reduzidas para \u20135 e pode mentir.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "muda a execu\u00e7\u00e3o para a\u00e7\u00e3o padr\u00e3o, o alcance para pessoal, o alvo para voc\u00ea, a dura\u00e7\u00e3o para cena e a resist\u00eancia para nenhuma. Em vez do normal, qualquer criatura ou objeto invis\u00edvel em alcance curto se torna vis\u00edvel. Isso n\u00e3o anula o efeito m\u00e1gico; se sair do seu alcance, a criatura ou objeto voltam a ficar invis\u00edveis."
      },
      {
        "cost": "+3 PM",
        "description": "muda a penalidade nas per\u00edcias para \u201310 (se passar na resist\u00eancia) e \u201320 (se falhar). Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda a dura\u00e7\u00e3o para permanente e adiciona componente material (balan\u00e7a de prata no valor de T$ 5.000)."
      }
    ]
  },
  {
    "name": "Condi\u00e7\u00e3o",
    "execution": "padr\u00e3o",
    "range": "curto",
    "target": "at\u00e9 5 criaturas",
    "duration": "cena",
    "description": "Pela dura\u00e7\u00e3o da magia, voc\u00ea sabe a posi\u00e7\u00e3o e condi\u00e7\u00e3o (PV atuais, se est\u00e3o sob efeito de magia...) das criaturas escolhidas. Depois de lan\u00e7ada, a dist\u00e2ncia entre voc\u00ea e os alvos n\u00e3o importa \u2014 a magia s\u00f3 deixa de detectar um alvo se ele morrer ou viajar para outro plano.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o n\u00famero de alvos em +1."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta a dura\u00e7\u00e3o para 1 dia."
      }
    ]
  },
  {
    "name": "Conjurar Mortos-Vivos",
    "execution": "completa",
    "range": "curto",
    "effect": "6 mortos",
    "duration": "sustentada",
    "description": "Seis esqueletos de tamanho M\u00e9dio feitos de energia negativa emergem do ch\u00e3o em espa\u00e7os desocupados escolhidos por voc\u00ea dentro do alcance. Voc\u00ea pode usar uma a\u00e7\u00e3o de movimento para fazer os mortos-vivos andarem (eles t\u00eam deslocamento 9m) ou uma a\u00e7\u00e3o padr\u00e3o para faz\u00ea-los causar dano a criaturas adjacentes (1d6+2 pontos de dano de trevas cada). Os esqueletos t\u00eam For 14, Des 14 e todos os outros atributos nulos; eles t\u00eam 1 PV, n\u00e3o t\u00eam valor de Defesa ou testes de resist\u00eancia, falham automaticamente em qualquer teste oposto e s\u00e3o imunes a atordoamento, dano n\u00e3o letal, doen\u00e7a, encantamento, fadiga, frio, ilus\u00e3o, paralisia, sono e veneno. Eles desaparecem quando s\u00e3o reduzidos a 0 PV ou no fim da cena. Os mortos-vivos n\u00e3o agem sem receber uma ordem. Usos criativos para criaturas invocadas fora de combate ficam a crit\u00e9rio do mestre.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o n\u00famero de mortos-vivos conjurados em +1."
      },
      {
        "cost": "+3 PM",
        "description": "em vez de esqueletos, conjura carni\u00e7ais (veja abaixo). Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+7 PM",
        "description": "em vez de esqueletos, conjura sombras (veja abaixo). Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Controlar Fogo",
    "execution": "padr\u00e3o",
    "range": "curto",
    "target": "veja texto",
    "duration": "cena",
    "description": "Voc\u00ea pode criar, moldar, mover ou extinguir chamas e emana\u00e7\u00f5es de calor. Ao lan\u00e7ar a magia, escolha um dos efeitos.\n\n\n\n''Chamejar:'' o alvo \u00e9 armas escolhidas. Elas causam +1d6 de dano de fogo. Tamb\u00e9m afeta armas naturais e ataques desarmados.\n\n\n\n''Esquentar:'' o alvo \u00e9 1 objeto, que come\u00e7a a esquentar. Ele sofre 1d6 pontos de dano de fogo por rodada e causa o mesmo dano a qualquer criatura que o esteja segurando ou vestindo. A crit\u00e9rio do mestre, o objeto ou a criatura vestindo-o tamb\u00e9m podem pegar fogo. Uma criatura pode gastar uma a\u00e7\u00e3o completa para resfriar o objeto (jogando areia ou se jogando numa fonte de \u00e1gua pr\u00f3xima, por exemplo) e cancelar o efeito da magia.\n\n\n\n''Extinguir'': o alvo \u00e9 1 chama de tamanho Grande ou menor, que \u00e9 apagada. Isso cria uma nuvem de fuma\u00e7a que ocupa uma esfera de 3m de raio centrada onde estava a chama. Dentro da fuma\u00e7a, criaturas t\u00eam camuflagem.\n\n\n\n''Modelar'': o alvo \u00e9 1 chama de tamanho Grande ou menor. A cada rodada, voc\u00ea pode gastar uma a\u00e7\u00e3o livre para moviment\u00e1-la 9m em qualquer dire\u00e7\u00e3o. Se atravessar o espa\u00e7o ocupado por uma criatura, causa 2d6 pontos de dano de fogo. Uma criatura s\u00f3 pode receber dano dessa maneira uma vez por rodada.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d6."
      }
    ]
  },
  {
    "name": "Controlar Madeira",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "target": "1 objeto de madeira Grande ou menor",
    "duration": "cena",
    "description": "Voc\u00ea molda, retorce, altera ou repele madeira. Ao lan\u00e7ar a magia, escolha.\n\n\n\n''Fortalecer'': deixa o alvo mais resistente. Armas t\u00eam seu dano aumentado em um passo. Escudos t\u00eam seu b\u00f4nus de Defesa aumentado em +2. Al\u00e9m disso, esses e outros itens de madeira recebem +5 na RD e dobram seus PV.\n\n\n\n''Modelar'': muda a forma do alvo. Pode transformar um galho em espada, criar uma porta onde antes havia apenas uma parede, transformar um tronco em uma caixa... Mas n\u00e3o pode criar mecanismos complexos (como uma besta) ou itens consum\u00edveis.\n\n\n\n''Repelir'': o alvo \u00e9 repelido por voc\u00ea. Se for uma arma, ataques feitos com ela contra voc\u00ea falham automaticamente. Se for uma porta ou outro objeto que possa ser aberto, ele vai se abrir quando voc\u00ea se aproximar, mesmo que esteja trancado. Uma carro\u00e7a ou outro objeto que v\u00e1 atingi-lo, como um tronco caindo ou barril, vai desviar ou simplesmente parar adjacente a voc\u00ea, sem lhe causar dano. Os efeitos de regras em outros objetos de madeira ficam a cargo do mestre.\n\n\n\n''Retorcer'': torna o alvo imprest\u00e1vel. Uma porta retorcida emperra (exigindo um teste de For\u00e7a contra CD 25 para ser aberta). Armas e itens retorcidos imp\u00f5em uma penalidade de \u20135 em testes de per\u00edcia. Escudos retorcidos deixam de oferecer qualquer b\u00f4nus (mas ainda imp\u00f5em penalidades). Um barco retorcido come\u00e7a a afundar e naufraga ao final da cena. Os efeitos de regras em outros objetos de madeira ficam a cargo do mestre.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "muda o alcance para pessoal, o alvo para voc\u00ea e a dura\u00e7\u00e3o para 1 dia. Voc\u00ea e seu equipamento se transformam em uma \u00e1rvore de tamanho Grande. Nessa forma, voc\u00ea n\u00e3o pode falar ou fazer a\u00e7\u00f5es f\u00edsicas, mas consegue perceber seus arredores normalmente. Se for atacado nessa forma, a magia \u00e9 dissipada. Um teste de Sobreviv\u00eancia (CD 30) revela que voc\u00ea n\u00e3o \u00e9 uma \u00e1rvore verdadeira."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alvo para \u00e1rea de quadrado com 9m de lado e a dura\u00e7\u00e3o para cena. Em vez do normal, qualquer vegeta\u00e7\u00e3o na \u00e1rea fica r\u00edgida e afiada. A \u00e1rea \u00e9 considerada terreno dif\u00edcil e criaturas que andem nela sofrem 1d6 pontos de dano de corte para cada 1,5m que avancem."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alvo para objeto de madeira Enorme ou menor. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+12 PM",
        "description": "muda o alvo para objeto de madeira Colossal ou menor. Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Cr\u00e2nio Voador de Vladislav",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "target": "1 criatura",
    "duration": "instant\u00e2nea",
    "resistence": "Fortitude reduz \u00e0 metade",
    "description": "Esta magia cria um cr\u00e2nio humano envolto em energia negativa, que causa 4d8+4 pontos de dano de trevas quando atinge o alvo e se desfaz emitindo um som horrendo, podendo deixar abalados todos os inimigos num raio de 3m. Passar no teste de resist\u00eancia diminui o dano pela metade e evita a condi\u00e7\u00e3o abalado. Alvos que j\u00e1 estiverem abalados e falharem no teste ficam apavorados por 1d4 rodadas.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o dano em +1d8+1."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o n\u00famero de alvos em +1."
      }
    ]
  },
  {
    "name": "Desespero Esmagador",
    "execution": "padr\u00e3o",
    "area": "cone",
    "duration": "cena",
    "description": "Humanoides na \u00e1rea s\u00e3o acometidos de grande tristeza, adquirindo as condi\u00e7\u00f5es fraco e frustrado. Se passarem na resist\u00eancia, adquirem esta condi\u00e7\u00e3o por uma rodada.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "em vez do normal, as condi\u00e7\u00f5es adquiridas s\u00e3o debilitado e esmorecido."
      },
      {
        "cost": "+3 PM",
        "description": "em vez do normal, afeta qualquer tipo de criatura."
      },
      {
        "cost": "+3 PM",
        "description": "al\u00e9m do normal, criaturas que falhem na resist\u00eancia ficam aos prantos (em termos de regras, adquirem a condi\u00e7\u00e3o pasmo) por 1 rodada. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Dissipar Magia",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "description": "Voc\u00ea dissipa outras magias que estejam ativas, como se sua dura\u00e7\u00e3o tivesse acabado. Note que efeitos de magias instant\u00e2neas n\u00e3o podem ser dissipados (n\u00e3o se pode dissipar uma ''Bola de Fogo'' ou ''Rel\u00e2mpago'' depois que j\u00e1 causaram dano...). Se lan\u00e7ar essa magia em uma criatura ou \u00e1rea, fa\u00e7a um teste de Misticismo; voc\u00ea anula as magias com CD igual ou menor que o resultado do teste. Se lan\u00e7ada contra um item m\u00e1gico, o transforma em um item mundano por 1d6 rodadas (sem teste de resist\u00eancia)",
    "enhancements": [
      {
        "cost": "+12 PM",
        "description": "muda a \u00e1rea para esfera com 9m de raio. Em vez do normal, cria um efeito de disjun\u00e7\u00e3o. Todas as magias na \u00e1rea s\u00e3o automaticamente dissipadas e todos os itens m\u00e1gicos na \u00e1rea, exceto aqueles que voc\u00ea estiver carregando, viram itens mundanos (com direito a um teste de resist\u00eancia para evitar esse efeito). Requer 5\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Enxame de Pestes",
    "execution": "completa",
    "range": "m\u00e9dio",
    "effect": "1 enxame M\u00e9dio",
    "duration": "sustentada",
    "resistence": "Fortitude reduz \u00e0 metade",
    "description": "Voc\u00ea conjura um enxame de criaturas a sua escolha, como besouros, gafanhotos, mosquitos, ratos, morcegos ou serpentes, que surge em um ponto a sua escolha. O enxame pode passar pelo espa\u00e7o de outras criaturas e n\u00e3o impede que outras criaturas entrem no espa\u00e7o dele. No final de cada um de seus turnos, o enxame causa 2d12 pontos de dano de veneno a qualquer criatura em seu espa\u00e7o (Fortitude reduz \u00e0 metade). Voc\u00ea pode gastar uma a\u00e7\u00e3o de movimento para mover o enxame com deslocamento de 12m",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d12."
      },
      {
        "cost": "+3 PM",
        "description": "muda a resist\u00eancia para Reflexos reduz \u00e0 metade e o enxame para criaturas maiores, como gatos, guaxinins, compsognatos ou kobolds. Ele causa 3d12 pontos de dano (a sua escolha entre corte, impacto ou perfura\u00e7\u00e3o). O resto da magia segue normal."
      },
      {
        "cost": "+5 PM",
        "description": "aumenta o n\u00famero de enxames em +1. Eles n\u00e3o podem ocupar o mesmo espa\u00e7o. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda a resist\u00eancia para Reflexos reduz \u00e0 metade e o enxame para criaturas elementais. Ele causa 5d12 pontos do dano (a sua escolha entre \u00e1cido, eletricidade, fogo ou frio). O resto da magia segue normal. Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Esculpir Sons",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "target": "1 criatura ou objeto",
    "duration": "cena",
    "resistence": "Vontade anula",
    "description": "Esta magia altera os sons emitidos pelo alvo. Ela n\u00e3o \u00e9 capaz de criar sons, mas pode omiti-los (como fazer uma carro\u00e7a ficar silenciosa) ou transform\u00e1-los (como fazer uma pessoa ficar com voz de passarinho). Voc\u00ea n\u00e3o pode criar sons que n\u00e3o conhece (n\u00e3o pode fazer uma criatura falar num idioma que n\u00e3o conhe\u00e7a). Uma vez que escolha a altera\u00e7\u00e3o, ela n\u00e3o pode ser mudada. Um conjurador que tenha a voz modificada drasticamente n\u00e3o poder\u00e1 lan\u00e7ar magias",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o n\u00famero de alvos em +1. Todas as criaturas e objetos devem ser afetados da mesma forma."
      }
    ]
  },
  {
    "name": "F\u00edsico Divino",
    "execution": "padr\u00e3o",
    "range": "toque",
    "target": "1 criatura",
    "duration": "cena",
    "description": "O alvo se torna uma vers\u00e3o mais poderosa de si mesmo. O alvo recebe +4 em For\u00e7a, Destreza ou Constitui\u00e7\u00e3o, a sua escolha. Esse aumento n\u00e3o oferece PV ou PM adicionais.",
    "enhancements": [
      {
        "cost": "+3 PM",
        "description": "em vez do normal, o alvo recebe +4 nos tr\u00eas atributos f\u00edsicos. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas."
      },
      {
        "cost": "+7 PM",
        "description": "aumenta o b\u00f4nus em +2. Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Flecha \u00c1cida",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "target": "1 criatura ou objeto",
    "duration": "instant\u00e2nea",
    "resistence": "Reflexos parcial",
    "description": "Voc\u00ea dispara um proj\u00e9til que causa 4d6 pontos de dano de \u00e1cido. Se falhar no teste de resist\u00eancia, o alvo tamb\u00e9m fica coberto por um muco corrosivo durante duas rodadas, sofrendo mais 2d6 de dano de \u00e1cido no in\u00edcio de seus turnos. Se lan\u00e7ada contra um objeto livre (que n\u00e3o esteja em posse de uma criatura) a magia causa dano dobrado e ignora a RD do objeto.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, se o alvo coberto pelo muco \u00e1cido estiver usando armadura ou escudo, o item \u00e9 corro\u00eddo. Isso reduz o b\u00f4nus na Defesa do item em 1 ponto permanentemente. O item pode ser consertado, restaurando seu b\u00f4nus (veja a per\u00edcia Of\u00edcio, na p\u00e1gina [[Per\u00edcias T20|Per\u00edcias]])."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano inicial e o dano por rodada em +1d6."
      }
    ]
  },
  {
    "name": "Invisibilidade",
    "execution": "livre",
    "range": "pessoal",
    "target": "voc\u00ea",
    "duration": "1 rodada",
    "description": "O alvo fica invis\u00edvel, incluindo seu equipamento. Ele recebe camuflagem total e +20 em testes de Furtividade. Como o normal, criaturas que n\u00e3o possam v\u00ea-lo ficam desprevenidas contra seus ataques.\n\n\n\nA magia termina se o alvo faz um ataque ou usa uma habilidade hostil. A\u00e7\u00f5es contra objetos livres n\u00e3o dissipam a ''Invisibilidade'' (voc\u00ea pode tocar ou apanhar objetos que n\u00e3o estejam sendo segurados por outras criaturas). Causar dano indiretamente \u2014 por exemplo, acendendo o pavio de um barril de p\u00f3lvora que vai detonar mais tarde \u2014 n\u00e3o \u00e9 considerado um ataque.\n\n\n\nObjetos soltos pelo alvo voltam a ser vis\u00edveis e objetos apanhados por ele ficam invis\u00edveis. Uma luz transportada pelo alvo nunca fica invis\u00edvel (mesmo que sua fonte seja). Qualquer parte de um item carregado que se estenda al\u00e9m de seu alcance corpo a corpo natural se torna vis\u00edvel.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "muda a execu\u00e7\u00e3o para a\u00e7\u00e3o padr\u00e3o, o alcance para toque e o alvo para 1 criatura ou 1 objeto."
      },
      {
        "cost": "+3 PM",
        "description": "muda a dura\u00e7\u00e3o para cena. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+3 PM",
        "description": "muda a dura\u00e7\u00e3o para sustentada. Em vez do normal, o alvo gera uma esfera de invisibilidade. O alvo e todas as criaturas a at\u00e9 3m dele se tornam invis\u00edveis, como no efeito normal da magia (ainda ficam vis\u00edveis caso fa\u00e7am uma a\u00e7\u00e3o hostil). A esfera se move juntamente com o alvo; qualquer coisa que saia da esfera fica vis\u00edvel. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Liga\u00e7\u00e3o Telep\u00e1tica",
    "execution": "padr\u00e3o",
    "range": "toque",
    "target": "2 criaturas volunt\u00e1rias",
    "duration": "1 dia",
    "description": "Voc\u00ea cria um elo mental entre duas criaturas com Intelig\u00eancia 3 ou maior (voc\u00ea pode ser uma delas). As criaturas podem se comunicar independente de idioma ou dist\u00e2ncia, mas n\u00e3o em mundos diferentes.",
    "enhancements": [
      {
        "cost": "+3 PM",
        "description": "muda o alvo para 1 criatura. Em vez do normal, voc\u00ea cria um elo mental que permite que voc\u00ea veja e ou\u00e7a atrav\u00e9s dos sentidos da criatura, se gastar uma a\u00e7\u00e3o de movimento. Uma criatura involunt\u00e1ria pode fazer um teste de Vontade para suprimir a magia por uma hora. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Localiza\u00e7\u00e3o",
    "range": "pessoal",
    "description": "Esta magia pode encontrar uma criatura ou objeto a sua escolha. Voc\u00ea pode pensar em termos gerais (\u201cum elfo\u201d, \u201calgo de metal\u201d) ou espec\u00edficos (\u201cGwen, a elfa\u201d, \u201cuma espada longa\u201d). A magia indica a dire\u00e7\u00e3o e dist\u00e2ncia da criatura ou objeto mais pr\u00f3ximo desse tipo, caso esteja ao alcance. Voc\u00ea pode movimentar-se para continuar procurando. Procurar algo muito espec\u00edfico (\u201ca espada longa encantada do Bar\u00e3o Rulyn\u201d) exige que voc\u00ea tenha em mente uma imagem precisa do objeto; caso a imagem n\u00e3o seja muito pr\u00f3xima da verdade, a magia falha, mas voc\u00ea gasta os PM mesmo assim. Esta magia pode ser bloqueada por uma fina camada de chumbo.",
    "enhancements": [
      {
        "cost": "Truque",
        "description": "muda a \u00e1rea para alvo voc\u00ea. Em vez do normal, voc\u00ea sabe onde fica o norte e recebe +5 em testes de Sobreviv\u00eancia para se orientar."
      },
      {
        "cost": "+5 PM",
        "description": "aumenta a \u00e1rea em um fator de 10 (90m para 900m, 900m para 9km, e assim por diante)."
      }
    ]
  },
  {
    "name": "Mapear",
    "range": "toque",
    "target": "superf\u00edcie ou objeto plano",
    "duration": "cena",
    "description": "Uma fagulha percorre a superf\u00edcie afetada, queimando-a enquanto esbo\u00e7a um mapa da regi\u00e3o onde o conjurador est\u00e1. Se voc\u00ea conhece o lugar, o mapa ser\u00e1 completo. Caso contr\u00e1rio, apresentar\u00e1 apenas um esbo\u00e7o geral, al\u00e9m de um ponto de refer\u00eancia (para possibilitar localiza\u00e7\u00e3o) e um lugar de interesse, ambos definidos pelo mestre. A regi\u00e3o representada no mapa tem tamanho m\u00e1ximo de um quadrado de 10km de lado. Caso voc\u00ea esteja dentro de uma constru\u00e7\u00e3o, o mapa mostrar\u00e1 o andar no qual voc\u00ea se encontra.",
    "enhancements": []
  },
  {
    "name": "Marca da Obedi\u00eancia",
    "execution": "padr\u00e3o",
    "range": "toque",
    "resistence": "Vontade anula",
    "description": "Voc\u00ea toca uma criatura, gravando uma marca m\u00edstica no corpo dela enquanto profere uma ordem, como \u201cn\u00e3o ataque a mim ou meus aliados\u201d, \u201csiga-me\u201d ou \u201cn\u00e3o saia desta sala\u201d. A criatura deve seguir essa ordem, gastando todas as a\u00e7\u00f5es de seu turno para isso. A ordem n\u00e3o pode ser gen\u00e9rica demais (como \u201cajude-me\u201d, por exemplo), nem for\u00e7ar o alvo a atos suicidas. A cada rodada, o alvo pode fazer um teste de Vontade. Se passar, a magia \u00e9 dissipada.",
    "enhancements": [
      {
        "cost": "+3 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia. Se n\u00e3o estiver em combate, a criatura s\u00f3 pode fazer o teste de Vontade a cada hora. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+3 PM",
        "description": "sempre que o alvo fizer o teste de Vontade e falhar, a marca causa 3d6 pontos de dano mental. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Mente Divina",
    "execution": "padr\u00e3o",
    "range": "toque",
    "target": "1 criatura",
    "duration": "cena",
    "description": "Voc\u00ea traz inspira\u00e7\u00e3o divina \u00e0 mente do alvo. Escolha entre Intelig\u00eancia, Sabedoria ou Carisma. O alvo recebe +4 no atributo escolhido. Esse aumento n\u00e3o oferece PV ou PM adicionais.",
    "enhancements": [
      {
        "cost": "+3 PM",
        "description": "em vez do normal, o alvo recebe +4 nos tr\u00eas atributos mentais. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas."
      },
      {
        "cost": "+7 PM",
        "description": "aumenta o b\u00f4nus em +2. Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Metamorfose",
    "range": "pessoal",
    "target": "voc\u00ea",
    "description": "Voc\u00ea muda sua apar\u00eancia e forma \u2014 incluindo seu equipamento \u2014 para qualquer outra criatura, existente ou imaginada. Independentemente da forma escolhida, voc\u00ea recebe +20 em testes de Engana\u00e7\u00e3o para disfarce. Caracter\u00edsticas n\u00e3o mencionadas n\u00e3o mudam.\n\n\n\nSe mudar para uma forma humanoide, pode mudar o tipo de dano f\u00edsico de suas armas (se usa uma ma\u00e7a e transform\u00e1-la em espada longa, ela pode causar dano de corte, por exemplo). Se quiser, pode assumir uma forma humanoide com uma categoria de tamanho acima ou abaixo da sua; nesse caso aplique os modificadores em Furtividade e testes de manobra.\n\n\n\nSe mudar para outras formas, voc\u00ea pode escolher uma Forma Selvagem do druida (veja a p\u00e1gina [[Druida T20|Druida]]). Nesse caso voc\u00ea n\u00e3o pode atacar com suas armas, falar ou lan\u00e7ar magias at\u00e9 voltar ao normal, mas recebe uma ou mais armas naturais e os b\u00f4nus da forma selvagem escolhida.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "a forma escolhida recebe uma habilidade de sentidos entre faro, vis\u00e3o na penumbra e vis\u00e3o no escuro."
      },
      {
        "cost": "+3 PM",
        "description": "a forma escolhida recebe percep\u00e7\u00e3o \u00e0s cegas. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alcance para toque, o alvo para 1 criatura e adiciona resist\u00eancia (Vontade anula)."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alcance para m\u00e9dio, o alvo para 1 criatura e a resist\u00eancia para Vontade anula. Em vez do normal, transforma o alvo em uma criatura ou objeto inofensivo (ovelha, sapo, galinha, pudim de ameixa etc.). A criatura n\u00e3o pode atacar, falar e lan\u00e7ar magias; seu deslocamento vira 3m e sua Defesa vira 10. Suas outras caracter\u00edsticas n\u00e3o mudam. No in\u00edcio de seus turnos, o alvo pode fazer um teste de Vontade; se passar, retorna \u00e0 sua forma normal e a magia termina. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "se mudar para formas n\u00e3o humanoides, pode escolher uma Forma Selvagem Superior. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+12 PM",
        "description": "al\u00e9m do normal, no in\u00edcio de seus turnos o alvo pode mudar de forma novamente, como uma a\u00e7\u00e3o livre, fazendo novas escolhas. Requer 5\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Miasma Mef\u00edtico",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "area": "nuvem com 6m de raio",
    "duration": "instant\u00e2nea",
    "description": "A \u00e1rea \u00e9 coberta por emana\u00e7\u00f5es letais. Criaturas na \u00e1rea sofrem 5d6 pontos de dano de veneno e ficam enjoadas por 1 rodada. Se passarem na resist\u00eancia, sofrem metade do dano e n\u00e3o ficam enjoadas.",
    "enhancements": [
      {
        "cost": "Truque",
        "description": "muda o alcance para toque, a \u00e1rea para alvo (1 criatura com 0 PV ou menos), a dura\u00e7\u00e3o para instant\u00e2nea e a resist\u00eancia para Fortitude anula. Em vez do normal, voc\u00ea canaliza o ''Miasma'' contra uma v\u00edtima. Se falhar na resist\u00eancia, ela morre e voc\u00ea recebe +2 na CD de suas magias por 1 dia. Se passar, fica imune a este truque por um dia."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d6."
      },
      {
        "cost": "+3 PM",
        "description": "muda o tipo do dano para trevas."
      }
    ]
  },
  {
    "name": "Montaria Arcana",
    "execution": "padr\u00e3o",
    "range": "curto",
    "effect": "criatura conjurada",
    "duration": "1 dia",
    "description": "Esta magia convoca um cavalo de batalha que serve como um aliado montaria veterano. Sua apar\u00eancia \u00e9 de um animal negro com crina e cauda cinzentas e cascos feitos de fuma\u00e7a, mas voc\u00ea pode mud\u00e1-la se quiser. Al\u00e9m dos benef\u00edcios normais, a ''Montaria Arcana'' pode atravessar terreno dif\u00edcil sem redu\u00e7\u00e3o em seu deslocamento.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, criaturas do tipo animal em alcance curto da montaria devem fazer um teste de Vontade. Se passarem, ficam abaladas pela cena; se falharem, ficam apavoradas por 1d4 rodadas, depois abaladas pela cena."
      },
      {
        "cost": "+3 PM",
        "description": "muda a dura\u00e7\u00e3o para permanente e adiciona sacrif\u00edcio de 1 PM."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o tamanho da montaria em uma categoria. Isso tamb\u00e9m aumenta o n\u00famero de criaturas que ela pode carregar \u2014 duas para uma criatura Enorme, seis para Colossal. Uma \u00fanica criatura controla a montaria; as outras apenas s\u00e3o deslocadas."
      },
      {
        "cost": "+3 PM",
        "description": "muda a criatura para um aliado montaria mestre. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Ora\u00e7\u00e3o",
    "execution": "padr\u00e3o",
    "duration": "sustentada",
    "description": "Todos os seus aliados no alcance recebem +2 em testes de per\u00edcia e rolagens de dano, e todos os seus inimigos no alcance sofrem \u20132 em testes de per\u00edcia e rolagens de dano. Esses b\u00f4nus e penalidades s\u00e3o cumulativos com outras magias.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta os b\u00f4nus em +1, limitado pelo c\u00edrculo m\u00e1ximo de magia que voc\u00ea pode lan\u00e7ar."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alcance para m\u00e9dio. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Purifica\u00e7\u00e3o",
    "execution": "padr\u00e3o",
    "range": "toque",
    "target": "1 criatura",
    "duration": "instant\u00e2nea",
    "description": "Seu toque purifica a criatura tocada. Esta magia remove uma das seguintes condi\u00e7\u00f5es: abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, envenenado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, ofuscado, paralisado, pasmo ou surdo.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "tamb\u00e9m cura todo o dano causado por venenos."
      },
      {
        "cost": "+2 PM",
        "description": "em vez de uma, remove todas as condi\u00e7\u00f5es listadas."
      },
      {
        "cost": "+3 PM",
        "description": "tamb\u00e9m permite que o alvo solte qualquer item amaldi\u00e7oado que esteja segurando (mas n\u00e3o remove a maldi\u00e7\u00e3o do item em si)."
      }
    ]
  },
  {
    "name": "Raio Solar",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "area": "linha",
    "duration": "instant\u00e2nea",
    "resistence": "Reflexos",
    "description": "Voc\u00ea canaliza uma poderosa rajada de energia positiva que ilumina o campo de batalha. Criaturas na \u00e1rea sofrem 4d8 pontos de dano de luz (ou 4d12, se forem mortos-vivos) e ficam ofuscadas por uma rodada. Se passarem na resist\u00eancia, sofrem metade do dano e n\u00e3o ficam ofuscadas.",
    "enhancements": [
      {
        "cost": "Truque",
        "description": "muda a dura\u00e7\u00e3o para cena e a resist\u00eancia para nenhuma. Em vez do normal, cria um facho de luz, que ilumina a \u00e1rea da magia. Uma vez por rodada, voc\u00ea pode mudar a dire\u00e7\u00e3o do facho como uma a\u00e7\u00e3o livre."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano ou cura em +1d8 (ou +1d12 em mortos-vivos)."
      },
      {
        "cost": "+3 PM",
        "description": "em vez do normal, criaturas vivas a sua escolha na \u00e1rea curam 4d8 pontos de vida; o restante sofre o dano normalmente."
      },
      {
        "cost": "+3 PM",
        "description": "criaturas que falhem na resist\u00eancia ficam cegas por 1d4 rodadas."
      }
    ]
  },
  {
    "name": "Ref\u00fagio",
    "execution": "completa",
    "effect": "domo com 6m de raio",
    "duration": "1 dia",
    "range": "curto",
    "area": "linha",
    "resistence": "Reflexos reduz \u00e0 metade",
    "target": "1 criatura",
    "description": "Voc\u00ea entoa c\u00e2nticos mal\u00e9ficos que amaldi\u00e7oam uma v\u00edtima, criando efeitos variados. Ao lan\u00e7ar a magia, escolha entre os seguintes.\n\n\n\n''Debilidade'': o alvo fica esmorecido e n\u00e3o pode se comunicar ou lan\u00e7ar magias. Ainda reconhece seus aliados e pode segui-los e ajud\u00e1-los, mas sempre de maneira simpl\u00f3ria.\n\n\n\n''Doen\u00e7a'': muda a dura\u00e7\u00e3o para instant\u00e2nea. O alvo contrai uma doen\u00e7a a sua escolha, que o afeta imediatamente (sem per\u00edodo de incuba\u00e7\u00e3o).\n\n\n\n''Fraqueza'': o alvo fica debilitado e lento.\n\n\n\n''Isolamento'': o alvo perde o uso de um de seus cinco sentidos a sua escolha. Se perder a vis\u00e3o, fica cego. Se perder a audi\u00e7\u00e3o, fica surdo. Se perder o olfato ou paladar, n\u00e3o pode usar a habilidade faro. Se perder o tato, fica ca\u00eddo e n\u00e3o pode se levantar.\n\n\n\nVoc\u00ea tamb\u00e9m pode inventar sua pr\u00f3pria maldi\u00e7\u00e3o, usando esses exemplos como sugest\u00f5es, mas o mestre tem a palavra final sobre o efeito.",
    "enhancements": [
      {
        "cost": "+3 PM",
        "description": "em vez do normal, cria uma cabana que comporta at\u00e9 10 criaturas confortavelmente. Descansar nesse espa\u00e7o concede recupera\u00e7\u00e3o de PV e PM igual ao dobro do n\u00edvel. Para todos os efeitos \u00e9 uma cabana normal, com paredes de madeira, telhado, uma porta, duas janelas e alguma mob\u00edlia (camas, uma mesa com bancos e uma lareira). A porta e as janelas t\u00eam 15 PV, RD 5 e s\u00e3o protegidas por um efeito id\u00eantico \u00e0 magia ''Tranca Arcana''. As paredes t\u00eam 200 PV e RD 5."
      },
      {
        "cost": "+3 PM",
        "description": "em vez do normal, cria uma cabana que comporta at\u00e9 10 criaturas M\u00e9dias. Descansar nesse espa\u00e7o concede recupera\u00e7\u00e3o confort\u00e1vel (recupera PV e PM igual ao dobro do n\u00edvel). Para todos os efeitos \u00e9 uma cabana normal, com paredes de madeira, telhado, uma porta, duas janelas e alguma mob\u00edlia (camas, uma mesa com bancos e uma lareira). A porta e as janelas t\u00eam 15 PV, RD 5 e s\u00e3o protegidas por um efeito id\u00eantico \u00e0 magia ''Tranca Arcana''. As paredes t\u00eam 200 PV e RD 5."
      },
      {
        "cost": "+3 PM",
        "description": "em vez do normal, cria um espa\u00e7o extradimensional, similar a uma caverna vazia e escura, que comporta at\u00e9 10 criaturas M\u00e9dias. A entrada para o espa\u00e7o precisa estar desenhada em um objeto fixo como uma grande pedra ou \u00e1rvore. Qualquer criatura que atravesse a entrada consegue entrar no espa\u00e7o. Nenhum efeito a partir do mundo real afeta o espa\u00e7o e vice-versa, mas aqueles que estiverem dentro podem observar o mundo real como se uma janela de 1m estivesse centrada na entrada. Qualquer coisa que esteja no espa\u00e7o extradimensional surge no mundo real na \u00e1rea vazia mais pr\u00f3xima da entrada quando a dura\u00e7\u00e3o da magia acaba. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "em vez do normal, cria uma mans\u00e3o extradimensional que comporta at\u00e9 100 criaturas M\u00e9dias, com quartos luxuosos, comida e bebida e dez servos fantasmag\u00f3ricos (como na magia ''Servos Invis\u00edveis''). Descansar na mans\u00e3o concede recupera\u00e7\u00e3o luxuosa (recupera PV e PM igual ao triplo do n\u00edvel). A mans\u00e3o tem uma \u00fanica entrada, uma porta feita de luz. Voc\u00ea pode deix\u00e1-la vis\u00edvel ou invis\u00edvel como uma a\u00e7\u00e3o livre e apenas criaturas escolhidas por voc\u00ea podem passar. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d6."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o n\u00famero de efeitos que voc\u00ea pode escolher em +1. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda a dura\u00e7\u00e3o para permanente e resist\u00eancia para Fortitude parcial. Se passar, a criatura ainda sofre os efeitos da maldi\u00e7\u00e3o, mas por 1 rodada. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o dano em +2d6."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 objeto que possa ser lido, como um livro, pergaminho ou mapa. A runa explode quando o objeto \u00e9 lido. O objeto tamb\u00e9m sofre o dano (possivelmente sendo destru\u00eddo)."
      },
      {
        "cost": "+1 PM",
        "description": "este aprimoramento exige que voc\u00ea lance uma magia de at\u00e9 2\u00ba c\u00edrculo como parte da execu\u00e7\u00e3o da ''Runa de Prote\u00e7\u00e3o''. Quando a runa \u00e9 ativada, em vez do efeito normal, lan\u00e7a essa magia sobre a criatura que o ativou (se for uma magia de \u00e1rea, a \u00e1rea \u00e9 centrada na criatura)."
      },
      {
        "cost": "+3 PM",
        "description": "como o aprimoramento acima, mas al\u00e9m de lan\u00e7ar a magia, a runa ''tamb\u00e9m'' causa o dano do efeito normal. Voc\u00ea define a ordem que os efeitos acontecem."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alcance para m\u00e9dio."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alvo para voc\u00ea e uma criatura volunt\u00e1ria. Voc\u00ea pode escolher este aprimoramento mais vezes para aumentar o n\u00famero de alvos adicionais em +1, mas deve estar tocando todos os alvos."
      },
      {
        "cost": "+2 PM",
        "description": "muda a execu\u00e7\u00e3o para rea\u00e7\u00e3o. Em vez do normal, voc\u00ea salta para um espa\u00e7o adjacente (1,5m), recebendo +5 na Defesa e em testes de Reflexos contra um ataque ou efeito que esteja prestes a atingi-lo."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alcance para longo."
      },
      {
        "cost": "+1 PM",
        "description": "muda a \u00e1rea para alvo de 1 objeto. Em vez do normal, o alvo emana uma \u00e1rea de sil\u00eancio com 3m de raio. Se lan\u00e7ar a magia num objeto de uma criatura involunt\u00e1ria, ela tem direito a um teste de Vontade para anul\u00e1-la."
      },
      {
        "cost": "+2 PM",
        "description": "muda a dura\u00e7\u00e3o para cena. Em vez do normal, nenhum som pode deixar a \u00e1rea, mas criaturas dentro da \u00e1rea podem falar, ouvir e lan\u00e7ar magias com palavras m\u00e1gicas normalmente."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alcance para pessoal, o alvo para voc\u00ea, a dura\u00e7\u00e3o para cena e a resist\u00eancia para nenhuma. Em vez do normal, seus ataques corpo a corpo passam a acertar inimigos distantes. Seu alcance natural aumenta em 3m; uma criatura M\u00e9dia pode atacar advers\u00e1rios a at\u00e9 4,5m, por exemplo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d6."
      },
      {
        "cost": "+4 PM",
        "description": "aumenta a dist\u00e2ncia do efeito de empurrar em +3m."
      },
      {
        "cost": "+5 PM",
        "description": "muda o tipo do dano para ess\u00eancia."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano de frio em +2d6."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, criaturas que falhem no teste de Fortitude ficam ca\u00eddas."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o tamanho m\u00e1ximo das criaturas afetadas em uma categoria. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o n\u00famero de alvos em +1."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alvo para 1 criatura."
      },
      {
        "cost": "+1 PM",
        "description": "muda a dura\u00e7\u00e3o para sustentada. Al\u00e9m do normal, uma vez por rodada, como uma a\u00e7\u00e3o padr\u00e3o, voc\u00ea pode fazer um rel\u00e2mpago cair sobre um alvo na \u00e1rea, causando 3d8 pontos de dano de eletricidade (Reflexos reduz \u00e0 metade)."
      },
      {
        "cost": "+1 PM",
        "description": "se escolheu causar granizo, muda o dano para 1d6."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1 dado do mesmo tipo."
      },
      {
        "cost": "+3 PM",
        "description": "se escolheu causar chuva, ela revela criaturas e objetos invis\u00edveis na \u00e1rea."
      },
      {
        "cost": "+7 PM",
        "description": "se escolheu causar neve, criaturas na \u00e1rea sofrem 2d6 pontos de dano de frio no in\u00edcio de seus turnos."
      },
      {
        "cost": "+1 PM",
        "description": "como parte da execu\u00e7\u00e3o da magia,\u00a0voc\u00ea pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia, e recupera pontos de vida iguais \u00e0 metade do dano da magia."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d6"
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para pessoal, o alvo para voc\u00ea e a dura\u00e7\u00e3o para cena. Em vez do normal, a cada rodada voc\u00ea pode gastar uma a\u00e7\u00e3o padr\u00e3o para tocar 1 criatura e causar 3d6 pontos de dano. Voc\u00ea recupera pontos de vida iguais \u00e0 metade do dano causado. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alvo para criaturas no alcance. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alcance para pessoal e o alvo para voc\u00ea. Voc\u00ea acelera sua mente, al\u00e9m do seu corpo. A a\u00e7\u00e3o adicional pode ser usada para lan\u00e7ar magias e ativar engenhocas. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+3 PM",
        "description": "o objeto tamb\u00e9m oferece o mesmo b\u00f4nus em testes de resist\u00eancia. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "aumenta o b\u00f4nus em +1."
      },
      {
        "cost": "+7 PM",
        "description": "o objeto tamb\u00e9m oferece resist\u00eancia a dano 5. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+1 PM",
        "description": "voc\u00ea concede um pouco de vida a um cad\u00e1ver, suficiente para que ele responda a suas perguntas. O conhecimento do corpo \u00e9 limitado ao que ele tinha enquanto vivo e suas respostas s\u00e3o curtas e enigm\u00e1ticas. Um corpo s\u00f3 pode ser alvo desta magia uma vez. Ela tamb\u00e9m n\u00e3o funciona em um corpo cuja cabe\u00e7a tenha sido destru\u00edda."
      },
      {
        "cost": "+1 PM",
        "description": "voc\u00ea pode falar com plantas (normais ou monstruosas) e rochas. Plantas e rochas t\u00eam percep\u00e7\u00e3o limitada de seus arredores e normalmente fornecem respostas simpl\u00f3rias."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para m\u00e9dio, a \u00e1rea para c\u00edrculo de 3m de raio e o alvo para criaturas escolhidas."
      },
      {
        "cost": "+2 PM",
        "description": "muda o efeito para criar um fio de energia cor de esmeralda que prende o alvo a um ponto no espa\u00e7o dentro do alcance. O ponto precisa ser fixo, mas n\u00e3o precisa de nenhum apoio ou superf\u00edcie (pode simplesmente flutuar no ar). O alvo n\u00e3o pode se afastar mais de 3m do ponto, nem fisicamente, nem com movimento planar. O fio possui 20 PV e resist\u00eancia a dano 30 (mas pode ser dissipado por efeitos que libertam criaturas, como o Julgamento da Liberdade do [[Paladino T20|Paladino]])."
      },
      {
        "cost": "+4 PM",
        "description": "como acima, mas em vez de um fio, cria uma corrente de energia, com 20 PV e resist\u00eancia a dano 40."
      },
      {
        "cost": "+4 PM",
        "description": "muda o alvo para \u00e1rea de cubo de 9m, a dura\u00e7\u00e3o para permanente e adiciona componente material (chave de esmeralda no valor de T$ 2.000). Em vez do normal, nenhum tipo de movimento planar pode entrar ou sair da \u00e1rea."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o b\u00f4nus na Defesa em +1."
      },
      {
        "cost": "+4 PM",
        "description": "muda o c\u00edrculo m\u00e1ximo de magias dissipadas para 4\u00ba."
      },
      {
        "cost": "+9 PM",
        "description": "muda o c\u00edrculo m\u00e1ximo de magias dissipadas para 5\u00ba."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o n\u00famero de alvos em +1."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o dano de fogo em +1d6."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o dano de eletricidade em +1d6."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o n\u00famero de dados de aux\u00edlio em +2."
      },
      {
        "cost": "+4 PM",
        "description": "muda o tipo dos dados de aux\u00edlio para d6."
      },
      {
        "cost": "+8 PM",
        "description": "muda o tipo dos dados de aux\u00edlio para d8."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o n\u00famero de dados de aux\u00edlio em +1."
      },
      {
        "cost": "+8 PM",
        "description": "Muda os dados de aux\u00edlio para d12. Sempre que rolar um resultado 12 num desses d12, a entidade \u201csuga\u201d 2 PM de voc\u00ea. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d8."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o n\u00famero de cubos de 1,5m em +2."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alcance para pessoal, o alvo para voc\u00ea e a dura\u00e7\u00e3o para 1 dia. Voc\u00ea e seu equipamento fundem-se a uma superf\u00edcie ou objeto adjacente feito de pedra, terra, argila ou areia que possa acomod\u00e1-lo. Voc\u00ea pode voltar ao espa\u00e7o adjacente como uma a\u00e7\u00e3o livre, dissipando a magia. Enquanto mesclado, voc\u00ea n\u00e3o pode falar ou fazer a\u00e7\u00f5es f\u00edsicas, mas consegue perceber seus arredores normalmente. Pequenos danos n\u00e3o o afetam, mas se o objeto (ou o trecho onde voc\u00ea est\u00e1 imerso) for destru\u00eddo, a magia \u00e9 dissipada, voc\u00ea volta a um espa\u00e7o livre adjacente e sofre 10d6 pontos de dano de impacto."
      },
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, at\u00e9 1 hora depois que lan\u00e7ou a magia, voc\u00ea pode gastar uma a\u00e7\u00e3o de movimento para enviar o objeto de volta para o local em que ele estava antes."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alvo para um ba\u00fa M\u00e9dio, a dura\u00e7\u00e3o para permanente e adiciona sacrif\u00edcio de 1 PM. Em vez do normal, voc\u00ea esconde o ba\u00fa alvo no Et\u00e9reo, com at\u00e9 250kg de equipamento. A magia faz com que qualquer objeto caiba no ba\u00fa, independentemente do seu tamanho. Uma vez escondido, voc\u00ea pode convocar o ba\u00fa para um espa\u00e7o livre adjacente, ou de volta para o Et\u00e9reo, como uma a\u00e7\u00e3o padr\u00e3o. ''Componente material:'' ba\u00fa constru\u00eddo com mat\u00e9ria-prima da melhor qualidade (T$ 1.000). Voc\u00ea deve ter em m\u00e3os uma miniatura do ba\u00fa, no valor de T$ 100, para invocar o ba\u00fa verdadeiro."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o n\u00famero de alvos em +1."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o peso limite do alvo em um fator de 10, at\u00e9 500 kg. Um objeto muito grande ou pesado para aparecer em suas m\u00e3os \u00e9 teletransportado para um espa\u00e7o adjacente a sua escolha."
      },
      {
        "cost": "+4 PM",
        "description": "muda o alvo para 1 escultura mundana inanimada. Al\u00e9m do normal, o alvo tem as mesmas caracter\u00edsticas de um construto."
      },
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para permanente e adiciona sacrif\u00edcio de 1 PM."
      },
      {
        "cost": "+4 PM",
        "description": "muda o alvo para \u00e1rea de cubo de 9m. Qualquer criatura ou objeto na \u00e1rea recebe o efeito da magia enquanto estiver dentro dela."
      },
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 semana."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o b\u00f4nus nas resist\u00eancias em +1."
      },
      {
        "cost": "+4 PM",
        "description": "muda o alcance para curto, a \u00e1rea para alvo 1 criatura e a dura\u00e7\u00e3o para cena. O alvo fica imune a efeitos de necromancia e trevas."
      },
      {
        "cost": "+4 PM",
        "description": "muda o c\u00edrculo m\u00e1ximo de magias dissipadas para 4\u00ba. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, uma criatura que falhe no teste de Reflexos fica agarrada (o enxame escala e cobre o corpo dela). A criatura pode gastar uma a\u00e7\u00e3o padr\u00e3o e fazer um teste de Acrobacia ou Atletismo para escapar. Se voc\u00ea mover o enxame, a criatura fica livre."
      },
      {
        "cost": "+2 PM",
        "description": "muda o tipo de dano para trevas."
      },
      {
        "cost": "+3 PM",
        "description": "o enxame vira Enorme (quadrado de 6m de lado)."
      },
      {
        "cost": "+3 PM",
        "description": "o enxame ganha deslocamento de voo 18m e passa a ocupar um cubo ao inv\u00e9s de um quadrado."
      },
      {
        "cost": "+4 PM",
        "description": "o enxame inclui parasitas inchados que explodem e criam novos enxames. No in\u00edcio de cada um de seus turnos, role 1d6. Em um resultado 5 ou 6, um novo enxame surge adjacente a um j\u00e1 existente \u00e0 sua escolha. Voc\u00ea pode mover todos os enxames com uma \u00fanica a\u00e7\u00e3o de movimento, mas eles n\u00e3o podem ocupar o mesmo espa\u00e7o. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o dano de frio em +2d6 e o dano de corte em +2d6."
      },
      {
        "cost": "+4 PM",
        "description": "muda a \u00e1rea para cilindro com 6m de raio e 6m de altura e a dura\u00e7\u00e3o para sustentada. Em vez do normal, a magia cria uma tempestade de granizo que causa 3d6 pontos de dano de impacto e 3d6 pontos de dano de frio em todas as criaturas na \u00e1rea (sem teste de resist\u00eancia). A tempestade fornece camuflagem a todas as criaturas dentro dela e deixa o piso escorregadio. Piso escorregadio conta como terreno dif\u00edcil e obriga criaturas na \u00e1rea a fazer testes de Acrobacia para equil\u00edbrio (veja a p\u00e1gina [[Per\u00edcias T20|Per\u00edcias]]). Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d6."
      },
      {
        "cost": "+9 PM",
        "description": "muda alvo para criaturas escolhidas. Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "muda o efeito para afetar magias de at\u00e9 3\u00ba c\u00edrculo. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "muda o efeito para afetar magias de at\u00e9 4\u00ba c\u00edrculo. Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d6. O aumento pode ser de um novo tipo de dano, desde que explicado pela ilus\u00e3o."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o n\u00famero de alvos em +1."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alvo para 1 criatura. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o dano inicial em +2d6 e o dano do efeito em chamas em +1d6."
      },
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para cena ou at\u00e9 ser descarregada. Em vez do efeito normal, a magia cria quatro dardos de lava que flutuam ao lado do conjurador. Uma vez por rodada, como uma a\u00e7\u00e3o livre, voc\u00ea pode disparar um dos dardos em uma criatura, causando o efeito normal da magia. Requer 4\u00ba C\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "al\u00e9m do normal, pode alterar a apar\u00eancia de criaturas escolhidas na \u00e1rea, como se usando ''Disfarce Ilus\u00f3rio''."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque, a dura\u00e7\u00e3o para permanente e adiciona penalidade de \u20131 PM. Em vez do normal, voc\u00ea inscreve uma marca (como uma tatuagem) na pele do alvo e escolhe um tipo de a\u00e7\u00e3o que ativar\u00e1 a marca. Normalmente, ser\u00e1 cometer um crime (roubar, matar...) ou outra coisa contr\u00e1ria \u00e0s Obriga\u00e7\u00f5es & Restri\u00e7\u00f5es de sua divindade. Sempre que a marca \u00e9 ativada, o alvo recebe uma penalidade cumulativa de \u20132 em todos os testes. Muitas vezes, portar essa marca \u00e9 um estigma por si s\u00f3, j\u00e1 que esta magia normalmente \u00e9 lan\u00e7ada em criminosos ou traidores. ''Dissipar Magia'' suprime a marca e suas penalidades por um dia; elas s\u00f3 podem ser totalmente removidas pelo conjurador original ou pela magia ''Purifica\u00e7\u00e3o''."
      },
      {
        "cost": "+4 PM",
        "description": "aumenta a dura\u00e7\u00e3o para 1 ano ou at\u00e9 ser descarregada."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o comprimento em +15m e altura em +3m, at\u00e9 60m de comprimento e 9m de altura."
      },
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para sustentada e adiciona uma nova escolha, ''Ess\u00eancia:'' A muralha \u00e9 invis\u00edvel e indestrut\u00edvel \u2014 imune a qualquer forma de dano e n\u00e3o afetada por nenhuma magia. Ela n\u00e3o pode ser atravessada nem mesmo por criaturas incorp\u00f3reas. No entanto, magias que teletransportam criaturas, como ''Salto Dimensional'', podem atravess\u00e1-la. Magias e efeitos de dano, como ''Bola de Fogo'' e o sopro de um drag\u00e3o, n\u00e3o vencem a muralha, mas magias lan\u00e7adas diretamente sobre uma criatura ou \u00e1rea, como Sono, podem ser lan\u00e7adas contra alvos que estejam no outro lado como se tivessem linha de efeito. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia."
      },
      {
        "cost": "+4 PM",
        "description": "sua pele ganha aspecto e dureza do a\u00e7o. Voc\u00ea recebe resist\u00eancia a dano 10. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "muda o alcance para toque, o alvo para 1 criatura, a dura\u00e7\u00e3o para 1d4 rodadas e adiciona Resist\u00eancia: Fortitude anula. Em vez do efeito normal, a magia transforma o alvo e seu equipamento em uma est\u00e1tua inerte e sem consci\u00eancia. A est\u00e1tua possui os mesmos PV da criatura e resist\u00eancia a dano 8; se for quebrada, a criatura morrer\u00e1. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "como acima, mas com dura\u00e7\u00e3o permanente. Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em 1d8+4."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a resist\u00eancia a dano em +2."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura. A magia falha se o alvo n\u00e3o seguir a mesma divindade que voc\u00ea."
      },
      {
        "cost": "+4 PM",
        "description": "muda o b\u00f4nus para +10. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "em vez do normal, o alvo fica imune a duas escolas de magia a sua escolha. Requer 5\u00ba C\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "muda o alcance para curto e o alvo para criaturas dentro do alcance. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia ou at\u00e9 ser descarregada. O esp\u00edrito realiza uma tarefa a sua escolha que exija at\u00e9 um dia, e aumenta o custo do pagamento para T$ 500. O resto segue normal."
      },
      {
        "cost": "+9 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 semana ou at\u00e9 ser descarregada. O esp\u00edrito realiza uma tarefa que exija at\u00e9 uma semana. O custo do pagamento aumenta para T$ 1.000. O resto segue normal."
      },
      {
        "cost": "+3 PM",
        "description": "muda o componente material para p\u00f3 de \u00f4nix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria um carni\u00e7al. Ele pode funcionar como um aliado veterano, escolhido entre ajudante, atirador, combatente, fort\u00e3o ou guardi\u00e3o. O resto segue normal."
      },
      {
        "cost": "+3 PM",
        "description": "muda o componente material para p\u00f3 de \u00f4nix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria uma sombra. Ela pode funcionar como um aliado veterano, escolhido entre assassino, combatente ou perseguidor. O restante da magia segue normal."
      },
      {
        "cost": "+7 PM",
        "description": "muda o componente material para ferramentas de embalsamar (T$ 1.000). Em vez de um zumbi ou esqueleto, cria uma m\u00famia. Ela pode funcionar como um aliado mestre, escolhido entre ajudante, destruidor, guardi\u00e3o ou m\u00e9dico. O restante da magia segue normal. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a quantidade de cura em 1d8+2."
      },
      {
        "cost": "+4 PM",
        "description": "al\u00e9m do normal, se um aliado estiver com PV negativos, seus PV s\u00e3o levados a 0 e ent\u00e3o a cura \u00e9 aplicada."
      },
      {
        "cost": "+4 PM",
        "description": "remove todas as condi\u00e7\u00f5es listadas, em vez de apenas uma."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o limite de peso em 100kg."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o n\u00famero de alvos em +5."
      },
      {
        "cost": "+2 PM",
        "description": "em vez do normal, a magia teletransporta os alvos para seu santu\u00e1rio \u2014 um local familiar e previamente preparado. A magia pode ser usada sem limite de dist\u00e2ncia ou necessidade de testes, mas apenas dentro do mesmo plano. Preparar um local como seu santu\u00e1rio exige um ritual de um dia e o gasto de T$ 1.000. Voc\u00ea s\u00f3 pode ter um santu\u00e1rio por vez."
      },
      {
        "cost": "+9 PM",
        "description": "muda a execu\u00e7\u00e3o para a\u00e7\u00e3o completa, a dura\u00e7\u00e3o para cena e adiciona sacrif\u00edcio de 1 PM. Em vez do normal, voc\u00ea cria um c\u00edrculo de 1,5m de di\u00e2metro no ch\u00e3o, que transporta qualquer criatura que pisar nele. O destino \u00e9 escolhido quando a magia \u00e9 lan\u00e7ada e pode ser qualquer lugar, em qualquer mundo, sem a necessidade de testes, desde que seja conhecido por voc\u00ea. O c\u00edrculo \u00e9 t\u00eanue e praticamente invis\u00edvel. Voc\u00ea pode marc\u00e1-lo de alguma forma (por exemplo, lan\u00e7ando-o sobre uma plataforma elevada). Se n\u00e3o fizer isso, algu\u00e9m pode pisar nele por acidente. Junte isso a um destino hostil e voc\u00ea ter\u00e1 uma armadilha bastante eficaz! Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o raio da \u00e1rea em +3m."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano dos tent\u00e1culos em +2d6."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta os b\u00f4nus na Defesa, testes de ataque e rolagens de dano corpo a corpo em +1, e os PV tempor\u00e1rios em +10."
      },
      {
        "cost": "+2 PM",
        "description": "adiciona componente material (uma barra de adamante no valor de T$ 100). Sua forma de combate ganha um aspecto met\u00e1lico e sem express\u00f5es. Voc\u00ea recebe resist\u00eancia a dano 15/adamante e imunidade a atordoamento, dano n\u00e3o letal, doen\u00e7as, encantamento, fadiga, paralisia, necromancia, sangramento, sono, veneno e n\u00e3o precisa respirar."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque, o alvo para at\u00e9 cinco criaturas e a dura\u00e7\u00e3o para instant\u00e2nea. Os alvos entram em uma planta (de tamanho M\u00e9dio ou maior) e saem em outra planta do mesmo tamanho a at\u00e9 100km de dist\u00e2ncia, especificada em dire\u00e7\u00e3o e dist\u00e2ncia aproximadas (como \u201c50km ao norte\u201d)."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura."
      },
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "muda o alcance para curto e o alvo para at\u00e9 10 criaturas. Requer 4\u00b0 c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para cone de 4,5m e o alvo para criaturas na \u00e1rea."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a regenera\u00e7\u00e3o de PV em 1d8+1."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d6 (+2d8 contra mortos-vivos)."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a \u00e1rea em +6m de raio."
      },
      {
        "cost": "+5 PM",
        "description": "a luz purificadora do Deus-Sol dissipa todas as magias de necromancia ativas na \u00e1rea. Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+5 PM",
        "description": "o elemental muda para Enorme e recebe dois tipos de aliado indicados no seu elemento."
      },
      {
        "cost": "+5 PM",
        "description": "voc\u00ea convoca um elemental de cada tipo. Voc\u00ea pode ordenar que cada elemental auxilie voc\u00ea ou seus aliados. Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "como normal, mas voc\u00ea pode escolher um tipo de criaturas sem limita\u00e7\u00e3o (todos os animais, todos os monstros etc.)."
      },
      {
        "cost": "+8 PM",
        "description": "muda a dura\u00e7\u00e3o para sustentada. Al\u00e9m do normal, qualquer ataque, magia ou habilidade de uma criatura afetada \u00e9 desviado pelo efeito e n\u00e3o o atinge. Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "aumenta o dano total em +2d12 e o dano m\u00ednimo em +1d12."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para toque e o alvo para at\u00e9 5 criaturas volunt\u00e1rias que estejam de m\u00e3os dadas. Depois que a magia \u00e9 lan\u00e7ada, as criaturas podem soltar as m\u00e3os. Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, o alvo pode caminhar sobre a \u00e1gua ou outros l\u00edquidos com seu deslocamento normal. Entretanto, isso n\u00e3o protege contra qualquer efeito que o l\u00edquido possa causar (o alvo pode andar sobre lava, mas ainda vai sofrer dano)."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, o alvo pode escolher 20 em todos os testes de Atletismo."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, o alvo pode escolher 20 em todos os testes de Acrobacia e pode fazer todas as manobras desta per\u00edcia mesmo sem treinamento."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para curto e o alvo para at\u00e9 5 criaturas."
      },
      {
        "cost": "+5 PM",
        "description": "pode dissipar ''Aprisionamento''."
      },
      {
        "cost": "+5 PM",
        "description": "al\u00e9m do normal, o alvo tamb\u00e9m pode morrer por perda de PV ou se voc\u00ea morrer (um teste de Fortitude anula a morte)."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o b\u00f4nus dos testes em +5, e o dano de impacto em +1d6+6."
      },
      {
        "cost": "+5 PM",
        "description": "o muro \u00e9 feito de uma massa de esqueletos animados. Quando voc\u00ea lan\u00e7a a magia e no in\u00edcio de cada um de seus turnos, todos os inimigos adjacentes \u00e0 muralha sofrem 4d8 pontos de dano de corte e devem fazer um teste de Reflexos. Se falharem, s\u00e3o agarrados pela muralha. Uma criatura agarrada pode gastar uma a\u00e7\u00e3o padr\u00e3o para fazer um teste de Acrobacia ou Atletismo para se soltar."
      },
      {
        "cost": "+3 PM",
        "description": "muda a execu\u00e7\u00e3o para rea\u00e7\u00e3o, o alcance para curto, o alvo para 1 criatura e a dura\u00e7\u00e3o para instant\u00e2nea. Esta magia s\u00f3 pode ser usada em uma criatura que tenha acabado de fazer um teste. Obriga a criatura a fazer uma nova rolagem de dados e aceitar o novo resultado, seja ele um sucesso ou falha. Criaturas involunt\u00e1rias t\u00eam direito a um teste de Vontade para negar o efeito."
      },
      {
        "cost": "+5 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para \u00e1rea de explos\u00e3o de 6m de raio. Em vez de um raio, voc\u00ea dispara uma esfera de gelo que explode, causando o efeito da magia em todas as criaturas na \u00e1rea."
      }
    ]
  },
  {
    "name": "Rel\u00e2mpago",
    "execution": "completa",
    "range": "m\u00e9dio",
    "effect": "1 enxame M\u00e9dio",
    "duration": "sustentada",
    "resistence": "Fortitude reduz \u00e0 metade",
    "target": "1 criatura ou objeto",
    "area": "c\u00edrculo com 90m de raio",
    "description": "Esta magia pode encontrar uma criatura ou objeto a sua escolha. Voc\u00ea pode pensar em termos gerais (\u201cum elfo\u201d, \u201calgo de metal\u201d) ou espec\u00edficos (\u201cGwen, a elfa\u201d, \u201cuma espada longa\u201d). A magia indica a dire\u00e7\u00e3o e dist\u00e2ncia da criatura ou objeto mais pr\u00f3ximo desse tipo, caso esteja ao alcance. Voc\u00ea pode movimentar-se para continuar procurando. Procurar algo muito espec\u00edfico (\u201ca espada longa encantada do Bar\u00e3o Rulyn\u201d) exige que voc\u00ea tenha em mente uma imagem precisa do objeto; caso a imagem n\u00e3o seja muito pr\u00f3xima da verdade, a magia falha, mas voc\u00ea gasta os PM mesmo assim. Esta magia pode ser bloqueada por uma fina camada de chumbo.",
    "enhancements": [
      {
        "cost": "+12 PM",
        "description": "muda a \u00e1rea para esfera com 9m de raio. Em vez do normal, cria um efeito de disjun\u00e7\u00e3o. Todas as magias na \u00e1rea s\u00e3o automaticamente dissipadas e todos os itens m\u00e1gicos na \u00e1rea, exceto aqueles que voc\u00ea estiver carregando, viram itens mundanos (com direito a um teste de resist\u00eancia para evitar esse efeito). Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d12."
      },
      {
        "cost": "+3 PM",
        "description": "muda a resist\u00eancia para Reflexos reduz \u00e0 metade e o enxame para criaturas maiores, como gatos, guaxinins, compsognatos ou kobolds. Ele causa 3d12 pontos de dano (a sua escolha entre corte, impacto ou perfura\u00e7\u00e3o). O resto da magia segue normal."
      },
      {
        "cost": "+5 PM",
        "description": "aumenta o n\u00famero de enxames em +1. Eles n\u00e3o podem ocupar o mesmo espa\u00e7o. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda a resist\u00eancia para Reflexos reduz \u00e0 metade e o enxame para criaturas elementais. Ele causa 5d12 pontos do dano (a sua escolha entre \u00e1cido, eletricidade, fogo ou frio). O resto da magia segue normal. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o n\u00famero de alvos em +1. Todas as criaturas e objetos devem ser afetados da mesma forma."
      },
      {
        "cost": "+3 PM",
        "description": "em vez do normal, o alvo recebe +4 nos tr\u00eas atributos f\u00edsicos. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas."
      },
      {
        "cost": "+7 PM",
        "description": "aumenta o b\u00f4nus em +2. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, se o alvo coberto pelo muco \u00e1cido estiver usando armadura ou escudo, o item \u00e9 corro\u00eddo. Isso reduz o b\u00f4nus na Defesa do item em 1 ponto permanentemente. O item pode ser consertado, restaurando seu b\u00f4nus (veja a per\u00edcia Of\u00edcio, na p\u00e1gina [[Per\u00edcias T20|Per\u00edcias]])."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano inicial e o dano por rodada em +1d6."
      },
      {
        "cost": "+1 PM",
        "description": "muda a execu\u00e7\u00e3o para a\u00e7\u00e3o padr\u00e3o, o alcance para toque e o alvo para 1 criatura ou 1 objeto."
      },
      {
        "cost": "+3 PM",
        "description": "muda a dura\u00e7\u00e3o para cena. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+3 PM",
        "description": "muda a dura\u00e7\u00e3o para sustentada. Em vez do normal, o alvo gera uma esfera de invisibilidade. O alvo e todas as criaturas a at\u00e9 3m dele se tornam invis\u00edveis, como no efeito normal da magia (ainda ficam vis\u00edveis caso fa\u00e7am uma a\u00e7\u00e3o hostil). A esfera se move juntamente com o alvo; qualquer coisa que saia da esfera fica vis\u00edvel. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alvo para 1 criatura. Em vez do normal, voc\u00ea cria um elo mental que permite que voc\u00ea veja e ou\u00e7a atrav\u00e9s dos sentidos da criatura, se gastar uma a\u00e7\u00e3o de movimento. Uma criatura involunt\u00e1ria pode fazer um teste de Vontade para suprimir a magia por uma hora. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "Truque",
        "description": "muda a \u00e1rea para alvo voc\u00ea. Em vez do normal, voc\u00ea sabe onde fica o norte e recebe +5 em testes de Sobreviv\u00eancia para se orientar."
      },
      {
        "cost": "+5 PM",
        "description": "aumenta a \u00e1rea em um fator de 10 (90m para 900m, 900m para 9km, e assim por diante)."
      },
      {
        "cost": "+3 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia. Se n\u00e3o estiver em combate, a criatura s\u00f3 pode fazer o teste de Vontade a cada hora. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+3 PM",
        "description": "sempre que o alvo fizer o teste de Vontade e falhar, a marca causa 3d6 pontos de dano mental. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+3 PM",
        "description": "em vez do normal, o alvo recebe +4 nos tr\u00eas atributos mentais. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alcance para curto e o alvo para criaturas escolhidas."
      },
      {
        "cost": "+7 PM",
        "description": "aumenta o b\u00f4nus em +2. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+1 PM",
        "description": "a forma escolhida recebe uma habilidade de sentidos entre faro, vis\u00e3o na penumbra e vis\u00e3o no escuro."
      },
      {
        "cost": "+3 PM",
        "description": "a forma escolhida recebe percep\u00e7\u00e3o \u00e0s cegas. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alcance para toque, o alvo para 1 criatura e adiciona resist\u00eancia (Vontade anula)."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alcance para m\u00e9dio, o alvo para 1 criatura e a resist\u00eancia para Vontade anula. Em vez do normal, transforma o alvo em uma criatura ou objeto inofensivo (ovelha, sapo, galinha, pudim de ameixa etc.). A criatura n\u00e3o pode atacar, falar e lan\u00e7ar magias; seu deslocamento vira 3m e sua Defesa vira 10. Suas outras caracter\u00edsticas n\u00e3o mudam. No in\u00edcio de seus turnos, o alvo pode fazer um teste de Vontade; se passar, retorna \u00e0 sua forma normal e a magia termina. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "se mudar para formas n\u00e3o humanoides, pode escolher uma Forma Selvagem Superior. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+12 PM",
        "description": "al\u00e9m do normal, no in\u00edcio de seus turnos o alvo pode mudar de forma novamente, como uma a\u00e7\u00e3o livre, fazendo novas escolhas. Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "Truque",
        "description": "muda o alcance para toque, a \u00e1rea para alvo (1 criatura com 0 PV ou menos), a dura\u00e7\u00e3o para instant\u00e2nea e a resist\u00eancia para Fortitude anula. Em vez do normal, voc\u00ea canaliza o ''Miasma'' contra uma v\u00edtima. Se falhar na resist\u00eancia, ela morre e voc\u00ea recebe +2 na CD de suas magias por 1 dia. Se passar, fica imune a este truque por um dia."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d6."
      },
      {
        "cost": "+3 PM",
        "description": "muda o tipo do dano para trevas."
      },
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, criaturas do tipo animal em alcance curto da montaria devem fazer um teste de Vontade. Se passarem, ficam abaladas pela cena; se falharem, ficam apavoradas por 1d4 rodadas, depois abaladas pela cena."
      },
      {
        "cost": "+3 PM",
        "description": "muda a dura\u00e7\u00e3o para permanente e adiciona sacrif\u00edcio de 1 PM."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o tamanho da montaria em uma categoria. Isso tamb\u00e9m aumenta o n\u00famero de criaturas que ela pode carregar \u2014 duas para uma criatura Enorme, seis para Colossal. Uma \u00fanica criatura controla a montaria; as outras apenas s\u00e3o deslocadas."
      },
      {
        "cost": "+3 PM",
        "description": "muda a criatura para um aliado montaria mestre. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta os b\u00f4nus em +1, limitado pelo c\u00edrculo m\u00e1ximo de magia que voc\u00ea pode lan\u00e7ar."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alcance para m\u00e9dio. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "tamb\u00e9m cura todo o dano causado por venenos."
      },
      {
        "cost": "+2 PM",
        "description": "em vez de uma, remove todas as condi\u00e7\u00f5es listadas."
      },
      {
        "cost": "+3 PM",
        "description": "tamb\u00e9m permite que o alvo solte qualquer item amaldi\u00e7oado que esteja segurando (mas n\u00e3o remove a maldi\u00e7\u00e3o do item em si)."
      },
      {
        "cost": "Truque",
        "description": "muda a dura\u00e7\u00e3o para cena e a resist\u00eancia para nenhuma. Em vez do normal, cria um facho de luz, que ilumina a \u00e1rea da magia. Uma vez por rodada, voc\u00ea pode mudar a dire\u00e7\u00e3o do facho como uma a\u00e7\u00e3o livre."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano ou cura em +1d8 (ou +1d12 em mortos-vivos)."
      },
      {
        "cost": "+3 PM",
        "description": "em vez do normal, criaturas vivas a sua escolha na \u00e1rea curam 4d8 pontos de vida; o restante sofre o dano normalmente."
      },
      {
        "cost": "+3 PM",
        "description": "criaturas que falhem na resist\u00eancia ficam cegas por 1d4 rodadas."
      },
      {
        "cost": "+3 PM",
        "description": "em vez do normal, cria uma cabana que comporta at\u00e9 10 criaturas confortavelmente. Descansar nesse espa\u00e7o concede recupera\u00e7\u00e3o de PV e PM igual ao dobro do n\u00edvel. Para todos os efeitos \u00e9 uma cabana normal, com paredes de madeira, telhado, uma porta, duas janelas e alguma mob\u00edlia (camas, uma mesa com bancos e uma lareira). A porta e as janelas t\u00eam 15 PV, RD 5 e s\u00e3o protegidas por um efeito id\u00eantico \u00e0 magia ''Tranca Arcana''. As paredes t\u00eam 200 PV e RD 5."
      },
      {
        "cost": "+3 PM",
        "description": "em vez do normal, cria uma cabana que comporta at\u00e9 10 criaturas M\u00e9dias. Descansar nesse espa\u00e7o concede recupera\u00e7\u00e3o confort\u00e1vel (recupera PV e PM igual ao dobro do n\u00edvel). Para todos os efeitos \u00e9 uma cabana normal, com paredes de madeira, telhado, uma porta, duas janelas e alguma mob\u00edlia (camas, uma mesa com bancos e uma lareira). A porta e as janelas t\u00eam 15 PV, RD 5 e s\u00e3o protegidas por um efeito id\u00eantico \u00e0 magia ''Tranca Arcana''. As paredes t\u00eam 200 PV e RD 5."
      },
      {
        "cost": "+3 PM",
        "description": "em vez do normal, cria um espa\u00e7o extradimensional, similar a uma caverna vazia e escura, que comporta at\u00e9 10 criaturas M\u00e9dias. A entrada para o espa\u00e7o precisa estar desenhada em um objeto fixo como uma grande pedra ou \u00e1rvore. Qualquer criatura que atravesse a entrada consegue entrar no espa\u00e7o. Nenhum efeito a partir do mundo real afeta o espa\u00e7o e vice-versa, mas aqueles que estiverem dentro podem observar o mundo real como se uma janela de 1m estivesse centrada na entrada. Qualquer coisa que esteja no espa\u00e7o extradimensional surge no mundo real na \u00e1rea vazia mais pr\u00f3xima da entrada quando a dura\u00e7\u00e3o da magia acaba. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "em vez do normal, cria uma mans\u00e3o extradimensional que comporta at\u00e9 100 criaturas M\u00e9dias, com quartos luxuosos, comida e bebida e dez servos fantasmag\u00f3ricos (como na magia ''Servos Invis\u00edveis''). Descansar na mans\u00e3o concede recupera\u00e7\u00e3o luxuosa (recupera PV e PM igual ao triplo do n\u00edvel). A mans\u00e3o tem uma \u00fanica entrada, uma porta feita de luz. Voc\u00ea pode deix\u00e1-la vis\u00edvel ou invis\u00edvel como uma a\u00e7\u00e3o livre e apenas criaturas escolhidas por voc\u00ea podem passar. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d6."
      }
    ]
  },
  {
    "name": "Rogar Maldi\u00e7\u00e3o",
    "execution": "padr\u00e3o",
    "range": "curto",
    "target": "1 criatura",
    "duration": "sustentada",
    "resistence": "Fortitude anula",
    "description": "Voc\u00ea entoa c\u00e2nticos mal\u00e9ficos que amaldi\u00e7oam uma v\u00edtima, criando efeitos variados. Ao lan\u00e7ar a magia, escolha entre os seguintes.\n\n\n\n''Debilidade'': o alvo fica esmorecido e n\u00e3o pode se comunicar ou lan\u00e7ar magias. Ainda reconhece seus aliados e pode segui-los e ajud\u00e1-los, mas sempre de maneira simpl\u00f3ria.\n\n\n\n''Doen\u00e7a'': muda a dura\u00e7\u00e3o para instant\u00e2nea. O alvo contrai uma doen\u00e7a a sua escolha, que o afeta imediatamente (sem per\u00edodo de incuba\u00e7\u00e3o).\n\n\n\n''Fraqueza'': o alvo fica debilitado e lento.\n\n\n\n''Isolamento'': o alvo perde o uso de um de seus cinco sentidos a sua escolha. Se perder a vis\u00e3o, fica cego. Se perder a audi\u00e7\u00e3o, fica surdo. Se perder o olfato ou paladar, n\u00e3o pode usar a habilidade faro. Se perder o tato, fica ca\u00eddo e n\u00e3o pode se levantar.\n\n\n\nVoc\u00ea tamb\u00e9m pode inventar sua pr\u00f3pria maldi\u00e7\u00e3o, usando esses exemplos como sugest\u00f5es, mas o mestre tem a palavra final sobre o efeito.",
    "enhancements": [
      {
        "cost": "+3 PM",
        "description": "aumenta o n\u00famero de efeitos que voc\u00ea pode escolher em +1. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda a dura\u00e7\u00e3o para permanente e resist\u00eancia para Fortitude parcial. Se passar, a criatura ainda sofre os efeitos da maldi\u00e7\u00e3o, mas por 1 rodada. Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Runa de Prote\u00e7\u00e3o",
    "execution": "completa",
    "target": "1 objeto ou passagem de at\u00e9 6m de largura",
    "duration": "permanente at\u00e9 ser descarregada",
    "resistence": "nenhum ou Reflexos reduz \u00e0 metade",
    "description": "Esta magia protege um objeto que possa ser aberto ou uma passagem de at\u00e9 6m de largura. Quando uma criatura abre o objeto ou passa pela passagem, a runa explode, causando 6d6 pontos de dano em todos os alvos a at\u00e9 3m. A criatura que ativa a runa n\u00e3o tem direito a teste de resist\u00eancia; outras criaturas na \u00e1rea t\u00eam direito a um teste de Reflexos para reduzir o dano \u00e0 metade. Quando lan\u00e7a a magia, voc\u00ea escolhe o tipo de dano, entre \u00e1cido, eletricidade, fogo, frio, luz ou trevas.\n\n\n\nVoc\u00ea pode determinar que a runa se ative apenas em condi\u00e7\u00f5es espec\u00edficas \u2014 por exemplo, apenas por goblins ou apenas por mortos-vivos. Voc\u00ea tamb\u00e9m pode criar uma palavra m\u00e1gica que impe\u00e7a a runa de se ativar.\n\n\n\nUm personagem pode encontrar a runa com um teste de Investiga\u00e7\u00e3o e desarm\u00e1-la com um teste de Ladinagem (ambos CD 28).\n\n\n\n''Componente material'': p\u00f3 de diamante no valor de T$ 200, com o qual o conjurador desenha a runa, que brilha por alguns instantes e depois se torna praticamente invis\u00edvel.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o dano em +2d6."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 objeto que possa ser lido, como um livro, pergaminho ou mapa. A runa explode quando o objeto \u00e9 lido. O objeto tamb\u00e9m sofre o dano (possivelmente sendo destru\u00eddo)."
      },
      {
        "cost": "+1 PM",
        "description": "este aprimoramento exige que voc\u00ea lance uma magia de at\u00e9 2\u00ba c\u00edrculo como parte da execu\u00e7\u00e3o da ''Runa de Prote\u00e7\u00e3o''. Quando a runa \u00e9 ativada, em vez do efeito normal, lan\u00e7a essa magia sobre a criatura que o ativou (se for uma magia de \u00e1rea, a \u00e1rea \u00e9 centrada na criatura)."
      },
      {
        "cost": "+3 PM",
        "description": "como o aprimoramento acima, mas al\u00e9m de lan\u00e7ar a magia, a runa ''tamb\u00e9m'' causa o dano do efeito normal. Voc\u00ea define a ordem que os efeitos acontecem."
      }
    ]
  },
  {
    "name": "Salto Dimensional",
    "execution": "padr\u00e3o",
    "range": "curto",
    "target": "voc\u00ea",
    "description": "Esta magia transporta voc\u00ea para outro lugar dentro do alcance. Voc\u00ea n\u00e3o precisa perceber nem ter linha de efeito ao seu destino, podendo simplesmente imagin\u00e1-lo. Por exemplo, pode se transportar 3m adiante para ultrapassar uma porta fechada. Uma vez transportadas, criaturas n\u00e3o podem agir at\u00e9 a rodada seguinte. Esta magia n\u00e3o permite que voc\u00ea apare\u00e7a dentro de um corpo s\u00f3lido; se o ponto de chegada n\u00e3o tem espa\u00e7o livre, voc\u00ea ressurge na \u00e1rea vazia mais pr\u00f3xima.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "muda o alcance para m\u00e9dio."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alvo para voc\u00ea e uma criatura volunt\u00e1ria. Voc\u00ea pode escolher este aprimoramento mais vezes para aumentar o n\u00famero de alvos adicionais em +1, mas deve estar tocando todos os alvos."
      },
      {
        "cost": "+2 PM",
        "description": "muda a execu\u00e7\u00e3o para rea\u00e7\u00e3o. Em vez do normal, voc\u00ea salta para um espa\u00e7o adjacente (1,5m), recebendo +5 na Defesa e em testes de Reflexos contra um ataque ou efeito que esteja prestes a atingi-lo."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alcance para longo."
      }
    ]
  },
  {
    "name": "Servos Invis\u00edveis",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "area": "linha",
    "resistence": "Reflexos reduz \u00e0 metade",
    "target": "1 criatura",
    "duration": "instant\u00e2nea",
    "effect": "at\u00e9 5 criaturas conjuradas",
    "description": "Voc\u00ea cria at\u00e9 tr\u00eas servos invis\u00edveis e silenciosos, capazes de realizar tarefas simples como apanhar lenha, colher frutos, varrer o ch\u00e3o ou alimentar um cavalo. Os servos podem ser usados para manter arrumada e organizada uma mans\u00e3o ou pequena torre ou para preparar um acampamento nos ermos para voc\u00ea e seus aliados (veja a per\u00edcia Sobreviv\u00eancia, na p\u00e1gina [[Per\u00edcias T20|Per\u00edcias]]).\n\n\n\nEles tamb\u00e9m podem ajud\u00e1-lo em tarefas mais complexas, como fazer uma pesquisa ou preparar uma po\u00e7\u00e3o, mas isso consome sua energia m\u00e1gica. Voc\u00ea pode \u201cgastar\u201d um servo para receber um b\u00f4nus n\u00e3o cumulativo de +2 em um teste de per\u00edcia (exceto testes de ataque e resist\u00eancia). Os servos n\u00e3o s\u00e3o criaturas reais; n\u00e3o podem lutar, nem resistir a qualquer dano ou efeito que exija um teste de resist\u00eancia ou teste oposto \u2014 falhar\u00e3o automaticamente no teste e ser\u00e3o destru\u00eddos",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d6."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o n\u00famero de efeitos que voc\u00ea pode escolher em +1. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda a dura\u00e7\u00e3o para permanente e resist\u00eancia para Fortitude parcial. Se passar, a criatura ainda sofre os efeitos da maldi\u00e7\u00e3o, mas por 1 rodada. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o dano em +2d6."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alvo para 1 objeto que possa ser lido, como um livro, pergaminho ou mapa. A runa explode quando o objeto \u00e9 lido. O objeto tamb\u00e9m sofre o dano (possivelmente sendo destru\u00eddo)."
      },
      {
        "cost": "+1 PM",
        "description": "este aprimoramento exige que voc\u00ea lance uma magia de at\u00e9 2\u00ba c\u00edrculo como parte da execu\u00e7\u00e3o da ''Runa de Prote\u00e7\u00e3o''. Quando a runa \u00e9 ativada, em vez do efeito normal, lan\u00e7a essa magia sobre a criatura que o ativou (se for uma magia de \u00e1rea, a \u00e1rea \u00e9 centrada na criatura)."
      },
      {
        "cost": "+3 PM",
        "description": "como o aprimoramento acima, mas al\u00e9m de lan\u00e7ar a magia, a runa ''tamb\u00e9m'' causa o dano do efeito normal. Voc\u00ea define a ordem que os efeitos acontecem."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alcance para m\u00e9dio."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alvo para voc\u00ea e uma criatura volunt\u00e1ria. Voc\u00ea pode escolher este aprimoramento mais vezes para aumentar o n\u00famero de alvos adicionais em +1, mas deve estar tocando todos os alvos."
      },
      {
        "cost": "+2 PM",
        "description": "muda a execu\u00e7\u00e3o para rea\u00e7\u00e3o. Em vez do normal, voc\u00ea salta para um espa\u00e7o adjacente (1,5m), recebendo +5 na Defesa e em testes de Reflexos contra um ataque ou efeito que esteja prestes a atingi-lo."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alcance para longo."
      },
      {
        "cost": "+1 PM",
        "description": "muda a \u00e1rea para alvo de 1 objeto. Em vez do normal, o alvo emana uma \u00e1rea de sil\u00eancio com 3m de raio. Se lan\u00e7ar a magia num objeto de uma criatura involunt\u00e1ria, ela tem direito a um teste de Vontade para anul\u00e1-la."
      },
      {
        "cost": "+2 PM",
        "description": "muda a dura\u00e7\u00e3o para cena. Em vez do normal, nenhum som pode deixar a \u00e1rea, mas criaturas dentro da \u00e1rea podem falar, ouvir e lan\u00e7ar magias com palavras m\u00e1gicas normalmente."
      }
    ]
  },
  {
    "name": "Soco de Arsenal",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "target": "1 criatura",
    "duration": "instant\u00e2nea",
    "resistence": "Fortitude reduz \u00e0 metade",
    "description": "Ningu\u00e9m sabe se Mestre Arsenal foi realmente o criador desta magia \u2014 mas ele foi o primeiro a utiliz\u00e1-la. O conjurador fecha o punho e gesticula como se estivesse golpeando o alvo, causando 4d6 + mod. For\u00e7a pontos de dano de impacto. A v\u00edtima \u00e9 empurrada 3m na dire\u00e7\u00e3o oposta \u00e0 sua (ou 1,5m se passar na resist\u00eancia).",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "muda o alcance para pessoal, o alvo para voc\u00ea, a dura\u00e7\u00e3o para cena e a resist\u00eancia para nenhuma. Em vez do normal, seus ataques corpo a corpo passam a acertar inimigos distantes. Seu alcance natural aumenta em 3m; uma criatura M\u00e9dia pode atacar advers\u00e1rios a at\u00e9 4,5m, por exemplo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d6."
      },
      {
        "cost": "+4 PM",
        "description": "aumenta a dist\u00e2ncia do efeito de empurrar em +3m."
      },
      {
        "cost": "+5 PM",
        "description": "muda o tipo do dano para ess\u00eancia."
      }
    ]
  },
  {
    "name": "Sopro das Uivantes",
    "execution": "padr\u00e3o",
    "range": "6m",
    "area": "cone",
    "duration": "instant\u00e2nea",
    "resistence": "Fortitude parcial",
    "description": "Voc\u00ea sopra ar g\u00e9lido que causa 4d6 pontos de dano de frio (Fortitude reduz \u00e0 metade). Criaturas de tamanho M\u00e9dio ou menor que falhem na resist\u00eancia s\u00e3o empurradas 6m na dire\u00e7\u00e3o oposta. Se houver uma parede ou outro objeto s\u00f3lido (mas n\u00e3o uma criatura) no caminho, a criatura para de se mover, mas sofre 1d6 pontos de dano de impacto.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano de frio em +2d6."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, criaturas que falhem no teste de Fortitude ficam ca\u00eddas."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o tamanho m\u00e1ximo das criaturas afetadas em uma categoria. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Sussurros Insanos",
    "range": "curto",
    "target": "1 humanoide",
    "duration": "cena",
    "resistence": "Vontade anula",
    "description": "Voc\u00ea murmura palavras desconexas que afetam a mente do alvo. O alvo fica confuso.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o n\u00famero de alvos em +1."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alvo para 1 criatura."
      }
    ]
  },
  {
    "name": "Tempestade Divina",
    "range": "longo",
    "area": "cilindro com 9m de raio e 9m de altura",
    "duration": "cena",
    "description": "Esta magia s\u00f3 pode ser usada em ambientes abertos. A \u00e1rea fica sujeita a um vendaval \u2014 ataques \u00e0 dist\u00e2ncia sofrem penalidade de \u20135, chamas s\u00e3o apagadas e n\u00e9voas e fuma\u00e7as s\u00e3o dissipadas em 1 rodada. Voc\u00ea tamb\u00e9m pode causar chuva (\u20135 em testes de Percep\u00e7\u00e3o), neve (como chuva, mais a \u00e1rea se torna terreno dif\u00edcil) ou granizo (como chuva, mais 1 ponto de dano de impacto por rodada, no in\u00edcio de seus turnos). Criaturas na \u00e1rea recebem uma penalidade de \u201315m no deslocamento de voo (m\u00ednimo 1,5m).",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "muda a dura\u00e7\u00e3o para sustentada. Al\u00e9m do normal, uma vez por rodada, como uma a\u00e7\u00e3o padr\u00e3o, voc\u00ea pode fazer um rel\u00e2mpago cair sobre um alvo na \u00e1rea, causando 3d8 pontos de dano de eletricidade (Reflexos reduz \u00e0 metade)."
      },
      {
        "cost": "+1 PM",
        "description": "se escolheu causar granizo, muda o dano para 1d6."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1 dado do mesmo tipo."
      },
      {
        "cost": "+3 PM",
        "description": "se escolheu causar chuva, ela revela criaturas e objetos invis\u00edveis na \u00e1rea."
      },
      {
        "cost": "+7 PM",
        "description": "se escolheu causar neve, criaturas na \u00e1rea sofrem 2d6 pontos de dano de frio no in\u00edcio de seus turnos."
      }
    ]
  },
  {
    "name": "Toque Vamp\u00edrico",
    "execution": "padr\u00e3o",
    "range": "toque",
    "target": "1 criatura",
    "resistence": "Fortitude reduz \u00e0 metade",
    "description": "Sua m\u00e3o brilha com energia sombria, causando 6d6 pontos de dano de trevas. Voc\u00ea recupera pontos de vida iguais \u00e0 metade do dano causado (se causou algum dano).",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "como parte da execu\u00e7\u00e3o da magia,\u00a0voc\u00ea pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia, e recupera pontos de vida iguais \u00e0 metade do dano da magia."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d6"
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para pessoal, o alvo para voc\u00ea e a dura\u00e7\u00e3o para cena. Em vez do normal, a cada rodada voc\u00ea pode gastar uma a\u00e7\u00e3o padr\u00e3o para tocar 1 criatura e causar 3d6 pontos de dano. Voc\u00ea recupera pontos de vida iguais \u00e0 metade do dano causado. Requer 3\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Velocidade",
    "execution": "padr\u00e3o",
    "range": "curto",
    "target": "1 criatura",
    "duration": "cena",
    "description": "O alvo pode realizar uma a\u00e7\u00e3o padr\u00e3o ou de movimento adicional por turno. Esta a\u00e7\u00e3o n\u00e3o pode ser usada para lan\u00e7ar magias e ativar engenhocas.",
    "enhancements": [
      {
        "cost": "+7 PM",
        "description": "muda o alvo para criaturas no alcance. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+7 PM",
        "description": "muda o alcance para pessoal e o alvo para voc\u00ea. Voc\u00ea acelera sua mente, al\u00e9m do seu corpo. A a\u00e7\u00e3o adicional pode ser usada para lan\u00e7ar magias e ativar engenhocas. Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Vestimenta da F\u00e9",
    "range": "toque",
    "target": "1 traje",
    "duration": "1 dia",
    "description": "Voc\u00ea fortalece uma indument\u00e1ria com o poder de sua f\u00e9. Isso aumenta o b\u00f4nus de Defesa de uma armadura ou escudo em +2 (isso \u00e9 uma melhoria no item, portanto \u00e9 cumulativa com outras magias). No caso de um traje, ele passa a oferecer +2 na Defesa e continua contando como se voc\u00ea n\u00e3o estivesse usando armadura.",
    "enhancements": [
      {
        "cost": "+3 PM",
        "description": "o objeto tamb\u00e9m oferece o mesmo b\u00f4nus em testes de resist\u00eancia. Requer 3\u00ba c\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "aumenta o b\u00f4nus em +1."
      },
      {
        "cost": "+7 PM",
        "description": "o objeto tamb\u00e9m oferece resist\u00eancia a dano 5. Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Voz Divina",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "target": "voc\u00ea",
    "duration": "cena",
    "description": "Voc\u00ea pode conversar com criaturas de qualquer ra\u00e7a e tipo: animal, construto, esp\u00edrito, humanoide, monstro ou morto-vivo. Pode fazer perguntas e entende suas respostas, mesmo sem um idioma em comum ou se a criatura n\u00e3o for capaz de falar, mas respeitando os limites da Intelig\u00eancia dela. A atitude dessas criaturas n\u00e3o \u00e9 alterada, mas voc\u00ea pode usar a per\u00edcia Diplomacia para tentar mudar sua atitude.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "voc\u00ea concede um pouco de vida a um cad\u00e1ver, suficiente para que ele responda a suas perguntas. O conhecimento do corpo \u00e9 limitado ao que ele tinha enquanto vivo e suas respostas s\u00e3o curtas e enigm\u00e1ticas. Um corpo s\u00f3 pode ser alvo desta magia uma vez. Ela tamb\u00e9m n\u00e3o funciona em um corpo cuja cabe\u00e7a tenha sido destru\u00edda."
      },
      {
        "cost": "+1 PM",
        "description": "voc\u00ea pode falar com plantas (normais ou monstruosas) e rochas. Plantas e rochas t\u00eam percep\u00e7\u00e3o limitada de seus arredores e normalmente fornecem respostas simpl\u00f3rias."
      }
    ]
  },
  {
    "name": "\u00c2ncora Dimensional",
    "range": "curto",
    "duration": "cena",
    "description": "O alvo \u00e9 envolvido por um campo de for\u00e7a cor de esmeralda que impede qualquer movimento planar. Isso inclui todas as magias de convoca\u00e7\u00e3o (como ''Salto Dimensional'' e ''Teletransporte''), viagens astrais e a habilidade incorp\u00f3reo.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para m\u00e9dio, a \u00e1rea para c\u00edrculo de 3m de raio e o alvo para criaturas escolhidas."
      },
      {
        "cost": "+2 PM",
        "description": "muda o efeito para criar um fio de energia cor de esmeralda que prende o alvo a um ponto no espa\u00e7o dentro do alcance. O ponto precisa ser fixo, mas n\u00e3o precisa de nenhum apoio ou superf\u00edcie (pode simplesmente flutuar no ar). O alvo n\u00e3o pode se afastar mais de 3m do ponto, nem fisicamente, nem com movimento planar. O fio possui 20 PV e resist\u00eancia a dano 30 (mas pode ser dissipado por efeitos que libertam criaturas, como o Julgamento da Liberdade do [[Paladino T20|Paladino]])."
      },
      {
        "cost": "+4 PM",
        "description": "como acima, mas em vez de um fio, cria uma corrente de energia, com 20 PV e resist\u00eancia a dano 40."
      },
      {
        "cost": "+4 PM",
        "description": "muda o alvo para \u00e1rea de cubo de 9m, a dura\u00e7\u00e3o para permanente e adiciona componente material (chave de esmeralda no valor de T$ 2.000). Em vez do normal, nenhum tipo de movimento planar pode entrar ou sair da \u00e1rea."
      }
    ]
  },
  {
    "name": "Anular a Luz",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "area": "esfera de 6m de raio",
    "description": "Esta magia cria uma onda de escurid\u00e3o que causa diversos efeitos. Todas as magias de 3\u00ba c\u00edrculo ou menor ativas na \u00e1rea s\u00e3o dissipadas se voc\u00ea passar num teste de Religi\u00e3o contra a CD de cada magia. Seus aliados na \u00e1rea s\u00e3o protegidos por uma aura sombria e recebem +4 na Defesa at\u00e9 o fim da cena. Inimigos na \u00e1rea ficam enjoados por 1d4 rodadas. ''Anular a Luz'' anula ''Dispersar as Trevas''.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o b\u00f4nus na Defesa em +1."
      },
      {
        "cost": "+4 PM",
        "description": "muda o c\u00edrculo m\u00e1ximo de magias dissipadas para 4\u00ba."
      },
      {
        "cost": "+9 PM",
        "description": "muda o c\u00edrculo m\u00e1ximo de magias dissipadas para 5\u00ba."
      }
    ]
  },
  {
    "name": "Banimento",
    "execution": "padr\u00e3o",
    "range": "curto",
    "target": "1 criatura",
    "duration": "instant\u00e2nea",
    "resistence": "Vontade parcial",
    "description": "Voc\u00ea expulsa criaturas que n\u00e3o s\u00e3o naturais deste mundo. Um alvo nativo de outro mundo, como muitas criaturas do tipo esp\u00edrito, \u00e9 teletransportado de volta para um lugar aleat\u00f3rio de seu mundo de origem. J\u00e1 um alvo morto-vivo tem sua conex\u00e3o com as energias negativas quase completamente rompida, sendo reduzido a 1d6 PV. Se passar na resist\u00eancia, em vez dos efeitos acima, o alvo fica enjoado por 1d4 rodadas.\n\n\n\nSe voc\u00ea tiver um ou mais itens que se oponham ao alvo de alguma maneira, a CD do teste de resist\u00eancia aumenta em +2 por item. Por exemplo, se lan\u00e7ar a magia contra dem\u00f4nios do frio (vulner\u00e1veis a \u00e1gua benta e que odeiam luz e calor) enquanto segura um frasco de \u00e1gua benta e uma tocha acesa, a CD do teste de resist\u00eancia aumenta em +4. O mestre decide se determinado item \u00e9 forte o bastante contra a criatura para isso.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o n\u00famero de alvos em +1."
      }
    ]
  },
  {
    "name": "Coluna de Chamas",
    "execution": "padr\u00e3o",
    "area": "cilindro com 3m de raio e 30m de altura",
    "duration": "instant\u00e2nea",
    "description": "Um pilar de fogo sagrado desce dos c\u00e9us, causando 6d6 pontos de dano de fogo mais 6d6 pontos de dano de eletricidade nas criaturas e objetos livres na \u00e1rea.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o dano de fogo em +1d6."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o dano de eletricidade em +1d6."
      }
    ]
  },
  {
    "name": "Comunh\u00e3o com a Natureza",
    "execution": "completa",
    "range": "pessoal",
    "target": "voc\u00ea",
    "duration": "1 dia",
    "description": "Ap\u00f3s uma breve uni\u00e3o com a natureza local, voc\u00ea obt\u00e9m informa\u00e7\u00f5es e intui\u00e7\u00f5es sobre a regi\u00e3o em que est\u00e1, numa dist\u00e2ncia equivalente a um dia de viagem. Voc\u00ea recebe 6d4 dados de aux\u00edlio. Enquanto a magia durar, sempre que for realizar um teste de per\u00edcia em \u00e1reas naturais, voc\u00ea pode gastar qualquer quantidade desses d4 e adicionar o resultado rolado como b\u00f4nus no teste. A magia termina se voc\u00ea ficar sem dados.",
    "enhancements": [
      {
        "cost": "+3 PM",
        "description": "aumenta o n\u00famero de dados de aux\u00edlio em +2."
      },
      {
        "cost": "+4 PM",
        "description": "muda o tipo dos dados de aux\u00edlio para d6."
      },
      {
        "cost": "+8 PM",
        "description": "muda o tipo dos dados de aux\u00edlio para d8."
      }
    ]
  },
  {
    "name": "Contato Extraplanar",
    "execution": "completa",
    "target": "voc\u00ea",
    "duration": "1 dia",
    "description": "Sua mente viaja at\u00e9 outro plano de exist\u00eancia, onde entra em contato com seres extraplanares como g\u00eanios, dem\u00f4nios ou elementais. Voc\u00ea firma um contrato com uma dessas entidades para que o auxilie durante o dia, em troca de se alimentar de seu mana. Quando a magia \u00e9 lan\u00e7ada, voc\u00ea recebe 6d6 dados de aux\u00edlio. Enquanto a magia durar, sempre que for realizar um teste de per\u00edcia, voc\u00ea pode gastar qualquer quantidade desses d6 e adicionar o resultado rolado como b\u00f4nus no teste. No entanto, esse aux\u00edlio tem um pre\u00e7o: sempre que rolar um \u201c6\u201d num desses d6, a entidade \u201csuga\u201d 1 PM de voc\u00ea. A magia termina quando voc\u00ea ficar sem dados para rolar, sem PM ou no fim do dia (o que acontecer primeiro).",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o n\u00famero de dados de aux\u00edlio em +1."
      },
      {
        "cost": "+8 PM",
        "description": "Muda os dados de aux\u00edlio para d12. Sempre que rolar um resultado 12 num desses d12, a entidade \u201csuga\u201d 2 PM de voc\u00ea. Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Controlar \u00c1gua",
    "execution": "padr\u00e3o",
    "range": "longo",
    "target": "esfera com 30m de raio",
    "description": "Voc\u00ea pode controlar os movimentos e comportamentos da \u00e1gua. Ao lan\u00e7ar a magia, escolha um dos efeitos abaixo.\n\n\n\n''Congelar'': toda a \u00e1gua mundana na \u00e1rea \u00e9 congelada. Criaturas nadando na \u00e1rea ficam im\u00f3veis; escapar exige gastar uma a\u00e7\u00e3o padr\u00e3o e passar num teste de Atletismo ou Acrobacia.\n\n\n\n''Derreter'': gelo mundano na \u00e1rea vira \u00e1gua e a magia termina. A crit\u00e9rio do mestre, isso pode criar terreno dif\u00edcil.\n\n\n\n''Enchente'': eleva o n\u00edvel da \u00e1gua mundana na \u00e1rea em at\u00e9 4,5m. A sua escolha, muda \u00e1rea para alvo: uma embarca\u00e7\u00e3o. O alvo recebe +3m em seu deslocamento pela dura\u00e7\u00e3o do efeito.\n\n\n\n''Evaporar'': toda a \u00e1gua e gelo mundano na \u00e1rea evaporam instantaneamente e a magia termina. Elementais da \u00e1gua, plantas monstruosas e criaturas com imunidade a frio na \u00e1rea sofrem 10d8 pontos de dano de fogo; outras criaturas vivas recebem metade desse dano (Fortitude reduz \u00e0 metade).\n\n\n\n''Partir'': diminui o n\u00edvel de toda \u00e1gua mundana na \u00e1rea em at\u00e9 4,5m. Em um corpo d\u2019\u00e1gua raso, isso abre um caminho seco, que pode ser atravessado a p\u00e9. Em um corpo d\u2019\u00e1gua profundo, cria um redemoinho que pode prender barcos (um teste de Pilotagem com CD igual \u00e0 da magia permite ao piloto livrar a embarca\u00e7\u00e3o). Elementais da \u00e1gua na \u00e1rea ficam lentos.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d8."
      }
    ]
  },
  {
    "name": "Controlar Terra",
    "execution": "padr\u00e3o",
    "range": "longo",
    "area": "9 cubos com 1",
    "duration": "instant\u00e2nea",
    "description": "Voc\u00ea manipula a densidade e a forma de toda terra, pedra, lama, argila ou areia na \u00e1rea. Ao lan\u00e7ar a magia, escolha.\n\n\n\n''Amolecer'': se afetar o teto, uma coluna ou suporte, provoca um desabamento que causa 10d6 pontos de dano de impacto \u00e0s criaturas na \u00e1rea (Reflexos reduz \u00e0 metade). Se afetar um piso de terra ou pedra, cria terreno dif\u00edcil de areia ou argila, respectivamente.\n\n\n\n''Modelar'': pode usar pedra ou argila para criar um ou mais objetos simples de tamanho Enorme ou menor (sem mecanismos ou partes m\u00f3veis). Por exemplo, pode transformar um tijolo em uma ma\u00e7a, criar uma passagem onde antes havia apenas uma parede ou levantar uma ou mais paredes que oferecem cobertura total (RD 8 e 50 PV para cada 3m).\n\n\n\n''Solidificar'': transforma lama ou areia em terra ou pedra. Criaturas com os p\u00e9s na superf\u00edcie ficam agarradas. Elas podem se soltar com uma a\u00e7\u00e3o padr\u00e3o e um teste de Acrobacia ou Atletismo.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o n\u00famero de cubos de 1,5m em +2."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alcance para pessoal, o alvo para voc\u00ea e a dura\u00e7\u00e3o para 1 dia. Voc\u00ea e seu equipamento fundem-se a uma superf\u00edcie ou objeto adjacente feito de pedra, terra, argila ou areia que possa acomod\u00e1-lo. Voc\u00ea pode voltar ao espa\u00e7o adjacente como uma a\u00e7\u00e3o livre, dissipando a magia. Enquanto mesclado, voc\u00ea n\u00e3o pode falar ou fazer a\u00e7\u00f5es f\u00edsicas, mas consegue perceber seus arredores normalmente. Pequenos danos n\u00e3o o afetam, mas se o objeto (ou o trecho onde voc\u00ea est\u00e1 imerso) for destru\u00eddo, a magia \u00e9 dissipada, voc\u00ea volta a um espa\u00e7o livre adjacente e sofre 10d6 pontos de dano de impacto."
      }
    ]
  },
  {
    "name": "Convoca\u00e7\u00e3o Instant\u00e2nea",
    "execution": "padr\u00e3o",
    "range": "ilimitado",
    "target": "1 objeto de at\u00e9 5kg",
    "duration": "instant\u00e2nea",
    "description": "Voc\u00ea invoca um objeto de qualquer lugar para sua m\u00e3o. O item deve ter sido previamente preparado com uma runa ou marca pessoal sua (ao custo de T$ 5). A magia n\u00e3o funciona se o objeto estiver com outra criatura, mas voc\u00ea saber\u00e1 onde ele est\u00e1 e quem o est\u00e1 carregando (ou sua descri\u00e7\u00e3o f\u00edsica, caso n\u00e3o conhe\u00e7a a criatura).",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, at\u00e9 1 hora depois que lan\u00e7ou a magia, voc\u00ea pode gastar uma a\u00e7\u00e3o de movimento para enviar o objeto de volta para o local em que ele estava antes."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alvo para um ba\u00fa M\u00e9dio, a dura\u00e7\u00e3o para permanente e adiciona sacrif\u00edcio de 1 PM. Em vez do normal, voc\u00ea esconde o ba\u00fa alvo no Et\u00e9reo, com at\u00e9 250kg de equipamento. A magia faz com que qualquer objeto caiba no ba\u00fa, independentemente do seu tamanho. Uma vez escondido, voc\u00ea pode convocar o ba\u00fa para um espa\u00e7o livre adjacente, ou de volta para o Et\u00e9reo, como uma a\u00e7\u00e3o padr\u00e3o. ''Componente material:'' ba\u00fa constru\u00eddo com mat\u00e9ria-prima da melhor qualidade (T$ 1.000). Voc\u00ea deve ter em m\u00e3os uma miniatura do ba\u00fa, no valor de T$ 100, para invocar o ba\u00fa verdadeiro."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o n\u00famero de alvos em +1."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o peso limite do alvo em um fator de 10, at\u00e9 500 kg. Um objeto muito grande ou pesado para aparecer em suas m\u00e3os \u00e9 teletransportado para um espa\u00e7o adjacente a sua escolha."
      }
    ]
  },
  {
    "name": "Despertar Consci\u00eancia",
    "execution": "completa",
    "range": "toque",
    "target": "1 animal ou planta",
    "duration": "1 dia",
    "description": "Voc\u00ea desperta a consci\u00eancia de um animal ou planta, que passa a ajud\u00e1-lo. O alvo se torna um aliado veterano de um tipo a sua escolha entre ajudante, combatente, fort\u00e3o, guardi\u00e3o, m\u00e9dico ou perseguidor. Se usar esta magia em um aliado que j\u00e1 possua, seu n\u00edvel de poder aumenta em um passo (iniciante para veterano, veterano para mestre). Se j\u00e1 for um aliado mestre, fornece um b\u00f4nus adicional de outro tipo de aliado iniciante (entre as escolhas acima). O alvo ganha Intelig\u00eancia 3d6, +1d4 de Carisma e pode falar os idiomas que voc\u00ea conhece.\n\n\n\nSe n\u00e3o quiser ter o alvo como aliado, voc\u00ea pode pedir que ele proteja um local espec\u00edfico, atacando invasores (nesse caso, use as estat\u00edsticas apropriadas \u00e0 criatura; plantas usam as estat\u00edsticas de entes).",
    "enhancements": [
      {
        "cost": "+4 PM",
        "description": "muda o alvo para 1 escultura mundana inanimada. Al\u00e9m do normal, o alvo tem as mesmas caracter\u00edsticas de um construto."
      },
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para permanente e adiciona sacrif\u00edcio de 1 PM."
      }
    ]
  },
  {
    "name": "Dificultar Detec\u00e7\u00e3o",
    "execution": "padr\u00e3o",
    "range": "toque",
    "target": "1 criatura ou objeto",
    "duration": "1 dia",
    "description": "Esta magia oculta a presen\u00e7a do alvo contra qualquer meio m\u00e1gico de detec\u00e7\u00e3o, inclusive detectar magia. Um conjurador que lance uma magia de adivinha\u00e7\u00e3o para detectar a presen\u00e7a ou localiza\u00e7\u00e3o do alvo deve fazer um teste de Vontade. Se falhar, a magia n\u00e3o funciona, mas os PM s\u00e3o gastos mesmo assim. Se for lan\u00e7ada sobre uma criatura, ''Dificultar Detec\u00e7\u00e3o'' protege tanto a criatura quanto seu equipamento.",
    "enhancements": [
      {
        "cost": "+4 PM",
        "description": "muda o alvo para \u00e1rea de cubo de 9m. Qualquer criatura ou objeto na \u00e1rea recebe o efeito da magia enquanto estiver dentro dela."
      },
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 semana."
      }
    ]
  },
  {
    "name": "Dispersar as Trevas",
    "range": "pessoal",
    "area": "esfera de 6m de raio",
    "duration": "instant\u00e2nea",
    "description": "Esta magia cria um forte brilho (multicolorido ou de uma cor que remeta a sua divindade) que causa diversos efeitos. Todas as magias de 3\u00ba c\u00edrculo ou menor ativas na \u00e1rea s\u00e3o dissipadas se voc\u00ea passar num teste de Religi\u00e3o contra a CD de cada magia. Seus aliados na \u00e1rea recebem +4 em testes de resist\u00eancia e resist\u00eancia a trevas 10 at\u00e9 o fim da cena, protegidos por uma aura sutil da mesma cor. Inimigos na \u00e1rea ficam cegos por 1d4 rodadas. ''Dispersar as Trevas'' anula ''Anular a Luz''.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o b\u00f4nus nas resist\u00eancias em +1."
      },
      {
        "cost": "+4 PM",
        "description": "muda o alcance para curto, a \u00e1rea para alvo 1 criatura e a dura\u00e7\u00e3o para cena. O alvo fica imune a efeitos de necromancia e trevas."
      },
      {
        "cost": "+4 PM",
        "description": "muda o c\u00edrculo m\u00e1ximo de magias dissipadas para 4\u00ba. Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Enxame Rubro de Ichabod",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "effect": "1 enxame Grade",
    "duration": "sustentada",
    "resistence": "Reflexos parcial",
    "description": "Voc\u00ea conjura um enxame de pequenas criaturas da Tormenta, que surge em um ponto a sua escolha. O enxame pode passar pelo espa\u00e7o de outras criaturas e n\u00e3o impede que outras criaturas entrem no espa\u00e7o dele. No final de cada um de seus turnos, o enxame causa 4d12 pontos de dano de \u00e1cido a qualquer criatura em seu espa\u00e7o (Reflexos reduz \u00e0 metade). Voc\u00ea pode gastar uma a\u00e7\u00e3o de movimento para mover o enxame com deslocamento de 12m.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, uma criatura que falhe no teste de Reflexos fica agarrada (o enxame escala e cobre o corpo dela). A criatura pode gastar uma a\u00e7\u00e3o padr\u00e3o e fazer um teste de Acrobacia ou Atletismo para escapar. Se voc\u00ea mover o enxame, a criatura fica livre."
      },
      {
        "cost": "+2 PM",
        "description": "muda o tipo de dano para trevas."
      },
      {
        "cost": "+3 PM",
        "description": "o enxame vira Enorme (quadrado de 6m de lado)."
      },
      {
        "cost": "+3 PM",
        "description": "o enxame ganha deslocamento de voo 18m e passa a ocupar um cubo ao inv\u00e9s de um quadrado."
      },
      {
        "cost": "+4 PM",
        "description": "o enxame inclui parasitas inchados que explodem e criam novos enxames. No in\u00edcio de cada um de seus turnos, role 1d6. Em um resultado 5 ou 6, um novo enxame surge adjacente a um j\u00e1 existente \u00e0 sua escolha. Voc\u00ea pode mover todos os enxames com uma \u00fanica a\u00e7\u00e3o de movimento, mas eles n\u00e3o podem ocupar o mesmo espa\u00e7o. Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Erup\u00e7\u00e3o Glacial",
    "range": "m\u00e9dio",
    "area": "quadrado de 6m de lado",
    "duration": "instant\u00e2nea",
    "description": "Estacas de gelo irrompem do ch\u00e3o. Criaturas na \u00e1rea sofrem 4d6 de dano de corte, 4d6 de dano de frio e ficam ca\u00eddas. Passar no teste de Reflexos evita o dano de corte e a queda. As estacas duram pela cena, o que torna a \u00e1rea afetada terreno dif\u00edcil, e concedem cobertura para criaturas dentro da \u00e1rea ou atr\u00e1s dela. As estacas s\u00e3o destru\u00eddas caso sofram qualquer quantidade de dano por fogo m\u00e1gico.",
    "enhancements": [
      {
        "cost": "+3 PM",
        "description": "aumenta o dano de frio em +2d6 e o dano de corte em +2d6."
      },
      {
        "cost": "+4 PM",
        "description": "muda a \u00e1rea para cilindro com 6m de raio e 6m de altura e a dura\u00e7\u00e3o para sustentada. Em vez do normal, a magia cria uma tempestade de granizo que causa 3d6 pontos de dano de impacto e 3d6 pontos de dano de frio em todas as criaturas na \u00e1rea (sem teste de resist\u00eancia). A tempestade fornece camuflagem a todas as criaturas dentro dela e deixa o piso escorregadio. Piso escorregadio conta como terreno dif\u00edcil e obriga criaturas na \u00e1rea a fazer testes de Acrobacia para equil\u00edbrio (veja a p\u00e1gina [[Per\u00edcias T20|Per\u00edcias]]). Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Ferver Sangue",
    "range": "curto",
    "target": "1 criatura",
    "duration": "sustentada",
    "resistence": "Fortitude reduz \u00e0 metade",
    "description": "O sangue do alvo aquece rapidamente at\u00e9 entrar em ebuli\u00e7\u00e3o. Quando a magia \u00e9 lan\u00e7ada, e no in\u00edcio de cada um de seus turnos, o alvo sofre 3d6 pontos de dano de fogo (Fortitude reduz \u00e0 metade). Se o alvo passar em dois testes de Fortitude seguidos, dissipa a magia. Se o alvo for reduzido a 0 PV pelo dano desta magia, seu corpo explode, matando-o e causando 6d6 pontos de dano de fogo em todas as criaturas a at\u00e9 3m (Reflexos reduz \u00e0 metade). Essa magia n\u00e3o afeta criaturas sem sangue, como construtos ou esp\u00edritos.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +1d6."
      },
      {
        "cost": "+9 PM",
        "description": "muda alvo para criaturas escolhidas. Requer 5\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Globo de Invulnerabilidade",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "target": "voc\u00ea",
    "description": "Voc\u00ea \u00e9 envolto por uma esfera m\u00e1gica brilhante com 3m de raio, que det\u00e9m qualquer magia de 2\u00ba c\u00edrculo ou menor. Nenhuma magia pode ser lan\u00e7ada contra um alvo dentro do globo e magias de \u00e1rea n\u00e3o o penetram. No entanto, magias ainda podem ser lan\u00e7adas de dentro para fora.\n\n\n\n''Dissipar Magia'' s\u00f3 dissipa o globo se for usada diretamente sobre voc\u00ea, n\u00e3o o afetando se usada em \u00e1rea. Efeitos m\u00e1gicos n\u00e3o s\u00e3o dissipados quando entram na esfera, apenas suprimidos (voltam a funcionar fora do globo, caso sua dura\u00e7\u00e3o n\u00e3o tenha acabado).\n\n\n\nO globo \u00e9 im\u00f3vel e n\u00e3o tem efeito sobre criaturas ou objetos. Ap\u00f3s lan\u00e7\u00e1-lo, voc\u00ea pode entrar ou sair livremente.",
    "enhancements": [
      {
        "cost": "+4 PM",
        "description": "muda o efeito para afetar magias de at\u00e9 3\u00ba c\u00edrculo. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "muda o efeito para afetar magias de at\u00e9 4\u00ba c\u00edrculo. Requer 5\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Ilus\u00e3o Lacerante",
    "execution": "padr\u00e3o",
    "range": "curto",
    "target": "1 criatura",
    "duration": "cena",
    "resistence": "Vontade anula",
    "description": "Voc\u00ea cria uma ilus\u00e3o de algum perigo mortal. Quando a magia \u00e9 lan\u00e7ada, e no in\u00edcio de cada um de seus turnos, o alvo deve fazer um teste de Vontade; se falhar, acredita que a ilus\u00e3o \u00e9 real e sofre 3d6 pontos de dano. O tipo de dano depende da ilus\u00e3o \u2014 fogo para uma ilus\u00e3o de chamas, impacto para uma ilus\u00e3o de desmoronamento etc. Somente o alvo pode ver a ilus\u00e3o, e racionaliza o efeito sempre que falha no teste (por exemplo, acredita que o mesmo teto pode cair sobre ele v\u00e1rias vezes). Se o alvo passar em dois testes de Vontade seguidos, anula o efeito.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d6. O aumento pode ser de um novo tipo de dano, desde que explicado pela ilus\u00e3o."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o n\u00famero de alvos em +1."
      }
    ]
  },
  {
    "name": "Imobilizar",
    "execution": "padr\u00e3o",
    "range": "curto",
    "duration": "cena",
    "description": "O alvo fica paralisado; se passar na resist\u00eancia, em vez disso fica lento. A cada rodada, pode gastar uma a\u00e7\u00e3o completa para fazer um novo teste de Vontade. Se passar, se liberta do efeito.",
    "enhancements": [
      {
        "cost": "+3 PM",
        "description": "muda o alvo para 1 criatura. Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Lan\u00e7a \u00cdgnea de Aleph",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "duration": "instant\u00e2nea",
    "resistence": "Reflexos parcial",
    "description": "Esta magia foi desenvolvida pelo mago imortal Aleph Olhos Vermelhos, um entusiasta dos estudos vulc\u00e2nicos. Ela dispara um proj\u00e9til de magma superaquecido contra o alvo, que sofre 4d6 pontos de dano de fogo e 4d6 pontos de dano de perfura\u00e7\u00e3o e fica em chamas. As chamas causam 2d6 pontos de dano por rodada, em vez do dano normal. Se passar no teste de resist\u00eancia, o alvo sofre metade do dano e n\u00e3o fica em chamas.\n\n\n\nRespingos de rocha incandescente se espalham com a explos\u00e3o, atingindo todas as criaturas adjacentes ao alvo, que devem fazer um teste de Reflexos. Se falharem, ficam em chamas, como descrito acima.",
    "enhancements": [
      {
        "cost": "+3 PM",
        "description": "aumenta o dano inicial em +2d6 e o dano do efeito em chamas em +1d6."
      },
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para cena ou at\u00e9 ser descarregada. Em vez do efeito normal, a magia cria quatro dardos de lava que flutuam ao lado do conjurador. Uma vez por rodada, como uma a\u00e7\u00e3o livre, voc\u00ea pode disparar um dos dardos em uma criatura, causando o efeito normal da magia. Requer 4\u00ba C\u00edrculo."
      }
    ]
  },
  {
    "name": "Lendas e Hist\u00f3rias",
    "execution": "padr\u00e3o",
    "range": "toque",
    "duration": "sustentada",
    "description": "Voc\u00ea descobre informa\u00e7\u00f5es sobre uma criatura, objeto ou local que esteja tocando. O que exatamente voc\u00ea descobre depende do mestre: talvez voc\u00ea n\u00e3o descubra tudo que h\u00e1 para saber, mas ganhe pistas para continuar a investiga\u00e7\u00e3o. A cada rodada que mantiver a magia, voc\u00ea descobre:\n\n*Todas as informa\u00e7\u00f5es sobre o alvo, como se tivesse passado em todos os testes de Conhecimento para tal.\n\n*Todas as habilidades do alvo. Se for uma criatura, voc\u00ea sabe suas estat\u00edsticas de jogo como ra\u00e7a, classe, n\u00edvel, atributos, magias, resist\u00eancias e fraquezas. Se for um item m\u00e1gico, aprende seu efeito e funcionamento.\n\n*Se alvo est\u00e1 sob influ\u00eancia de alguma magia e todas as informa\u00e7\u00f5es sobre as magias ativas, se houver alguma.",
    "enhancements": []
  },
  {
    "name": "Manto de Sombras",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "target": "voc\u00ea",
    "duration": "sustentada",
    "description": "Voc\u00ea fica coberto por um manto de energia sombria. Nesta forma, torna-se incorp\u00f3reo (inclui seu equipamento): s\u00f3 pode ser afetado por armas m\u00e1gicas, magias ou outras criaturas incorp\u00f3reas e pode atravessar objetos s\u00f3lidos, mas n\u00e3o manipul\u00e1-los. Contudo, se torna vulner\u00e1vel \u00e0 luz direta: se exposto a uma fonte de luz, sofre 1 ponto de dano por rodada.\n\n\n\nVoc\u00ea pode gastar uma a\u00e7\u00e3o de movimento e 1 PM para \u201centrar\u201d em uma sombra do seu tamanho ou maior e se teletransportar para outra sombra, tamb\u00e9m do seu tamanho ou maior, em alcance m\u00e9dio.",
    "enhancements": []
  },
  {
    "name": "Miragem",
    "execution": "padr\u00e3o",
    "range": "longo",
    "area": "cubo de at\u00e9 90m de lado",
    "duration": "1 dia",
    "resistence": "Vontade desacredita",
    "description": "Voc\u00ea faz um terreno parecer outro, incluindo sons e cheiros. Uma plan\u00edcie pode parecer um p\u00e2ntano, uma floresta pode parecer uma montanha etc. Esta magia pode ser usada para criar armadilhas: areia movedi\u00e7a pode parecer terra firme ou um precip\u00edcio pode parecer um lago. Voc\u00ea pode alterar, incluir e esconder estruturas dentro da \u00e1rea, mas n\u00e3o criaturas (embora elas possam se esconder nas estruturas ilus\u00f3rias).",
    "enhancements": [
      {
        "cost": "+4 PM",
        "description": "al\u00e9m do normal, pode alterar a apar\u00eancia de criaturas escolhidas na \u00e1rea, como se usando ''Disfarce Ilus\u00f3rio''."
      }
    ]
  },
  {
    "name": "Miss\u00e3o Divina",
    "execution": "padr\u00e3o",
    "target": "1 criatura",
    "resistence": "Vontade anula",
    "description": "Esta magia obriga o alvo a cumprir uma tarefa a sua escolha. Ela dura uma semana ou at\u00e9 o alvo cumprir a tarefa, o que vier primeiro. O alvo pode recusar a miss\u00e3o \u2014 mas, no fim de cada dia em que n\u00e3o se esfor\u00e7ar para cumprir a tarefa, deve fazer um teste de Vontade; se falhar, sofre uma penalidade cumulativa de \u20132 em todos os testes e rolagens.\n\n\n\nA ''Miss\u00e3o Divina'' n\u00e3o pode for\u00e7ar uma criatura a um ato suicida, nem designar uma miss\u00e3o imposs\u00edvel (como matar uma criatura que n\u00e3o existe).",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque, a dura\u00e7\u00e3o para permanente e adiciona penalidade de \u20131 PM. Em vez do normal, voc\u00ea inscreve uma marca (como uma tatuagem) na pele do alvo e escolhe um tipo de a\u00e7\u00e3o que ativar\u00e1 a marca. Normalmente, ser\u00e1 cometer um crime (roubar, matar...) ou outra coisa contr\u00e1ria \u00e0s Obriga\u00e7\u00f5es & Restri\u00e7\u00f5es de sua divindade. Sempre que a marca \u00e9 ativada, o alvo recebe uma penalidade cumulativa de \u20132 em todos os testes. Muitas vezes, portar essa marca \u00e9 um estigma por si s\u00f3, j\u00e1 que esta magia normalmente \u00e9 lan\u00e7ada em criminosos ou traidores. ''Dissipar Magia'' suprime a marca e suas penalidades por um dia; elas s\u00f3 podem ser totalmente removidas pelo conjurador original ou pela magia ''Purifica\u00e7\u00e3o''."
      },
      {
        "cost": "+4 PM",
        "description": "aumenta a dura\u00e7\u00e3o para 1 ano ou at\u00e9 ser descarregada."
      }
    ]
  },
  {
    "name": "Muralha Elemental",
    "range": "m\u00e9dio",
    "duration": "cena",
    "resistence": "veja texto",
    "description": "Esta magia cria uma muralha de um elemento a sua escolha. A muralha pode ter duas formas: uma barreira de at\u00e9 30m de comprimento e 3m de altura (ou o contr\u00e1rio) ou uma c\u00fapula de 3m de raio. Os efeitos variam conforme o tipo de elemento escolhido.\n\n\n\n''Fogo:'' Faz surgir uma violenta cortina de chamas. Um lado da muralha (a sua escolha) emite ondas de calor, que causam 2d6 pontos de dano de fogo em criaturas a at\u00e9 6m. A muralha causa esse dano quando surge e no in\u00edcio de seus turnos. Atravessar a muralha causa 8d6 pontos de dano de fogo. Caso seja criada em uma \u00e1rea onde existem criaturas, elas sofrem dano como se estivessem atravessando a muralha, mas podem fazer um teste de Reflexos para reduzir o dano \u00e0 metade (a criatura escolhe para qual lado quer escapar, mas se escapar para o lado quente sofrer\u00e1 mais 2d6 pontos de dano).\n\n\n\n''Gelo:'' Evoca uma parede grossa de gelo denso com 15cm de espessura. Na forma de c\u00fapula, pode prender uma ou mais criaturas, mas elas t\u00eam direito a um teste de Reflexos para escapar antes que a c\u00fapula se forme. Cada trecho de 3m da muralha tem Defesa 8, 40 PV e RD 5. Um trecho da muralha que atinja 0 PV ser\u00e1 rompido. Qualquer efeito de fogo causa dano dobrado \u00e0 muralha. Uma criatura que atravesse um trecho rompido da muralha sofre 4d6 pontos de dano de frio.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o comprimento em +15m e altura em +3m, at\u00e9 60m de comprimento e 9m de altura."
      },
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para sustentada e adiciona uma nova escolha, ''Ess\u00eancia:'' A muralha \u00e9 invis\u00edvel e indestrut\u00edvel \u2014 imune a qualquer forma de dano e n\u00e3o afetada por nenhuma magia. Ela n\u00e3o pode ser atravessada nem mesmo por criaturas incorp\u00f3reas. No entanto, magias que teletransportam criaturas, como ''Salto Dimensional'', podem atravess\u00e1-la. Magias e efeitos de dano, como ''Bola de Fogo'' e o sopro de um drag\u00e3o, n\u00e3o vencem a muralha, mas magias lan\u00e7adas diretamente sobre uma criatura ou \u00e1rea, como Sono, podem ser lan\u00e7adas contra alvos que estejam no outro lado como se tivessem linha de efeito. Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Pele de Pedra",
    "range": "pessoal",
    "target": "voc\u00ea",
    "duration": "cena",
    "description": "Sua pele ganha aspecto e dureza de rocha. Voc\u00ea recebe resist\u00eancia a dano 5.",
    "enhancements": [
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia."
      },
      {
        "cost": "+4 PM",
        "description": "sua pele ganha aspecto e dureza do a\u00e7o. Voc\u00ea recebe resist\u00eancia a dano 10. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "muda o alcance para toque, o alvo para 1 criatura, a dura\u00e7\u00e3o para 1d4 rodadas e adiciona Resist\u00eancia: Fortitude anula. Em vez do efeito normal, a magia transforma o alvo e seu equipamento em uma est\u00e1tua inerte e sem consci\u00eancia. A est\u00e1tua possui os mesmos PV da criatura e resist\u00eancia a dano 8; se for quebrada, a criatura morrer\u00e1. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "como acima, mas com dura\u00e7\u00e3o permanente. Requer 5\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Poeira da Podrid\u00e3o",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "area": "nuvem com 6m de raio",
    "duration": "cena",
    "resistence": "Fortitude",
    "description": "Voc\u00ea manifesta uma nuvem de poeira carregada de energia negativa, que apodrece lentamente as criaturas na \u00e1rea. Ao lan\u00e7ar a magia, e no in\u00edcio de seus turnos, criaturas na \u00e1rea sofrem 2d8+8 pontos de dano de trevas (Fortitude reduz \u00e0 metade). Alvos que falharem no teste ficam imunes a magias de cura por uma rodada.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em 1d8+4."
      }
    ]
  },
  {
    "name": "Pot\u00eancia Divina",
    "execution": "padr\u00e3o",
    "duration": "sustentada",
    "description": "Voc\u00ea canaliza o poder de sua divindade. Voc\u00ea aumenta uma categoria de tamanho (seu equipamento muda de acordo). Al\u00e9m disso, voc\u00ea recebe For\u00e7a +8 e resist\u00eancia a dano 10. Voc\u00ea n\u00e3o pode lan\u00e7ar magias enquanto estiver sob efeito de ''Pot\u00eancia Divina''.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta a resist\u00eancia a dano em +2."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura. A magia falha se o alvo n\u00e3o seguir a mesma divindade que voc\u00ea."
      }
    ]
  },
  {
    "name": "Prote\u00e7\u00e3o contra Magia",
    "execution": "padr\u00e3o",
    "range": "toque",
    "target": "1 criatura",
    "description": "Voc\u00ea protege o alvo contra efeitos m\u00e1gicos nocivos. O alvo recebe +5 em testes de resist\u00eancia contra magias.",
    "enhancements": [
      {
        "cost": "+4 PM",
        "description": "muda o b\u00f4nus para +10. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "em vez do normal, o alvo fica imune a duas escolas de magia a sua escolha. Requer 5\u00ba C\u00edrculo."
      }
    ]
  },
  {
    "name": "Selo de Mana",
    "range": "toque",
    "target": "1 criatura",
    "duration": "cena",
    "description": "Seu toque manifesta um selo m\u00e1gico na pele do alvo, que atrapalha o fluxo de mana. Pela dura\u00e7\u00e3o da magia, sempre que o alvo realizar qualquer a\u00e7\u00e3o que gaste PM, deve fazer um teste de Vontade; se passar, faz a a\u00e7\u00e3o normalmente. Se falhar, a a\u00e7\u00e3o n\u00e3o tem efeito (mas os PM s\u00e3o gastos mesmo assim).",
    "enhancements": [
      {
        "cost": "+4 PM",
        "description": "muda o alcance para curto e o alvo para criaturas dentro do alcance. Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Servo Divino",
    "execution": "padr\u00e3o",
    "effect": "criatura conjurada",
    "duration": "cena ou at\u00e9 ser descarregada",
    "description": "Voc\u00ea pede a sua divindade que envie um esp\u00edrito para ajud\u00e1-lo. Esse esp\u00edrito realiza uma tarefa a sua escolha que possa ser cumprida em at\u00e9 uma hora \u2014 desde algo simples como \u201cuse suas asas para nos levar at\u00e9 o topo da montanha\u201d at\u00e9 algo complexo como \u201cescolte esses camponeses at\u00e9 o castelo\u201d. A magia \u00e9 descarregada quando a criatura cumpre a tarefa, retornando a seu plano natal. O tipo de criatura \u00e9 escolhido pelo mestre, de acordo com as necessidades da tarefa.\n\n\n\n''Componente material'': um pagamento de T$ 100 ao esp\u00edrito. A forma de pagamento varia \u2014 doa\u00e7\u00f5es a um templo, um item m\u00e1gico ou mesmo dinheiro.",
    "enhancements": [
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia ou at\u00e9 ser descarregada. O esp\u00edrito realiza uma tarefa a sua escolha que exija at\u00e9 um dia, e aumenta o custo do pagamento para T$ 500. O resto segue normal."
      },
      {
        "cost": "+9 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 semana ou at\u00e9 ser descarregada. O esp\u00edrito realiza uma tarefa que exija at\u00e9 uma semana. O custo do pagamento aumenta para T$ 1.000. O resto segue normal."
      }
    ]
  },
  {
    "name": "Servo Morto-Vivo",
    "execution": "completa",
    "range": "toque",
    "duration": "instant\u00e2nea",
    "description": "Esta magia transforma o cad\u00e1ver de um humanoide, animal ou monstro em um esqueleto ou zumbi (conforme o estado de conserva\u00e7\u00e3o do corpo). O morto-vivo ent\u00e3o obedece a todos os seus comandos, mesmo suicidas. Se quiser que o morto-vivo o acompanhe, ele funciona como um aliado iniciante, de um tipo a sua escolha entre ajudante, atirador, combatente, fort\u00e3o, guardi\u00e3o ou montaria.\n\n\n\nSe n\u00e3o quiser usar o morto-vivo como aliado, pode ordenar que ele proteja um local espec\u00edfico, atacando invasores (nesse caso, use as estat\u00edsticas de criaturas vistas na p\u00e1gina [[Amea\u00e7as T20|Amea\u00e7as]]). O n\u00edvel somado de mortos-vivos sob seu comando ao mesmo tempo n\u00e3o pode exceder o seu pr\u00f3prio n\u00edvel +3, mas voc\u00ea s\u00f3 pode receber os benef\u00edcios de um deles como aliado por vez. Eles duram at\u00e9 serem destru\u00eddos (um morto-vivo destru\u00eddo n\u00e3o pode ser reanimado).\n\n\n\n''Componente material:'' um \u00f4nix negro (T$ 100), inserido na boca ou olho do cad\u00e1ver.",
    "enhancements": [
      {
        "cost": "+3 PM",
        "description": "muda o componente material para p\u00f3 de \u00f4nix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria um carni\u00e7al. Ele pode funcionar como um aliado veterano, escolhido entre ajudante, atirador, combatente, fort\u00e3o ou guardi\u00e3o. O resto segue normal."
      },
      {
        "cost": "+3 PM",
        "description": "muda o componente material para p\u00f3 de \u00f4nix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria uma sombra. Ela pode funcionar como um aliado veterano, escolhido entre assassino, combatente ou perseguidor. O restante da magia segue normal."
      },
      {
        "cost": "+7 PM",
        "description": "muda o componente material para ferramentas de embalsamar (T$ 1.000). Em vez de um zumbi ou esqueleto, cria uma m\u00famia. Ela pode funcionar como um aliado mestre, escolhido entre ajudante, destruidor, guardi\u00e3o ou m\u00e9dico. O restante da magia segue normal. Requer 4\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Sopro da Salva\u00e7\u00e3o",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "area": "cone de 9m",
    "duration": "instant\u00e2nea",
    "description": "Voc\u00ea enche seus pulm\u00f5es de energia positiva e sopra um cone de poeira reluzente. O sopro afeta apenas seus aliados na \u00e1rea, curando 2d8+4 pontos de vida e removendo uma das seguintes condi\u00e7\u00f5es de todos os alvos: abalado, atordoado, apavorado, alquebrado, cego, confuso, debilitado, enjoado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, paralisado, pasmo e surdo.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta a quantidade de cura em 1d8+2."
      },
      {
        "cost": "+4 PM",
        "description": "al\u00e9m do normal, se um aliado estiver com PV negativos, seus PV s\u00e3o levados a 0 e ent\u00e3o a cura \u00e9 aplicada."
      },
      {
        "cost": "+4 PM",
        "description": "remove todas as condi\u00e7\u00f5es listadas, em vez de apenas uma."
      }
    ]
  },
  {
    "name": "Telecinesia",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "target": "veja texto",
    "duration": "sustentada ou instant\u00e2nea",
    "description": "Voc\u00ea move objetos ou criaturas se concentrando. Ao lan\u00e7ar a magia, escolha uma das op\u00e7\u00f5es a seguir.\n\n\n\n''For\u00e7a Cont\u00ednua:'' voc\u00ea move uma criatura ou objeto com at\u00e9 200kg, a at\u00e9 6m por rodada. Uma criatura pode anular o efeito sobre ela, ou sobre um objeto que possua, passando num teste de Vontade. O peso pode ser movido em qualquer dire\u00e7\u00e3o dentro do alcance. Ele cai no ch\u00e3o se sair do alcance ou a magia terminar. '''Dura\u00e7\u00e3o:''' sustentada.\n\n\n\n''Empurr\u00e3o Violento:'' nesta vers\u00e3o a energia m\u00e1gica \u00e9 expelida de uma \u00fanica vez e arremessa at\u00e9 10 objetos, ou um peso total de 200kg, o que for menor. Os objetos devem estar a at\u00e9 3m uns dos outros.\n\n\n\nObjetos arremessados podem atingir criaturas em seu caminho, causando de 1 ponto de dano de impacto por 10kg (objetos macios, sem pontas ou sem fio) at\u00e9 1d6 pontos de dano por 10kg (objetos duros, pontudos ou afiados). Criaturas atingidas t\u00eam direito a um teste de Reflexos para reduzir o dano \u00e0 metade.\n\n\n\nCriaturas dentro da capacidade de peso da magia podem ser arremessadas, mas t\u00eam direito a um teste de Vontade para evitar o efeito (em si mesmas ou em objetos que estejam segurando). Uma criatura arremessada contra uma superf\u00edcie s\u00f3lida sofre 1d6 pontos de dano de impacto para cada 3m que \u201cvoou\u201d no deslocamento (incluindo outras criaturas; nesse caso, ambas sofrem o dano). '''Dura\u00e7\u00e3o:''' instant\u00e2nea.",
    "enhancements": [
      {
        "cost": "+3 PM",
        "description": "aumenta o limite de peso em 100kg."
      }
    ]
  },
  {
    "name": "Teletransporte",
    "range": "toque",
    "target": "at\u00e9 5 criaturas volunt\u00e1rias",
    "description": "Esta magia transporta os alvos para um lugar a sua escolha a at\u00e9 1.000km. Voc\u00ea precisa fazer um teste de Misticismo, com dificuldade que depende de seu conhecimento sobre o local de destino.\n\n\n\n''CD 20''. Um lugar familiar, que voc\u00ea visita com frequ\u00eancia.\n\n\n\n''CD 30''. Um lugar conhecido, que voc\u00ea j\u00e1 visitou pelo menos uma vez.\n\n\n\n''CD 40''. Um lugar desconhecido, que voc\u00ea nunca visitou e s\u00f3 conhece a partir da descri\u00e7\u00e3o de outra pessoa que esteve l\u00e1.\n\n\n\nVoc\u00ea n\u00e3o pode se teletransportar para um lugar que nunca visitou sem a descri\u00e7\u00e3o de algu\u00e9m. Ou seja, n\u00e3o pode se transportar para a \u201csala de tesouro do rei\u201d se nunca esteve nela nem falou com algu\u00e9m que esteve.\n\n\n\nSe passar no teste, os alvos chegam ao lugar desejado. Se falhar, os alvos surgem 1d10 x 10km afastados em qualquer dire\u00e7\u00e3o (se o destino \u00e9 uma cidade costeira, voc\u00ea pode surgir em alto-mar). Se falhar por 5 ou mais, voc\u00ea chega em um lugar parecido, mas errado. E se voc\u00ea rolar 1 natural no teste a magia falha, mas voc\u00ea gasta PM normalmente e fica atordoado por 1d4 rodadas.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o n\u00famero de alvos em +5."
      },
      {
        "cost": "+2 PM",
        "description": "em vez do normal, a magia teletransporta os alvos para seu santu\u00e1rio \u2014 um local familiar e previamente preparado. A magia pode ser usada sem limite de dist\u00e2ncia ou necessidade de testes, mas apenas dentro do mesmo plano. Preparar um local como seu santu\u00e1rio exige um ritual de um dia e o gasto de T$ 1.000. Voc\u00ea s\u00f3 pode ter um santu\u00e1rio por vez."
      },
      {
        "cost": "+9 PM",
        "description": "muda a execu\u00e7\u00e3o para a\u00e7\u00e3o completa, a dura\u00e7\u00e3o para cena e adiciona sacrif\u00edcio de 1 PM. Em vez do normal, voc\u00ea cria um c\u00edrculo de 1,5m de di\u00e2metro no ch\u00e3o, que transporta qualquer criatura que pisar nele. O destino \u00e9 escolhido quando a magia \u00e9 lan\u00e7ada e pode ser qualquer lugar, em qualquer mundo, sem a necessidade de testes, desde que seja conhecido por voc\u00ea. O c\u00edrculo \u00e9 t\u00eanue e praticamente invis\u00edvel. Voc\u00ea pode marc\u00e1-lo de alguma forma (por exemplo, lan\u00e7ando-o sobre uma plataforma elevada). Se n\u00e3o fizer isso, algu\u00e9m pode pisar nele por acidente. Junte isso a um destino hostil e voc\u00ea ter\u00e1 uma armadilha bastante eficaz! Requer 5\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Tent\u00e1culos de Trevas",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "duration": "cena",
    "description": "Um c\u00edrculo de energias sombrias se abre no ch\u00e3o, de onde surgem tent\u00e1culos feitos de treva viscosa. Ao lan\u00e7ar a magia e no in\u00edcio de cada um de seus turnos, voc\u00ea faz um teste da manobra agarrar (usando seu b\u00f4nus de Misticismo) contra cada criatura na \u00e1rea. Se voc\u00ea passar, a criatura \u00e9 agarrada; se a v\u00edtima j\u00e1 est\u00e1 agarrada, \u00e9 esmagada, sofrendo 4d6 pontos de dano de trevas. A \u00e1rea conta como terreno dif\u00edcil. Os tent\u00e1culos s\u00e3o imunes a dano.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o raio da \u00e1rea em +3m."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano dos tent\u00e1culos em +2d6."
      }
    ]
  },
  {
    "name": "Transforma\u00e7\u00e3o de Guerra",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "target": "voc\u00ea",
    "duration": "sustentada",
    "description": "Voc\u00ea se torna uma m\u00e1quina de combate, ficando mais forte, r\u00e1pido e resistente. Voc\u00ea recebe +6 na Defesa, testes de ataque e rolagens de dano corpo a corpo, e 30 PV tempor\u00e1rios. Durante a ''Transforma\u00e7\u00e3o de Guerra'' voc\u00ea n\u00e3o pode lan\u00e7ar magias, mas se torna proficiente em todas as armas.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta os b\u00f4nus na Defesa, testes de ataque e rolagens de dano corpo a corpo em +1, e os PV tempor\u00e1rios em +10."
      },
      {
        "cost": "+2 PM",
        "description": "adiciona componente material (uma barra de adamante no valor de T$ 100). Sua forma de combate ganha um aspecto met\u00e1lico e sem express\u00f5es. Voc\u00ea recebe resist\u00eancia a dano 15/adamante e imunidade a atordoamento, dano n\u00e3o letal, doen\u00e7as, encantamento, fadiga, paralisia, necromancia, sangramento, sono, veneno e n\u00e3o precisa respirar."
      }
    ]
  },
  {
    "name": "Viagem Arb\u00f3rea",
    "execution": "completa",
    "range": "pessoal",
    "target": "voc\u00ea",
    "description": "Como parte da execu\u00e7\u00e3o, voc\u00ea entra em uma \u00e1rvore adjacente que seja maior do que voc\u00ea. Voc\u00ea pode permanecer dentro da \u00e1rvore, percebendo os arredores de forma normal (mas sem poder fazer a\u00e7\u00f5es). Voc\u00ea pode gastar uma a\u00e7\u00e3o de movimento para sair da mesma \u00e1rvore, ou de qualquer outra dentro de 1km. Se estiver dentro de uma \u00e1rvore que seja destru\u00edda, a magia termina e voc\u00ea sofre 10d6 pontos de dano de impacto. Enquanto a magia durar voc\u00ea pode gastar a\u00e7\u00f5es de movimento para entrar em outras \u00e1rvores.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque, o alvo para at\u00e9 cinco criaturas e a dura\u00e7\u00e3o para instant\u00e2nea. Os alvos entram em uma planta (de tamanho M\u00e9dio ou maior) e saem em outra planta do mesmo tamanho a at\u00e9 100km de dist\u00e2ncia, especificada em dire\u00e7\u00e3o e dist\u00e2ncia aproximadas (como \u201c50km ao norte\u201d)."
      }
    ]
  },
  {
    "name": "Vid\u00eancia",
    "execution": "completa",
    "range": "ilimitado",
    "target": "1 criatura",
    "duration": "sustentada",
    "resistence": "Vontade anula",
    "description": "Atrav\u00e9s de uma superf\u00edcie reflexiva (bacia de \u00e1gua benta para cl\u00e9rigos, lago para druidas, bola de cristal para magos, espelho para feiticeiros etc.) voc\u00ea pode ver e ouvir uma criatura escolhida e seus arredores (cerca de 6m em qualquer dire\u00e7\u00e3o), mesmo que ela se mova. O alvo pode estar a qualquer dist\u00e2ncia, mas se passar em um teste de Vontade, a magia falha. A v\u00edtima recebe b\u00f4nus ou penalidades em seu teste de resist\u00eancia, dependendo do conhecimento que voc\u00ea tiver dela.\n\n*N\u00e3o conhece o alvo: +10.\n\n*Ouviu falar do alvo: +5.\n\n*O alvo est\u00e1 em outro plano ou mundo: +5.\n\n*J\u00e1 encontrou o alvo pessoalmente: +0.\n\n*Tem uma pintura, escultura ou outra representa\u00e7\u00e3o do alvo: \u20132.\n\n*Conhece bem o alvo: \u20135.\n\n*Tem um pertence pessoal ou pe\u00e7a de roupa do alvo: \u20135.\n\n*Tem uma parte do corpo do alvo (unhas, cabelos...): \u201310.",
    "enhancements": []
  },
  {
    "name": "Voo",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "target": "voc\u00ea",
    "duration": "cena",
    "description": "Voc\u00ea recebe deslocamento de voo 12m. Voar por meio desta magia \u00e9 simples como andar \u2014 voc\u00ea pode atacar e lan\u00e7ar magias normalmente enquanto voa. Quando a magia termina, voc\u00ea desce lentamente at\u00e9 o ch\u00e3o, como se estivesse sob efeito de ''Queda Suave''.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura."
      },
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "muda o alcance para curto e o alvo para at\u00e9 10 criaturas. Requer 4\u00b0 c\u00edrculo."
      }
    ]
  },
  {
    "name": "Alterar Mem\u00f3ria",
    "execution": "padr\u00e3o",
    "range": "toque",
    "target": "1 criatura",
    "duration": "instant\u00e2nea",
    "resistence": "Vontade anula",
    "description": "Voc\u00ea invade a mente do alvo e altera ou apaga suas mem\u00f3rias da \u00faltima hora.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para cone de 4,5m e o alvo para criaturas na \u00e1rea."
      }
    ]
  },
  {
    "name": "Animar Objetos",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "target": "at\u00e9 8 objetos Min\u00fasculos ou Pequenos",
    "duration": "cena",
    "description": "Voc\u00ea concede vida a objetos inanimados. Cada objeto se torna um aliado sob seu controle. O tipo dele \u00e9 escolhido da lista de tamanho e ele n\u00e3o conta em seu limite de aliados. Com uma a\u00e7\u00e3o de movimento, voc\u00ea pode comandar mentalmente qualquer objeto animado dentro do alcance para que auxilie voc\u00ea ou outra criatura neste turno. Outros usos criativos para os objetos ficam a cargo do mestre. Objetos animados t\u00eam valores de For\u00e7a, Destreza de acordo com seu tamanho e todos os outros atributos nulos; eles t\u00eam PV de acordo com seu tamanho, n\u00e3o t\u00eam valor de Defesa ou testes de resist\u00eancia e falham automaticamente em qualquer teste oposto, e s\u00e3o imunes a doen\u00e7as, fadiga, sangramento, sono e veneno. Diferente de aliados comuns, um objeto pode ser alvo de um ataque direto. Esta magia n\u00e3o afeta itens m\u00e1gicos, nem objetos que estejam sendo carregados por outra criatura.",
    "enhancements": []
  },
  {
    "name": "Assassino Fantasmag\u00f3rico",
    "execution": "padr\u00e3o",
    "range": "longo",
    "target": "1 criatura",
    "duration": "cena",
    "resistence": "Vontade parcial",
    "description": "Usando os medos subconscientes do alvo, voc\u00ea cria uma imagem daquilo que ele mais teme. Apenas a pr\u00f3pria v\u00edtima pode ver o Assassino Fantasmag\u00f3rico com nitidez; outras criaturas presentes (incluindo o conjurador) enxergam apenas um espectro sombrio.\n\n\n\nO espectro surge adjacente a voc\u00ea e flutua em dire\u00e7\u00e3o \u00e0 v\u00edtima com deslocamento total de voo 18m por turno. Ele \u00e9 incorp\u00f3reo e imune a magias.\n\n\n\nSe o espectro terminar seu turno em alcance curto da v\u00edtima, ela deve fazer um teste de Vontade. Se falhar, ficar\u00e1 abalada.\n\n\n\nSe o espectro terminar seu turno adjacente \u00e0 v\u00edtima, ela deve fazer um teste de Fortitude. Se passar, sofre 6d6 pontos de dano de trevas (este dano n\u00e3o pode reduzir o alvo a menos de 0 PV e n\u00e3o o deixa sangrando). Se falhar, sofre um colapso, ficando imediatamente com \u20131 PV e sangrando.\n\n\n\nO espectro persegue o alvo implacavelmente. Ele s\u00f3 desaparece se deixar seu alvo inconsciente, se for dissipado ou ao t\u00e9rmino da cena.",
    "enhancements": []
  },
  {
    "name": "Campo Antimagia",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "target": "voc\u00ea",
    "description": "Voc\u00ea \u00e9 cercado por uma barreira invis\u00edvel com 3m de raio que acompanha seus movimentos. Qualquer magia ou habilidade m\u00e1gica que entre na \u00e1rea da barreira \u00e9 suprimida enquanto estiver l\u00e1.\n\n\n\nCriaturas convocadas que entrem em um ''Campo Antimagia'' desaparecem. Elas reaparecem na mesma posi\u00e7\u00e3o quando a dura\u00e7\u00e3o do Campo termina \u2014 supondo que a dura\u00e7\u00e3o da magia que as convocou ainda n\u00e3o tenha terminado. Criaturas m\u00e1gicas, como elementais, ou construtos imbu\u00eddos com magia durante sua cria\u00e7\u00e3o, como golens, n\u00e3o s\u00e3o diretamente afetados pelo ''Campo Antimagia''. Entretanto, como qualquer criatura, n\u00e3o poder\u00e3o usar magias ou habilidades m\u00e1gicas dentro dele.\n\n\n\n''Dissipar Magia'' n\u00e3o dissipa um ''Campo Antimagia'', e dois Campos na mesma \u00e1rea n\u00e3o se neutralizam. Artefatos e deuses maiores n\u00e3o s\u00e3o afetados por um ''Campo Antimagia.''",
    "enhancements": []
  },
  {
    "name": "C\u00edrculo da Restaura\u00e7\u00e3o",
    "execution": "padr\u00e3o",
    "range": "curto",
    "area": "c\u00edrculo de 3m de raio",
    "duration": "5 rodadas",
    "resistence": "Reflexos parcial",
    "description": "Voc\u00ea cria uma explos\u00e3o de luz dourada e intensa. Criaturas na \u00e1rea ficam cegas por 1d4 rodadas, pegam fogo e sofrem 10d6 pontos de dano de fogo (mortos-vivos sofrem 10d8 pontos de dano). Uma criatura que passe no teste de resist\u00eancia n\u00e3o fica cega, n\u00e3o pega fogo e sofre metade do dano.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta a regenera\u00e7\u00e3o de PV em 1d8+1."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d6 (+2d8 contra mortos-vivos)."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a \u00e1rea em +6m de raio."
      },
      {
        "cost": "+5 PM",
        "description": "a luz purificadora do Deus-Sol dissipa todas as magias de necromancia ativas na \u00e1rea. Requer 5\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Conceder Milagre",
    "range": "toque",
    "target": "1 criatura",
    "description": "Voc\u00ea transfere um pouco de seu poder divino a outra criatura. Escolha uma magia de at\u00e9 2\u00ba c\u00edrculo que voc\u00ea conhe\u00e7a; o alvo pode lan\u00e7ar essa magia uma vez, sem gastar pelo custo base em PM (aprimoramentos podem ser usados, mas o alvo deve gastar seus pr\u00f3prios PM). Voc\u00ea sofre uma penalidade de \u20133 PM at\u00e9 que o alvo lance a magia que ganhou.",
    "enhancements": []
  },
  {
    "name": "Conjurar Elemental",
    "execution": "completa",
    "duration": "sustentada",
    "description": "Esta magia transforma uma por\u00e7\u00e3o de um elemento inerte em uma criatura elemental Grande do tipo do elemento alvo. Por exemplo, lan\u00e7ar esta magia numa fogueira ou tocha cria um elemental do fogo. Voc\u00ea pode criar elementais do ar, \u00e1gua, fogo e terra com essa magia. O elemental obedece a todos os seus comandos e pode funcionar como um aliado mestre do tipo destruidor (mas sem custo em PM) e mais um tipo entre os indicados na lista abaixo. Somente voc\u00ea pode ser auxiliado pelo elemental e ele n\u00e3o conta em seu limite de aliados.\n\n\n\n''Ar:'' assassino, perseguidor ou vigilante. Dano de eletricidade.\n\n\n\n''\u00c1gua'': ajudante, guardi\u00e3o ou m\u00e9dico. Dano de frio.\n\n\n\n''Fogo'': atirador, combatente ou fort\u00e3o. Dano de fogo.\n\n\n\n''Terra'': combatente, guardi\u00e3o ou montaria. Dano de impacto.",
    "enhancements": [
      {
        "cost": "+5 PM",
        "description": "o elemental muda para Enorme e recebe dois tipos de aliado indicados no seu elemento."
      },
      {
        "cost": "+5 PM",
        "description": "voc\u00ea convoca um elemental de cada tipo. Voc\u00ea pode ordenar que cada elemental auxilie voc\u00ea ou seus aliados. Requer 5\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Controlar a Gravidade",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "description": "Voc\u00ea controla os efeitos da gravidade dentro da \u00e1rea. Ao lan\u00e7ar a magia, escolha um dos efeitos abaixo. Enquanto a magia durar, voc\u00ea pode usar uma a\u00e7\u00e3o padr\u00e3o para mudar o efeito.\n\n\n\n''Aumentar'': a gravidade fica mais forte. No in\u00edcio de seus turnos, cada criatura na \u00e1rea deve fazer um teste de For\u00e7a. Se passar, fica fatigada. Se falhar, fica fatigada e ca\u00edda.\n\n\n\n''Inverter'': inverte a gravidade da \u00e1rea, fazendo com que criaturas e objetos \u201ccaiam\u201d para cima, atingindo o topo (12m) em uma rodada. Se um obst\u00e1culo (como um teto) impedir o movimento das criaturas, elas sofrem 1d6 pontos de dano de impacto para cada 1,5m de \u201cqueda\u201d. Elas podem ent\u00e3o se levantar e caminhar no obst\u00e1culo, de cabe\u00e7a para baixo. Se n\u00e3o houver obst\u00e1culo, as criaturas e objetos ficam flutuando no topo da \u00e1rea afetada, sem poder sair do lugar. Criaturas voadoras podem se movimentar normalmente. Algu\u00e9m adjacente a algo que possa agarrar tem direito a um teste de Reflexos para evitar a \u201cqueda\u201d. A criatura deve permanecer presa pela dura\u00e7\u00e3o da magia; caso contr\u00e1rio \u201ccair\u00e1\u201d.\n\n\n\n''Reduzir'': a gravidade fica mais leve. Criaturas ou objetos livres com at\u00e9 100kg flutuam para cima e para baixo conforme sua vontade, com deslocamento de voo 6m. Criaturas na \u00e1rea recebem +20 de b\u00f4nus em testes de Atletismo para escalar e saltar. Uma criatura levitando fica inst\u00e1vel, sofrendo \u20132 de penalidade em testes de ataque.",
    "enhancements": []
  },
  {
    "name": "Controlar o Clima",
    "execution": "completa",
    "range": "2km",
    "area": "c\u00edrculo com 2km de raio",
    "duration": "4d12 horas",
    "description": "Voc\u00ea muda o clima da \u00e1rea onde se encontra, podendo criar qualquer condi\u00e7\u00e3o clim\u00e1tica: chuva, neve, ventos, n\u00e9voas...",
    "enhancements": []
  },
  {
    "name": "C\u00fapula de Repuls\u00e3o",
    "range": "pessoal",
    "target": "voc\u00ea",
    "description": "Uma c\u00fapula de energia invis\u00edvel o cerca, impedindo a aproxima\u00e7\u00e3o de certas criaturas. Escolha um tipo de criatura com uma limita\u00e7\u00e3o espec\u00edfica, como animais mam\u00edferos, monstros insetoides ou mortos-vivos corp\u00f3reos; ou uma ra\u00e7a, como elfos, goblins ou minotauros. Criaturas com o tipo e a limita\u00e7\u00e3o escolhidos (ou com a ra\u00e7a escolhida) n\u00e3o podem se aproximar a at\u00e9 3m de voc\u00ea. Isso det\u00e9m ataques corpo a corpo, mas n\u00e3o ataques \u00e0 dist\u00e2ncia ou magias. Se voc\u00ea tentar se aproximar al\u00e9m do limite de 3m, rompe a c\u00fapula e a magia \u00e9 dissipada.",
    "enhancements": [
      {
        "cost": "+4 PM",
        "description": "como normal, mas voc\u00ea pode escolher um tipo de criaturas sem limita\u00e7\u00e3o (todos os animais, todos os monstros etc.)."
      },
      {
        "cost": "+8 PM",
        "description": "muda a dura\u00e7\u00e3o para sustentada. Al\u00e9m do normal, qualquer ataque, magia ou habilidade de uma criatura afetada \u00e9 desviado pelo efeito e n\u00e3o o atinge. Requer 5\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Desintegrar",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "target": "1 criatura ou objeto",
    "duration": "instant\u00e2nea",
    "description": "Voc\u00ea dispara um raio fino e esverdeado que causa 10d12 pontos de dano de ess\u00eancia. Se o alvo passar no teste de resist\u00eancia, em vez disso sofre 2d12 pontos de dano. Independentemente do resultado do teste de Fortitude, se os PV do alvo forem reduzidos a 0 ou menos, ele ser\u00e1 completamente desintegrado, restando apenas p\u00f3.",
    "enhancements": [
      {
        "cost": "+4 PM",
        "description": "aumenta o dano total em +2d12 e o dano m\u00ednimo em +1d12."
      }
    ]
  },
  {
    "name": "Duplicata Ilus\u00f3ria",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "effect": "c\u00f3pia ilus\u00f3ria",
    "duration": "cena",
    "description": "Voc\u00ea cria uma c\u00f3pia ilus\u00f3ria semirreal de... voc\u00ea mesmo! Ela \u00e9 id\u00eantica em apar\u00eancia, som e cheiro, mas \u00e9 intang\u00edvel. A cada turno, voc\u00ea escolhe se ver\u00e1 e ouvir\u00e1 atrav\u00e9s da duplicata ou de seu corpo original. A c\u00f3pia reproduz todas as suas a\u00e7\u00f5es, incluindo fala. Qualquer magia com alcance de toque ou maior que voc\u00ea lan\u00e7ar pode se originar da duplicata, em vez do seu corpo original. As magias afetam outros alvos normalmente, com a \u00fanica diferen\u00e7a de se originarem da c\u00f3pia, em vez de voc\u00ea. Se quiser que a duplicata fa\u00e7a algo diferente de voc\u00ea, voc\u00ea deve gastar uma a\u00e7\u00e3o de movimento. Qualquer criatura que interagir com a c\u00f3pia tem direito a um teste de Vontade para perceber que \u00e9 uma ilus\u00e3o. As magias que se originam dela, no entanto, s\u00e3o reais. A c\u00f3pia desaparece se sair do alcance.",
    "enhancements": []
  },
  {
    "name": "Explos\u00e3o Caleidosc\u00f3pica",
    "range": "curto",
    "description": "Esta magia cria uma forte explos\u00e3o de luzes estrobosc\u00f3picas e sons cacof\u00f4nicos que desorientam as criaturas atingidas. O efeito que cada criatura sofre depende do ND dela.\n\n\n\n''ND 4 ou menor:'' se falhar no teste de resist\u00eancia, fica inconsciente. Se passar, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena.\n\n\n\n''ND entre 5 e 9:'' se falhar no teste de resist\u00eancia, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena. Se passar, fica atordoada por 1 rodada e enjoada por 1d4 rodadas.\n\n\n\n''ND 10 ou maior:'' se falhar no teste de resist\u00eancia, fica atordoada por 1 rodada e enjoada por 1d4 rodadas. Se passar, fica desprevenida e enjoada por 1 rodada.",
    "enhancements": []
  },
  {
    "name": "Forma Et\u00e9rea",
    "execution": "completa",
    "range": "pessoal",
    "target": "voc\u00ea",
    "duration": "sustentada",
    "description": "Voc\u00ea e todo o equipamento que est\u00e1 com voc\u00ea s\u00e3o transportados para o plano et\u00e9reo, que existe paralelamente ao plano material (o mundo f\u00edsico). Na pr\u00e1tica, \u00e9 como ser transformado em um fantasma (mas voc\u00ea ainda \u00e9 considerado uma criatura viva). Uma criatura et\u00e9rea \u00e9 invis\u00edvel (pode alterar entre vis\u00edvel e invis\u00edvel como a\u00e7\u00e3o livre), incorp\u00f3rea e capaz de se mover em qualquer dire\u00e7\u00e3o, inclusive para cima e para baixo. Ela enxerga o plano material, mas tudo parece cinza e insubstancial, reduzindo o alcance da vis\u00e3o e audi\u00e7\u00e3o para 18m. Magias de abjura\u00e7\u00e3o e ess\u00eancia afetam criaturas et\u00e9reas, mas outras magias, n\u00e3o. Da mesma forma, uma criatura et\u00e9rea n\u00e3o pode atacar nem lan\u00e7ar magias contra criaturas no plano material. Duas criaturas et\u00e9reas podem se afetar normalmente. Uma criatura afetada pode se materializar como uma a\u00e7\u00e3o de movimento, encerrando a magia. Uma criatura et\u00e9rea que se materialize em um espa\u00e7o ocupado \u00e9 jogada para o espa\u00e7o n\u00e3o ocupado mais pr\u00f3ximo e sofre 1d6 pontos de dano de impacto para cada 1,5m de deslocamento.",
    "enhancements": [
      {
        "cost": "+5 PM",
        "description": "muda o alcance para toque e o alvo para at\u00e9 5 criaturas volunt\u00e1rias que estejam de m\u00e3os dadas. Depois que a magia \u00e9 lan\u00e7ada, as criaturas podem soltar as m\u00e3os. Requer 5\u00ba c\u00edrculo."
      }
    ]
  },
  {
    "name": "Guardi\u00e3o Divino",
    "execution": "padr\u00e3o",
    "duration": "cena ou at\u00e9 ser descarregado",
    "description": "A magia invoca um elemental Pequeno, com a forma de um orbe feito de luz divina. A criatura \u00e9 incorp\u00f3rea, imune a dano e ilumina como uma tocha. O elemental tem 100 pontos de luz.\n\n\n\nUma vez por rodada, durante o seu turno, o elemental pode se movimentar (deslocamento de voo 18m) e gastar quantos pontos de luz quiser para curar dano ou condi\u00e7\u00f5es de criaturas em alcance curto, \u00e0 taxa de 1 PV por 1 ponto de luz ou uma condi\u00e7\u00e3o por 3 pontos de luz (entre abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, ofuscado, pasmo, sangrando, surdo ou vulner\u00e1vel). A magia \u00e9 encerrada quando o elemental fica sem pontos de luz.",
    "enhancements": []
  },
  {
    "name": "Liberta\u00e7\u00e3o",
    "execution": "padr\u00e3o",
    "range": "curto",
    "target": "1 criatura",
    "duration": "cena",
    "description": "O alvo fica imune a condi\u00e7\u00f5es de paralisia e ignora qualquer efeito que impe\u00e7a ou restrinja seu deslocamento. Por fim, pode usar habilidades que exigem liberdade de movimentos mesmo se estiver usando armadura ou escudo",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, o alvo pode caminhar sobre a \u00e1gua ou outros l\u00edquidos com seu deslocamento normal. Entretanto, isso n\u00e3o protege contra qualquer efeito que o l\u00edquido possa causar (o alvo pode andar sobre lava, mas ainda vai sofrer dano)."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, o alvo pode escolher 20 em todos os testes de Atletismo."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, o alvo pode escolher 20 em todos os testes de Acrobacia e pode fazer todas as manobras desta per\u00edcia mesmo sem treinamento."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para curto e o alvo para at\u00e9 5 criaturas."
      },
      {
        "cost": "+5 PM",
        "description": "pode dissipar ''Aprisionamento''."
      }
    ]
  },
  {
    "name": "Liga\u00e7\u00e3o Sombria",
    "range": "longo",
    "target": "1 criatura",
    "duration": "1 dia",
    "resistence": "Fortitude anula",
    "description": "Esse ritual cria uma conex\u00e3o entre seu corpo e o da criatura alvo, criando uma marca id\u00eantica na pele de ambos. Enquanto a magia durar, sempre que voc\u00ea sofrer qualquer dano ou condi\u00e7\u00e3o, o alvo dessa magia deve fazer um teste de Fortitude; se falhar, sofre a mesma quantidade e tipo de dano que voc\u00ea, ou adquire a mesma condi\u00e7\u00e3o. A magia termina se o alvo chegar a 0 pontos de vida.",
    "enhancements": [
      {
        "cost": "+5 PM",
        "description": "al\u00e9m do normal, o alvo tamb\u00e9m pode morrer por perda de PV ou se voc\u00ea morrer (um teste de Fortitude anula a morte)."
      }
    ]
  },
  {
    "name": "Manto do Cruzado",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "target": "voc\u00ea",
    "description": "Voc\u00ea invoca a energia sagrada de sua divindade na forma de um manto de energia s\u00f3lida que reveste seu corpo. Esta magia tem duas vers\u00f5es. Voc\u00ea escolhe qual vers\u00e3o pode lan\u00e7ar quando aprende esta magia. Ela n\u00e3o pode ser mudada.\n\n\n\n''Manto de Luz:'' um manto dourado e luminoso. No in\u00edcio de cada um de seus turnos, voc\u00ea e todos os seus aliados em alcance curto recuperam 2d8 PV. Voc\u00ea fica imune a dano de trevas e seus ataques corpo a corpo causam +2d8 pontos de dano de luz.\n\n\n\n''Manto de Trevas:'' um manto negro como a noite. No in\u00edcio de cada um de seus turnos, todos os inimigos em alcance curto sofrem 2d8 pontos de dano de trevas. Voc\u00ea cura metade de todo o dano causado pela magia.",
    "enhancements": []
  },
  {
    "name": "M\u00e3o Poderosa de Talude",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "effect": "m\u00e3o gigante de energia",
    "duration": "sustentada",
    "description": "Esta magia cria uma m\u00e3o flutuante de tamanho Grande que sempre se posiciona entre voc\u00ea e um oponente a sua escolha. A m\u00e3o fornece cobertura (+5 na Defesa) contra esse oponente. Nada \u00e9 capaz de enganar a m\u00e3o \u2014 coisas como escurid\u00e3o, invisibilidade, metamorfose e disfarces mundanos n\u00e3o a impedem de proteg\u00ea-lo. A m\u00e3o tem Defesa 20 e PV e resist\u00eancias iguais aos seus. Com uma a\u00e7\u00e3o de movimento, voc\u00ea pode comandar a m\u00e3o para que o proteja de outro oponente ou para que realize uma das a\u00e7\u00f5es a seguir.\n\n\n\n''Agarrar'': a m\u00e3o usa uma manobra agarrar contra o oponente, com b\u00f4nus de +20. A m\u00e3o mant\u00e9m o oponente agarrado, mas n\u00e3o causa dano. Esmagar: a m\u00e3o esmaga um oponente j\u00e1 agarrado, causando 2d6+12 pontos de dano.\n\n\n\n''Empurrar'': a m\u00e3o afasta o oponente, usando uma manobra empurrar com b\u00f4nus de +20. A m\u00e3o sempre acompanha o oponente para empurr\u00e1-lo at\u00e9 a dist\u00e2ncia m\u00e1xima que conseguir, dentro do alcance da magia.",
    "enhancements": [
      {
        "cost": "+3 PM",
        "description": "aumenta o b\u00f4nus dos testes em +5, e o dano de impacto em +1d6+6."
      }
    ]
  },
  {
    "name": "Marionete",
    "execution": "padr\u00e3o",
    "target": "1 criatura",
    "duration": "sustentada",
    "resistence": "Fortitude anula",
    "description": "Esta magia manipula o sistema nervoso do alvo. Ao sofrer a magia, e no in\u00edcio de cada um de seus turnos, a v\u00edtima faz um teste de Fortitude. Se passar, a magia \u00e9 anulada. Se falhar, todas as suas a\u00e7\u00f5es f\u00edsicas naquele turno estar\u00e3o sob controle do conjurador. A v\u00edtima ainda tem consci\u00eancia de tudo que acontece \u00e0 sua volta, podendo ver, ouvir e at\u00e9 falar com certo esfor\u00e7o (mas n\u00e3o para lan\u00e7ar magias). Contudo, seu corpo realiza apenas os movimentos que o conjurador deseja. A v\u00edtima pode ser manipulada para se movimentar, lutar, usar habilidades de combate... Enfim, qualquer coisa de que seja fisicamente capaz.\n\n\n\nVoc\u00ea precisa de linha de efeito para controlar a v\u00edtima. Se perder o contato, n\u00e3o poder\u00e1 control\u00e1-la \u2014 mas ela estar\u00e1 paralisada at\u00e9 que o conjurador recupere o controle ou a magia termine.",
    "enhancements": []
  },
  {
    "name": "Muralha de Ossos",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "effect": "muro de ossos",
    "duration": "cena",
    "description": "Uma parede de ossos se eleva da terra. A parede tem 15m de comprimento, 3m de altura e 1,5m de espessura. Ela pode ter qualquer forma \u2014 n\u00e3o precisa ser uma linha reta \u2014, mas sua base precisa estar no ch\u00e3o e ela n\u00e3o pode aparecer de modo que ocupe o espa\u00e7o de uma criatura.\n\n\n\n\u00c9 poss\u00edvel escalar a parede. Isso exige um teste de Atletismo e causa 4d8 pontos de dano de corte. Tamb\u00e9m \u00e9 poss\u00edvel destruir o muro para atravess\u00e1-lo ou libertar uma criatura agarrada. Cada trecho de 3m do muro tem Defesa 8, 40 PV e resist\u00eancia a corte, frio e perfura\u00e7\u00e3o 5.",
    "enhancements": [
      {
        "cost": "+5 PM",
        "description": "o muro \u00e9 feito de uma massa de esqueletos animados. Quando voc\u00ea lan\u00e7a a magia e no in\u00edcio de cada um de seus turnos, todos os inimigos adjacentes \u00e0 muralha sofrem 4d8 pontos de dano de corte e devem fazer um teste de Reflexos. Se falharem, s\u00e3o agarrados pela muralha. Uma criatura agarrada pode gastar uma a\u00e7\u00e3o padr\u00e3o para fazer um teste de Acrobacia ou Atletismo para se soltar."
      }
    ]
  },
  {
    "name": "Premoni\u00e7\u00e3o",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "target": "voc\u00ea",
    "description": "Vislumbres do futuro permitem que voc\u00ea reavalie suas a\u00e7\u00f5es. Uma vez por rodada, voc\u00ea pode usar uma rea\u00e7\u00e3o para rolar novamente um teste rec\u00e9m realizado, mas deve aceitar o resultado da nova rolagem.",
    "enhancements": [
      {
        "cost": "+3 PM",
        "description": "muda a execu\u00e7\u00e3o para rea\u00e7\u00e3o, o alcance para curto, o alvo para 1 criatura e a dura\u00e7\u00e3o para instant\u00e2nea. Esta magia s\u00f3 pode ser usada em uma criatura que tenha acabado de fazer um teste. Obriga a criatura a fazer uma nova rolagem de dados e aceitar o novo resultado, seja ele um sucesso ou falha. Criaturas involunt\u00e1rias t\u00eam direito a um teste de Vontade para negar o efeito."
      },
      {
        "cost": "+5 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia."
      }
    ]
  },
  {
    "name": "Raio Polar",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "resistence": "Fortitude parcial",
    "description": "Voc\u00ea dispara um raio azul esbranqui\u00e7ado de gelo e ar congelante. O alvo sofre 10d8 pontos de dano de frio e fica preso em um bloco de gelo (paralisado). Se passar no teste de resist\u00eancia, sofre metade do dano e, em vez de paralisado, fica lento por uma rodada. \u00c9 poss\u00edvel quebrar o gelo para libertar uma criatura presa: o bloco tem 20 PV, resist\u00eancia a dano 10 e \u00e9 vulner\u00e1vel a fogo. Uma criatura presa pode usar uma a\u00e7\u00e3o completa para fazer um teste de For\u00e7a e tentar se libertar do gelo; cada vez que passar no teste causa 10 pontos de dano ao bloco, ignorando a RD.",
    "enhancements": [
      {
        "cost": "+5 PM",
        "description": "muda o alvo para \u00e1rea de explos\u00e3o de 6m de raio. Em vez de um raio, voc\u00ea dispara uma esfera de gelo que explode, causando o efeito da magia em todas as criaturas na \u00e1rea."
      }
    ]
  },
  {
    "name": "Rel\u00e2mpago Flamejante de Reynard",
    "execution": "duas rodadas",
    "range": "m\u00e9dio",
    "resistence": "Reflexos reduz \u00e0 metade",
    "description": "Esta \u00e9 uma magia poderosa, mas lenta, desenvolvida pelo met\u00f3dico e impass\u00edvel arquimago Reynard. Na primeira rodada de execu\u00e7\u00e3o, voc\u00ea invoca as energias elementais do fogo, e uma de suas m\u00e3os fica em chamas. Na segunda rodada, invoca as energias elementais dos rel\u00e2mpagos, ficando com a outra m\u00e3o eletrificada. Ent\u00e3o, pela dura\u00e7\u00e3o da magia, pode usar uma a\u00e7\u00e3o de movimento para disparar bolas de fogo (6d6 pontos de dano de fogo numa explos\u00e3o de 3m de raio) ou rel\u00e2mpagos (6d6 pontos de dano de eletricidade numa linha). Voc\u00ea tamb\u00e9m pode, como uma a\u00e7\u00e3o padr\u00e3o, usar as duas m\u00e3os num ataque de energia mista (12d12 pontos de dano, metade de fogo e metade de eletricidade, numa explos\u00e3o de 6m de raio). Voc\u00ea precisa estar com as duas m\u00e3os livres para invocar o efeito misto e isso consome toda a energia da magia, terminando-a imediatamente.",
    "enhancements": [
      {
        "cost": "+4 PM",
        "description": "aumenta o dano das rajadas em +1d6 e o dano da rajada mista em +2d12."
      }
    ]
  },
  {
    "name": "Sonho",
    "execution": "10 minutos",
    "range": "ilimitado",
    "duration": "veja texto",
    "description": "Voc\u00ea entra nos sonhos de uma criatura. Uma vez l\u00e1, pode conversar com o alvo at\u00e9 que ele acorde. Se a criatura n\u00e3o estiver dormindo quando voc\u00ea lan\u00e7ar a magia, voc\u00ea pode permanecer em transe at\u00e9 que ela adorme\u00e7a. Durante o transe voc\u00ea fica indefeso e sem consci\u00eancia dos arredores. Voc\u00ea pode sair do transe quando quiser, mas a magia termina.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "transforma o sonho do alvo em um pesadelo. A v\u00edtima deve fazer um teste de Vontade. Se falhar, n\u00e3o recupera PV ou PM pela noite, sofre 1d10 pontos de dano de trevas e acorda fatigada. A v\u00edtima recebe b\u00f4nus ou penalidades em seu teste de resist\u00eancia, dependendo do conhecimento que voc\u00ea tiver dela. Use os mesmos modificadores da magia ''Vid\u00eancia''."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o n\u00famero de alvos em +1. Todos os alvos compartilham um mesmo sonho (ou pesadelo) entre si e com voc\u00ea."
      }
    ]
  },
  {
    "name": "Talho Invis\u00edvel de Edauros",
    "range": "curto",
    "area": "cone",
    "duration": "instant\u00e2nea",
    "resistence": "Fortitude parcial",
    "description": "Esta magia cruel foi desenvolvida pelo mago de combate Edauros, quando ainda era um b\u00edpede. Voc\u00ea faz um gesto r\u00e1pido e dispara uma l\u00e2mina de ar em alta velocidade. Criaturas na \u00e1rea sofrem 8d8 pontos de dano de corte e ficam sangrando. Alvos que passem no teste de resist\u00eancia sofrem metade do dano e n\u00e3o ficam sangrando.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d8."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para voc\u00ea e a dura\u00e7\u00e3o para sustentada. Uma vez por rodada, como uma a\u00e7\u00e3o padr\u00e3o, voc\u00ea pode disparar uma l\u00e2mina de ar contra um alvo em alcance m\u00e9dio, causando 6d8 pontos de dano de corte (Fortitude reduz \u00e0 metade)."
      }
    ]
  },
  {
    "name": "Terremoto",
    "range": "longo",
    "resistence": "veja texto",
    "description": "Esta magia cria um tremor de terra que rasga o solo. O terremoto dura uma rodada, durante a qual criaturas sobre o solo n\u00e3o podem se mover, atacar ou lan\u00e7ar magias. O efeito exato depende do terreno.\n\n\n\n''Caverna ou subterr\u00e2neo:'' a magia derruba o teto, causando 12d6 pontos de dano de impacto e agarrando todas as criaturas na \u00e1rea. Um teste de Reflexos reduz o dano \u00e0 metade e evita ficar agarrado.\n\n\n\n''Constru\u00e7\u00e3o:'' todas as estruturas na \u00e1rea sofrem 200 pontos de dano de impacto, o suficiente para derrubar constru\u00e7\u00f5es de madeira ou alvenaria simples, mas n\u00e3o de alvenaria refor\u00e7ada. Criaturas em uma constru\u00e7\u00e3o que desmorone sofrem o mesmo efeito de criaturas em uma caverna (veja acima).\n\n\n\n''Espa\u00e7o aberto:'' fendas se abrem no ch\u00e3o; cada criatura tem 25% de chance (1 em 1d4) de cair em uma delas. A v\u00edtima tem direito a um teste de Reflexos para se agarrar na borda e escapar. No in\u00edcio do seu pr\u00f3ximo turno as fendas se fecham, matando todos que estejam dentro delas.\n\n\n\n''Penhascos:'' o penhasco racha, criando um desmoronamento que percorre uma dist\u00e2ncia horizontal igual \u00e0 dist\u00e2ncia vertical da queda. Por exemplo, um penhasco com 30m de altura desmorona em uma \u00e1rea de 30m de comprimento al\u00e9m da base. Qualquer criatura no caminho sofre 8d6 pontos de dano de impacto e fica agarrada. Um teste de Reflexos reduz o dano \u00e0 metade e evita ficar agarrado.\n\n\n\n''Rio, lago ou p\u00e2ntano:'' fissuras se abrem sob a \u00e1gua, drenando-a e formando um lama\u00e7al. Criaturas na \u00e1rea precisam fazer um teste de Reflexos para n\u00e3o afundarem na lama e ficarem agarradas. No in\u00edcio do seu pr\u00f3ximo turno as fissuras se fecham, possivelmente afogando as criaturas que ficaram agarradas. Escapar exige uma a\u00e7\u00e3o completa e um teste de Atletismo.\n\n\n\nCriaturas agarradas (efeito poss\u00edvel de caverna, constru\u00e7\u00e3o, penhasco e rio, lago ou p\u00e2ntano) sofrem 1d6 pontos de dano por rodada at\u00e9 serem libertadas, o que exige uma a\u00e7\u00e3o completa e um teste de Atletismo (por parte da pr\u00f3pria criatura ou de um aliado adjacente).",
    "enhancements": []
  },
  {
    "name": "Viagem Planar",
    "execution": "completa",
    "range": "toque",
    "target": "pessoal",
    "description": "Voc\u00ea viaja instantaneamente para outro plano da Cria\u00e7\u00e3o. L\u00e1, voc\u00ea chega de 10 a 1.000km do destino pretendido (role 1d100 e multiplique por 10km).\n\n\n\n''Componente material:'' um bast\u00e3o de metal precioso em forma de forquilha (no valor de T$ 1.000). O tipo de metal determina para qual plano de exist\u00eancia voc\u00ea ser\u00e1 enviado. Os metais que levam a dimens\u00f5es espec\u00edficas podem ser dif\u00edceis de encontrar, de acordo com o mestre.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "muda o alvo para at\u00e9 cinco criaturas volunt\u00e1rias que voc\u00ea esteja tocando."
      }
    ]
  },
  {
    "name": "Vis\u00e3o da Verdade",
    "range": "pessoal",
    "target": "voc\u00ea",
    "duration": "cena",
    "description": "Voc\u00ea enxerga a forma real das coisas. Voc\u00ea pode ver atrav\u00e9s de camuflagem (normal e total), escurid\u00e3o (normal e m\u00e1gica) e efeitos de ilus\u00e3o e transmuta\u00e7\u00e3o (enxergando a verdade como formas transl\u00facidas ou sobrepostas).",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura."
      },
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, o alvo fica com sentidos apurados; ele recebe +10 em todos os testes de Percep\u00e7\u00e3o."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, o alvo escuta falsidades; ele recebe +10 em todos os testes de Intui\u00e7\u00e3o."
      },
      {
        "cost": "+4 PM",
        "description": "al\u00e9m do normal, o alvo enxerga atrav\u00e9s de paredes e barreiras com 30cm de espessura ou menos (as paredes e barreiras parecem transl\u00facidas)."
      }
    ]
  },
  {
    "name": "Alterar Destino",
    "execution": "rea\u00e7\u00e3o",
    "range": "pessoal",
    "target": "voc\u00ea",
    "duration": "instant\u00e2nea",
    "description": "Sua mente visualiza todas as possibilidades de um evento, permitindo a voc\u00ea escolher o melhor curso de a\u00e7\u00e3o. Voc\u00ea automaticamente passa em um teste de resist\u00eancia ou evita um ataque nesta rodada.",
    "enhancements": []
  },
  {
    "name": "Aprisionamento",
    "execution": "completa",
    "target": "1 criatura",
    "duration": "permanente",
    "resistence": "Vontade anula",
    "description": "Voc\u00ea cria uma pris\u00e3o m\u00e1gica para aprisionar uma criatura. Se falhar no teste de resist\u00eancia, o alvo sofre o efeito da magia; se passar, fica imune a esta magia por uma semana. Enquanto estiver aprisionada, a criatura n\u00e3o precisa respirar e alimentar-se, e n\u00e3o envelhece. Magias de adivinha\u00e7\u00e3o n\u00e3o conseguem localizar ou perceber o alvo. Ao lan\u00e7ar a magia, voc\u00ea escolhe uma das seguintes formas de pris\u00e3o. O componente material varia, mas todos custam T$ 1.000.\n\n\n\n''Acorrentamento'': o alvo \u00e9 preso por correntes firmemente enraizadas no ch\u00e3o, que o mant\u00e9m no lugar. O alvo fica paralisado e n\u00e3o pode se mover ou ser movido por qualquer meio. ''Componente Material:'' uma fina corrente de mitral.\n\n\n\n''Conten\u00e7\u00e3o M\u00ednima:'' o alvo diminui para uma altura de 2 cent\u00edmetros e \u00e9 preso dentro de uma pedra preciosa ou objeto semelhante. A luz pode passar atrav\u00e9s da pedra preciosa normalmente (permitindo que o alvo veja o lado de fora e outras criaturas o vejam), mas nada mais pode passar, nem por meio de teletransporte ou viagem planar. A pedra n\u00e3o pode ser quebrada enquanto o alvo estiver dentro. ''Componente Material:'' uma pedra preciosa, como um diamante ou rubi.\n\n\n\n''Pris\u00e3o Dimensional:'' o alvo \u00e9 transportado para um pequeno semiplano protegido contra teletransporte e viagens planares. O semiplano pode ser um labirinto, uma gaiola, uma torre ou qualquer estrutura ou \u00e1rea confinada similar de sua escolha. ''Componente Material:'' uma representa\u00e7\u00e3o em miniatura da pris\u00e3o, feita de jade.\n\n\n\n''Sepultamento'': o alvo \u00e9 sepultado bem fundo abaixo da terra, dentro de uma esfera de for\u00e7a m\u00e1gica. Nada pode destruir ou atravessar a esfera, nem mesmo teletransporte ou viagens planares. ''Componente Material:'' um pequeno orbe de adamante.\n\n\n\n''Sono Eterno:'' o alvo adormece e n\u00e3o pode ser acordado. ''Componente Material:'' fruta preparada com ervas son\u00edferas raras.\n\n\n\nQuando a magia \u00e9 lan\u00e7ada, voc\u00ea deve especificar uma condi\u00e7\u00e3o que far\u00e1 com que ela termine e solte o alvo. A condi\u00e7\u00e3o pode ser t\u00e3o espec\u00edfica ou elaborada quanto voc\u00ea quiser, mas deve ser poss\u00edvel de acontecer. As condi\u00e7\u00f5es podem se basear no nome, identidade ou divindade padroeira de uma criatura, ou em a\u00e7\u00f5es ou qualidades observ\u00e1veis, mas nunca em estat\u00edsticas intang\u00edveis, como n\u00edvel, classe ou pontos de vida. O mestre tem a palavra final sobre se uma condi\u00e7\u00e3o \u00e9 v\u00e1lida ou n\u00e3o.\n\n\n\n''Dissipar Magia'' pode dissipar o efeito, mas deve ser conjurada com o aprimoramento de 5\u00ba c\u00edrculo e alvo na pris\u00e3o.",
    "enhancements": []
  },
  {
    "name": "Aura Divina",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "duration": "cena",
    "description": "Voc\u00ea se torna um condutor direto da energia de sua divindade, emanando uma aura brilhante da cor que escolher. Seus aliados na \u00e1rea recebem +5 na Defesa e em testes de resist\u00eancia (voc\u00ea e aliados devotos da mesma divindade que voc\u00ea recebem +10) e ficam imunes a encantamento. Al\u00e9m disso, inimigos que entrem na \u00e1rea afetada devem fazer um teste de Vontade; em caso de falha, recebem uma condi\u00e7\u00e3o a sua escolha entre esmorecido, debilitado ou lento at\u00e9 o fim da cena. O teste deve ser refeito cada vez que a criatura entrar novamente na \u00e1rea.",
    "enhancements": []
  },
  {
    "name": "Barragem Elemental de Vectorius",
    "execution": "padr\u00e3o",
    "range": "longo",
    "effect": "4 esferas elementais",
    "duration": "instant\u00e2nea",
    "resistence": "Reflexos parcial",
    "description": "Criada pelo arquimago Vectorius, esta magia produz quatro esferas elementais (\u00e1cido, eletricidade, fogo e frio) que voam at\u00e9 um ponto a sua escolha. Quando atingem o ponto escolhido, explodem causando 6d6 pontos de dano (cada uma do seu tipo) numa esfera com 12m de raio. Um teste de Reflexos reduz o dano \u00e0 metade. Voc\u00ea pode mirar cada esfera em uma criatura ou ponto diferente. Uma criatura ao alcance da explos\u00e3o de mais de uma esfera deve fazer um teste de resist\u00eancia para cada uma. Al\u00e9m disso, as esferas causam os seguintes efeitos em criaturas que falharem em seus respectivos testes de resist\u00eancia:\n\n\n\n* Esfera de \u00e1cido: vulner\u00e1vel at\u00e9 o fim da cena.\n\n* Esfera el\u00e9trica: atordoado por uma rodada.\n\n* Esfera de fogo: em chamas.\n\n* Esfera de frio: lento at\u00e9 o fim da cena",
    "enhancements": [
      {
        "cost": "+5 PM",
        "description": "aumenta o dano de cada esfera em +2d6."
      },
      {
        "cost": "+5 PM",
        "description": "muda o tipo de dano de todas as esferas para ess\u00eancia (mas elas ainda causam os outros efeitos como se seu tipo de dano n\u00e3o mudasse)."
      }
    ]
  },
  {
    "name": "Buraco Negro",
    "execution": "completa",
    "duration": "3 rodadas",
    "resistence": "Fortitude parcial",
    "description": "Esta magia cria um v\u00e1cuo capaz de sugar tudo nas proximidades. Escolha um espa\u00e7o desocupado para o buraco negro. No in\u00edcio de cada um de seus tr\u00eas turnos seguintes, todas as criaturas a at\u00e9 90m do buraco negro, incluindo voc\u00ea, devem fazer um teste de Fortitude. Em caso de falha, ficam ca\u00eddas e s\u00e3o puxadas 30m na dire\u00e7\u00e3o do buraco. Objetos soltos tamb\u00e9m s\u00e3o puxados. Criaturas podem gastar uma a\u00e7\u00e3o de movimento para se segurar em algum objeto fixo, recebendo +2 em seus testes de resist\u00eancia. Criaturas e objetos que toquem o buraco negro s\u00e3o sugadas, desaparecendo para sempre.\n\n\n\nN\u00e3o se conhece o destino das coisas sugadas pelo buraco negro, uma vez que jamais retornam. Alguns estudiosos sugerem que podem ser enviadas para outros mundos. Muitos cl\u00e9rigos da Deusa da Noite acreditam que esta magia abre um portal para Sombria, o lar de sua deusa, e sonham um dia poder realizar essa jornada.",
    "enhancements": [
      {
        "cost": "+5 PM",
        "description": "muda o efeito para que voc\u00ea n\u00e3o seja afetado."
      }
    ]
  },
  {
    "name": "Chuva de Meteoros",
    "execution": "completa",
    "range": "longo",
    "area": "explos\u00e3o com 9m de raio",
    "duration": "instant\u00e2nea",
    "resistence": "Reflexos reduz \u00e0 metade",
    "description": "Esta magia faz com que um meteoro caia dos c\u00e9us, devastando a \u00e1rea de impacto e seus arredores. Criaturas na \u00e1rea sofrem 20d6 pontos de dano (metade impacto, metade fogo).",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "criaturas que falhem no teste de resist\u00eancia ficam ca\u00eddas e presas sob os escombros (agarradas). Uma criatura agarrada pode escapar gastando uma a\u00e7\u00e3o padr\u00e3o e passando em um teste de Atletismo. Toda a \u00e1rea afetada fica coberta de escombros, sendo considerada terreno dif\u00edcil."
      }
    ]
  },
  {
    "name": "Controlar o Tempo",
    "execution": "padr\u00e3o",
    "range": "curto",
    "duration": "veja texto",
    "description": "Aquele que controla o tempo controla o mundo. Escolha um dos efeitos a seguir.\n\n\n\n''Congelar o tempo:'' voc\u00ea entra em um estado atemporal que faz todas as criaturas e efeitos parecerem congelados. Voc\u00ea pode agir livremente por 3 rodadas de tempo aparente. Durante essas rodadas, efeitos cont\u00ednuos n\u00e3o o afetam, mas criaturas e objetos em posse de criaturas ficam imunes a seus ataques e magias. Magias de \u00e1rea e com dura\u00e7\u00e3o maior que este efeito v\u00e3o agir normalmente quando o congelamento acabar. Este efeito costuma ser usado para fortalecer suas defesas e invocar criaturas.\n\n\n\n''Saltar no tempo:'' voc\u00ea e at\u00e9 5 criaturas volunt\u00e1rias s\u00e3o transportadas de 1 a 24 horas para o futuro, desaparecendo com um brilho. Voc\u00eas ressurgem no mesmo lugar, com a mesma velocidade e orienta\u00e7\u00e3o; do seu ponto de vista, nenhum tempo se passou. Se um objeto s\u00f3lido agora ocupa o espa\u00e7o de uma criatura, ela ressurge na \u00e1rea vazia mais pr\u00f3xima.\n\n\n\n''Voltar no tempo:'' voc\u00ea revive os \u00faltimos segundos. Todas as a\u00e7\u00f5es da rodada anterior s\u00e3o desfeitas (incluindo perda de PV e PM). Tudo retorna \u00e0 posi\u00e7\u00e3o em que estava no in\u00edcio do seu turno na \u00faltima rodada e voc\u00ea \u00e9 o \u00fanico que sabe o que acontecer\u00e1. Todos os outros personagens envolvidos na cena devem repetir as mesmas a\u00e7\u00f5es \u2014 exceto se voc\u00ea fizer algo a respeito (como avisar seus aliados sobre o que vai acontecer).",
    "enhancements": []
  },
  {
    "name": "Deflagra\u00e7\u00e3o de Mana",
    "execution": "completa",
    "range": "pessoal",
    "resistence": "Fortitude parcial",
    "description": "Ap\u00f3s concentrar seu mana, voc\u00ea explode em dano de ess\u00eancia, como uma estrela em plena terra. Todas as criaturas na \u00e1rea sofrem 150 pontos de dano de ess\u00eancia, e todos os itens m\u00e1gicos (exceto artefatos) tornam-se mundanos. Voc\u00ea n\u00e3o \u00e9 afetado pela magia. Alvos que passem no teste de Fortitude sofrem apenas metade do dano e seus itens m\u00e1gicos voltam a funcionar depois de um dia.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o dano em 10."
      },
      {
        "cost": "+5 PM",
        "description": "afeta apenas criaturas a sua escolha."
      }
    ]
  },
  {
    "name": "Desejo",
    "execution": "completa",
    "range": "veja texto",
    "target": "veja texto",
    "duration": "veja texto",
    "resistence": "veja texto",
    "description": "Esta \u00e9 a mais poderosa das magias arcanas, permitindo alterar a realidade a seu bel-prazer. Voc\u00ea pode:\n\n\n\n* Dissipar os efeitos de qualquer magia de 4\u00ba c\u00edrculo ou menor.\n\n* Transportar at\u00e9 10 criaturas volunt\u00e1rias em alcance longo para qualquer outro local, em qualquer plano.\n\n* Desfazer um acontecimento recente. A magia permite que um teste realizado por uma criatura em alcance longo na \u00faltima rodada seja realizado novamente. Por exemplo, se um aliado morreu na \u00faltima rodada devido ao ataque de um inimigo, voc\u00ea pode obrigar o inimigo a refazer esse ataque.\n\n\n\nNormalmente, ''Desejo'' n\u00e3o exige sacrif\u00edcio de PM \u2014 mas voc\u00ea pode desejar por algo mais poderoso. Nesse caso, a magia requer o sacrif\u00edcio de 2 PM e pode fazer coisas como:\n\n\n\n* Criar um item mundano de at\u00e9 T$ 25.000.\n\n* Duplicar os efeitos de qualquer magia de at\u00e9 4\u00ba c\u00edrculo. Caso a magia precise de um componente material para ser lan\u00e7ada, ainda \u00e9 necess\u00e1rio providenciar o componente.\n\n* Aumentar um atributo de uma criatura em +1. Um mesmo atributo pode ser aumentado em at\u00e9 +5 atrav\u00e9s do uso de ''Desejo''.\n\n\n\n''Desejo'' pode gerar efeitos ainda mais poderosos, mas tenha cuidado! Desejar a fortuna de um rei pode transport\u00e1-lo para a sala de tesouro real, onde voc\u00ea ser\u00e1 preso ou morto; desejar ser imortal pode transform\u00e1-lo em morto-vivo, e assim por diante. Qualquer efeito que n\u00e3o encaixe na lista acima deve ser decidido pelo mestre.",
    "enhancements": []
  },
  {
    "name": "Engenho de Mana",
    "execution": "padr\u00e3o",
    "range": "m\u00e9dio",
    "effect": "disco de energia com 1",
    "duration": "sustentada",
    "description": "Esta poderosa magia manifesta um disco de energia que lembra uma roda de engenho e flutua no ponto em que foi conjurado. O disco \u00e9 intang\u00edvel, imune a dano e n\u00e3o pode ser movido. Enquanto estiver ativo, tenta absorver qualquer magia lan\u00e7ada em alcance m\u00e9dio dele, como uma a\u00e7\u00e3o autom\u00e1tica de contram\u00e1gica, usando seu teste de Misticismo. Caso ven\u00e7a o teste, o engenho n\u00e3o s\u00f3 anula a magia como absorve os PM usados para lan\u00e7\u00e1-la, acumulando PM tempor\u00e1rios. No seu turno, se estiver ao alcance do disco, voc\u00ea pode gastar PM guardados nele para lan\u00e7ar magias.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "em vez de flutuar no ponto em que foi conjurado, o disco flutua atr\u00e1s de voc\u00ea, mantendo-se sempre adjacente."
      },
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia."
      }
    ]
  },
  {
    "name": "F\u00faria do Pante\u00e3o",
    "execution": "completa",
    "range": "longo",
    "effect": "nuvem de tempestade com 90m de lado",
    "duration": "sustentada",
    "description": "Voc\u00ea cria uma nuvem de tempestade, com trov\u00f5es e rel\u00e2mpagos. Enquanto voc\u00ea sustenta a magia, ela gera os seguintes efeitos, sempre no in\u00edcio do seu turno.\n\n\n\n''1\u00aa rodada (quando voc\u00ea lan\u00e7a a magia):'' trov\u00f5es ribombam. Criaturas na \u00e1rea sofrem 6d6 pontos de dano de impacto e ficam surdas por uma rodada.\n\n\n\n''2\u00aa rodada'': rel\u00e2mpagos caem. At\u00e9 seis criaturas a sua escolha na \u00e1rea sofrem 10d8 pontos de dano de eletricidade.\n\n\n\n''3\u00ba rodada em diante:'' chuva g\u00e9lida e ventos causam 6d6 pontos de dano de frio por rodada. Al\u00e9m disso, reduzem a visibilidade (como a magia N\u00e9voa), transformam toda a \u00e1rea em terreno dif\u00edcil e tornam ataques \u00e0 dist\u00e2ncia imposs\u00edveis. Por fim, a \u00e1rea conta como condi\u00e7\u00e3o terr\u00edvel para conjuradores lan\u00e7arem magias.",
    "enhancements": []
  },
  {
    "name": "Interven\u00e7\u00e3o Divina",
    "execution": "completa",
    "range": "veja texto",
    "target": "veja texto",
    "resistence": "veja texto",
    "description": "Voc\u00ea pede a sua divindade para interceder diretamente. Voc\u00ea pode:\n\n\n\n* Curar todos os PV e condi\u00e7\u00f5es de at\u00e9 10 criaturas em alcance longo.\n\n* Dissipar os efeitos de qualquer magia de 4\u00ba c\u00edrculo ou menor.\n\n\n\nNormalmente, ''Interven\u00e7\u00e3o Divina'' n\u00e3o exige sacrif\u00edcio de PM \u2014 mas voc\u00ea pode implorar por algo mais poderoso. Nesse caso, a magia requer o sacrif\u00edcio de 2 PM e pode fazer coisas como:\n\n\n\n* Criar um item mundano de at\u00e9 T$ 25.000.\n\n* Duplicar os efeitos de qualquer magia de at\u00e9 4\u00ba c\u00edrculo. Caso a magia precise de um componente material para ser lan\u00e7ada, ainda \u00e9 necess\u00e1rio providenciar o componente.\n\n* Proteger uma cidade de um desastre, como uma erup\u00e7\u00e3o vulc\u00e2nica, enchente ou terremoto.\n\n* Ressuscitar uma criatura em alcance longo que tenha morrido h\u00e1 at\u00e9 uma rodada. A criatura acorda com 1 PV.\n\n* Qualquer outra coisa que o mestre autorize, conforme os desejos e objetivos da divindade do conjurador.",
    "enhancements": []
  },
  {
    "name": "Invulnerabilidade",
    "execution": "padr\u00e3o",
    "range": "pessoal",
    "target": "voc\u00ea",
    "duration": "sustentada",
    "resistence": "Vontade anula",
    "area": "cubo de at\u00e9 90m de lado",
    "effect": "s m\u00e1gicos n\u00e3o s\u00e3o dissipados quando entram na esfera",
    "description": "Voc\u00ea faz um terreno parecer outro, incluindo sons e cheiros. Uma plan\u00edcie pode parecer um p\u00e2ntano, uma floresta pode parecer uma montanha etc. Esta magia pode ser usada para criar armadilhas: areia movedi\u00e7a pode parecer terra firme ou um precip\u00edcio pode parecer um lago. Voc\u00ea pode alterar, incluir e esconder estruturas dentro da \u00e1rea, mas n\u00e3o criaturas (embora elas possam se esconder nas estruturas ilus\u00f3rias).",
    "enhancements": [
      {
        "cost": "+4 PM",
        "description": "muda o efeito para afetar magias de at\u00e9 3\u00ba c\u00edrculo. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "muda o efeito para afetar magias de at\u00e9 4\u00ba c\u00edrculo. Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d6. O aumento pode ser de um novo tipo de dano, desde que explicado pela ilus\u00e3o."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o n\u00famero de alvos em +1."
      },
      {
        "cost": "+3 PM",
        "description": "muda o alvo para 1 criatura. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o dano inicial em +2d6 e o dano do efeito em chamas em +1d6."
      },
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para cena ou at\u00e9 ser descarregada. Em vez do efeito normal, a magia cria quatro dardos de lava que flutuam ao lado do conjurador. Uma vez por rodada, como uma a\u00e7\u00e3o livre, voc\u00ea pode disparar um dos dardos em uma criatura, causando o efeito normal da magia. Requer 4\u00ba C\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "al\u00e9m do normal, pode alterar a apar\u00eancia de criaturas escolhidas na \u00e1rea, como se usando ''Disfarce Ilus\u00f3rio''."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque, a dura\u00e7\u00e3o para permanente e adiciona penalidade de \u20131 PM. Em vez do normal, voc\u00ea inscreve uma marca (como uma tatuagem) na pele do alvo e escolhe um tipo de a\u00e7\u00e3o que ativar\u00e1 a marca. Normalmente, ser\u00e1 cometer um crime (roubar, matar...) ou outra coisa contr\u00e1ria \u00e0s Obriga\u00e7\u00f5es & Restri\u00e7\u00f5es de sua divindade. Sempre que a marca \u00e9 ativada, o alvo recebe uma penalidade cumulativa de \u20132 em todos os testes. Muitas vezes, portar essa marca \u00e9 um estigma por si s\u00f3, j\u00e1 que esta magia normalmente \u00e9 lan\u00e7ada em criminosos ou traidores. ''Dissipar Magia'' suprime a marca e suas penalidades por um dia; elas s\u00f3 podem ser totalmente removidas pelo conjurador original ou pela magia ''Purifica\u00e7\u00e3o''."
      },
      {
        "cost": "+4 PM",
        "description": "aumenta a dura\u00e7\u00e3o para 1 ano ou at\u00e9 ser descarregada."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o comprimento em +15m e altura em +3m, at\u00e9 60m de comprimento e 9m de altura."
      },
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para sustentada e adiciona uma nova escolha, ''Ess\u00eancia:'' A muralha \u00e9 invis\u00edvel e indestrut\u00edvel \u2014 imune a qualquer forma de dano e n\u00e3o afetada por nenhuma magia. Ela n\u00e3o pode ser atravessada nem mesmo por criaturas incorp\u00f3reas. No entanto, magias que teletransportam criaturas, como ''Salto Dimensional'', podem atravess\u00e1-la. Magias e efeitos de dano, como ''Bola de Fogo'' e o sopro de um drag\u00e3o, n\u00e3o vencem a muralha, mas magias lan\u00e7adas diretamente sobre uma criatura ou \u00e1rea, como Sono, podem ser lan\u00e7adas contra alvos que estejam no outro lado como se tivessem linha de efeito. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia."
      },
      {
        "cost": "+4 PM",
        "description": "sua pele ganha aspecto e dureza do a\u00e7o. Voc\u00ea recebe resist\u00eancia a dano 10. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "muda o alcance para toque, o alvo para 1 criatura, a dura\u00e7\u00e3o para 1d4 rodadas e adiciona Resist\u00eancia: Fortitude anula. Em vez do efeito normal, a magia transforma o alvo e seu equipamento em uma est\u00e1tua inerte e sem consci\u00eancia. A est\u00e1tua possui os mesmos PV da criatura e resist\u00eancia a dano 8; se for quebrada, a criatura morrer\u00e1. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "como acima, mas com dura\u00e7\u00e3o permanente. Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em 1d8+4."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a resist\u00eancia a dano em +2."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura. A magia falha se o alvo n\u00e3o seguir a mesma divindade que voc\u00ea."
      },
      {
        "cost": "+4 PM",
        "description": "muda o b\u00f4nus para +10. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+9 PM",
        "description": "em vez do normal, o alvo fica imune a duas escolas de magia a sua escolha. Requer 5\u00ba C\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "muda o alcance para curto e o alvo para criaturas dentro do alcance. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia ou at\u00e9 ser descarregada. O esp\u00edrito realiza uma tarefa a sua escolha que exija at\u00e9 um dia, e aumenta o custo do pagamento para T$ 500. O resto segue normal."
      },
      {
        "cost": "+9 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 semana ou at\u00e9 ser descarregada. O esp\u00edrito realiza uma tarefa que exija at\u00e9 uma semana. O custo do pagamento aumenta para T$ 1.000. O resto segue normal."
      },
      {
        "cost": "+3 PM",
        "description": "muda o componente material para p\u00f3 de \u00f4nix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria um carni\u00e7al. Ele pode funcionar como um aliado veterano, escolhido entre ajudante, atirador, combatente, fort\u00e3o ou guardi\u00e3o. O resto segue normal."
      },
      {
        "cost": "+3 PM",
        "description": "muda o componente material para p\u00f3 de \u00f4nix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria uma sombra. Ela pode funcionar como um aliado veterano, escolhido entre assassino, combatente ou perseguidor. O restante da magia segue normal."
      },
      {
        "cost": "+7 PM",
        "description": "muda o componente material para ferramentas de embalsamar (T$ 1.000). Em vez de um zumbi ou esqueleto, cria uma m\u00famia. Ela pode funcionar como um aliado mestre, escolhido entre ajudante, destruidor, guardi\u00e3o ou m\u00e9dico. O restante da magia segue normal. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a quantidade de cura em 1d8+2."
      },
      {
        "cost": "+4 PM",
        "description": "al\u00e9m do normal, se um aliado estiver com PV negativos, seus PV s\u00e3o levados a 0 e ent\u00e3o a cura \u00e9 aplicada."
      },
      {
        "cost": "+4 PM",
        "description": "remove todas as condi\u00e7\u00f5es listadas, em vez de apenas uma."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o limite de peso em 100kg."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o n\u00famero de alvos em +5."
      },
      {
        "cost": "+2 PM",
        "description": "em vez do normal, a magia teletransporta os alvos para seu santu\u00e1rio \u2014 um local familiar e previamente preparado. A magia pode ser usada sem limite de dist\u00e2ncia ou necessidade de testes, mas apenas dentro do mesmo plano. Preparar um local como seu santu\u00e1rio exige um ritual de um dia e o gasto de T$ 1.000. Voc\u00ea s\u00f3 pode ter um santu\u00e1rio por vez."
      },
      {
        "cost": "+9 PM",
        "description": "muda a execu\u00e7\u00e3o para a\u00e7\u00e3o completa, a dura\u00e7\u00e3o para cena e adiciona sacrif\u00edcio de 1 PM. Em vez do normal, voc\u00ea cria um c\u00edrculo de 1,5m de di\u00e2metro no ch\u00e3o, que transporta qualquer criatura que pisar nele. O destino \u00e9 escolhido quando a magia \u00e9 lan\u00e7ada e pode ser qualquer lugar, em qualquer mundo, sem a necessidade de testes, desde que seja conhecido por voc\u00ea. O c\u00edrculo \u00e9 t\u00eanue e praticamente invis\u00edvel. Voc\u00ea pode marc\u00e1-lo de alguma forma (por exemplo, lan\u00e7ando-o sobre uma plataforma elevada). Se n\u00e3o fizer isso, algu\u00e9m pode pisar nele por acidente. Junte isso a um destino hostil e voc\u00ea ter\u00e1 uma armadilha bastante eficaz! Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o raio da \u00e1rea em +3m."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano dos tent\u00e1culos em +2d6."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta os b\u00f4nus na Defesa, testes de ataque e rolagens de dano corpo a corpo em +1, e os PV tempor\u00e1rios em +10."
      },
      {
        "cost": "+2 PM",
        "description": "adiciona componente material (uma barra de adamante no valor de T$ 100). Sua forma de combate ganha um aspecto met\u00e1lico e sem express\u00f5es. Voc\u00ea recebe resist\u00eancia a dano 15/adamante e imunidade a atordoamento, dano n\u00e3o letal, doen\u00e7as, encantamento, fadiga, paralisia, necromancia, sangramento, sono, veneno e n\u00e3o precisa respirar."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para toque, o alvo para at\u00e9 cinco criaturas e a dura\u00e7\u00e3o para instant\u00e2nea. Os alvos entram em uma planta (de tamanho M\u00e9dio ou maior) e saem em outra planta do mesmo tamanho a at\u00e9 100km de dist\u00e2ncia, especificada em dire\u00e7\u00e3o e dist\u00e2ncia aproximadas (como \u201c50km ao norte\u201d)."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura."
      },
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia. Requer 4\u00ba c\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "muda o alcance para curto e o alvo para at\u00e9 10 criaturas. Requer 4\u00b0 c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para cone de 4,5m e o alvo para criaturas na \u00e1rea."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a regenera\u00e7\u00e3o de PV em 1d8+1."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d6 (+2d8 contra mortos-vivos)."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta a \u00e1rea em +6m de raio."
      },
      {
        "cost": "+5 PM",
        "description": "a luz purificadora do Deus-Sol dissipa todas as magias de necromancia ativas na \u00e1rea. Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+5 PM",
        "description": "o elemental muda para Enorme e recebe dois tipos de aliado indicados no seu elemento."
      },
      {
        "cost": "+5 PM",
        "description": "voc\u00ea convoca um elemental de cada tipo. Voc\u00ea pode ordenar que cada elemental auxilie voc\u00ea ou seus aliados. Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "como normal, mas voc\u00ea pode escolher um tipo de criaturas sem limita\u00e7\u00e3o (todos os animais, todos os monstros etc.)."
      },
      {
        "cost": "+8 PM",
        "description": "muda a dura\u00e7\u00e3o para sustentada. Al\u00e9m do normal, qualquer ataque, magia ou habilidade de uma criatura afetada \u00e9 desviado pelo efeito e n\u00e3o o atinge. Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+4 PM",
        "description": "aumenta o dano total em +2d12 e o dano m\u00ednimo em +1d12."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para toque e o alvo para at\u00e9 5 criaturas volunt\u00e1rias que estejam de m\u00e3os dadas. Depois que a magia \u00e9 lan\u00e7ada, as criaturas podem soltar as m\u00e3os. Requer 5\u00ba c\u00edrculo."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, o alvo pode caminhar sobre a \u00e1gua ou outros l\u00edquidos com seu deslocamento normal. Entretanto, isso n\u00e3o protege contra qualquer efeito que o l\u00edquido possa causar (o alvo pode andar sobre lava, mas ainda vai sofrer dano)."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, o alvo pode escolher 20 em todos os testes de Atletismo."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, o alvo pode escolher 20 em todos os testes de Acrobacia e pode fazer todas as manobras desta per\u00edcia mesmo sem treinamento."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alcance para curto e o alvo para at\u00e9 5 criaturas."
      },
      {
        "cost": "+5 PM",
        "description": "pode dissipar ''Aprisionamento''."
      },
      {
        "cost": "+5 PM",
        "description": "al\u00e9m do normal, o alvo tamb\u00e9m pode morrer por perda de PV ou se voc\u00ea morrer (um teste de Fortitude anula a morte)."
      },
      {
        "cost": "+3 PM",
        "description": "aumenta o b\u00f4nus dos testes em +5, e o dano de impacto em +1d6+6."
      },
      {
        "cost": "+5 PM",
        "description": "o muro \u00e9 feito de uma massa de esqueletos animados. Quando voc\u00ea lan\u00e7a a magia e no in\u00edcio de cada um de seus turnos, todos os inimigos adjacentes \u00e0 muralha sofrem 4d8 pontos de dano de corte e devem fazer um teste de Reflexos. Se falharem, s\u00e3o agarrados pela muralha. Uma criatura agarrada pode gastar uma a\u00e7\u00e3o padr\u00e3o para fazer um teste de Acrobacia ou Atletismo para se soltar."
      },
      {
        "cost": "+3 PM",
        "description": "muda a execu\u00e7\u00e3o para rea\u00e7\u00e3o, o alcance para curto, o alvo para 1 criatura e a dura\u00e7\u00e3o para instant\u00e2nea. Esta magia s\u00f3 pode ser usada em uma criatura que tenha acabado de fazer um teste. Obriga a criatura a fazer uma nova rolagem de dados e aceitar o novo resultado, seja ele um sucesso ou falha. Criaturas involunt\u00e1rias t\u00eam direito a um teste de Vontade para negar o efeito."
      },
      {
        "cost": "+5 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para \u00e1rea de explos\u00e3o de 6m de raio. Em vez de um raio, voc\u00ea dispara uma esfera de gelo que explode, causando o efeito da magia em todas as criaturas na \u00e1rea."
      },
      {
        "cost": "+4 PM",
        "description": "aumenta o dano das rajadas em +1d6 e o dano da rajada mista em +2d12."
      },
      {
        "cost": "+2 PM",
        "description": "transforma o sonho do alvo em um pesadelo. A v\u00edtima deve fazer um teste de Vontade. Se falhar, n\u00e3o recupera PV ou PM pela noite, sofre 1d10 pontos de dano de trevas e acorda fatigada. A v\u00edtima recebe b\u00f4nus ou penalidades em seu teste de resist\u00eancia, dependendo do conhecimento que voc\u00ea tiver dela. Use os mesmos modificadores da magia ''Vid\u00eancia''."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o n\u00famero de alvos em +1. Todos os alvos compartilham um mesmo sonho (ou pesadelo) entre si e com voc\u00ea."
      },
      {
        "cost": "+2 PM",
        "description": "aumenta o dano em +2d8."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para voc\u00ea e a dura\u00e7\u00e3o para sustentada. Uma vez por rodada, como uma a\u00e7\u00e3o padr\u00e3o, voc\u00ea pode disparar uma l\u00e2mina de ar contra um alvo em alcance m\u00e9dio, causando 6d8 pontos de dano de corte (Fortitude reduz \u00e0 metade)."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alvo para at\u00e9 cinco criaturas volunt\u00e1rias que voc\u00ea esteja tocando."
      },
      {
        "cost": "+1 PM",
        "description": "muda o alcance para toque e o alvo para 1 criatura."
      },
      {
        "cost": "+1 PM",
        "description": "al\u00e9m do normal, o alvo fica com sentidos apurados; ele recebe +10 em todos os testes de Percep\u00e7\u00e3o."
      },
      {
        "cost": "+2 PM",
        "description": "al\u00e9m do normal, o alvo escuta falsidades; ele recebe +10 em todos os testes de Intui\u00e7\u00e3o."
      },
      {
        "cost": "+4 PM",
        "description": "al\u00e9m do normal, o alvo enxerga atrav\u00e9s de paredes e barreiras com 30cm de espessura ou menos (as paredes e barreiras parecem transl\u00facidas)."
      },
      {
        "cost": "+5 PM",
        "description": "aumenta o dano de cada esfera em +2d6."
      },
      {
        "cost": "+5 PM",
        "description": "muda o tipo de dano de todas as esferas para ess\u00eancia (mas elas ainda causam os outros efeitos como se seu tipo de dano n\u00e3o mudasse)."
      },
      {
        "cost": "+5 PM",
        "description": "muda o efeito para que voc\u00ea n\u00e3o seja afetado."
      },
      {
        "cost": "+2 PM",
        "description": "criaturas que falhem no teste de resist\u00eancia ficam ca\u00eddas e presas sob os escombros (agarradas). Uma criatura agarrada pode escapar gastando uma a\u00e7\u00e3o padr\u00e3o e passando em um teste de Atletismo. Toda a \u00e1rea afetada fica coberta de escombros, sendo considerada terreno dif\u00edcil."
      },
      {
        "cost": "+1 PM",
        "description": "aumenta o dano em 10."
      },
      {
        "cost": "+5 PM",
        "description": "afeta apenas criaturas a sua escolha."
      },
      {
        "cost": "+1 PM",
        "description": "em vez de flutuar no ponto em que foi conjurado, o disco flutua atr\u00e1s de voc\u00ea, mantendo-se sempre adjacente."
      },
      {
        "cost": "+4 PM",
        "description": "muda a dura\u00e7\u00e3o para 1 dia."
      },
      {
        "cost": "+2 PM",
        "description": "muda a \u00e1rea para c\u00edrculo de 6m de raio e o alvo para criaturas escolhidas."
      },
      {
        "cost": "+5 PM",
        "description": "muda a execu\u00e7\u00e3o para 1 dia e adiciona custo adicional (sacrif\u00edcio de 1 PM). O alvo da magia precisa ser mantido em alcance curto do conjurador durante toda a execu\u00e7\u00e3o. Ao t\u00e9rmino, faz um teste de Vontade. Se falhar, perde a habilidade de lan\u00e7ar magias arcanas permanentemente. Se passar, resiste, mas ainda pode ser alvo da magia no dia seguinte. Nenhum poder mortal \u00e9 capaz de reverter essa perda. Os cl\u00e9rigos da Deusa da Magia dizem que ela chora cada vez que este ritual \u00e9 realizado."
      }
    ]
  },
  {
    "name": "Legi\u00e3o",
    "range": "m\u00e9dio",
    "target": "at\u00e9 10 criaturas na \u00e1rea",
    "duration": "sustentada",
    "description": "Voc\u00ea domina a mente dos alvos. Os alvos obedecem cegamente a seus comandos, exceto ordens claramente suicidas. Um alvo tem direito a um teste no final de cada um de seus turnos para se livrar do efeito. Alvos que passarem no teste ficam pasmos por 1 rodada enquanto recuperam a consci\u00eancia.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o n\u00famero de alvos em +1."
      }
    ]
  },
  {
    "name": "Mata-Drag\u00e3o",
    "execution": "duas rodadas",
    "range": "pessoal",
    "area": "explos\u00e3o em cone de 30m",
    "duration": "instant\u00e2nea",
    "description": "Esta \u00e9 uma das mais poderosas magias de destrui\u00e7\u00e3o existentes. Ap\u00f3s entoar longos c\u00e2nticos, o conjurador dispara uma carga de energia que varre uma enorme \u00e1rea \u00e0 sua frente, causando 20d12 pontos de dano de ess\u00eancia em todas as criaturas, constru\u00e7\u00f5es e objetos livres atingidos. Apesar de seu poder destrutivo, esta magia \u00e9 lenta, tornando seu uso dif\u00edcil em combate. Al\u00e9m disso, pode causar tantos danos colaterais que poucos conjuradores se arriscam a utiliz\u00e1-la.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "aumenta o dano em 1d12."
      }
    ]
  },
  {
    "name": "Palavra Primordial",
    "execution": "padr\u00e3o",
    "target": "1 criatura com menos n\u00edveis que voc\u00ea",
    "duration": "instant\u00e2nea",
    "resistence": "Vontade parcial",
    "description": "Voc\u00ea pronuncia uma palavra do idioma primordial da Cria\u00e7\u00e3o, que causa um dos efeitos abaixo, a sua escolha.\n\n\n\n''Atordoar'': a criatura fica atordoada por 2d4 rodadas. Se passar no teste de resist\u00eancia, fica desprevenida por 1d4 rodadas.\n\n\n\n''Cegar:'' a criatura fica cega. Se passar no teste de resist\u00eancia, fica ofuscada por 1d4 rodadas.\n\n\n\n''Matar:'' a criatura morre. Al\u00e9m do teste de Vontade, a criatura tem direito a um teste de Fortitude. Se passar em qualquer um deles, sofre 10d8 pontos de dano e fica sangrando.",
    "enhancements": []
  },
  {
    "name": "Possess\u00e3o",
    "execution": "padr\u00e3o",
    "range": "longo",
    "target": "1 criatura",
    "resistence": "Vontade anula",
    "description": "Voc\u00ea projeta sua consci\u00eancia no corpo do alvo. Enquanto possuir uma criatura, voc\u00ea assume o controle total do corpo dela. O seu pr\u00f3prio corpo fica inconsciente e a consci\u00eancia do alvo fica inerte. Em termos de jogo, voc\u00ea continua usando a sua ficha, mas com os atributos f\u00edsicos e deslocamento da criatura. Se o alvo passar no teste de resist\u00eancia, sabe que voc\u00ea tentou possu\u00ed-lo e fica imune a esta magia por um dia. Caso o corpo da criatura morra enquanto voc\u00ea a possui, a criatura morre e voc\u00ea deve fazer um teste de Vontade contra a CD da sua pr\u00f3pria magia. Se passar, sua consci\u00eancia retorna para o seu corpo (contanto que esteja dentro do alcance). Do contr\u00e1rio, voc\u00ea tamb\u00e9m morre. Retornar para o seu corpo voluntariamente \u00e9 uma a\u00e7\u00e3o livre",
    "enhancements": [
      {
        "cost": "+5 PM",
        "description": "voc\u00ea ganha acesso \u00e0s habilidades de ra\u00e7a e classe da criatura."
      },
      {
        "cost": "+5 PM",
        "description": "enquanto a magia durar e voc\u00ea estiver dentro do alcance do seu corpo original, pode \u201csaltar\u201d de uma criatura possu\u00edda para outra. O novo alvo tem direito a um teste de Vontade. Se falhar, voc\u00ea assume o controle do corpo dele e o alvo anterior recobra a consci\u00eancia."
      },
      {
        "cost": "+5 PM",
        "description": "muda a dura\u00e7\u00e3o para permanente, mas destr\u00f3i seu corpo original no processo. Uma criatura possu\u00edda pode fazer um teste de Vontade no come\u00e7o do dia para retomar seu corpo. Se passar, recobra a consci\u00eancia (e a sua pr\u00f3pria consci\u00eancia fica inerte). O teste se repete no in\u00edcio de cada dia. Se o corpo de uma criatura possu\u00edda morrer e houver outra criatura em alcance curto, voc\u00ea pode tentar possu\u00ed-la como uma rea\u00e7\u00e3o. Enquanto houver novos corpos para possuir, voc\u00ea \u00e9 imortal!"
      }
    ]
  },
  {
    "name": "Projetar Consci\u00eancia",
    "range": "ilimitado",
    "target": "local ou criatura conhecidos",
    "duration": "sustentada",
    "description": "Esta magia faz com que sua consci\u00eancia deixe seu corpo e se transporte instantaneamente para um local ou para perto de uma criatura alvo. Se escolher um local, ele precisa ser conhecido por voc\u00ea. Se escolher uma criatura, voc\u00ea transporta sua consci\u00eancia at\u00e9 onde a criatura estiver, contanto que estejam no mesmo plano.\n\n\n\nVoc\u00ea adquire uma forma fantasmag\u00f3rica invis\u00edvel, mas pode se mostrar usando uma a\u00e7\u00e3o de movimento. Pode se mover em qualquer dire\u00e7\u00e3o com deslocamento de voo 18m e, por ser incorp\u00f3reo, \u00e9 capaz de atravessar objetos s\u00f3lidos, mas fica limitado a se mover dentro dos limites do local, ou dentro de alcance curto da criatura alvo. Voc\u00ea pode ver e ouvir como se estivesse presente no local e pode falar mentalmente com qualquer criatura que possa ver, contanto que tenham um idioma em comum.\n\n\n\n'''+10 PM:''' al\u00e9m do normal, sua proje\u00e7\u00e3o \u00e9 capaz de lan\u00e7ar magias que n\u00e3o precisem de componentes materiais e tenham dura\u00e7\u00e3o diferente de sustentada. Sua forma fantasmag\u00f3rica funciona como na magia ''Forma Et\u00e9rea'', sendo afetada por magias de abjura\u00e7\u00e3o e ess\u00eancia, mas as magias que ela lan\u00e7a podem afetar criaturas corp\u00f3reas.",
    "enhancements": []
  },
  {
    "name": "Reanima\u00e7\u00e3o Impura",
    "execution": "completa",
    "range": "toque",
    "target": "1 criatura",
    "duration": "cena",
    "description": "Voc\u00ea reanima uma criatura morta recentemente (dentro da mesma cena), trazendo sua alma de volta ao corpo de forma for\u00e7ada. O tipo da criatura muda para morto-vivo, mas ela ret\u00e9m suas mem\u00f3rias e habilidades de quando estava viva, podendo inclusive lan\u00e7ar magias. A criatura pode pensar e falar livremente, mas obedece cegamente a seus comandos. Quando a cena termina, a criatura volta a ficar morta, mas muitos cl\u00e9rigos malignos usam meios para guardar e preservar o corpo de criaturas poderosas para serem reanimadas dessa forma quando necess\u00e1rio. Se for destru\u00edda, a criatura n\u00e3o pode ser reanimada novamente com esta magia.",
    "enhancements": []
  },
  {
    "name": "R\u00e9quiem",
    "range": "curto",
    "target": "criatura escolhidas",
    "duration": "sustentada",
    "resistence": "Vontade parcial",
    "description": "Esta magia cria uma ilus\u00e3o particular para cada uma das criaturas que atingir. Enquanto a magia durar, no in\u00edcio de cada um de seus turnos, cada criatura afetada deve fazer um teste de Vontade; se falhar, acha que n\u00e3o tomou as a\u00e7\u00f5es que realmente fez no turno anterior e \u00e9 obrigada a repetir as mesmas a\u00e7\u00f5es neste turno, com uma penalidade cumulativa de \u20135 em todos os testes para cada vez que se repetir (a penalidade n\u00e3o se aplica ao teste de Vontade contra esta magia). Por exemplo, se a criatura se aproximou de um alvo e o atacou, precisa se aproximar desse mesmo alvo e atacar novamente. A a\u00e7\u00e3o repetida consome PM e recursos normalmente e, caso exija um teste de resist\u00eancia, qualquer alvo faz esse teste com um b\u00f4nus igual ao da penalidade desta magia.",
    "enhancements": []
  },
  {
    "name": "Roubar a Alma",
    "execution": "padr\u00e3o",
    "range": "curto",
    "resistence": "Vontade parcial",
    "description": "Voc\u00ea rouba a alma da v\u00edtima, armazenando-a em um objeto. Se o alvo passar no teste de resist\u00eancia, sente o impacto de sua alma ser puxada para fora do corpo e fica pasmo por 1 rodada. Se falhar, seu corpo fica ca\u00eddo, inconsciente e inerte, enquanto sua alma \u00e9 transportada para dentro do objeto. O corpo n\u00e3o envelhece nem se decomp\u00f5e, permanecendo em estase. Ele pode ser atacado e destru\u00eddo normalmente. O objeto escolhido deve custar T$ 1.000 por n\u00edvel da criatura. Um objeto que n\u00e3o seja valioso o bastante se quebrar\u00e1 quando a magia for lan\u00e7ada (embora personagens n\u00e3o conhe\u00e7am o conceito de \u201cn\u00edvel\u201d dentro do mundo de jogo, podem ter no\u00e7\u00e3o do poder geral de uma criatura espec\u00edfica, estimando assim o valor do objeto). Se o objeto for destru\u00eddo, a magia se esvai. Se o corpo ainda estiver dispon\u00edvel, a alma retorna para ele. Caso contr\u00e1rio, escapa para os Reinos dos Deuses.\n\n\n\n''Custo adicional:'' sacrif\u00edcio de 1 PM.",
    "enhancements": [
      {
        "cost": "+5 PM",
        "description": "o objeto que abriga a alma det\u00e9m os mesmos PM totais que o alvo. Se estiver empunhando o objeto, voc\u00ea pode usar esses PM para lan\u00e7ar magias no lugar dos seus. O objeto recupera PM por dia como se o personagem estivesse em descanso normal."
      }
    ]
  },
  {
    "name": "Segunda Chance",
    "execution": "padr\u00e3o",
    "range": "toque",
    "target": "1 criatura",
    "duration": "instant\u00e2nea",
    "description": "Um brilho alaranjado, na forma de asas de f\u00eanix, emana do alvo. Ele recupera 200 pontos de vida e se cura de qualquer das seguintes condi\u00e7\u00f5es: abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, envenenado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, ofuscado, paralisado, pasmo ou surdo.",
    "enhancements": [
      {
        "cost": "+1 PM",
        "description": "aumenta a cura em +20 PV."
      },
      {
        "cost": "+2 PM",
        "description": "muda o alcance para curto e o alvo para at\u00e9 5 criaturas."
      },
      {
        "cost": "+5 PM",
        "description": "muda o alvo para uma criatura que tenha morrido a at\u00e9 uma rodada. Esta magia pode cur\u00e1-la."
      }
    ]
  },
  {
    "name": "Semiplano",
    "execution": "completa",
    "range": "curto",
    "effect": "semiplano com 30m de lado",
    "duration": "1 dia",
    "description": "Voc\u00ea cria um semiplano \u2014 uma dimens\u00e3o particular. Voc\u00ea pode entrar no semiplano gastando uma a\u00e7\u00e3o padr\u00e3o e 1 PM, desaparecendo do plano material como se tivesse se teletransportado. Voc\u00ea pode levar criaturas volunt\u00e1rias que esteja tocando, ao custo de 1 PM por criatura extra. Voc\u00ea tamb\u00e9m pode levar objetos que esteja tocando, ao custo de 1 PM por 200kg. Uma vez no semiplano, voc\u00ea pode gastar uma a\u00e7\u00e3o completa para voltar ao plano material, no mesmo local onde estava. Caso conhe\u00e7a a magia ''Viagem Planar'', pode lan\u00e7\u00e1-la para voltar ao plano material em outro local.\n\n\n\nVoc\u00ea escolhe a forma e a apar\u00eancia do semiplano \u2014 uma caverna, um asteroide que singra o \u00e9ter, um palacete de cristal etc. Ele cont\u00e9m ar, luz e calor, mas al\u00e9m disso \u00e9 vazio. Entretanto, voc\u00ea pode levar itens (mob\u00edlia, ferramentas etc.) a cada viagem.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "adiciona alvo (1 criatura). Voc\u00ea cria uma semiplano labir\u00edntico e expulsa o alvo para ele. A cada rodada, a v\u00edtima tem direito a um teste de Intelig\u00eancia (CD 30), com b\u00f4nus cumulativo de +1 para cada teste j\u00e1 realizado, para escapar do labirinto. Quando o alvo escapa, a magia termina e o alvo reaparece no plano material no mesmo local onde estava quando a magia foi lan\u00e7ada. Magias como ''Salto Dimensional'' e ''Teletransporte'' n\u00e3o ajudam a escapar do labirinto, mas ''Viagem Planar'', sim."
      },
      {
        "cost": "+5 PM",
        "description": "muda a dura\u00e7\u00e3o para permanente e adiciona componente material (diorama do semiplano feito de materiais preciosos no valor de T$ 5.000). Voc\u00ea pode lan\u00e7ar a magia diversas vezes para aumentar as dimens\u00f5es do semiplano em +30m de lado a cada vez."
      }
    ]
  },
  {
    "name": "Sombra Assassina",
    "execution": "padr\u00e3o",
    "range": "curto",
    "target": "1 criatura",
    "duration": "cena",
    "resistence": "Vontade parcial",
    "description": "Esta magia cria uma duplicata ilus\u00f3ria do alvo na forma de uma silhueta, ligada a ele como se fosse uma manifesta\u00e7\u00e3o s\u00f3lida de sua pr\u00f3pria sombra. A duplicata de sombras segue automaticamente o alvo. Sempre que o alvo faz uma a\u00e7\u00e3o hostil \u2014 fazer um ataque, usar uma habilidade, lan\u00e7ar uma magia \u2014 a sombra imediatamente realiza a mesma a\u00e7\u00e3o contra o alvo, usando as mesmas estat\u00edsticas e rolagens. A sombra pode ser atacada, tem as mesmas estat\u00edsticas do alvo e \u00e9 destru\u00edda quando chega a 0 PV. Se o alvo passar no teste de resist\u00eancia, a sombra desaparece no final do turno do alvo, depois de copiar sua a\u00e7\u00e3o dessa rodada.\n\n\n\n'''+10 PM:''' muda o alvo para criaturas escolhidas na \u00e1rea.",
    "enhancements": []
  },
  {
    "name": "Toque da Morte",
    "execution": "padr\u00e3o",
    "range": "toque",
    "target": "1 criatura",
    "duration": "instant\u00e2nea",
    "resistence": "Fortitude parcial",
    "description": "Sua m\u00e3o exala energias letais. Se a criatura tocada falhar no teste de Fortitude, seus PV s\u00e3o reduzidos a \u201310; se passar, sofre 10d8 pontos de dano de trevas.",
    "enhancements": [
      {
        "cost": "+2 PM",
        "description": "muda o alcance para curto. Em vez de tocar no alvo, voc\u00ea dispara um raio p\u00farpura da ponta de seu dedo indicador."
      }
    ]
  }
]
