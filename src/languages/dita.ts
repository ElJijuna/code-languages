import type { Language } from '@/types';

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
      description: 'Eine XML-basierte Architektur für strukturierte technische Dokumentation.',
      longDescription:
        'DITA ist die Darwin Information Typing Architecture, ein XML-basierter Standard für themenorientierte Erstellung. Er definiert Topic-Typen, Karten, Spezialisierungs- und Wiederverwendungsmöglichkeiten sowie Veröffentlichungsmetadaten für große Dokumentationssets.\n\nDITA wird in technischen Schreibarbeiten, Produktdokumentation, regulierten Inhalten, Lokalisierungsworkflows und Veröffentlichungs-Pipelines eingesetzt, die strukturierte, wiederverwendbare Themen benötigen, anstatt einzelne Seiten.',
    },
    pt: {
      name: 'DITA',
      description: 'Arquitetura baseada em XML para documentação técnica estruturada.',
      longDescription:
        'DITA é a Darwin Information Typing Architecture, um padrão XML para autoria orientada a tópicos. Define tipos de tópicos, mapeamentos, especializações, mecanismos de reutilização e metadados orientados à publicação para grandes conjuntos de documentação.\n\nÉ utilizada em escrita técnica, documentação de produtos, conteúdo regulamentado, fluxos de trabalho de localização e pipelines de publicação que necessitam de tópicos reutilizáveis e estruturados, em vez de documentos página por página.',
    },
  },
} satisfies Language;
