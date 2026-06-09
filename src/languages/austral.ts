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
  },
} satisfies Language;
