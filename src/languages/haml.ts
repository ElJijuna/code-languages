import type { Language } from "../types";

export const haml = {
  slug: "haml",
  publishedDate: "2006-10-01",
  extensions: [".haml"],
  author: "Hampton Catlin",
  website: "https://haml.info",
  paradigms: ["template", "markup", "declarative"],
  tooling: {
    runtimes: ["Ruby"],
    packageManagers: ["RubyGems", "Bundler"],
    ecosystems: ["Ruby", "Ruby on Rails", "Web"],
  },
  version: "7.2.0",
  logo: "https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_haml.svg",
  i18n: {
    en: {
      name: "Haml",
      description: "A whitespace-sensitive template language for writing HTML tersely.",
      longDescription:
        "Haml is a markup and template language for generating HTML with indentation-based structure. It removes closing tags, reduces boilerplate, and integrates with Ruby frameworks such as Ruby on Rails.\n\nIt is used in web applications and static rendering pipelines that prefer concise templates, readable nesting, and Ruby-powered interpolation over explicit HTML syntax.",
    },
    es: {
      name: "Haml",
      description:
        "Un lenguaje de templates sensible a espacios para escribir HTML de forma concisa.",
      longDescription:
        "Haml es un lenguaje de marcado y templates para generar HTML con estructura basada en indentacion. Elimina etiquetas de cierre, reduce repeticion e integra con frameworks Ruby como Ruby on Rails.\n\nSe usa en aplicaciones web y pipelines de renderizado estatico que prefieren templates concisos, anidacion legible e interpolacion con Ruby en vez de sintaxis HTML explicita.",
    },
  },
} satisfies Language;
