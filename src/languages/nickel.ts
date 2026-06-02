import type { Language } from '../types';

export const nickel = {
  slug: 'nickel',
  publishedDate: '2022-03-09',
  extensions: ['.ncl'],
  author: 'Tweag I/O',
  website: 'https://nickel-lang.org',
  paradigms: ['declarative', 'functional'],
  tooling: {
    runtimes: ['nickel CLI'],
    ecosystems: ['Configuration', 'Infrastructure', 'Nix', 'DevOps'],
  },
  version: '1.16.0',
  logo: 'https://avatars.githubusercontent.com/u/83021462?v=4',
  color: '#3C6EB4',
  i18n: {
    en: {
      name: 'Nickel',
      description:
        'A safe, gradually-typed configuration language with gradual contracts and blame tracking, designed as an evolution of Nix expressions.',
      longDescription:
        "Nickel is a configuration language developed by Tweag I/O to address the shortcomings of ad-hoc YAML/JSON and the complexity of the Nix language. It is designed to be simple enough for configuration authors while being expressive enough for library authors building reusable abstractions.\n\nNickel features gradual typing with contracts — runtime-checked refinement types that can express invariants like 'a port number between 0 and 65535'. When a contract is violated, Nickel provides precise blame tracking to identify the source of the error. It supports lazy evaluation, a record merge operator for composing configurations, and can export to JSON, YAML, and TOML.",
    },
    es: {
      name: 'Nickel',
      description:
        'Un lenguaje de configuración seguro y gradualmente tipado con contratos y rastreo de culpa, diseñado como una evolución de las expresiones Nix.',
      longDescription:
        'Nickel es un lenguaje de configuración desarrollado por Tweag I/O para resolver las deficiencias de YAML/JSON ad-hoc y la complejidad del lenguaje Nix. Está diseñado para ser suficientemente simple para autores de configuración y suficientemente expresivo para autores de bibliotecas.\n\nNickel incluye tipado gradual con contratos — tipos de refinamiento verificados en tiempo de ejecución que pueden expresar invariantes. Cuando se viola un contrato, Nickel proporciona rastreo preciso de culpa. Soporta evaluación perezosa y un operador de fusión de registros para componer configuraciones.',
    },
    it: {
      name: 'Nickel',
      description:
        'Un linguaggio di configurazione sicuro e gradualmente tipizzato con contratti graduali e blame tracking, progettato come evoluzione delle espressioni Nix.',
      longDescription:
        'Nickel è un linguaggio di configurazione sviluppato da Tweag I/O per risolvere i limiti di YAML/JSON ad-hoc e la complessità del linguaggio Nix. È progettato per essere abbastanza semplice per gli autori di configurazioni e abbastanza espressivo per gli autori di librerie.\n\nNickel include tipizzazione graduale con contratti — tipi di raffinamento verificati a runtime che possono esprimere invarianti. Quando un contratto viene violato, Nickel fornisce un blame tracking preciso. Supporta la valutazione lazy e un operatore di fusione di record.',
    },
    fr: {
      name: 'Nickel',
      description:
        'Un langage de configuration sûr et graduellement typé avec des contrats graduels et un suivi de responsabilité, conçu comme une évolution des expressions Nix.',
      longDescription:
        "Nickel est un langage de configuration développé par Tweag I/O pour remédier aux lacunes de YAML/JSON ad-hoc et à la complexité du langage Nix. Il est conçu pour être suffisamment simple pour les auteurs de configurations et suffisamment expressif pour les auteurs de bibliothèques.\n\nNickel propose un typage graduel avec des contrats — des types de raffinement vérifiés à l'exécution. En cas de violation de contrat, Nickel fournit un suivi précis de la responsabilité. Il supporte l'évaluation paresseuse et un opérateur de fusion de records.",
    },
    de: {
      name: 'Nickel',
      description:
        'Eine sichere, graduell typisierte Konfigurationssprache mit graduellen Contracts und Blame-Tracking, entwickelt als Weiterentwicklung von Nix-Ausdrücken.',
      longDescription:
        'Nickel ist eine von Tweag I/O entwickelte Konfigurationssprache, um die Schwächen von ad-hoc YAML/JSON und die Komplexität der Nix-Sprache zu beheben. Sie ist einfach genug für Konfigurationsautoren und ausdrucksstark genug für Bibliotheksautoren.\n\nNickel bietet graduelles Typsystem mit Contracts — laufzeitgeprüfte Verfeinerungstypen, die Invarianten ausdrücken können. Bei einem Contract-Verstoß liefert Nickel präzises Blame-Tracking. Es unterstützt Lazy Evaluation und einen Record-Merge-Operator.',
    },
    pt: {
      name: 'Nickel',
      description:
        'Linguagem de configuração segura e gradualmente tipada com contratos e rastreamento de responsabilidade, projetada como evolução das expressões Nix.',
      longDescription:
        'Nickel é uma linguagem de configuração desenvolvida pela Tweag I/O para resolver as deficiências de YAML/JSON ad-hoc e a complexidade da linguagem Nix. É projetada para ser simples o suficiente para autores de configuração e expressiva o suficiente para autores de bibliotecas.\n\nNickel inclui tipagem gradual com contratos — tipos de refinamento verificados em tempo de execução que podem expressar invariantes. Quando um contrato é violado, o Nickel fornece rastreamento preciso de responsabilidade. Suporta avaliação preguiçosa e um operador de mesclagem de registros.',
    },
  },
} satisfies Language;
