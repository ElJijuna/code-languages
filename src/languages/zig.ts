import type { Language } from '@/types';

export const zig = {
  slug: 'zig',
  publishedDate: '2016-02-08',
  extensions: ['.zig', '.zon'],
  author: 'Andrew Kelley / Zig Software Foundation',
  website: 'https://ziglang.org',
  paradigms: ['imperative', 'procedural', 'systems', 'compile-time metaprogramming'],
  tooling: {
    runtimes: ['Native'],
    packageManagers: ['Zig Package Manager'],
    ecosystems: ['Systems Programming', 'Embedded', 'Game Development', 'Cross-compilation'],
  },
  version: '0.16.0',
  logo: 'https://cdn.simpleicons.org/zig/F7A41D',
  color: '#F7A41D',
  i18n: {
    en: {
      name: 'Zig',
      description:
        'A systems programming language and toolchain focused on robustness, control, and cross-compilation.',
      longDescription:
        'Zig is a general-purpose systems programming language and toolchain designed for explicit control, predictable performance, cross-compilation, and maintaining robust software. It provides manual memory management, comptime execution, error unions, integrated build tooling, and C interoperability.\n\nIt is used for systems software, embedded targets, command-line tools, game engines, low-level libraries, cross-platform native applications, and projects that need a compact language with strong compile-time capabilities.',
    },
    es: {
      name: 'Zig',
      description:
        'Un lenguaje y toolchain de sistemas enfocado en robustez, control y cross-compilation.',
      longDescription:
        'Zig es un lenguaje de programacion de sistemas y toolchain de proposito general disenado para control explicito, rendimiento predecible, cross-compilation y mantenimiento de software robusto. Ofrece gestion manual de memoria, ejecucion comptime, uniones de error, tooling de build integrado e interoperabilidad con C.\n\nSe usa en software de sistemas, targets embebidos, herramientas de linea de comandos, motores de juegos, bibliotecas de bajo nivel, aplicaciones nativas multiplataforma y proyectos que necesitan un lenguaje compacto con capacidades fuertes de compilacion en tiempo de build.',
    },
    it: {
      name: 'Zig',
      description:
        'Un linguaggio e un set di strumenti di programmazione per sistemi focalizzati su robustezza, controllo e cross-compilazione.',
      longDescription:
        'Zig e un linguaggio e un set di strumenti di programmazione per sistemi di uso generale, progettati per un controllo esplicito, prestazioni prevedibili, cross-compilazione e per mantenere software robusto. Fornisce gestione manuale della memoria, esecuzione a tempo di compilazione, unioni di errori, strumenti di build integrati e interoperabilita con C.\n\nViene utilizzato per software di sistema, destinazioni embedded, strumenti a riga di comando, motori di gioco, librerie a basso livello, applicazioni native multipiattaforma e progetti che necessitano di un linguaggio compatto con forti capacita di compilazione.',
    },
    fr: {
      name: 'Zig',
      description:
        "Un langage et un ensemble d'outils de programmation pour systemes, axe sur la robustesse, le controle et la compilation croisee.",
      longDescription:
        "Zig est un langage et un ensemble d'outils de programmation pour systemes, concu pour un controle explicite, des performances previsibles, la compilation croisee et le maintien de logiciels robustes. Il fournit une gestion manuelle de la memoire, l'execution de comptime, des unions d'erreurs, des outils de construction integres et l'interoperabilite avec C. \n\nIl est utilise pour les logiciels de systemes, les cibles embarquees, les outils en ligne de commande, les moteurs de jeux, les bibliotheques de bas niveau, les applications natives multiplateformes et les projets qui ont besoin d'un langage compact avec de puissantes capacites de compilation.",
    },
    de: {
      name: 'Zig',
      description:
        'Eine Programmiersprache und Toolchain für Systemprogrammierung, die auf Robustheit, Kontrolle und Cross-Compilierung ausgerichtet ist.',
      longDescription:
        'Zig ist eine allgemeine Programmiersprache und Toolchain für Systemprogrammierung, die auf explizite Kontrolle, vorhersehbare Leistung, Cross-Compilierung und die Erstellung robuster Software abzielt. Sie bietet manuelle Speicherverwaltung, `comptime`-Ausführung, Fehler-Unionen, integrierte Build-Tools und C-Interoperabilität.\n\nSie wird für Systemsoftware, eingebettete Systeme, Kommandozeilen-Tools, Spiele-Engines, Low-Level-Bibliotheken, plattformübergreifende native Anwendungen und Projekte verwendet, die eine kompakte Sprache mit starken Compile-Zeit-Funktionen benötigen.',
    },
    pt: {
      name: 'Zig',
      description:
        'Linguagem e conjunto de ferramentas de programação de sistemas, focada em robustez, controle e compilação cruzada.',
      longDescription:
        'Zig é uma linguagem de programação de sistemas e conjunto de ferramentas de propósito geral, projetada para controle explícito, desempenho previsível, compilação cruzada e manutenção de software robusto. Fornece gerenciamento manual de memória, execução em tempo de compilação, união de erros, ferramentas de construção integradas e interoperabilidade com C.\n\nÉ usada para software de sistemas, alvos embarcados, ferramentas de linha de comando, motores de jogos, bibliotecas de baixo nível, aplicativos nativos multiplataforma e projetos que precisam de uma linguagem compacta com fortes capacidades de tempo de compilação.',
    },
  },
} satisfies Language;
