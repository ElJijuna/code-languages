import type { Language } from "../types";

export const typst = {
  slug: "typst",
  publishedDate: "2023-03-21",
  extensions: [".typ"],
  author: "Typst GmbH / Typst contributors",
  website: "https://typst.app",
  paradigms: ["markup", "typesetting", "functional", "scripting"],
  tooling: {
    runtimes: ["Typst CLI", "Typst Web App"],
    packageManagers: ["Typst Packages"],
    ecosystems: ["Publishing", "Academic Writing", "Documentation", "Typesetting"],
  },
  version: "0.14.2",
  logo: "https://cdn.simpleicons.org/typst/239DAD",
  i18n: {
    en: {
      name: "Typst",
      description: "A modern markup and scripting language for typesetting documents and PDFs.",
      longDescription:
        "Typst combines lightweight markup, layout primitives, functions, variables, packages, math notation, bibliographies, templates, and scripting in a fast typesetting system. It aims to make professional document production more programmable and approachable than traditional TeX workflows.\n\nIt is used for academic papers, reports, books, resumes, lecture notes, templates, technical documents, and publishing workflows that need reproducible PDF generation from readable source files.",
    },
    es: {
      name: "Typst",
      description: "Un lenguaje moderno de marcado y scripting para componer documentos y PDFs.",
      longDescription:
        "Typst combina marcado liviano, primitivas de layout, funciones, variables, paquetes, notacion matematica, bibliografias, templates y scripting en un sistema rapido de composicion. Busca hacer la produccion profesional de documentos mas programable y accesible que los flujos tradicionales con TeX.\n\nSe usa para articulos academicos, reportes, libros, CVs, apuntes de clase, templates, documentos tecnicos y flujos de publicacion que necesitan generar PDFs reproducibles desde archivos fuente legibles.",
    },
  },
} satisfies Language;
