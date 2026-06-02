import type { Language } from '../types';

export const dita = {
  slug: 'dita',
  publishedDate: '2005-05-03',
  extensions: ['.dita', '.ditamap', '.ditaval'],
  author: 'OASIS',
  website: 'https://www.oasis-open.org/standard/dita/',
  paradigms: ['markup', 'structured authoring', 'XML-based', 'documentation'],
  tooling: {
    runtimes: ['DITA Open Toolkit'],
    packageManagers: ['npm', 'Maven'],
    ecosystems: ['Technical writing', 'XML', 'Publishing'],
  },
  version: '1.3',
  logo: 'https://avatars.githubusercontent.com/u/20116735?v=4',
  color: '#3C6E71',
  i18n: {
    en: {
      name: 'DITA',
      description: 'An XML-based architecture for structured technical documentation.',
      longDescription:
        'DITA is the Darwin Information Typing Architecture, an XML-based standard for topic-oriented authoring. It defines topic types, maps, specialization, reuse mechanisms, and publishing-oriented metadata for large documentation sets.\n\nIt is used in technical writing, product documentation, regulated content, localization workflows, and publishing pipelines that need structured reusable topics rather than page-by-page documents.',
    },
    es: {
      name: 'DITA',
      description: 'Una arquitectura basada en XML para documentacion tecnica estructurada.',
      longDescription:
        'DITA es Darwin Information Typing Architecture, un estandar basado en XML para autoria orientada a topicos. Define tipos de topico, mapas, especializacion, mecanismos de reutilizacion y metadatos de publicacion para grandes conjuntos de documentacion.\n\nSe usa en redaccion tecnica, documentacion de productos, contenido regulado, flujos de localizacion y pipelines de publicacion que necesitan topicos estructurados y reutilizables en vez de documentos pagina por pagina.',
    },
    it: {
      name: 'DITA',
      description: "Un'architettura basata su XML per la documentazione tecnica strutturata.",
      longDescription:
        "DITA e l'architettura Darwin Information Typing Architecture, uno standard basato su XML per l'autore del contenuto orientato a temi. Definisce tipi di temi, mappe, meccanismi di specializzazione e riutilizzo, e metadati orientati alla pubblicazione per set di documentazione di grandi dimensioni.\n\nViene utilizzata nella scrittura tecnica, nella documentazione di prodotti, nei contenuti regolamentati, nei flussi di lavoro di localizzazione e nei pipeline di pubblicazione che necessitano di temi strutturati e riutilizzabili piuttosto che documenti pagina per pagina.",
    },
    fr: {
      name: 'DITA',
      description: 'Une architecture basee sur XML pour la documentation technique structuree.',
      longDescription:
        "DITA est l'architecture d'information Darwin, une norme XML basee sur les themes. Elle definit les types de themes, les cartes, les mecanismes de specialisation et de reutilisation, ainsi que les metadonnees orientees vers la publication pour les grands ensembles de documentation.\n\nElle est utilisee dans l'ecriture technique, la documentation de produits, le contenu reglemente, les flux de travail de localisation et les pipelines de publication qui necessitent des themes structures et reutilisables plutot que des documents page par page.",
    },
    de: {
      name: 'DITA',
      description: 'Eine XML-basierte Architektur f\u00fcr strukturierte technische Dokumentation.',
      longDescription:
        'DITA ist die Darwin Information Typing Architecture, ein XML-basierter Standard f\u00fcr themenorientierte Erstellung. Er definiert Topic-Typen, Karten, Spezialisierungs- und Wiederverwendungsm\u00f6glichkeiten sowie Ver\u00f6ffentlichungsmetadaten f\u00fcr gro\u00dfe Dokumentationssets.\n\nDITA wird in technischen Schreibarbeiten, Produktdokumentation, regulierten Inhalten, Lokalisierungsworkflows und Ver\u00f6ffentlichungs-Pipelines eingesetzt, die strukturierte, wiederverwendbare Themen ben\u00f6tigen, anstatt einzelne Seiten.',
    },
    pt: {
      name: 'DITA',
      description:
        'Arquitetura baseada em XML para documenta\u00e7\u00e3o t\u00e9cnica estruturada.',
      longDescription:
        'DITA \u00e9 a Darwin Information Typing Architecture, um padr\u00e3o XML para autoria orientada a t\u00f3picos. Define tipos de t\u00f3picos, mapeamentos, especializa\u00e7\u00f5es, mecanismos de reutiliza\u00e7\u00e3o e metadados orientados \u00e0 publica\u00e7\u00e3o para grandes conjuntos de documenta\u00e7\u00e3o.\n\n\u00c9 utilizada em escrita t\u00e9cnica, documenta\u00e7\u00e3o de produtos, conte\u00fado regulamentado, fluxos de trabalho de localiza\u00e7\u00e3o e pipelines de publica\u00e7\u00e3o que necessitam de t\u00f3picos reutiliz\u00e1veis e estruturados, em vez de documentos p\u00e1gina por p\u00e1gina.',
    },
  },
} satisfies Language;
