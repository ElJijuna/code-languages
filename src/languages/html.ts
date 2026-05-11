import type { Language } from "../types";

export const html = {
  slug: "html",
  publishedDate: "1993-06-01",
  extensions: [".html", ".htm"],
  author: "Tim Berners-Lee / WHATWG",
  website: "https://html.spec.whatwg.org",
  paradigms: ["declarative", "markup"],
  version: "Living Standard",
  logo: "https://www.w3.org/html/logo/downloads/HTML5_Badge.svg",
  i18n: {
    en: {
      name: "HTML",
      description: "A markup language for structuring web pages and browser-rendered documents.",
      longDescription:
        "HTML defines the structure and semantics of documents on the web, using elements and attributes to describe headings, paragraphs, links, media, forms, and application surfaces.\n\nIt is maintained as a living standard and works alongside CSS and JavaScript as one of the core technologies of the web platform.",
    },
  },
} satisfies Language;
