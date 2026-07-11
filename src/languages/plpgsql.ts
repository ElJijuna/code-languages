import type { Language } from '@/types';

export const plpgsql = {
  slug: 'plpgsql',
  publishedDate: '1997-01-01',
  extensions: ['.pgsql', '.plpgsql'],
  author: 'PostgreSQL Global Development Group',
  website: 'https://www.postgresql.org/docs/current/plpgsql.html',
  paradigms: ['procedural', 'database'],
  tooling: {
    runtimes: ['PostgreSQL'],
    ecosystems: ['Relational databases', 'Stored procedures'],
  },
  version: 'stable',
  logo: 'https://cdn.simpleicons.org/postgresql/4169E1',
  color: '#4169E1',
  i18n: {
    en: {
      name: 'PL/pgSQL',
      description: 'PostgreSQL procedural language for functions, triggers, and stored logic.',
      longDescription:
        'PL/pgSQL is PostgreSQLs procedural language for writing functions, trigger procedures, and server-side business logic. It combines SQL statements with variables, control flow, cursors, error handling, records, and dynamic execution.\n\nThe language is used when logic should run close to relational data, inside transactions, or behind database APIs. It supports validation, auditing, data transformation, maintenance jobs, and performance-sensitive routines that benefit from avoiding client round trips.',
    },
    es: {
      name: 'PL/pgSQL',
      description:
        'Lenguaje procedural de PostgreSQL para funciones, triggers y logica almacenada.',
      longDescription:
        'PL/pgSQL es el lenguaje procedural de PostgreSQL para escribir funciones, procedimientos de trigger y logica de negocio del lado servidor. Combina sentencias SQL con variables, control de flujo, cursores, manejo de errores, registros y ejecucion dinamica.\n\nEl lenguaje se usa cuando la logica debe correr cerca de datos relacionales, dentro de transacciones o detras de APIs de base de datos. Soporta validacion, auditoria, transformacion de datos, tareas de mantenimiento y rutinas sensibles a rendimiento que evitan viajes al cliente.',
    },
    it: {
      name: 'PL/pgSQL',
      description: 'Linguaggio procedurale PostgreSQL per funzioni, trigger e logica salvata.',
      longDescription:
        'PL/pgSQL e il linguaggio procedurale di PostgreSQL per scrivere funzioni, procedure trigger e logica business lato server. Combina istruzioni SQL con variabili, controllo di flusso, cursori, gestione errori, record ed esecuzione dinamica.\n\nIl linguaggio e usato quando la logica deve girare vicino ai dati relazionali, dentro transazioni o dietro API database. Supporta validazione, auditing, trasformazione dati, job di manutenzione e routine sensibili alle prestazioni che evitano round trip al client.',
    },
    fr: {
      name: 'PL/pgSQL',
      description: 'Langage procedural PostgreSQL pour fonctions, triggers et logique stockee.',
      longDescription:
        'PL/pgSQL est le langage procedural de PostgreSQL pour ecrire fonctions, procedures de trigger et logique metier cote serveur. Il combine instructions SQL avec variables, controle de flux, curseurs, gestion d erreurs, enregistrements et execution dynamique.\n\nLe langage est utilise quand la logique doit tourner pres des donnees relationnelles, dans des transactions ou derriere des API de base de donnees. Il sert a validation, audit, transformation de donnees, maintenance et routines sensibles aux performances.',
    },
    de: {
      name: 'PL/pgSQL',
      description: 'Prozedurale PostgreSQL-Sprache fur Funktionen, Trigger und gespeicherte Logik.',
      longDescription:
        'PL/pgSQL ist die prozedurale Sprache von PostgreSQL fur Funktionen, Trigger-Prozeduren und serverseitige Geschaftslogik. Sie kombiniert SQL-Anweisungen mit Variablen, Kontrollfluss, Cursorn, Fehlerbehandlung, Records und dynamischer Ausfuhrung.\n\nDie Sprache wird genutzt, wenn Logik nahe an relationalen Daten, innerhalb von Transaktionen oder hinter Datenbank-APIs laufen soll. Sie unterstutzt Validierung, Auditing, Datentransformation, Wartungsjobs und performanzkritische Routinen mit weniger Client-Roundtrips.',
    },
    pt: {
      name: 'PL/pgSQL',
      description: 'Linguagem procedural do PostgreSQL para funcoes, triggers e logica armazenada.',
      longDescription:
        'PL/pgSQL e a linguagem procedural do PostgreSQL para escrever funcoes, procedimentos de trigger e logica de negocio no servidor. Ela combina comandos SQL com variaveis, controle de fluxo, cursores, tratamento de erros, registros e execucao dinamica.\n\nA linguagem e usada quando a logica deve rodar perto dos dados relacionais, dentro de transacoes ou atras de APIs de banco. Suporta validacao, auditoria, transformacao de dados, tarefas de manutencao e rotinas sensiveis a desempenho que evitam idas ao cliente.',
    },
  },
} satisfies Language;
