import type { Language } from "../types";

export const haskell = {
  slug: "haskell",
  publishedDate: "1990-04-01",
  extensions: [".hs", ".lhs", ".hsc", ".hs-boot", ".hsig", ".cabal"],
  author: "Haskell Committee",
  website: "https://www.haskell.org",
  paradigms: ["functional", "declarative", "lazy evaluation", "statically typed"],
  tooling: {
    runtimes: ["GHC", "GHCi"],
    packageManagers: ["Cabal", "Stack", "GHCup"],
    ecosystems: ["Functional Programming", "Compilers", "Research", "Financial Systems"],
  },
  version: "GHC 9.14.1",
  logo: "https://cdn.simpleicons.org/haskell/5D4F85",
  color: "#5D4F85",
  i18n: {
    en: {
      name: "Haskell",
      description:
        "A lazy, purely functional language with strong static typing and expressive abstractions.",
      longDescription:
        "Haskell is a general-purpose functional programming language known for purity, lazy evaluation, algebraic data types, type classes, pattern matching, and a powerful static type system. The Haskell 2010 language standard is widely supported, while GHC adds many commonly used extensions.\n\nIt is used in compiler construction, programming language research, financial systems, formal methods, data processing, education, and production services that benefit from strong types and high-level abstractions.",
    },
    es: {
      name: "Haskell",
      description:
        "Un lenguaje puramente funcional y lazy con tipado estatico fuerte y abstracciones expresivas.",
      longDescription:
        "Haskell es un lenguaje de programacion funcional de proposito general conocido por pureza, evaluacion lazy, tipos algebraicos, type classes, pattern matching y un sistema de tipos estatico potente. El estandar Haskell 2010 tiene amplio soporte, mientras GHC agrega muchas extensiones de uso comun.\n\nSe usa en construccion de compiladores, investigacion en lenguajes de programacion, sistemas financieros, metodos formales, procesamiento de datos, educacion y servicios de produccion que se benefician de tipos fuertes y abstracciones de alto nivel.",
    },
    it: {
      name: "Haskell",
      description:
        "Un linguaggio funzionale, puramente funzionale e con tipizzazione statica forte e astrazioni espressive.",
      longDescription:
        "Haskell e un linguaggio di programmazione funzionale di uso generale, noto per la sua purezza, la valutazione pigra, i tipi di dati algebrici, le classi di tipo, la corrispondenza di pattern e un potente sistema di tipi statici. Lo standard del linguaggio Haskell 2010 e ampiamente supportato, mentre GHC aggiunge molte estensioni comunemente utilizzate.\n\nViene utilizzato nella costruzione di compilatori, nella ricerca di linguaggi di programmazione, nei sistemi finanziari, nei metodi formali, nell'elaborazione dei dati, nell'istruzione e nei servizi di produzione che beneficiano di tipi forti e di astrazioni di alto livello.",
    },
    fr: {
      name: "Haskell",
      description:
        "Un langage fonctionnel pur et paresseux avec un typage statique fort et des abstractions expressives.",
      longDescription:
        "Haskell est un langage de programmation fonctionnel general, connu pour sa purete, son evaluation paresseuse, ses types de donnees algebriques, ses classes de types, la correspondance de motifs et un systeme de typage statique puissant. La norme Haskell 2010 est largement prise en charge, tandis que GHC ajoute de nombreuses extensions couramment utilisees.\n\nIl est utilise dans la construction de compilateurs, la recherche sur les langages de programmation, les systemes financiers, les methodes formelles, le traitement des donnees, l'education et les services de production qui beneficient de types forts et d'abstractions de haut niveau.",
    },
    de: {
      name: "Haskell",
      description:
        "Eine l\u00e4stige, rein funktionale Sprache mit starker statischer Typisierung und ausdrucksstarken Abstraktionen.",
      longDescription:
        "Haskell ist eine allgemeine, funktionale Programmiersprache, die f\u00fcr Purity, Lazy-Evaluation, algebraische Datentypen, Typklassen, Pattern Matching und ein leistungsstarkes statisches Typsystem bekannt ist. Der Haskell 2010 Sprachstandard wird weit verbreitet unterst\u00fctzt, w\u00e4hrend GHC viele h\u00e4ufig verwendete Erweiterungen hinzuf\u00fcgt.\n\nEs wird in Compiler-Entwicklung, Programmiersprachenforschung, Finanzsystemen, formalen Methoden, Datenverarbeitung, Bildung und Produktionsdiensten eingesetzt, die von starken Typen und hochrangigen Abstraktionen profitieren.",
    },
    pt: {
      name: "Haskell",
      description:
        "Linguagem funcional, estaticamente tipada e com abstra\u00e7\u00f5es expressivas, com avalia\u00e7\u00e3o pregui\u00e7osa.",
      longDescription:
        "Haskell \u00e9 uma linguagem de programa\u00e7\u00e3o funcional de prop\u00f3sito geral, conhecida pela sua pureza, avalia\u00e7\u00e3o pregui\u00e7osa, tipos de dados alg\u00e9bricos, classes de tipos, correspond\u00eancia de padr\u00f5es e um poderoso sistema de tipos est\u00e1tico. O padr\u00e3o de linguagem Haskell 2010 \u00e9 amplamente suportado, enquanto o GHC adiciona muitas extens\u00f5es comuns.\n\n\u00c9 utilizada na constru\u00e7\u00e3o de compiladores, pesquisa em linguagens de programa\u00e7\u00e3o, sistemas financeiros, m\u00e9todos formais, processamento de dados, educa\u00e7\u00e3o e servi\u00e7os de produ\u00e7\u00e3o que se beneficiam de tipos fortes e abstra\u00e7\u00f5es de alto n\u00edvel.",
    },
  },
} satisfies Language;
