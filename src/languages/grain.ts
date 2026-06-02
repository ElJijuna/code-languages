import type { Language } from '../types';

export const grain = {
  slug: 'grain',
  publishedDate: '2020-08-04',
  extensions: ['.gr'],
  author: 'Oscar Spencer',
  website: 'https://grain-lang.org',
  paradigms: ['functional', 'imperative'],
  tooling: {
    runtimes: ['grain CLI', 'WebAssembly'],
    packageManagers: ['grain (built-in)'],
    ecosystems: ['WebAssembly', 'Web', 'Server'],
  },
  version: '0.6.5',
  logo: 'https://avatars.githubusercontent.com/u/54953488?v=4',
  color: '#7C4DFF',
  i18n: {
    en: {
      name: 'Grain',
      description:
        'A functional programming language that compiles to WebAssembly first, featuring a strong type system and memory safety without garbage collection pauses.',
      longDescription:
        'Grain is a strongly typed, functional programming language that targets WebAssembly as its primary compilation target. Designed from the ground up with WebAssembly in mind, it produces compact and efficient WASM modules that run in browsers, Node.js, and any WASI-compliant runtime.\n\nGrain features algebraic data types, pattern matching, type inference, closures, and a module system. Its memory model avoids garbage collection pauses through reference counting with cycle detection. The standard library covers strings, numbers, lists, maps, file I/O, and more, making Grain suitable for building both web frontend and server-side WebAssembly applications.',
    },
    es: {
      name: 'Grain',
      description:
        'Lenguaje funcional que compila a WebAssembly, con un sistema de tipos fuerte y seguridad de memoria sin pausas de recolección de basura.',
      longDescription:
        'Grain es un lenguaje funcional de tipado fuerte que tiene WebAssembly como destino principal de compilación. Diseñado desde cero pensando en WebAssembly, produce módulos WASM compactos y eficientes que se ejecutan en navegadores, Node.js y cualquier runtime compatible con WASI.\n\nGrain incluye tipos de datos algebraicos, coincidencia de patrones, inferencia de tipos, closures y un sistema de módulos. Su modelo de memoria evita pausas de GC mediante conteo de referencias con detección de ciclos.',
    },
    it: {
      name: 'Grain',
      description:
        'Linguaggio funzionale che compila in WebAssembly, con un sistema di tipi forte e sicurezza della memoria senza pause di garbage collection.',
      longDescription:
        'Grain è un linguaggio funzionale fortemente tipizzato che ha WebAssembly come target di compilazione principale. Progettato da zero pensando a WebAssembly, produce moduli WASM compatti ed efficienti che girano nei browser, Node.js e qualsiasi runtime compatibile con WASI.\n\nGrain include tipi di dati algebrici, pattern matching, inferenza di tipi, closure e un sistema di moduli. Il suo modello di memoria evita le pause GC tramite reference counting con rilevamento dei cicli.',
    },
    fr: {
      name: 'Grain',
      description:
        'Langage fonctionnel qui compile vers WebAssembly, avec un système de types fort et une sécurité mémoire sans pauses de garbage collection.',
      longDescription:
        "Grain est un langage fonctionnel fortement typé qui cible WebAssembly comme destination de compilation principale. Conçu dès le départ en pensant à WebAssembly, il produit des modules WASM compacts et efficaces qui s'exécutent dans les navigateurs, Node.js et tout runtime compatible WASI.\n\nGrain inclut des types de données algébriques, le pattern matching, l'inférence de types, les closures et un système de modules. Son modèle mémoire évite les pauses GC grâce au comptage de références avec détection de cycles.",
    },
    de: {
      name: 'Grain',
      description:
        'Eine funktionale Programmiersprache, die primär nach WebAssembly kompiliert, mit einem starken Typsystem und Speichersicherheit ohne Garbage-Collection-Pausen.',
      longDescription:
        'Grain ist eine stark typisierte, funktionale Programmiersprache, die WebAssembly als primäres Kompilierungsziel verwendet. Von Grund auf mit WebAssembly im Sinn entwickelt, erzeugt sie kompakte und effiziente WASM-Module, die in Browsern, Node.js und jeder WASI-kompatiblen Laufzeitumgebung ausgeführt werden können.\n\nGrain bietet algebraische Datentypen, Pattern Matching, Typinferenz, Closures und ein Modulsystem. Das Speichermodell vermeidet GC-Pausen durch Referenzzählung mit Zyklenerkennung.',
    },
    pt: {
      name: 'Grain',
      description:
        'Linguagem funcional que compila para WebAssembly, com um sistema de tipos forte e segurança de memória sem pausas de garbage collection.',
      longDescription:
        'Grain é uma linguagem funcional fortemente tipada que tem WebAssembly como principal alvo de compilação. Projetada do zero pensando em WebAssembly, produz módulos WASM compactos e eficientes que rodam em navegadores, Node.js e qualquer runtime compatível com WASI.\n\nGrain inclui tipos de dados algébricos, correspondência de padrões, inferência de tipos, closures e um sistema de módulos. Seu modelo de memória evita pausas de GC por meio de contagem de referências com detecção de ciclos.',
    },
  },
} satisfies Language;
