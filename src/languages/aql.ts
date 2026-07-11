import type { Language } from '@/types';

export const aql = {
  slug: 'aql',
  publishedDate: '2012-05-01',
  extensions: ['.aql'],
  author: 'ArangoDB GmbH',
  website: 'https://docs.arangodb.com/stable/aql/',
  paradigms: ['query', 'declarative'],
  tooling: {
    runtimes: ['ArangoDB'],
    ecosystems: ['Graph databases', 'Document databases'],
  },
  version: 'ArangoDB AQL',
  logo: 'https://cdn.simpleicons.org/arangodb/DDE072',
  color: '#16A34A',
  i18n: {
    en: {
      name: 'AQL',
      description:
        'ArangoDB Query Language, a declarative query language for multi-model graph and document data.',
      longDescription:
        'AQL is the ArangoDB Query Language used to query documents, graphs, key-value data, and search views in ArangoDB. It has SQL-like declarative structure while supporting graph traversal, document operations, aggregation, and expression-oriented data shaping.\n\nAQL is used in applications that need one query language across multiple data models. It is closely tied to ArangoDB server versions and the database features available in each release.',
    },
    es: {
      name: 'AQL',
      description:
        'Lenguaje declarativo de consultas de ArangoDB para datos de grafos, documentos y multiples modelos.',
      longDescription:
        'AQL es el lenguaje de consultas de ArangoDB para consultar documentos, grafos, datos clave-valor y vistas de busqueda. Tiene una estructura declarativa parecida a SQL, con soporte para recorridos de grafos, operaciones sobre documentos, agregaciones y transformacion de datos mediante expresiones.\n\nAQL se usa en aplicaciones que necesitan un solo lenguaje de consulta para varios modelos de datos. Esta estrechamente ligado a las versiones del servidor ArangoDB y a las capacidades disponibles en cada lanzamiento.',
    },
    it: {
      name: 'AQL',
      description:
        'Linguaggio dichiarativo di query di ArangoDB per dati a grafo, documenti e modelli multipli.',
      longDescription:
        'AQL e il linguaggio di query di ArangoDB usato per interrogare documenti, grafi, dati chiave-valore e viste di ricerca. Ha una struttura dichiarativa simile a SQL, con supporto per attraversamenti di grafi, operazioni sui documenti, aggregazioni e trasformazione dei dati tramite espressioni.\n\nAQL viene usato in applicazioni che richiedono un unico linguaggio di query per piu modelli di dati. E strettamente legato alle versioni del server ArangoDB e alle funzionalita disponibili in ogni rilascio.',
    },
    fr: {
      name: 'AQL',
      description:
        'Langage de requete declaratif d ArangoDB pour graphes, documents et donnees multi-modeles.',
      longDescription:
        'AQL est le langage de requete d ArangoDB utilise pour interroger des documents, des graphes, des donnees cle-valeur et des vues de recherche. Il possede une structure declarative proche de SQL et prend en charge les parcours de graphes, les operations sur documents, les agregations et la mise en forme des donnees par expressions.\n\nAQL est utilise dans les applications qui ont besoin d un seul langage de requete pour plusieurs modeles de donnees. Il est etroitement lie aux versions du serveur ArangoDB et aux fonctionnalites disponibles dans chaque version.',
    },
    de: {
      name: 'AQL',
      description:
        'Deklarative Abfragesprache von ArangoDB fur Graph-, Dokument- und Multi-Model-Daten.',
      longDescription:
        'AQL ist die ArangoDB Query Language zum Abfragen von Dokumenten, Graphen, Key-Value-Daten und Suchansichten in ArangoDB. Sie hat eine SQL-ahnliche deklarative Struktur und unterstutzt Graph-Traversierungen, Dokumentoperationen, Aggregationen und ausdrucksbasierte Datenformung.\n\nAQL wird in Anwendungen eingesetzt, die eine Abfragesprache fur mehrere Datenmodelle benotigen. Die Sprache ist eng an ArangoDB-Serverversionen und die darin verfugbaren Funktionen gebunden.',
    },
    pt: {
      name: 'AQL',
      description:
        'Linguagem declarativa de consulta do ArangoDB para grafos, documentos e dados multimodelo.',
      longDescription:
        'AQL e a linguagem de consulta do ArangoDB usada para consultar documentos, grafos, dados chave-valor e visoes de busca. Ela tem uma estrutura declarativa semelhante a SQL, com suporte a percursos de grafos, operacoes em documentos, agregacoes e modelagem de dados baseada em expressoes.\n\nAQL e usada em aplicacoes que precisam de uma unica linguagem de consulta para varios modelos de dados. Ela esta ligada as versoes do servidor ArangoDB e aos recursos disponiveis em cada lancamento.',
    },
  },
} satisfies Language;
