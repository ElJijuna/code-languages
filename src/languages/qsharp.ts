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
  },
} satisfies Language;
