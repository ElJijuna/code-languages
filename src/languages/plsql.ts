import type { Language } from '../types';

export const plsql = {
  slug: 'plsql',
  publishedDate: '1992-01-01',
  extensions: ['.pls', '.pks', '.pkb', '.plsql'],
  author: 'Oracle',
  website: 'https://www.oracle.com/database/technologies/appdev/plsql.html',
  paradigms: ['procedural', 'database', 'declarative', 'imperative'],
  tooling: {
    runtimes: ['Oracle Database'],
    ecosystems: ['Oracle', 'SQL', 'Enterprise Data'],
  },
  version: 'Oracle Database 26ai',
  logo: 'https://github.com/oracle.png',
  color: '#F80000',
  i18n: {
    en: {
      name: 'Oracle PL/SQL',
      description: "Oracle's procedural extension to SQL for database programs and packages.",
      longDescription:
        'PL/SQL adds blocks, variables, exceptions, procedures, functions, packages, cursors, and triggers to Oracle SQL. It keeps database logic close to data and transactional behavior inside Oracle Database.\n\nIt is used for stored procedures, migration scripts, business rules, batch jobs, packages, and enterprise database applications built on Oracle.',
    },
    es: {
      name: 'Oracle PL/SQL',
      description:
        'La extension procedural de SQL de Oracle para programas y paquetes de base de datos.',
      longDescription:
        'PL/SQL agrega bloques, variables, excepciones, procedimientos, funciones, paquetes, cursores y triggers a Oracle SQL. Mantiene logica de base de datos cerca de los datos y del comportamiento transaccional en Oracle Database.\n\nSe usa en stored procedures, scripts de migracion, reglas de negocio, trabajos batch, paquetes y aplicaciones empresariales construidas sobre Oracle.',
    },
    it: {
      name: 'Oracle PL/SQL',
      description: 'Estensione procedurale di SQL di Oracle per programmi e pacchetti di database.',
      longDescription:
        "PL/SQL aggiunge blocchi, variabili, eccezioni, procedure, funzioni, pacchetti, cursori e trigger a SQL di Oracle. Mantiene la logica del database vicina ai dati e al comportamento transazionale all'interno di Oracle Database.\n\nViene utilizzato per stored procedure, script di migrazione, regole aziendali, lavori batch, pacchetti e applicazioni di database aziendali costruite su Oracle.",
    },
    fr: {
      name: 'Oracle PL/SQL',
      description: 'Oracle PL/SQL',
      longDescription:
        "PL/SQL ajoute des blocs, des variables, des exceptions, des procedures, des fonctions, des packages, des curseurs et des declencheurs a Oracle SQL. Il maintient la logique de la base de donnees proche des donnees et le comportement transactionnel dans Oracle Database.\n\nIl est utilise pour les procedures stockees, les scripts de migration, les regles metier, les taches par lots, les packages et les applications de base de donnees d'entreprise construites sur Oracle.",
    },
    de: {
      name: 'Oracle PL/SQL',
      description:
        'Oracle PL/SQL: Eine prozedurale Erweiterung von SQL f\u00fcr Datenbankprogramme und -pakete.',
      longDescription:
        'PL/SQL f\u00fcgt Bl\u00f6cke, Variablen, Ausnahmen, Prozeduren, Funktionen, Pakete, Cursor und Trigger zu Oracle SQL hinzu. Es erm\u00f6glicht die Verwaltung der Datenbanklogik in der N\u00e4he der Daten und die Implementierung von Transaktionsverhalten innerhalb der Oracle Database.\n\nEs wird f\u00fcr gespeicherte Prozeduren, Migrationsskripte, Gesch\u00e4ftsregeln, Batch-Jobs, Pakete und Unternehmensdatenbankanwendungen, die auf Oracle basieren, verwendet.',
    },
    pt: {
      name: 'Oracle PL/SQL',
      description:
        'Extens\u00e3o procedural da linguagem SQL para programas e pacotes de banco de dados.',
      longDescription:
        'PL/SQL adiciona blocos, vari\u00e1veis, exce\u00e7\u00f5es, procedimentos, fun\u00e7\u00f5es, pacotes e cursores \u00e0 SQL do Oracle. Mant\u00e9m a l\u00f3gica do banco de dados pr\u00f3xima aos dados e ao comportamento transacional dentro do Oracle Database.\n\n\u00c9 usado para procedimentos armazenados, scripts de migra\u00e7\u00e3o, regras de neg\u00f3cios, trabalhos em lote, pacotes e aplica\u00e7\u00f5es de banco de dados empresariais constru\u00eddas no Oracle.',
    },
  },
} satisfies Language;
