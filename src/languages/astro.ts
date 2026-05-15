import type { Language } from "../types";

export const astro = {
  slug: "astro",
  publishedDate: "2021-06-08",
  extensions: [".astro"],
  author: "Fred K. Schott / The Astro Technology Company",
  website: "https://astro.build",
  paradigms: ["component-based", "declarative", "static-site-generation", "server-side-rendering"],
  tooling: {
    runtimes: ["Node.js", "Deno"],
    packageManagers: ["npm", "pnpm", "Yarn", "Bun"],
    ecosystems: ["Web", "Static Sites", "Content"],
  },
  version: "6.3.3",
  logo: "https://astro.build/assets/press/astro-icon-light.svg",
  i18n: {
    en: {
      name: "Astro",
      description:
        "A web framework and component file format for content-driven sites and fast frontends.",
      longDescription:
        "Astro combines an HTML-first component format with islands architecture, content collections, routing, server rendering, static generation, and integrations for UI frameworks such as React, Vue, Svelte, and Solid.\n\nIt is commonly used for documentation, blogs, marketing sites, ecommerce frontends, and other content-heavy experiences where performance, simple authoring, and flexible rendering matter.",
    },
    es: {
      name: "Astro",
      description:
        "Un framework web y formato de componentes para sitios de contenido y frontends rapidos.",
      longDescription:
        "Astro combina un formato de componentes centrado en HTML con arquitectura de islas, colecciones de contenido, enrutamiento, renderizado en servidor, generacion estatica e integraciones con frameworks de UI como React, Vue, Svelte y Solid.\n\nSe usa comunmente en documentacion, blogs, sitios de marketing, frontends de ecommerce y otras experiencias con mucho contenido donde importan el rendimiento, la autoria simple y el renderizado flexible.",
    },
  },
} satisfies Language;
