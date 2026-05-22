import type { Language } from "../types";

export const tlaPlus = {
  slug: "tla-plus",
  publishedDate: "1999-01-01",
  extensions: [".tla"],
  author: "Leslie Lamport",
  website: "https://lamport.azurewebsites.net/tla/tla.html",
  paradigms: ["specification", "formal-methods", "temporal-logic", "declarative"],
  tooling: {
    runtimes: ["TLC", "TLA+ Toolbox", "Apalache"],
    ecosystems: ["Formal Methods", "Distributed Systems", "Verification"],
  },
  version: "TLA+ 2",
  logo: "https://avatars.githubusercontent.com/u/315978?v=4",
  i18n: {
    en: {
      name: "TLA+",
      description: "A formal specification language for state machines and temporal properties.",
      longDescription:
        "TLA+ describes systems as mathematical state transitions with actions, invariants, temporal formulas, modules, and refinement-oriented specifications. Tooling such as TLC explores behaviors to check models.\n\nIt is used to reason about distributed algorithms, protocols, concurrency, safety properties, design reviews, and systems where a precise specification catches failures early.",
    },
    es: {
      name: "TLA+",
      description: "Un lenguaje de especificacion formal para estados y propiedades temporales.",
      longDescription:
        "TLA+ describe sistemas como transiciones matematicas de estado con acciones, invariantes, formulas temporales, modulos y especificaciones orientadas a refinamiento. Herramientas como TLC exploran comportamientos para revisar modelos.\n\nSe usa para razonar sobre algoritmos distribuidos, protocolos, concurrencia, propiedades de seguridad, revisiones de diseno y sistemas donde una especificacion precisa detecta fallos temprano.",
    },
  },
} satisfies Language;
