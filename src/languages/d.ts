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
  },
} satisfies Language;
