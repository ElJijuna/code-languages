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
  },
} satisfies Language;
