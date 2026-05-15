import type { Language } from "../types";

export const solidity = {
  slug: "solidity",
  publishedDate: "2015-07-30",
  extensions: [".sol"],
  author: "Gavin Wood / Ethereum Foundation / Solidity Team",
  website: "https://soliditylang.org",
  paradigms: ["contract-oriented", "object-oriented", "statically-typed", "imperative"],
  tooling: {
    runtimes: ["Ethereum Virtual Machine", "EVM-compatible chains"],
    packageManagers: ["npm", "Foundry", "Hardhat"],
    ecosystems: ["Ethereum", "Web3", "Smart Contracts", "Blockchain"],
  },
  version: "0.8.35",
  logo: "https://cdn.simpleicons.org/solidity/363636",
  i18n: {
    en: {
      name: "Solidity",
      description:
        "A statically typed smart contract language for Ethereum and EVM-compatible blockchains.",
      longDescription:
        "Solidity is a statically typed, contract-oriented programming language designed for writing smart contracts that run on the Ethereum Virtual Machine and compatible blockchain networks. It supports contracts, libraries, interfaces, inheritance, modifiers, events, custom errors, ABI encoding, and explicit visibility and mutability rules.\n\nIt is used to build decentralized applications, token contracts, DAOs, DeFi protocols, NFT contracts, governance systems, and other on-chain programs where deterministic execution and verifiable state transitions are required.",
    },
    es: {
      name: "Solidity",
      description:
        "Un lenguaje tipado estaticamente para smart contracts en Ethereum y blockchains compatibles con EVM.",
      longDescription:
        "Solidity es un lenguaje de programacion tipado estaticamente y orientado a contratos, disenado para escribir smart contracts que se ejecutan en Ethereum Virtual Machine y redes blockchain compatibles. Soporta contratos, bibliotecas, interfaces, herencia, modificadores, eventos, errores personalizados, codificacion ABI y reglas explicitas de visibilidad y mutabilidad.\n\nSe usa para construir aplicaciones descentralizadas, contratos de tokens, DAOs, protocolos DeFi, contratos NFT, sistemas de gobernanza y otros programas on-chain donde se requiere ejecucion determinista y transiciones de estado verificables.",
    },
  },
} satisfies Language;
