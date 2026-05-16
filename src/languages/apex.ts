import type { Language } from "../types";

export const apex = {
  slug: "apex",
  publishedDate: "2007-01-01",
  extensions: [".cls", ".trigger"],
  author: "Salesforce",
  website: "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/",
  paradigms: ["object-oriented", "cloud", "database-oriented", "event-driven"],
  tooling: {
    runtimes: ["Salesforce Platform"],
    packageManagers: ["Salesforce CLI", "Unlocked Packages", "Managed Packages"],
    ecosystems: ["Salesforce", "CRM", "Enterprise Applications", "Platform Automation"],
  },
  version: "API 66.0",
  logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Salesforce.com_logo.svg",
  i18n: {
    en: {
      name: "Apex",
      description:
        "Salesforce's strongly typed, object-oriented language for platform business logic.",
      longDescription:
        "Apex is a strongly typed, object-oriented programming language that runs on the Salesforce Platform. It combines Java-like syntax with platform-specific database operations, triggers, asynchronous jobs, governor limits, sharing rules, and integrations with Salesforce metadata and APIs.\n\nIt is used for CRM customizations, business automation, custom controllers, data validation, integrations, batch processing, platform events, and enterprise applications built inside Salesforce.",
    },
    es: {
      name: "Apex",
      description:
        "El lenguaje fuertemente tipado y orientado a objetos de Salesforce para logica de negocio en la plataforma.",
      longDescription:
        "Apex es un lenguaje de programacion fuertemente tipado y orientado a objetos que corre en Salesforce Platform. Combina sintaxis similar a Java con operaciones de base de datos propias de la plataforma, triggers, trabajos asincronos, governor limits, reglas de sharing e integraciones con metadata y APIs de Salesforce.\n\nSe usa para personalizaciones de CRM, automatizacion de negocio, controladores personalizados, validacion de datos, integraciones, procesamiento batch, platform events y aplicaciones empresariales construidas dentro de Salesforce.",
    },
  },
} satisfies Language;
