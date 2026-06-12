import type { Language } from '../types';

export const austral = {
  slug: 'austral',
  publishedDate: '2021-01-01',
  extensions: ['.aum', '.aui'],
  author: 'Fernando Borretti',
  website: 'https://austral-lang.org',
  paradigms: ['imperative', 'systems', 'procedural'],
  tooling: {
    runtimes: ['Austral compiler'],
    ecosystems: ['Systems Programming', 'Memory Safety', 'Research'],
  },
  version: '0.1.0',
  logo: 'https://dummyimage.com/32x32/0F766E/ffffff.png&text=Au',
  color: '#0F766E',
  i18n: {
    en: {
      name: 'Austral',
      description:
        'A systems language built around linear types, capability safety, and explicit memory control.',
      longDescription:
        'Austral is an experimental systems programming language that uses linear types to make ownership and resource handling explicit while keeping low-level control available to the programmer.\n\nIts design emphasizes capability safety, simple compilation targets, readable syntax, and research into practical ways to prevent resource misuse in native programs.',
    },
    es: {
      name: 'Austral',
      description:
        'Un lenguaje de sistemas basado en tipos lineales, capacidades y memoria explicita.',
      longDescription:
        'Austral es un lenguaje experimental de sistemas que usa tipos lineales para hacer explicito el manejo de propiedad y recursos sin perder control de bajo nivel.\n\nSu diseno enfatiza seguridad por capacidades, objetivos de compilacion simples y formas practicas de evitar mal uso de recursos.',
    },
    it: {
      name: 'Austral',
      description:
        'Un linguaggio di sistema basato su tipi lineari, sicurezza delle capacità e controllo esplicito della memoria.',
      longDescription:
        "Austral è un linguaggio sperimentale di programmazione di sistemi che utilizza tipi lineari per rendere esplicite la gestione della proprietà e delle risorse, mantenendo al contempo il controllo a basso livello disponibile per il programmatore.\n\nIl suo design enfatizza la sicurezza delle capacità, obiettivi di compilazione semplici, una sintassi leggibile e la ricerca di modi pratici per prevenire l'uso improprio delle risorse nei programmi nativi.",
    },
    fr: {
      name: 'Austral',
      description:
        'Un langage de programmation système basé sur les types linéaires, la sécurité des capacités et le contrôle explicite de la mémoire.',
      longDescription:
        "Austral est un langage de programmation système expérimental qui utilise les types linéaires pour rendre la gestion de la propriété et des ressources explicites tout en conservant un contrôle bas niveau pour le programmeur.\n\nSon design met l'accent sur la sécurité des capacités, des cibles de compilation simples, une syntaxe lisible et la recherche de moyens pratiques pour prévenir l'utilisation abusive des ressources dans les programmes natifs.",
    },
    de: {
      name: 'Austral',
      description:
        'Eine Systemsprache, die auf linearen Typen, Capability-Sicherheit und expliziter Speicherverwaltung basiert.',
      longDescription:
        'Austral ist eine experimentelle Systemsprache, die lineare Typen verwendet, um Ownership und Ressourcenmanagement explizit zu machen und gleichzeitig dem Programmierer die Kontrolle über niedrige Ebenen zu ermöglichen.\n\nIhr Design betont Capability-Sicherheit, einfache Kompilierungsziele, lesbare Syntax und Forschung zur praktischen Verhinderung von Ressourcenmissbrauch in nativen Programmen.',
    },
    pt: {
      name: 'Austral',
      description:
        'Uma linguagem de sistemas construída em torno de tipos lineares, segurança por capacidade e controle explícito de memória.',
      longDescription:
        'Austral é uma linguagem experimental de programação de sistemas que utiliza tipos lineares para tornar a propriedade e o gerenciamento de recursos explícitos, mantendo o controle de baixo nível disponível para o programador.\n\nSeu design enfatiza a segurança por capacidade, alvos de compilação simples, sintaxe legível e pesquisa em maneiras práticas de prevenir o uso indevido de recursos em programas nativos.',
    },
  },
} satisfies Language;
