import type { Language } from "../types";

export const chapel = {
  slug: "chapel",
  publishedDate: "2009-04-01",
  extensions: [".chpl"],
  author: "Cray Inc. / Hewlett Packard Enterprise",
  website: "https://chapel-lang.org",
  paradigms: ["parallel", "imperative", "object-oriented", "generic"],
  tooling: {
    runtimes: ["Chapel runtime"],
    packageManagers: ["Mason"],
    ecosystems: ["High-performance computing", "Parallel computing"],
  },
  version: "2.6.0",
  logo: "https://chapel-lang.org/images/chapel-logo.png",
  color: "#8C1AFF",
  i18n: {
    en: {
      name: "Chapel",
      description: "A productive parallel programming language for scalable systems.",
      longDescription:
        "Chapel is a parallel programming language created to make high-performance and distributed computing more approachable. It provides domains, arrays, task parallelism, data parallelism, locality control, and abstractions for writing scalable programs without dropping into low-level message passing everywhere.\n\nIt is used for research, numerical computing, data analytics, simulations, and high-performance applications that need to express parallel algorithms clearly across laptops, clusters, and supercomputers.",
    },
    es: {
      name: "Chapel",
      description: "Un lenguaje de programacion paralela productivo para sistemas escalables.",
      longDescription:
        "Chapel es un lenguaje de programacion paralela creado para hacer mas accesible la computacion de alto rendimiento y distribuida. Ofrece dominios, arreglos, paralelismo de tareas, paralelismo de datos, control de localidad y abstracciones para escribir programas escalables sin depender siempre de paso de mensajes de bajo nivel.\n\nSe usa en investigacion, computacion numerica, analitica de datos, simulaciones y aplicaciones de alto rendimiento que necesitan expresar algoritmos paralelos con claridad en laptops, clusters y supercomputadoras.",
    },
  },
} satisfies Language;
