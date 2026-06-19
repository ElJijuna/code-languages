import type { Language } from '../types';

export const capnproto = {
  slug: 'capnproto',
  publishedDate: '2013-01-01',
  extensions: ['.capnp'],
  author: 'Kenton Varda',
  website: 'https://capnproto.org',
  paradigms: ['schema', 'interface definition'],
  tooling: {
    runtimes: ['Capn Proto compiler'],
    ecosystems: ['RPC', 'Serialization'],
  },
  version: 'stable',
  logo: 'https://capnproto.org/images/logo.png',
  color: '#F97316',
  i18n: {
    en: {
      name: "Cap'n Proto",
      description:
        'A schema language for fast serialization and capability-oriented RPC interfaces.',
      longDescription:
        'Capn Proto schemas define structured messages, enums, interfaces, and constants for a zero-copy serialization system. The format is designed so data can often be used directly from its encoded representation.\n\nThe language supports code generation for multiple host languages and is paired with an RPC system built around capabilities. It is used when low latency, cross-language contracts, and efficient binary interchange matter.',
    },
    es: {
      name: "Cap'n Proto",
      description:
        'Lenguaje de esquemas para serializacion rapida e interfaces RPC orientadas a capacidades.',
      longDescription:
        'Los esquemas Capn Proto definen mensajes estructurados, enums, interfaces y constantes para un sistema de serializacion zero-copy. El formato esta disenado para que los datos puedan usarse a menudo desde su representacion codificada.\n\nEl lenguaje soporta generacion de codigo para multiples lenguajes anfitriones y se combina con un sistema RPC basado en capacidades. Se usa cuando importan baja latencia, contratos entre lenguajes e intercambio binario eficiente.',
    },
    it: {
      name: "Cap'n Proto",
      description:
        'Linguaggio di schema per serializzazione veloce e interfacce RPC orientate a capability.',
      longDescription:
        'Gli schemi Capn Proto definiscono messaggi strutturati, enum, interfacce e costanti per un sistema di serializzazione zero-copy. Il formato e progettato per usare spesso i dati direttamente dalla rappresentazione codificata.\n\nIl linguaggio supporta generazione di codice per molti linguaggi host ed e abbinato a un sistema RPC basato su capability. E usato quando contano bassa latenza, contratti cross-language e scambio binario efficiente.',
    },
    fr: {
      name: "Cap'n Proto",
      description:
        'Langage de schema pour serialisation rapide et interfaces RPC orientees capacites.',
      longDescription:
        'Les schemas Capn Proto definissent messages structures, enums, interfaces et constantes pour un systeme de serialisation zero-copy. Le format est concu pour permettre souvent l usage direct des donnees depuis leur representation encodee.\n\nLe langage prend en charge la generation de code pour plusieurs langages hotes et s accompagne d un systeme RPC fonde sur les capacites. Il est utilise quand faible latence, contrats inter-langages et echange binaire efficace comptent.',
    },
    de: {
      name: "Cap'n Proto",
      description:
        'Schemasprache fur schnelle Serialisierung und capability-orientierte RPC-Schnittstellen.',
      longDescription:
        'Capn Proto-Schemas definieren strukturierte Nachrichten, Enums, Schnittstellen und Konstanten fur ein Zero-Copy-Serialisierungssystem. Das Format ist so entworfen, dass Daten oft direkt aus ihrer kodierten Darstellung nutzbar sind.\n\nDie Sprache unterstutzt Codegenerierung fur mehrere Hostsprachen und ist mit einem RPC-System rund um Capabilities gekoppelt. Sie wird genutzt, wenn niedrige Latenz, sprachubergreifende Vertrage und effizienter Binar-Austausch wichtig sind.',
    },
    pt: {
      name: "Cap'n Proto",
      description:
        'Linguagem de esquema para serializacao rapida e interfaces RPC orientadas a capacidades.',
      longDescription:
        'Esquemas Capn Proto definem mensagens estruturadas, enums, interfaces e constantes para um sistema de serializacao zero-copy. O formato e projetado para que dados muitas vezes possam ser usados diretamente da representacao codificada.\n\nA linguagem suporta geracao de codigo para varias linguagens hospedeiras e vem junto de um sistema RPC baseado em capacidades. Ela e usada quando baixa latencia, contratos entre linguagens e intercambio binario eficiente importam.',
    },
  },
} satisfies Language;
