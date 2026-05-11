import type { Language } from "../types";

export const markdown = {
  slug: "markdown",
  publishedDate: "2004-03-19",
  extensions: [".md", ".markdown", ".mdown", ".mkd"],
  author: "John Gruber / Aaron Swartz",
  website: "https://daringfireball.net/projects/markdown/",
  paradigms: ["declarative", "markup"],
  version: "CommonMark 0.31.2",
  logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg",
  i18n: {
    en: {
      name: "Markdown",
      description: "A lightweight markup language for writing formatted plain-text documents.",
      longDescription:
        "Markdown uses plain-text syntax to represent headings, lists, links, emphasis, code blocks, tables, and other common document structures.\n\nIt is widely used for README files, documentation, static sites, notes, issue trackers, and publishing workflows where readable source text matters.",
    },
  },
} satisfies Language;
