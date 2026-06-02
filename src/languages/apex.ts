import type { Language } from '../types';

export const apex = {
  slug: 'apex',
  publishedDate: '2007-01-01',
  extensions: ['.cls', '.trigger'],
  author: 'Salesforce',
  website: 'https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/',
  paradigms: ['object-oriented', 'cloud', 'database-oriented', 'event-driven'],
  tooling: {
    runtimes: ['Salesforce Platform'],
    packageManagers: ['Salesforce CLI', 'Unlocked Packages', 'Managed Packages'],
    ecosystems: ['Salesforce', 'CRM', 'Enterprise Applications', 'Platform Automation'],
  },
  version: 'API 66.0',
  logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Salesforce.com_logo.svg',
  color: '#00A1E0',
  i18n: {
    en: {
      name: 'Apex',
      description:
        "Salesforce's strongly typed, object-oriented language for platform business logic.",
      longDescription:
        'Apex is a strongly typed, object-oriented programming language that runs on the Salesforce Platform. It combines Java-like syntax with platform-specific database operations, triggers, asynchronous jobs, governor limits, sharing rules, and integrations with Salesforce metadata and APIs.\n\nIt is used for CRM customizations, business automation, custom controllers, data validation, integrations, batch processing, platform events, and enterprise applications built inside Salesforce.',
    },
    es: {
      name: 'Apex',
      description:
        'El lenguaje fuertemente tipado y orientado a objetos de Salesforce para logica de negocio en la plataforma.',
      longDescription:
        'Apex es un lenguaje de programacion fuertemente tipado y orientado a objetos que corre en Salesforce Platform. Combina sintaxis similar a Java con operaciones de base de datos propias de la plataforma, triggers, trabajos asincronos, governor limits, reglas de sharing e integraciones con metadata y APIs de Salesforce.\n\nSe usa para personalizaciones de CRM, automatizacion de negocio, controladores personalizados, validacion de datos, integraciones, procesamiento batch, platform events y aplicaciones empresariales construidas dentro de Salesforce.',
    },
    it: {
      name: 'Apex',
      description:
        'Linguaggio fortemente tipizzato, orientato agli oggetti di Salesforce per la logica aziendale della piattaforma.',
      longDescription:
        "Apex e un linguaggio di programmazione fortemente tipizzato, orientato agli oggetti che viene eseguito sulla piattaforma Salesforce. Combina la sintassi simile a Java con operazioni specifiche della piattaforma, trigger, lavori asincroni, limiti di governance, regole di condivisione e integrazioni con i metadati e le API di Salesforce.\n\nViene utilizzato per la personalizzazione di CRM, l'automazione aziendale, controller personalizzati, validazione dei dati, integrazioni, elaborazione batch, eventi della piattaforma e applicazioni aziendali costruite all'interno di Salesforce.",
    },
    fr: {
      name: 'Apex',
      description:
        'Langage fortement type, oriente objet de Salesforce pour la logique metier de la plateforme.',
      longDescription:
        "Apex est un langage de programmation fortement type, oriente objet qui fonctionne sur la plateforme Salesforce. Il combine une syntaxe semblable a Java avec des operations de base de donnees specifiques a la plateforme, des declencheurs, des taches asynchrones, des limites de gouvernance, des regles de partage et des integrations avec les metadonnees et les API de Salesforce.\n\nIl est utilise pour les personnalisations CRM, l'automatisation des processus, les controleurs personnalises, la validation des donnees, les integrations, le traitement par lots, les evenements de la plateforme et les applications d'entreprise construites dans Salesforce.",
    },
    de: {
      name: 'Apex',
      description:
        'Stark typisierte, objektorientierte Programmiersprache f\u00fcr Gesch\u00e4ftslogik auf der Salesforce-Plattform.',
      longDescription:
        'Apex ist eine stark typisierte, objektorientierte Programmiersprache, die auf der Salesforce-Plattform ausgef\u00fchrt wird. Sie kombiniert Java-\u00e4hnliche Syntax mit plattformspezifischen Datenbankoperationen, Triggern, asynchronen Jobs, Governor Limits, Sharing Rules und Integrationen mit Salesforce-Metadaten und APIs.\n\nSie wird f\u00fcr CRM-Anpassungen, Gesch\u00e4ftsprozessautomatisierung, benutzerdefinierte Controller, Datenvalidierung, Integrationen, Batch-Verarbeitung, Plattformereignisse und Unternehmensanwendungen, die innerhalb von Salesforce erstellt werden, verwendet.',
    },
    pt: {
      name: 'Apex',
      description:
        'Linguagem fortemente tipada do Salesforce para l\u00f3gica de neg\u00f3cios da plataforma.',
      longDescription:
        'Apex \u00e9 uma linguagem de programa\u00e7\u00e3o fortemente tipada e orientada a objetos que executa na Plataforma Salesforce. Combina a sintaxe semelhante \u00e0 Java com opera\u00e7\u00f5es de banco de dados espec\u00edficas da plataforma, gatilhos, tarefas ass\u00edncronas, limites de governan\u00e7a, regras de compartilhamento e integra\u00e7\u00e3o com metadados e APIs do Salesforce.\n\n\u00c9 usada para personaliza\u00e7\u00f5es de CRM, automa\u00e7\u00e3o de neg\u00f3cios, controladores personalizados, valida\u00e7\u00e3o de dados, integra\u00e7\u00e3o, processamento em lote, eventos da plataforma e aplicativos empresariais constru\u00eddos dentro do Salesforce.',
    },
  },
} satisfies Language;
