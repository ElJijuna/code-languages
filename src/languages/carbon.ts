import type { Language } from '../types';

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
      description:
        'Ein experimentelles Nachfolgelanguage f\u00fcr C++-Interoperabilit\u00e4t und Migration.',
      longDescription:
        'Carbon ist eine experimentelle Programmiersprache f\u00fcr Systemprogrammierung, die als m\u00f6glicher Nachfolger von C++ konzipiert wurde. Sie konzentriert sich auf lesbare Syntax, starke Generics, moderne Werkzeuge und inkrementelle Migrationspfade f\u00fcr gro\u00dfe C++-Codebasen.\n\nDas Projekt befindet sich noch in der experimentellen Phase, daher konzentriert sich die praktische Anwendung auf Experimente, Designbewertungen, Compilerentwicklung und Diskussionen \u00fcber langfristige Interoperabilit\u00e4t mit bestehenden C++-\u00d6kosystemen.',
    },
    pt: {
      name: 'Carbon',
      description: 'Linguagem experimental para interoperabilidade e migra\u00e7\u00e3o do C++.',
      longDescription:
        'Carbon \u00e9 uma linguagem de programa\u00e7\u00e3o de sistemas experimental, projetada como um poss\u00edvel sucessor do C++. Ela se concentra em sintaxe leg\u00edvel, gen\u00e9ricos fortes, ferramentas modernas e caminhos de migra\u00e7\u00e3o incrementais para grandes bases de c\u00f3digo C++.\n\nO projeto ainda est\u00e1 em fase de pr\u00e9-estabilidade, portanto, o uso pr\u00e1tico se concentra em experimentos, avalia\u00e7\u00e3o de design, desenvolvimento de compiladores e discuss\u00f5es sobre a interoperabilidade a longo prazo com os ecossistemas C++ existentes.',
    },
  },
} satisfies Language;
