import type { Language } from "../types";

export const git = {
  slug: "git",
  publishedDate: "2005-04-07",
  extensions: [".git", ".gitignore", ".gitattributes", ".gitmodules", ".gitkeep"],
  author: "Linus Torvalds / Junio C Hamano",
  website: "https://git-scm.com",
  paradigms: ["configuration", "version-control", "ignore-patterns"],
  tooling: {
    runtimes: ["Git"],
    ecosystems: ["Version Control", "DevOps", "Source Control"],
  },
  version: "2.54.0",
  logo: "https://cdn.simpleicons.org/git/F05032",
  i18n: {
    en: {
      name: "Git",
      description:
        "Metadata and configuration files used by Git repositories and version-control workflows.",
      longDescription:
        "Git-related files define repository ignore rules, attributes, submodules, local configuration, placeholders, and repository metadata used by Git tooling.\n\nThey are used in software projects to control which files are tracked, how paths are treated, how submodules are linked, and how repository-specific automation or conventions behave.",
    },
    es: {
      name: "Git",
      description:
        "Archivos de metadata y configuracion usados por repositorios Git y flujos de control de versiones.",
      longDescription:
        "Los archivos relacionados con Git definen reglas de ignorado, atributos, submodulos, configuracion local, placeholders y metadata de repositorio usada por herramientas Git.\n\nSe usan en proyectos de software para controlar que archivos se versionan, como se tratan las rutas, como se enlazan submodulos y como se comportan automatizaciones o convenciones especificas del repositorio.",
    },
  },
} satisfies Language;
