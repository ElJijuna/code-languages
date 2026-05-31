import type { Language } from "../types";

export const cypher = {
  slug: "cypher",
  publishedDate: "2011-02-01",
  extensions: [".cypher", ".cyp"],
  author: "Neo Technology (Neo4j)",
  website: "https://neo4j.com/docs/cypher-manual/current/",
  paradigms: ["declarative", "query"],
  tooling: {
    runtimes: ["Neo4j", "Amazon Neptune", "Memgraph", "RedisGraph"],
    ecosystems: ["Graph Databases", "Data"],
  },
  version: "25",
  logo: "https://dist.neo4j.com/wp-content/uploads/20210423072428/neo4j-logo-2020-1.svg",
  color: "#018BFF",
  i18n: {
    en: {
      name: "Cypher",
      description:
        "A declarative graph query language for Neo4j and other graph databases, designed to express graph patterns naturally.",
      longDescription:
        "Cypher is a declarative query language designed specifically for querying and updating property graphs. Its ASCII-art syntax uses parentheses for nodes and arrows for relationships, making graph patterns intuitive to read and write.\n\nOriginally developed by Neo4j, Cypher has been standardized as openCypher and is supported by multiple graph database engines including Amazon Neptune and Memgraph. It is used for social networks, recommendation engines, fraud detection, and knowledge graphs.",
    },
    es: {
      name: "Cypher",
      description:
        "Un lenguaje declarativo de consulta de grafos para Neo4j y otras bases de datos de grafos, diseñado para expresar patrones de grafos de forma natural.",
      longDescription:
        "Cypher es un lenguaje de consulta declarativo diseñado para consultar y actualizar grafos de propiedades. Su sintaxis de arte ASCII usa paréntesis para nodos y flechas para relaciones, haciendo los patrones de grafo intuitivos de leer y escribir.\n\nOriginalmente desarrollado por Neo4j, Cypher ha sido estandarizado como openCypher y es compatible con múltiples motores de bases de datos de grafos. Se usa en redes sociales, motores de recomendación, detección de fraude y grafos de conocimiento.",
    },
    it: {
      name: "Cypher",
      description:
        "Un linguaggio di interrogazione di grafi dichiarativo per Neo4j e altri database a grafo, progettato per esprimere pattern di grafi in modo naturale.",
      longDescription:
        "Cypher è un linguaggio di interrogazione dichiarativo progettato per interrogare e aggiornare grafi di proprietà. La sua sintassi ASCII art usa parentesi per i nodi e frecce per le relazioni, rendendo i pattern di grafo intuitivi da leggere e scrivere.\n\nOriginariamente sviluppato da Neo4j, Cypher è stato standardizzato come openCypher ed è supportato da più motori di database a grafo. È utilizzato per reti sociali, motori di raccomandazione, rilevamento frodi e grafi della conoscenza.",
    },
    fr: {
      name: "Cypher",
      description:
        "Un langage de requête de graphes déclaratif pour Neo4j et d'autres bases de données de graphes, conçu pour exprimer des motifs de graphes naturellement.",
      longDescription:
        "Cypher est un langage de requête déclaratif conçu pour interroger et mettre à jour des graphes de propriétés. Sa syntaxe art ASCII utilise des parenthèses pour les nœuds et des flèches pour les relations, rendant les motifs de graphes intuitifs à lire et à écrire.\n\nDéveloppé initialement par Neo4j, Cypher a été standardisé en tant qu'openCypher et est supporté par plusieurs moteurs de bases de données de graphes. Il est utilisé pour les réseaux sociaux, les moteurs de recommandation, la détection de fraude et les graphes de connaissances.",
    },
    de: {
      name: "Cypher",
      description:
        "Eine deklarative Graphabfragesprache für Neo4j und andere Graphdatenbanken, die Graphmuster natürlich ausdrückt.",
      longDescription:
        "Cypher ist eine deklarative Abfragesprache, die speziell für die Abfrage und Aktualisierung von Eigenschaftsgraphen entwickelt wurde. Ihre ASCII-Art-Syntax verwendet Klammern für Knoten und Pfeile für Beziehungen, was Graphmuster intuitiv lesbar und schreibbar macht.\n\nUrsprünglich von Neo4j entwickelt, wurde Cypher als openCypher standardisiert und wird von mehreren Graphdatenbank-Engines unterstützt. Es wird für soziale Netzwerke, Empfehlungssysteme, Betrugserkennung und Wissensgraphen eingesetzt.",
    },
    pt: {
      name: "Cypher",
      description:
        "Uma linguagem declarativa de consulta de grafos para Neo4j e outros bancos de dados de grafos, projetada para expressar padrões de grafos de forma natural.",
      longDescription:
        "Cypher é uma linguagem de consulta declarativa projetada para consultar e atualizar grafos de propriedades. Sua sintaxe de arte ASCII usa parênteses para nós e setas para relacionamentos, tornando os padrões de grafo intuitivos de ler e escrever.\n\nOriginalmente desenvolvido pela Neo4j, o Cypher foi padronizado como openCypher e é suportado por múltiplos motores de bancos de dados de grafos. É usado em redes sociais, motores de recomendação, detecção de fraude e grafos de conhecimento.",
    },
  },
} satisfies Language;
