import type { Language } from '@/types';

export const bcpl = {
  slug: 'bcpl',
  status: 'historical',
  publishedDate: '1967-01-01',
  extensions: ['.bcpl'],
  author: 'Martin Richards',
  website: 'https://www.cl.cam.ac.uk/~mr10/BCPL.html',
  paradigms: ['imperative', 'procedural', 'systems'],
  tooling: {
    runtimes: ['Cintsys BCPL', 'Classic BCPL compilers'],
    ecosystems: ['Systems Programming', 'Operating Systems', 'Language History'],
  },
  version: 'Cintsys BCPL',
  logo: 'https://dummyimage.com/32x32/374151/ffffff.png&text=BC',
  color: '#374151',
  i18n: {
    en: {
      name: 'BCPL',
      description:
        'A compact systems language that influenced B and C through typeless procedural programming.',
      longDescription:
        'BCPL was designed as a small, portable systems language with a simple compiler and a typeless model suited to early operating systems and compiler work.\n\nIts syntax, block structure, braces, comments, and procedural style influenced B and C, making it an important ancestor of modern systems programming languages.',
    },
    es: {
      name: 'BCPL',
      description:
        'Un lenguaje compacto de sistemas que influyo en B y C con programacion procedural.',
      longDescription:
        'BCPL fue disenado como un lenguaje de sistemas pequeno y portable, con compilador simple y modelo sin tipos para sistemas operativos tempranos.\n\nSu sintaxis, bloques, llaves, comentarios y estilo procedural influyeron en B y C.',
    },
    it: {
      name: 'BCPL',
      description:
        'Un linguaggio di sistema compatto che ha influenzato B e C attraverso la programmazione procedurale senza tipi.',
      longDescription:
        'BCPL è stato progettato come un piccolo linguaggio di sistema portatile con un compilatore semplice e un modello senza tipi, adatto per i primi sistemi operativi e il lavoro sui compilatori.\n\nLa sua sintassi, struttura a blocchi, parentesi graffe, commenti e stile procedurale hanno influenzato B e C, rendendolo un importante antenato dei moderni linguaggi di programmazione di sistema.',
    },
    fr: {
      name: 'BCPL',
      description:
        'Un langage système compact qui a influencé B et C grâce à la programmation procédurale sans type.',
      longDescription:
        "BCPL a été conçu comme un petit langage système portable avec un compilateur simple et un modèle sans type, adapté aux premiers systèmes d'exploitation et au développement de compilateurs.\n\nSa syntaxe, sa structure de blocs, ses accolades, ses commentaires et son style procédural ont influencé B et C, ce qui en fait un ancêtre important des langages modernes de programmation système.",
    },
    de: {
      name: 'BCPL',
      description:
        'Eine kompakte Systemsprache, die B und C durch typloses, prozedurales Programmieren beeinflusste.',
      longDescription:
        'BCPL wurde als eine kleine, portable Systemsprache mit einem einfachen Compiler und einem typlosen Modell entworfen, das für frühe Betriebssysteme und Compiler geeignet war.\n\nSeine Syntax, Blockstruktur, Klammern, Kommentare und der prozedurale Stil beeinflussten B und C, wodurch es eine wichtige Vorläuferin moderner Systemsprachen ist.',
    },
    pt: {
      name: 'BCPL',
      description:
        'Uma linguagem de sistemas compacta que influenciou B e C através da programação procedimental sem tipos.',
      longDescription:
        'BCPL foi projetada como uma linguagem de sistemas pequena e portátil com um compilador simples e um modelo sem tipos, adequada para sistemas operacionais e trabalhos de compilação iniciais.\n\nSua sintaxe, estrutura de blocos, chaves, comentários e estilo procedural influenciaram B e C, tornando-a um ancestral importante das linguagens modernas de programação de sistemas.',
    },
  },
} satisfies Language;
