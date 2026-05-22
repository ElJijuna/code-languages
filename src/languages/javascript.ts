import type { Language } from "../types";

export const javascript = {
  slug: "javascript",
  publishedDate: "1995-12-04",
  extensions: [".js", ".mjs", ".cjs", ".jsx"],
  author: "Brendan Eich / Netscape",
  website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  paradigms: ["event-driven", "functional", "imperative", "object-oriented", "prototype-based"],
  tooling: {
    runtimes: ["Browser", "Node.js", "Deno", "Bun"],
    packageManagers: ["npm", "pnpm", "Yarn", "Bun"],
    ecosystems: ["Web", "Node.js"],
  },
  version: "ECMAScript 2025",
  logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  color: "#F7DF1E",
  i18n: {
    en: {
      name: "JavaScript",
      description: "A dynamic scripting language for the web, servers, tools, and applications.",
      longDescription:
        "JavaScript is the primary programming language of the web platform, running natively in browsers and in server runtimes such as Node.js, Deno, and Bun.\n\nThe language is standardized as ECMAScript and supports event-driven, functional, object-oriented, and prototype-based programming styles.",
    },
    es: {
      name: "JavaScript",
      description:
        "Un lenguaje dinamico de scripting para la web, servidores, herramientas y apps.",
      longDescription:
        "JavaScript es el lenguaje de programacion principal de la plataforma web, ejecutandose de forma nativa en navegadores y en runtimes de servidor como Node.js, Deno y Bun.\n\nEl lenguaje esta estandarizado como ECMAScript y soporta estilos de programacion orientados a eventos, funcionales, orientados a objetos y basados en prototipos.",
    },
    it: {
      name: "JavaScript",
      description:
        "Un linguaggio di scripting dinamico per il web, i server, gli strumenti e le applicazioni.",
      longDescription:
        "JavaScript e il linguaggio di programmazione principale della piattaforma web, che viene eseguito nativamente nei browser e nei runtime del server come Node.js, Deno e Bun.\n\nIl linguaggio e standardizzato come ECMAScript e supporta stili di programmazione basati su eventi, funzionali, orientati agli oggetti e basati su prototipi.",
    },
    fr: {
      name: "JavaScript",
      description:
        "Un langage de script dynamique pour le web, les serveurs, les outils et les applications.",
      longDescription:
        "JavaScript est le langage de programmation principal de la plateforme web, executant nativement dans les navigateurs et dans les environnements d'execution de serveur tels que Node.js, Deno et Bun.\n\nLe langage est standardise sous le nom ECMAScript et prend en charge les styles de programmation evenementiels, fonctionnels, orientes objet et bases sur les prototypes.",
    },
  },
} satisfies Language;
