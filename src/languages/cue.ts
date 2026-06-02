import type { Language } from '../types';

export const cue = {
  slug: 'cue',
  publishedDate: '2019-02-27',
  extensions: ['.cue'],
  author: 'Marcel van Lohuizen / CUE contributors',
  website: 'https://cue.dev',
  paradigms: ['declarative', 'constraint-based', 'data-validation', 'configuration'],
  tooling: {
    runtimes: ['CUE CLI', 'Go'],
    packageManagers: ['Go modules'],
    ecosystems: ['Configuration', 'Validation', 'Kubernetes', 'DevOps'],
  },
  version: '0.16.1',
  logo: 'https://avatars.githubusercontent.com/u/43867057?s=200&v=4',
  color: '#1F6BFF',
  i18n: {
    en: {
      name: 'CUE',
      description:
        'A constraint-based language for configuration, data validation, and generation.',
      longDescription:
        'CUE combines configuration data, schemas, validation rules, and policy constraints in one language. Its values can be incomplete, unified, exported, and checked against structural constraints, making it useful for managing complex data definitions.\n\nIt is used with Kubernetes manifests, JSON, YAML, OpenAPI, Protobuf, CI configuration, infrastructure definitions, and systems that need one source of truth for data shape and validation.',
    },
    es: {
      name: 'CUE',
      description:
        'Un lenguaje basado en restricciones para configuracion, validacion y generacion de datos.',
      longDescription:
        'CUE combina datos de configuracion, esquemas, reglas de validacion y restricciones de politica en un solo lenguaje. Sus valores pueden estar incompletos, unificarse, exportarse y comprobarse contra restricciones estructurales, lo que ayuda a gestionar definiciones de datos complejas.\n\nSe usa con manifiestos Kubernetes, JSON, YAML, OpenAPI, Protobuf, configuracion de CI, definiciones de infraestructura y sistemas que necesitan una fuente unica para forma y validacion de datos.',
    },
    it: {
      name: 'CUE',
      description:
        'Un linguaggio basato su vincoli per la configurazione, la validazione dei dati e la generazione.',
      longDescription:
        'CUE combina i dati di configurazione, gli schemi, le regole di validazione e i vincoli di policy in un unico linguaggio. I suoi valori possono essere incompleti, unificati, esportati e controllati rispetto a vincoli strutturali, rendendolo utile per la gestione di definizioni di dati complesse.\n\nViene utilizzato con manifesti Kubernetes, JSON, YAML, OpenAPI, Protobuf, configurazioni CI, definizioni di infrastruttura e sistemi che necessitano di una singola fonte di verita per la forma e la validazione dei dati.',
    },
    fr: {
      name: 'CUE',
      description:
        'Un langage base sur des contraintes pour la configuration, la validation des donnees et la generation.',
      longDescription:
        "CUE combine les donnees de configuration, les schemas, les regles de validation et les contraintes de politique dans un seul langage. Ses valeurs peuvent etre incompletes, unifiees, exportees et verifiees par rapport a des contraintes structurelles, ce qui le rend utile pour gerer des definitions de donnees complexes.\n\nIl est utilise avec les manifests Kubernetes, JSON, YAML, OpenAPI, Protobuf, la configuration CI, les definitions d'infrastructure et les systemes qui ont besoin d'une source unique de verite pour la forme et la validation des donnees.",
    },
    de: {
      name: 'CUE',
      description:
        'Eine constraint-basierte Sprache f\u00fcr Konfiguration, Datenvalidierung und -generierung.',
      longDescription:
        'CUE kombiniert Konfigurationsdaten, Schemas, Validierungsregeln und Richtlinien in einer einzigen Sprache. Ihre Werte k\u00f6nnen unvollst\u00e4ndig, vereinheitlicht, exportiert und anhand von strukturellen Einschr\u00e4nkungen \u00fcberpr\u00fcft werden, was sie f\u00fcr die Verwaltung komplexer Datendefinitionen n\u00fctzlich macht.\n\nEs wird mit Kubernetes-Manifesten, JSON, YAML, OpenAPI, Protobuf, CI-Konfigurationen, Infrastrukturdefinitionen und Systemen verwendet, die eine einzige Quelle f\u00fcr die Datenstruktur und -validierung ben\u00f6tigen.',
    },
    pt: {
      name: 'CUE',
      description:
        'Linguagem baseada em restri\u00e7\u00f5es para configura\u00e7\u00e3o, valida\u00e7\u00e3o e gera\u00e7\u00e3o de dados.',
      longDescription:
        'CUE combina dados de configura\u00e7\u00e3o, esquemas, regras de valida\u00e7\u00e3o e restri\u00e7\u00f5es de pol\u00edtica em uma \u00fanica linguagem. Seus valores podem ser incompletos, unificados, exportados e verificados contra restri\u00e7\u00f5es estruturais, tornando-o \u00fatil para gerenciar defini\u00e7\u00f5es de dados complexas.\n\n\u00c9 usado com manifests do Kubernetes, JSON, YAML, OpenAPI, Protobuf, configura\u00e7\u00e3o de CI, defini\u00e7\u00f5es de infraestrutura e sistemas que precisam de uma \u00fanica fonte de verdade para a forma e valida\u00e7\u00e3o dos dados.',
    },
  },
} satisfies Language;
