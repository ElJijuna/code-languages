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
  color: "#276DC3",
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
    it: {
      name: "R",
      description:
        "Un linguaggio e ambiente di calcolo statistico per l'analisi dei dati, la grafica e la ricerca.",
      longDescription:
        "R e un linguaggio di programmazione e ambiente software per il calcolo statistico, l'analisi dei dati, la grafica e la ricerca riproducibile. Fornisce operazioni vettoriali, data frame, formule, pacchetti, flussi di lavoro interattivi e un vasto ecosistema incentrato su CRAN.\n\nE ampiamente utilizzato in statistica, bioinformatica, data science, ricerca accademica, visualizzazione, reporting, modellazione e flussi di lavoro analitici che combinano codice, dati, grafici e documenti narrativi.",
    },
    fr: {
      name: "R",
      description:
        "Un langage et un environnement de calcul statistique pour l'analyse de donnees, la creation de graphiques et la recherche.",
      longDescription:
        "R est un langage de programmation et un environnement logiciel pour le calcul statistique, l'analyse de donnees, la creation de graphiques et la recherche reproductible. Il fournit des operations vectorielles, des data frames, des formules, des packages, des flux de travail interactifs et un vaste ecosysteme centre autour de CRAN.\n\nIl est largement utilise en statistiques, en bioinformatique, en science des donnees, en recherche academique, en visualisation, en reporting, en modelisation et dans des flux de travail analytiques qui combinent du code, des donnees, des graphiques et des documents narratifs.",
    },
  },
} satisfies Language;
