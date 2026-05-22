import type { Language } from "../types";

export const pug = {
  slug: "pug",
  publishedDate: "2010-06-01",
  extensions: [".pug", ".jade"],
  author: "TJ Holowaychuk / Pug contributors",
  website: "https://pugjs.org",
  paradigms: ["declarative", "templating", "markup"],
  tooling: {
    runtimes: ["Node.js", "Browser"],
    packageManagers: ["npm", "pnpm", "Yarn"],
    ecosystems: ["Web", "Node.js"],
  },
  version: "3.0.4",
  logo: "https://cdn.simpleicons.org/pug/A86454",
  color: "#A86454",
  i18n: {
    en: {
      name: "Pug",
      description:
        "A whitespace-sensitive template language for generating HTML in Node.js and browsers.",
      longDescription:
        "Pug is a high-performance template language for writing HTML with concise, indentation-based syntax. It was formerly known as Jade and is commonly used to generate HTML from reusable templates, layouts, includes, mixins, and JavaScript expressions.\n\nIt is used in Node.js web applications, static site workflows, component prototypes, email templates, and build pipelines where teams want compact templates that compile to HTML.",
    },
    es: {
      name: "Pug",
      description:
        "Un lenguaje de plantillas sensible a espacios para generar HTML en Node.js y navegadores.",
      longDescription:
        "Pug es un lenguaje de plantillas de alto rendimiento para escribir HTML con una sintaxis concisa basada en indentacion. Antes se llamaba Jade y se usa comunmente para generar HTML desde plantillas reutilizables, layouts, includes, mixins y expresiones JavaScript.\n\nSe usa en aplicaciones web con Node.js, flujos de sitios estaticos, prototipos de componentes, plantillas de email y pipelines de build donde los equipos quieren plantillas compactas que compilan a HTML.",
    },
  },
} satisfies Language;
