import type { Language } from "../types";

export const coldfusion = {
  slug: "coldfusion",
  publishedDate: "1995-07-01",
  extensions: [".cfm", ".cfml", ".cfc"],
  author: "Allaire / Adobe",
  website: "https://www.adobe.com/products/coldfusion-family.html",
  paradigms: ["tag-based", "object-oriented", "scripting", "web"],
  tooling: {
    runtimes: ["Adobe ColdFusion", "Lucee"],
    packageManagers: ["CommandBox"],
    ecosystems: ["Web", "JVM", "Enterprise"],
  },
  version: "ColdFusion 2025",
  logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_cf.svg",
  i18n: {
    en: {
      name: "ColdFusion",
      description:
        "A JVM-based web language and platform using CFML tags, scripts, and components.",
      longDescription:
        "ColdFusion uses CFML to build server-rendered web applications, APIs, scheduled jobs, and enterprise integrations with a mix of tag-based markup and script syntax.\n\nIts ecosystem includes Adobe ColdFusion, Lucee, CFML components, database access, templating, mail, file processing, and tooling for long-lived business applications.",
    },
    es: {
      name: "ColdFusion",
      description:
        "Un lenguaje y plataforma web sobre JVM que usa etiquetas, scripts y componentes CFML.",
      longDescription:
        "ColdFusion usa CFML para crear aplicaciones web renderizadas en servidor, APIs, tareas programadas e integraciones empresariales con una mezcla de marcado basado en etiquetas y sintaxis de script.\n\nSu ecosistema incluye Adobe ColdFusion, Lucee, componentes CFML, acceso a bases de datos, plantillas, correo, procesamiento de archivos y herramientas para aplicaciones de negocio de larga vida.",
    },
  },
} satisfies Language;
