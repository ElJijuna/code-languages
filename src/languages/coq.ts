import type { Language } from "../types";

export const coq = {
  slug: "coq",
  publishedDate: "1989-01-01",
  extensions: [".v"],
  author: "INRIA / Rocq Prover Development Team",
  website: "https://rocq-prover.org",
  paradigms: ["functional", "dependently typed", "proof-oriented", "tactic-based"],
  tooling: {
    runtimes: ["Rocq Prover", "OCaml"],
    packageManagers: ["opam", "Rocq Platform"],
    ecosystems: ["Formal methods", "Proof assistants", "OCaml"],
  },
  version: "9.2.0",
  logo: "https://avatars.githubusercontent.com/u/621198?v=4",
  color: "#C1272D",
  i18n: {
    en: {
      name: "Coq / Rocq",
      description:
        "A proof assistant and dependently typed language for certified mathematics and software.",
      longDescription:
        "Coq, now released under the Rocq Prover name, is an interactive theorem prover and dependently typed language. It lets users write definitions, executable programs, theorems, and machine-checked proofs in one environment.\n\nIt is widely used in formal verification, programming language metatheory, certified compilers, mathematics, cryptography, and projects where correctness arguments need to be checked with high confidence.",
    },
    es: {
      name: "Coq / Rocq",
      description:
        "Un asistente de pruebas y lenguaje con tipos dependientes para software certificado.",
      longDescription:
        "Coq, publicado ahora bajo el nombre Rocq Prover, es un demostrador interactivo de teoremas y un lenguaje con tipos dependientes. Permite escribir definiciones, programas ejecutables, teoremas y pruebas verificadas por maquina en un mismo entorno.\n\nSe usa ampliamente en verificacion formal, metateoria de lenguajes, compiladores certificados, matematica, criptografia y proyectos donde los argumentos de correccion deben comprobarse con alta confianza.",
    },
  },
} satisfies Language;
