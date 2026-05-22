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
  },
} satisfies Language;
