import type { Language } from '@/types';

export const lean = {
  slug: 'lean',
  publishedDate: '2013-06-16',
  extensions: ['.lean'],
  author: 'Leonardo de Moura / Microsoft Research',
  website: 'https://lean-lang.org',
  paradigms: ['functional', 'dependently typed', 'proof-oriented', 'metaprogramming'],
  tooling: {
    runtimes: ['Lean'],
    packageManagers: ['Lake', 'elan'],
    ecosystems: ['Formal methods', 'Mathematics', 'Proof assistants'],
  },
  version: '4.33.1',
  logo: 'https://cdn.simpleicons.org/leanpub/262425',
  color: '#262425',
  i18n: {
    en: {
      name: 'Lean',
      description:
        'A theorem prover and functional language for formalized mathematics and software.',
      longDescription:
        'Lean is a theorem prover and dependently typed functional programming language. Lean 4 includes an efficient compiler, extensible syntax, metaprogramming facilities, tactics, and tooling for large formalization projects.\n\nIt is used in formalized mathematics, program verification, theorem proving research, educational games, and software projects where proofs and executable definitions can evolve together.',
    },
    es: {
      name: 'Lean',
      description:
        'Un demostrador de teoremas y lenguaje funcional para matematica y software formalizados.',
      longDescription:
        'Lean es un demostrador de teoremas y lenguaje funcional con tipos dependientes. Lean 4 incluye un compilador eficiente, sintaxis extensible, metaprogramacion, tacticas y herramientas para grandes proyectos de formalizacion.\n\nSe usa en matematica formalizada, verificacion de programas, investigacion en demostracion de teoremas, juegos educativos y proyectos donde pruebas y definiciones ejecutables pueden evolucionar juntas.',
    },
    it: {
      name: 'Lean',
      description:
        'Un dimostratore di teoremi e linguaggio funzionale per la matematica e il software formalizzati.',
      longDescription:
        'Lean e un dimostratore di teoremi e un linguaggio di programmazione funzionale con tipi dipendenti. Lean 4 include un compilatore efficiente, una sintassi estendibile, funzionalita di metaprogrammazione, tattiche e strumenti per progetti di formalizzazione di grandi dimensioni.\n\nE utilizzato in matematica formalizzata, verifica di programmi, ricerca sulla dimostrazione di teoremi, giochi educativi e progetti software in cui dimostrazioni ed definizioni eseguibili possono evolvere insieme.',
    },
    fr: {
      name: 'Lean',
      description:
        'Un verificateur de theoremes et un langage fonctionnel pour les mathematiques et les logiciels formels.',
      longDescription:
        'Lean est un verificateur de theoremes et un langage de programmation fonctionnel de type dependant. Lean 4 inclut un compilateur efficace, une syntaxe extensible, des fonctionnalites de metaprogrammation, des tactiques et des outils pour les grands projets de formalisation. \n\nIl est utilise dans les mathematiques formelles, la verification de programmes, la recherche sur la preuve de theoremes, les jeux educatifs et les projets de logiciels ou les preuves et les definitions executables peuvent evoluer ensemble.',
    },
    de: {
      name: 'Lean',
      description:
        'Ein Theorem-Prover und funktionale Sprache für formalisierte Mathematik und Software.',
      longDescription:
        'Lean ist ein Theorem-Prover und eine dependently typisierte funktionale Programmiersprache. Lean 4 enthält einen effizienten Compiler, erweiterbare Syntax, Metaprogrammierungsfunktionen, Taktiken und Werkzeuge für große Formalisierungs-Projekte.\n\nEs wird in formalisierter Mathematik, Programmvérifizierung, Theorem-Probing-Forschung, Bildungsspielen und Software-Projekten verwendet, in denen Beweise und ausführbare Definitionen zusammen existieren.',
    },
    pt: {
      name: 'Lean',
      description:
        'Um solucionador de teoremas e linguagem funcional para matemática e software formalizados.',
      longDescription:
        'Lean é um solucionador de teoremas e linguagem funcional de tipos dependentes. Lean 4 inclui um compilador eficiente, sintaxe extensível, recursos de metaprogramação, táticas e ferramentas para grandes projetos de formalização.\n\nÉ usado em matemática formalizada, verificação de programas, pesquisa em prova de teoremas, jogos educativos e projetos de software onde provas e definições executáveis podem evoluir juntas.',
    },
  },
} satisfies Language;
