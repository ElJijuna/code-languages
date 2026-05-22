import type { Language } from "../types";

export const scss = {
  slug: "scss",
  publishedDate: "2006-11-28",
  extensions: [".scss", ".sass"],
  author: "Hampton Catlin / Natalie Weizenbaum / Chris Eppstein",
  website: "https://sass-lang.com",
  paradigms: ["declarative", "stylesheet", "preprocessor"],
  tooling: {
    runtimes: ["Dart Sass"],
    packageManagers: ["npm", "pnpm", "Yarn", "Bun"],
    ecosystems: ["Web", "Design Systems"],
  },
  version: "1.99.0",
  logo: "https://sass-lang.com/assets/img/logos/logo.svg",
  color: "#CC6699",
  i18n: {
    en: {
      name: "Sass",
      description:
        "A stylesheet language and CSS preprocessor with variables, nesting, mixins, modules, and functions.",
      longDescription:
        "Sass extends CSS with features such as variables, nested rules, mixins, functions, modules, inheritance, and compile-time tooling that generates standard CSS.\n\nIt is widely used in design systems, component libraries, large web applications, themes, and projects that need reusable styling patterns on top of the CSS platform.",
    },
    es: {
      name: "Sass",
      description:
        "Un lenguaje de hojas de estilo y preprocesador CSS con variables, anidamiento, mixins, modulos y funciones.",
      longDescription:
        "Sass extiende CSS con caracteristicas como variables, reglas anidadas, mixins, funciones, modulos, herencia y herramientas de compilacion que generan CSS estandar.\n\nSe usa ampliamente en sistemas de diseno, bibliotecas de componentes, grandes aplicaciones web, temas y proyectos que necesitan patrones de estilos reutilizables sobre la plataforma CSS.",
    },
  },
} satisfies Language;
