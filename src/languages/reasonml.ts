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
  color: "#DD4B39",
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
    it: {
      name: "ReasonML",
      description:
        "Una sintassi simile a JavaScript per OCaml e la programmazione funzionale tipata.",
      longDescription:
        "ReasonML e un livello di sintassi per OCaml che presenta parentesi e punteggiatura familiari, mantenendo al contempo i moduli, il pattern matching, l'inferenza dei tipi e le fondamenta funzionali di OCaml. E stato utilizzato con OCaml nativo e flussi di lavoro di compilazione in JavaScript.\n\nE utilizzato in progetti adiacenti a OCaml, codice UI tipato, librerie e codebase che preferiscono la sintassi Reason rispetto alla sintassi OCaml tradizionale.",
    },
    fr: {
      name: "ReasonML",
      description:
        "Une syntaxe semblable a JavaScript pour OCaml et la programmation fonctionnelle typee.",
      longDescription:
        "ReasonML est une couche de syntaxe pour OCaml qui presente des accolades et une ponctuation familieres tout en conservant les modules, la correspondance de motifs, l'inference de type et les fondements fonctionnels d'OCaml. Il a ete utilise avec OCaml natif et des flux de travail de compilation vers JavaScript.\n\nIl est utilise dans des projets lies a OCaml, du code d'interface utilisateur type, des bibliotheques et des bases de code qui preferent la syntaxe Reason a la syntaxe OCaml traditionnelle.",
    },
  },
} satisfies Language;
