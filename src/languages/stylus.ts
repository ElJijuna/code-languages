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
  color: "#333333",
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
    it: {
      name: "Stylus",
      description:
        "Un preprocessore CSS flessibile con sintassi opzionale per la punteggiatura e l'indentazione.",
      longDescription:
        "Stylus estende l'autore del foglio di stile con variabili, mixin, funzioni, import, nidificazione e una sintassi che puo omettere le parentesi graffe, i due punti e i punti e virgola. Compila i file di autore in CSS.\n\nViene utilizzato nelle pipeline di stile web, nei sistemi di progettazione, nelle build front-end legacy e nei progetti che preferiscono una sintassi di foglio di stile concisa.",
    },
    fr: {
      name: "Stylus",
      description:
        "Un preprocesseur CSS flexible avec une syntaxe optionnelle de ponctuation et d'indentation.",
      longDescription:
        "Stylus etend l'ecriture de feuilles de style avec des variables, des mixins, des fonctions, des imports, du nesting et une syntaxe qui peut omettre les accolades, les deux-points et les points-virgules. Il compile les fichiers d'ecriture en CSS.\n\nIl est utilise dans les pipelines de stylisation web, les systemes de conception, les constructions front-end heritees et les projets qui preferent une syntaxe de feuille de style concise.",
    },
  },
} satisfies Language;
