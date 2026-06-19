import type { Language } from '../types';

export const ligo = {
  slug: 'ligo',
  publishedDate: '2019-01-01',
  extensions: ['.ligo', '.mligo', '.religo', '.jsligo'],
  author: 'TriliTech and Ligo contributors',
  website: 'https://ligolang.org',
  paradigms: ['smart contract', 'functional', 'imperative'],
  tooling: {
    runtimes: ['Tezos Michelson'],
    packageManagers: ['ligo registry'],
    ecosystems: ['Tezos'],
  },
  version: '1.x',
  logo: 'https://ligolang.org/img/logo/logo.png',
  color: '#0D9488',
  i18n: {
    en: {
      name: 'Ligo',
      description:
        'A smart contract language family for Tezos with multiple syntaxes and static typing.',
      longDescription:
        'Ligo is a smart contract language for Tezos that offers several syntaxes, including CameLIGO, JsLIGO, and older Pascal-style variants. It compiles to Michelson, the low-level language executed by the Tezos protocol.\n\nThe language emphasizes static typing, predictable contract behavior, and tooling for compilation, testing, and deployment. It is used by Tezos developers who want higher-level contract syntax than raw Michelson.',
    },
    es: {
      name: 'Ligo',
      description:
        'Familia de lenguajes de contratos inteligentes para Tezos con varias sintaxis y tipado estatico.',
      longDescription:
        'Ligo es un lenguaje de contratos inteligentes para Tezos que ofrece varias sintaxis, incluyendo CameLIGO, JsLIGO y variantes antiguas de estilo Pascal. Compila a Michelson, el lenguaje de bajo nivel ejecutado por el protocolo Tezos.\n\nEl lenguaje enfatiza tipado estatico, comportamiento predecible de contratos y herramientas para compilar, probar y desplegar. Lo usan desarrolladores de Tezos que quieren una sintaxis de contratos de mas alto nivel que Michelson puro.',
    },
    it: {
      name: 'Ligo',
      description:
        'Famiglia di linguaggi per smart contract Tezos con piu sintassi e tipizzazione statica.',
      longDescription:
        'Ligo e un linguaggio per smart contract su Tezos che offre diverse sintassi, tra cui CameLIGO, JsLIGO e varianti piu vecchie in stile Pascal. Compila in Michelson, il linguaggio di basso livello eseguito dal protocollo Tezos.\n\nIl linguaggio enfatizza tipizzazione statica, comportamento prevedibile dei contratti e strumenti per compilazione, test e distribuzione. Viene usato da sviluppatori Tezos che vogliono una sintassi di contratto piu ad alto livello rispetto a Michelson puro.',
    },
    fr: {
      name: 'Ligo',
      description:
        'Famille de langages de contrats intelligents pour Tezos avec plusieurs syntaxes et typage statique.',
      longDescription:
        'Ligo est un langage de contrats intelligents pour Tezos qui propose plusieurs syntaxes, dont CameLIGO, JsLIGO et d anciennes variantes de style Pascal. Il compile vers Michelson, le langage bas niveau execute par le protocole Tezos.\n\nLe langage met l accent sur le typage statique, le comportement previsible des contrats et les outils de compilation, de test et de deploiement. Il est utilise par les developpeurs Tezos qui veulent une syntaxe plus haut niveau que Michelson brut.',
    },
    de: {
      name: 'Ligo',
      description:
        'Smart-Contract-Sprachfamilie fur Tezos mit mehreren Syntaxen und statischer Typisierung.',
      longDescription:
        'Ligo ist eine Smart-Contract-Sprache fur Tezos mit mehreren Syntaxen, darunter CameLIGO, JsLIGO und altere Pascal-artige Varianten. Sie kompiliert zu Michelson, der Low-Level-Sprache, die vom Tezos-Protokoll ausgefuhrt wird.\n\nDie Sprache betont statische Typisierung, vorhersagbares Vertragsverhalten und Werkzeuge fur Kompilierung, Tests und Deployment. Sie wird von Tezos-Entwicklern genutzt, die eine hohere Vertragssyntax als reines Michelson wollen.',
    },
    pt: {
      name: 'Ligo',
      description:
        'Familia de linguagens de contratos inteligentes para Tezos com varias sintaxes e tipagem estatica.',
      longDescription:
        'Ligo e uma linguagem de contratos inteligentes para Tezos que oferece varias sintaxes, incluindo CameLIGO, JsLIGO e variantes antigas no estilo Pascal. Ela compila para Michelson, a linguagem de baixo nivel executada pelo protocolo Tezos.\n\nA linguagem enfatiza tipagem estatica, comportamento previsivel de contratos e ferramentas para compilacao, testes e implantacao. E usada por desenvolvedores Tezos que querem sintaxe de contrato mais alto nivel que Michelson puro.',
    },
  },
} satisfies Language;
