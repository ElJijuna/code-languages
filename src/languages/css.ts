import type { Language } from "../types";

export const css = {
  slug: "css",
  publishedDate: "1996-12-17",
  extensions: [".css"],
  author: "Hakon Wium Lie / W3C",
  website: "https://www.w3.org/Style/CSS/",
  paradigms: ["declarative", "stylesheet"],
  version: "Living Standard",
  logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg",
  i18n: {
    en: {
      name: "CSS",
      description: "A stylesheet language for describing the presentation of web documents.",
      longDescription:
        "CSS defines how structured documents are presented, including layout, typography, colors, animations, responsive behavior, and visual states.\n\nIt is one of the core technologies of the web platform and is maintained through modular specifications rather than a single versioned language release.",
    },
    es: {
      name: "CSS",
      description:
        "Un lenguaje de hojas de estilo para describir la presentacion de documentos web.",
      longDescription:
        "CSS define como se presentan los documentos estructurados, incluyendo layout, tipografia, colores, animaciones, comportamiento responsivo y estados visuales.\n\nEs una de las tecnologias centrales de la plataforma web y se mantiene mediante especificaciones modulares en lugar de una unica version del lenguaje.",
    },
  },
} satisfies Language;
