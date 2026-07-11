import type { Language } from '@/types';

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
  version: '0.17.0',
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
        'Eine constraint-basierte Sprache für Konfiguration, Datenvalidierung und -generierung.',
      longDescription:
        'CUE kombiniert Konfigurationsdaten, Schemas, Validierungsregeln und Richtlinien in einer einzigen Sprache. Ihre Werte können unvollständig, vereinheitlicht, exportiert und anhand von strukturellen Einschränkungen überprüft werden, was sie für die Verwaltung komplexer Datendefinitionen nützlich macht.\n\nEs wird mit Kubernetes-Manifesten, JSON, YAML, OpenAPI, Protobuf, CI-Konfigurationen, Infrastrukturdefinitionen und Systemen verwendet, die eine einzige Quelle für die Datenstruktur und -validierung benötigen.',
    },
    pt: {
      name: 'CUE',
      description:
        'Linguagem baseada em restrições para configuração, validação e geração de dados.',
      longDescription:
        'CUE combina dados de configuração, esquemas, regras de validação e restrições de política em uma única linguagem. Seus valores podem ser incompletos, unificados, exportados e verificados contra restrições estruturais, tornando-o útil para gerenciar definições de dados complexas.\n\nÉ usado com manifests do Kubernetes, JSON, YAML, OpenAPI, Protobuf, configuração de CI, definições de infraestrutura e sistemas que precisam de uma única fonte de verdade para a forma e validação dos dados.',
    },
  },
} satisfies Language;
