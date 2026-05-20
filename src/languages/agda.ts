import type { Language } from "../types";

export const agda = {
  slug: "agda",
  publishedDate: "2007-01-01",
  extensions: [".agda", ".lagda", ".lagda.md", ".lagda.rst", ".lagda.tex"],
  author: "Ulf Norell / Chalmers University of Technology",
  website: "https://wiki.portal.chalmers.se/agda/",
  paradigms: ["functional", "dependently typed", "total", "proof-oriented"],
  tooling: {
    runtimes: ["GHC", "JavaScript"],
    packageManagers: ["Cabal", "Stack"],
    ecosystems: ["Haskell", "Formal methods", "Proof assistants"],
  },
  version: "2.8.0",
  logo: "https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_agda.svg",
  i18n: {
    en: {
      name: "Agda",
      description: "A dependently typed functional language and proof assistant.",
      longDescription:
        "Agda is a dependently typed functional programming language and interactive proof assistant. It supports inductive families, pattern matching, modules, mixfix operators, Unicode syntax, and a type system expressive enough to encode mathematical proofs as programs.\n\nIt is used in programming language research, constructive mathematics, certified algorithms, and education where precise specifications and machine-checked proofs matter as much as executable code.",
    },
    es: {
      name: "Agda",
      description: "Un lenguaje funcional con tipos dependientes y asistente de pruebas.",
      longDescription:
        "Agda es un lenguaje de programacion funcional con tipos dependientes y un asistente interactivo de pruebas. Soporta familias inductivas, pattern matching, modulos, operadores mixfix, sintaxis Unicode y un sistema de tipos expresivo para codificar pruebas matematicas como programas.\n\nSe usa en investigacion de lenguajes, matematica constructiva, algoritmos certificados y educacion cuando las especificaciones precisas y las pruebas verificadas por maquina importan tanto como el codigo ejecutable.",
    },
  },
} satisfies Language;
