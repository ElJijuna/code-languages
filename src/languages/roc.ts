import type { Language } from '@/types';

export const roc = {
  slug: 'roc',
  publishedDate: '2021-01-01',
  extensions: ['.roc'],
  author: 'Richard Feldman and contributors',
  website: 'https://www.roc-lang.org',
  paradigms: ['functional', 'pure', 'static'],
  tooling: {
    runtimes: ['Roc compiler'],
    packageManagers: ['Roc packages'],
    ecosystems: ['CLI Tools', 'WebAssembly', 'Functional Programming'],
  },
  version: 'development snapshot',
  logo: 'https://avatars.githubusercontent.com/u/96867701?v=4',
  color: '#7C3AED',
  i18n: {
    en: {
      name: 'Roc',
      description:
        'A fast, pure functional language focused on friendly syntax and platform-based apps.',
      longDescription:
        'Roc is a pure functional programming language focused on fast execution, approachable syntax, static typing, and a platform model where hosts provide capabilities to applications. It aims to make functional programming practical for command-line tools, services, and WebAssembly.\n\nThe language is still evolving, but its design explores abilities, automatic memory management without tracing GC pauses, and packaging workflows that separate application code from platform code.',
    },
    es: {
      name: 'Roc',
      description:
        'Lenguaje funcional puro y rapido con sintaxis amigable y apps basadas en plataformas.',
      longDescription:
        'Roc es un lenguaje funcional puro enfocado en ejecucion rapida, sintaxis accesible, tipado estatico y un modelo de plataformas donde el host provee capacidades a las aplicaciones. Busca hacer practica la programacion funcional para CLIs, servicios y WebAssembly.\n\nEl lenguaje sigue evolucionando, pero explora abilities, manejo automatico de memoria sin pausas de GC por trazado y paquetes que separan codigo de app y plataforma.',
    },
    it: {
      name: 'Roc',
      description:
        'Un linguaggio funzionale veloce e puro, incentrato su una sintassi intuitiva e applicazioni basate sulla piattaforma.',
      longDescription:
        "Roc è un linguaggio di programmazione funzionale puro focalizzato sull'esecuzione rapida, su una sintassi accessibile, sul tipaggio statico e su un modello di piattaforma in cui gli host forniscono funzionalità alle applicazioni. Mira a rendere la programmazione funzionale pratica per strumenti da riga di comando, servizi e WebAssembly.\n\nIl linguaggio è ancora in fase di sviluppo, ma il suo design esplora le capacità, l'automazione della gestione della memoria senza pause GC e l'impacchettamento dei flussi di lavoro che separano il codice dell'applicazione dal codice della piattaforma.",
    },
    fr: {
      name: 'Roc',
      description:
        'Un langage fonctionnel rapide et pur axé sur une syntaxe conviviale et les applications basées sur la plateforme.',
      longDescription:
        "Roc est un langage de programmation fonctionnelle pure axé sur l'exécution rapide, une syntaxe accessible, le typage statique et un modèle de plateforme où les hôtes fournissent des capacités aux applications. Il vise à rendre la programmation fonctionnelle pratique pour les outils en ligne de commande, les services et WebAssembly.\n\nLe langage est encore en développement, mais sa conception explore les capacités, la gestion automatique de la mémoire sans pauses GC et l'empaquetage des workflows qui séparent le code d'application du code de plateforme.",
    },
    de: {
      name: 'Roc',
      description:
        'Eine schnelle, reine funktionale Sprache mit freundlicher Syntax und plattformorientierten Anwendungen.',
      longDescription:
        'Roc ist eine reine funktionale Programmiersprache, die auf schnellen Ausführung, verständlicher Syntax, statischer Typisierung und einem Plattformmodell basiert, in dem Hosts Anwendungen Funktionen zur Verfügung stellen. Sie zielt darauf ab, funktionale Programmierung für Kommandozeilen-Tools, Dienste und WebAssembly praktikabel zu machen.\n\nDie Sprache befindet sich noch im Entwicklungsprozess, erkundet aber Möglichkeiten wie automatische Speicherverwaltung ohne Tracing-GC-Pausen sowie die Verpackung von Arbeitsabläufen, die Anwendungscode vom Plattformcode trennen.',
    },
    pt: {
      name: 'Roc',
      description:
        'Linguagem funcional pura rápida, com sintaxe amigável e aplicativos baseados em plataforma.',
      longDescription:
        'Roc é uma linguagem de programação funcional pura focada na execução rápida, sintaxe acessível, tipagem estática e um modelo de plataforma onde os hosts fornecem capacidades para as aplicações. Visa tornar a programação funcional prática para ferramentas de linha de comando, serviços e WebAssembly.\n\nA linguagem ainda está em desenvolvimento, mas seu design explora recursos como gerenciamento automático de memória sem pausas GC e empacotamento de fluxos de trabalho que separam o código da aplicação do código da plataforma.',
    },
  },
} satisfies Language;
