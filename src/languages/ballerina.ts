import type { Language } from '@/types';

export const ballerina = {
  slug: 'ballerina',
  publishedDate: '2017-02-01',
  extensions: ['.bal'],
  author: 'WSO2',
  website: 'https://ballerina.io',
  paradigms: ['concurrent', 'functional', 'imperative', 'object-oriented'],
  tooling: {
    runtimes: ['Ballerina runtime (JVM-based)'],
    packageManagers: ['Ballerina Central'],
    ecosystems: ['Cloud', 'Microservices', 'Integration', 'APIs'],
  },
  version: '2201.13.5',
  logo: 'https://ballerina.io/images/ballerina-logo.svg',
  color: '#20B6B0',
  i18n: {
    en: {
      name: 'Ballerina',
      description:
        'A cloud-native programming language designed for writing network services and APIs with built-in concurrency and type safety.',
      longDescription:
        'Ballerina is a statically typed, compiled language created by WSO2 specifically for cloud-native integration and network programming. It has built-in abstractions for network services, HTTP, GraphQL, gRPC, WebSockets, and data formats like JSON and XML, making service-to-service communication a first-class concern.\n\nBallerina features a sequence diagram-based visualization of code, explicit error handling, transactional support, and a strong type system with union types and structural typing. It compiles to native code via GraalVM or runs on the JVM, and its package ecosystem is hosted on Ballerina Central.',
    },
    es: {
      name: 'Ballerina',
      description:
        'Un lenguaje de programación nativo de la nube diseñado para escribir servicios de red y APIs con concurrencia y seguridad de tipos integradas.',
      longDescription:
        'Ballerina es un lenguaje compilado de tipo estático creado por WSO2 específicamente para integración nativa de la nube y programación de redes. Tiene abstracciones integradas para servicios de red, HTTP, GraphQL, gRPC, WebSockets y formatos de datos como JSON y XML.\n\nBallerina presenta una visualización del código basada en diagramas de secuencia, manejo explícito de errores, soporte transaccional y un sistema de tipos fuerte con tipos unión y tipado estructural. Compila a código nativo via GraalVM o se ejecuta en la JVM.',
    },
    it: {
      name: 'Ballerina',
      description:
        'Un linguaggio di programmazione cloud-native progettato per scrivere servizi di rete e API con concorrenza e sicurezza dei tipi integrate.',
      longDescription:
        "Ballerina è un linguaggio compilato staticamente tipizzato creato da WSO2 specificamente per l'integrazione cloud-native e la programmazione di rete. Ha astrazioni integrate per servizi di rete, HTTP, GraphQL, gRPC, WebSocket e formati di dati come JSON e XML.\n\nBallerina presenta una visualizzazione del codice basata su diagrammi di sequenza, gestione esplicita degli errori, supporto transazionale e un sistema di tipi forte con tipi unione e tipizzazione strutturale. Compila in codice nativo tramite GraalVM o viene eseguito sulla JVM.",
    },
    fr: {
      name: 'Ballerina',
      description:
        'Un langage de programmation cloud-native conçu pour écrire des services réseau et des APIs avec concurrence et sécurité des types intégrées.',
      longDescription:
        "Ballerina est un langage compilé statiquement typé créé par WSO2 spécifiquement pour l'intégration cloud-native et la programmation réseau. Il dispose d'abstractions intégrées pour les services réseau, HTTP, GraphQL, gRPC, WebSockets et les formats de données comme JSON et XML.\n\nBallerina présente une visualisation du code basée sur des diagrammes de séquence, une gestion explicite des erreurs, un support transactionnel et un système de types fort avec des types union et un typage structurel. Il se compile en code natif via GraalVM ou s'exécute sur la JVM.",
    },
    de: {
      name: 'Ballerina',
      description:
        'Eine Cloud-native Programmiersprache für Netzwerkdienste und APIs mit eingebauter Nebenläufigkeit und Typsicherheit.',
      longDescription:
        'Ballerina ist eine statisch typisierte, kompilierte Sprache, die von WSO2 speziell für Cloud-native Integration und Netzwerkprogrammierung entwickelt wurde. Sie hat eingebaute Abstraktionen für Netzwerkdienste, HTTP, GraphQL, gRPC, WebSockets und Datenformate wie JSON und XML.\n\nBallerina bietet eine sequenzdiagrammbasierte Visualisierung des Codes, explizites Fehlerhandling, transaktionale Unterstützung und ein starkes Typsystem mit Union-Types und struktureller Typisierung. Es kompiliert zu nativem Code via GraalVM oder läuft auf der JVM.',
    },
    pt: {
      name: 'Ballerina',
      description:
        'Uma linguagem de programação cloud-native projetada para escrever serviços de rede e APIs com concorrência e segurança de tipos integradas.',
      longDescription:
        'Ballerina é uma linguagem compilada estaticamente tipada criada pela WSO2 especificamente para integração cloud-native e programação de rede. Possui abstrações integradas para serviços de rede, HTTP, GraphQL, gRPC, WebSockets e formatos de dados como JSON e XML.\n\nBallerina apresenta uma visualização do código baseada em diagramas de sequência, tratamento explícito de erros, suporte transacional e um sistema de tipos forte com tipos union e tipagem estrutural. Compila para código nativo via GraalVM ou executa na JVM.',
    },
  },
} satisfies Language;
