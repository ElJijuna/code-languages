import type { Language } from '@/types';

export const starlark = {
  slug: 'starlark',
  publishedDate: '2015-03-25',
  extensions: ['.bzl', '.star', '.sky'],
  author: 'Google / Bazel contributors',
  website: 'https://bazel.build/rules/language',
  paradigms: ['scripting', 'configuration', 'deterministic', 'imperative'],
  tooling: {
    runtimes: ['Bazel', 'Buck2', 'Starlark Go'],
    packageManagers: ['Bzlmod', 'Bazel Central Registry'],
    ecosystems: ['Build Systems', 'Configuration', 'Monorepos', 'Tooling'],
  },
  version: 'Bazel Starlark',
  logo: 'https://cdn.simpleicons.org/bazel/43A047',
  color: '#43A047',
  i18n: {
    en: {
      name: 'Starlark',
      description:
        'A deterministic Python-like scripting language for build and configuration tools.',
      longDescription:
        "Starlark is a small, deterministic language with Python-like syntax, designed to be embedded in larger applications. It supports functions, lists, dictionaries, comprehensions, modules, and controlled evaluation while avoiding features that make builds or configuration unpredictable.\n\nIt is best known as Bazel's extension language for rules, macros, repositories, and module extensions, but it is also embedded in other build systems and tools that need safe, reproducible scripting.",
    },
    es: {
      name: 'Starlark',
      description:
        'Un lenguaje de scripting determinista similar a Python para herramientas de build y configuracion.',
      longDescription:
        'Starlark es un lenguaje pequeno y determinista con sintaxis similar a Python, disenado para embeberse en aplicaciones mas grandes. Soporta funciones, listas, diccionarios, comprehensions, modulos y evaluacion controlada, evitando caracteristicas que vuelven impredecibles los builds o la configuracion.\n\nEs conocido principalmente como el lenguaje de extension de Bazel para reglas, macros, repositorios y extensiones de modulos, pero tambien se integra en otros sistemas de build y herramientas que necesitan scripting seguro y reproducible.',
    },
    it: {
      name: 'Starlark',
      description:
        'Un linguaggio di scripting deterministico simile a Python per strumenti di build e configurazione.',
      longDescription:
        'Starlark e un linguaggio piccolo e deterministico con sintassi simile a Python, progettato per essere integrato in applicazioni piu grandi. Supporta funzioni, liste, dizionari, comprensioni, moduli e valutazione controllata, evitando funzionalita che rendono i build o la configurazione imprevedibili.\n\nE noto principalmente come linguaggio di estensione per regole, macro, repository e moduli in Bazel, ma e anche integrato in altri sistemi di build e strumenti che richiedono scripting sicuro e riproducibile.',
    },
    fr: {
      name: 'Starlark',
      description:
        'Un langage de script deterministe semblable a Python pour les outils de construction et de configuration.',
      longDescription:
        "Starlark est un langage petit et deterministe avec une syntaxe semblable a Python, concu pour etre integre dans des applications plus importantes. Il prend en charge les fonctions, les listes, les dictionnaires, les comprehensions, les modules et l'evaluation controlee, tout en evitant les fonctionnalites qui rendent la construction ou la configuration imprevisible.\n\nIl est principalement connu en tant que langage d'extension pour les regles, les macros, les referentiels et les extensions de modules de Bazel, mais il est egalement integre dans d'autres systemes de construction et outils qui ont besoin d'un scripting sur et reproductible.",
    },
    de: {
      name: 'Starlark',
      description:
        'Eine deterministische, Python-ähnliche Skriptsprache für Build- und Konfigurationswerkzeuge.',
      longDescription:
        'Starlark ist eine kleine, deterministische Sprache mit Python-ähnlicher Syntax, die für die Integration in größere Anwendungen entwickelt wurde. Sie unterstützt Funktionen, Listen, Dictionaries, Comprehensions, Module und kontrollierte Auswertung, während sie Funktionen vermeidet, die Builds oder Konfigurationen unvorhersehbar machen.\n\nSie ist vor allem bekannt als die Erweiterungssprache für Regeln, Makros und Repositories in Bazel, wird aber auch in anderen Build-Systemen und Tools verwendet, die sichere, reproduzierbare Skripting benötigen.',
    },
    pt: {
      name: 'Starlark',
      description:
        'Linguagem de scripting semelhante a Python, determinística, para ferramentas de construção e configuração.',
      longDescription:
        'Starlark é uma linguagem pequena e determinística com sintaxe semelhante a Python, projetada para ser incorporada em aplicações maiores. Suporta funções, listas, dicionários, compreensões, módulos e avaliação controlada, evitando recursos que tornam a construção ou configuração imprevisível.\n\nÉ mais conhecida como a linguagem de extensão do Bazel para regras, macros, repositórios e extensões de módulos, mas também está incorporada em outros sistemas de construção e ferramentas que precisam de scripting seguro e reproduzível.',
    },
  },
} satisfies Language;
