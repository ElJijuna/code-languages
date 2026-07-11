import type { Language } from '@/types';

export const soql = {
  slug: 'soql',
  publishedDate: '2005-01-01',
  extensions: ['.soql'],
  author: 'Salesforce',
  website: 'https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/',
  paradigms: ['query', 'declarative'],
  tooling: {
    runtimes: ['Salesforce Platform'],
    ecosystems: ['CRM', 'Apex'],
  },
  version: 'stable',
  logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Salesforce.com_logo.svg',
  color: '#00A1E0',
  i18n: {
    en: {
      name: 'SOQL',
      description: 'Salesforce Object Query Language for reading records from Salesforce data.',
      longDescription:
        'Salesforce Object Query Language is used to retrieve records from Salesforce objects. It selects fields, filters rows, traverses relationships, orders results, aggregates data, and feeds Apex code, APIs, reports, and integrations.\n\nSOQL resembles SQL, but it is shaped by Salesforce metadata, object relationships, governor limits, sharing rules, and multi-tenant execution. It is central to custom Salesforce apps, admin automation, data migration, and CRM integrations.',
    },
    es: {
      name: 'SOQL',
      description: 'Salesforce Object Query Language para leer registros de datos Salesforce.',
      longDescription:
        'Salesforce Object Query Language se usa para recuperar registros de objetos Salesforce. Selecciona campos, filtra filas, recorre relaciones, ordena resultados, agrega datos y alimenta codigo Apex, APIs, reportes e integraciones.\n\nSOQL se parece a SQL, pero esta moldeado por metadatos Salesforce, relaciones entre objetos, limites de gobernador, reglas de comparticion y ejecucion multi-tenant. Es central en apps Salesforce personalizadas, automatizacion admin, migracion de datos e integraciones CRM.',
    },
    it: {
      name: 'SOQL',
      description: 'Salesforce Object Query Language per leggere record dai dati Salesforce.',
      longDescription:
        'Salesforce Object Query Language e usato per recuperare record dagli oggetti Salesforce. Seleziona campi, filtra righe, attraversa relazioni, ordina risultati, aggrega dati e alimenta codice Apex, API, report e integrazioni.\n\nSOQL assomiglia a SQL, ma e modellato da metadati Salesforce, relazioni tra oggetti, governor limit, regole di condivisione ed esecuzione multi-tenant. E centrale in app Salesforce custom, automazione admin, migrazione dati e integrazioni CRM.',
    },
    fr: {
      name: 'SOQL',
      description: 'Salesforce Object Query Language pour lire des enregistrements Salesforce.',
      longDescription:
        'Salesforce Object Query Language sert a recuperer des enregistrements depuis les objets Salesforce. Il selectionne des champs, filtre des lignes, traverse relations, trie resultats, agrege donnees et alimente code Apex, API, rapports et integrations.\n\nSOQL ressemble a SQL, mais il est modele par metadonnees Salesforce, relations d objets, governor limits, regles de partage et execution multi-tenant. Il est central dans apps Salesforce personnalisees, automatisation admin, migrations de donnees et integrations CRM.',
    },
    de: {
      name: 'SOQL',
      description: 'Salesforce Object Query Language zum Lesen von Salesforce-Datensatzen.',
      longDescription:
        'Salesforce Object Query Language wird genutzt, um Datensatze aus Salesforce-Objekten abzurufen. Sie wahlt Felder, filtert Zeilen, folgt Beziehungen, sortiert Ergebnisse, aggregiert Daten und versorgt Apex-Code, APIs, Reports und Integrationen.\n\nSOQL ahnelt SQL, wird aber durch Salesforce-Metadaten, Objektbeziehungen, Governor Limits, Sharing-Regeln und Multi-Tenant-Ausfuhrung gepragt. Es ist zentral fur angepasste Salesforce-Apps, Admin-Automation, Datenmigration und CRM-Integrationen.',
    },
    pt: {
      name: 'SOQL',
      description: 'Salesforce Object Query Language para ler registros de dados Salesforce.',
      longDescription:
        'Salesforce Object Query Language e usada para recuperar registros de objetos Salesforce. Ela seleciona campos, filtra linhas, atravessa relacionamentos, ordena resultados, agrega dados e alimenta codigo Apex, APIs, relatorios e integracoes.\n\nSOQL lembra SQL, mas e moldada por metadados Salesforce, relacionamentos entre objetos, governor limits, regras de compartilhamento e execucao multi-tenant. E central em apps Salesforce customizados, automacao admin, migracao de dados e integracoes CRM.',
    },
  },
} satisfies Language;
