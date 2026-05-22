import type { Language } from "../types";

export const standardMl = {
  slug: "standard-ml",
  publishedDate: "1990-01-01",
  extensions: [".sml", ".sig", ".fun"],
  author: "Robin Milner and collaborators",
  website: "https://smlfamily.github.io",
  paradigms: ["functional", "statically typed", "module-oriented"],
  tooling: {
    runtimes: ["MLton", "Standard ML of New Jersey", "Poly/ML"],
    ecosystems: ["ML", "Compilers", "Research"],
  },
  version: "The Definition 1997",
  logo: "https://avatars.githubusercontent.com/u/62883579?v=4",
  i18n: {
    en: {
      name: "Standard ML",
      description: "A statically typed ML language with modules and pattern matching.",
      longDescription:
        "Standard ML defines a strict functional language with algebraic datatypes, pattern matching, type inference, exceptions, and a strong module system with signatures and functors. Its formal definition shaped much ML-family work.\n\nIt is used in compilers, theorem tools, teaching, research, and projects that need a small typed functional core with robust modules.",
    },
    es: {
      name: "Standard ML",
      description: "Un lenguaje ML tipado con modulos y pattern matching.",
      longDescription:
        "Standard ML define un lenguaje funcional estricto con datatypes algebraicos, pattern matching, inferencia de tipos, excepciones y un sistema fuerte de modulos con signatures y functors. Su definicion formal influyo mucho en la familia ML.\n\nSe usa en compiladores, herramientas de teoremas, ensenanza, investigacion y proyectos que necesitan un nucleo funcional tipado con modulos robustos.",
    },
  },
} satisfies Language;
