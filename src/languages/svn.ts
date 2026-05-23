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
  color: "#809CC9",
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
    it: {
      name: "SVN",
      description:
        "File di metadati e di configurazione utilizzati dai repository e dai client di Apache Subversion.",
      longDescription:
        "SVN, Apache Subversion, e un sistema di controllo versione centralizzato con file di metadati del repository, directory di copia di lavoro, proprieta di ignoranza, configurazione del server, hook, rami, tag e cronologia delle revisioni gestite tramite gli strumenti di Subversion.\n\nE utilizzato in codebase e workflow di controllo sorgente centralizzati, gestione delle release, repository di documenti e progetti che si basano su server o client di Apache Subversion.",
    },
    fr: {
      name: "SVN",
      description:
        "Fichiers de metadonnees et de configuration utilises par les referentiels et les clients Apache Subversion.",
      longDescription:
        "SVN, Apache Subversion, est un systeme de controle de version centralise avec des metadonnees de referentiel, des repertoires de copie de travail, des proprietes d'ignoration, la configuration du serveur, des hooks, des branches, des balises et l'historique des revisions geres via les outils Subversion.\n\nIl est utilise dans les bases de code heritees et d'entreprise, les flux de travail de controle de version centralises, la gestion des versions, les referentiels de documents et les projets qui dependent des serveurs ou des clients Apache Subversion.",
    },
    de: {
      name: "SVN",
      description:
        "Metadaten und Konfigurationsdateien f\u00fcr Apache Subversion-Repositories und -Clients.",
      longDescription:
        "SVN, Apache Subversion, ist ein zentrales Versionskontrollsystem mit Repository-Metadaten, Arbeitsverzeichnis-Verzeichnissen, Ignore-Eigenschaften, Serverkonfiguration, Hooks, Branches, Tags und Revision-Historie, die \u00fcber Subversion-Tools verwaltet werden.\n\nEs wird in Legacy- und Enterprise-Codebasen, zentralen Quellcode-Kontroll-Workflows, Release-Management, Dokumenten-Repositories und Projekten verwendet, die Apache Subversion-Server oder -Clients nutzen.",
    },
    pt: {
      name: "SVN",
      description:
        "Metadados e arquivos de configura\u00e7\u00e3o usados por reposit\u00f3rios e clientes do Apache Subversion.",
      longDescription:
        "SVN, Apache Subversion, \u00e9 um sistema de controle de vers\u00e3o centralizado que utiliza metadados de reposit\u00f3rio, diret\u00f3rios de c\u00f3pias de trabalho, propriedades de ignorar, configura\u00e7\u00e3o do servidor, hooks, ramos, tags e hist\u00f3rico de revis\u00f5es, gerenciados atrav\u00e9s das ferramentas Subversion.\n\n\u00c9 usado em c\u00f3digo legado e em sistemas de controle de c\u00f3digo centralizados, fluxos de trabalho de gerenciamento de lan\u00e7amentos, reposit\u00f3rios de documentos e projetos que dependem de servidores ou clientes Apache Subversion.",
    },
  },
} satisfies Language;
