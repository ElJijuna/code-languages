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
  },
} satisfies Language;
