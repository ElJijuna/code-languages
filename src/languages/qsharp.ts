import type { Language } from "../types";

export const qsharp = {
  slug: "qsharp",
  publishedDate: "2017-12-11",
  extensions: [".qs"],
  author: "Microsoft",
  website: "https://learn.microsoft.com/azure/quantum/qsharp-overview",
  paradigms: ["quantum", "domain-specific", "functional", "imperative"],
  tooling: {
    runtimes: ["Azure Quantum", "Q# compiler"],
    packageManagers: ["NuGet", "Python"],
    ecosystems: ["Quantum Computing", "Azure"],
  },
  version: "Q# 1.0",
  logo: "https://github.com/microsoft.png",
  color: "#0078D4",
  i18n: {
    en: {
      name: "Q#",
      description: "Microsoft's language for expressing quantum programs and operations.",
      longDescription:
        "Q# is a quantum programming language for declaring operations, functions, qubit use, measurement, adjoints, controlled operations, and classical control around quantum routines. It is designed to model quantum algorithms separately from hardware details.\n\nIt is used for quantum algorithm development, simulation, teaching, Azure Quantum workflows, and hybrid experiments that combine classical and quantum code.",
    },
    es: {
      name: "Q#",
      description: "El lenguaje de Microsoft para expresar programas y operaciones cuanticas.",
      longDescription:
        "Q# es un lenguaje de programacion cuantica para declarar operaciones, funciones, uso de qubits, mediciones, adjoints, operaciones controladas y control clasico alrededor de rutinas cuanticas. Modela algoritmos cuanticos separados de detalles de hardware.\n\nSe usa en desarrollo de algoritmos cuanticos, simulacion, ensenanza, flujos de Azure Quantum y experimentos hibridos que combinan codigo clasico y cuantico.",
    },
    it: {
      name: "Q#",
      description: "Q#",
      longDescription:
        "Q# e un linguaggio di programmazione quantistica per dichiarare operazioni, funzioni, l'uso di qubit, misurazioni, adjoints, operazioni controllate e controllo classico attorno a routine quantistiche. E progettato per modellare algoritmi quantistici separatamente dai dettagli hardware.\n\nViene utilizzato per lo sviluppo, la simulazione, l'insegnamento, i flussi di lavoro di Azure Quantum e esperimenti ibridi che combinano codice classico e quantistico.",
    },
    fr: {
      name: "Q#",
      description: "Q#",
      longDescription:
        "Q# est un langage de programmation quantique pour declarer des operations, des fonctions, l'utilisation de qubits, des mesures, des adjoints, des operations controlees et le controle classique autour de routines quantiques. Il est concu pour modeliser les algorithmes quantiques separement des details materiels.\n\nIl est utilise pour le developpement, la simulation, l'enseignement, les workflows Azure Quantum et les experiences hybrides combinant du code classique et quantique.",
    },
    de: {
      name: "Q#",
      description:
        "Die Programmiersprache von Microsoft zur Definition von Quantenprogrammen und -operationen.",
      longDescription:
        "Q# ist eine Quantenprogrammiersprache zur Definition von Operationen, Funktionen, der Verwendung von Qubits, Messungen, Adjoints, kontrollierten Operationen und klassischer Steuerung f\u00fcr Quantenroutinen. Sie ist darauf ausgelegt, Quantenalgorithmen von Hardware-Details zu trennen.\n\nSie wird f\u00fcr die Entwicklung, Simulation, Lehre, Azure Quantum Workflows und hybride Experimente verwendet, die klassischen und quantenbezogenen Code kombinieren.",
    },
    pt: {
      name: "Q#",
      description:
        "Linguagem da Microsoft para expressar programas e opera\u00e7\u00f5es qu\u00e2nticas.",
      longDescription:
        "O Q# \u00e9 uma linguagem de programa\u00e7\u00e3o qu\u00e2ntica para declarar opera\u00e7\u00f5es, fun\u00e7\u00f5es, uso de qubits, medi\u00e7\u00e3o, adjointes, opera\u00e7\u00f5es controladas e controle cl\u00e1ssico em torno de rotinas qu\u00e2nticas. \u00c9 projetada para modelar algoritmos qu\u00e2nticos separadamente dos detalhes de hardware.\n\n\u00c9 usada para desenvolvimento, simula\u00e7\u00e3o, ensino, fluxos de trabalho do Azure Quantum e experimentos h\u00edbridos que combinam c\u00f3digo cl\u00e1ssico e qu\u00e2ntico.",
    },
  },
} satisfies Language;
