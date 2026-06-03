import type { Language } from '../types';

export const dafny = {
  slug: 'dafny',
  publishedDate: '2009-01-01',
  extensions: ['.dfy'],
  author: 'K. Rustan M. Leino / Microsoft Research',
  website: 'https://dafny.org',
  paradigms: ['imperative', 'functional', 'object-oriented', 'formal verification'],
  tooling: {
    runtimes: ['.NET', 'Java', 'JavaScript', 'Go', 'Python'],
    packageManagers: ['NuGet', 'Homebrew'],
    ecosystems: ['Formal Methods', '.NET', 'Verification'],
  },
  version: '4.11.0',
  logo: 'https://dummyimage.com/32x32/0B6D91/ffffff.png&text=D',
  color: '#0B6D91',
  i18n: {
    en: {
      name: 'Dafny',
      description:
        'A verification-aware programming language with specifications, proofs, and compilation to several mainstream targets.',
      longDescription:
        'Dafny is a programming language and verifier designed for writing correct-by-construction software. Programs can include preconditions, postconditions, invariants, termination metrics, and assertions that are checked by an automated verifier.\n\nIt combines imperative, functional, and object-oriented features with formal specification syntax. Dafny code can be compiled to targets such as C#, Java, JavaScript, Go, and Python, making it useful for teaching, research, and high-assurance software components.',
    },
    es: {
      name: 'Dafny',
      description:
        'Lenguaje de programacion orientado a verificacion, con especificaciones, pruebas y compilacion a varios destinos comunes.',
      longDescription:
        'Dafny es un lenguaje de programacion y verificador pensado para escribir software correcto por construccion. Los programas pueden incluir precondiciones, postcondiciones, invariantes, metricas de terminacion y aserciones que revisa un verificador automatico.\n\nCombina rasgos imperativos, funcionales y orientados a objetos con sintaxis de especificacion formal. El codigo Dafny puede compilarse a destinos como C#, Java, JavaScript, Go y Python.',
    },
  },
} satisfies Language;
