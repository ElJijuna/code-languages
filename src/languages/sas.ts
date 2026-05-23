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
    it: {
      name: "SAS",
      description: "Un linguaggio e un sistema per l'analisi statistica e l'elaborazione dei dati.",
      longDescription:
        "I programmi SAS combinano passaggi DATA, procedure, macro, formati, librerie e istruzioni orientate all'analisi per trasformare e analizzare i dati. Il linguaggio e strettamente legato alla piattaforma SAS e ai suoi strumenti statistici.\n\nViene utilizzato in analisi, reporting regolamentato, flussi di lavoro clinici, preparazione dei dati, previsione e sistemi statistici aziendali.",
    },
    fr: {
      name: "SAS",
      description:
        "Un langage et un systeme pour l'analyse statistique et le traitement des donnees.",
      longDescription:
        "Les programmes SAS combinent des etapes DATA, des procedures, des macros, des formats, des bibliotheques et des instructions orientees vers l'analyse pour transformer et analyser les donnees. Le langage est etroitement lie a la plateforme SAS et a ses outils statistiques.\n\nIl est utilise dans l'analyse, les rapports reglementaires, les flux de travail cliniques, la preparation des donnees, la prevision et les systemes statistiques d'entreprise.",
    },
    de: {
      name: "SAS",
      description:
        "Eine Sprache und ein System f\u00fcr statistische Analyse und Datenverarbeitung.",
      longDescription:
        "SAS-Programme kombinieren DATA-Schritte, Prozeduren, Makros, Formate, Bibliotheken und analytisch ausgerichtete Anweisungen, um Daten zu transformieren und zu analysieren. Die Sprache ist eng mit der SAS-Plattform und ihren statistischen Werkzeugen verbunden.\n\nSie wird in der Analyse, der regulatorischen Berichterstattung, klinischen Arbeitsabl\u00e4ufen, der Datenvorbereitung, der Prognose und in Unternehmensstatistischen Systemen eingesetzt.",
    },
    pt: {
      name: "SAS",
      description:
        "Uma linguagem e sistema para an\u00e1lise estat\u00edstica e processamento de dados.",
      longDescription:
        "Os programas SAS combinam etapas DATA, procedimentos, macros, formatos, bibliotecas e declara\u00e7\u00f5es orientadas \u00e0 an\u00e1lise para transformar e analisar dados. A linguagem est\u00e1 intimamente ligada \u00e0 plataforma SAS e suas ferramentas estat\u00edsticas.\n\n\u00c9 utilizada em an\u00e1lise, relat\u00f3rios regulamentados, fluxos de trabalho cl\u00ednicos, prepara\u00e7\u00e3o de dados, previs\u00e3o e sistemas estat\u00edsticos empresariais.",
    },
  },
} satisfies Language;
