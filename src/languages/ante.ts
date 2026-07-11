import type { Language } from '@/types';

export const ante = {
  slug: 'ante',
  publishedDate: '2019-01-01',
  extensions: ['.ante'],
  author: 'Evan Haas',
  website: 'https://antelang.org',
  paradigms: ['functional', 'imperative', 'systems'],
  tooling: {
    runtimes: ['Ante compiler'],
    packageManagers: ['Ante package tooling'],
    ecosystems: ['Systems Programming', 'Research', 'Compiler Development'],
  },
  version: 'experimental',
  logo: 'https://antelang.org/img/apple-touch-icon.png',
  color: '#4F46E5',
  i18n: {
    en: {
      name: 'Ante',
      description:
        'A systems language exploring algebraic effects, type inference, and safe low-level programming.',
      longDescription:
        'Ante is an experimental programming language focused on combining systems-level control with high-level type system features such as algebraic effects, traits, and strong inference.\n\nIt is mainly used for language design research, compiler experimentation, and exploring how effect systems can model IO, mutation, and error handling without losing performance goals.',
    },
    es: {
      name: 'Ante',
      description:
        'Un lenguaje de sistemas que explora efectos algebraicos, inferencia y seguridad.',
      longDescription:
        'Ante es un lenguaje experimental que combina control de bajo nivel con rasgos de sistema de tipos como efectos algebraicos, traits e inferencia fuerte.\n\nSe usa sobre todo para investigacion de lenguajes, experimentos de compiladores y exploracion de sistemas de efectos para IO, mutacion y errores.',
    },
    it: {
      name: 'Ante',
      description:
        'Linguaggio di sistema per esplorare effetti algebrici, inferenza dei tipi e programmazione a basso livello sicura.',
      longDescription:
        "Ante è un linguaggio di programmazione sperimentale incentrato sulla combinazione di controllo a livello di sistema con funzionalità di tipo ad alto livello come effetti algebrici, tratti e forte inferenza.\n\nÈ principalmente utilizzato per la ricerca nel design del linguaggio, l'esperimento con compilatori ed esplorare come i sistemi di effetti possono modellare IO, mutazioni e gestione degli errori senza compromettere gli obiettivi di prestazioni.",
    },
    fr: {
      name: 'Ante',
      description:
        "Langage de programmation explorant les effets algébriques, l'inférence de types et la programmation à faible niveau sécurisée.",
      longDescription:
        "Ante est un langage de programmation expérimental axé sur la combinaison du contrôle au niveau système avec des fonctionnalités de type de haut niveau telles que les effets algébriques, les traits et une forte inférence.\n\nIl est principalement utilisé pour la recherche en conception de langages, l'expérimentation de compilateurs et l'exploration de la manière dont les systèmes d'effets peuvent modéliser les entrées/sorties, la mutation et la gestion des erreurs sans compromettre les objectifs de performance.",
    },
    de: {
      name: 'Ante',
      description:
        'Ein Systemprogrammierungssprache, die algebraische Effekte, Typinferenz und sicheres Low-Level-Programmieren erkundet.',
      longDescription:
        'Ante ist eine experimentelle Programmiersprache, die darauf abzielt, systemnahe Kontrolle mit High-Level-Funktionen wie algebraischen Effekten, Traits und starker Typinferenz zu kombinieren.\n\nSie wird hauptsächlich für Forschungszwecke im Bereich der Sprachgestaltung, Compilerentwicklung und zur Erforschung von Möglichkeiten verwendet, wie Effekt-Systeme IO, Mutation und Fehlerbehandlung modellieren können, ohne die Leistungsziele zu beeinträchtigen.',
    },
    pt: {
      name: 'Ante',
      description:
        'Linguagem de sistemas que explora efeitos algébricos, inferência de tipos e programação de baixo nível segura.',
      longDescription:
        'Ante é uma linguagem de programação experimental focada em combinar controle de nível de sistema com recursos de tipo de alto nível, como efeitos algébricos, traits e forte inferência.\n\nÉ usada principalmente para pesquisa no design de linguagens, experimentação de compiladores e explorar como sistemas de efeito podem modelar IO, mutação e tratamento de erros sem perder metas de desempenho.',
    },
  },
} satisfies Language;
