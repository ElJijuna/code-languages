import type { Language } from "../types";

export const ocaml = {
  slug: "ocaml",
  publishedDate: "1996-01-01",
  extensions: [".ml", ".mli", ".mll", ".mly", ".mlt", ".eliom", ".eliomi"],
  author: "Xavier Leroy, Jerome Vouillon, Damien Doligez, Didier Remy, Ascander Suarez",
  website: "https://ocaml.org",
  paradigms: ["functional", "imperative", "object-oriented", "modular"],
  tooling: {
    runtimes: ["OCaml Runtime", "Native Code Compiler", "Bytecode Interpreter"],
    packageManagers: ["opam", "Dune"],
    ecosystems: ["Compilers", "Formal Methods", "Systems Programming", "Web"],
  },
  version: "5.6.0",
  logo: "https://cdn.simpleicons.org/ocaml/EC6813",
  i18n: {
    en: {
      name: "OCaml",
      description:
        "A statically typed ML-family language with modules, inference, and native compilation.",
      longDescription:
        "OCaml combines functional, imperative, and object-oriented programming with Hindley-Milner type inference, algebraic data types, pattern matching, functors, and a powerful module system.\n\nIt is used for compilers, theorem provers, static analysis, developer tools, financial systems, systems software, and production services where strong types, performance, and maintainability matter.",
    },
    es: {
      name: "OCaml",
      description:
        "Un lenguaje de la familia ML con tipado estatico, modulos, inferencia y compilacion nativa.",
      longDescription:
        "OCaml combina programacion funcional, imperativa y orientada a objetos con inferencia de tipos Hindley-Milner, tipos algebraicos, pattern matching, functors y un sistema de modulos potente.\n\nSe usa en compiladores, demostradores de teoremas, analisis estatico, herramientas de desarrollo, sistemas financieros, software de sistemas y servicios de produccion donde importan los tipos fuertes, el rendimiento y la mantenibilidad.",
    },
  },
} satisfies Language;
