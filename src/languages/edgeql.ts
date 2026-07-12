import type { Language } from '@/types';

export const edgeql = {
  slug: 'edgeql',
  aliases: ['gel'],
  publishedDate: '2022-02-10',
  extensions: ['.edgeql'],
  author: 'EdgeDB (Gel Data)',
  website: 'https://www.geldata.com',
  paradigms: ['declarative', 'functional', 'query'],
  tooling: {
    runtimes: ['Gel', 'EdgeDB'],
    ecosystems: ['Databases'],
  },
  version: 'Gel 6',
  logo: 'https://avatars.githubusercontent.com/u/200293856?v=4',
  color: '#6963FF',
  i18n: {
    en: {
      name: 'EdgeQL',
      description: 'The composable query language of the Gel (formerly EdgeDB) graph-relational database.',
      longDescription:
        'EdgeQL is the query language of Gel (formerly EdgeDB), a database that layers an object-and-link data model over PostgreSQL. Queries traverse relationships with paths instead of joins, nest naturally to return structured results, and compose like expressions rather than statements.\n\nBacked by a strict type system and a migration-aware schema language, EdgeQL eliminates common ORM problems — N+1 queries, impedance mismatch — while retaining the reliability of PostgreSQL underneath.',
    },
    es: {
      name: 'EdgeQL',
      description: 'El lenguaje de consultas componible de la base de datos grafo-relacional Gel (antes EdgeDB).',
      longDescription:
        'EdgeQL es el lenguaje de consultas de Gel (antes EdgeDB), una base de datos que superpone un modelo de objetos y enlaces sobre PostgreSQL. Las consultas recorren relaciones con rutas en lugar de joins, se anidan de forma natural para devolver resultados estructurados y se componen como expresiones y no como sentencias.\n\nRespaldado por un sistema de tipos estricto y un lenguaje de esquemas con migraciones, EdgeQL elimina problemas comunes de los ORM — consultas N+1, desajuste de impedancia — conservando la fiabilidad de PostgreSQL por debajo.',
    },
    it: {
      name: 'EdgeQL',
      description: 'Il linguaggio di query componibile del database grafo-relazionale Gel (ex EdgeDB).',
      longDescription:
        'EdgeQL è il linguaggio di query di Gel (ex EdgeDB), un database che sovrappone un modello di oggetti e collegamenti a PostgreSQL. Le query attraversano le relazioni con percorsi invece di join, si annidano naturalmente per restituire risultati strutturati e si compongono come espressioni anziché istruzioni.\n\nSostenuto da un sistema di tipi rigoroso e da un linguaggio di schema con migrazioni, EdgeQL elimina i problemi comuni degli ORM — query N+1, disallineamento di impedenza — mantenendo sotto l\'affidabilità di PostgreSQL.',
    },
    fr: {
      name: 'EdgeQL',
      description: 'Le langage de requête composable de la base graphe-relationnelle Gel (ex-EdgeDB).',
      longDescription:
        "EdgeQL est le langage de requête de Gel (anciennement EdgeDB), une base de données qui superpose un modèle d'objets et de liens à PostgreSQL. Les requêtes parcourent les relations par des chemins plutôt que des jointures, s'imbriquent naturellement pour renvoyer des résultats structurés et se composent comme des expressions plutôt que des instructions.\n\nAdossé à un système de types strict et à un langage de schéma avec migrations, EdgeQL élimine les problèmes courants des ORM — requêtes N+1, désadaptation d'impédance — tout en conservant la fiabilité de PostgreSQL en dessous.",
    },
    de: {
      name: 'EdgeQL',
      description: 'Die komponierbare Abfragesprache der graph-relationalen Datenbank Gel (früher EdgeDB).',
      longDescription:
        'EdgeQL ist die Abfragesprache von Gel (früher EdgeDB), einer Datenbank, die ein Objekt-und-Link-Datenmodell über PostgreSQL legt. Abfragen folgen Beziehungen über Pfade statt Joins, verschachteln sich natürlich zu strukturierten Ergebnissen und komponieren wie Ausdrücke statt wie Anweisungen.\n\nGestützt auf ein striktes Typsystem und eine migrationsbewusste Schemasprache beseitigt EdgeQL typische ORM-Probleme — N+1-Abfragen, Impedanz-Missverhältnis — und behält darunter die Zuverlässigkeit von PostgreSQL.',
    },
    pt: {
      name: 'EdgeQL',
      description: 'A linguagem de consulta componível do banco grafo-relacional Gel (antes EdgeDB).',
      longDescription:
        'EdgeQL é a linguagem de consulta do Gel (antes EdgeDB), um banco de dados que sobrepõe um modelo de objetos e vínculos ao PostgreSQL. As consultas percorrem relacionamentos com caminhos em vez de joins, aninham-se naturalmente para retornar resultados estruturados e compõem-se como expressões em vez de comandos.\n\nApoiado por um sistema de tipos estrito e uma linguagem de esquema com migrações, o EdgeQL elimina problemas comuns de ORMs — consultas N+1, descasamento de impedância — mantendo por baixo a confiabilidade do PostgreSQL.',
    },
  },
} satisfies Language;
