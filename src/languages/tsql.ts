import type { Language } from '../types';

export const tsql = {
  slug: 'tsql',
  publishedDate: '1989-01-01',
  extensions: ['.sql', '.tsql'],
  author: 'Sybase / Microsoft',
  website: 'https://learn.microsoft.com/en-us/sql/t-sql/language-reference',
  paradigms: ['procedural', 'declarative', 'database', 'imperative'],
  tooling: {
    runtimes: [
      'SQL Server',
      'Azure SQL Database',
      'Azure SQL Managed Instance',
      'Microsoft Fabric',
    ],
    ecosystems: ['Microsoft Data Platform', 'SQL Server', 'Azure'],
  },
  version: 'SQL Server 2025 (17.x)',
  logo: 'https://icons.iconarchive.com/icons/simpleicons-team/simple/128/microsoft-sqlserver-icon.png',
  color: '#CC2927',
  i18n: {
    en: {
      name: 'T-SQL',
      description:
        "Microsoft and Sybase's procedural SQL extension for SQL Server database programs.",
      longDescription:
        'Transact-SQL, commonly called T-SQL, extends SQL with procedural control flow, variables, error handling, stored procedures, functions, triggers, transactions, and SQL Server-specific data access features.\n\nIt is used to write queries, schema migrations, stored procedures, reporting logic, ETL scripts, administrative jobs, and application data logic across SQL Server, Azure SQL, and related Microsoft data platforms.',
    },
    es: {
      name: 'T-SQL',
      description:
        'La extension procedural de SQL de Microsoft y Sybase para programas de base de datos.',
      longDescription:
        'Transact-SQL, normalmente llamado T-SQL, extiende SQL con control de flujo procedural, variables, manejo de errores, stored procedures, funciones, triggers, transacciones y funciones especificas de SQL Server para acceso a datos.\n\nSe usa para escribir consultas, migraciones de esquema, stored procedures, logica de reportes, scripts ETL, tareas administrativas y logica de datos de aplicaciones en SQL Server, Azure SQL y plataformas de datos relacionadas de Microsoft.',
    },
    it: {
      name: 'T-SQL',
      description: 'Estensione procedurale di SQL di Microsoft e Sybase per programmi di database.',
      longDescription:
        "Transact-SQL, comunemente chiamato T-SQL, estende SQL con controllo di flusso procedurale, variabili, gestione degli errori, stored procedure, funzioni, trigger, transazioni e funzionalita specifiche di SQL Server per l'accesso ai dati.\n\nViene usato per scrivere query, migrazioni di schema, stored procedure, logica di report, script ETL, lavori amministrativi e logica dati applicativa su SQL Server, Azure SQL e piattaforme dati Microsoft correlate.",
    },
    fr: {
      name: 'T-SQL',
      description:
        'Extension procedurale de SQL de Microsoft et Sybase pour les programmes de base de donnees.',
      longDescription:
        "Transact-SQL, couramment appele T-SQL, etend SQL avec du controle de flux procedural, des variables, la gestion des erreurs, des procedures stockees, des fonctions, des declencheurs, des transactions et des fonctions propres a SQL Server pour l'acces aux donnees.\n\nIl est utilise pour ecrire des requetes, des migrations de schema, des procedures stockees, de la logique de rapports, des scripts ETL, des taches administratives et de la logique de donnees applicative sur SQL Server, Azure SQL et les plateformes de donnees Microsoft associees.",
    },
    de: {
      name: 'T-SQL',
      description: 'Prozedurale SQL-Erweiterung von Microsoft und Sybase fur Datenbankprogramme.',
      longDescription:
        'Transact-SQL, meist T-SQL genannt, erweitert SQL um prozedurale Ablaufsteuerung, Variablen, Fehlerbehandlung, gespeicherte Prozeduren, Funktionen, Trigger, Transaktionen und SQL-Server-spezifische Funktionen fur den Datenzugriff.\n\nEs wird fur Abfragen, Schemamigrationen, gespeicherte Prozeduren, Berichtlogik, ETL-Skripte, administrative Jobs und Anwendungsdatenlogik auf SQL Server, Azure SQL und verwandten Microsoft-Datenplattformen genutzt.',
    },
    pt: {
      name: 'T-SQL',
      description:
        'Extensao procedural de SQL da Microsoft e da Sybase para programas de banco de dados.',
      longDescription:
        'Transact-SQL, normalmente chamado de T-SQL, estende SQL com controle de fluxo procedural, variaveis, tratamento de erros, procedimentos armazenados, funcoes, gatilhos, transacoes e recursos especificos do SQL Server para acesso a dados.\n\nE usado para escrever consultas, migracoes de esquema, procedimentos armazenados, logica de relatorios, scripts ETL, tarefas administrativas e logica de dados de aplicacoes no SQL Server, Azure SQL e plataformas de dados relacionadas da Microsoft.',
    },
  },
} satisfies Language;
