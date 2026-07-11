import type { Language } from '@/types';

export const cql = {
  slug: 'cql',
  publishedDate: '2008-01-01',
  extensions: ['.cql'],
  author: 'Apache Cassandra project',
  website: 'https://cassandra.apache.org/doc/latest/cassandra/developing/cql/index.html',
  paradigms: ['query', 'declarative'],
  tooling: {
    runtimes: ['Apache Cassandra'],
    ecosystems: ['NoSQL', 'Distributed databases'],
  },
  version: 'CQL 3',
  logo: 'https://cdn.simpleicons.org/apachecassandra/1287B1',
  color: '#1287B1',
  i18n: {
    en: {
      name: 'CQL',
      description: 'A SQL-like query language for Apache Cassandra tables and keyspaces.',
      longDescription:
        'Cassandra Query Language is the primary interface for defining and querying data in Apache Cassandra. It models keyspaces, tables, columns, indexes, materialized views, and statements for reading and writing partitioned data.\n\nCQL looks familiar to SQL users, but its behavior follows Cassandra storage and distribution rules. Effective CQL design focuses on partition keys, clustering columns, denormalized tables, and queries shaped around access patterns.',
    },
    es: {
      name: 'CQL',
      description: 'Lenguaje de consultas tipo SQL para tablas y keyspaces de Apache Cassandra.',
      longDescription:
        'Cassandra Query Language es la interfaz principal para definir y consultar datos en Apache Cassandra. Modela keyspaces, tablas, columnas, indices, vistas materializadas y sentencias para leer y escribir datos particionados.\n\nCQL resulta familiar para usuarios de SQL, pero su comportamiento sigue las reglas de almacenamiento y distribucion de Cassandra. Un buen diseno CQL se centra en claves de particion, columnas de ordenamiento, tablas desnormalizadas y consultas guiadas por patrones de acceso.',
    },
    it: {
      name: 'CQL',
      description: 'Linguaggio di query simile a SQL per tabelle e keyspace Apache Cassandra.',
      longDescription:
        'Cassandra Query Language e l interfaccia principale per definire e interrogare dati in Apache Cassandra. Modella keyspace, tabelle, colonne, indici, viste materializzate e istruzioni per leggere e scrivere dati partizionati.\n\nCQL risulta familiare agli utenti SQL, ma il suo comportamento segue le regole di archiviazione e distribuzione di Cassandra. Un buon design CQL si concentra su chiavi di partizione, colonne di clustering, tabelle denormalizzate e query modellate sui pattern di accesso.',
    },
    fr: {
      name: 'CQL',
      description: 'Langage de requete proche de SQL pour tables et keyspaces Apache Cassandra.',
      longDescription:
        'Cassandra Query Language est l interface principale pour definir et interroger les donnees dans Apache Cassandra. Il modelise keyspaces, tables, colonnes, index, vues materialisees et instructions pour lire et ecrire des donnees partitionnees.\n\nCQL parait familier aux utilisateurs SQL, mais son comportement suit les regles de stockage et de distribution de Cassandra. Une bonne conception CQL se concentre sur cles de partition, colonnes de clustering, tables denormalisees et requetes guidees par les acces.',
    },
    de: {
      name: 'CQL',
      description: 'SQL-ahnliche Abfragesprache fur Apache-Cassandra-Tabellen und Keyspaces.',
      longDescription:
        'Cassandra Query Language ist die wichtigste Schnittstelle zum Definieren und Abfragen von Daten in Apache Cassandra. Sie modelliert Keyspaces, Tabellen, Spalten, Indizes, materialisierte Views und Anweisungen zum Lesen und Schreiben partitionierter Daten.\n\nCQL wirkt fur SQL-Nutzer vertraut, folgt aber den Speicher- und Verteilungsregeln von Cassandra. Gutes CQL-Design konzentriert sich auf Partitionsschlussel, Clustering-Spalten, denormalisierte Tabellen und Abfragen nach Zugriffsmustern.',
    },
    pt: {
      name: 'CQL',
      description: 'Linguagem de consulta parecida com SQL para tabelas e keyspaces Cassandra.',
      longDescription:
        'Cassandra Query Language e a principal interface para definir e consultar dados no Apache Cassandra. Ela modela keyspaces, tabelas, colunas, indices, visoes materializadas e comandos para ler e gravar dados particionados.\n\nCQL parece familiar para usuarios de SQL, mas seu comportamento segue as regras de armazenamento e distribuicao do Cassandra. Bom design em CQL foca chaves de particao, colunas de clustering, tabelas desnormalizadas e consultas moldadas por padroes de acesso.',
    },
  },
} satisfies Language;
