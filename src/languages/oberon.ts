import type { Language } from '@/types';

export const oberon = {
  slug: 'oberon',
  publishedDate: '1987-01-01',
  extensions: ['.ob', '.mod'],
  author: 'Niklaus Wirth',
  website: 'https://people.inf.ethz.ch/wirth/Oberon/',
  paradigms: ['imperative', 'procedural', 'modular'],
  tooling: {
    runtimes: ['Oberon System', 'Oxford Oberon-2 compiler', 'Classic compilers'],
    ecosystems: ['Operating Systems', 'Education', 'Language Design'],
  },
  version: 'Oberon-2',
  logo: 'https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/oberon.svg',
  color: '#0F766E',
  i18n: {
    en: {
      name: 'Oberon',
      description:
        'A compact Pascal-family language with modules, type extension, and system roots.',
      longDescription:
        'Oberon is a compact language and operating-system project created by Niklaus Wirth and Jurg Gutknecht. The language simplifies Modula-2 while adding type extension and a small, strongly typed module system.\n\nOberon is important in operating-system research, compiler construction, and teaching because it shows how a small language, compiler, and environment can form a coherent software system.',
    },
    es: {
      name: 'Oberon',
      description:
        'Lenguaje compacto de la familia Pascal con modulos, extension de tipos y raices de sistema.',
      longDescription:
        'Oberon es un lenguaje y proyecto de sistema operativo creado por Niklaus Wirth y Jurg Gutknecht. Simplifica Modula-2 y agrega extension de tipos junto con un sistema de modulos pequeno y fuertemente tipado.\n\nEs importante en investigacion de sistemas operativos, construccion de compiladores y ensenanza porque muestra como lenguaje, compilador y entorno pueden formar un sistema coherente.',
    },
    it: {
      name: 'Oberon',
      description:
        'Un linguaggio Pascal-family compatto con moduli, estensione dei tipi e radici di sistema.',
      longDescription:
        "Oberon è un linguaggio e progetto per sistemi operativi compatti creato da Niklaus Wirth e Jurg Gutknecht. Il linguaggio semplifica Modula-2 aggiungendo l'estensione dei tipi e un piccolo sistema modulare fortemente tipizzato.\n\nOberon è importante nella ricerca sui sistemi operativi, nella costruzione di compilatori e nell'insegnamento perché dimostra come un piccolo linguaggio, un compilatore ed un ambiente possano formare un sistema software coerente.",
    },
    fr: {
      name: 'Oberon',
      description:
        'Un langage compact de la famille Pascal avec des modules, une extension de types et des racines système.',
      longDescription:
        "Oberon est un langage et un projet de système d'exploitation compact créé par Niklaus Wirth et Jurg Gutknecht. Le langage simplifie Modula-2 tout en ajoutant une extension de type et un petit système de modules fortement typé.\n\nOberon est important dans la recherche sur les systèmes d'exploitation, la construction de compilateurs et l'enseignement car il montre comment un petit langage, un compilateur et un environnement peuvent former un système logiciel cohérent.",
    },
    de: {
      name: 'Oberon',
      description: 'Eine kompakte Pascal-ähnliche Sprache mit Modulen, Typen und Systemwurzeln.',
      longDescription:
        'Oberon ist eine kompakte Sprache und ein Betriebssystemprojekt von Niklaus Wirth und Jurg Gutknecht. Die Sprache vereinfacht Modula-2 und fügt Typerweiterungen sowie ein kleines, stark typisiertes Modulsystem hinzu.\n\nOberon ist wichtig für die Forschung im Bereich Betriebssysteme, Compilerbau und Lehre, da es zeigt, wie eine kleine Sprache, ein Compiler und eine Umgebung ein kohärentes Softwaresystem bilden können.',
    },
    pt: {
      name: 'Oberon',
      description:
        'Linguagem compacta da família Pascal com módulos, extensão de tipos e raízes do sistema.',
      longDescription:
        'Oberon é uma linguagem e projeto de sistema operacional compacto criado por Niklaus Wirth e Jurg Gutknecht. A linguagem simplifica o Modula-2 adicionando extensão de tipos e um pequeno sistema modular fortemente tipado.\n\nOberon é importante em pesquisa de sistemas operacionais, construção de compiladores e ensino porque demonstra como uma pequena linguagem, compilador e ambiente podem formar um sistema de software coerente.',
    },
  },
} satisfies Language;
