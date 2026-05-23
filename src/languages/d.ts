import type { Language } from "../types";

export const d = {
  slug: "d",
  publishedDate: "2001-12-08",
  extensions: [".d", ".di"],
  author: "Walter Bright / D Language Foundation",
  website: "https://dlang.org",
  paradigms: ["systems", "imperative", "object-oriented", "generic", "functional"],
  tooling: {
    runtimes: ["Native", "D Runtime"],
    packageManagers: ["DUB"],
    ecosystems: ["Systems Programming", "Native Applications", "Tooling", "Game Development"],
  },
  version: "2.112.0",
  logo: "https://cdn.simpleicons.org/d/BA595E",
  color: "#BA595E",
  i18n: {
    en: {
      name: "D",
      description:
        "A systems programming language combining native performance with high-level abstractions.",
      longDescription:
        "D is a general-purpose systems programming language with C-like syntax, native compilation, garbage collection, manual memory options, templates, compile-time function execution, ranges, contracts, and interoperability with C.\n\nIt is used for command-line tools, systems software, native services, high-performance applications, game tooling, compilers, and projects that want low-level control alongside expressive metaprogramming and modern language features.",
    },
    es: {
      name: "D",
      description:
        "Un lenguaje de sistemas que combina rendimiento nativo con abstracciones de alto nivel.",
      longDescription:
        "D es un lenguaje de programacion de sistemas de proposito general con sintaxis similar a C, compilacion nativa, garbage collection, opciones de memoria manual, templates, ejecucion de funciones en tiempo de compilacion, ranges, contratos e interoperabilidad con C.\n\nSe usa en herramientas de linea de comandos, software de sistemas, servicios nativos, aplicaciones de alto rendimiento, tooling para juegos, compiladores y proyectos que buscan control de bajo nivel junto con metaprogramacion expresiva y caracteristicas modernas de lenguaje.",
    },
    it: {
      name: "D",
      description:
        "Un linguaggio di programmazione per sistemi che combina prestazioni native con astrazioni di alto livello.",
      longDescription:
        "D e un linguaggio di programmazione per sistemi general-purpose con una sintassi simile a C, compilazione nativa, garbage collection, opzioni di gestione manuale della memoria, template, esecuzione di funzioni a tempo di compilazione, range, contratti e interoperabilita con C.\n\nViene utilizzato per strumenti da riga di comando, software di sistema, servizi nativi, applicazioni ad alte prestazioni, strumenti di sviluppo di giochi, compilatori e progetti che desiderano un controllo a basso livello insieme a metaprogrammazione espressiva e funzionalita linguistiche moderne.",
    },
    fr: {
      name: "D",
      description:
        "Un langage de programmation systeme combinant des performances natives avec des abstractions de haut niveau.",
      longDescription:
        "D est un langage de programmation systeme general a usage, dote d'une syntaxe semblable a celle de C, de compilation native, de ramasse-miettes, d'options de gestion manuelle de la memoire, de modeles, d'execution de fonctions au moment de la compilation, de plages, de contrats et d'interoperabilite avec C.\n\nIl est utilise pour les outils en ligne de commande, les logiciels systeme, les services natifs, les applications a haute performance, les outils de developpement de jeux, les compilateurs et les projets qui souhaitent un controle de bas niveau, ainsi que des meta-programmation et des fonctionnalites de langage modernes.",
    },
    de: {
      name: "D",
      description:
        "Ein Systemprogrammiersprache, die native Leistung mit High-Level-Abstraktionen kombiniert.",
      longDescription:
        "D ist eine allgemeine Systemprogrammiersprache mit C-\u00e4hnlicher Syntax, nativem Kompilieren, Garbage Collection, manuellen Speicheroptionen, Templates, Compile-Time-Funktionsausf\u00fchrung, Ranges, Vertr\u00e4gen und Interoperabilit\u00e4t mit C.\n\nEs wird f\u00fcr Kommandozeilen-Tools, Systemsoftware, native Dienste, Hochleistungsanwendungen, Game-Tooling, Compiler und Projekte verwendet, die eine Low-Level-Kontrolle zusammen mit ausdrucksstarker Metaprogrammierung und modernen Sprachfunktionen w\u00fcnschen.",
    },
    pt: {
      name: "D",
      description:
        "Linguagem de programa\u00e7\u00e3o de sistemas que combina desempenho nativo com abstra\u00e7\u00f5es de alto n\u00edvel.",
      longDescription:
        "D \u00e9 uma linguagem de programa\u00e7\u00e3o de sistemas de uso geral com sintaxe semelhante \u00e0 C, compila\u00e7\u00e3o nativa, coleta de lixo, op\u00e7\u00f5es de gerenciamento manual de mem\u00f3ria, templates, execu\u00e7\u00e3o de fun\u00e7\u00f5es em tempo de compila\u00e7\u00e3o, ranges, contratos e interoperabilidade com C.\n\n\u00c9 usada para ferramentas de linha de comando, software de sistemas, servi\u00e7os nativos, aplica\u00e7\u00f5es de alto desempenho, ferramentas de jogos, compiladores e projetos que desejam controle de baixo n\u00edvel, juntamente com metaprograma\u00e7\u00e3o expressiva e recursos de linguagem modernos.",
    },
  },
} satisfies Language;
