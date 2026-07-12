import type { Language } from '@/types';

export const fql = {
  slug: 'fql',
  publishedDate: '2012-01-01',
  extensions: ['.fql'],
  author: 'Facebook',
  website: 'https://developers.facebook.com/docs/graph-api/',
  paradigms: ['query', 'declarative'],
  tooling: {
    runtimes: ['Facebook Platform'],
    ecosystems: ['Social APIs', 'Legacy web APIs'],
  },
  version: 'legacy',
  logo: 'https://cdn.simpleicons.org/facebook/1877F2',
  color: '#1877F2',
  i18n: {
    en: {
      name: 'FQL',
      description: 'A legacy SQL-like query language formerly used by Facebook Platform APIs.',
      longDescription:
        'Facebook Query Language was a SQL-like language for reading data from the Facebook social graph through older platform APIs. Queries selected fields from virtual tables representing users, pages, events, photos, and related objects.\n\nFQL is now mainly of historical interest, because Facebook replaced it with newer Graph API patterns. It remains useful to recognize in old integrations, archived examples, migrations, and documentation for legacy social applications.',
    },
    es: {
      name: 'FQL',
      description: 'Lenguaje de consultas legado tipo SQL usado antes por APIs de Facebook.',
      longDescription:
        'Facebook Query Language fue un lenguaje tipo SQL para leer datos del grafo social de Facebook mediante APIs antiguas de la plataforma. Las consultas seleccionaban campos de tablas virtuales que representaban usuarios, paginas, eventos, fotos y objetos relacionados.\n\nFQL hoy tiene interes sobre todo historico, porque Facebook lo reemplazo con patrones mas nuevos de Graph API. Sigue siendo util reconocerlo en integraciones viejas, ejemplos archivados, migraciones y documentacion de apps sociales legadas.',
    },
    it: {
      name: 'FQL',
      description: 'Linguaggio di query legacy simile a SQL usato dalle vecchie API Facebook.',
      longDescription:
        'Facebook Query Language era un linguaggio simile a SQL per leggere dati dal grafo sociale di Facebook tramite vecchie API della piattaforma. Le query selezionavano campi da tabelle virtuali che rappresentavano utenti, pagine, eventi, foto e oggetti correlati.\n\nFQL oggi ha soprattutto valore storico, perche Facebook lo ha sostituito con pattern piu nuovi della Graph API. Rimane utile riconoscerlo in integrazioni vecchie, esempi archiviati, migrazioni e documentazione di applicazioni social legacy.',
    },
    fr: {
      name: 'FQL',
      description: 'Ancien langage de requete proche de SQL utilise par les API Facebook.',
      longDescription:
        'Facebook Query Language etait un langage proche de SQL pour lire les donnees du graphe social Facebook via les anciennes API de la plateforme. Les requetes selectionnaient des champs dans des tables virtuelles representant utilisateurs, pages, evenements, photos et objets lies.\n\nFQL a surtout un interet historique, car Facebook l a remplace par des modeles plus recents de Graph API. Il reste utile a reconnaitre dans anciennes integrations, exemples archives, migrations et docs d applications sociales leguees.',
    },
    de: {
      name: 'FQL',
      description: 'Alte SQL-ahnliche Abfragesprache fruherer Facebook-Platform-APIs.',
      longDescription:
        'Facebook Query Language war eine SQL-ahnliche Sprache zum Lesen von Daten aus dem sozialen Graphen von Facebook uber altere Platform-APIs. Abfragen wahlten Felder aus virtuellen Tabellen fur Nutzer, Seiten, Events, Fotos und verwandte Objekte.\n\nFQL ist heute vor allem historisch relevant, weil Facebook es durch neuere Graph-API-Muster ersetzt hat. Es bleibt nutzlich in alten Integrationen, archivierten Beispielen, Migrationen und Dokumentation fur Legacy-Social-Apps.',
    },
    pt: {
      name: 'FQL',
      description: 'Linguagem de consulta legada parecida com SQL usada por APIs do Facebook.',
      longDescription:
        'Facebook Query Language foi uma linguagem parecida com SQL para ler dados do grafo social do Facebook por APIs antigas da plataforma. Consultas selecionavam campos de tabelas virtuais que representavam usuarios, paginas, eventos, fotos e objetos relacionados.\n\nFQL hoje tem valor principalmente historico, pois o Facebook o substituiu por padroes mais novos da Graph API. Ainda e util reconhece-lo em integracoes antigas, exemplos arquivados, migracoes e documentacao de apps sociais legados.',
    },
  },
} satisfies Language;
