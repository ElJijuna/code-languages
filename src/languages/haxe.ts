import type { Language } from "../types";

export const haxe = {
  slug: "haxe",
  publishedDate: "2005-10-01",
  extensions: [".hx", ".hxml"],
  author: "Nicolas Cannasse / Haxe Foundation",
  website: "https://haxe.org",
  paradigms: ["object-oriented", "functional", "cross-platform", "statically typed"],
  tooling: {
    runtimes: ["JavaScript", "HashLink", "JVM", "C++", "C#", "PHP", "Lua", "Python"],
    packageManagers: ["haxelib"],
    ecosystems: ["Games", "Web", "Cross-platform Applications", "OpenFL", "Heaps"],
  },
  version: "4.3.7",
  logo: "https://cdn.simpleicons.org/haxe/EA8220",
  i18n: {
    en: {
      name: "Haxe",
      description: "A cross-platform typed language that compiles to many runtimes and targets.",
      longDescription:
        "Haxe is a high-level, statically typed programming language and compiler toolkit that targets JavaScript, C++, C#, Java, JVM bytecode, PHP, Lua, Python, HashLink, and other platforms. It includes type inference, macros, abstracts, generics, pattern matching, and a shared standard library.\n\nIt is used for games, web applications, creative coding, cross-platform tools, multimedia frameworks, and codebases that need to share typed business or engine logic across many targets.",
    },
    es: {
      name: "Haxe",
      description: "Un lenguaje tipado multiplataforma que compila a muchos runtimes y destinos.",
      longDescription:
        "Haxe es un lenguaje de programacion de alto nivel con tipado estatico y un toolkit de compilador que apunta a JavaScript, C++, C#, Java, bytecode JVM, PHP, Lua, Python, HashLink y otras plataformas. Incluye inferencia de tipos, macros, abstracts, genericos, pattern matching y una biblioteca estandar compartida.\n\nSe usa en juegos, aplicaciones web, creative coding, herramientas multiplataforma, frameworks multimedia y codebases que necesitan compartir logica tipada de negocio o motor entre muchos destinos.",
    },
  },
} satisfies Language;
