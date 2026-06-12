import type { Language } from '../types';

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
  },
} satisfies Language;
