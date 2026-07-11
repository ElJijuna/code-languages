import type { Language } from '@/types';

export const carbon = {
  slug: 'carbon',
  publishedDate: '2022-07-19',
  extensions: ['.carbon'],
  author: 'Carbon Language Project',
  website: 'https://docs.carbon-lang.dev',
  paradigms: ['imperative', 'object-oriented', 'generic', 'statically typed'],
  tooling: {
    runtimes: ['LLVM'],
    packageManagers: ['Bazel'],
    ecosystems: ['C++', 'Systems programming'],
  },
  version: '0.0.0 nightly',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Carbon_logo.png',
  color: '#4C7CBF',
  i18n: {
    en: {
      name: 'Carbon',
      description: 'An experimental successor language for C++ interoperability and migration.',
      longDescription:
        'Carbon is an experimental systems programming language designed as a possible successor to C++. It focuses on readable syntax, strong generics, modern tooling, and incremental migration paths for large C++ codebases.\n\nThe project is still pre-stable, so real-world use is centered on experiments, design evaluation, compiler development, and discussions about long-term interoperability with existing C++ ecosystems.',
    },
    es: {
      name: 'Carbon',
      description: 'Un lenguaje experimental sucesor para interoperabilidad y migracion desde C++.',
      longDescription:
        'Carbon es un lenguaje experimental de programacion de sistemas disenado como posible sucesor de C++. Se enfoca en sintaxis legible, genericos fuertes, herramientas modernas y rutas de migracion incremental para bases de codigo grandes en C++.\n\nEl proyecto aun no es estable, asi que su uso real se centra en experimentos, evaluacion de diseno, desarrollo del compilador y debates sobre interoperabilidad a largo plazo con ecosistemas C++ existentes.',
    },
    it: {
      name: 'Carbon',
      description:
        "Un linguaggio sperimentale di successione per l'interoperabilita e la migrazione da C++.",
      longDescription:
        "Carbon e un linguaggio di programmazione di sistemi sperimentale, progettato come potenziale successore di C++. Si concentra su una sintassi leggibile, generici potenti, strumenti moderni e percorsi di migrazione incrementali per codebase C++ di grandi dimensioni.\n\nIl progetto e ancora in fase pre-stabile, quindi l'uso pratico e incentrato su esperimenti, valutazione del design, sviluppo del compilatore e discussioni sulla compatibilita a lungo termine con gli ecosistemi C++ esistenti.",
    },
    fr: {
      name: 'Carbon',
      description:
        "Un langage experimental successeur pour l'interoperabilite et la migration vers C++.",
      longDescription:
        "Carbon est un langage de programmation systeme experimental concu comme un successeur possible de C++. Il se concentre sur une syntaxe lisible, des generiques puissants, des outils modernes et des chemins de migration incrementiels pour les grands codebases C++. \n\nLe projet est encore en phase pre-stable, de sorte que son utilisation dans le monde reel est axee sur les experiences, l'evaluation de la conception, le developpement de compilateurs et les discussions sur l'interoperabilite a long terme avec les ecosystemes C++ existants.",
    },
    de: {
      name: 'Carbon',
      description: 'Ein experimentelles Nachfolgelanguage für C++-Interoperabilität und Migration.',
      longDescription:
        'Carbon ist eine experimentelle Programmiersprache für Systemprogrammierung, die als möglicher Nachfolger von C++ konzipiert wurde. Sie konzentriert sich auf lesbare Syntax, starke Generics, moderne Werkzeuge und inkrementelle Migrationspfade für große C++-Codebasen.\n\nDas Projekt befindet sich noch in der experimentellen Phase, daher konzentriert sich die praktische Anwendung auf Experimente, Designbewertungen, Compilerentwicklung und Diskussionen über langfristige Interoperabilität mit bestehenden C++-Ökosystemen.',
    },
    pt: {
      name: 'Carbon',
      description: 'Linguagem experimental para interoperabilidade e migração do C++.',
      longDescription:
        'Carbon é uma linguagem de programação de sistemas experimental, projetada como um possível sucessor do C++. Ela se concentra em sintaxe legível, genéricos fortes, ferramentas modernas e caminhos de migração incrementais para grandes bases de código C++.\n\nO projeto ainda está em fase de pré-estabilidade, portanto, o uso prático se concentra em experimentos, avaliação de design, desenvolvimento de compiladores e discussões sobre a interoperabilidade a longo prazo com os ecossistemas C++ existentes.',
    },
  },
} satisfies Language;
