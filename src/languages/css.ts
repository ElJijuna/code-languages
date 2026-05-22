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
  color: "#1572B6",
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
    it: {
      name: "CSS",
      description: "Un linguaggio di stile per descrivere la presentazione di documenti web.",
      longDescription:
        "CSS definisce come i documenti strutturati vengono presentati, inclusi layout, tipografia, colori, animazioni, comportamento responsive e stati visivi.\n\nE una delle tecnologie fondamentali della piattaforma web e viene mantenuta attraverso specifiche modulari piuttosto che un singolo rilascio di linguaggio con versione.",
    },
    fr: {
      name: "CSS",
      description: "Un langage de style pour decrire la presentation des documents web.",
      longDescription:
        "CSS definit comment les documents structures sont presentes, notamment la mise en page, la typographie, les couleurs, les animations, le comportement adaptatif et les etats visuels.\n\nC'est l'une des technologies centrales de la plateforme web et est maintenue grace a des specifications modulaires plutot qu'a une seule version de langage.",
    },
  },
} satisfies Language;
