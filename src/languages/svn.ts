import type { Language } from "../types";

export const svn = {
  slug: "svn",
  publishedDate: "2000-10-20",
  extensions: [".svn", "svnserve.conf"],
  author: "CollabNet / Apache Software Foundation",
  website: "https://subversion.apache.org",
  paradigms: ["configuration", "version-control", "centralized-version-control"],
  tooling: {
    runtimes: ["Apache Subversion", "svnserve", "Apache HTTP Server"],
    ecosystems: ["Version Control", "Source Control", "DevOps", "Enterprise"],
  },
  version: "1.14.5",
  logo: "https://cdn.simpleicons.org/subversion/809CC9",
  i18n: {
    en: {
      name: "SVN",
      description:
        "Metadata and configuration files used by Apache Subversion repositories and clients.",
      longDescription:
        "SVN, Apache Subversion, is a centralized version control system with repository metadata, working-copy directories, ignore properties, server configuration, hooks, branches, tags, and revision history managed through Subversion tooling.\n\nIt is used in legacy and enterprise codebases, centralized source-control workflows, release management, document repositories, and projects that rely on Apache Subversion servers or clients.",
    },
    es: {
      name: "SVN",
      description:
        "Archivos de metadata y configuracion usados por repositorios y clientes Apache Subversion.",
      longDescription:
        "SVN, Apache Subversion, es un sistema de control de versiones centralizado con metadata de repositorio, directorios de working copy, propiedades de ignore, configuracion de servidor, hooks, branches, tags e historial de revisiones gestionados mediante herramientas Subversion.\n\nSe usa en codebases legacy y empresariales, flujos centralizados de control de codigo, gestion de releases, repositorios de documentos y proyectos que dependen de servidores o clientes Apache Subversion.",
    },
  },
} satisfies Language;
