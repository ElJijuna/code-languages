import type { Language } from '@/types';

export const modula2 = {
  slug: 'modula-2',
  publishedDate: '1978-01-01',
  extensions: ['.mod', '.def'],
  author: 'Niklaus Wirth',
  website: 'https://www.modula2.org',
  paradigms: ['imperative', 'procedural', 'modular'],
  tooling: {
    runtimes: ['GNU Modula-2', 'ADW Modula-2', 'Classic compilers'],
    ecosystems: ['Systems Programming', 'Education', 'Language History'],
  },
  version: 'ISO/IEC 10514-1:1996',
  logo: 'https://raw.githubusercontent.com/ElJijuna/code-languages/main/public/assets/placeholders/modula-2.svg',
  color: '#2563EB',
  i18n: {
    en: {
      name: 'Modula-2',
      description:
        'A modular systems language from Niklaus Wirth with explicit interfaces and modules.',
      longDescription:
        'Modula-2 was designed as a successor to Pascal for systems programming and teaching. It emphasizes separate compilation, explicit definition modules, strong typing, coroutines, and structured imperative programming.\n\nThe language influenced later modular languages and remains relevant in compiler history, embedded systems, and educational settings where clear module boundaries and small language design matter.',
    },
    es: {
      name: 'Modula-2',
      description:
        'Lenguaje modular de sistemas de Niklaus Wirth con interfaces y modulos explicitos.',
      longDescription:
        'Modula-2 fue disenado como sucesor de Pascal para sistemas y ensenanza. Enfatiza compilacion separada, modulos de definicion explicitos, tipado fuerte, corrutinas y programacion imperativa estructurada.\n\nInfluyo en lenguajes modulares posteriores y sigue siendo relevante en historia de compiladores, sistemas embebidos y contextos educativos.',
    },
    it: {
      name: 'Modula-2',
      description: 'Linguaggio modulare di Niklaus Wirth con interfacce ed moduli espliciti.',
      longDescription:
        "Modula-2 è stato progettato come successore di Pascal per la programmazione a sistema e l'insegnamento. Enfatizza la compilazione separata, la definizione esplicita dei moduli, il tipaggio forte, le coroutine e la programmazione imperativa strutturata.\n\nIl linguaggio ha influenzato linguaggi modulari successivi ed è ancora rilevante nella storia dei compilatori, nei sistemi embedded e in ambienti didattici dove i confini del modulo chiari e un design di linguaggio piccolo sono importanti.",
    },
    fr: {
      name: 'Modula-2',
      description: 'Langage modulaire de Niklaus Wirth avec interfaces et modules explicites.',
      longDescription:
        "Modula-2 a été conçu comme successeur de Pascal pour la programmation système et l'enseignement. Il met l'accent sur la compilation séparée, les définitions explicites des modules, le typage fort, les coroutines et la programmation impérative structurée.\n\nLe langage a influencé les langages modulaires ultérieurs et reste pertinent dans l'histoire des compilateurs, les systèmes embarqués et les environnements éducatifs où les limites de module claires et un petit langage sont importants.",
    },
    de: {
      name: 'Modula-2',
      description:
        'Ein modulare Programmiersprache von Niklaus Wirth mit expliziten Schnittstellen und Modulen.',
      longDescription:
        'Modula-2 wurde als Nachfolger von Pascal für Systemprogrammierung und Lehre entwickelt. Es betont separate Kompilierbarkeit, explizite Definition von Modulen, starke Typisierung, Koroutinen und strukturierte imperative Programmierung.\n\nDie Sprache beeinflusste spätere modulare Sprachen und ist auch heute noch relevant in der Compiler-Geschichte, bei eingebetteten Systemen und im Bildungsbereich, wo klare Modulgrenzen und eine einfache Sprachgestaltung wichtig sind.',
    },
    pt: {
      name: 'Modula-2',
      description:
        'Linguagem de sistemas modular desenvolvida por Niklaus Wirth com interfaces e módulos explícitos.',
      longDescription:
        'Modula-2 foi projetada como sucessora do Pascal para programação de sistemas e ensino. Enfatiza compilação separada, definição explícita de módulos, tipagem forte, corrotinas e programação imperativa estruturada.\n\nA linguagem influenciou linguagens modulares posteriores e permanece relevante na história dos compiladores, sistemas embarcados e ambientes educacionais onde limites de módulo claros e um design de linguagem pequeno são importantes.',
    },
  },
} satisfies Language;
