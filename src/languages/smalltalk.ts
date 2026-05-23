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
  color: "#596FB5",
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
    it: {
      name: "Smalltalk",
      description:
        "Un linguaggio di programmazione orientato agli oggetti basato su messaggi con ambienti basati su immagini in tempo reale.",
      longDescription:
        "Smalltalk ha contribuito a definire la programmazione orientata agli oggetti attraverso l'uso dei messaggi, delle classi, dei blocchi, del riflesso e di ambienti interattivi basati su immagini.\n\nViene utilizzato per l'istruzione, la ricerca, sistemi aziendali a lungo termine, simulazioni e programmazione esplorativa all'interno di immagini di oggetti in tempo reale.",
    },
    fr: {
      name: "Smalltalk",
      description:
        "Un langage oriente message avec des environnements bases sur des images en direct.",
      longDescription:
        "Smalltalk a contribue a definir la programmation orientee objet grace aux echanges de messages, aux classes, aux blocs, a la reflexion et aux environnements interactifs bases sur des images. De nombreuses implementations associent le langage a des navigateurs, des inspecteurs et des debogueurs en direct.\n\nIl est utilise pour l'education, la recherche, les systemes d'entreprise a long terme, les simulations et la programmation exploratoire dans des images d'objets en direct.",
    },
    de: {
      name: "Smalltalk",
      description:
        "Eine Nachrichten-orientierte objektorientierte Sprache mit interaktiven, bildbasierten Umgebungen.",
      longDescription:
        "Smalltalk hat die objektorientierte Programmierung durch Nachrichten, Klassen, Bl\u00f6cke, Reflexion und interaktive Bildumgebungen definiert. Viele Implementierungen verwenden die Sprache zusammen mit Live-Browsern, Inspektoren und Debuggern.\n\nSie wird f\u00fcr Bildung, Forschung, langfristige Gesch\u00e4ftssysteme, Simulationen und exploratives Programmieren in Live-Objektumgebungen verwendet.",
    },
    pt: {
      name: "Smalltalk",
      description:
        "Linguagem orientada a objetos baseada em mensagens com ambientes baseados em imagens em tempo real.",
      longDescription:
        "Smalltalk ajudou a definir a programa\u00e7\u00e3o orientada a objetos atrav\u00e9s de mensagens, classes, blocos, reflex\u00e3o e ambientes interativos baseados em imagens. Muitas implementa\u00e7\u00f5es combinam a linguagem com navegadores, inspetores e depuradores em tempo real.\n\n\u00c9 utilizada para educa\u00e7\u00e3o, pesquisa, sistemas de neg\u00f3cios de longa dura\u00e7\u00e3o, simula\u00e7\u00f5es e programa\u00e7\u00e3o explorat\u00f3ria em ambientes de objetos em tempo real.",
    },
  },
} satisfies Language;
