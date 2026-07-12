import type { Language } from '@/types';

export const prql = {
  slug: 'prql',
  status: 'experimental',
  publishedDate: '2022-01-24',
  extensions: ['.prql'],
  author: 'PRQL project',
  website: 'https://prql-lang.org',
  paradigms: ['declarative', 'functional', 'query'],
  relations: {
    compilesTo: ['sql'],
  },
  tooling: {
    runtimes: ['prqlc'],
    ecosystems: ['Databases', 'Data Processing'],
  },
  version: '0.13.0',
  logo: 'https://avatars.githubusercontent.com/u/102252800?v=4',
  color: '#4A6FBF',
  i18n: {
    en: {
      name: 'PRQL',
      description: 'A pipelined relational query language that compiles to readable SQL.',
      longDescription:
        "PRQL (Pipelined Relational Query Language) reimagines SQL as a series of transformations: each line filters, derives, aggregates, or sorts the result of the previous one, with variables, functions, and consistent syntax replacing SQL's irregularities.\n\nThe prqlc compiler emits standard SQL for many dialects — PostgreSQL, DuckDB, SQLite, MySQL, and more — so PRQL works with existing databases and integrates into Python, Rust, JavaScript, and dbt workflows.",
    },
    es: {
      name: 'PRQL',
      description: 'Un lenguaje de consultas relacional en tuberías que compila a SQL legible.',
      longDescription:
        'PRQL (Pipelined Relational Query Language) reimagina SQL como una serie de transformaciones: cada línea filtra, deriva, agrega u ordena el resultado de la anterior, con variables, funciones y una sintaxis consistente que reemplaza las irregularidades de SQL.\n\nEl compilador prqlc emite SQL estándar para muchos dialectos — PostgreSQL, DuckDB, SQLite, MySQL y más — de modo que PRQL funciona con bases de datos existentes y se integra en flujos de Python, Rust, JavaScript y dbt.',
    },
    it: {
      name: 'PRQL',
      description: 'Un linguaggio di query relazionale a pipeline che compila in SQL leggibile.',
      longDescription:
        'PRQL (Pipelined Relational Query Language) reimmagina SQL come una serie di trasformazioni: ogni riga filtra, deriva, aggrega oppure ordina il risultato della precedente, con variabili, funzioni e una sintassi coerente al posto delle irregolarità di SQL.\n\nIl compilatore prqlc emette SQL standard per molti dialetti — PostgreSQL, DuckDB, SQLite, MySQL e altri — quindi PRQL funziona con i database esistenti e si integra nei flussi Python, Rust, JavaScript e dbt.',
    },
    fr: {
      name: 'PRQL',
      description: 'Un langage de requête relationnel en pipeline qui compile vers du SQL lisible.',
      longDescription:
        "PRQL (Pipelined Relational Query Language) réinvente SQL comme une série de transformations : chaque ligne filtre, dérive, agrège ou trie le résultat de la précédente, avec des variables, des fonctions et une syntaxe cohérente remplaçant les irrégularités de SQL.\n\nLe compilateur prqlc émet du SQL standard pour de nombreux dialectes — PostgreSQL, DuckDB, SQLite, MySQL et plus — de sorte que PRQL fonctionne avec les bases existantes et s'intègre aux flux Python, Rust, JavaScript et dbt.",
    },
    de: {
      name: 'PRQL',
      description: 'Eine relationale Pipeline-Abfragesprache, die zu lesbarem SQL kompiliert.',
      longDescription:
        'PRQL (Pipelined Relational Query Language) denkt SQL als Folge von Transformationen neu: Jede Zeile filtert, leitet ab, aggregiert oder sortiert das Ergebnis der vorherigen, mit Variablen, Funktionen und konsistenter Syntax anstelle der Unregelmäßigkeiten von SQL.\n\nDer prqlc-Compiler erzeugt Standard-SQL für viele Dialekte — PostgreSQL, DuckDB, SQLite, MySQL und mehr —, sodass PRQL mit bestehenden Datenbanken funktioniert und sich in Python-, Rust-, JavaScript- und dbt-Workflows integriert.',
    },
    pt: {
      name: 'PRQL',
      description: 'Uma linguagem de consulta relacional em pipeline que compila para SQL legível.',
      longDescription:
        'PRQL (Pipelined Relational Query Language) reimagina o SQL como uma série de transformações: cada linha filtra, deriva, agrega ou ordena o resultado da anterior, com variáveis, funções e sintaxe consistente no lugar das irregularidades do SQL.\n\nO compilador prqlc emite SQL padrão para muitos dialetos — PostgreSQL, DuckDB, SQLite, MySQL e mais — de modo que o PRQL funciona com bancos existentes e se integra a fluxos Python, Rust, JavaScript e dbt.',
    },
  },
} satisfies Language;
