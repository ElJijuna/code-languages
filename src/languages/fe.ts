import type { Language } from '@/types';

export const fe = {
  slug: 'fe',
  publishedDate: '2020-10-08',
  extensions: ['.fe'],
  author: 'Ethereum Foundation contributors',
  website: 'https://fe-lang.org',
  paradigms: ['smart contract', 'imperative', 'object-oriented'],
  tooling: {
    runtimes: ['Ethereum Virtual Machine'],
    ecosystems: ['Ethereum', 'EVM'],
  },
  version: 'experimental',
  logo: 'https://fe-lang.org/favicon.png',
  color: '#4F46E5',
  i18n: {
    en: {
      name: 'Fe',
      description: 'A statically typed smart contract language for the Ethereum Virtual Machine.',
      longDescription:
        'Fe is a smart contract language for Ethereum and other EVM-compatible chains. It aims to provide a Python-inspired syntax, static typing, explicitness, and safer defaults for contract development.\n\nThe language compiles to EVM bytecode and is designed for tooling-driven workflows around contracts, tests, and audits. Its ecosystem is experimental compared with Solidity, but useful for exploring alternative smart contract design.',
    },
    es: {
      name: 'Fe',
      description:
        'Lenguaje de contratos inteligentes con tipado estatico para la Maquina Virtual de Ethereum.',
      longDescription:
        'Fe es un lenguaje de contratos inteligentes para Ethereum y otras cadenas compatibles con EVM. Busca ofrecer una sintaxis inspirada en Python, tipado estatico, explicitud y valores predeterminados mas seguros para desarrollar contratos.\n\nEl lenguaje compila a bytecode EVM y esta pensado para flujos de trabajo guiados por herramientas alrededor de contratos, pruebas y auditorias. Su ecosistema es experimental frente a Solidity, pero sirve para explorar disenos alternativos de contratos inteligentes.',
    },
    it: {
      name: 'Fe',
      description:
        'Linguaggio per smart contract con tipizzazione statica per Ethereum Virtual Machine.',
      longDescription:
        'Fe e un linguaggio per smart contract destinato a Ethereum e ad altre chain compatibili con EVM. Punta a offrire una sintassi ispirata a Python, tipizzazione statica, esplicitezza e impostazioni predefinite piu sicure per lo sviluppo di contratti.\n\nIl linguaggio compila in bytecode EVM ed e pensato per flussi di lavoro basati su strumenti per contratti, test e audit. Il suo ecosistema e sperimentale rispetto a Solidity, ma utile per esplorare design alternativi di smart contract.',
    },
    fr: {
      name: 'Fe',
      description:
        'Langage de contrats intelligents a typage statique pour la machine virtuelle Ethereum.',
      longDescription:
        'Fe est un langage de contrats intelligents pour Ethereum et les autres chaines compatibles EVM. Il vise une syntaxe inspiree de Python, un typage statique, une grande explicitation et des valeurs par defaut plus sures pour le developpement de contrats.\n\nLe langage compile vers le bytecode EVM et s integre a des flux de travail outilles pour les contrats, les tests et les audits. Son ecosysteme reste experimental face a Solidity, mais il est utile pour explorer d autres conceptions de contrats intelligents.',
    },
    de: {
      name: 'Fe',
      description: 'Statisch typisierte Smart-Contract-Sprache fur die Ethereum Virtual Machine.',
      longDescription:
        'Fe ist eine Smart-Contract-Sprache fur Ethereum und andere EVM-kompatible Chains. Sie zielt auf eine von Python inspirierte Syntax, statische Typisierung, Explizitheit und sicherere Voreinstellungen fur die Vertragsentwicklung.\n\nDie Sprache kompiliert zu EVM-Bytecode und ist fur toolgestutzte Workflows rund um Vertrage, Tests und Audits gedacht. Ihr Okosystem ist im Vergleich zu Solidity experimentell, eignet sich aber zum Erkunden alternativer Smart-Contract-Designs.',
    },
    pt: {
      name: 'Fe',
      description:
        'Linguagem de contratos inteligentes com tipagem estatica para a Maquina Virtual Ethereum.',
      longDescription:
        'Fe e uma linguagem de contratos inteligentes para Ethereum e outras cadeias compativeis com EVM. Ela busca oferecer sintaxe inspirada em Python, tipagem estatica, explicitude e padroes mais seguros para o desenvolvimento de contratos.\n\nA linguagem compila para bytecode EVM e foi criada para fluxos de trabalho guiados por ferramentas em contratos, testes e auditorias. Seu ecossistema e experimental em comparacao com Solidity, mas util para explorar designs alternativos de contratos inteligentes.',
    },
  },
} satisfies Language;
