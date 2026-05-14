import type { Language } from "../types";

export const lisp = {
  slug: "lisp",
  publishedDate: "1958-01-01",
  extensions: [".lisp", ".lsp", ".cl", ".asd"],
  author: "John McCarthy / ANSI X3J13",
  website: "https://common-lisp.net",
  paradigms: ["functional", "symbolic", "object-oriented", "metaprogramming", "dynamic"],
  tooling: {
    runtimes: ["SBCL", "CCL", "ECL", "CLISP", "LispWorks", "Allegro CL"],
    packageManagers: ["Quicklisp", "ASDF"],
    ecosystems: ["Common Lisp", "AI", "Symbolic Computing", "Research", "CLI"],
  },
  version: "ANSI INCITS 226-1994",
  logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Lisp_logo.svg",
  i18n: {
    en: {
      name: "Lisp",
      description:
        "A family of programmable, expression-oriented languages best known through Common Lisp.",
      longDescription:
        "Lisp is one of the oldest high-level programming language families, built around symbolic expressions, lists, macros, interactive development, dynamic typing, and programmable language syntax. This entry focuses on Common Lisp source files and systems.\n\nCommon Lisp is used for symbolic computation, AI research, compilers, DSLs, expert systems, automation, long-lived server applications, developer tools, and exploratory programming where macros and interactive workflows are central.",
    },
    es: {
      name: "Lisp",
      description:
        "Una familia de lenguajes expresivos y programables, conocida especialmente por Common Lisp.",
      longDescription:
        "Lisp es una de las familias de lenguajes de alto nivel mas antiguas, basada en expresiones simbolicas, listas, macros, desarrollo interactivo, tipado dinamico y sintaxis programable. Esta entrada se enfoca en archivos fuente y sistemas de Common Lisp.\n\nCommon Lisp se usa en computacion simbolica, investigacion de IA, compiladores, DSLs, sistemas expertos, automatizacion, aplicaciones de servidor longevas, herramientas de desarrollo y programacion exploratoria donde las macros y los flujos interactivos son centrales.",
    },
  },
} satisfies Language;
