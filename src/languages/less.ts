import type { Language } from "../types";

export const less = {
  slug: "less",
  publishedDate: "2009-01-01",
  extensions: [".less"],
  author: "Alexis Sellier / Less Core Team",
  website: "https://lesscss.org",
  paradigms: ["declarative", "stylesheet", "preprocessor"],
  tooling: {
    runtimes: ["Less.js", "Node.js", "Browser"],
    packageManagers: ["npm", "pnpm", "Yarn", "Bun"],
    ecosystems: ["Web", "Design Systems", "Bootstrap"],
  },
  version: "4.6.4",
  logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LESS_Logo.svg",
  i18n: {
    en: {
      name: "Less",
      description: "A CSS preprocessor with variables, nesting, mixins, operations, and functions.",
      longDescription:
        "Less is a dynamic stylesheet language that extends CSS with variables, nested rules, mixins, operations, functions, and reusable abstractions while keeping syntax close to standard CSS.\n\nIt is commonly used in web applications, design systems, themes, legacy front-end stacks, and projects that compile richer styling source files into browser-compatible CSS.",
    },
    es: {
      name: "Less",
      description:
        "Un preprocesador CSS con variables, anidamiento, mixins, operaciones y funciones.",
      longDescription:
        "Less es un lenguaje dinamico de hojas de estilo que extiende CSS con variables, reglas anidadas, mixins, operaciones, funciones y abstracciones reutilizables mientras mantiene una sintaxis cercana a CSS estandar.\n\nSe usa comunmente en aplicaciones web, sistemas de diseno, temas, stacks front-end heredados y proyectos que compilan archivos de estilos mas expresivos a CSS compatible con navegadores.",
    },
  },
} satisfies Language;
