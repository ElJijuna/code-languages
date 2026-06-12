import type { Language } from '../types';

export const self = {
  slug: 'self',
  publishedDate: '1987-01-01',
  extensions: ['.self'],
  author: 'David Ungar and Randall Smith',
  website: 'https://selflanguage.org',
  paradigms: ['prototype-based', 'object-oriented', 'dynamic'],
  tooling: {
    runtimes: ['Self VM'],
    ecosystems: ['Language Research', 'Interactive Environments', 'Prototype OO'],
  },
  version: '2024.1',
  logo: 'https://dummyimage.com/32x32/EA580C/ffffff.png&text=Se',
  color: '#EA580C',
  i18n: {
    en: {
      name: 'Self',
      description:
        'A prototype-based object language that influenced JavaScript, VM design, and live IDEs.',
      longDescription:
        'Self is a dynamic object-oriented language based on prototypes and message passing rather than classes. It was created as a research language for exploring object systems, live programming environments, and high-performance dynamic dispatch.\n\nSelf influenced JavaScript, Smalltalk VM work, adaptive optimization, and interactive development systems where objects can be inspected, changed, and extended while the program is running.',
    },
    es: {
      name: 'Self',
      description:
        'Lenguaje de objetos basado en prototipos que influyo en JavaScript, VMs e IDEs vivos.',
      longDescription:
        'Self es un lenguaje orientado a objetos dinamico basado en prototipos y envio de mensajes, no en clases. Fue creado como lenguaje de investigacion para explorar sistemas de objetos, entornos vivos y dispatch dinamico de alto rendimiento.\n\nInfluyo en JavaScript, trabajo de VMs de Smalltalk, optimizacion adaptativa y entornos interactivos donde los objetos pueden inspeccionarse y cambiarse mientras el programa corre.',
    },
  },
} satisfies Language;
