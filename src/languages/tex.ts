import type { Language } from "../types";

export const tex = {
  slug: "tex",
  publishedDate: "1978-01-01",
  extensions: [".tex", ".sty", ".cls", ".dtx", ".ins", ".ltx"],
  author: "Donald Knuth",
  website: "https://www.tug.org/texlive/",
  paradigms: ["markup", "typesetting", "macro", "declarative"],
  tooling: {
    runtimes: ["TeX Live", "MiKTeX", "pdfTeX", "XeTeX", "LuaTeX"],
    packageManagers: ["tlmgr", "MiKTeX Console", "CTAN"],
    ecosystems: ["Publishing", "Academic Writing", "Scientific Documents", "Print"],
  },
  version: "TeX Live 2026",
  logo: "https://cdn.simpleicons.org/latex/008080",
  i18n: {
    en: {
      name: "TeX",
      description:
        "Donald Knuth's macro-based typesetting system for precise technical and scientific documents.",
      longDescription:
        "TeX is a programmable typesetting system built around macros, boxes, glue, mathematical layout, and precise page composition. Plain TeX, LaTeX, ConTeXt, and related formats build on the TeX engine family to produce high-quality documents from text source files.\n\nIt is used for academic papers, books, technical manuals, mathematics, physics, computer science publications, theses, and publishing workflows where reproducible typography and long-term source stability matter.",
    },
    es: {
      name: "TeX",
      description:
        "El sistema de composicion tipografica basado en macros de Donald Knuth para documentos tecnicos.",
      longDescription:
        "TeX es un sistema programable de composicion tipografica basado en macros, cajas, espaciado flexible, notacion matematica y composicion precisa de paginas. Plain TeX, LaTeX, ConTeXt y formatos relacionados se apoyan en la familia de motores TeX para producir documentos de alta calidad desde archivos fuente de texto.\n\nSe usa para articulos academicos, libros, manuales tecnicos, matematicas, fisica, publicaciones de computacion, tesis y flujos editoriales donde importan la tipografia reproducible y la estabilidad del codigo fuente a largo plazo.",
    },
  },
} satisfies Language;
