import type { Language } from "../types";

export const typescript = {
  slug: "typescript",
  publishedDate: "2012-10-01",
  extensions: [".ts", ".tsx", ".mts", ".cts"],
  author: "Anders Hejlsberg / Microsoft",
  website: "https://www.typescriptlang.org",
  paradigms: ["object-oriented", "functional", "imperative", "generic"],
  tooling: {
    runtimes: ["Browser", "Node.js", "Deno", "Bun"],
    packageManagers: ["npm", "pnpm", "Yarn", "Bun"],
    ecosystems: ["Web", "Node.js"],
  },
  version: "6.0",
  logo: "https://www.typescriptlang.org/icons/icon-512x512.png",
  color: "#3178C6",
  i18n: {
    en: {
      name: "TypeScript",
      description: "A typed superset of JavaScript that compiles to plain JavaScript.",
      longDescription:
        "TypeScript adds static typing, interfaces, generics, and modern tooling support to JavaScript while preserving JavaScript runtime semantics.\n\nIt is widely used for large web applications, libraries, server-side Node.js projects, and developer tools where maintainability and editor feedback matter.",
    },
    es: {
      name: "TypeScript",
      description: "Un superconjunto tipado de JavaScript que compila a JavaScript plano.",
      longDescription:
        "TypeScript agrega tipado estatico, interfaces, genericos y soporte moderno de herramientas a JavaScript, preservando la semantica de ejecucion de JavaScript.\n\nSe usa ampliamente en aplicaciones web grandes, bibliotecas, proyectos Node.js del lado del servidor y herramientas de desarrollo donde importan la mantenibilidad y el feedback del editor.",
    },
    it: {
      name: "TypeScript",
      description: "Un superset tipato di JavaScript che compila in JavaScript standard.",
      longDescription:
        "TypeScript aggiunge il tipaggio statico, le interfacce, i generics e il supporto per gli strumenti moderni a JavaScript, preservando la semantica di runtime di JavaScript.\n\nE ampiamente utilizzato per applicazioni web di grandi dimensioni, librerie, progetti Node.js lato server e strumenti per sviluppatori in cui la manutenibilita e il feedback dell'editor sono importanti.",
    },
    fr: {
      name: "TypeScript",
      description: "Un sur-ensemble type de JavaScript qui compile en JavaScript pur.",
      longDescription:
        "TypeScript ajoute la typage statique, les interfaces, les generiques et le support des outils modernes a JavaScript tout en conservant la semantique d'execution de JavaScript.\n\nIl est largement utilise pour les grandes applications web, les bibliotheques, les projets Node.js cote serveur et les outils de developpement ou la maintenabilite et les commentaires de l'editeur sont importants.",
    },
    de: {
      name: "TypeScript",
      description:
        "Eine typisierte Erweiterung von JavaScript, die zu reinem JavaScript kompiliert.",
      longDescription:
        "TypeScript f\u00fcgt JavaScript statische Typisierung, Schnittstellen, Generics und moderne Tooling-Unterst\u00fctzung hinzu und bewahrt dabei die JavaScript-Runtime-Semantik.\n\nEs wird h\u00e4ufig f\u00fcr gro\u00dfe Webanwendungen, Bibliotheken, Node.js-Serverprojekte und Entwicklerwerkzeuge verwendet, bei denen Wartbarkeit und Editor-Feedback wichtig sind.",
    },
    pt: {
      name: "TypeScript",
      description:
        "Superset de JavaScript com tipagem est\u00e1tica que compila para JavaScript puro.",
      longDescription:
        "TypeScript adiciona tipagem est\u00e1tica, interfaces, gen\u00e9ricos e suporte para ferramentas modernas ao JavaScript, preservando a sem\u00e2ntica do runtime do JavaScript.\n\n\u00c9 amplamente utilizado para grandes aplica\u00e7\u00f5es web, bibliotecas, projetos Node.js do lado do servidor e ferramentas de desenvolvimento onde a manuten\u00e7\u00e3o e o feedback do editor s\u00e3o importantes.",
    },
  },
} satisfies Language;
