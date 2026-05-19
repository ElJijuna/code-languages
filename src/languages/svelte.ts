import type { Language } from "../types";

export const svelte = {
  slug: "svelte",
  publishedDate: "2016-11-26",
  extensions: [".svelte"],
  author: "Rich Harris / Svelte contributors",
  website: "https://svelte.dev",
  paradigms: ["component-based", "declarative", "reactive", "compiled"],
  tooling: {
    runtimes: ["Browser", "Node.js"],
    packageManagers: ["npm", "pnpm", "Yarn", "Bun"],
    ecosystems: ["Web", "SvelteKit", "Vite"],
  },
  version: "5.55.8",
  logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
  i18n: {
    en: {
      name: "Svelte",
      description: "A compiled component framework for building reactive web user interfaces.",
      longDescription:
        "Svelte components combine markup, styles, and script logic in single-file components that are compiled into efficient JavaScript for updating the DOM.\n\nIt is widely used for web applications, interactive interfaces, static sites, design systems, dashboards, and SvelteKit projects where developers want a reactive component model with minimal runtime overhead.",
    },
    es: {
      name: "Svelte",
      description: "Un framework de componentes compilado para crear interfaces web reactivas.",
      longDescription:
        "Los componentes Svelte combinan marcado, estilos y logica de script en componentes de archivo unico que se compilan a JavaScript eficiente para actualizar el DOM.\n\nSe usa ampliamente en aplicaciones web, interfaces interactivas, sitios estaticos, sistemas de diseno, dashboards y proyectos SvelteKit donde se busca un modelo de componentes reactivo con poca sobrecarga en runtime.",
    },
  },
} satisfies Language;
