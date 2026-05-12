import type { Language } from "../types";

export const abap = {
  slug: "abap",
  publishedDate: "1983-01-01",
  extensions: [".abap"],
  author: "SAP SE",
  website: "https://pages.community.sap.com/topics/abap",
  paradigms: ["object-oriented", "procedural", "imperative", "event-driven", "database-oriented"],
  tooling: {
    runtimes: ["ABAP Platform", "SAP NetWeaver AS ABAP", "SAP BTP ABAP Environment"],
    ecosystems: ["SAP S/4HANA", "SAP BTP", "Enterprise Applications"],
  },
  version: "ABAP Platform 2025 FPS01",
  logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  i18n: {
    en: {
      name: "ABAP",
      description:
        "SAP's enterprise application programming language for business systems and extensions.",
      longDescription:
        "ABAP is SAP's programming language for implementing business logic, reports, data models, services, enhancements, and extensions in ABAP-based SAP systems.\n\nIt is widely used across SAP S/4HANA, SAP BTP ABAP Environment, classic SAP ERP systems, custom enterprise applications, RAP services, CDS models, batch processing, and integration workflows.",
    },
    es: {
      name: "ABAP",
      description: "El lenguaje empresarial de SAP para sistemas de negocio y extensiones.",
      longDescription:
        "ABAP es el lenguaje de programacion de SAP para implementar logica de negocio, reportes, modelos de datos, servicios, mejoras y extensiones en sistemas SAP basados en ABAP.\n\nSe usa ampliamente en SAP S/4HANA, SAP BTP ABAP Environment, sistemas SAP ERP clasicos, aplicaciones empresariales personalizadas, servicios RAP, modelos CDS, procesamiento batch y flujos de integracion.",
    },
  },
} satisfies Language;
