import type { Language } from '@/types';

export const cairo = {
  slug: 'cairo',
  publishedDate: '2020-07-01',
  extensions: ['.cairo'],
  author: 'StarkWare Industries',
  website: 'https://www.cairo-lang.org',
  paradigms: ['functional', 'imperative'],
  tooling: {
    runtimes: ['Cairo VM', 'CASM'],
    packageManagers: ['Scarb'],
    ecosystems: ['Blockchain', 'Smart Contracts', 'StarkNet', 'ZK Proofs'],
  },
  version: '2.19.0',
  logo: 'https://avatars.githubusercontent.com/u/65030650?v=4',
  color: '#FF6B35',
  i18n: {
    en: {
      name: 'Cairo',
      description:
        'A Rust-inspired programming language for writing provable programs and smart contracts on StarkNet using zero-knowledge proofs.',
      longDescription:
        'Cairo is a programming language designed by StarkWare Industries for writing provable programs — computations whose correctness can be verified using STARK zero-knowledge proofs. It powers the StarkNet Layer-2 network on Ethereum and enables smart contracts that can scale throughput while preserving cryptographic verifiability.\n\nCairo 1.0 (released 2023) introduced a Rust-inspired syntax with a strong ownership system, algebraic data types, pattern matching, and traits. It compiles to Sierra (Safe Intermediate Representation), which is then compiled to Cairo Assembly (CASM) for execution in the Cairo VM. The Scarb build tool manages packages from the on-chain registry.',
    },
    es: {
      name: 'Cairo',
      description:
        'Un lenguaje de programación inspirado en Rust para escribir programas demostrables y contratos inteligentes en StarkNet usando pruebas de conocimiento cero.',
      longDescription:
        'Cairo es un lenguaje diseñado por StarkWare Industries para escribir programas demostrables cuya corrección puede verificarse con pruebas STARK de conocimiento cero. Impulsa la red StarkNet (Layer-2 sobre Ethereum) y permite contratos inteligentes escalables con verificabilidad criptográfica.\n\nCairo 1.0 introdujo una sintaxis inspirada en Rust con sistema de propiedad, tipos de datos algebraicos, coincidencia de patrones y traits. Compila a Sierra, que luego se compila a CASM para ejecutarse en la Cairo VM. Scarb gestiona los paquetes.',
    },
    it: {
      name: 'Cairo',
      description:
        'Un linguaggio di programmazione ispirato a Rust per scrivere programmi dimostrabili e smart contract su StarkNet usando prove a conoscenza zero.',
      longDescription:
        "Cairo è un linguaggio progettato da StarkWare Industries per scrivere programmi dimostrabili la cui correttezza può essere verificata con prove STARK a conoscenza zero. Alimenta la rete StarkNet (Layer-2 su Ethereum) e consente smart contract scalabili con verificabilità crittografica.\n\nCairo 1.0 ha introdotto una sintassi ispirata a Rust con sistema di ownership, tipi di dati algebrici, pattern matching e traits. Compila in Sierra, poi in CASM per l'esecuzione nella Cairo VM. Scarb gestisce i pacchetti.",
    },
    fr: {
      name: 'Cairo',
      description:
        'Langage Rust-inspiré pour écrire des programmes démontrables et des contrats intelligents sur StarkNet avec des preuves à connaissance nulle.',
      longDescription:
        "Cairo est un langage conçu par StarkWare Industries pour écrire des programmes démontrables dont la correction peut être vérifiée par des preuves STARK à connaissance nulle. Il alimente le réseau StarkNet (Layer-2 sur Ethereum) et permet des contrats intelligents évolutifs avec vérifiabilité cryptographique.\n\nCairo 1.0 a introduit une syntaxe inspirée de Rust avec un système d'ownership, des types de données algébriques, du pattern matching et des traits. Il compile en Sierra, puis en CASM pour l'exécution dans la Cairo VM. Scarb gère les paquets.",
    },
    de: {
      name: 'Cairo',
      description:
        'Eine Rust-inspirierte Programmiersprache für beweisbare Programme und Smart Contracts auf StarkNet mit Zero-Knowledge-Beweisen.',
      longDescription:
        'Cairo ist eine von StarkWare Industries entwickelte Sprache zum Schreiben beweisbarer Programme, deren Korrektheit mit STARK-Zero-Knowledge-Beweisen verifiziert werden kann. Sie treibt das StarkNet Layer-2-Netzwerk auf Ethereum an und ermöglicht skalierbare Smart Contracts mit kryptographischer Überprüfbarkeit.\n\nCairo 1.0 führte eine Rust-inspirierte Syntax mit Ownership-System, algebraischen Datentypen, Pattern Matching und Traits ein. Es kompiliert zu Sierra und dann zu CASM für die Ausführung in der Cairo VM. Scarb verwaltet die Pakete.',
    },
    pt: {
      name: 'Cairo',
      description:
        'Uma linguagem de programação inspirada em Rust para escrever programas comprováveis e contratos inteligentes na StarkNet usando provas de conhecimento zero.',
      longDescription:
        'Cairo é uma linguagem projetada pela StarkWare Industries para escrever programas comprováveis cuja correção pode ser verificada com provas STARK de conhecimento zero. Alimenta a rede StarkNet (Layer-2 no Ethereum) e permite contratos inteligentes escaláveis com verificabilidade criptográfica.\n\nCairo 1.0 introduziu uma sintaxe inspirada em Rust com sistema de ownership, tipos de dados algébricos, correspondência de padrões e traits. Compila para Sierra, depois para CASM para execução na Cairo VM. O Scarb gerencia os pacotes.',
    },
  },
} satisfies Language;
