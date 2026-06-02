import type { Language } from '../types';

export const kcl = {
  slug: 'kcl',
  publishedDate: '2022-10-01',
  extensions: ['.k', '.kcl'],
  author: 'KusionStack Team (Ant Group)',
  website: 'https://kcl-lang.io',
  paradigms: ['declarative', 'functional'],
  tooling: {
    runtimes: ['kcl CLI'],
    packageManagers: ['kcl mod'],
    ecosystems: ['Configuration', 'Kubernetes', 'Cloud Native', 'Infrastructure as Code'],
  },
  version: '0.11.0',
  logo: 'https://avatars.githubusercontent.com/u/121281745?v=4',
  color: '#4A90D9',
  i18n: {
    en: {
      name: 'KCL',
      description:
        'An open-source constraint-based configuration and policy language for cloud-native applications, with a Python-like syntax and built-in validation.',
      longDescription:
        "KCL (Kusion Configuration Language) is an open-source declarative configuration and policy language developed by Ant Group's KusionStack team. It is designed to improve the writing of complex configurations, particularly for Kubernetes and cloud-native infrastructure.\n\nKCL features a Python-like syntax with strong typing, schema definitions, lambda functions, and built-in validation through constraint expressions. It supports config composition and override operations, allowing teams to manage large-scale configurations with clear inheritance and merging semantics. KCL integrates with Helm, Kustomize, and Crossplane, and can generate Kubernetes manifests, Terraform configurations, and other infrastructure-as-code outputs.",
    },
    es: {
      name: 'KCL',
      description:
        'Un lenguaje de configuración y políticas declarativo de código abierto para aplicaciones cloud-native, con sintaxis similar a Python y validación incorporada.',
      longDescription:
        'KCL (Kusion Configuration Language) es un lenguaje declarativo de código abierto desarrollado por el equipo KusionStack de Ant Group. Está diseñado para mejorar la escritura de configuraciones complejas, especialmente para Kubernetes e infraestructura cloud-native.\n\nKCL tiene una sintaxis similar a Python con tipado fuerte, definiciones de schema, funciones lambda y validación integrada mediante expresiones de restricciones. Soporta composición y anulación de configuraciones, y se integra con Helm, Kustomize y Crossplane.',
    },
    it: {
      name: 'KCL',
      description:
        'Un linguaggio dichiarativo open-source per configurazione e policy di applicazioni cloud-native, con sintassi simile a Python e validazione integrata.',
      longDescription:
        "KCL (Kusion Configuration Language) è un linguaggio dichiarativo open source sviluppato dal team KusionStack di Ant Group. È progettato per migliorare la scrittura di configurazioni complesse, in particolare per Kubernetes e l'infrastruttura cloud-native.\n\nKCL ha una sintassi simile a Python con tipizzazione forte, definizioni di schema, funzioni lambda e validazione integrata tramite espressioni di vincolo. Supporta la composizione e l'override delle configurazioni, e si integra con Helm, Kustomize e Crossplane.",
    },
    fr: {
      name: 'KCL',
      description:
        'Langage déclaratif open-source pour configurer les applications cloud-native, avec une syntaxe proche de Python et une validation intégrée.',
      longDescription:
        "KCL (Kusion Configuration Language) est un langage déclaratif open source développé par l'équipe KusionStack d'Ant Group. Il est conçu pour améliorer l'écriture de configurations complexes, notamment pour Kubernetes et l'infrastructure cloud-native.\n\nKCL possède une syntaxe proche de Python avec un typage fort, des définitions de schémas, des fonctions lambda et une validation intégrée via des expressions de contraintes. Il supporte la composition et la substitution de configurations, et s'intègre avec Helm, Kustomize et Crossplane.",
    },
    de: {
      name: 'KCL',
      description:
        'Eine deklarative Open-Source-Konfigurations- und Richtliniensprache für Cloud-native Anwendungen mit Python-ähnlicher Syntax und integrierter Validierung.',
      longDescription:
        'KCL (Kusion Configuration Language) ist eine deklarative Open-Source-Sprache, die vom KusionStack-Team bei Ant Group entwickelt wurde. Sie ist darauf ausgelegt, das Schreiben komplexer Konfigurationen zu verbessern, insbesondere für Kubernetes und Cloud-native Infrastruktur.\n\nKCL bietet eine Python-ähnliche Syntax mit starkem Typsystem, Schema-Definitionen, Lambda-Funktionen und eingebauter Validierung durch Constraint-Ausdrücke. Es unterstützt Konfigurationskomposition und -überschreibung und integriert sich mit Helm, Kustomize und Crossplane.',
    },
    pt: {
      name: 'KCL',
      description:
        'Uma linguagem declarativa open-source de configuração e políticas para aplicações cloud-native, com sintaxe similar ao Python e validação integrada.',
      longDescription:
        'KCL (Kusion Configuration Language) é uma linguagem declarativa open source desenvolvida pela equipe KusionStack do Ant Group. É projetada para melhorar a escrita de configurações complexas, especialmente para Kubernetes e infraestrutura cloud-native.\n\nKCL possui uma sintaxe similar ao Python com tipagem forte, definições de schema, funções lambda e validação integrada por meio de expressões de restrição. Suporta composição e substituição de configurações, e se integra com Helm, Kustomize e Crossplane.',
    },
  },
} satisfies Language;
