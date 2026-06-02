import type { Language } from '../types';

export const vyper = {
  slug: 'vyper',
  publishedDate: '2017-07-19',
  extensions: ['.vy'],
  author: 'Vyper contributors',
  website: 'https://vyperlang.org',
  paradigms: ['smart-contract', 'statically typed', 'domain-specific', 'imperative'],
  tooling: {
    runtimes: ['Ethereum Virtual Machine'],
    packageManagers: ['pip', 'uv'],
    ecosystems: ['Ethereum', 'Smart Contracts', 'Web3'],
  },
  version: '0.4.3',
  logo: 'https://avatars.githubusercontent.com/u/37288461?v=4',
  color: '#3C3C3D',
  i18n: {
    en: {
      name: 'Vyper',
      description: 'A Pythonic smart contract language for the Ethereum Virtual Machine.',
      longDescription:
        'Vyper is a contract language for Ethereum that favors explicit behavior, bounds, and auditability over broad language surface area. Its syntax is Python-like while its compiler emits EVM bytecode.\n\nIt is used for Ethereum smart contracts, financial protocols, on-chain experiments, and codebases that prefer a deliberately constrained contract language.',
    },
    es: {
      name: 'Vyper',
      description: 'Un lenguaje de smart contracts con sintaxis Python para Ethereum.',
      longDescription:
        'Vyper es un lenguaje de contratos para Ethereum que favorece comportamiento explicito, limites y auditabilidad sobre una superficie amplia del lenguaje. Su sintaxis es parecida a Python y su compilador emite bytecode EVM.\n\nSe usa en smart contracts de Ethereum, protocolos financieros, experimentos on-chain y codebases que prefieren un lenguaje de contratos deliberadamente restringido.',
    },
    it: {
      name: 'Vyper',
      description:
        'Un linguaggio di contratto intelligente in stile Python per la Ethereum Virtual Machine.',
      longDescription:
        "Vyper e un linguaggio di contratto per Ethereum che privilegia il comportamento esplicito, i limiti e l'auditabilita rispetto a un'ampia superficie linguistica. La sua sintassi e simile a Python, mentre il suo compilatore emette bytecode EVM.\n\nE utilizzato per contratti intelligenti di Ethereum, protocolli finanziari, esperimenti on-chain e codebase che preferiscono un linguaggio di contratto deliberatamente ristretto.",
    },
    fr: {
      name: 'Vyper',
      description:
        'Un langage de contrat intelligent Pythonique pour la Machine Virtuelle Ethereum.',
      longDescription:
        "Vyper est un langage de contrat pour Ethereum qui privilegie le comportement explicite, les limites et l'auditabilite par rapport a une vaste surface de langage. Sa syntaxe est similaire a Python, tandis que son compilateur emet du bytecode EVM.\n\nIl est utilise pour les contrats intelligents Ethereum, les protocoles financiers, les experiences sur chaine et les bases de code qui preferent un langage de contrat deliberement restreint.",
    },
    de: {
      name: 'Vyper',
      description:
        'Eine Python-\u00e4hnliche Sprache f\u00fcr Smart Contracts f\u00fcr die Ethereum Virtual Machine.',
      longDescription:
        'Vyper ist eine Vertragssprache f\u00fcr Ethereum, die explizites Verhalten, Grenzen und Pr\u00fcfbarkeit gegen\u00fcber einem breiten Sprachumfang priorisiert. Ihre Syntax \u00e4hnelt Python, w\u00e4hrend ihr Compiler EVM-Bytecode erzeugt.\n\nSie wird f\u00fcr Ethereum-Smart Contracts, Finanzprotokolle, On-Chain-Experimente und Codebasen verwendet, die eine absichtlich eingeschr\u00e4nkte Vertragssprache bevorzugen.',
    },
    pt: {
      name: 'Vyper',
      description: 'Linguagem de contrato Pythonic para a M\u00e1quina Virtual Ethereum.',
      longDescription:
        'Vyper \u00e9 uma linguagem de contrato para Ethereum que favorece o comportamento expl\u00edcito, limites e auditabilidade em vez de uma ampla superf\u00edcie de linguagem. Sua sintaxe \u00e9 semelhante \u00e0 do Python, enquanto seu compilador emite bytecode EVM.\n\n\u00c9 usada para contratos inteligentes Ethereum, protocolos financeiros, experimentos on-chain e c\u00f3digo que prefere uma linguagem de contrato deliberadamente restrita.',
    },
  },
} satisfies Language;
