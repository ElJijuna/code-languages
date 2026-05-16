import type { Language } from "../types";

export const fennel = {
  slug: "fennel",
  publishedDate: "2016-10-01",
  extensions: [".fnl"],
  author: "Calvin Rose, Phil Hagelberg",
  website: "https://fennel-lang.org",
  paradigms: ["functional", "lisp", "scripting", "metaprogramming"],
  tooling: {
    runtimes: ["Lua", "LuaJIT"],
    packageManagers: ["LuaRocks"],
    ecosystems: ["Lua", "Neovim", "Game Development", "Embedded Scripting"],
  },
  version: "1.6.1",
  logo: "https://fennel-lang.org/logo.svg",
  i18n: {
    en: {
      name: "Fennel",
      description: "A Lisp that compiles to Lua while preserving access to the Lua ecosystem.",
      longDescription:
        "Fennel is a Lisp dialect that compiles to Lua, offering parentheses, macros, pattern matching, destructuring, functional style, and interactive development while keeping compatibility with Lua runtimes and libraries.\n\nIt is used for Lua applications, Neovim configuration, game scripting, embedded extension languages, tools, and projects that want Lisp-style syntax and macros with Lua's portability and small runtime footprint.",
    },
    es: {
      name: "Fennel",
      description: "Un Lisp que compila a Lua y conserva acceso al ecosistema Lua.",
      longDescription:
        "Fennel es un dialecto Lisp que compila a Lua, ofreciendo parentesis, macros, pattern matching, destructuring, estilo funcional y desarrollo interactivo mientras mantiene compatibilidad con runtimes y bibliotecas de Lua.\n\nSe usa en aplicaciones Lua, configuracion de Neovim, scripting para juegos, lenguajes embebidos de extension, herramientas y proyectos que quieren sintaxis y macros de estilo Lisp con la portabilidad y huella pequena de runtime de Lua.",
    },
  },
} satisfies Language;
