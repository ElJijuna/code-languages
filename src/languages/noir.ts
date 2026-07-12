import type { Language } from '@/types';

export const noir = {
  slug: 'noir',
  status: 'experimental',
  publishedDate: '2022-01-01',
  extensions: ['.nr'],
  author: 'Aztec Labs',
  website: 'https://noir-lang.org',
  paradigms: ['imperative', 'declarative', 'zero-knowledge'],
  tooling: {
    runtimes: ['ACVM'],
    packageManagers: ['Nargo'],
    ecosystems: ['Blockchain', 'Cryptography', 'Web3'],
  },
  version: '1.0.0-beta',
  logo: 'https://avatars.githubusercontent.com/u/72610319?v=4',
  color: '#2F1F49',
  i18n: {
    en: {
      name: 'Noir',
      description: 'A Rust-like language for writing zero-knowledge proof circuits.',
      longDescription:
        'Noir is a domain-specific language for writing zero-knowledge circuits, developed by Aztec Labs. Programs written in Rust-like syntax compile to an intermediate representation (ACIR) that can target multiple proving backends, abstracting away the cryptographic machinery of ZK-SNARKs.\n\nWith the Nargo toolchain for building, testing, and proving, Noir is used for private smart contracts, identity proofs, and verifiable computation across the zero-knowledge ecosystem.',
    },
    es: {
      name: 'Noir',
      description:
        'Un lenguaje similar a Rust para escribir circuitos de pruebas de conocimiento cero.',
      longDescription:
        'Noir es un lenguaje de dominio específico para escribir circuitos de conocimiento cero, desarrollado por Aztec Labs. Los programas, con sintaxis similar a Rust, compilan a una representación intermedia (ACIR) que puede apuntar a múltiples backends de prueba, abstrayendo la maquinaria criptográfica de los ZK-SNARKs.\n\nCon la cadena de herramientas Nargo para compilar, probar y generar pruebas, Noir se usa en contratos inteligentes privados, pruebas de identidad y computación verificable en el ecosistema de conocimiento cero.',
    },
    it: {
      name: 'Noir',
      description: 'Un linguaggio simile a Rust per scrivere circuiti a conoscenza zero.',
      longDescription:
        "Noir è un linguaggio di dominio specifico per scrivere circuiti a conoscenza zero, sviluppato da Aztec Labs. I programmi, con sintassi simile a Rust, compilano in una rappresentazione intermedia (ACIR) che può puntare a più backend di prova, astraendo la macchina crittografica degli ZK-SNARK.\n\nCon la toolchain Nargo per compilare, testare e generare prove, Noir è usato per smart contract privati, prove di identità e computazione verificabile in tutto l'ecosistema a conoscenza zero.",
    },
    fr: {
      name: 'Noir',
      description:
        'Un langage proche de Rust pour écrire des circuits à divulgation nulle de connaissance.',
      longDescription:
        "Noir est un langage dédié à l'écriture de circuits à divulgation nulle de connaissance, développé par Aztec Labs. Les programmes, à la syntaxe proche de Rust, compilent vers une représentation intermédiaire (ACIR) capable de cibler plusieurs backends de preuve, en masquant la machinerie cryptographique des ZK-SNARKs.\n\nAvec la chaîne d'outils Nargo pour compiler, tester et prouver, Noir sert aux contrats intelligents privés, aux preuves d'identité et au calcul vérifiable dans l'écosystème zero-knowledge.",
    },
    de: {
      name: 'Noir',
      description:
        'Eine Rust-ähnliche Sprache zum Schreiben von Zero-Knowledge-Beweis-Schaltkreisen.',
      longDescription:
        'Noir ist eine domänenspezifische Sprache zum Schreiben von Zero-Knowledge-Schaltkreisen, entwickelt von Aztec Labs. Programme in Rust-ähnlicher Syntax kompilieren zu einer Zwischendarstellung (ACIR), die mehrere Proving-Backends ansteuern kann und die kryptografische Maschinerie von ZK-SNARKs abstrahiert.\n\nMit der Nargo-Toolchain zum Bauen, Testen und Beweisen wird Noir für private Smart Contracts, Identitätsnachweise und verifizierbare Berechnungen im Zero-Knowledge-Ökosystem eingesetzt.',
    },
    pt: {
      name: 'Noir',
      description: 'Uma linguagem parecida com Rust para escrever circuitos de conhecimento zero.',
      longDescription:
        'Noir é uma linguagem de domínio específico para escrever circuitos de conhecimento zero, desenvolvida pela Aztec Labs. Os programas, com sintaxe parecida com Rust, compilam para uma representação intermediária (ACIR) que pode mirar vários backends de prova, abstraindo a maquinaria criptográfica dos ZK-SNARKs.\n\nCom a toolchain Nargo para compilar, testar e provar, o Noir é usado em contratos inteligentes privados, provas de identidade e computação verificável em todo o ecossistema de conhecimento zero.',
    },
  },
} satisfies Language;
