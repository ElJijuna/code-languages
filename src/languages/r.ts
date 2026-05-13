import type { Language } from "../types";

export const r = {
  slug: "r",
  publishedDate: "1993-08-01",
  extensions: [".r", ".R", ".rmd", ".Rmd", ".qmd", ".Rprofile"],
  author: "Ross Ihaka, Robert Gentleman / R Core Team",
  website: "https://www.r-project.org",
  paradigms: ["functional", "array-oriented", "object-oriented", "statistical"],
  tooling: {
    runtimes: ["R"],
    packageManagers: ["CRAN", "renv", "pak"],
    ecosystems: ["Statistics", "Data Science", "Visualization", "Scientific Computing"],
  },
  version: "4.6.0",
  logo: "https://www.r-project.org/logo/Rlogo.svg",
  i18n: {
    en: {
      name: "R",
      description:
        "A statistical computing language and environment for data analysis, graphics, and research.",
      longDescription:
        "R is a programming language and software environment for statistical computing, data analysis, graphics, and reproducible research. It provides vectorized operations, data frames, formulas, packages, interactive workflows, and a large ecosystem centered around CRAN.\n\nIt is widely used in statistics, bioinformatics, data science, academic research, visualization, reporting, modeling, and analytical workflows that combine code, data, plots, and narrative documents.",
    },
    es: {
      name: "R",
      description:
        "Un lenguaje y entorno de computacion estadistica para analisis de datos, graficos e investigacion.",
      longDescription:
        "R es un lenguaje de programacion y entorno de software para computacion estadistica, analisis de datos, graficos e investigacion reproducible. Ofrece operaciones vectorizadas, data frames, formulas, paquetes, flujos interactivos y un ecosistema amplio centrado en CRAN.\n\nSe usa ampliamente en estadistica, bioinformatica, ciencia de datos, investigacion academica, visualizacion, reportes, modelado y flujos analiticos que combinan codigo, datos, graficos y documentos narrativos.",
    },
  },
} satisfies Language;
