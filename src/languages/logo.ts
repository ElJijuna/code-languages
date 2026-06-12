import type { Language } from '../types';

export const logo = {
  slug: 'logo',
  publishedDate: '1967-01-01',
  extensions: ['.logo', '.lgo'],
  author: 'Wally Feurzeig, Seymour Papert, and Cynthia Solomon',
  website: 'https://people.eecs.berkeley.edu/~bh/logo.html',
  paradigms: ['educational', 'procedural', 'interactive'],
  tooling: {
    runtimes: ['UCBLogo', 'FMSLogo', 'Logo interpreters'],
    ecosystems: ['Education', 'Turtle Graphics', 'Creative Coding'],
  },
  version: 'UCBLogo 6.2',
  logo: 'https://dummyimage.com/32x32/16A34A/ffffff.png&text=Lg',
  color: '#16A34A',
  i18n: {
    en: {
      name: 'Logo',
      description:
        'An educational language known for turtle graphics, interactivity, and procedural ideas.',
      longDescription:
        'Logo is an educational programming language created to help learners explore procedures, recursion, geometry, and interactive problem solving. Its turtle graphics model made programming visual and concrete for generations of students.\n\nLogo dialects are still used in teaching, creative coding, and language-history contexts where immediate feedback and simple commands make computational ideas easier to explore.',
    },
    es: {
      name: 'Logo',
      description:
        'Lenguaje educativo conocido por graficos de tortuga, interactividad e ideas procedurales.',
      longDescription:
        'Logo es un lenguaje educativo creado para explorar procedimientos, recursion, geometria y resolucion interactiva de problemas. Su modelo de graficos de tortuga hizo la programacion visual y concreta para generaciones de estudiantes.\n\nSus dialectos siguen presentes en ensenanza, codigo creativo e historia de lenguajes, donde el feedback inmediato facilita explorar ideas computacionales.',
    },
  },
} satisfies Language;
