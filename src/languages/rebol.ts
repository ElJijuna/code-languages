import type { Language } from '../types';

export const rebol = {
  slug: 'rebol',
  publishedDate: '1997-01-01',
  extensions: ['.r', '.reb', '.rebol'],
  author: 'Carl Sassenrath',
  website: 'https://www.rebol.com',
  paradigms: ['functional', 'dataflow', 'scripting'],
  tooling: {
    runtimes: ['REBOL 2', 'Rebol 3', 'Ren-C'],
    ecosystems: ['Scripting', 'DSLs', 'Network Tools'],
  },
  version: 'Rebol 3',
  logo: 'https://www.rebol.com/graphics/reb-logo.gif',
  color: '#7C2D12',
  i18n: {
    en: {
      name: 'Rebol',
      description: 'A compact messaging language built around code-as-data blocks and dialects.',
      longDescription:
        'Rebol is a small language created around the idea of relative expressions, blocks as data, and domain-specific dialects. Its syntax makes structured data and executable code share one compact representation.\n\nRebol has been used for network utilities, GUIs, automation, lightweight data exchange, and DSL experiments. Its influence is visible in Red and other languages interested in homoiconic, message-oriented scripting.',
    },
    es: {
      name: 'Rebol',
      description:
        'Lenguaje compacto de mensajeria basado en bloques de codigo como datos y dialectos.',
      longDescription:
        'Rebol es un lenguaje pequeno creado alrededor de expresiones relativas, bloques como datos y dialectos especificos de dominio. Su sintaxis hace que datos estructurados y codigo ejecutable compartan una representacion compacta.\n\nSe ha usado en utilidades de red, GUIs, automatizacion, intercambio ligero de datos y experimentos de DSL. Su influencia se ve en Red y otros lenguajes de scripting homoiconico.',
    },
    it: {
      name: 'Rebol',
      description:
        'Un linguaggio di messaggistica compatto basato su blocchi di codice come dati e dialetti.',
      longDescription:
        "Rebol è un piccolo linguaggio creato attorno all'idea di espressioni relative, blocchi come dati e dialetti specifici per dominio. La sua sintassi rende i dati strutturati e il codice eseguibile rappresentabili in modo compatto.\n\nRebol è stato utilizzato per utility di rete, GUI, automazione, scambio di dati leggero ed esperimenti con DSL. La sua influenza è visibile in Red e altri linguaggi interessati a scripting omomorfico basato su messaggi.",
    },
    fr: {
      name: 'Rebol',
      description:
        'Un langage de messagerie compact basé sur des blocs de code comme données et des dialectes.',
      longDescription:
        "Rebol est un petit langage créé autour de l'idée d'expressions relatives, de blocs comme données et de dialectes spécifiques à un domaine. Sa syntaxe permet de partager une représentation compacte pour les données structurées et le code exécutable.\n\nRebol a été utilisé pour des outils réseau, des interfaces graphiques, l'automatisation, l'échange de données léger et des expérimentations avec des langages DSL. Son influence est visible dans Red et d'autres langages intéressés par la programmation homonyme et orientée vers les messages.",
    },
    de: {
      name: 'Rebol',
      description:
        'Eine kompakte Programmiersprache, die auf Code-als-Datenblöcken und Dialekten basiert.',
      longDescription:
        'Rebol ist eine kleine Sprache, die auf der Idee von relativen Ausdrücken, Blöcken als Daten und domänenspezifischen Dialekten basiert. Ihre Syntax ermöglicht es, strukturierte Daten und ausführbaren Code in einer kompakten Darstellung zu kombinieren.\n\nRebol wurde für Netzwerk-Utilities, GUIs, Automatisierung, leichte Datenaustausch und DSL-Experimente verwendet. Sein Einfluss ist in Red und anderen Sprachen sichtbar, die homoikonische, message-orientierte Skriptsprachen verwenden.',
    },
    pt: {
      name: 'Rebol',
      description:
        'Linguagem de mensagens compacta baseada em blocos de código como dados e dialetos.',
      longDescription:
        'Rebol é uma linguagem pequena criada com a ideia de expressões relativas, blocos como dados e dialetos específicos do domínio. Sua sintaxe permite que dados estruturados e código executável compartilhem uma representação compacta.\n\nRebol tem sido usado para utilitários de rede, GUIs, automação, troca de dados leve e experimentos de DSL. Sua influência é visível em Red e outras linguagens interessadas em scripting homoiônico, orientado a mensagens.',
    },
  },
} satisfies Language;
