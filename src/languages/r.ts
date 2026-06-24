import type { Language } from '../types';

export const r = {
  slug: 'r',
  publishedDate: '1993-08-01',
  extensions: ['.r', '.R', '.rmd', '.Rmd', '.qmd', '.Rprofile'],
  author: 'Ross Ihaka, Robert Gentleman / R Core Team',
  website: 'https://www.r-project.org',
  paradigms: ['functional', 'array-oriented', 'object-oriented', 'statistical'],
  tooling: {
    runtimes: ['R'],
    packageManagers: ['CRAN', 'renv', 'pak'],
    ecosystems: ['Statistics', 'Data Science', 'Visualization', 'Scientific Computing'],
  },
  version: '4.6.1',
  logo: 'https://www.r-project.org/logo/Rlogo.svg',
  color: '#276DC3',
  i18n: {
    en: {
      name: 'R',
      description:
        'A statistical computing language and environment for data analysis, graphics, and research.',
      longDescription:
        'R is a programming language and software environment for statistical computing, data analysis, graphics, and reproducible research. It provides vectorized operations, data frames, formulas, packages, interactive workflows, and a large ecosystem centered around CRAN.\n\nIt is widely used in statistics, bioinformatics, data science, academic research, visualization, reporting, modeling, and analytical workflows that combine code, data, plots, and narrative documents.',
    },
    es: {
      name: 'R',
      description:
        'Un lenguaje y entorno de computacion estadistica para analisis de datos, graficos e investigacion.',
      longDescription:
        'R es un lenguaje de programacion y entorno de software para computacion estadistica, analisis de datos, graficos e investigacion reproducible. Ofrece operaciones vectorizadas, data frames, formulas, paquetes, flujos interactivos y un ecosistema amplio centrado en CRAN.\n\nSe usa ampliamente en estadistica, bioinformatica, ciencia de datos, investigacion academica, visualizacion, reportes, modelado y flujos analiticos que combinan codigo, datos, graficos y documentos narrativos.',
    },
    it: {
      name: 'R',
      description:
        "Un linguaggio e ambiente di calcolo statistico per l'analisi dei dati, la grafica e la ricerca.",
      longDescription:
        "R e un linguaggio di programmazione e ambiente software per il calcolo statistico, l'analisi dei dati, la grafica e la ricerca riproducibile. Fornisce operazioni vettoriali, data frame, formule, pacchetti, flussi di lavoro interattivi e un vasto ecosistema incentrato su CRAN.\n\nE ampiamente utilizzato in statistica, bioinformatica, data science, ricerca accademica, visualizzazione, reporting, modellazione e flussi di lavoro analitici che combinano codice, dati, grafici e documenti narrativi.",
    },
    fr: {
      name: 'R',
      description:
        "Un langage et un environnement de calcul statistique pour l'analyse de donnees, la creation de graphiques et la recherche.",
      longDescription:
        "R est un langage de programmation et un environnement logiciel pour le calcul statistique, l'analyse de donnees, la creation de graphiques et la recherche reproductible. Il fournit des operations vectorielles, des data frames, des formules, des packages, des flux de travail interactifs et un vaste ecosysteme centre autour de CRAN.\n\nIl est largement utilise en statistiques, en bioinformatique, en science des donnees, en recherche academique, en visualisation, en reporting, en modelisation et dans des flux de travail analytiques qui combinent du code, des donnees, des graphiques et des documents narratifs.",
    },
    de: {
      name: 'R',
      description:
        'Eine statistische Programmiersprache und -umgebung für Datenanalyse, Grafik und Forschung.',
      longDescription:
        'R ist eine Programmiersprache und Softwareumgebung für statistische Berechnungen, Datenanalyse, Grafik und reproduzierbare Forschung. Sie bietet vektorisierte Operationen, Datenrahmen, Formeln, Pakete, interaktive Arbeitsabläufe und ein großes Ökosystem, das sich um CRAN dreht.\n\nSie wird häufig in Statistik, Bioinformatik, Datenwissenschaft, akademischer Forschung, Visualisierung, Berichterstellung, Modellierung und analytischen Arbeitsabläufen verwendet, die Code, Daten, Diagramme und narrative Dokumente kombinieren.',
    },
    pt: {
      name: 'R',
      description:
        'Linguagem e ambiente de computação estatística para análise de dados, gráficos e pesquisa.',
      longDescription:
        'R é uma linguagem e ambiente de software para computação estatística, análise de dados, gráficos e pesquisa reprodutível. Fornece operações vetorizadas, data frames, fórmulas, pacotes, fluxos de trabalho interativos e um grande ecossistema centrado no CRAN.\n\nÉ amplamente utilizado em estatística, bioinformática, ciência de dados, pesquisa acadêmica, visualização, relatórios, modelagem e fluxos de trabalho analíticos que combinam código, dados, gráficos e documentos narrativos.',
    },
  },
} satisfies Language;
