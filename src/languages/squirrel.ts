import type { Language } from '@/types';

export const squirrel = {
  slug: 'squirrel',
  publishedDate: '2003-01-01',
  extensions: ['.nut'],
  author: 'Alberto Demichelis',
  website: 'https://github.com/albertodemichelis/squirrel',
  paradigms: ['object-oriented', 'scripting', 'procedural', 'functional'],
  tooling: {
    runtimes: ['Squirrel VM'],
    ecosystems: ['Game Development', 'Embedded Scripting', 'Valve Source Engine'],
  },
  version: '3.2',
  logo: 'https://dummyimage.com/32x32/CC4A00/ffffff.png&text=SQ',
  color: '#CC4A00',
  i18n: {
    en: {
      name: 'Squirrel',
      description:
        'A lightweight scripting language designed for embedding in games and C/C++ applications.',
      longDescription:
        'Squirrel is a high-level, lightweight scripting language designed to be embedded in applications and game engines. Its syntax is heavily influenced by C, C++, and Java, and it features a stack-based virtual machine, closures, generators, and automatic memory management through reference counting with cycle detection.\n\nCreated by Alberto Demichelis, Squirrel gained wide adoption through the Valve Source Engine, where it powers scripts in games such as Left 4 Dead 2 and Team Fortress 2. The language trades some runtime safety for performance and a small footprint, making it well suited to real-time applications where scripting overhead must be minimal.',
    },
    es: {
      name: 'Squirrel',
      description:
        'Lenguaje de scripting ligero disenado para incrustar en juegos y aplicaciones C/C++.',
      longDescription:
        'Squirrel es un lenguaje de scripting de alto nivel y bajo peso disenado para incrustarse en aplicaciones y motores de juego. Su sintaxis esta influenciada por C, C++ y Java, con una maquina virtual basada en pila, closures, generadores y gestion automatica de memoria mediante conteo de referencias con deteccion de ciclos.\n\nCreado por Alberto Demichelis, Squirrel obtuvo amplia adopcion a traves del motor Valve Source, donde impulsa scripts en juegos como Left 4 Dead 2 y Team Fortress 2. El lenguaje ofrece rendimiento y huella reducida a cambio de algo de seguridad en tiempo de ejecucion, siendo ideal para aplicaciones en tiempo real.',
    },
    it: {
      name: 'Squirrel',
      description:
        'Linguaggio di scripting leggero progettato per essere incorporato in giochi e applicazioni C/C++.',
      longDescription:
        'Squirrel e un linguaggio di scripting ad alto livello e leggero progettato per essere incorporato in applicazioni e motori di gioco. La sua sintassi e fortemente influenzata da C, C++ e Java, con una macchina virtuale basata su stack, closure, generatori e gestione automatica della memoria tramite conteggio dei riferimenti con rilevamento dei cicli.\n\nCreato da Alberto Demichelis, Squirrel ha ottenuto ampia adozione attraverso il Valve Source Engine, dove alimenta script in giochi come Left 4 Dead 2 e Team Fortress 2. Il linguaggio privilegia prestazioni e ridotto ingombro rispetto ad alcune garanzie di sicurezza, rendendolo adatto ad applicazioni in tempo reale.',
    },
    fr: {
      name: 'Squirrel',
      description:
        'Langage de script leger concu pour etre integre dans des jeux et applications C/C++.',
      longDescription:
        'Squirrel est un langage de script leger et haut niveau concu pour etre integre dans des applications et moteurs de jeu. Sa syntaxe est fortement inspiree de C, C++ et Java, avec une machine virtuelle a pile, des closures, des generateurs et une gestion automatique de la memoire par comptage de references avec detection des cycles.\n\nCree par Alberto Demichelis, Squirrel a ete largement adopte via le Valve Source Engine, ou il alimente les scripts de jeux tels que Left 4 Dead 2 et Team Fortress 2. Il privilegia performances et encombrement minimal au detriment de certaines garanties de securite, ce qui le rend adapte aux applications temps reel.',
    },
    de: {
      name: 'Squirrel',
      description:
        'Leichtgewichtige Skriptsprache fur die Einbettung in Spiele und C/C++-Anwendungen.',
      longDescription:
        'Squirrel ist eine hochwertige, leichtgewichtige Skriptsprache, die fur die Einbettung in Anwendungen und Spiel-Engines entwickelt wurde. Die Syntax ist stark von C, C++ und Java beeinflusst und umfasst eine stapelbasierte virtuelle Maschine, Closures, Generatoren und automatische Speicherverwaltung durch Referenzzahlung mit Zykluserkennung.\n\nVon Alberto Demichelis entwickelt, wurde Squirrel durch die Valve Source Engine weit verbreitet, wo es Skripte in Spielen wie Left 4 Dead 2 und Team Fortress 2 antreibt. Die Sprache tauscht einige Laufzeitsicherheiten gegen Leistung und geringen Speicherbedarf, was sie fur Echtzeitanwendungen geeignet macht.',
    },
    pt: {
      name: 'Squirrel',
      description:
        'Linguagem de script leve projetada para incorporacao em jogos e aplicacoes C/C++.',
      longDescription:
        'Squirrel e uma linguagem de script de alto nivel e baixo peso projetada para ser incorporada em aplicacoes e engines de jogos. Sua sintaxe e fortemente influenciada por C, C++ e Java, com uma maquina virtual baseada em pilha, closures, geradores e gerenciamento automatico de memoria por contagem de referencias com deteccao de ciclos.\n\nCriada por Alberto Demichelis, o Squirrel obteve ampla adocao pelo Valve Source Engine, onde impulsiona scripts em jogos como Left 4 Dead 2 e Team Fortress 2. A linguagem privilegia desempenho e pegada reduzida em detrimento de algumas garantias de seguranca, sendo ideal para aplicacoes em tempo real.',
    },
  },
} satisfies Language;
