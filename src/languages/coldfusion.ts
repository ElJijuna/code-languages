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
  color: "#ED225D",
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
    it: {
      name: "ColdFusion",
      description:
        "Un linguaggio e una piattaforma web basati su JVM che utilizzano i tag, gli script e i componenti CFML.",
      longDescription:
        "ColdFusion utilizza CFML per creare applicazioni web, API, attivita pianificate e integrazioni aziendali, utilizzando una combinazione di markup basato su tag e sintassi di script.\n\nIl suo ecosistema include Adobe ColdFusion, Lucee, componenti CFML, accesso al database, template, posta elettronica, elaborazione file e strumenti per applicazioni aziendali a lunga durata.",
    },
    fr: {
      name: "ColdFusion",
      description:
        "Un langage et une plateforme web bases sur JVM utilisant les balises, les scripts et les composants CFML.",
      longDescription:
        "ColdFusion utilise le CFML pour creer des applications web, des API, des taches planifiees et des integrations d'entreprise, en combinant la mise en forme basee sur des balises et la syntaxe de script.\n\nSon ecosysteme comprend Adobe ColdFusion, Lucee, les composants CFML, l'acces aux bases de donnees, le modele, l'envoi de courriels, le traitement de fichiers et des outils pour les applications d'entreprise a long terme.",
    },
  },
} satisfies Language;
