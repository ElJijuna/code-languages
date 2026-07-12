import type { Language } from '@/types';

export const algol = {
  slug: 'algol',
  status: 'historical',
  publishedDate: '1958-01-01',
  extensions: ['.alg', '.algol'],
  author: 'ACM-GAMM committee',
  website: 'https://en.wikipedia.org/wiki/ALGOL',
  paradigms: ['imperative', 'procedural', 'structured'],
  tooling: {
    runtimes: ['ALGOL 60 compilers', 'ALGOL 68 Genie'],
    ecosystems: ['Academic Computing', 'Language Design', 'Numerical Computing'],
  },
  version: 'ALGOL 68',
  logo: 'https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/algol.svg',
  color: '#6B7280',
  i18n: {
    en: {
      name: 'ALGOL',
      description:
        'A family of early algorithmic languages that shaped block structure and formal language design.',
      longDescription:
        'ALGOL introduced influential ideas for writing algorithms, including nested blocks, lexical scope, structured control flow, and a notation close to mathematical pseudocode.\n\nAlthough few modern systems use ALGOL directly, its design strongly influenced Pascal, C, Simula, Ada, and many later languages used in scientific and systems programming.',
    },
    es: {
      name: 'ALGOL',
      description:
        'Una familia temprana de lenguajes algoritmicos que influyo en bloques y diseno formal.',
      longDescription:
        'ALGOL introdujo ideas influyentes para escribir algoritmos, como bloques anidados, alcance lexico, control estructurado y una notacion cercana al pseudocodigo matematico.\n\nAunque hoy se usa poco directamente, su diseno influyo en Pascal, C, Simula, Ada y muchos lenguajes posteriores.',
    },
    it: {
      name: 'ALGOL',
      description:
        'Una famiglia di primi linguaggi algoritmici che hanno plasmato la struttura a blocchi e il design dei linguaggi formali.',
      longDescription:
        'ALGOL ha introdotto idee influenti per la scrittura di algoritmi, tra cui blocchi nidificati, ambito lessicale, flusso di controllo strutturato e una notazione simile al pseudocodice matematico.\n\nSebbene pochi sistemi moderni utilizzino ALGOL direttamente, il suo design ha fortemente influenzato Pascal, C, Simula, Ada e molti altri linguaggi utilizzati nella programmazione scientifica e dei sistemi.',
    },
    fr: {
      name: 'ALGOL',
      description:
        'Une famille de premiers langages algorithmiques qui ont façonné la structure en blocs et la conception des langages formels.',
      longDescription:
        'ALGOL a introduit des idées influentes pour écrire des algorithmes, notamment les blocs imbriqués, la portée lexicale, le contrôle structuré et une notation proche du pseudocode mathématique.\n\nBien que peu de systèmes modernes utilisent ALGOL directement, sa conception a fortement influencé Pascal, C, Simula, Ada et de nombreux autres langages utilisés dans la programmation scientifique et système.',
    },
    de: {
      name: 'ALGOL',
      description:
        'Eine Familie früherer Algorithmus-Sprachen, die die Blockstruktur und das formale Sprachdesign prägten.',
      longDescription:
        'ALGOL führte einflussreiche Ideen für das Schreiben von Algorithmen ein, darunter verschachtelte Blöcke, lexikalische Scope, strukturierte Kontrollflüsse und eine Notation, die der mathematischen Pseudocode ähnelt.\n\nObwohl nur wenige moderne Systeme ALGOL direkt verwenden, beeinflusste sein Design stark Pascal, C, Simula, Ada und viele spätere Sprachen, die in der wissenschaftlichen und Systemprogrammierung verwendet werden.',
    },
    pt: {
      name: 'ALGOL',
      description:
        'Uma família de linguagens algorítmicas iniciais que moldou a estrutura de blocos e o design de linguagem formal.',
      longDescription:
        'ALGOL introduziu ideias influentes para escrever algoritmos, incluindo blocos aninhados, escopo lexical, fluxo de controle estruturado e uma notação próxima ao pseudocódigo matemático.\n\nEmbora poucas linguagens modernas usem ALGOL diretamente, seu design influenciou fortemente Pascal, C, Simula, Ada e muitas outras linguagens usadas em programação científica e de sistemas.',
    },
  },
} satisfies Language;
