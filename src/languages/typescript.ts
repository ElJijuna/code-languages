import type { Language } from "../types";

export const typescript = {
  slug: "typescript",
  publishedDate: "2012-10-01",
  extensions: [".ts", ".tsx", ".mts", ".cts"],
  author: "Anders Hejlsberg / Microsoft",
  website: "https://www.typescriptlang.org",
  paradigms: ["object-oriented", "functional", "imperative", "generic"],
  tooling: {
    runtimes: ["Browser", "Node.js", "Deno", "Bun"],
    packageManagers: ["npm", "pnpm", "Yarn", "Bun"],
    ecosystems: ["Web", "Node.js"],
  },
  version: "6.0",
  logo: "https://www.typescriptlang.org/icons/icon-512x512.png",
  color: "#3178C6",
  i18n: {
    en: {
      name: "TypeScript",
      description: "A typed superset of JavaScript that compiles to plain JavaScript.",
      longDescription:
        "TypeScript adds static typing, interfaces, generics, and modern tooling support to JavaScript while preserving JavaScript runtime semantics.\n\nIt is widely used for large web applications, libraries, server-side Node.js projects, and developer tools where maintainability and editor feedback matter.",
    },
    es: {
      name: "TypeScript",
      description: "Un superconjunto tipado de JavaScript que compila a JavaScript plano.",
      longDescription:
        "TypeScript agrega tipado estatico, interfaces, genericos y soporte moderno de herramientas a JavaScript, preservando la semantica de ejecucion de JavaScript.\n\nSe usa ampliamente en aplicaciones web grandes, bibliotecas, proyectos Node.js del lado del servidor y herramientas de desarrollo donde importan la mantenibilidad y el feedback del editor.",
    },
  },
} satisfies Language;
