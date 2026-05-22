import type { Language } from "../types";

export const restructuredtext = {
  slug: "restructuredtext",
  publishedDate: "2001-06-01",
  extensions: [".rst", ".rest"],
  author: "David Goodger / Docutils contributors",
  website: "https://docutils.sourceforge.io/rst.html",
  paradigms: ["markup", "declarative", "documentation"],
  tooling: {
    runtimes: ["Docutils", "Sphinx"],
    packageManagers: ["pip"],
    ecosystems: ["Python", "Documentation", "Publishing"],
  },
  version: "Docutils 0.22.2",
  logo: "https://cdn.simpleicons.org/readthedocs/8CA1AF",
  i18n: {
    en: {
      name: "reStructuredText",
      description: "A plain-text markup format used by Docutils and Sphinx documentation.",
      longDescription:
        "reStructuredText is a structured plain-text markup language with sections, directives, roles, references, tables, lists, and extension points. Docutils defines the parser model and Sphinx extends it for technical documentation.\n\nIt is used for Python documentation, manuals, API references, books, project notes, and publishing workflows that need semantic markup from readable text.",
    },
    es: {
      name: "reStructuredText",
      description: "Un formato de marcado en texto plano usado por Docutils y Sphinx.",
      longDescription:
        "reStructuredText es un lenguaje de marcado estructurado en texto plano con secciones, directives, roles, referencias, tablas, listas y puntos de extension. Docutils define su modelo de parser y Sphinx lo extiende para documentacion tecnica.\n\nSe usa en documentacion Python, manuales, referencias API, libros, notas de proyectos y flujos de publicacion que necesitan marcado semantico desde texto legible.",
    },
  },
} satisfies Language;
