import type { Language } from "../types";

export const javascript = {
  name: "JavaScript",
  slug: "javascript",
  description: "A dynamic scripting language for the web, servers, tools, and applications.",
  longDescription:
    "JavaScript is the primary programming language of the web platform, running natively in browsers and in server runtimes such as Node.js, Deno, and Bun.\n\nThe language is standardized as ECMAScript and supports event-driven, functional, object-oriented, and prototype-based programming styles.",
  publishedDate: "1995-12-04",
  extensions: [".js", ".mjs", ".cjs", ".jsx"],
  author: "Brendan Eich / Netscape",
  website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  paradigms: ["event-driven", "functional", "imperative", "object-oriented", "prototype-based"],
  version: "ECMAScript 2025",
  logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
} satisfies Language;
