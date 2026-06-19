import type { Language } from '../types';

export const ink = {
  slug: 'ink',
  publishedDate: '2018-01-01',
  extensions: ['.ink'],
  author: 'Parity Technologies',
  website: 'https://use.ink',
  paradigms: ['smart contract', 'embedded DSL', 'systems'],
  tooling: {
    runtimes: ['WebAssembly', 'Substrate contracts pallet'],
    packageManagers: ['Cargo'],
    ecosystems: ['Polkadot', 'Substrate', 'Rust'],
  },
  version: 'Ink! 6',
  logo: 'https://use.ink/img/favicon.png',
  color: '#EC4899',
  i18n: {
    en: {
      name: 'Ink!',
      description:
        'A Rust-based embedded domain-specific language for writing WebAssembly smart contracts.',
      longDescription:
        'Ink! is a smart contract language and framework built on Rust for Substrate-compatible blockchains. Contracts are written as Rust code using Ink! attributes and compile to WebAssembly for execution by compatible contract pallets.\n\nIt gives smart contract authors access to Rust tooling, types, testing, and package workflows while targeting blockchain runtimes. Ink! is common in Polkadot, Substrate, and related ecosystems.',
    },
    es: {
      name: 'Ink!',
      description: 'DSL embebido basado en Rust para escribir contratos inteligentes WebAssembly.',
      longDescription:
        'Ink! es un lenguaje y framework de contratos inteligentes construido sobre Rust para blockchains compatibles con Substrate. Los contratos se escriben como codigo Rust usando atributos de Ink! y compilan a WebAssembly para ejecutarse en pallets de contratos compatibles.\n\nDa a los autores de contratos acceso a herramientas, tipos, pruebas y flujos de paquetes de Rust mientras apunta a runtimes blockchain. Ink! es comun en Polkadot, Substrate y ecosistemas relacionados.',
    },
    it: {
      name: 'Ink!',
      description: 'DSL incorporato basato su Rust per smart contract WebAssembly.',
      longDescription:
        'Ink! e un linguaggio e framework per smart contract costruito su Rust per blockchain compatibili con Substrate. I contratti sono scritti come codice Rust usando attributi Ink! e compilano in WebAssembly per l esecuzione da parte di pallet di contratti compatibili.\n\nOffre agli autori di smart contract accesso a strumenti, tipi, test e workflow di pacchetti Rust mentre punta a runtime blockchain. Ink! e comune in Polkadot, Substrate ed ecosistemi correlati.',
    },
    fr: {
      name: 'Ink!',
      description: 'DSL integre base sur Rust pour ecrire des contrats intelligents WebAssembly.',
      longDescription:
        'Ink! est un langage et framework de contrats intelligents construit sur Rust pour les blockchains compatibles Substrate. Les contrats sont ecrits comme du code Rust avec des attributs Ink! et compiles vers WebAssembly pour etre executes par des pallets de contrats compatibles.\n\nIl donne aux auteurs de contrats l acces aux outils, types, tests et flux de paquets Rust tout en ciblant des runtimes blockchain. Ink! est courant dans Polkadot, Substrate et les ecosystemes associes.',
    },
    de: {
      name: 'Ink!',
      description: 'Rust-basierte eingebettete DSL zum Schreiben von WebAssembly-Smart-Contracts.',
      longDescription:
        'Ink! ist eine Smart-Contract-Sprache und ein Framework auf Basis von Rust fur Substrate-kompatible Blockchains. Vertrage werden als Rust-Code mit Ink!-Attributen geschrieben und zu WebAssembly kompiliert, damit kompatible Contract-Pallets sie ausfuhren konnen.\n\nAutorinnen und Autoren erhalten Zugriff auf Rust-Werkzeuge, Typen, Tests und Paket-Workflows, wahrend Blockchain-Runtimes adressiert werden. Ink! ist in Polkadot, Substrate und verwandten Okosystemen verbreitet.',
    },
    pt: {
      name: 'Ink!',
      description: 'DSL embutida baseada em Rust para escrever contratos inteligentes WebAssembly.',
      longDescription:
        'Ink! e uma linguagem e framework de contratos inteligentes criada sobre Rust para blockchains compativeis com Substrate. Os contratos sao escritos como codigo Rust usando atributos Ink! e compilam para WebAssembly para execucao por pallets de contratos compativeis.\n\nEla da a autores de contratos acesso a ferramentas, tipos, testes e fluxos de pacotes de Rust enquanto mira runtimes blockchain. Ink! e comum em Polkadot, Substrate e ecossistemas relacionados.',
    },
  },
} satisfies Language;
