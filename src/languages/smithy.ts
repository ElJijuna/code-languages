import type { Language } from '@/types';

export const smithy = {
  slug: 'smithy',
  publishedDate: '2019-01-01',
  extensions: ['.smithy'],
  author: 'Amazon Web Services',
  website: 'https://smithy.io',
  paradigms: ['declarative', 'interface-definition'],
  tooling: {
    runtimes: ['JVM'],
    packageManagers: ['Gradle', 'Maven'],
    ecosystems: ['Cloud', 'API Design'],
  },
  version: 'IDL 2.0',
  logo: 'https://avatars.githubusercontent.com/u/133827778?v=4',
  color: '#FF9900',
  i18n: {
    en: {
      name: 'Smithy',
      description: "AWS's protocol-agnostic interface definition language for modeling services.",
      longDescription:
        'Smithy is an interface definition language created by AWS to model services, resources, and operations independently of any protocol or transport. Models are decorated with traits — validation, authentication, pagination, error behavior — from which code generators produce clients, servers, and documentation.\n\nAWS uses Smithy to define its own service APIs and generate its SDKs. The open-source toolchain includes a Java-based build system, model validation, and generators for multiple target languages.',
    },
    es: {
      name: 'Smithy',
      description:
        'El lenguaje de definición de interfaces de AWS, agnóstico de protocolo, para modelar servicios.',
      longDescription:
        'Smithy es un lenguaje de definición de interfaces creado por AWS para modelar servicios, recursos y operaciones con independencia de cualquier protocolo o transporte. Los modelos se decoran con traits — validación, autenticación, paginación, comportamiento de errores — a partir de los cuales los generadores producen clientes, servidores y documentación.\n\nAWS usa Smithy para definir sus propias APIs de servicio y generar sus SDKs. La cadena de herramientas de código abierto incluye un sistema de build basado en Java, validación de modelos y generadores para múltiples lenguajes destino.',
    },
    it: {
      name: 'Smithy',
      description:
        'Il linguaggio di definizione delle interfacce di AWS, agnostico rispetto al protocollo.',
      longDescription:
        'Smithy è un linguaggio di definizione delle interfacce creato da AWS per modellare servizi, risorse e operazioni indipendentemente da qualsiasi protocollo o trasporto. I modelli sono decorati con trait — validazione, autenticazione, paginazione, comportamento degli errori — dai quali i generatori producono client, server e documentazione.\n\nAWS usa Smithy per definire le proprie API di servizio e generare i propri SDK. La toolchain open source include un sistema di build basato su Java, la validazione dei modelli e generatori per più linguaggi di destinazione.',
    },
    fr: {
      name: 'Smithy',
      description:
        "Le langage de définition d'interfaces d'AWS, indépendant du protocole, pour modéliser des services.",
      longDescription:
        "Smithy est un langage de définition d'interfaces créé par AWS pour modéliser services, ressources et opérations indépendamment de tout protocole ou transport. Les modèles sont décorés de traits — validation, authentification, pagination, comportement d'erreur — à partir desquels des générateurs produisent clients, serveurs et documentation.\n\nAWS utilise Smithy pour définir ses propres API de service et générer ses SDK. La chaîne d'outils open source comprend un système de build en Java, la validation de modèles et des générateurs pour plusieurs langages cibles.",
    },
    de: {
      name: 'Smithy',
      description:
        "AWS' protokollunabhängige Schnittstellenbeschreibungssprache zur Modellierung von Services.",
      longDescription:
        'Smithy ist eine von AWS geschaffene Schnittstellenbeschreibungssprache, um Services, Ressourcen und Operationen unabhängig von Protokoll oder Transport zu modellieren. Modelle werden mit Traits versehen — Validierung, Authentifizierung, Paginierung, Fehlerverhalten —, aus denen Codegeneratoren Clients, Server und Dokumentation erzeugen.\n\nAWS definiert mit Smithy seine eigenen Service-APIs und generiert daraus seine SDKs. Die Open-Source-Toolchain umfasst ein Java-basiertes Build-System, Modellvalidierung und Generatoren für mehrere Zielsprachen.',
    },
    pt: {
      name: 'Smithy',
      description:
        'A linguagem de definição de interfaces da AWS, agnóstica de protocolo, para modelar serviços.',
      longDescription:
        'Smithy é uma linguagem de definição de interfaces criada pela AWS para modelar serviços, recursos e operações independentemente de qualquer protocolo ou transporte. Os modelos são decorados com traits — validação, autenticação, paginação, comportamento de erros — a partir dos quais geradores produzem clientes, servidores e documentação.\n\nA AWS usa Smithy para definir suas próprias APIs de serviço e gerar seus SDKs. A toolchain de código aberto inclui um sistema de build baseado em Java, validação de modelos e geradores para várias linguagens de destino.',
    },
  },
} satisfies Language;
