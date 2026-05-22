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
  color: "#9558B2",
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
    it: {
      name: "Julia",
      description:
        "Un linguaggio ad alte prestazioni per il calcolo tecnico, la scienza dei dati e il lavoro numerico.",
      longDescription:
        "Julia e un linguaggio di programmazione di alto livello e ad alte prestazioni progettato per il calcolo numerico e scientifico. Combina l'interattivita dinamica con la compilazione just-in-time, la moltiplicazione, la metaprogrammazione e un ecosistema di pacchetti incentrato sul lavoro tecnico.\n\nE ampiamente utilizzato per il calcolo scientifico, l'analisi dei dati, l'apprendimento automatico, l'ottimizzazione, le simulazioni, il calcolo ad alte prestazioni e i flussi di lavoro in cui i team desiderano codice espressivo che possa essere eseguito a velocita vicine a quella nativa.",
    },
    fr: {
      name: "Julia",
      description:
        "Un langage de haut niveau pour le calcul technique, la science des donnees et le travail numerique.",
      longDescription:
        "Julia est un langage de programmation de haut niveau et de haute performance concu pour le calcul et la science numeriques. Il combine l'interactivite dynamique avec la compilation au moment de l'execution, la gestion multiple, la meta-programmation et un ecosysteme de paquets axe sur le travail technique.\n\nIl est largement utilise pour le calcul scientifique, l'analyse de donnees, l'apprentissage automatique, l'optimisation, les simulations, le calcul haute performance et les flux de travail ou les equipes souhaitent un code expressif qui peut s'executer a une vitesse proche de celle du natif.",
    },
  },
} satisfies Language;
