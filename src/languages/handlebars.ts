import type { Language } from "../types";

export const handlebars = {
  slug: "handlebars",
  publishedDate: "2010-07-01",
  extensions: [".hbs", ".handlebars"],
  author: "Yehuda Katz / Handlebars contributors",
  website: "https://handlebarsjs.com",
  paradigms: ["templating", "declarative", "logic-less"],
  tooling: {
    runtimes: ["Node.js", "Browser"],
    packageManagers: ["npm", "Yarn", "pnpm"],
    ecosystems: ["Web", "Email Templates", "Static Sites"],
  },
  version: "4.7.9",
  logo: "https://cdn.simpleicons.org/handlebarsdotjs/000000",
  color: "#000000",
  i18n: {
    en: {
      name: "Handlebars",
      description: "A logic-light template language for rendering HTML and text from data.",
      longDescription:
        "Handlebars is a template language and JavaScript runtime that extends Mustache with helpers, block expressions, partials, precompilation, and escaping. It keeps templates focused on presentation while letting helpers supply reusable behavior.\n\nIt is used for server-rendered HTML, client-side views, static site generation, transactional email, documentation tools, and build systems that need predictable text generation from structured data.",
    },
    es: {
      name: "Handlebars",
      description:
        "Un lenguaje de plantillas con poca logica para renderizar HTML y texto desde datos.",
      longDescription:
        "Handlebars es un lenguaje de plantillas y runtime JavaScript que extiende Mustache con helpers, expresiones de bloque, partials, precompilacion y escapado. Mantiene las plantillas centradas en la presentacion y deja que los helpers aporten comportamiento reutilizable.\n\nSe usa para HTML renderizado en servidor, vistas de cliente, generacion de sitios estaticos, email transaccional, herramientas de documentacion y sistemas de build que generan texto desde datos estructurados.",
    },
  },
} satisfies Language;
