import type { Language } from "../types";

export const mathematica = {
  slug: "mathematica",
  publishedDate: "1988-06-23",
  extensions: [".wl", ".wls", ".nb"],
  author: "Stephen Wolfram / Wolfram Research",
  website: "https://www.wolfram.com/language/",
  paradigms: ["symbolic", "functional", "rule-based", "notebook"],
  tooling: {
    runtimes: ["Wolfram Engine", "Wolfram Cloud", "Mathematica"],
    ecosystems: ["Scientific Computing", "Symbolic Computing", "Notebooks"],
  },
  version: "14.3",
  logo: "https://cdn.simpleicons.org/wolfram/DD1100",
  i18n: {
    en: {
      name: "Wolfram Language",
      description: "A symbolic computation language used by Mathematica and Wolfram tools.",
      longDescription:
        "The Wolfram Language combines symbolic expressions, functional programming, pattern rules, notebooks, visualization, and a large knowledge-oriented standard library. Mathematica is its best-known interactive environment.\n\nIt is used for mathematics, modeling, data science, research notebooks, education, automation, and computational reports that benefit from symbolic and numeric workflows.",
    },
    es: {
      name: "Wolfram Language",
      description:
        "Un lenguaje de computacion simbolica usado por Mathematica y herramientas Wolfram.",
      longDescription:
        "Wolfram Language combina expresiones simbolicas, programacion funcional, reglas por patrones, notebooks, visualizacion y una biblioteca estandar orientada al conocimiento. Mathematica es su entorno interactivo mas conocido.\n\nSe usa en matematicas, modelado, ciencia de datos, notebooks de investigacion, educacion, automatizacion y reportes computacionales con flujos simbolicos y numericos.",
    },
  },
} satisfies Language;
