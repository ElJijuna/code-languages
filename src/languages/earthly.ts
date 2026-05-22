import type { Language } from "../types";

export const earthly = {
  slug: "earthly",
  publishedDate: "2020-04-15",
  extensions: ["Earthfile"],
  author: "Earthly Technologies",
  website: "https://earthly.dev",
  paradigms: ["declarative", "build automation", "container-based"],
  tooling: {
    runtimes: ["Earthly", "BuildKit", "Docker"],
    packageManagers: ["Docker"],
    ecosystems: ["CI/CD", "Containers", "DevOps"],
  },
  version: "0.8.16",
  logo: "https://avatars.githubusercontent.com/u/63060917?v=4",
  color: "#2D7D46",
  i18n: {
    en: {
      name: "Earthly",
      description: "A container-oriented build language for repeatable CI/CD pipelines.",
      longDescription:
        "Earthly is a build automation language and tool centered on Earthfiles. Its syntax combines ideas from Dockerfiles and Makefiles to define repeatable builds, targets, artifacts, images, and CI-friendly workflows.\n\nIt is used by teams that want local and CI builds to behave consistently, especially in container-heavy projects where caching, reproducibility, and readable build steps matter.",
    },
    es: {
      name: "Earthly",
      description:
        "Un lenguaje de builds orientado a contenedores para pipelines CI/CD repetibles.",
      longDescription:
        "Earthly es un lenguaje y herramienta de automatizacion de builds centrado en Earthfiles. Su sintaxis combina ideas de Dockerfiles y Makefiles para definir builds repetibles, targets, artefactos, imagenes y flujos adecuados para CI.\n\nLo usan equipos que quieren que los builds locales y de CI se comporten de forma consistente, especialmente en proyectos con muchos contenedores donde importan cache, reproducibilidad y pasos de build legibles.",
    },
  },
} satisfies Language;
