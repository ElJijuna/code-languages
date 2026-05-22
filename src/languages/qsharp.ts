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
  },
} satisfies Language;
