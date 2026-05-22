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
  },
} satisfies Language;
