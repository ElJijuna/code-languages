import type { Language } from '../types';

export const avroIdl = {
  slug: 'avro-idl',
  publishedDate: '2009-11-02',
  extensions: ['.avdl'],
  author: 'Apache Software Foundation',
  website: 'https://avro.apache.org/docs/current/idl-language/',
  paradigms: ['schema', 'interface definition'],
  tooling: {
    runtimes: ['Apache Avro compiler'],
    ecosystems: ['Serialization', 'RPC', 'Data Engineering'],
  },
  version: '1.12.1',
  logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Apache_Avro_Logo.svg',
  color: '#1E88E5',
  i18n: {
    en: {
      name: 'Avro IDL',
      description:
        'A human-readable interface definition language for Apache Avro schemas and protocols.',
      longDescription:
        'Avro IDL defines records, enums, fixed values, errors, messages, namespaces, and imports using a syntax designed for human authors. The Avro compiler converts .avdl files into JSON protocol and schema representations.\n\nIt is used to describe serialized data and RPC interfaces shared by services and data pipelines. Generated schemas participate in Avro compatibility rules and support code generation across multiple programming languages.',
    },
    es: {
      name: 'Avro IDL',
      description:
        'Lenguaje legible de definicion de interfaces para esquemas y protocolos Apache Avro.',
      longDescription:
        'Avro IDL define registros, enums, valores fijos, errores, mensajes, espacios de nombres e imports con una sintaxis pensada para personas. El compilador Avro convierte archivos .avdl en protocolos y esquemas JSON.\n\nSe usa para describir datos serializados e interfaces RPC compartidas por servicios y pipelines. Los esquemas generados siguen reglas de compatibilidad Avro y permiten generar codigo en varios lenguajes.',
    },
    it: {
      name: 'Avro IDL',
      description:
        'Linguaggio leggibile di definizione interfacce per schemi e protocolli Apache Avro.',
      longDescription:
        'Avro IDL definisce record, enum, valori fissi, errori, messaggi, namespace e import con una sintassi pensata per gli autori. Il compilatore Avro converte i file .avdl in protocolli e schemi JSON.\n\nViene usato per descrivere dati serializzati e interfacce RPC condivise da servizi e pipeline. Gli schemi generati seguono le regole di compatibilita Avro e supportano generazione di codice in diversi linguaggi.',
    },
    fr: {
      name: 'Avro IDL',
      description:
        'Langage lisible de definition d interfaces pour schemas et protocoles Apache Avro.',
      longDescription:
        'Avro IDL definit enregistrements, enums, valeurs fixes, erreurs, messages, espaces de noms et imports avec une syntaxe destinee aux auteurs humains. Le compilateur Avro convertit les fichiers .avdl en protocoles et schemas JSON.\n\nIl sert a decrire donnees serialisees et interfaces RPC partagees par services et pipelines. Les schemas generes suivent les regles de compatibilite Avro et permettent la generation de code dans plusieurs langages.',
    },
    de: {
      name: 'Avro IDL',
      description: 'Menschenlesbare Schnittstellensprache fur Apache-Avro-Schemas und Protokolle.',
      longDescription:
        'Avro IDL definiert Records, Enums, feste Werte, Fehler, Nachrichten, Namensraume und Importe mit einer fur Menschen entworfenen Syntax. Der Avro-Compiler wandelt .avdl-Dateien in JSON-Protokolle und Schemas um.\n\nDie Sprache beschreibt serialisierte Daten und RPC-Schnittstellen fur Dienste und Datenpipelines. Erzeugte Schemas folgen Avro-Kompatibilitatsregeln und unterstutzen Codegenerierung fur mehrere Programmiersprachen.',
    },
    pt: {
      name: 'Avro IDL',
      description:
        'Linguagem legivel de definicao de interfaces para esquemas e protocolos Apache Avro.',
      longDescription:
        'Avro IDL define registros, enums, valores fixos, erros, mensagens, namespaces e imports com sintaxe voltada a autores humanos. O compilador Avro converte arquivos .avdl em protocolos e esquemas JSON.\n\nE usada para descrever dados serializados e interfaces RPC compartilhadas por servicos e pipelines. Esquemas gerados seguem regras de compatibilidade Avro e permitem geracao de codigo em varias linguagens.',
    },
  },
} satisfies Language;
