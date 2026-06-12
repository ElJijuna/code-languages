import type { Language } from '../types';

export const plI = {
  slug: 'pl-i',
  publishedDate: '1964-01-01',
  extensions: ['.pli', '.pl1'],
  author: 'IBM',
  website: 'https://www.ibm.com/products/pli-compiler-aix',
  paradigms: ['imperative', 'procedural', 'structured'],
  tooling: {
    runtimes: ['IBM Enterprise PL/I', 'Open PL/I compilers'],
    ecosystems: ['Mainframe', 'Enterprise', 'Scientific Computing'],
  },
  version: 'Enterprise PL/I 6.2',
  logo: 'https://dummyimage.com/32x32/1F2937/ffffff.png&text=PL1',
  color: '#1F2937',
  i18n: {
    en: {
      name: 'PL/I',
      description:
        'An IBM language combining business, scientific, and systems programming features.',
      longDescription:
        'PL/I was designed by IBM to cover business data processing, scientific computing, and systems programming in one language. It combines block structure, strong data-description facilities, exceptions, concurrency features, and rich numeric support.\n\nPL/I remains associated with mainframe and enterprise systems, where long-lived applications depend on its data handling, batch processing, and compatibility with IBM tooling.',
    },
    es: {
      name: 'PL/I',
      description:
        'Lenguaje de IBM que combina rasgos de programacion empresarial, cientifica y de sistemas.',
      longDescription:
        'PL/I fue disenado por IBM para cubrir procesamiento empresarial, computacion cientifica y programacion de sistemas en un solo lenguaje. Combina estructura de bloques, descripciones de datos, excepciones, concurrencia y soporte numerico amplio.\n\nSigue asociado a mainframes y sistemas empresariales donde aplicaciones de larga vida dependen de su manejo de datos, procesos batch y herramientas IBM.',
    },
  },
} satisfies Language;
