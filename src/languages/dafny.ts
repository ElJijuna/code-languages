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
    it: {
      name: 'Dafny',
      description:
        'Linguaggio di programmazione con verifica, che supporta specifiche, dimostrazioni e compilazione in vari target mainstream.',
      longDescription:
        "Dafny è un linguaggio di programmazione e verificatore progettato per scrivere software corretto fin dall'inizio. I programmi possono includere precondizioni, postcondizioni, invarianti, metriche di terminazione e asserzioni che vengono verificate da un verificatore automatizzato.\n\nCombina caratteristiche imperative, funzionali e orientate agli oggetti con una sintassi di specifica formale. Il codice Dafny può essere compilato in target come C#, Java, JavaScript, Go e Python, rendendolo utile per l'insegnamento, la ricerca e componenti software ad alta affidabilità.",
    },
    fr: {
      name: 'Dafny',
      description:
        'Langage de programmation vérifié avec spécifications, preuves et compilation vers plusieurs plateformes.',
      longDescription:
        "Dafny est un langage et un vérificateur conçus pour écrire des logiciels corrects par construction. Les programmes peuvent inclure des préconditions, des postconditions, des invariants, des métriques de terminaison et des assertions qui sont vérifiées par un vérificateur automatisé.\n\nIl combine les fonctionnalités impératives, fonctionnelles et orientées objet avec une syntaxe de spécification formelle. Le code Dafny peut être compilé vers des cibles telles que C#, Java, JavaScript, Go et Python, ce qui le rend utile pour l'enseignement, la recherche et les composants logiciels à haute assurance.",
    },
    de: {
      name: 'Dafny',
      description:
        'Eine verifikationstaugliche Programmiersprache mit Spezifikationen, Beweisen und Kompilierung zu verschiedenen Mainstream-Zielen.',
      longDescription:
        'Dafny ist eine Programmiersprache und Verifier, die für das Schreiben von korrekter Software entwickelt wurde. Programme können Präbedingungen, Nachbedingungen, Invarianten, Terminierungsmetriken und Assertions enthalten, die von einem automatisierten Verifier überprüft werden.\n\nSie kombiniert imperative, funktionale und objektorientierte Features mit formaler Spezifikationssyntax. Dafny-Code kann zu Zielen wie C#, Java, JavaScript, Go und Python kompiliert werden, was es nützlich für Lehre, Forschung und hochsichere Softwarekomponenten macht.',
    },
    pt: {
      name: 'Dafny',
      description:
        'Linguagem de programação com verificação, especificações e compilação para vários alvos.',
      longDescription:
        'Dafny é uma linguagem e verificador projetados para escrever software correto por construção. Os programas podem incluir precondições, pós-condições, invariantes, métricas de terminação e afirmações que são verificadas por um verificador automatizado.\n\nCombina recursos imperativos, funcionais e orientados a objetos com sintaxe de especificação formal. O código Dafny pode ser compilado para alvos como C#, Java, JavaScript, Go e Python, tornando-o útil para ensino, pesquisa e componentes de software de alta garantia.',
    },
  },
} satisfies Language;
