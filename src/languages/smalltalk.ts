import type { Language } from "../types";

export const smalltalk = {
  slug: "smalltalk",
  publishedDate: "1972-01-01",
  extensions: [".st"],
  author: "Alan Kay / Dan Ingalls / Adele Goldberg",
  website: "https://squeak.org",
  paradigms: ["object-oriented", "message-passing", "reflective", "dynamic"],
  tooling: {
    runtimes: ["Pharo", "Squeak", "GNU Smalltalk"],
    ecosystems: ["Images", "Education", "Object Systems"],
  },
  version: "ANSI INCITS 319-1998",
  logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Smalltalk_Balloon.svg",
  i18n: {
    en: {
      name: "Smalltalk",
      description: "A message-oriented object language with live image-based environments.",
      longDescription:
        "Smalltalk helped define object-oriented programming through message sends, classes, blocks, reflection, and interactive image environments. Many implementations pair the language with live browsers, inspectors, and debuggers.\n\nIt is used for education, research, long-lived business systems, simulations, and exploratory programming inside live object images.",
    },
    es: {
      name: "Smalltalk",
      description: "Un lenguaje orientado a mensajes y objetos con entornos de imagen vivos.",
      longDescription:
        "Smalltalk ayudo a definir la programacion orientada a objetos mediante mensajes, clases, bloques, reflexion y entornos interactivos basados en imagenes. Muchas implementaciones combinan el lenguaje con browsers, inspectors y debuggers vivos.\n\nSe usa en educacion, investigacion, sistemas de negocio longevos, simulaciones y programacion exploratoria dentro de imagenes de objetos.",
    },
  },
} satisfies Language;
