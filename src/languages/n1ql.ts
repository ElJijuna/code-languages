import type { Language } from '@/types';

export const n1ql = {
  slug: 'n1ql',
  publishedDate: '2015-01-01',
  extensions: ['.n1ql'],
  author: 'Couchbase',
  website: 'https://docs.couchbase.com/server/current/n1ql/n1ql-language-reference/index.html',
  paradigms: ['query', 'declarative'],
  tooling: {
    runtimes: ['Couchbase Server'],
    ecosystems: ['NoSQL', 'JSON databases'],
  },
  version: 'stable',
  logo: 'https://cdn.simpleicons.org/couchbase/EA2328',
  color: '#EA2328',
  i18n: {
    en: {
      name: 'N1QL',
      description: 'A SQL-like query language for JSON documents stored in Couchbase.',
      longDescription:
        'N1QL is a declarative query language for Couchbase that brings SQL-style selection, filtering, joins, grouping, indexing, and mutation to JSON documents. It treats buckets, scopes, collections, and document fields as queryable data structures.\n\nThe language is used by Couchbase applications that need familiar relational-style queries over flexible document data. It supports operational queries, analytics-style exploration, and migrations from SQL-shaped data access patterns.',
    },
    es: {
      name: 'N1QL',
      description: 'Lenguaje de consultas tipo SQL para documentos JSON almacenados en Couchbase.',
      longDescription:
        'N1QL es un lenguaje declarativo de consultas para Couchbase que lleva seleccion, filtrado, joins, agrupacion, indexado y mutacion al estilo SQL sobre documentos JSON. Trata buckets, scopes, colecciones y campos de documentos como estructuras consultables.\n\nEl lenguaje se usa en apps Couchbase que necesitan consultas familiares tipo relacional sobre datos documentales flexibles. Soporta consultas operativas, exploracion analitica y migraciones desde patrones de acceso con forma SQL.',
    },
    it: {
      name: 'N1QL',
      description: 'Linguaggio di query simile a SQL per documenti JSON in Couchbase.',
      longDescription:
        'N1QL e un linguaggio dichiarativo di query per Couchbase che porta selezione, filtri, join, raggruppamento, indicizzazione e mutazione in stile SQL sui documenti JSON. Tratta bucket, scope, collection e campi documento come strutture interrogabili.\n\nIl linguaggio e usato da applicazioni Couchbase che richiedono query familiari di stile relazionale su dati documentali flessibili. Supporta query operative, esplorazione analitica e migrazioni da pattern di accesso simili a SQL.',
    },
    fr: {
      name: 'N1QL',
      description: 'Langage de requete proche de SQL pour documents JSON dans Couchbase.',
      longDescription:
        'N1QL est un langage de requete declaratif pour Couchbase qui apporte selection, filtrage, jointures, groupement, indexation et mutation de style SQL aux documents JSON. Il traite buckets, scopes, collections et champs de documents comme structures interrogeables.\n\nLe langage est utilise par les applications Couchbase qui veulent des requetes relationnelles familieres sur donnees documentaires flexibles. Il prend en charge requetes operationnelles, exploration analytique et migrations depuis des acces proches de SQL.',
    },
    de: {
      name: 'N1QL',
      description: 'SQL-ahnliche Abfragesprache fur JSON-Dokumente in Couchbase.',
      longDescription:
        'N1QL ist eine deklarative Abfragesprache fur Couchbase, die SQL-artige Auswahl, Filter, Joins, Gruppierung, Indexierung und Mutation auf JSON-Dokumente bringt. Buckets, Scopes, Collections und Dokumentfelder werden als abfragbare Datenstrukturen behandelt.\n\nDie Sprache wird von Couchbase-Anwendungen genutzt, die vertraute relationale Abfragen auf flexible Dokumentdaten brauchen. Sie unterstutzt operative Abfragen, analytische Exploration und Migrationen von SQL-gepragten Zugriffsmustern.',
    },
    pt: {
      name: 'N1QL',
      description: 'Linguagem de consulta parecida com SQL para documentos JSON no Couchbase.',
      longDescription:
        'N1QL e uma linguagem declarativa de consulta para Couchbase que leva selecao, filtros, joins, agrupamento, indexacao e mutacao em estilo SQL para documentos JSON. Ela trata buckets, scopes, colecoes e campos de documentos como estruturas consultaveis.\n\nA linguagem e usada por apps Couchbase que precisam de consultas familiares de estilo relacional sobre dados documentais flexiveis. Ela suporta consultas operacionais, exploracao analitica e migracoes de padroes de acesso parecidos com SQL.',
    },
  },
} satisfies Language;
