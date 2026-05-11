import type { Language } from "../types";

export const typescript = {
  slug: "typescript",
  publishedDate: "2012-10-01",
  extensions: [".ts", ".tsx", ".mts", ".cts"],
  author: "Anders Hejlsberg / Microsoft",
  website: "https://www.typescriptlang.org",
  paradigms: ["object-oriented", "functional", "imperative", "generic"],
  version: "6.0",
  logo: "https://www.typescriptlang.org/icons/icon-512x512.png",
  i18n: {
    en: {
      name: "TypeScript",
      description: "A typed superset of JavaScript that compiles to plain JavaScript.",
      longDescription:
        "TypeScript adds static typing, interfaces, generics, and modern tooling support to JavaScript while preserving JavaScript runtime semantics.\n\nIt is widely used for large web applications, libraries, server-side Node.js projects, and developer tools where maintainability and editor feedback matter.",
    },
  },
} satisfies Language;
