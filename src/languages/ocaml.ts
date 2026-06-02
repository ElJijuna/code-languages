import type { Language } from '../types';

export const ocaml = {
  slug: 'ocaml',
  publishedDate: '1996-01-01',
  extensions: ['.ml', '.mli', '.mll', '.mly', '.mlt', '.eliom', '.eliomi'],
  author: 'Xavier Leroy, Jerome Vouillon, Damien Doligez, Didier Remy, Ascander Suarez',
  website: 'https://ocaml.org',
  paradigms: ['functional', 'imperative', 'object-oriented', 'modular'],
  tooling: {
    runtimes: ['OCaml Runtime', 'Native Code Compiler', 'Bytecode Interpreter'],
    packageManagers: ['opam', 'Dune'],
    ecosystems: ['Compilers', 'Formal Methods', 'Systems Programming', 'Web'],
  },
  version: '5.6.0',
  logo: 'https://cdn.simpleicons.org/ocaml/EC6813',
  color: '#EC6813',
  i18n: {
    en: {
      name: 'OCaml',
      description:
        'A statically typed ML-family language with modules, inference, and native compilation.',
      longDescription:
        'OCaml combines functional, imperative, and object-oriented programming with Hindley-Milner type inference, algebraic data types, pattern matching, functors, and a powerful module system.\n\nIt is used for compilers, theorem provers, static analysis, developer tools, financial systems, systems software, and production services where strong types, performance, and maintainability matter.',
    },
    es: {
      name: 'OCaml',
      description:
        'Un lenguaje de la familia ML con tipado estatico, modulos, inferencia y compilacion nativa.',
      longDescription:
        'OCaml combina programacion funcional, imperativa y orientada a objetos con inferencia de tipos Hindley-Milner, tipos algebraicos, pattern matching, functors y un sistema de modulos potente.\n\nSe usa en compiladores, demostradores de teoremas, analisis estatico, herramientas de desarrollo, sistemas financieros, software de sistemas y servicios de produccion donde importan los tipos fuertes, el rendimiento y la mantenibilidad.',
    },
    it: {
      name: 'OCaml',
      description:
        'Un linguaggio ML-family staticamente tipizzato con moduli, inferenza e compilazione nativa.',
      longDescription:
        "OCaml combina la programmazione funzionale, imperativa e orientata agli oggetti con l'inferenza di tipo di Hindley-Milner, tipi di dati algebrici, corrispondenza di pattern, funtori e un potente sistema di moduli.\n\nE utilizzato per compilatori, dimostratori di teoremi, analisi statica, strumenti per sviluppatori, sistemi finanziari, software di sistema e servizi di produzione in cui sono importanti tipi forti, prestazioni e manutenibilita.",
    },
    fr: {
      name: 'OCaml',
      description:
        "Un langage de la famille ML, statiquement type, avec des modules, l'inference et la compilation native.",
      longDescription:
        "OCaml combine la programmation fonctionnelle, imperative et orientee objet avec l'inference de type de Hindley-Milner, les types de donnees algebriques, la correspondance de motifs, les fonctions et un systeme de modules puissant.\n\nIl est utilise pour les compilateurs, les prouveurs de theoremes, l'analyse statique, les outils de developpement, les systemes financiers, les logiciels systeme et les services de production ou les types forts, les performances et la maintenabilite sont importants.",
    },
    de: {
      name: 'OCaml',
      description:
        'Eine statisch typisierte ML-Familie mit Modulen, Typinferenz und nativem Kompilieren.',
      longDescription:
        'OCaml kombiniert funktionale, imperative und objektorientierte Programmierung mit Hindley-Milner-Typinferenz, algebraischen Datentypen, Mustervergleich, Funktoren und einem leistungsstarken Modulsystem.\n\nEs wird f\u00fcr Compiler, Theorembeweiser, statische Analyse, Entwicklerwerkzeuge, Finanzsysteme, Systemsoftware und Produktionsdienste verwendet, bei denen starke Typen, Leistung und Wartbarkeit wichtig sind.',
    },
    pt: {
      name: 'OCaml',
      description:
        'Linguagem estaticamente tipada da fam\u00edlia ML, com m\u00f3dulos, infer\u00eancia e compila\u00e7\u00e3o nativa.',
      longDescription:
        'OCaml combina programa\u00e7\u00e3o funcional, imperativa e orientada a objetos com infer\u00eancia de tipo Hindley-Milner, tipos de dados alg\u00e9bricos, correspond\u00eancia de padr\u00f5es, functors e um sistema de m\u00f3dulos poderoso.\n\n\u00c9 utilizada para compiladores, sistemas de prova, an\u00e1lise est\u00e1tica, ferramentas de desenvolvimento, sistemas financeiros, software de sistemas e servi\u00e7os de produ\u00e7\u00e3o onde tipos fortes, desempenho e manutenibilidade s\u00e3o importantes.',
    },
  },
} satisfies Language;
