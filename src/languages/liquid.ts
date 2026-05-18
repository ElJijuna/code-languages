import type { Language } from "../types";

export const liquid = {
  slug: "liquid",
  publishedDate: "2006-06-01",
  extensions: [".liquid"],
  author: "Shopify",
  website: "https://shopify.github.io/liquid/",
  paradigms: ["templating", "declarative", "logic-less", "server-side"],
  tooling: {
    runtimes: ["Ruby", "Node.js", "Shopify"],
    packageManagers: ["RubyGems", "npm"],
    ecosystems: ["Shopify", "Jekyll", "Static Sites", "E-commerce"],
  },
  version: "10.21.1",
  logo: "https://cdn.simpleicons.org/shopify/7AB55C",
  i18n: {
    en: {
      name: "Liquid",
      description: "A safe template language used by Shopify, Jekyll, and content-driven sites.",
      longDescription:
        "Liquid is a template language designed to expose controlled data to templates through tags, objects, filters, loops, conditions, and includes. It favors predictable rendering and constrained logic so non-developers can safely customize content presentation.\n\nIt is used in Shopify themes, Jekyll sites, GitHub Pages, storefront customization, content management systems, email templates, and static publishing workflows.",
    },
    es: {
      name: "Liquid",
      description:
        "Un lenguaje de plantillas seguro usado por Shopify, Jekyll y sitios basados en contenido.",
      longDescription:
        "Liquid es un lenguaje de plantillas disenado para exponer datos controlados mediante tags, objetos, filtros, bucles, condiciones e includes. Prioriza renderizado predecible y logica limitada para que personas no desarrolladoras puedan personalizar la presentacion de contenido con seguridad.\n\nSe usa en temas de Shopify, sitios Jekyll, GitHub Pages, personalizacion de tiendas, sistemas de gestion de contenido, plantillas de email y flujos de publicacion estatica.",
    },
  },
} satisfies Language;
