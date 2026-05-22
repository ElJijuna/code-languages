import type { Language } from "../types";

export const stylus = {
  slug: "stylus",
  publishedDate: "2010-12-01",
  extensions: [".styl"],
  author: "TJ Holowaychuk / Stylus contributors",
  website: "https://stylus-lang.com",
  paradigms: ["stylesheet", "declarative", "preprocessor"],
  tooling: {
    runtimes: ["Node.js"],
    packageManagers: ["npm", "pnpm", "Yarn"],
    ecosystems: ["CSS", "Web"],
  },
  version: "0.64.0",
  logo: "https://cdn.simpleicons.org/stylus/333333",
  i18n: {
    en: {
      name: "Stylus",
      description: "A flexible CSS preprocessor with optional punctuation and indentation syntax.",
      longDescription:
        "Stylus extends stylesheet authoring with variables, mixins, functions, imports, nesting, and a syntax that can omit braces, colons, and semicolons. It compiles authoring files into CSS.\n\nIt is used in web styling pipelines, design systems, legacy front-end builds, and projects that prefer concise stylesheet syntax.",
    },
    es: {
      name: "Stylus",
      description:
        "Un preprocesador CSS flexible con puntuacion opcional y sintaxis por indentacion.",
      longDescription:
        "Stylus extiende la autoria de estilos con variables, mixins, funciones, imports, nesting y una sintaxis que puede omitir llaves, dos puntos y punto y coma. Compila archivos de autoria hacia CSS.\n\nSe usa en pipelines de estilos web, sistemas de diseno, builds front-end heredados y proyectos que prefieren sintaxis de hojas de estilo concisa.",
    },
  },
} satisfies Language;
