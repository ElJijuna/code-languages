import type { Language } from "../types";

export const gleam = {
  slug: "gleam",
  publishedDate: "2019-04-15",
  extensions: [".gleam"],
  author: "Louis Pilfold",
  website: "https://gleam.run",
  paradigms: ["functional", "statically typed", "concurrent", "actor-model"],
  tooling: {
    runtimes: ["Erlang/OTP", "BEAM", "JavaScript"],
    packageManagers: ["gleam", "Hex"],
    ecosystems: ["BEAM", "Erlang", "Elixir", "JavaScript", "Web"],
  },
  version: "1.16.0",
  logo: "https://cdn.simpleicons.org/gleam/FFAFF3",
  color: "#FFAFF3",
  i18n: {
    en: {
      name: "Gleam",
      description: "A friendly statically typed functional language for the BEAM and JavaScript.",
      longDescription:
        "Gleam is a statically typed functional programming language that compiles to Erlang and JavaScript. It provides algebraic data types, pattern matching, immutable data, a small syntax, helpful compiler errors, and interoperability with Erlang and Elixir libraries on the BEAM.\n\nIt is used for web services, concurrent systems, command-line tools, full-stack applications, and projects that want BEAM reliability with a lightweight type system and approachable functional programming model.",
    },
    es: {
      name: "Gleam",
      description: "Un lenguaje funcional amigable y de tipado estatico para BEAM y JavaScript.",
      longDescription:
        "Gleam es un lenguaje de programacion funcional con tipado estatico que compila a Erlang y JavaScript. Ofrece tipos algebraicos, pattern matching, datos inmutables, una sintaxis pequena, errores de compilador utiles e interoperabilidad con bibliotecas Erlang y Elixir sobre BEAM.\n\nSe usa en servicios web, sistemas concurrentes, herramientas de linea de comandos, aplicaciones full-stack y proyectos que buscan la confiabilidad de BEAM con un sistema de tipos ligero y un modelo funcional accesible.",
    },
  },
} satisfies Language;
