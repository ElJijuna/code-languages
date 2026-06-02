import type { Language } from '../types';

export const sql = {
  slug: 'sql',
  publishedDate: '1986-01-01',
  extensions: ['.sql'],
  author: 'Donald D. Chamberlin, Raymond F. Boyce / IBM',
  website: 'https://www.iso.org/standard/76583.html',
  paradigms: ['declarative', 'data query', 'relational'],
  version: 'SQL:2023',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
  color: '#4479A1',
  i18n: {
    en: {
      name: 'SQL',
      description: 'A standard language for querying, defining, and managing relational databases.',
      longDescription:
        'SQL is a domain-specific language for working with relational databases, including querying data, defining schemas, modifying records, and controlling access.\n\nIt is used across database systems such as PostgreSQL, MySQL, SQLite, SQL Server, Oracle Database, and many analytics platforms.',
    },
    es: {
      name: 'SQL',
      description:
        'Un lenguaje estandar para consultar, definir y gestionar bases de datos relacionales.',
      longDescription:
        'SQL es un lenguaje especifico de dominio para trabajar con bases de datos relacionales, incluyendo consulta de datos, definicion de esquemas, modificacion de registros y control de acceso.\n\nSe usa en sistemas de bases de datos como PostgreSQL, MySQL, SQLite, SQL Server, Oracle Database y muchas plataformas de analitica.',
    },
    it: {
      name: 'SQL',
      description:
        'Un linguaggio standard per interrogare, definire e gestire database relazionali.',
      longDescription:
        "SQL e un linguaggio specifico per il dominio per lavorare con database relazionali, inclusa la query dei dati, la definizione di schemi, la modifica dei record e il controllo dell'accesso.\n\nE utilizzato in sistemi di database come PostgreSQL, MySQL, SQLite, SQL Server, Oracle Database e molte piattaforme di analisi.",
    },
    fr: {
      name: 'SQL',
      description:
        'Un langage standard pour interroger, definir et gerer les bases de donnees relationnelles.',
      longDescription:
        "SQL est un langage specifique a un domaine pour travailler avec les bases de donnees relationnelles, incluant l'interrogation de donnees, la definition de schemas, la modification d'enregistrements et le controle de l'acces.\n\nIl est utilise dans divers systemes de bases de donnees tels que PostgreSQL, MySQL, SQLite, SQL Server, Oracle Database, et de nombreuses plateformes d'analyse.",
    },
    de: {
      name: 'SQL',
      description:
        'Eine Standard-Sprache zum Abfragen, Definieren und Verwalten von relationalen Datenbanken.',
      longDescription:
        'SQL ist eine dom\u00e4nenspezifische Sprache zur Arbeit mit relationalen Datenbanken, einschlie\u00dflich dem Abrufen von Daten, dem Definieren von Schemas, dem \u00c4ndern von Datens\u00e4tzen und dem Steuern des Zugriffs.\n\nEs wird in Datenbanken wie PostgreSQL, MySQL, SQLite, SQL Server, Oracle Database und vielen Analysetools verwendet.',
    },
    pt: {
      name: 'SQL',
      description:
        'Linguagem padr\u00e3o para consultar, definir e gerenciar bancos de dados relacionais.',
      longDescription:
        'SQL \u00e9 uma linguagem espec\u00edfica para trabalhar com bancos de dados relacionais, incluindo a consulta de dados, a defini\u00e7\u00e3o de esquemas, a modifica\u00e7\u00e3o de registros e o controle de acesso.\n\n\u00c9 utilizada em sistemas de banco de dados como PostgreSQL, MySQL, SQLite, SQL Server, Oracle Database e muitas plataformas de an\u00e1lise.',
    },
  },
} satisfies Language;
