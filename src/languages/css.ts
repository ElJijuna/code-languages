import type { Language } from "../types";

export const css = {
  name: "CSS",
  slug: "css",
  description: "A stylesheet language for describing the presentation of web documents.",
  longDescription:
    "CSS defines how structured documents are presented, including layout, typography, colors, animations, responsive behavior, and visual states.\n\nIt is one of the core technologies of the web platform and is maintained through modular specifications rather than a single versioned language release.",
  publishedDate: "1996-12-17",
  extensions: [".css"],
  author: "Hakon Wium Lie / W3C",
  website: "https://www.w3.org/Style/CSS/",
  paradigms: ["declarative", "stylesheet"],
  version: "Living Standard",
  logo: "https://www.w3.org/html/logo/downloads/CSS3_Logo.svg",
} satisfies Language;
