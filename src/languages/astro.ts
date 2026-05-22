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
  version: "6.3.5",
  logo: "https://astro.build/assets/press/astro-icon-light.svg",
  color: "#FF5D01",
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
    it: {
      name: "Astro",
      description:
        "Un framework e formato di file per componenti per siti web e interfacce utente veloci.",
      longDescription:
        "Astro combina un formato di file basato su HTML con l'architettura delle isole, collezioni di contenuti, routing, rendering lato server, generazione statica e integrazioni per framework di interfaccia utente come React, Vue, Svelte e Solid.\n\nE comunemente utilizzato per documentazione, blog, siti di marketing, interfacce utente di e-commerce e altre esperienze ricche di contenuti in cui le prestazioni, la semplice creazione e la flessibilita del rendering sono importanti.",
    },
    fr: {
      name: "Astro",
      description:
        "Un framework et un format de fichier de composants pour les sites et les frontends axes sur le contenu.",
      longDescription:
        "Astro combine un format de composants base sur HTML avec l'architecture des ilots, des collections de contenu, le routage, le rendu cote serveur, la generation statique et des integrations pour les frameworks d'interface utilisateur tels que React, Vue, Svelte et Solid.\n\nIl est couramment utilise pour la documentation, les blogs, les sites de marketing, les frontends de commerce electronique et d'autres experiences riches en contenu ou les performances, une simple ecriture et un rendu flexible sont importants.",
    },
  },
} satisfies Language;
