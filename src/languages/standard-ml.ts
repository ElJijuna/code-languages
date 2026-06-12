import type { Language } from '../types';

export const standardMl = {
  slug: 'standard-ml',
  publishedDate: '1990-01-01',
  extensions: ['.sml', '.sig', '.fun'],
  author: 'Robin Milner and collaborators',
  website: 'https://smlfamily.github.io',
  paradigms: ['functional', 'statically typed', 'module-oriented'],
  tooling: {
    runtimes: ['MLton', 'Standard ML of New Jersey', 'Poly/ML'],
    ecosystems: ['ML', 'Compilers', 'Research'],
  },
  version: 'The Definition 1997',
  logo: 'https://avatars.githubusercontent.com/u/62883579?v=4',
  color: '#DC566D',
  i18n: {
    en: {
      name: 'Standard ML',
      description: 'A statically typed ML language with modules and pattern matching.',
      longDescription:
        'Standard ML defines a strict functional language with algebraic datatypes, pattern matching, type inference, exceptions, and a strong module system with signatures and functors. Its formal definition shaped much ML-family work.\n\nIt is used in compilers, theorem tools, teaching, research, and projects that need a small typed functional core with robust modules.',
    },
    es: {
      name: 'Standard ML',
      description: 'Un lenguaje ML tipado con modulos y pattern matching.',
      longDescription:
        'Standard ML define un lenguaje funcional estricto con datatypes algebraicos, pattern matching, inferencia de tipos, excepciones y un sistema fuerte de modulos con signatures y functors. Su definicion formal influyo mucho en la familia ML.\n\nSe usa en compiladores, herramientas de teoremas, ensenanza, investigacion y proyectos que necesitan un nucleo funcional tipado con modulos robustos.',
    },
    it: {
      name: 'Standard ML',
      description:
        'Un linguaggio ML staticamente tipizzato con moduli e corrispondenza di pattern.',
      longDescription:
        'Standard ML definisce un linguaggio funzionale rigoroso con tipi di dati algebrici, corrispondenza di pattern, inferenza di tipi, eccezioni e un sistema di moduli potente con signature e functors. La sua definizione formale ha influenzato molto il lavoro della famiglia ML.\n\nE utilizzato in compilatori, strumenti di teorema, insegnamento, ricerca e progetti che necessitano di un piccolo nucleo funzionale tipizzato con moduli robusti.',
    },
    fr: {
      name: 'Standard ML',
      description:
        'Un langage ML statiquement type avec des modules et la correspondance de motifs.',
      longDescription:
        "Standard ML definit un langage fonctionnel strict avec des types algebriques, la correspondance de motifs, l'inference de types, les exceptions et un systeme de modules robuste avec des signatures et des fonctions. Sa definition formelle a influence de nombreuses realisations de la famille ML.\n\nIl est utilise dans les compilateurs, les outils de demonstration, l'enseignement, la recherche et les projets qui necessitent un noyau fonctionnel type et robuste.",
    },
    de: {
      name: 'Standard ML',
      description: 'Eine statisch typisierte ML-Sprache mit Modulen und Musterabgleich.',
      longDescription:
        'Standard ML definiert eine strenge funktionale Sprache mit algebraischen Datentypen, Musterabgleich, Typinferenz, Ausnahmen und einem robusten Modulsystem mit Signaturen und Funktoren. Ihre formale Definition hat viel ML-Familienarbeit geprägt.\n\nEs wird in Compilern, Theorem-Werkzeugen, Lehre, Forschung und Projekten verwendet, die eine kleine, typisierte funktionale Kern mit robusten Modulen benötigen.',
    },
    pt: {
      name: 'Standard ML',
      description: 'Linguagem ML estaticamente tipada com módulos e correspondência de padrões.',
      longDescription:
        'Standard ML define uma linguagem funcional estrita com tipos algébricos, correspondência de padrões, inferência de tipos, exceções e um sistema de módulos robusto com assinaturas e funtores. Sua definição formal moldou muito o trabalho da família ML.\n\nÉ usada em compiladores, ferramentas de prova, ensino, pesquisa e projetos que precisam de um núcleo funcional tipado e robusto com módulos.',
    },
  },
} satisfies Language;
