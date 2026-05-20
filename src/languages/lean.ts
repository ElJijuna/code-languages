import type { Language } from "../types";

export const lean = {
  slug: "lean",
  publishedDate: "2013-06-16",
  extensions: [".lean"],
  author: "Leonardo de Moura / Microsoft Research",
  website: "https://lean-lang.org",
  paradigms: ["functional", "dependently typed", "proof-oriented", "metaprogramming"],
  tooling: {
    runtimes: ["Lean"],
    packageManagers: ["Lake", "elan"],
    ecosystems: ["Formal methods", "Mathematics", "Proof assistants"],
  },
  version: "4.29.1",
  logo: "https://cdn.simpleicons.org/leanpub/262425",
  i18n: {
    en: {
      name: "Lean",
      description:
        "A theorem prover and functional language for formalized mathematics and software.",
      longDescription:
        "Lean is a theorem prover and dependently typed functional programming language. Lean 4 includes an efficient compiler, extensible syntax, metaprogramming facilities, tactics, and tooling for large formalization projects.\n\nIt is used in formalized mathematics, program verification, theorem proving research, educational games, and software projects where proofs and executable definitions can evolve together.",
    },
    es: {
      name: "Lean",
      description:
        "Un demostrador de teoremas y lenguaje funcional para matematica y software formalizados.",
      longDescription:
        "Lean es un demostrador de teoremas y lenguaje funcional con tipos dependientes. Lean 4 incluye un compilador eficiente, sintaxis extensible, metaprogramacion, tacticas y herramientas para grandes proyectos de formalizacion.\n\nSe usa en matematica formalizada, verificacion de programas, investigacion en demostracion de teoremas, juegos educativos y proyectos donde pruebas y definiciones ejecutables pueden evolucionar juntas.",
    },
  },
} satisfies Language;
