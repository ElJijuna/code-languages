import type { Language } from "../types";

export const crystal = {
  slug: "crystal",
  publishedDate: "2014-06-18",
  extensions: [".cr"],
  author: "Ary Borenszweig, Juan Wajnerman, Brian Cardiff / Crystal contributors",
  website: "https://crystal-lang.org",
  paradigms: ["object-oriented", "functional", "imperative", "concurrent"],
  tooling: {
    runtimes: ["Crystal"],
    packageManagers: ["Shards"],
    ecosystems: ["Web", "CLI", "Systems", "Native Applications"],
  },
  version: "1.20.2",
  logo: "https://cdn.simpleicons.org/crystal/000000",
  i18n: {
    en: {
      name: "Crystal",
      description:
        "A compiled, statically typed language with Ruby-inspired syntax and native performance.",
      longDescription:
        "Crystal is a general-purpose programming language with syntax inspired by Ruby, static type checking, type inference, macros, fibers, channels, C bindings, and native compilation. It aims to keep code expressive while catching type errors at compile time.\n\nIt is used for web services, command-line tools, automation, native applications, performance-sensitive backend systems, and projects that want Ruby-like ergonomics with a compiled toolchain.",
    },
    es: {
      name: "Crystal",
      description:
        "Un lenguaje compilado y tipado estaticamente con sintaxis inspirada en Ruby y rendimiento nativo.",
      longDescription:
        "Crystal es un lenguaje de programacion de proposito general con sintaxis inspirada en Ruby, verificacion estatica de tipos, inferencia de tipos, macros, fibers, channels, bindings con C y compilacion nativa. Busca mantener el codigo expresivo mientras detecta errores de tipos en compilacion.\n\nSe usa en servicios web, herramientas de linea de comandos, automatizacion, aplicaciones nativas, backends sensibles al rendimiento y proyectos que quieren ergonomia similar a Ruby con un toolchain compilado.",
    },
  },
} satisfies Language;
