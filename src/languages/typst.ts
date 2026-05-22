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
  color: "#239DAD",
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
    it: {
      name: "Typst",
      description:
        "Un linguaggio di markup e scripting moderno per la formattazione di documenti e PDF.",
      longDescription:
        "Typst combina markup leggero, primitive di layout, funzioni, variabili, pacchetti, notazione matematica, bibliografie, modelli e scripting in un sistema di formattazione veloce. Mira a rendere la produzione di documenti professionali piu programmabile e accessibile rispetto ai flussi di lavoro tradizionali di TeX.\n\nViene utilizzato per articoli accademici, rapporti, libri, curriculum vitae, appunti di lezione, modelli, documenti tecnici e flussi di lavoro di pubblicazione che necessitano di generazione di PDF riproducibile da file di origine leggibili.",
    },
    fr: {
      name: "Typst",
      description:
        "Un langage de balisage et de script moderne pour la composition de documents et de PDF.",
      longDescription:
        "Typst combine un balisage leger, des primitives de mise en page, des fonctions, des variables, des paquets, une notation mathematique, des bibliographies, des modeles et un langage de script dans un systeme de composition rapide. Il vise a rendre la production de documents professionnels plus programmable et accessible que les workflows traditionnels TeX.\n\nIl est utilise pour les articles universitaires, les rapports, les livres, les CV, les notes de cours, les modeles, les documents techniques et les flux de travail de publication qui necessitent la generation de PDF reproductible a partir de fichiers sources lisibles.",
    },
  },
} satisfies Language;
