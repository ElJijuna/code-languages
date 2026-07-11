import type { Language } from '@/types';

export const solidity = {
  slug: 'solidity',
  publishedDate: '2015-07-30',
  extensions: ['.sol'],
  author: 'Gavin Wood / Ethereum Foundation / Solidity Team',
  website: 'https://soliditylang.org',
  paradigms: ['contract-oriented', 'object-oriented', 'statically-typed', 'imperative'],
  tooling: {
    runtimes: ['Ethereum Virtual Machine', 'EVM-compatible chains'],
    packageManagers: ['npm', 'Foundry', 'Hardhat'],
    ecosystems: ['Ethereum', 'Web3', 'Smart Contracts', 'Blockchain'],
  },
  version: '0.8.36',
  logo: 'https://cdn.simpleicons.org/solidity/363636',
  color: '#363636',
  i18n: {
    en: {
      name: 'Solidity',
      description:
        'A statically typed smart contract language for Ethereum and EVM-compatible blockchains.',
      longDescription:
        'Solidity is a statically typed, contract-oriented programming language designed for writing smart contracts that run on the Ethereum Virtual Machine and compatible blockchain networks. It supports contracts, libraries, interfaces, inheritance, modifiers, events, custom errors, ABI encoding, and explicit visibility and mutability rules.\n\nIt is used to build decentralized applications, token contracts, DAOs, DeFi protocols, NFT contracts, governance systems, and other on-chain programs where deterministic execution and verifiable state transitions are required.',
    },
    es: {
      name: 'Solidity',
      description:
        'Un lenguaje tipado estaticamente para smart contracts en Ethereum y blockchains compatibles con EVM.',
      longDescription:
        'Solidity es un lenguaje de programacion tipado estaticamente y orientado a contratos, disenado para escribir smart contracts que se ejecutan en Ethereum Virtual Machine y redes blockchain compatibles. Soporta contratos, bibliotecas, interfaces, herencia, modificadores, eventos, errores personalizados, codificacion ABI y reglas explicitas de visibilidad y mutabilidad.\n\nSe usa para construir aplicaciones descentralizadas, contratos de tokens, DAOs, protocolos DeFi, contratos NFT, sistemas de gobernanza y otros programas on-chain donde se requiere ejecucion determinista y transiciones de estado verificables.',
    },
    it: {
      name: 'Solidity',
      description:
        'Un linguaggio di contratto intelligente di tipo statico per Ethereum e blockchain compatibili con EVM.',
      longDescription:
        "Solidity e un linguaggio di programmazione di tipo statico, orientato ai contratti, progettato per scrivere contratti intelligenti che vengono eseguiti sulla Ethereum Virtual Machine e su reti blockchain compatibili. Supporta contratti, librerie, interfacce, ereditarieta, modificatori, eventi, errori personalizzati, codifica ABI e regole esplicite di visibilita e mutabilita.\n\nViene utilizzato per costruire applicazioni decentralizzate, contratti di token, DAO, protocolli DeFi, contratti NFT, sistemi di governance e altri programmi on-chain dove e richiesta l'esecuzione deterministica e le transizioni di stato verificabili.",
    },
    fr: {
      name: 'Solidity',
      description:
        "Un langage de contrat intelligent de type statique pour Ethereum et les blockchains compatibles avec l'EVM.",
      longDescription:
        "Solidity est un langage de programmation de type statique, oriente contrats, concu pour ecrire des contrats intelligents qui s'executent sur la Machine Virtuelle Ethereum et sur les reseaux de blockchains compatibles. Il prend en charge les contrats, les bibliotheques, les interfaces, l'heritage, les modificateurs, les evenements, les erreurs personnalisees, le codage ABI et les regles explicites de visibilite et de mutabilite. \n\nIl est utilise pour construire des applications decentralisees, des contrats de jetons, des DAOs, des protocoles DeFi, des contrats NFT, des systemes de gouvernance et d'autres programmes en ligne ou une execution deterministe et des transitions d'etat verifiables sont requises.",
    },
    de: {
      name: 'Solidity',
      description:
        'Eine statisch typisierte Smart-Contract-Sprache für Ethereum und EVM-kompatible Blockchains.',
      longDescription:
        'Solidity ist eine statisch typisierte, auf Verträge ausgerichtete Programmiersprache, die für das Schreiben von Smart Contracts entwickelt wurde, die auf der Ethereum Virtual Machine und kompatiblen Blockchain-Netzwerken ausgeführt werden. Sie unterstützt Verträge, Bibliotheken, Schnittstellen, Vererbung, Modifikatoren, Ereignisse, benutzerdefinierte Fehler, ABI-Kodierung und explizite Regeln für Sichtbarkeit und Veränderbarkeit.\n\nSie wird verwendet, um dezentrale Anwendungen, Token-Verträge, DAOs, DeFi-Protokolle, NFT-Verträge, Governance-Systeme und andere On-Chain-Programme zu erstellen, bei denen deterministische Ausführung und überprüfbare Zustandsübergänge erforderlich sind.',
    },
    pt: {
      name: 'Solidity',
      description:
        'Linguagem de contrato estaticamente tipada para Ethereum e blockchains compatíveis com EVM.',
      longDescription:
        'Solidity é uma linguagem de programação estaticamente tipada, orientada a contratos, projetada para escrever contratos inteligentes que executam na Máquina Virtual Ethereum e em redes blockchain compatíveis. Suporta contratos, bibliotecas, interfaces, herança, modificadores, eventos, erros personalizados, codificação ABI e regras explícitas de visibilidade e mutabilidade.\n\nÉ usada para construir aplicações descentralizadas, contratos de tokens, DAOs, protocolos DeFi, contratos de NFT, sistemas de governança e outros programas on-chain onde a execução determinística e as transições de estado verificáveis são necessárias.',
    },
  },
} satisfies Language;
