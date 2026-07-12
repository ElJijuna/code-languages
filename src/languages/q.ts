import type { Language } from '@/types';

export const q = {
  slug: 'q',
  aliases: ['kdb', 'kdb+'],
  publishedDate: '2003-01-01',
  extensions: ['.q', '.k'],
  author: 'Arthur Whitney / Kx Systems',
  website: 'https://kx.com',
  paradigms: ['array', 'functional', 'query'],
  tooling: {
    runtimes: ['kdb+'],
    ecosystems: ['Finance', 'Data Science', 'Time Series'],
  },
  version: 'q 4.1',
  logo: 'https://avatars.githubusercontent.com/u/11446750?v=4',
  color: '#0040CD',
  i18n: {
    en: {
      name: 'q / kdb+',
      description: 'An array and query language built into the kdb+ time-series database.',
      longDescription:
        'q is the programming and query language of kdb+, the columnar time-series database from Kx Systems. Descended from APL and K, it operates on whole vectors and tables with an extremely terse syntax and treats queries, analytics, and stored procedures as one language.\n\nq/kdb+ dominates tick-data capture and real-time analytics in investment banks, hedge funds, and exchanges, where its in-memory column store processes billions of records with low latency.',
    },
    es: {
      name: 'q / kdb+',
      description:
        'Un lenguaje de arrays y consultas integrado en la base de datos de series temporales kdb+.',
      longDescription:
        'q es el lenguaje de programación y consulta de kdb+, la base de datos columnar de series temporales de Kx Systems. Descendiente de APL y K, opera sobre vectores y tablas completas con una sintaxis extremadamente concisa y trata consultas, analítica y procedimientos almacenados como un solo lenguaje.\n\nq/kdb+ domina la captura de datos de tick y la analítica en tiempo real en bancos de inversión, hedge funds y bolsas, donde su almacén columnar en memoria procesa miles de millones de registros con baja latencia.',
    },
    it: {
      name: 'q / kdb+',
      description: 'Un linguaggio di array e query integrato nel database di serie temporali kdb+.',
      longDescription:
        'q è il linguaggio di programmazione e interrogazione di kdb+, il database colonnare di serie temporali di Kx Systems. Discendente di APL e K, opera su vettori e tabelle interi con una sintassi estremamente concisa e tratta query, analisi e stored procedure come un unico linguaggio.\n\nq/kdb+ domina la cattura dei dati tick e le analisi in tempo reale in banche di investimento, hedge fund e borse, dove il suo archivio colonnare in memoria elabora miliardi di record a bassa latenza.',
    },
    fr: {
      name: 'q / kdb+',
      description:
        'Un langage de tableaux et de requêtes intégré à la base de séries temporelles kdb+.',
      longDescription:
        "q est le langage de programmation et de requête de kdb+, la base de données colonne de séries temporelles de Kx Systems. Descendant d'APL et de K, il opère sur des vecteurs et des tables entiers avec une syntaxe extrêmement concise et traite requêtes, analyses et procédures stockées comme un seul langage.\n\nq/kdb+ domine la capture de données tick et l'analytique temps réel dans les banques d'investissement, les hedge funds et les bourses, où son stockage colonne en mémoire traite des milliards d'enregistrements à faible latence.",
    },
    de: {
      name: 'q / kdb+',
      description: 'Eine Array- und Abfragesprache, eingebaut in die Zeitreihen-Datenbank kdb+.',
      longDescription:
        'q ist die Programmier- und Abfragesprache von kdb+, der spaltenorientierten Zeitreihen-Datenbank von Kx Systems. Als Nachfahre von APL und K arbeitet sie auf ganzen Vektoren und Tabellen mit extrem knapper Syntax und behandelt Abfragen, Analysen und Stored Procedures als eine Sprache.\n\nq/kdb+ dominiert die Tick-Daten-Erfassung und Echtzeit-Analytik in Investmentbanken, Hedgefonds und Börsen, wo der spaltenorientierte In-Memory-Speicher Milliarden von Datensätzen mit geringer Latenz verarbeitet.',
    },
    pt: {
      name: 'q / kdb+',
      description:
        'Uma linguagem de arrays e consultas embutida no banco de séries temporais kdb+.',
      longDescription:
        'q é a linguagem de programação e consulta do kdb+, o banco de dados colunar de séries temporais da Kx Systems. Descendente de APL e K, opera sobre vetores e tabelas inteiros com uma sintaxe extremamente concisa e trata consultas, análises e stored procedures como uma única linguagem.\n\nq/kdb+ domina a captura de dados de tick e a análise em tempo real em bancos de investimento, fundos de hedge e bolsas, onde seu armazenamento colunar em memória processa bilhões de registros com baixa latência.',
    },
  },
} satisfies Language;
