import type { Language } from "../types";

export const javascript = {
  slug: "javascript",
  publishedDate: "1995-12-04",
  extensions: [".js", ".mjs", ".cjs", ".jsx"],
  author: "Brendan Eich / Netscape",
  website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  paradigms: ["event-driven", "functional", "imperative", "object-oriented", "prototype-based"],
  version: "ECMAScript 2025",
  logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
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
  },
} satisfies Language;
