import type { Language } from '@/types';

export const hocon = {
  slug: 'hocon',
  publishedDate: '2013-01-01',
  extensions: ['.hocon'],
  author: 'Typesafe (now Lightbend)',
  website: 'https://github.com/lightbend/config/blob/main/HOCON.md',
  paradigms: ['declarative'],
  tooling: {
    ecosystems: ['JVM', 'Scala', 'Akka', 'Play Framework', 'Configuration'],
  },
  version: '1.4.4',
  logo: 'https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/hocon.svg',
  color: '#F26822',
  i18n: {
    en: {
      name: 'HOCON',
      description:
        'A human-optimized configuration format that is a superset of JSON, used widely in the Scala and Akka ecosystems.',
      longDescription:
        'HOCON (Human-Optimized Config Object Notation) is a configuration format developed by Lightbend as a superset of JSON. It allows comments, unquoted keys, multi-line strings, variable substitution, and file inclusion, making configuration files easier to read and maintain.\n\nHOCON is the default configuration format for Akka, Play Framework, and Lagom. It is parsed by the Typesafe Config library and supports merging and overriding of configuration values, enabling environment-specific configurations through a single unified format.',
    },
    es: {
      name: 'HOCON',
      description:
        'Un formato de configuración optimizado para humanos que es un superconjunto de JSON, usado ampliamente en los ecosistemas Scala y Akka.',
      longDescription:
        'HOCON (Human-Optimized Config Object Notation) es un formato de configuración desarrollado por Lightbend como superconjunto de JSON. Permite comentarios, claves sin comillas, cadenas multilínea, sustitución de variables e inclusión de archivos.\n\nEs el formato de configuración predeterminado para Akka, Play Framework y Lagom. Soporta fusión y sobreescritura de valores de configuración, permitiendo configuraciones específicas de entorno a través de un formato unificado.',
    },
    it: {
      name: 'HOCON',
      description:
        "Un formato di configurazione ottimizzato per l'uomo che è un superset di JSON, ampiamente utilizzato negli ecosistemi Scala e Akka.",
      longDescription:
        'HOCON (Human-Optimized Config Object Notation) è un formato di configurazione sviluppato da Lightbend come superset di JSON. Consente commenti, chiavi senza virgolette, stringhe multiriga, sostituzione di variabili e inclusione di file.\n\nÈ il formato di configurazione predefinito per Akka, Play Framework e Lagom. Supporta la fusione e la sovrascrittura dei valori di configurazione, consentendo configurazioni specifiche per ambiente attraverso un unico formato unificato.',
    },
    fr: {
      name: 'HOCON',
      description:
        'Un format de configuration optimisé pour les humains, superset de JSON, largement utilisé dans les écosystèmes Scala et Akka.',
      longDescription:
        "HOCON (Human-Optimized Config Object Notation) est un format de configuration développé par Lightbend comme superset de JSON. Il permet les commentaires, les clés sans guillemets, les chaînes multi-lignes, la substitution de variables et l'inclusion de fichiers.\n\nC'est le format de configuration par défaut pour Akka, Play Framework et Lagom. Il supporte la fusion et la substitution de valeurs de configuration, permettant des configurations spécifiques à l'environnement via un format unifié.",
    },
    de: {
      name: 'HOCON',
      description:
        'Ein für Menschen optimiertes Konfigurationsformat, das eine Obermenge von JSON ist und im Scala- und Akka-Ökosystem weit verbreitet ist.',
      longDescription:
        'HOCON (Human-Optimized Config Object Notation) ist ein Konfigurationsformat, das von Lightbend als Obermenge von JSON entwickelt wurde. Es erlaubt Kommentare, Schlüssel ohne Anführungszeichen, mehrzeilige Strings, Variablensubstitution und Dateieinbindung.\n\nHOCON ist das Standardkonfigurationsformat für Akka, Play Framework und Lagom. Es unterstützt das Zusammenführen und Überschreiben von Konfigurationswerten und ermöglicht umgebungsspezifische Konfigurationen über ein einheitliches Format.',
    },
    pt: {
      name: 'HOCON',
      description:
        'Um formato de configuração otimizado para humanos que é um superconjunto de JSON, amplamente usado nos ecossistemas Scala e Akka.',
      longDescription:
        'HOCON (Human-Optimized Config Object Notation) é um formato de configuração desenvolvido pela Lightbend como superconjunto de JSON. Permite comentários, chaves sem aspas, strings multilinhas, substituição de variáveis e inclusão de arquivos.\n\nÉ o formato de configuração padrão para Akka, Play Framework e Lagom. Suporta mesclagem e substituição de valores de configuração, permitindo configurações específicas de ambiente através de um formato unificado.',
    },
  },
} satisfies Language;
