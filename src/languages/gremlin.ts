import type { Language } from '../types';

export const gremlin = {
  slug: 'gremlin',
  publishedDate: '2009-10-01',
  extensions: ['.gremlin', '.grem'],
  author: 'Apache TinkerPop project',
  website: 'https://tinkerpop.apache.org/gremlin.html',
  paradigms: ['graph query', 'traversal'],
  tooling: {
    runtimes: ['Apache TinkerPop', 'Gremlin Console'],
    ecosystems: ['Graph databases', 'Knowledge graphs'],
  },
  version: 'stable',
  logo: 'https://cdn.simpleicons.org/apache/6B7280',
  color: '#6B7280',
  i18n: {
    en: {
      name: 'Gremlin',
      description: 'A graph traversal language for Apache TinkerPop-compatible graph systems.',
      longDescription:
        'Gremlin is a graph traversal language from Apache TinkerPop. It describes walks through vertices and edges using steps for filtering, mapping, branching, aggregation, mutation, and path analysis.\n\nThe language is used across graph databases and services that implement the TinkerPop stack. It fits recommendation systems, network analysis, fraud detection, identity graphs, and applications where relationships are queried as first-class structure.',
    },
    es: {
      name: 'Gremlin',
      description: 'Lenguaje de recorrido de grafos para sistemas compatibles con TinkerPop.',
      longDescription:
        'Gremlin es un lenguaje de recorrido de grafos de Apache TinkerPop. Describe caminos por vertices y aristas usando pasos para filtrar, mapear, ramificar, agregar, mutar y analizar rutas.\n\nEl lenguaje se usa en bases de datos y servicios de grafos que implementan el stack TinkerPop. Encaja en recomendadores, analisis de redes, deteccion de fraude, grafos de identidad y apps donde las relaciones se consultan como estructura principal.',
    },
    it: {
      name: 'Gremlin',
      description: 'Linguaggio di attraversamento grafi per sistemi compatibili con TinkerPop.',
      longDescription:
        'Gremlin e un linguaggio di attraversamento grafi di Apache TinkerPop. Descrive cammini tra vertici e archi usando step per filtrare, mappare, ramificare, aggregare, modificare e analizzare percorsi.\n\nIl linguaggio e usato in database e servizi graph che implementano lo stack TinkerPop. Si adatta a raccomandazioni, analisi di reti, rilevamento frodi, grafi di identita e app dove le relazioni sono interrogate come struttura primaria.',
    },
    fr: {
      name: 'Gremlin',
      description: 'Langage de parcours de graphes pour systemes compatibles TinkerPop.',
      longDescription:
        'Gremlin est un langage de parcours de graphes issu d Apache TinkerPop. Il decrit des trajets dans sommets et aretes avec des etapes de filtrage, projection, branchement, agregation, mutation et analyse de chemins.\n\nLe langage est utilise dans bases et services de graphes qui implementent TinkerPop. Il convient aux recommandations, analyses de reseaux, detection de fraude, graphes d identite et apps ou les relations sont une structure de requete centrale.',
    },
    de: {
      name: 'Gremlin',
      description: 'Graph-Traversal-Sprache fur Apache-TinkerPop-kompatible Systeme.',
      longDescription:
        'Gremlin ist eine Graph-Traversal-Sprache aus Apache TinkerPop. Sie beschreibt Wege durch Vertices und Edges mit Schritten fur Filtern, Mapping, Verzweigung, Aggregation, Mutation und Pfadanalyse.\n\nDie Sprache wird in Graphdatenbanken und Diensten genutzt, die den TinkerPop-Stack implementieren. Sie passt zu Empfehlungen, Netzwerkanalyse, Betrugserkennung, Identitatsgraphen und Anwendungen, in denen Beziehungen als zentrale Struktur abgefragt werden.',
    },
    pt: {
      name: 'Gremlin',
      description: 'Linguagem de travessia de grafos para sistemas compativeis com TinkerPop.',
      longDescription:
        'Gremlin e uma linguagem de travessia de grafos do Apache TinkerPop. Ela descreve caminhadas por vertices e arestas usando passos para filtrar, mapear, ramificar, agregar, alterar e analisar caminhos.\n\nA linguagem e usada em bancos e servicos de grafos que implementam o stack TinkerPop. Ela serve para recomendacao, analise de redes, deteccao de fraude, grafos de identidade e apps onde relacoes sao consultadas como estrutura principal.',
    },
  },
} satisfies Language;
