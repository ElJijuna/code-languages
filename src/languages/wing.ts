import type { Language } from '../types.js';

export const wing = {
  slug: 'wing',
  aliases: ['winglang'],
  publishedDate: '2023-01-06',
  extensions: ['.w', '.wsim'],
  author: 'Elad Ben-Israel, Wing Cloud, and contributors',
  website: 'https://github.com/winglang/wing',
  paradigms: ['cloud-oriented', 'declarative', 'imperative'],
  status: 'experimental',
  relations: {
    compilesTo: ['javascript'],
  },
  tooling: {
    runtimes: ['Wing Simulator', 'Node.js'],
    packageManagers: ['npm'],
    ecosystems: ['AWS', 'Azure', 'Google Cloud', 'Terraform'],
  },
  version: '0.85.49',
  logo: 'https://raw.githubusercontent.com/winglang/wing/main/packages/vscode-wing/resources/logo.png',
  color: '#27E7D4',
  i18n: {
    en: {
      name: 'Wing',
      description:
        'A cloud-oriented language combining infrastructure and runtime code in one portable model.',
      longDescription:
        'Wing is an open-source, cloud-oriented programming language that combines infrastructure definitions and application logic in one model. Its preflight and inflight phases let the compiler distinguish deployment resources from code that runs inside those resources.\n\nPrograms can run locally in the Wing Simulator or target cloud deployment workflows and providers such as AWS, Azure, and Google Cloud. Wing is distributed through npm and remains a pre-release language with evolving APIs.',
    },
    es: {
      name: 'Wing',
      description:
        'Lenguaje orientado a la nube que une infraestructura y código de ejecución en un modelo portable.',
      longDescription:
        'Wing es un lenguaje de código abierto orientado a la nube que combina definiciones de infraestructura y lógica de aplicación en un solo modelo. Sus fases preflight e inflight permiten distinguir recursos de despliegue del código que se ejecuta dentro de ellos.\n\nLos programas pueden ejecutarse localmente en Wing Simulator o dirigirse a proveedores y flujos de despliegue como AWS, Azure y Google Cloud. Wing se distribuye mediante npm y sigue siendo un lenguaje preliminar con APIs en evolución.',
    },
    it: {
      name: 'Wing',
      description:
        'Linguaggio cloud-oriented che unisce infrastruttura e codice runtime in un modello portabile.',
      longDescription:
        'Wing è un linguaggio open source orientato al cloud che combina definizioni dell’infrastruttura e logica applicativa in un solo modello. Le fasi preflight e inflight permettono al compilatore di distinguere le risorse di distribuzione dal codice eseguito al loro interno.\n\nI programmi possono essere eseguiti localmente nel Wing Simulator o destinati a provider e flussi cloud come AWS, Azure e Google Cloud. Wing è distribuito tramite npm e resta un linguaggio preliminare con API in evoluzione.',
    },
    fr: {
      name: 'Wing',
      description:
        'Langage orienté cloud réunissant infrastructure et code d’exécution dans un modèle portable.',
      longDescription:
        'Wing est un langage open source orienté cloud qui réunit les définitions d’infrastructure et la logique applicative dans un même modèle. Ses phases preflight et inflight permettent au compilateur de distinguer les ressources déployées du code exécuté dans celles-ci.\n\nLes programmes peuvent fonctionner localement dans Wing Simulator ou cibler des fournisseurs et flux cloud comme AWS, Azure et Google Cloud. Wing est distribué par npm et reste un langage en préversion dont les API évoluent.',
    },
    de: {
      name: 'Wing',
      description:
        'Eine cloudorientierte Sprache für Infrastruktur und Laufzeitcode in einem portablen Modell.',
      longDescription:
        'Wing ist eine quelloffene, cloudorientierte Programmiersprache, die Infrastrukturdefinitionen und Anwendungslogik in einem Modell verbindet. Mit den Phasen Preflight und Inflight unterscheidet der Compiler bereitgestellte Ressourcen von dem darin ausgeführten Code.\n\nProgramme können lokal im Wing Simulator laufen oder Cloudanbieter und Bereitstellungsabläufe wie AWS, Azure und Google Cloud ansprechen. Wing wird über npm verteilt und bleibt eine Vorabversion mit sich entwickelnden APIs.',
    },
    pt: {
      name: 'Wing',
      description:
        'Linguagem orientada à nuvem que une infraestrutura e código de execução num modelo portável.',
      longDescription:
        'Wing é uma linguagem de código aberto orientada à nuvem que combina definições de infraestrutura e lógica da aplicação em um único modelo. Suas fases preflight e inflight permitem distinguir recursos de implantação do código executado dentro deles.\n\nOs programas podem rodar localmente no Wing Simulator ou visar provedores e fluxos de nuvem como AWS, Azure e Google Cloud. Wing é distribuída pelo npm e continua sendo uma linguagem de pré-lançamento com APIs em evolução.',
    },
  },
} satisfies Language;
