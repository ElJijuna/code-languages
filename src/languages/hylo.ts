import type { Language } from '../types.js';

export const hylo = {
  slug: 'hylo',
  aliases: ['val'],
  publishedDate: '2021-01-24',
  extensions: ['.hylo'],
  author: 'The Hylo core team and contributors',
  website: 'https://hylo-lang.org',
  paradigms: ['systems', 'generic', 'value-oriented'],
  status: 'experimental',
  relations: {
    compilesTo: ['llvm-ir'],
  },
  tooling: {
    runtimes: ['Hylo compiler', 'LLVM'],
    ecosystems: ['Systems Programming', 'Native Applications', 'C Interoperability'],
  },
  version: 'development snapshot',
  logo: 'https://hylo-lang.org/hylo-favicon.png',
  color: '#7AD5FF',
  i18n: {
    en: {
      name: 'Hylo',
      description:
        'An experimental systems language built around mutable value semantics and generic programming.',
      longDescription:
        'Hylo is an experimental systems programming language centered on mutable value semantics and generic programming. It aims for memory safety, type safety, and data-race safety by default while supporting in-place mutation and ahead-of-time native compilation.\n\nThe language borrows ideas from Swift and develops zero-cost abstractions, C interoperability, structured concurrency, and LLVM-based compilation. Its compiler and language design remain under active development, so no stable release is available yet.',
    },
    es: {
      name: 'Hylo',
      description:
        'Lenguaje experimental de sistemas basado en semántica de valores mutables y programación genérica.',
      longDescription:
        'Hylo es un lenguaje experimental de programación de sistemas centrado en semántica de valores mutables y programación genérica. Busca seguridad de memoria, tipos y concurrencia por defecto, junto con mutación in situ y compilación nativa anticipada.\n\nEl lenguaje toma ideas de Swift y desarrolla abstracciones sin costo, interoperabilidad con C, concurrencia estructurada y compilación basada en LLVM. Tanto el compilador como el diseño siguen en desarrollo activo y aún no existe una versión estable.',
    },
    it: {
      name: 'Hylo',
      description:
        'Linguaggio di sistema sperimentale basato su semantica dei valori mutabili e programmazione generica.',
      longDescription:
        'Hylo è un linguaggio sperimentale di programmazione di sistema incentrato sulla semantica dei valori mutabili e sulla programmazione generica. Mira a offrire sicurezza di memoria, tipi e concorrenza per impostazione predefinita, con mutazione in loco e compilazione nativa anticipata.\n\nIl linguaggio riprende idee da Swift e sviluppa astrazioni a costo zero, interoperabilità con C, concorrenza strutturata e compilazione basata su LLVM. Compilatore e design sono ancora in sviluppo attivo e non esiste una versione stabile.',
    },
    fr: {
      name: 'Hylo',
      description:
        'Langage système expérimental fondé sur les valeurs mutables et la programmation générique.',
      longDescription:
        'Hylo est un langage expérimental de programmation système axé sur la sémantique des valeurs mutables et la programmation générique. Il vise par défaut la sûreté de la mémoire, des types et des accès concurrents, avec mutation sur place et compilation native anticipée.\n\nLe langage emprunte des idées à Swift et développe des abstractions sans surcoût, l’interopérabilité C, la concurrence structurée et une compilation fondée sur LLVM. Le compilateur et le langage restent en développement actif, sans version stable.',
    },
    de: {
      name: 'Hylo',
      description:
        'Eine experimentelle Systemsprache mit veränderlicher Wertsemantik und generischer Programmierung.',
      longDescription:
        'Hylo ist eine experimentelle Systemprogrammiersprache, deren Kern veränderliche Wertsemantik und generische Programmierung bilden. Sie zielt standardmäßig auf Speicher-, Typ- und Datenrennsicherheit sowie direkte Mutation und vorzeitige native Übersetzung.\n\nDie Sprache übernimmt Ideen aus Swift und entwickelt kostenfreie Abstraktionen, C-Interoperabilität, strukturierte Nebenläufigkeit und LLVM-basierte Übersetzung. Compiler und Sprachentwurf werden aktiv entwickelt; eine stabile Version gibt es noch nicht.',
    },
    pt: {
      name: 'Hylo',
      description:
        'Linguagem experimental de sistemas baseada em semântica de valores mutáveis e programação genérica.',
      longDescription:
        'Hylo é uma linguagem experimental de programação de sistemas centrada em semântica de valores mutáveis e programação genérica. Busca segurança de memória, tipos e concorrência por padrão, com mutação no local e compilação nativa antecipada.\n\nA linguagem incorpora ideias de Swift e desenvolve abstrações sem custo, interoperabilidade com C, concorrência estruturada e compilação baseada em LLVM. O compilador e o projeto da linguagem seguem em desenvolvimento ativo, ainda sem versão estável.',
    },
  },
} satisfies Language;
