import type { Language } from "../types";

export const wren = {
  slug: "wren",
  publishedDate: "2013-10-31",
  extensions: [".wren"],
  author: "Bob Nystrom / Wren contributors",
  website: "https://wren.io",
  paradigms: ["object-oriented", "scripting", "class-based", "dynamic"],
  tooling: {
    runtimes: ["Wren VM"],
    ecosystems: ["Embedding", "Games", "Scripting"],
  },
  version: "0.4.0",
  logo: "https://avatars.githubusercontent.com/u/8763410?v=4",
  color: "#383838",
  i18n: {
    en: {
      name: "Wren",
      description: "A small class-based scripting language designed for embedding.",
      longDescription:
        "Wren is a compact dynamic language with classes, fibers, modules, closures, and a VM intended to embed cleanly in host applications. Its syntax keeps scripting programs short while preserving an object-oriented model.\n\nIt is used for embedded scripting, game experiments, tools, teaching, and applications that need a small embeddable language runtime.",
    },
    es: {
      name: "Wren",
      description: "Un lenguaje pequeno de scripting basado en clases y pensado para embeberse.",
      longDescription:
        "Wren es un lenguaje dinamico compacto con clases, fibers, modulos, closures y una VM pensada para integrarse limpiamente en aplicaciones anfitrionas. Su sintaxis mantiene scripts breves y conserva un modelo orientado a objetos.\n\nSe usa en scripting embebido, experimentos de juegos, herramientas, ensenanza y aplicaciones que necesitan un runtime de lenguaje pequeno.",
    },
    it: {
      name: "Wren",
      description:
        "Un linguaggio di scripting basato su classi piccolo, progettato per l'incorporamento.",
      longDescription:
        "Wren e un linguaggio dinamico compatto con classi, fibre, moduli, closure e una VM, progettato per essere incorporato in modo pulito in applicazioni ospite. La sua sintassi mantiene i programmi di scripting brevi preservando un modello orientato agli oggetti.\n\nE utilizzato per lo scripting incorporato, esperimenti di giochi, strumenti, didattica e applicazioni che necessitano di un piccolo runtime di linguaggio incorporabile.",
    },
    fr: {
      name: "Wren",
      description: "Un petit langage de script base sur des classes concu pour l'integration.",
      longDescription:
        "Wren est un langage dynamique compact avec des classes, des fibres, des modules, des closures et une VM concue pour etre integree proprement dans des applications hotes. Sa syntaxe permet de maintenir des programmes de script courts tout en conservant un modele oriente objet.\n\nIl est utilise pour le script embarque, les experimentations de jeux, les outils, l'enseignement et les applications qui ont besoin d'un petit runtime de langage embarque.",
    },
  },
} satisfies Language;
