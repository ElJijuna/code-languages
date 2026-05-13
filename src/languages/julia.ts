import type { Language } from "../types";

export const julia = {
  slug: "julia",
  publishedDate: "2012-02-14",
  extensions: [".jl"],
  author: "Jeff Bezanson, Stefan Karpinski, Viral B. Shah, Alan Edelman",
  website: "https://julialang.org",
  paradigms: ["multiple-dispatch", "functional", "imperative", "metaprogramming"],
  tooling: {
    runtimes: ["Julia"],
    packageManagers: ["Pkg"],
    ecosystems: ["Scientific Computing", "Data Science", "Machine Learning", "HPC"],
  },
  version: "1.12.6",
  logo: "https://cdn.simpleicons.org/julia/9558B2",
  i18n: {
    en: {
      name: "Julia",
      description:
        "A high-performance language for technical computing, data science, and numerical work.",
      longDescription:
        "Julia is a high-level, high-performance programming language designed for numerical and scientific computing. It combines dynamic interactivity with just-in-time compilation, multiple dispatch, metaprogramming, and a package ecosystem focused on technical work.\n\nIt is widely used for scientific computing, data analysis, machine learning, optimization, simulations, high-performance computing, and workflows where teams want expressive code that can run close to native speed.",
    },
    es: {
      name: "Julia",
      description:
        "Un lenguaje de alto rendimiento para computacion tecnica, ciencia de datos y trabajo numerico.",
      longDescription:
        "Julia es un lenguaje de programacion de alto nivel y alto rendimiento disenado para computacion numerica y cientifica. Combina interactividad dinamica con compilacion just-in-time, multiple dispatch, metaprogramacion y un ecosistema de paquetes enfocado en trabajo tecnico.\n\nSe usa ampliamente en computacion cientifica, analisis de datos, machine learning, optimizacion, simulaciones, computacion de alto rendimiento y flujos donde los equipos quieren codigo expresivo que pueda ejecutarse cerca de velocidad nativa.",
    },
  },
} satisfies Language;
