import type { Language } from '../types';

export const algol = {
  slug: 'algol',
  publishedDate: '1958-01-01',
  extensions: ['.alg', '.algol'],
  author: 'ACM-GAMM committee',
  website: 'https://en.wikipedia.org/wiki/ALGOL',
  paradigms: ['imperative', 'procedural', 'structured'],
  tooling: {
    runtimes: ['ALGOL 60 compilers', 'ALGOL 68 Genie'],
    ecosystems: ['Academic Computing', 'Language Design', 'Numerical Computing'],
  },
  version: 'ALGOL 68',
  logo: 'https://dummyimage.com/32x32/6B7280/ffffff.png&text=ALG',
  color: '#6B7280',
  i18n: {
    en: {
      name: 'ALGOL',
      description:
        'A family of early algorithmic languages that shaped block structure and formal language design.',
      longDescription:
        'ALGOL introduced influential ideas for writing algorithms, including nested blocks, lexical scope, structured control flow, and a notation close to mathematical pseudocode.\n\nAlthough few modern systems use ALGOL directly, its design strongly influenced Pascal, C, Simula, Ada, and many later languages used in scientific and systems programming.',
    },
    es: {
      name: 'ALGOL',
      description:
        'Una familia temprana de lenguajes algoritmicos que influyo en bloques y diseno formal.',
      longDescription:
        'ALGOL introdujo ideas influyentes para escribir algoritmos, como bloques anidados, alcance lexico, control estructurado y una notacion cercana al pseudocodigo matematico.\n\nAunque hoy se usa poco directamente, su diseno influyo en Pascal, C, Simula, Ada y muchos lenguajes posteriores.',
    },
  },
} satisfies Language;
