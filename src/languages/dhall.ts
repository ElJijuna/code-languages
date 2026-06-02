import type { Language } from '../types';

export const dhall = {
  slug: 'dhall',
  publishedDate: '2016-12-22',
  extensions: ['.dhall'],
  author: 'Gabriel Gonzalez',
  website: 'https://dhall-lang.org',
  paradigms: ['functional', 'declarative', 'statically typed', 'configuration'],
  tooling: {
    runtimes: ['dhall'],
    packageManagers: ['Cabal', 'Stack', 'Nix'],
    ecosystems: ['Configuration', 'Haskell', 'DevOps'],
  },
  version: '23.1.0',
  logo: 'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_dhall.svg',
  color: '#184A7D',
  i18n: {
    en: {
      name: 'Dhall',
      description: 'A programmable, typed configuration language that normalizes safely.',
      longDescription:
        'Dhall is a programmable configuration language with a strong static type system, imports, functions, records, and guaranteed normalization. It is designed to replace repetitive JSON, YAML, and similar configuration formats with reusable typed expressions.\n\nIt is used for infrastructure configuration, application settings, generated YAML or JSON, and systems that need shared configuration without arbitrary code execution.',
    },
    es: {
      name: 'Dhall',
      description: 'Un lenguaje de configuracion programable, tipado y de normalizacion segura.',
      longDescription:
        'Dhall es un lenguaje de configuracion programable con un sistema de tipos estatico fuerte, imports, funciones, registros y normalizacion garantizada. Esta disenado para reemplazar JSON, YAML y formatos similares repetitivos con expresiones tipadas reutilizables.\n\nSe usa en configuracion de infraestructura, ajustes de aplicaciones, generacion de YAML o JSON y sistemas que necesitan configuracion compartida sin ejecucion arbitraria de codigo.',
    },
    it: {
      name: 'Dhall',
      description:
        'Un linguaggio di configurazione programmabile e tipizzato che normalizza in modo sicuro.',
      longDescription:
        "Dhall e un linguaggio di configurazione programmabile con un robusto sistema di tipi statici, importazioni, funzioni, record e normalizzazione garantita. E progettato per sostituire formati di configurazione ripetitivi come JSON, YAML e simili, con espressioni tipizzate riutilizzabili.\n\nViene utilizzato per la configurazione dell'infrastruttura, le impostazioni delle applicazioni, la generazione di YAML o JSON e sistemi che richiedono una configurazione condivisa senza l'esecuzione arbitraria di codice.",
    },
    fr: {
      name: 'Dhall',
      description:
        'Un langage de configuration programmable et type qui normalise en toute securite.',
      longDescription:
        "Dhall est un langage de configuration programmable dote d'un systeme de typage statique fort, d'importations, de fonctions, de records et de normalisation garantie. Il est concu pour remplacer les formats de configuration JSON, YAML et similaires repetitifs avec des expressions typees reutilisables.\n\nIl est utilise pour la configuration d'infrastructure, les parametres d'application, la generation de YAML ou de JSON, et les systemes qui necessitent une configuration partagee sans execution de code arbitraire.",
    },
    de: {
      name: 'Dhall',
      description:
        'Eine programmierbare, typisierte Konfigurationssprache, die sicher normalisiert.',
      longDescription:
        'Dhall ist eine programmierbare Konfigurationssprache mit einem starken statischen Typsystem, Importen, Funktionen, Records und garantierter Normalisierung. Sie wurde entwickelt, um repetitive JSON-, YAML- und \u00e4hnliche Konfigurationsformate durch wiederverwendbare, typisierte Ausdr\u00fccke zu ersetzen.\n\nSie wird f\u00fcr Infrastrukturkonfiguration, Anwendungs-Einstellungen, generierte YAML- oder JSON-Dateien und Systeme verwendet, die gemeinsame Konfiguration ben\u00f6tigen, ohne dass beliebiger Code ausgef\u00fchrt wird.',
    },
    pt: {
      name: 'Dhall',
      description:
        'Linguagem de configura\u00e7\u00e3o program\u00e1vel e tipada que normaliza com seguran\u00e7a.',
      longDescription:
        'Dhall \u00e9 uma linguagem de configura\u00e7\u00e3o program\u00e1vel com um forte sistema de tipos est\u00e1ticos, importa\u00e7\u00f5es, fun\u00e7\u00f5es, registros e normaliza\u00e7\u00e3o garantida. \u00c9 projetada para substituir formatos de configura\u00e7\u00e3o repetitivos como JSON, YAML, etc., com express\u00f5es tipadas reutiliz\u00e1veis.\n\n\u00c9 usada para configura\u00e7\u00e3o de infraestrutura, configura\u00e7\u00f5es de aplicativos, gera\u00e7\u00e3o de YAML ou JSON e sistemas que precisam de configura\u00e7\u00e3o compartilhada sem execu\u00e7\u00e3o de c\u00f3digo arbitr\u00e1ria.',
    },
  },
} satisfies Language;
