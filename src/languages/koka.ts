import type { Language } from '@/types';

export const koka = {
  slug: 'koka',
  publishedDate: '2012-01-01',
  extensions: ['.kk'],
  author: 'Daan Leijen',
  website: 'https://koka-lang.github.io',
  paradigms: ['functional', 'effect-oriented', 'strongly typed'],
  tooling: {
    runtimes: ['Koka compiler'],
    packageManagers: ['Koka package tooling'],
    ecosystems: ['Effect Systems', 'Functional Programming', 'Research'],
  },
  version: '3.2.3',
  logo: 'https://koka-lang.github.io/koka/doc/images/koka-logo-filled.png',
  color: '#0891B2',
  i18n: {
    en: {
      name: 'Koka',
      description:
        'A functional language with effect types for tracking side effects and resource use.',
      longDescription:
        'Koka is a strongly typed functional language centered on algebraic effect types. Functions describe the effects they may perform, which helps model exceptions, state, IO, and control flow.\n\nIt is used for research and practical experiments in effect systems, with a compiler that targets native and JavaScript environments while keeping memory management predictable.',
    },
    es: {
      name: 'Koka',
      description:
        'Un lenguaje funcional con tipos de efectos para rastrear efectos laterales y recursos.',
      longDescription:
        'Koka es un lenguaje funcional de tipado fuerte centrado en tipos de efectos algebraicos. Las funciones describen los efectos que pueden realizar.\n\nSe usa para investigacion y experimentos practicos en sistemas de efectos, con compilacion a entornos nativos y JavaScript.',
    },
    it: {
      name: 'Koka',
      description:
        'Un linguaggio funzionale con tipi di effetto per tracciare effetti collaterali e utilizzo delle risorse.',
      longDescription:
        'Koka è un linguaggio funzionale fortemente tipizzato incentrato su tipi di effetto algebrici. Le funzioni descrivono gli effetti che possono eseguire, il che aiuta a modellare eccezioni, stato, IO e flusso di controllo.\n\nÈ utilizzato per la ricerca ed esperimenti pratici nei sistemi di effetto, con un compilatore che mira agli ambienti nativi e JavaScript mantenendo la gestione della memoria prevedibile.',
    },
    fr: {
      name: 'Koka',
      description:
        "Un langage fonctionnel avec des types d'effets pour suivre les effets et l'utilisation des ressources.",
      longDescription:
        "Koka est un langage fonctionnel fortement typé centré sur les types d'effets algébriques. Les fonctions décrivent les effets qu'elles peuvent effectuer, ce qui permet de modéliser les exceptions, l'état, l'entrée/sortie et le contrôle du flux.\n\nIl est utilisé pour la recherche et les expériences pratiques dans les systèmes d'effets, avec un compilateur ciblant les environnements natifs et JavaScript tout en maintenant une gestion de la mémoire prévisible.",
    },
    de: {
      name: 'Koka',
      description:
        'Eine funktionale Sprache mit Effekt-Typen zur Verfolgung von Seiteneffekten und Ressourcenverbrauch.',
      longDescription:
        'Koka ist eine stark typisierte funktionale Sprache, die auf algebraischen Effekt-Typen basiert. Funktionen beschreiben die Effekte, die sie ausführen können, was hilft, Ausnahmen, Zustand, IO und Kontrollfluss zu modellieren.\n\nSie wird für Forschung und praktische Experimente mit Effekt-Systemen verwendet, mit einem Compiler, der native und JavaScript-Umgebungen ansteuert und gleichzeitig eine vorhersagbare Speicherverwaltung beibehält.',
    },
    pt: {
      name: 'Koka',
      description:
        'Linguagem funcional com tipos de efeito para rastrear efeitos colaterais e uso de recursos.',
      longDescription:
        'Koka é uma linguagem funcional fortemente tipada centrada em tipos algébricos de efeito. As funções descrevem os efeitos que podem realizar, o que ajuda a modelar exceções, estado, IO e controle de fluxo.\n\nÉ usada para pesquisa e experimentos práticos em sistemas de efeito, com um compilador que visa ambientes nativos e JavaScript, mantendo o gerenciamento de memória previsível.',
    },
  },
} satisfies Language;
