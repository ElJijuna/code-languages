import type { Language } from "../types";

export const makefile = {
  slug: "makefile",
  publishedDate: "1976-01-01",
  extensions: ["Makefile", "makefile", "GNUmakefile", ".mk", ".mak"],
  author: "Stuart Feldman / GNU Project",
  website: "https://www.gnu.org/software/make/",
  paradigms: ["build-automation", "declarative", "imperative", "rule-based"],
  tooling: {
    runtimes: ["GNU Make", "BSD make", "POSIX make"],
    ecosystems: ["Unix", "Linux", "C", "C++", "Embedded Systems"],
  },
  version: "4.4.1",
  logo: "https://upload.wikimedia.org/wikipedia/commons/7/71/Heckert_gnu.small.png",
  i18n: {
    en: {
      name: "Makefile",
      description:
        "A rule-based build automation format used by make tools to run reproducible tasks.",
      longDescription:
        "Makefiles describe targets, prerequisites, variables, and shell recipes that make tools use to decide what work must be rebuilt and which commands should run.\n\nThey are widely used for compiling C and C++ projects, driving Unix build pipelines, packaging software, running development tasks, generating artifacts, and coordinating commands across many programming language ecosystems.",
    },
    es: {
      name: "Makefile",
      description:
        "Un formato de automatizacion de builds basado en reglas usado por herramientas make.",
      longDescription:
        "Los Makefiles describen targets, prerequisitos, variables y recetas de shell que las herramientas make usan para decidir que trabajo debe reconstruirse y que comandos deben ejecutarse.\n\nSe usan ampliamente para compilar proyectos C y C++, manejar pipelines de build en Unix, empaquetar software, ejecutar tareas de desarrollo, generar artefactos y coordinar comandos en muchos ecosistemas de lenguajes.",
    },
  },
} satisfies Language;
