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
  color: "#315665",
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
    it: {
      name: "Agda",
      description: "Un linguaggio funzionale e assistente di dimostrazione di tipo dipendente.",
      longDescription:
        "Agda e un linguaggio di programmazione funzionale di tipo dipendente e un assistente interattivo di dimostrazione. Supporta famiglie induttive, corrispondenza di pattern, moduli, operatori mixfix, sintassi Unicode e un sistema di tipi espressivo sufficiente per codificare dimostrazioni matematiche come programmi.\n\nE utilizzato nella ricerca di linguaggi di programmazione, matematica costruttiva, algoritmi certificati e nell'istruzione, dove specifiche precise e dimostrazioni verificate sono importanti tanto quanto il codice eseguibile.",
    },
    fr: {
      name: "Agda",
      description: "Un langage fonctionnel et assistant de preuve de type dependant.",
      longDescription:
        "Agda est un langage de programmation fonctionnel de type dependant et un assistant de preuve interactif. Il prend en charge les familles inductives, la correspondance de motifs, les modules, les operateurs mixfix, la syntaxe Unicode et un systeme de types suffisamment expressif pour encoder des preuves mathematiques sous forme de programmes.\n\nIl est utilise dans la recherche sur les langages de programmation, la mathematique constructive, les algorithmes certifies et l'education, ou des specifications precises et des preuves verifiees par machine comptent autant que le code executable.",
    },
    de: {
      name: "Agda",
      description: "Abh\u00e4ngig typisierte funktionale Sprache und Beweisf\u00fchrungstool.",
      longDescription:
        "Agda ist eine abh\u00e4ngig typisierte funktionale Programmiersprache und interaktives Beweisf\u00fchrungstool. Sie unterst\u00fctzt induktive Familien, Mustervergleich, Module, Mixfix-Operatoren, Unicode-Syntax und ein Typsystem, das ausdrucksstark genug ist, um mathematische Beweise als Programme zu kodieren.\n\nEs wird in der Forschung f\u00fcr Programmiersprachen, konstruktiver Mathematik, zertifizierten Algorithmen und in der Bildung eingesetzt, wo pr\u00e4zise Spezifikationen und maschinell \u00fcberpr\u00fcfte Beweise genauso wichtig sind wie ausf\u00fchrbarer Code.",
    },
    pt: {
      name: "Agda",
      description: "Linguagem funcional e assistente de provas de tipo dependente.",
      longDescription:
        "Agda \u00e9 uma linguagem de programa\u00e7\u00e3o funcional de tipo dependente e assistente de provas interativa. Suporta fam\u00edlias indutivas, correspond\u00eancia de padr\u00f5es, m\u00f3dulos, operadores mixfix, sintaxe Unicode e um sistema de tipos expressivo o suficiente para codificar provas matem\u00e1ticas como programas.\n\n\u00c9 usada em pesquisa de linguagens de programa\u00e7\u00e3o, matem\u00e1tica construtiva, algoritmos certificados e educa\u00e7\u00e3o, onde especifica\u00e7\u00f5es precisas e provas verificadas por m\u00e1quina s\u00e3o t\u00e3o importantes quanto o c\u00f3digo execut\u00e1vel.",
    },
  },
} satisfies Language;
