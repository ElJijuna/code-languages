import type { Language } from "../types";

export const asciidoc = {
  slug: "asciidoc",
  publishedDate: "2002-11-25",
  extensions: [".adoc", ".asciidoc", ".asc"],
  author: "Stuart Rackham / AsciiDoc Working Group",
  website: "https://asciidoc.org",
  paradigms: ["markup", "documentation", "declarative", "publishing"],
  tooling: {
    runtimes: ["Asciidoctor", "Asciidoctor.js", "Antora"],
    packageManagers: ["RubyGems", "npm", "Maven"],
    ecosystems: ["Documentation", "Publishing", "Technical Writing", "Static Sites"],
  },
  version: "pre-spec",
  logo: "https://cdn.simpleicons.org/asciidoctor/E40046",
  color: "#E40046",
  i18n: {
    en: {
      name: "AsciiDoc",
      description:
        "A plain-text markup language for technical documentation, books, and publishing.",
      longDescription:
        "AsciiDoc is a readable markup language for writing structured documents with sections, attributes, lists, tables, admonitions, cross references, includes, source blocks, and rich publishing metadata. It is designed to remain comfortable in plain text while supporting professional output formats.\n\nIt is used for product documentation, books, technical manuals, API guides, knowledge bases, Antora documentation sites, and publishing workflows that need semantic source files under version control.",
    },
    es: {
      name: "AsciiDoc",
      description:
        "Un lenguaje de marcado en texto plano para documentacion tecnica, libros y publicacion.",
      longDescription:
        "AsciiDoc es un lenguaje de marcado legible para escribir documentos estructurados con secciones, atributos, listas, tablas, admoniciones, referencias cruzadas, includes, bloques de codigo y metadatos de publicacion. Esta pensado para ser comodo en texto plano y aun asi soportar salidas profesionales.\n\nSe usa en documentacion de producto, libros, manuales tecnicos, guias de API, bases de conocimiento, sitios Antora y flujos de publicacion que necesitan archivos fuente semanticos bajo control de versiones.",
    },
  },
} satisfies Language;
