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
    it: {
      name: "Chapel",
      description: "Un linguaggio di programmazione parallela produttivo per sistemi scalabili.",
      longDescription:
        "Chapel e un linguaggio di programmazione parallela creato per rendere l'informatica ad alte prestazioni e distribuita piu accessibile. Fornisce domini, array, parallelismo di task, parallelismo di dati, controllo della localita e astrazioni per scrivere programmi scalabili senza dover ricorrere costantemente alla comunicazione a basso livello.\n\nViene utilizzato per la ricerca, il calcolo numerico, l'analisi dei dati, le simulazioni e applicazioni ad alte prestazioni che necessitano di esprimere algoritmi paralleli in modo chiaro su laptop, cluster e supercomputer.",
    },
    fr: {
      name: "Chapel",
      description: "Un langage de programmation parallele productif pour les systemes evolutifs.",
      longDescription:
        "Chapel est un langage de programmation parallele cree pour rendre le calcul haute performance et distribue plus accessible. Il fournit des domaines, des tableaux, la parallelisation de taches, la parallelisation de donnees, le controle de la localisation et des abstractions pour ecrire des programmes evolutifs sans avoir recours a un passage de messages de bas niveau partout.\n\nIl est utilise pour la recherche, le calcul numerique, l'analyse de donnees, les simulations et les applications haute performance qui ont besoin d'exprimer clairement les algorithmes paralleles sur les ordinateurs portables, les clusters et les superordinateurs.",
    },
    de: {
      name: "Chapel",
      description: "Eine produktive parallele Programmiersprache f\u00fcr skalierbare Systeme.",
      longDescription:
        "Chapel ist eine parallele Programmiersprache, die entwickelt wurde, um Hochleistungs- und verteilte Computing zug\u00e4nglicher zu machen. Sie bietet Domains, Arrays, Task-Parallelit\u00e4t, Datenparallelit\u00e4t, Lokalit\u00e4tskontrolle und Abstraktionen, um skalierbare Programme zu schreiben, ohne st\u00e4ndig auf Low-Level-Messaging zur\u00fcckgreifen zu m\u00fcssen.\n\nSie wird f\u00fcr Forschung, numerische Berechnungen, Datenanalyse, Simulationen und Hochleistungsanwendungen verwendet, die parallele Algorithmen klar ausdr\u00fccken m\u00fcssen, auf Laptops, Clustern und Supercomputern.",
    },
    pt: {
      name: "Chapel",
      description:
        "Linguagem de programa\u00e7\u00e3o paralela produtiva para sistemas escal\u00e1veis.",
      longDescription:
        "Chapel \u00e9 uma linguagem de programa\u00e7\u00e3o paralela criada para tornar a computa\u00e7\u00e3o de alto desempenho e distribu\u00edda mais acess\u00edvel. Ela oferece dom\u00ednios, arrays, paralelismo de tarefas, paralelismo de dados, controle de localidade e abstra\u00e7\u00f5es para escrever programas escal\u00e1veis sem precisar entrar em detalhes de passagem de mensagens de baixo n\u00edvel em todos os lugares.\n\n\u00c9 usada para pesquisa, computa\u00e7\u00e3o num\u00e9rica, an\u00e1lise de dados, simula\u00e7\u00f5es e aplica\u00e7\u00f5es de alto desempenho que precisam expressar algoritmos paralelos de forma clara em laptops, clusters e supercomputadores.",
    },
  },
} satisfies Language;
