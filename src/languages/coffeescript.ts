import type { Language } from "../types";

export const coffeescript = {
  slug: "coffeescript",
  publishedDate: "2009-12-25",
  extensions: [".coffee", ".litcoffee", ".cson"],
  author: "Jeremy Ashkenas",
  website: "https://coffeescript.org",
  paradigms: ["functional", "imperative", "object-oriented", "scripting"],
  tooling: {
    runtimes: ["Browser", "Node.js"],
    packageManagers: ["npm", "pnpm", "Yarn"],
    ecosystems: ["JavaScript", "Web", "Node.js"],
  },
  version: "2.7.0",
  logo: "https://cdn.simpleicons.org/coffeescript/2F2625",
  color: "#2F2625",
  i18n: {
    en: {
      name: "CoffeeScript",
      description:
        "A small language that compiles to JavaScript with concise syntax inspired by Ruby and Python.",
      longDescription:
        "CoffeeScript adds a concise syntax over JavaScript with significant whitespace, function shortcuts, comprehensions, destructuring, classes, string interpolation, and other expressive conveniences.\n\nIt was widely used in earlier JavaScript application stacks and remains relevant in legacy projects, build pipelines, and codebases that prefer its compact syntax while targeting standard JavaScript.",
    },
    es: {
      name: "CoffeeScript",
      description:
        "Un lenguaje pequeno que compila a JavaScript con sintaxis concisa inspirada en Ruby y Python.",
      longDescription:
        "CoffeeScript agrega una sintaxis concisa sobre JavaScript con indentacion significativa, atajos para funciones, comprehensions, destructuring, clases, interpolacion de cadenas y otras comodidades expresivas.\n\nFue muy usado en stacks anteriores de aplicaciones JavaScript y sigue siendo relevante en proyectos legacy, pipelines de build y codebases que prefieren su sintaxis compacta mientras generan JavaScript estandar.",
    },
  },
} satisfies Language;
