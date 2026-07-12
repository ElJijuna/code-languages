import type { Language } from '@/types';

export const typespec = {
  slug: 'typespec',
  aliases: ['cadl'],
  publishedDate: '2022-09-07',
  extensions: ['.tsp'],
  author: 'Microsoft',
  website: 'https://typespec.io',
  paradigms: ['declarative', 'interface-definition'],
  relations: {
    compilesTo: ['openapi', 'protobuf', 'json'],
  },
  tooling: {
    runtimes: ['Node.js'],
    packageManagers: ['npm'],
    ecosystems: ['Cloud', 'API Design'],
  },
  version: '1.0',
  logo: 'https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/typespec.svg',
  color: '#4B3CC4',
  i18n: {
    en: {
      name: 'TypeSpec',
      description: 'A TypeScript-inspired language from Microsoft for describing APIs, emitting OpenAPI and more.',
      longDescription:
        'TypeSpec (formerly Cadl) is an API description language from Microsoft with TypeScript-inspired syntax. Reusable models, decorators, and interfaces describe REST, gRPC, and event-driven APIs at a higher level than hand-written specifications.\n\nEmitters compile TypeSpec into OpenAPI documents, Protobuf definitions, JSON Schema, and client code. Microsoft uses it to define Azure service APIs, keeping large API surfaces consistent from one concise source of truth.',
    },
    es: {
      name: 'TypeSpec',
      description: 'Un lenguaje de Microsoft inspirado en TypeScript para describir APIs, emitiendo OpenAPI y más.',
      longDescription:
        'TypeSpec (antes Cadl) es un lenguaje de descripción de APIs de Microsoft con sintaxis inspirada en TypeScript. Modelos reutilizables, decoradores e interfaces describen APIs REST, gRPC y orientadas a eventos a un nivel más alto que las especificaciones escritas a mano.\n\nLos emisores compilan TypeSpec a documentos OpenAPI, definiciones Protobuf, JSON Schema y código cliente. Microsoft lo usa para definir las APIs de servicios de Azure, manteniendo superficies de API enormes consistentes desde una sola fuente de verdad concisa.',
    },
    it: {
      name: 'TypeSpec',
      description: 'Un linguaggio Microsoft ispirato a TypeScript per descrivere API, generando OpenAPI e altro.',
      longDescription:
        'TypeSpec (ex Cadl) è un linguaggio di descrizione delle API di Microsoft con sintassi ispirata a TypeScript. Modelli riutilizzabili, decoratori e interfacce descrivono API REST, gRPC e a eventi a un livello più alto delle specifiche scritte a mano.\n\nGli emitter compilano TypeSpec in documenti OpenAPI, definizioni Protobuf, JSON Schema e codice client. Microsoft lo usa per definire le API dei servizi Azure, mantenendo superfici API estese coerenti da un\'unica fonte di verità concisa.',
    },
    fr: {
      name: 'TypeSpec',
      description: 'Un langage Microsoft inspiré de TypeScript pour décrire des API, générant OpenAPI et plus.',
      longDescription:
        "TypeSpec (anciennement Cadl) est un langage de description d'API de Microsoft à la syntaxe inspirée de TypeScript. Des modèles réutilisables, des décorateurs et des interfaces décrivent des API REST, gRPC et événementielles à un niveau plus élevé que les spécifications écrites à la main.\n\nDes émetteurs compilent TypeSpec en documents OpenAPI, définitions Protobuf, JSON Schema et code client. Microsoft l'utilise pour définir les API des services Azure, en gardant de vastes surfaces d'API cohérentes depuis une source de vérité unique et concise.",
    },
    de: {
      name: 'TypeSpec',
      description: 'Eine TypeScript-inspirierte Sprache von Microsoft zur API-Beschreibung, die OpenAPI und mehr erzeugt.',
      longDescription:
        'TypeSpec (früher Cadl) ist eine API-Beschreibungssprache von Microsoft mit TypeScript-inspirierter Syntax. Wiederverwendbare Modelle, Dekoratoren und Interfaces beschreiben REST-, gRPC- und ereignisgetriebene APIs auf höherem Niveau als handgeschriebene Spezifikationen.\n\nEmitter kompilieren TypeSpec zu OpenAPI-Dokumenten, Protobuf-Definitionen, JSON Schema und Client-Code. Microsoft definiert damit die Azure-Service-APIs und hält große API-Oberflächen von einer knappen Single Source of Truth aus konsistent.',
    },
    pt: {
      name: 'TypeSpec',
      description: 'Uma linguagem da Microsoft inspirada em TypeScript para descrever APIs, emitindo OpenAPI e mais.',
      longDescription:
        'TypeSpec (antes Cadl) é uma linguagem de descrição de APIs da Microsoft com sintaxe inspirada em TypeScript. Modelos reutilizáveis, decoradores e interfaces descrevem APIs REST, gRPC e orientadas a eventos em um nível mais alto do que especificações escritas à mão.\n\nOs emissores compilam TypeSpec em documentos OpenAPI, definições Protobuf, JSON Schema e código cliente. A Microsoft a usa para definir as APIs dos serviços do Azure, mantendo grandes superfícies de API consistentes a partir de uma única fonte de verdade concisa.',
    },
  },
} satisfies Language;
