import type { Language } from '../types';

export const abap = {
  slug: 'abap',
  publishedDate: '1983-01-01',
  extensions: ['.abap'],
  author: 'SAP SE',
  website: 'https://pages.community.sap.com/topics/abap',
  paradigms: ['object-oriented', 'procedural', 'imperative', 'event-driven', 'database-oriented'],
  tooling: {
    runtimes: ['ABAP Platform', 'SAP NetWeaver AS ABAP', 'SAP BTP ABAP Environment'],
    ecosystems: ['SAP S/4HANA', 'SAP BTP', 'Enterprise Applications'],
  },
  version: 'ABAP Platform 2025 FPS01',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
  color: '#0FAAFF',
  i18n: {
    en: {
      name: 'ABAP',
      description:
        "SAP's enterprise application programming language for business systems and extensions.",
      longDescription:
        "ABAP is SAP's programming language for implementing business logic, reports, data models, services, enhancements, and extensions in ABAP-based SAP systems.\n\nIt is widely used across SAP S/4HANA, SAP BTP ABAP Environment, classic SAP ERP systems, custom enterprise applications, RAP services, CDS models, batch processing, and integration workflows.",
    },
    es: {
      name: 'ABAP',
      description: 'El lenguaje empresarial de SAP para sistemas de negocio y extensiones.',
      longDescription:
        'ABAP es el lenguaje de programacion de SAP para implementar logica de negocio, reportes, modelos de datos, servicios, mejoras y extensiones en sistemas SAP basados en ABAP.\n\nSe usa ampliamente en SAP S/4HANA, SAP BTP ABAP Environment, sistemas SAP ERP clasicos, aplicaciones empresariales personalizadas, servicios RAP, modelos CDS, procesamiento batch y flujos de integracion.',
    },
    it: {
      name: 'ABAP',
      description:
        'Linguaggio di programmazione per applicazioni aziendali di SAP per sistemi e estensioni aziendali.',
      longDescription:
        "ABAP e il linguaggio di programmazione di SAP per l'implementazione della logica aziendale, dei report, dei modelli di dati, dei servizi, delle estensioni e dei sistemi ABAP-based. \n\nE ampiamente utilizzato in SAP S/4HANA, SAP BTP ABAP Environment, sistemi SAP ERP classici, applicazioni aziendali personalizzate, servizi RAP, modelli CDS, elaborazione batch e flussi di lavoro di integrazione.",
    },
    fr: {
      name: 'ABAP',
      description:
        "Langage de programmation d'entreprise de SAP pour les systemes et extensions metier.",
      longDescription:
        "ABAP est le langage de programmation de SAP pour la mise en oeuvre de la logique metier, des rapports, des modeles de donnees, des services, des ameliorations et des extensions dans les systemes SAP bases sur ABAP.\n\nIl est largement utilise dans SAP S/4HANA, l'environnement ABAP de SAP BTP, les systemes SAP ERP classiques, les applications d'entreprise personnalisees, les services RAP, les modeles CDS, le traitement par lots et les flux de travail d'integration.",
    },
    de: {
      name: 'ABAP',
      description: 'ABAP: Programmiersprache für Geschäftssysteme und Erweiterungen bei SAP.',
      longDescription:
        'ABAP ist die Programmiersprache von SAP zur Implementierung von Geschäftslogik, Berichten, Datenmodellen, Services und Erweiterungen in ABAP-basierten SAP-Systemen.\n\nSie wird häufig in SAP S/4HANA, SAP BTP ABAP Environment, klassischen SAP ERP-Systemen, kundenspezifischen Unternehmensanwendungen, RAP-Services, CDS-Modellen, Batch-Verarbeitung und Integrationsworkflows eingesetzt.',
    },
    pt: {
      name: 'ABAP',
      description:
        'Linguagem de programação empresarial da SAP para sistemas e extensões de negócios.',
      longDescription:
        'ABAP é a linguagem de programação da SAP para implementar a lógica de negócios, relatórios, modelos de dados, serviços, melhorias e extensões em sistemas SAP baseados em ABAP.\n\nÉ amplamente utilizada em SAP S/4HANA, SAP BTP ABAP Environment, sistemas SAP ERP clássicos, aplicações empresariais personalizadas, serviços RAP, modelos CDS, processamento em lote e fluxos de integração.',
    },
  },
} satisfies Language;
