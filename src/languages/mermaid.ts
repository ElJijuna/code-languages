import type { Language } from "../types";

export const mermaid = {
  slug: "mermaid",
  publishedDate: "2014-11-04",
  extensions: [".mmd", ".mermaid"],
  author: "Knut Sveidqvist / Mermaid contributors",
  website: "https://mermaid.js.org",
  paradigms: ["declarative", "diagramming", "markup"],
  tooling: {
    runtimes: ["Browser", "Node.js"],
    packageManagers: ["npm", "Yarn", "pnpm"],
    ecosystems: ["Documentation", "Markdown", "Diagrams", "Knowledge Management"],
  },
  version: "11.11.0",
  logo: "https://cdn.simpleicons.org/mermaid/FF3670",
  i18n: {
    en: {
      name: "Mermaid",
      description: "A text-based diagram language for flowcharts, sequences, timelines, and more.",
      longDescription:
        "Mermaid is a diagramming language that renders structured text into diagrams such as flowcharts, sequence diagrams, class diagrams, state diagrams, entity relationship diagrams, gantt charts, timelines, and mind maps. It is designed to live comfortably beside Markdown documentation.\n\nIt is used in READMEs, architecture notes, wikis, documentation sites, issue trackers, knowledge bases, and workflows where diagrams should be versioned as plain text.",
    },
    es: {
      name: "Mermaid",
      description:
        "Un lenguaje textual de diagramas para flujos, secuencias, lineas de tiempo y mas.",
      longDescription:
        "Mermaid es un lenguaje de diagramacion que renderiza texto estructurado como diagramas de flujo, secuencia, clases, estados, entidad-relacion, gantt, lineas de tiempo y mapas mentales. Esta pensado para convivir comodamente con documentacion Markdown.\n\nSe usa en READMEs, notas de arquitectura, wikis, sitios de documentacion, issue trackers, bases de conocimiento y flujos donde los diagramas deben versionarse como texto plano.",
    },
  },
} satisfies Language;
