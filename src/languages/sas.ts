import type { Language } from "../types";

export const sas = {
  slug: "sas",
  publishedDate: "1976-01-01",
  extensions: [".sas"],
  author: "SAS Institute",
  website: "https://www.sas.com",
  paradigms: ["data-step", "procedural", "statistical", "domain-specific"],
  tooling: {
    runtimes: ["SAS 9", "SAS Viya"],
    ecosystems: ["Analytics", "Statistics", "Enterprise Data"],
  },
  version: "SAS 9.4",
  logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/SAS_logo_horiz.svg",
  color: "#1E77B3",
  i18n: {
    en: {
      name: "SAS",
      description: "A language and system for statistical analysis and data processing.",
      longDescription:
        "SAS programs combine DATA steps, procedures, macros, formats, libraries, and analytics-oriented statements to transform and analyze data. The language is tightly linked to the SAS platform and its statistical tooling.\n\nIt is used in analytics, regulated reporting, clinical workflows, data preparation, forecasting, and enterprise statistical systems.",
    },
    es: {
      name: "SAS",
      description: "Un lenguaje y sistema para analisis estadistico y procesamiento de datos.",
      longDescription:
        "Los programas SAS combinan DATA steps, procedimientos, macros, formatos, libraries y sentencias orientadas a analitica para transformar y analizar datos. El lenguaje esta ligado a la plataforma SAS y su tooling estadistico.\n\nSe usa en analitica, reportes regulados, flujos clinicos, preparacion de datos, pronosticos y sistemas estadisticos empresariales.",
    },
  },
} satisfies Language;
