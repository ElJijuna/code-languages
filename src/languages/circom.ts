import type { Language } from "../types";

export const circom = {
  slug: "circom",
  publishedDate: "2018-01-01",
  extensions: [".circom"],
  author: "iden3",
  website: "https://docs.circom.io",
  paradigms: ["declarative", "constraint-based", "domain-specific"],
  tooling: {
    runtimes: ["circom compiler", "WebAssembly", "C++"],
    packageManagers: ["npm", "Cargo"],
    ecosystems: ["Zero-knowledge proofs", "Ethereum", "zkSNARKs"],
  },
  version: "2.2.3",
  logo: "https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_circom.svg",
  color: "#EA7252",
  i18n: {
    en: {
      name: "Circom",
      description: "A DSL for writing arithmetic circuits used in zero-knowledge proofs.",
      longDescription:
        "Circom is a domain-specific language for defining arithmetic circuits used by zkSNARK proving systems. Its compiler can generate constraint systems together with witness-generation code for C++ or WebAssembly.\n\nIt is common in privacy-preserving protocols, identity systems, blockchain applications, and cryptographic projects that need reusable circuits for zero-knowledge proofs.",
    },
    es: {
      name: "Circom",
      description:
        "Un DSL para escribir circuitos aritmeticos usados en pruebas de conocimiento cero.",
      longDescription:
        "Circom es un lenguaje especifico de dominio para definir circuitos aritmeticos usados por sistemas de prueba zkSNARK. Su compilador puede generar sistemas de restricciones junto con codigo de generacion de testigos para C++ o WebAssembly.\n\nEs comun en protocolos de privacidad, sistemas de identidad, aplicaciones blockchain y proyectos criptograficos que necesitan circuitos reutilizables para pruebas de conocimiento cero.",
    },
    it: {
      name: "Circom",
      description: "Un DSL per scrivere circuiti aritmetici utilizzati in prove a conoscenza zero.",
      longDescription:
        "Circom e un linguaggio specifico per definire circuiti aritmetici utilizzati dai sistemi di prova zkSNARK. Il suo compilatore puo generare sistemi di vincoli insieme al codice di generazione di testimonianze per C++ o WebAssembly.\n\nE comune in protocolli di preservazione della privacy, sistemi di identita, applicazioni blockchain e progetti crittografici che necessitano di circuiti riutilizzabili per prove a conoscenza zero.",
    },
    fr: {
      name: "Circom",
      description:
        "Un DSL pour ecrire des circuits arithmetiques utilises dans les preuves a zero connaissance.",
      longDescription:
        "Circom est un langage specifique a un domaine pour definir des circuits arithmetiques utilises par les systemes de preuve zkSNARK. Son compilateur peut generer des systemes de contraintes ainsi que du code de generation de preuves pour C++ ou WebAssembly.\n\nIl est courant dans les protocoles de preservation de la vie privee, les systemes d'identite, les applications de blockchain et les projets cryptographiques qui ont besoin de circuits reutilisables pour les preuves a zero connaissance.",
    },
  },
} satisfies Language;
