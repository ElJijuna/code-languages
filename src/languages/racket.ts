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
  color: "#9F1D20",
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
    it: {
      name: "Racket",
      description:
        "Un linguaggio e piattaforma della famiglia Scheme per la programmazione funzionale, didattica e orientata al linguaggio.",
      longDescription:
        "Racket e un linguaggio di programmazione di uso generale nella famiglia Scheme e Lisp, progettato come piattaforma per la creazione di linguaggi, nonche di applicazioni. Include moduli, macro, contratti, corrispondenza di pattern, una ricca libreria standard, DrRacket e strumenti per la creazione di linguaggi specifici per il dominio.\n\nViene utilizzato nell'istruzione di programmazione, nella ricerca sulla progettazione di linguaggi, nei DSL, nei compilatori, nello scripting, nelle applicazioni web, nella documentazione con Scribble e in progetti che beneficiano della sintassi programmabile e dello sviluppo interattivo.",
    },
    fr: {
      name: "Racket",
      description:
        "Un langage et une plateforme de la famille Scheme, pour la programmation fonctionnelle, educative et orientee langage.",
      longDescription:
        "Racket est un langage de programmation general a usage, de la famille Scheme et Lisp, concu comme une plateforme pour creer des langages ainsi que des applications. Il inclut des modules, des macros, des contrats, la correspondance de motifs, une bibliotheque standard riche, DrRacket, et des outils pour construire des langages specifiques a un domaine.\n\nIl est utilise dans l'enseignement de la programmation, la recherche sur la conception de langages, les DSL, les compilateurs, le scripting, les applications web, la documentation avec Scribble, et des projets qui beneficient d'une syntaxe programmable et d'un developpement interactif.",
    },
  },
} satisfies Language;
