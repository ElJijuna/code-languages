import type { Language } from "../types";

export const vue = {
  slug: "vue",
  publishedDate: "2014-02-01",
  extensions: [".vue"],
  author: "Evan You / Vue Core Team",
  website: "https://vuejs.org",
  paradigms: ["component-based", "declarative", "reactive"],
  tooling: {
    runtimes: ["Browser", "Node.js"],
    packageManagers: ["npm", "pnpm", "Yarn", "Bun"],
    ecosystems: ["Web", "Vue", "Vite", "Nuxt"],
  },
  version: "3.5.34",
  logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
  i18n: {
    en: {
      name: "Vue",
      description:
        "A progressive JavaScript framework for building user interfaces with reactive components.",
      longDescription:
        "Vue is a progressive framework for building user interfaces with single-file components, declarative templates, reactivity, composition APIs, routing, state management, and tooling through the broader Vue ecosystem.\n\nIt is widely used for single-page applications, interactive interfaces, design systems, dashboards, embedded widgets, and full-stack web applications with frameworks such as Nuxt.",
    },
    es: {
      name: "Vue",
      description:
        "Un framework progresivo de JavaScript para crear interfaces con componentes reactivos.",
      longDescription:
        "Vue es un framework progresivo para crear interfaces de usuario con componentes de archivo unico, plantillas declarativas, reactividad, APIs de composicion, enrutamiento, gestion de estado y herramientas del ecosistema Vue.\n\nSe usa ampliamente en aplicaciones de una sola pagina, interfaces interactivas, sistemas de diseno, dashboards, widgets embebidos y aplicaciones web full-stack con frameworks como Nuxt.",
    },
  },
} satisfies Language;
