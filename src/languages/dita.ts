import type { Language } from "../types";

export const dita = {
  slug: "dita",
  publishedDate: "2005-05-03",
  extensions: [".dita", ".ditamap", ".ditaval"],
  author: "OASIS",
  website: "https://www.oasis-open.org/standard/dita/",
  paradigms: ["markup", "structured authoring", "XML-based", "documentation"],
  tooling: {
    runtimes: ["DITA Open Toolkit"],
    packageManagers: ["npm", "Maven"],
    ecosystems: ["Technical writing", "XML", "Publishing"],
  },
  version: "1.3",
  logo: "https://avatars.githubusercontent.com/u/20116735?v=4",
  color: "#3C6E71",
  i18n: {
    en: {
      name: "DITA",
      description: "An XML-based architecture for structured technical documentation.",
      longDescription:
        "DITA is the Darwin Information Typing Architecture, an XML-based standard for topic-oriented authoring. It defines topic types, maps, specialization, reuse mechanisms, and publishing-oriented metadata for large documentation sets.\n\nIt is used in technical writing, product documentation, regulated content, localization workflows, and publishing pipelines that need structured reusable topics rather than page-by-page documents.",
    },
    es: {
      name: "DITA",
      description: "Una arquitectura basada en XML para documentacion tecnica estructurada.",
      longDescription:
        "DITA es Darwin Information Typing Architecture, un estandar basado en XML para autoria orientada a topicos. Define tipos de topico, mapas, especializacion, mecanismos de reutilizacion y metadatos de publicacion para grandes conjuntos de documentacion.\n\nSe usa en redaccion tecnica, documentacion de productos, contenido regulado, flujos de localizacion y pipelines de publicacion que necesitan topicos estructurados y reutilizables en vez de documentos pagina por pagina.",
    },
  },
} satisfies Language;
