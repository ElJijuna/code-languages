import type { Language } from "../types";

export const ziggy = {
  slug: "ziggy",
  publishedDate: "2023-10-02",
  extensions: [".ziggy", ".ziggy-schema"],
  author: "Loris Cro",
  website: "https://ziggy-lang.io",
  paradigms: ["data-notation", "schema", "declarative", "configuration"],
  tooling: {
    runtimes: ["Ziggy CLI"],
    ecosystems: ["Configuration", "Data Formats", "Zig"],
  },
  version: "0.1.0",
  logo: "https://avatars.githubusercontent.com/u/1642052?v=4",
  color: "#F7A41D",
  i18n: {
    en: {
      name: "Ziggy",
      description: "A data notation and schema language for configuration-style documents.",
      longDescription:
        "Ziggy is a data language for readable structured documents with a companion schema form for describing expected shapes. It targets configuration and data interchange workflows with tooling around Zig ecosystems.\n\nIt is used for configuration files, schema-checked data documents, tooling experiments, and projects that want a compact typed data notation.",
    },
    es: {
      name: "Ziggy",
      description: "Una notacion de datos y schemas para documentos de configuracion.",
      longDescription:
        "Ziggy es un lenguaje de datos para documentos estructurados legibles con una forma de schema complementaria para describir shapes esperados. Apunta a configuracion e intercambio de datos con tooling cercano al ecosistema Zig.\n\nSe usa en archivos de configuracion, documentos de datos validados por schemas, experimentos de tooling y proyectos que buscan una notacion de datos compacta y tipada.",
    },
  },
} satisfies Language;
