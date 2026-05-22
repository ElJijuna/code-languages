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
    it: {
      name: "CoffeeScript",
      description:
        "Un linguaggio piccolo che compila in JavaScript con una sintassi concisa ispirata a Ruby e Python.",
      longDescription:
        "CoffeeScript aggiunge una sintassi concisa a JavaScript con un uso significativo dello spazio, scorciatoie per le funzioni, comprensioni, destrutturazione, classi, interpolazione di stringhe e altre comodita espressive.\n\nE stato ampiamente utilizzato in stack di applicazioni JavaScript precedenti e rimane rilevante in progetti legacy, pipeline di build e codebase che preferiscono la sua sintassi compatta, pur mirando a JavaScript standard.",
    },
    fr: {
      name: "CoffeeScript",
      description:
        "Un petit langage qui compile vers JavaScript avec une syntaxe concise inspiree de Ruby et Python.",
      longDescription:
        "CoffeeScript ajoute une syntaxe concise au-dessus de JavaScript avec un espacement important, des raccourcis de fonction, des comprehensions, la destructuration, les classes, l'interpolation de chaines et d'autres commodites expressives.\n\nIl etait largement utilise dans les anciens stacks d'applications JavaScript et reste pertinent dans les projets herites, les pipelines de construction et les bases de code qui preferent sa syntaxe concise tout en ciblant le JavaScript standard.",
    },
  },
} satisfies Language;
