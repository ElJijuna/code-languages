import type { Language } from '../types';

export const sparql = {
  slug: 'sparql',
  publishedDate: '2008-01-15',
  extensions: ['.sparql', '.rq'],
  author: 'W3C DAWG (Data Access Working Group)',
  website: 'https://www.w3.org/TR/sparql11-overview/',
  paradigms: ['declarative', 'query'],
  tooling: {
    runtimes: ['Apache Jena', 'Virtuoso', 'GraphDB', 'Blazegraph', 'RDF4J'],
    ecosystems: ['Semantic Web', 'Linked Data', 'Knowledge Graphs'],
  },
  version: '1.1',
  logo: 'https://www.w3.org/RDF/icons/rdf_flyer.svg',
  color: '#0E75B6',
  i18n: {
    en: {
      name: 'SPARQL',
      description:
        'A W3C standard query language and protocol for RDF data, enabling queries across the Semantic Web and knowledge graphs.',
      longDescription:
        'SPARQL (SPARQL Protocol and RDF Query Language) is the standard query language for RDF (Resource Description Framework) data. It allows querying and manipulating data stored in triplestores and linked data endpoints using graph pattern matching.\n\nSPARQL supports SELECT, CONSTRUCT, ASK, and DESCRIBE query forms, as well as UPDATE operations. It is widely used in semantic web applications, open government data portals, biomedical databases like UniProt and Wikidata, and knowledge graph systems.',
    },
    es: {
      name: 'SPARQL',
      description:
        'Un lenguaje de consulta estándar W3C para datos RDF que permite consultas en la Web Semántica y grafos de conocimiento.',
      longDescription:
        'SPARQL es el lenguaje de consulta estándar para datos RDF (Resource Description Framework). Permite consultar y manipular datos almacenados en triplestores y endpoints de datos enlazados usando coincidencia de patrones de grafo.\n\nSPARQL soporta formas de consulta SELECT, CONSTRUCT, ASK y DESCRIBE, así como operaciones UPDATE. Es ampliamente usado en aplicaciones de web semántica, portales de datos abiertos, bases de datos biomédicas como UniProt y Wikidata, y sistemas de grafos de conocimiento.',
    },
    it: {
      name: 'SPARQL',
      description:
        'Un linguaggio di interrogazione standard W3C per i dati RDF che abilita le query sul Web Semantico e sui grafi della conoscenza.',
      longDescription:
        'SPARQL è il linguaggio di interrogazione standard per i dati RDF (Resource Description Framework). Permette di interrogare e manipolare dati memorizzati in triplestore ed endpoint di linked data usando la corrispondenza di pattern di grafo.\n\nSPARQL supporta le forme di query SELECT, CONSTRUCT, ASK e DESCRIBE, nonché le operazioni UPDATE. È ampiamente utilizzato in applicazioni di web semantico, portali di dati aperti, database biomedici come UniProt e Wikidata, e sistemi di grafi della conoscenza.',
    },
    fr: {
      name: 'SPARQL',
      description:
        'Un langage de requête standard W3C pour les données RDF permettant des requêtes sur le Web Sémantique et les graphes de connaissances.',
      longDescription:
        "SPARQL est le langage de requête standard pour les données RDF (Resource Description Framework). Il permet d'interroger et de manipuler des données stockées dans des triplestores et des points de terminaison de données liées en utilisant la correspondance de motifs de graphe.\n\nSPARQL prend en charge les formes de requête SELECT, CONSTRUCT, ASK et DESCRIBE, ainsi que les opérations UPDATE. Il est largement utilisé dans les applications de web sémantique, les portails de données ouvertes, les bases de données biomédicales comme UniProt et Wikidata, et les systèmes de graphes de connaissances.",
    },
    de: {
      name: 'SPARQL',
      description:
        'Eine W3C-Standard-Abfragesprache für RDF-Daten, die Abfragen über das Semantic Web und Wissensgraphen ermöglicht.',
      longDescription:
        'SPARQL ist die Standard-Abfragesprache für RDF-Daten (Resource Description Framework). Sie ermöglicht die Abfrage und Manipulation von Daten in Triplestores und Linked-Data-Endpunkten mittels Graphmuster-Matching.\n\nSPARQL unterstützt die Abfrageformen SELECT, CONSTRUCT, ASK und DESCRIBE sowie UPDATE-Operationen. Es wird in semantischen Web-Anwendungen, Open-Government-Datenportalen, biomedizinischen Datenbanken wie UniProt und Wikidata sowie Wissensgraph-Systemen eingesetzt.',
    },
    pt: {
      name: 'SPARQL',
      description:
        'Uma linguagem de consulta padrão W3C para dados RDF que permite consultas na Web Semântica e grafos de conhecimento.',
      longDescription:
        'SPARQL é a linguagem de consulta padrão para dados RDF (Resource Description Framework). Permite consultar e manipular dados armazenados em triplestores e endpoints de linked data usando correspondência de padrões de grafo.\n\nSPARQL suporta formas de consulta SELECT, CONSTRUCT, ASK e DESCRIBE, bem como operações UPDATE. É amplamente usado em aplicações de web semântica, portais de dados abertos, bancos de dados biomédicos como UniProt e Wikidata, e sistemas de grafos de conhecimento.',
    },
  },
} satisfies Language;
