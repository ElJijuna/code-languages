import type { Language } from "../types";

export const purescript = {
  slug: "purescript",
  publishedDate: "2013-09-01",
  extensions: [".purs"],
  author: "Phil Freeman / PureScript contributors",
  website: "https://www.purescript.org",
  paradigms: ["functional", "pure", "statically typed", "declarative"],
  tooling: {
    runtimes: ["JavaScript", "Node.js"],
    packageManagers: ["Spago", "npm"],
    ecosystems: ["Web", "Functional Programming", "JavaScript"],
  },
  version: "0.15.15",
  logo: "https://cdn.simpleicons.org/purescript/14161A",
  i18n: {
    en: {
      name: "PureScript",
      description: "A strongly typed purely functional language that compiles to JavaScript.",
      longDescription:
        "PureScript brings algebraic data types, type classes, effects, modules, row polymorphism, and a Haskell-influenced functional model to JavaScript targets. Its compiler emits readable JavaScript and works with foreign JavaScript modules.\n\nIt is used for front-end applications, libraries, typed domain models, functional architecture, and JavaScript projects that want explicit effect handling.",
    },
    es: {
      name: "PureScript",
      description: "Un lenguaje funcional puro y fuertemente tipado que compila a JavaScript.",
      longDescription:
        "PureScript lleva tipos algebraicos, type classes, efectos, modulos, row polymorphism y un modelo funcional influido por Haskell a objetivos JavaScript. Su compilador emite JavaScript legible e interoperable con modulos externos.\n\nSe usa en aplicaciones front-end, bibliotecas, modelos de dominio tipados, arquitectura funcional y proyectos JavaScript que buscan manejo explicito de efectos.",
    },
  },
} satisfies Language;
