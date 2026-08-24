import type { Language } from '@/types';

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
  version: '2026.05.31',
  logo: 'https://fstar-lang.org/favicon.ico',
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
    it: {
      name: 'F*',
      description:
        'Linguaggio funzionale con tipi dipendenti per la verifica del codice e dimostrazioni.',
      longDescription:
        "F* è un linguaggio funzionale orientato alla verifica, dotato di tipi dipendenti, tipi di raffinamento, effetti e automazione delle prove. Viene utilizzato per specificare e verificare la correttezza funzionale, le proprietà di sicurezza e il codice a basso livello.\n\nI programmi e le dimostrazioni possono essere controllati dall'ambiente F* ed estrapolati in destinazioni come OCaml, F# e C tramite strumenti correlati. Il linguaggio è utilizzato nella ricerca e nei progetti ad alta affidabilità dove il codice eseguibile e le prove verificate devono rimanere strettamente allineate.",
    },
    fr: {
      name: 'F*',
      description:
        "Langage fonctionnel de typage dépendant pour la vérification, les preuves et l'extraction en code exécutable.",
      longDescription:
        "F* est un langage fonctionnel orienté vers la vérification avec des types dépendants, des types d'affinissement, des effets et une automatisation des preuves. Il est utilisé pour spécifier et vérifier la correction fonctionnelle, les propriétés de sécurité et le code système à bas niveau.\n\nLes programmes et les preuves peuvent être vérifiés par l'environnement F* et extraits vers des cibles telles que OCaml, F# et C grâce à des outils connexes. Le langage est utilisé dans la recherche et les projets d'assurance haute où le code exécutable et les preuves vérifiées doivent rester étroitement liés.",
    },
    de: {
      name: 'F*',
      description:
        'Abhängig typisierte funktionale Sprache für Programmsicherheit und Code-Generierung.',
      longDescription:
        'F* ist eine verifikationsorientierte funktionale Sprache mit abhängigen Typen, Verfeinerungstypen, Effekten und automatisierten Beweisen. Sie wird verwendet, um die korrekte Funktion, Sicherheitseigenschaften und Low-Level-Systemcode zu spezifizieren und zu überprüfen.\n\nProgramme und Beweise können mithilfe der F*-Toolchain überprüft und in Ziele wie OCaml, F# und C über verwandte Werkzeuge übersetzt werden. Die Sprache wird in Forschungsprojekten und Projekten mit hohen Sicherheitsanforderungen eingesetzt, bei denen ausführbarer Code und maschinell überprüfte Beweise eng zusammenarbeiten müssen.',
    },
    pt: {
      name: 'F*',
      description:
        'Linguagem funcional com tipos dependentes para verificação de programas e provas.',
      longDescription:
        'F* é uma linguagem funcional orientada à verificação, com tipos dependentes, tipos de refinamento, efeitos e automação de provas. É usada para especificar e verificar a correção funcional, propriedades de segurança e código de sistemas de baixo nível.\n\nProgramas e provas podem ser verificados pela ferramenta F*, e extraídos para destinos como OCaml, F# e C através de ferramentas relacionadas. A linguagem é utilizada em projetos de pesquisa e alta garantia onde o código executável e as provas verificadas precisam permanecer próximos.',
    },
  },
} satisfies Language;
