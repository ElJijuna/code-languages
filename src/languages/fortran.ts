import type { Language } from "../types";

export const fortran = {
  slug: "fortran",
  publishedDate: "1957-10-15",
  extensions: [".f", ".for", ".ftn", ".f90", ".f95", ".f03", ".f08", ".f18", ".f23"],
  author: "John Backus / IBM",
  website: "https://fortran-lang.org",
  paradigms: ["array", "imperative", "procedural", "structured"],
  tooling: {
    runtimes: ["Native", "HPC clusters"],
    packageManagers: ["fpm", "Spack"],
    ecosystems: ["Scientific Computing", "HPC", "Numerical Computing", "Engineering"],
  },
  version: "Fortran 2023",
  logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Fortran_logo.svg",
  color: "#734F96",
  i18n: {
    en: {
      name: "Fortran",
      description:
        "A compiled language for numerical computing, scientific software, and high-performance systems.",
      longDescription:
        "Fortran is one of the earliest high-level programming languages and remains important for numerical computing, scientific simulation, engineering software, and high-performance computing. Modern Fortran includes modules, array programming, generic interfaces, derived types, coarrays, and interoperability with C.\n\nIt is widely used in climate models, physics simulations, computational chemistry, aerospace, numerical libraries, weather forecasting, and long-lived scientific codebases where performance and stable language standards matter.",
    },
    es: {
      name: "Fortran",
      description:
        "Un lenguaje compilado para computacion numerica, software cientifico y sistemas de alto rendimiento.",
      longDescription:
        "Fortran es uno de los primeros lenguajes de programacion de alto nivel y sigue siendo importante para computacion numerica, simulacion cientifica, software de ingenieria y high-performance computing. Fortran moderno incluye modulos, programacion con arrays, interfaces genericas, tipos derivados, coarrays e interoperabilidad con C.\n\nSe usa ampliamente en modelos climaticos, simulaciones fisicas, quimica computacional, aeroespacial, librerias numericas, prediccion meteorologica y codebases cientificas de larga vida donde importan el rendimiento y estandares estables del lenguaje.",
    },
    it: {
      name: "Fortran",
      description:
        "Un linguaggio compilato per il calcolo numerico, il software scientifico e i sistemi ad alte prestazioni.",
      longDescription:
        "Fortran e uno dei primi linguaggi di programmazione di alto livello e rimane importante per il calcolo numerico, la simulazione scientifica, il software di ingegneria e l'informatica ad alte prestazioni. Fortran moderno include moduli, programmazione di array, interfacce generiche, tipi derivati, coarray e interoperabilita con C.\n\nE ampiamente utilizzato in modelli climatici, simulazioni fisiche, chimica computazionale, aerospaziale, librerie numeriche, previsioni meteorologiche e codebase scientifiche a lungo termine dove le prestazioni e gli standard linguistici stabili sono importanti.",
    },
    fr: {
      name: "Fortran",
      description:
        "Un langage compile pour le calcul numerique, les logiciels scientifiques et les systemes haute performance.",
      longDescription:
        "Fortran est l'un des premiers langages de programmation de haut niveau et reste important pour le calcul numerique, la simulation scientifique, les logiciels d'ingenierie et l'informatique haute performance. Le Fortran moderne comprend les modules, la programmation par tableaux, les interfaces generiques, les types derives, les coarrays et l'interoperabilite avec C.\n\nIl est largement utilise dans les modeles climatiques, les simulations de physique, la chimie computationnelle, l'aerospatiale, les bibliotheques numeriques, la prevision meteorologique et les bases de code scientifique a long terme ou les performances et les normes linguistiques stables sont importantes.",
    },
  },
} satisfies Language;
