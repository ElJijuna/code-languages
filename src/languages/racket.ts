import type { Language } from "../types";

export const racket = {
  slug: "racket",
  publishedDate: "1995-01-01",
  extensions: [".rkt", ".rktd", ".rktl", ".scrbl"],
  author: "Matthias Felleisen, Robert Bruce Findler, Matthew Flatt, Shriram Krishnamurthi",
  website: "https://racket-lang.org",
  paradigms: ["functional", "multi-paradigm", "language-oriented", "metaprogramming"],
  tooling: {
    runtimes: ["Racket CS", "Racket BC", "DrRacket"],
    packageManagers: ["raco pkg"],
    ecosystems: ["Education", "Language Design", "DSLs", "Research", "Scripting"],
  },
  version: "9.1",
  logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Racket-logo.svg",
  i18n: {
    en: {
      name: "Racket",
      description:
        "A Scheme-family language and platform for functional, educational, and language-oriented programming.",
      longDescription:
        "Racket is a general-purpose programming language in the Scheme and Lisp family, designed as a platform for creating languages as well as applications. It includes modules, macros, contracts, pattern matching, a rich standard library, DrRacket, and tools for building domain-specific languages.\n\nIt is used in programming education, language design research, DSLs, compilers, scripting, web applications, documentation with Scribble, and projects that benefit from programmable syntax and interactive development.",
    },
    es: {
      name: "Racket",
      description:
        "Un lenguaje de la familia Scheme y una plataforma para programacion funcional, educativa y orientada a lenguajes.",
      longDescription:
        "Racket es un lenguaje de programacion de proposito general de la familia Scheme y Lisp, disenado como plataforma para crear lenguajes ademas de aplicaciones. Incluye modulos, macros, contratos, pattern matching, una biblioteca estandar amplia, DrRacket y herramientas para construir lenguajes especificos de dominio.\n\nSe usa en educacion en programacion, investigacion en diseno de lenguajes, DSLs, compiladores, scripting, aplicaciones web, documentacion con Scribble y proyectos que se benefician de sintaxis programable y desarrollo interactivo.",
    },
  },
} satisfies Language;
