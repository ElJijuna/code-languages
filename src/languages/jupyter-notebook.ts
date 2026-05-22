import type { Language } from "../types";

export const jupyterNotebook = {
  slug: "jupyter-notebook",
  publishedDate: "2011-12-21",
  extensions: [".ipynb"],
  author: "Project Jupyter",
  website: "https://jupyter.org",
  paradigms: ["literate programming", "interactive computing", "data serialization", "markup"],
  tooling: {
    runtimes: ["Jupyter Notebook", "JupyterLab", "VS Code"],
    packageManagers: ["pip", "conda", "mamba"],
    ecosystems: ["Data Science", "Machine Learning", "Scientific Computing", "Education"],
  },
  version: "nbformat 4.5",
  logo: "https://cdn.simpleicons.org/jupyter/F37626",
  color: "#F37626",
  i18n: {
    en: {
      name: "Jupyter Notebook",
      description:
        "A JSON-based notebook format for combining live code, narrative text, outputs, and media.",
      longDescription:
        "Jupyter Notebook files store executable code cells, Markdown narrative, rich outputs, metadata, and kernel information in a JSON document with the .ipynb extension.\n\nThey are widely used for data analysis, machine learning experiments, scientific computing, education, tutorials, reports, and reproducible computational workflows.",
    },
    es: {
      name: "Jupyter Notebook",
      description:
        "Un formato de notebook basado en JSON para combinar codigo vivo, texto, salidas y medios.",
      longDescription:
        "Los archivos Jupyter Notebook guardan celdas de codigo ejecutable, narrativa en Markdown, salidas enriquecidas, metadatos e informacion del kernel en un documento JSON con extension .ipynb.\n\nSe usan ampliamente en analisis de datos, experimentos de machine learning, computacion cientifica, educacion, tutoriales, reportes y flujos computacionales reproducibles.",
    },
    it: {
      name: "Jupyter Notebook",
      description:
        "Un formato di notebook basato su JSON per combinare codice, testo descrittivo, output e media in tempo reale.",
      longDescription:
        "I file Jupyter Notebook memorizzano celle di codice eseguibili, testo descrittivo in formato Markdown, output ricchi, metadati e informazioni sul kernel in un documento JSON con l'estensione .ipynb.\n\nSono ampiamente utilizzati per l'analisi dei dati, esperimenti di machine learning, calcolo scientifico, istruzione, tutorial, report e flussi di lavoro computazionali riproducibili.",
    },
    fr: {
      name: "Jupyter Notebook",
      description:
        "Un format de notebook base sur JSON pour combiner le code en direct, le texte narratif, les sorties et les medias.",
      longDescription:
        "Les fichiers Jupyter Notebook stockent des cellules de code executables, du texte narratif Markdown, des sorties riches, des metadonnees et des informations de noyau dans un document JSON avec l'extension .ipynb.\n\nIls sont largement utilises pour l'analyse de donnees, les experiences d'apprentissage automatique, le calcul scientifique, l'education, les tutoriels, les rapports et les flux de travail computationnels reproductibles.",
    },
  },
} satisfies Language;
