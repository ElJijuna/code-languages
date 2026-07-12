import type { Language } from '@/types';

export const properties = {
  slug: 'properties',
  aliases: ['java properties'],
  publishedDate: '1996-01-23',
  extensions: ['.properties'],
  author: 'Sun Microsystems',
  website: 'https://docs.oracle.com/javase/8/docs/api/java/util/Properties.html',
  paradigms: ['declarative', 'configuration'],
  tooling: {
    runtimes: ['JVM'],
    ecosystems: ['JVM', 'Configuration'],
  },
  version: 'stable',
  logo: 'https://cdn.simpleicons.org/openjdk/437291',
  color: '#2A6277',
  i18n: {
    en: {
      name: 'Java Properties',
      description: 'A simple key-value configuration format used across the Java ecosystem.',
      longDescription:
        'Java Properties files store configuration as key-value pairs in plain text, with support for comments, escaping, and Unicode sequences. The format ships with the JDK through java.util.Properties and dates back to Java 1.0.\n\nIt remains the default configuration format across the JVM ecosystem: Spring application settings, Gradle project configuration, log4j setup, and resource bundles for internationalization all commonly live in .properties files.',
    },
    es: {
      name: 'Java Properties',
      description:
        'Un formato simple de configuración clave-valor usado en todo el ecosistema Java.',
      longDescription:
        'Los archivos Java Properties almacenan configuración como pares clave-valor en texto plano, con soporte para comentarios, escapes y secuencias Unicode. El formato viene con el JDK a través de java.util.Properties y se remonta a Java 1.0.\n\nSigue siendo el formato de configuración por defecto en el ecosistema JVM: los ajustes de aplicaciones Spring, la configuración de proyectos Gradle, la configuración de log4j y los resource bundles de internacionalización suelen vivir en archivos .properties.',
    },
    it: {
      name: 'Java Properties',
      description:
        "Un semplice formato di configurazione chiave-valore usato nell'ecosistema Java.",
      longDescription:
        "I file Java Properties memorizzano la configurazione come coppie chiave-valore in testo semplice, con supporto per commenti, escape e sequenze Unicode. Il formato è incluso nel JDK tramite java.util.Properties e risale a Java 1.0.\n\nRimane il formato di configurazione predefinito nell'ecosistema JVM: le impostazioni delle applicazioni Spring, la configurazione dei progetti Gradle, la configurazione di log4j e i resource bundle per l'internazionalizzazione vivono comunemente in file .properties.",
    },
    fr: {
      name: 'Java Properties',
      description:
        "Un format simple de configuration clé-valeur utilisé dans tout l'écosystème Java.",
      longDescription:
        "Les fichiers Java Properties stockent la configuration sous forme de paires clé-valeur en texte brut, avec la prise en charge des commentaires, de l'échappement et des séquences Unicode. Le format est livré avec le JDK via java.util.Properties et remonte à Java 1.0.\n\nIl reste le format de configuration par défaut de l'écosystème JVM : les paramètres d'applications Spring, la configuration de projets Gradle, la configuration de log4j et les resource bundles d'internationalisation vivent couramment dans des fichiers .properties.",
    },
    de: {
      name: 'Java Properties',
      description: 'Ein einfaches Schlüssel-Wert-Konfigurationsformat aus dem Java-Ökosystem.',
      longDescription:
        'Java-Properties-Dateien speichern Konfiguration als Schlüssel-Wert-Paare im Klartext, mit Unterstützung für Kommentare, Escaping und Unicode-Sequenzen. Das Format ist über java.util.Properties Teil des JDK und stammt aus Java 1.0.\n\nEs bleibt das Standard-Konfigurationsformat im JVM-Ökosystem: Spring-Anwendungseinstellungen, Gradle-Projektkonfiguration, log4j-Setup und Resource-Bundles für Internationalisierung liegen üblicherweise in .properties-Dateien.',
    },
    pt: {
      name: 'Java Properties',
      description:
        'Um formato simples de configuração chave-valor usado em todo o ecossistema Java.',
      longDescription:
        'Os arquivos Java Properties armazenam configuração como pares chave-valor em texto simples, com suporte a comentários, escapes e sequências Unicode. O formato acompanha o JDK por meio de java.util.Properties e remonta ao Java 1.0.\n\nContinua sendo o formato de configuração padrão do ecossistema JVM: as configurações de aplicações Spring, a configuração de projetos Gradle, a configuração do log4j e os resource bundles de internacionalização costumam viver em arquivos .properties.',
    },
  },
} satisfies Language;
