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
        'Stark typisierte, objektorientierte Programmiersprache für Geschäftslogik auf der Salesforce-Plattform.',
      longDescription:
        'Apex ist eine stark typisierte, objektorientierte Programmiersprache, die auf der Salesforce-Plattform ausgeführt wird. Sie kombiniert Java-ähnliche Syntax mit plattformspezifischen Datenbankoperationen, Triggern, asynchronen Jobs, Governor Limits, Sharing Rules und Integrationen mit Salesforce-Metadaten und APIs.\n\nSie wird für CRM-Anpassungen, Geschäftsprozessautomatisierung, benutzerdefinierte Controller, Datenvalidierung, Integrationen, Batch-Verarbeitung, Plattformereignisse und Unternehmensanwendungen, die innerhalb von Salesforce erstellt werden, verwendet.',
    },
    pt: {
      name: 'Apex',
      description:
        'Linguagem fortemente tipada do Salesforce para lógica de negócios da plataforma.',
      longDescription:
        'Apex é uma linguagem de programação fortemente tipada e orientada a objetos que executa na Plataforma Salesforce. Combina a sintaxe semelhante à Java com operações de banco de dados específicas da plataforma, gatilhos, tarefas assíncronas, limites de governança, regras de compartilhamento e integração com metadados e APIs do Salesforce.\n\nÉ usada para personalizações de CRM, automação de negócios, controladores personalizados, validação de dados, integração, processamento em lote, eventos da plataforma e aplicativos empresariais construídos dentro do Salesforce.',
    },
  },
} satisfies Language;
