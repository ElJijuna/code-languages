import type { Language } from '../types';

export const flatbuffers = {
  slug: 'flatbuffers',
  publishedDate: '2014-06-17',
  extensions: ['.fbs'],
  author: 'Wouter van Oortmerssen / Google',
  website: 'https://flatbuffers.dev',
  paradigms: ['schema', 'interface definition'],
  tooling: {
    runtimes: ['flatc'],
    ecosystems: ['Serialization', 'Games', 'Mobile'],
  },
  version: '25.12.19',
  logo: 'https://flatbuffers.dev/assets/images/favicon.png',
  color: '#0F9D58',
  i18n: {
    en: {
      name: 'FlatBuffers',
      description:
        'A schema language for memory-efficient, cross-platform serialization without unpacking.',
      longDescription:
        'FlatBuffers schemas define tables, structs, enums, unions, services, and namespaces for compact binary data. The flatc compiler generates strongly typed access code for many host languages.\n\nIts format lets applications read serialized data without a separate parsing or unpacking step. It is used in games, mobile applications, embedded systems, and performance-sensitive services where allocation and latency matter.',
    },
    es: {
      name: 'FlatBuffers',
      description:
        'Lenguaje de esquemas para serializacion eficiente y multiplataforma sin desempaquetado.',
      longDescription:
        'Los esquemas FlatBuffers definen tablas, structs, enums, uniones, servicios y espacios de nombres para datos binarios compactos. El compilador flatc genera acceso tipado para muchos lenguajes anfitriones.\n\nEl formato permite leer datos serializados sin una fase separada de parseo o desempaquetado. Se usa en juegos, aplicaciones moviles, sistemas embebidos y servicios sensibles a asignaciones y latencia.',
    },
    it: {
      name: 'FlatBuffers',
      description:
        'Linguaggio di schema per serializzazione efficiente e multipiattaforma senza unpacking.',
      longDescription:
        'Gli schemi FlatBuffers definiscono tabelle, struct, enum, unioni, servizi e namespace per dati binari compatti. Il compilatore flatc genera accesso fortemente tipizzato per molti linguaggi host.\n\nIl formato consente di leggere dati serializzati senza una fase separata di parsing o unpacking. E usato in giochi, applicazioni mobili, sistemi embedded e servizi sensibili ad allocazioni e latenza.',
    },
    fr: {
      name: 'FlatBuffers',
      description:
        'Langage de schema pour serialisation efficace et multiplateforme sans depaquetage.',
      longDescription:
        'Les schemas FlatBuffers definissent tables, structures, enums, unions, services et espaces de noms pour des donnees binaires compactes. Le compilateur flatc genere un acces fortement type pour de nombreux langages hotes.\n\nLe format permet de lire les donnees serialisees sans phase distincte d analyse ou de depaquetage. Il est utilise dans jeux, applications mobiles, systemes embarques et services sensibles aux allocations et a la latence.',
    },
    de: {
      name: 'FlatBuffers',
      description:
        'Schemasprache fur speichereffiziente, plattformubergreifende Serialisierung ohne Entpacken.',
      longDescription:
        'FlatBuffers-Schemas definieren Tabellen, Structs, Enums, Unions, Dienste und Namensraume fur kompakte Binardaten. Der flatc-Compiler erzeugt stark typisierten Zugriffscode fur viele Hostsprachen.\n\nDas Format erlaubt direkten Zugriff auf serialisierte Daten ohne separaten Parsing- oder Entpackschritt. Es wird in Spielen, mobilen Anwendungen, eingebetteten Systemen und latenzkritischen Diensten eingesetzt.',
    },
    pt: {
      name: 'FlatBuffers',
      description:
        'Linguagem de esquema para serializacao eficiente e multiplataforma sem desempacotar.',
      longDescription:
        'Esquemas FlatBuffers definem tabelas, structs, enums, unioes, servicos e namespaces para dados binarios compactos. O compilador flatc gera acesso fortemente tipado para varias linguagens hospedeiras.\n\nO formato permite ler dados serializados sem etapa separada de parsing ou desempacotamento. E usado em jogos, apps moveis, sistemas embarcados e servicos sensiveis a alocacao e latencia.',
    },
  },
} satisfies Language;
