import type { Language } from '../types';

export const rebol = {
  slug: 'rebol',
  publishedDate: '1997-01-01',
  extensions: ['.r', '.reb', '.rebol'],
  author: 'Carl Sassenrath',
  website: 'https://www.rebol.com',
  paradigms: ['functional', 'dataflow', 'scripting'],
  tooling: {
    runtimes: ['REBOL 2', 'Rebol 3', 'Ren-C'],
    ecosystems: ['Scripting', 'DSLs', 'Network Tools'],
  },
  version: 'Rebol 3',
  logo: 'https://dummyimage.com/32x32/7C2D12/ffffff.png&text=Re',
  color: '#7C2D12',
  i18n: {
    en: {
      name: 'Rebol',
      description: 'A compact messaging language built around code-as-data blocks and dialects.',
      longDescription:
        'Rebol is a small language created around the idea of relative expressions, blocks as data, and domain-specific dialects. Its syntax makes structured data and executable code share one compact representation.\n\nRebol has been used for network utilities, GUIs, automation, lightweight data exchange, and DSL experiments. Its influence is visible in Red and other languages interested in homoiconic, message-oriented scripting.',
    },
    es: {
      name: 'Rebol',
      description:
        'Lenguaje compacto de mensajeria basado en bloques de codigo como datos y dialectos.',
      longDescription:
        'Rebol es un lenguaje pequeno creado alrededor de expresiones relativas, bloques como datos y dialectos especificos de dominio. Su sintaxis hace que datos estructurados y codigo ejecutable compartan una representacion compacta.\n\nSe ha usado en utilidades de red, GUIs, automatizacion, intercambio ligero de datos y experimentos de DSL. Su influencia se ve en Red y otros lenguajes de scripting homoiconico.',
    },
  },
} satisfies Language;
