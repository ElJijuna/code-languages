import type { Language } from "../types";

export const ziggy = {
  slug: "ziggy",
  publishedDate: "2023-10-02",
  extensions: [".ziggy", ".ziggy-schema"],
  author: "Loris Cro",
  website: "https://ziggy-lang.io",
  paradigms: ["data-notation", "schema", "declarative", "configuration"],
  tooling: {
    runtimes: ["Ziggy CLI"],
    ecosystems: ["Configuration", "Data Formats", "Zig"],
  },
  version: "0.1.0",
  logo: "https://avatars.githubusercontent.com/u/1642052?v=4",
  color: "#F7A41D",
  i18n: {
    en: {
      name: "Ziggy",
      description: "A data notation and schema language for configuration-style documents.",
      longDescription:
        "Ziggy is a data language for readable structured documents with a companion schema form for describing expected shapes. It targets configuration and data interchange workflows with tooling around Zig ecosystems.\n\nIt is used for configuration files, schema-checked data documents, tooling experiments, and projects that want a compact typed data notation.",
    },
    es: {
      name: "Ziggy",
      description: "Una notacion de datos y schemas para documentos de configuracion.",
      longDescription:
        "Ziggy es un lenguaje de datos para documentos estructurados legibles con una forma de schema complementaria para describir shapes esperados. Apunta a configuracion e intercambio de datos con tooling cercano al ecosistema Zig.\n\nSe usa en archivos de configuracion, documentos de datos validados por schemas, experimentos de tooling y proyectos que buscan una notacion de datos compacta y tipada.",
    },
    it: {
      name: "Ziggy",
      description: "Un linguaggio di notazione e schema per documenti di stile di configurazione.",
      longDescription:
        "Ziggy e un linguaggio di dati per documenti strutturati leggibili, con una forma di schema associata per descrivere le forme previste. Si rivolge a flussi di lavoro di configurazione e scambio di dati, con strumenti attorno all'ecosistema Zig.\n\nViene utilizzato per file di configurazione, documenti di dati con controllo dello schema, esperimenti di strumenti e progetti che desiderano una notazione di dati tipizzata compatta.",
    },
    fr: {
      name: "Ziggy",
      description: "Un langage de notation et de schema pour les documents de style configuration.",
      longDescription:
        "Ziggy est un langage de donnees pour les documents structures lisibles, avec une forme de schema associee pour decrire les formes attendues. Il cible les flux de travail de configuration et d'echange de donnees, avec des outils autour des ecosystemes Zig.\n\nIl est utilise pour les fichiers de configuration, les documents de donnees verifies par schema, les experiences d'outils et les projets qui souhaitent une notation de donnees typee compacte.",
    },
    de: {
      name: "Ziggy",
      description: "Eine Datennotation und Schemalingua f\u00fcr Konfigurations-Stil-Dokumente.",
      longDescription:
        "Ziggy ist eine Daten-Lingua f\u00fcr lesbare, strukturierte Dokumente mit einer zugeh\u00f6rigen Schemabindung zur Beschreibung erwarteter Formen. Es richtet sich an Konfigurations- und Daten-Interchange-Workflows mit Werkzeugen im Zig-\u00d6kosystem.\n\nEs wird f\u00fcr Konfigurationsdateien, schemacheckte Daten-Dokumente, Werkzeug-Experimente und Projekte verwendet, die eine kompakte, typisierte Datennotation w\u00fcnschen.",
    },
    pt: {
      name: "Ziggy",
      description:
        "Uma linguagem de nota\u00e7\u00e3o e esquema para documentos de estilo de configura\u00e7\u00e3o.",
      longDescription:
        "Ziggy \u00e9 uma linguagem de dados para documentos estruturados leg\u00edveis, com uma forma de esquema associada para descrever formas esperadas. \u00c9 projetada para fluxos de trabalho de configura\u00e7\u00e3o e troca de dados, com ferramentas em torno dos ecossistemas Zig.\n\n\u00c9 usada para arquivos de configura\u00e7\u00e3o, documentos de dados verificados por esquema, experimentos de ferramentas e projetos que desejam uma nota\u00e7\u00e3o de dados tipada compacta.",
    },
  },
} satisfies Language;
