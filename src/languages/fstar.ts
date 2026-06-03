import type { Language } from '../types';

export const fstar = {
  slug: 'fstar',
  publishedDate: '2011-01-01',
  extensions: ['.fst', '.fsti'],
  author: 'Microsoft Research / INRIA',
  website: 'https://www.fstar-lang.org',
  paradigms: ['functional', 'dependent types', 'formal verification'],
  tooling: {
    runtimes: ['F* toolchain', 'OCaml', 'F#', 'C'],
    packageManagers: ['opam', 'NuGet'],
    ecosystems: ['Formal Methods', 'ML', 'Low-level Verification'],
  },
  version: '2026.04.17',
  logo: 'https://dummyimage.com/32x32/572E91/ffffff.png&text=F%2A',
  color: '#572E91',
  i18n: {
    en: {
      name: 'F*',
      description:
        'A dependently typed functional language for program verification, proofs, and extraction to executable code.',
      longDescription:
        'F* is a verification-oriented functional language with dependent types, refinement types, effects, and proof automation. It is used to specify and verify functional correctness, security properties, and low-level systems code.\n\nPrograms and proofs can be checked by the F* toolchain and extracted to targets such as OCaml, F#, and C through related tooling. The language is used in research and high-assurance projects where executable code and machine-checked proofs need to stay close together.',
    },
    es: {
      name: 'F*',
      description:
        'Lenguaje funcional con tipos dependientes para verificacion de programas, pruebas y extraccion a codigo ejecutable.',
      longDescription:
        'F* es un lenguaje funcional orientado a verificacion con tipos dependientes, tipos refinados, efectos y automatizacion de pruebas. Se usa para especificar y verificar correccion funcional, propiedades de seguridad y codigo de sistemas de bajo nivel.\n\nLos programas y pruebas se revisan con la cadena de herramientas de F* y pueden extraerse a destinos como OCaml, F# y C mediante herramientas relacionadas.',
    },
  },
} satisfies Language;
