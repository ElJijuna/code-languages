import type { Language } from '../types';

export const haskell = {
  slug: 'haskell',
  publishedDate: '1990-04-01',
  extensions: ['.hs', '.lhs', '.hsc', '.hs-boot', '.hsig', '.cabal'],
  author: 'Haskell Committee',
  website: 'https://www.haskell.org',
  paradigms: ['functional', 'declarative', 'lazy evaluation', 'statically typed'],
  tooling: {
    runtimes: ['GHC', 'GHCi'],
    packageManagers: ['Cabal', 'Stack', 'GHCup'],
    ecosystems: ['Functional Programming', 'Compilers', 'Research', 'Financial Systems'],
  },
  version: 'GHC 9.14.1',
  logo: 'https://cdn.simpleicons.org/haskell/5D4F85',
  color: '#5D4F85',
  i18n: {
    en: {
      name: 'Haskell',
      description:
        'A lazy, purely functional language with strong static typing and expressive abstractions.',
      longDescription:
        'Haskell is a general-purpose functional programming language known for purity, lazy evaluation, algebraic data types, type classes, pattern matching, and a powerful static type system. The Haskell 2010 language standard is widely supported, while GHC adds many commonly used extensions.\n\nIt is used in compiler construction, programming language research, financial systems, formal methods, data processing, education, and production services that benefit from strong types and high-level abstractions.',
    },
    es: {
      name: 'Haskell',
      description:
        'Un lenguaje puramente funcional y lazy con tipado estatico fuerte y abstracciones expresivas.',
      longDescription:
        'Haskell es un lenguaje de programacion funcional de proposito general conocido por pureza, evaluacion lazy, tipos algebraicos, type classes, pattern matching y un sistema de tipos estatico potente. El estandar Haskell 2010 tiene amplio soporte, mientras GHC agrega muchas extensiones de uso comun.\n\nSe usa en construccion de compiladores, investigacion en lenguajes de programacion, sistemas financieros, metodos formales, procesamiento de datos, educacion y servicios de produccion que se benefician de tipos fuertes y abstracciones de alto nivel.',
    },
    it: {
      name: 'Haskell',
      description:
        'Un linguaggio funzionale, puramente funzionale e con tipizzazione statica forte e astrazioni espressive.',
      longDescription:
        "Haskell e un linguaggio di programmazione funzionale di uso generale, noto per la sua purezza, la valutazione pigra, i tipi di dati algebrici, le classi di tipo, la corrispondenza di pattern e un potente sistema di tipi statici. Lo standard del linguaggio Haskell 2010 e ampiamente supportato, mentre GHC aggiunge molte estensioni comunemente utilizzate.\n\nViene utilizzato nella costruzione di compilatori, nella ricerca di linguaggi di programmazione, nei sistemi finanziari, nei metodi formali, nell'elaborazione dei dati, nell'istruzione e nei servizi di produzione che beneficiano di tipi forti e di astrazioni di alto livello.",
    },
    fr: {
      name: 'Haskell',
      description:
        'Un langage fonctionnel pur et paresseux avec un typage statique fort et des abstractions expressives.',
      longDescription:
        "Haskell est un langage de programmation fonctionnel general, connu pour sa purete, son evaluation paresseuse, ses types de donnees algebriques, ses classes de types, la correspondance de motifs et un systeme de typage statique puissant. La norme Haskell 2010 est largement prise en charge, tandis que GHC ajoute de nombreuses extensions couramment utilisees.\n\nIl est utilise dans la construction de compilateurs, la recherche sur les langages de programmation, les systemes financiers, les methodes formelles, le traitement des donnees, l'education et les services de production qui beneficient de types forts et d'abstractions de haut niveau.",
    },
    de: {
      name: 'Haskell',
      description:
        'Eine lästige, rein funktionale Sprache mit starker statischer Typisierung und ausdrucksstarken Abstraktionen.',
      longDescription:
        'Haskell ist eine allgemeine, funktionale Programmiersprache, die für Purity, Lazy-Evaluation, algebraische Datentypen, Typklassen, Pattern Matching und ein leistungsstarkes statisches Typsystem bekannt ist. Der Haskell 2010 Sprachstandard wird weit verbreitet unterstützt, während GHC viele häufig verwendete Erweiterungen hinzufügt.\n\nEs wird in Compiler-Entwicklung, Programmiersprachenforschung, Finanzsystemen, formalen Methoden, Datenverarbeitung, Bildung und Produktionsdiensten eingesetzt, die von starken Typen und hochrangigen Abstraktionen profitieren.',
    },
    pt: {
      name: 'Haskell',
      description:
        'Linguagem funcional, estaticamente tipada e com abstrações expressivas, com avaliação preguiçosa.',
      longDescription:
        'Haskell é uma linguagem de programação funcional de propósito geral, conhecida pela sua pureza, avaliação preguiçosa, tipos de dados algébricos, classes de tipos, correspondência de padrões e um poderoso sistema de tipos estático. O padrão de linguagem Haskell 2010 é amplamente suportado, enquanto o GHC adiciona muitas extensões comuns.\n\nÉ utilizada na construção de compiladores, pesquisa em linguagens de programação, sistemas financeiros, métodos formais, processamento de dados, educação e serviços de produção que se beneficiam de tipos fortes e abstrações de alto nível.',
    },
  },
} satisfies Language;
