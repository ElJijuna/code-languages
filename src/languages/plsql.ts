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
        'Oracle PL/SQL: Eine prozedurale Erweiterung von SQL für Datenbankprogramme und -pakete.',
      longDescription:
        'PL/SQL fügt Blöcke, Variablen, Ausnahmen, Prozeduren, Funktionen, Pakete, Cursor und Trigger zu Oracle SQL hinzu. Es ermöglicht die Verwaltung der Datenbanklogik in der Nähe der Daten und die Implementierung von Transaktionsverhalten innerhalb der Oracle Database.\n\nEs wird für gespeicherte Prozeduren, Migrationsskripte, Geschäftsregeln, Batch-Jobs, Pakete und Unternehmensdatenbankanwendungen, die auf Oracle basieren, verwendet.',
    },
    pt: {
      name: 'Oracle PL/SQL',
      description:
        'Extensão procedural da linguagem SQL para programas e pacotes de banco de dados.',
      longDescription:
        'PL/SQL adiciona blocos, variáveis, exceções, procedimentos, funções, pacotes e cursores à SQL do Oracle. Mantém a lógica do banco de dados próxima aos dados e ao comportamento transacional dentro do Oracle Database.\n\nÉ usado para procedimentos armazenados, scripts de migração, regras de negócios, trabalhos em lote, pacotes e aplicações de banco de dados empresariais construídas no Oracle.',
    },
  },
} satisfies Language;
