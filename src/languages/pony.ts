import type { Language } from "../types";

export const pony = {
  slug: "pony",
  publishedDate: "2015-04-29",
  extensions: [".pony"],
  author: "Sylvan Clebsch / Pony contributors",
  website: "https://www.ponylang.io",
  paradigms: ["actor-model", "object-oriented", "capability-secure", "concurrent"],
  tooling: {
    runtimes: ["Pony runtime"],
    packageManagers: ["ponyup", "corral"],
    ecosystems: ["Actors", "Native", "Distributed Systems"],
  },
  version: "0.61.1",
  logo: "https://avatars.githubusercontent.com/u/14593805?v=4",
  i18n: {
    en: {
      name: "Pony",
      description: "An actor language with reference capabilities and data-race safety.",
      longDescription:
        "Pony combines actors, object capabilities, static typing, and reference capabilities to make concurrent native programs explicit about aliasing and mutation. The language runtime schedules isolated actors that communicate by messages.\n\nIt is used for concurrent services, native experiments, actor systems, and programs that want compile-time guarantees around data races.",
    },
    es: {
      name: "Pony",
      description:
        "Un lenguaje de actores con capacidades de referencia y seguridad ante data races.",
      longDescription:
        "Pony combina actores, object capabilities, tipado estatico y capacidades de referencia para que programas nativos concurrentes sean explicitos sobre aliasing y mutacion. El runtime agenda actores aislados que se comunican por mensajes.\n\nSe usa en servicios concurrentes, experimentos nativos, sistemas de actores y programas que buscan garantias de compilacion frente a data races.",
    },
  },
} satisfies Language;
