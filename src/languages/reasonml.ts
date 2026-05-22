import type { Language } from "../types";

export const reasonml = {
  slug: "reasonml",
  publishedDate: "2016-05-13",
  extensions: [".re", ".rei"],
  author: "Jordan Walke / Reason contributors",
  website: "https://reasonml.github.io",
  paradigms: ["functional", "statically typed", "multi-paradigm"],
  tooling: {
    runtimes: ["OCaml", "JavaScript"],
    packageManagers: ["opam", "npm"],
    ecosystems: ["OCaml", "JavaScript", "Web"],
  },
  version: "3.13.0",
  logo: "https://cdn.simpleicons.org/reason/DD4B39",
  i18n: {
    en: {
      name: "ReasonML",
      description: "A JavaScript-like syntax for OCaml and typed functional programming.",
      longDescription:
        "ReasonML is a syntax layer for OCaml that presents familiar braces and punctuation while retaining OCaml's modules, pattern matching, type inference, and functional foundations. It has been used with native OCaml and JavaScript compilation workflows.\n\nIt is used in OCaml-adjacent projects, typed UI code, libraries, and codebases that prefer Reason syntax over traditional OCaml syntax.",
    },
    es: {
      name: "ReasonML",
      description: "Una sintaxis cercana a JavaScript para OCaml y programacion funcional tipada.",
      longDescription:
        "ReasonML es una capa de sintaxis para OCaml que presenta llaves y puntuacion familiares conservando modulos, pattern matching, inferencia de tipos y bases funcionales de OCaml. Se ha usado con flujos nativos y de compilacion a JavaScript.\n\nSe usa en proyectos cercanos a OCaml, UI tipada, bibliotecas y codebases que prefieren la sintaxis Reason frente a la sintaxis tradicional de OCaml.",
    },
  },
} satisfies Language;
