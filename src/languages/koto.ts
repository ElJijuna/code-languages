import type { Language } from '../types.js';

export const koto = {
  slug: 'koto',
  publishedDate: '2020-11-30',
  extensions: ['.koto'],
  author: 'Ian Hobson and contributors',
  website: 'https://koto.dev',
  paradigms: ['scripting', 'functional', 'imperative'],
  status: 'experimental',
  tooling: {
    runtimes: ['Koto VM'],
    packageManagers: ['Cargo'],
    ecosystems: ['Rust', 'Embedded Scripting', 'Game Development'],
  },
  version: '0.16.0',
  logo: 'https://raw.githubusercontent.com/koto-lang/koto/main/assets/koto.svg',
  color: '#191E99',
  i18n: {
    en: {
      name: 'Koto',
      description:
        'A lightweight, expressive scripting language for embedding in Rust applications or running standalone.',
      longDescription:
        'Koto is a lightweight scripting language designed primarily as an extension language for Rust applications. It favors a small set of concepts, low syntax noise, quick compilation, and an expressive mix of imperative and functional constructs.\n\nKoto can also run as a standalone command-line language with a REPL, bytecode virtual machine, core library, formatter, and browser playground. It remains pre-1.0 and should be treated as experimental while compatibility continues to mature.',
    },
    es: {
      name: 'Koto',
      description:
        'Lenguaje de scripting ligero y expresivo para integrarse con aplicaciones Rust o ejecutarse solo.',
      longDescription:
        'Koto es un lenguaje de scripting ligero diseñado principalmente como lenguaje de extensión para aplicaciones escritas en Rust. Favorece pocos conceptos, una sintaxis limpia, compilación rápida y una mezcla expresiva de construcciones imperativas y funcionales.\n\nKoto también puede ejecutarse como lenguaje independiente con CLI, REPL, máquina virtual de bytecode, biblioteca central, formateador y entorno web. Aún no llega a 1.0 y debe considerarse experimental mientras madura su compatibilidad.',
    },
    it: {
      name: 'Koto',
      description:
        'Linguaggio di scripting leggero ed espressivo, integrabile in applicazioni Rust o autonomo.',
      longDescription:
        'Koto è un linguaggio di scripting leggero progettato principalmente come linguaggio di estensione per applicazioni Rust. Predilige pochi concetti, una sintassi pulita, compilazione rapida e una combinazione espressiva di costrutti imperativi e funzionali.\n\nKoto può anche essere eseguito autonomamente con CLI, REPL, macchina virtuale bytecode, libreria principale, formatter e ambiente web. Non ha ancora raggiunto la versione 1.0 e resta sperimentale mentre la compatibilità matura.',
    },
    fr: {
      name: 'Koto',
      description:
        'Langage de script léger et expressif, intégrable aux applications Rust ou utilisable seul.',
      longDescription:
        'Koto est un langage de script léger conçu avant tout comme langage d’extension pour les applications Rust. Il privilégie peu de concepts, une syntaxe épurée, une compilation rapide et un mélange expressif de constructions impératives et fonctionnelles.\n\nKoto peut aussi fonctionner seul avec une CLI, un REPL, une machine virtuelle à bytecode, une bibliothèque de base, un formateur et un environnement web. Il reste antérieur à la version 1.0 et doit être considéré comme expérimental.',
    },
    de: {
      name: 'Koto',
      description:
        'Eine leichtgewichtige, ausdrucksstarke Skriptsprache für Rust-Anwendungen oder den Einzelbetrieb.',
      longDescription:
        'Koto ist eine leichtgewichtige Skriptsprache, die vor allem als Erweiterungssprache für Rust-Anwendungen entwickelt wurde. Sie setzt auf wenige Konzepte, wenig Syntaxrauschen, schnelle Übersetzung und eine ausdrucksstarke Mischung aus imperativen und funktionalen Konstrukten.\n\nKoto kann mit CLI, REPL, Bytecode-VM, Kernbibliothek, Formatierer und Webumgebung auch eigenständig laufen. Die Sprache hat Version 1.0 noch nicht erreicht und bleibt experimentell, während ihre Kompatibilität reift.',
    },
    pt: {
      name: 'Koto',
      description:
        'Linguagem de scripting leve e expressiva para integrar a aplicações Rust ou executar separadamente.',
      longDescription:
        'Koto é uma linguagem de scripting leve, criada principalmente como linguagem de extensão para aplicações Rust. Ela favorece poucos conceitos, sintaxe limpa, compilação rápida e uma combinação expressiva de construções imperativas e funcionais.\n\nKoto também funciona de forma independente com CLI, REPL, máquina virtual de bytecode, biblioteca central, formatador e ambiente web. Ainda não chegou à versão 1.0 e permanece experimental enquanto sua compatibilidade amadurece.',
    },
  },
} satisfies Language;
