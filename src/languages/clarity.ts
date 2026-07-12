import type { Language } from '@/types';

export const clarity = {
  slug: 'clarity',
  publishedDate: '2021-01-14',
  extensions: ['.clar'],
  author: 'Hiro Systems / Stacks',
  website: 'https://clarity-lang.org',
  paradigms: ['functional', 'declarative', 'smart-contract'],
  relations: {
    dialectOf: ['lisp'],
  },
  tooling: {
    runtimes: ['Stacks blockchain'],
    packageManagers: ['Clarinet'],
    ecosystems: ['Blockchain', 'Web3'],
  },
  version: 'Clarity 3',
  logo: 'https://avatars.githubusercontent.com/u/66125257?v=4',
  color: '#5546FF',
  i18n: {
    en: {
      name: 'Clarity',
      description: 'A decidable, Lisp-like smart contract language for the Stacks Bitcoin layer.',
      longDescription:
        'Clarity is the smart contract language of the Stacks blockchain, which settles on Bitcoin. Its Lisp-like syntax is interpreted, not compiled, and the language is intentionally decidable: contracts cannot loop unboundedly, so their cost and behavior can be analyzed before execution.\n\nContracts are published as readable source on-chain, eliminating compiler trust issues. The Clarinet toolchain provides local development, testing, and deployment workflows.',
    },
    es: {
      name: 'Clarity',
      description:
        'Un lenguaje de contratos inteligentes decidible y tipo Lisp para la capa Bitcoin de Stacks.',
      longDescription:
        'Clarity es el lenguaje de contratos inteligentes de la blockchain Stacks, que se asienta sobre Bitcoin. Su sintaxis tipo Lisp se interpreta, no se compila, y el lenguaje es intencionalmente decidible: los contratos no pueden iterar sin límite, así que su costo y comportamiento pueden analizarse antes de la ejecución.\n\nLos contratos se publican como código fuente legible en la cadena, eliminando problemas de confianza en el compilador. La cadena de herramientas Clarinet ofrece flujos de desarrollo local, pruebas y despliegue.',
    },
    it: {
      name: 'Clarity',
      description:
        'Un linguaggio per smart contract decidibile e in stile Lisp per il layer Bitcoin di Stacks.',
      longDescription:
        "Clarity è il linguaggio per smart contract della blockchain Stacks, che si regola su Bitcoin. La sua sintassi in stile Lisp viene interpretata, non compilata, e il linguaggio è volutamente decidibile: i contratti non possono iterare senza limiti, quindi costo e comportamento possono essere analizzati prima dell'esecuzione.\n\nI contratti sono pubblicati come sorgente leggibile sulla catena, eliminando i problemi di fiducia nel compilatore. La toolchain Clarinet fornisce flussi di sviluppo locale, test e deployment.",
    },
    fr: {
      name: 'Clarity',
      description:
        'Un langage de smart contracts décidable, de type Lisp, pour la couche Bitcoin de Stacks.',
      longDescription:
        "Clarity est le langage de smart contracts de la blockchain Stacks, qui se règle sur Bitcoin. Sa syntaxe de type Lisp est interprétée, non compilée, et le langage est volontairement décidable : les contrats ne peuvent pas boucler indéfiniment, leur coût et leur comportement peuvent donc être analysés avant exécution.\n\nLes contrats sont publiés en source lisible sur la chaîne, éliminant les problèmes de confiance envers le compilateur. La chaîne d'outils Clarinet fournit développement local, tests et déploiement.",
    },
    de: {
      name: 'Clarity',
      description:
        'Eine entscheidbare, Lisp-artige Smart-Contract-Sprache für die Bitcoin-Schicht von Stacks.',
      longDescription:
        'Clarity ist die Smart-Contract-Sprache der Stacks-Blockchain, die auf Bitcoin abgerechnet wird. Ihre Lisp-artige Syntax wird interpretiert, nicht kompiliert, und die Sprache ist bewusst entscheidbar: Verträge können nicht unbegrenzt iterieren, sodass Kosten und Verhalten vor der Ausführung analysierbar sind.\n\nVerträge werden als lesbarer Quelltext on-chain veröffentlicht, was Vertrauensprobleme mit Compilern beseitigt. Die Clarinet-Toolchain bietet lokale Entwicklung, Tests und Deployment.',
    },
    pt: {
      name: 'Clarity',
      description:
        'Uma linguagem de contratos inteligentes decidível e estilo Lisp para a camada Bitcoin da Stacks.',
      longDescription:
        'Clarity é a linguagem de contratos inteligentes da blockchain Stacks, que se liquida no Bitcoin. Sua sintaxe estilo Lisp é interpretada, não compilada, e a linguagem é intencionalmente decidível: os contratos não podem iterar sem limite, então seu custo e comportamento podem ser analisados antes da execução.\n\nOs contratos são publicados como código-fonte legível na cadeia, eliminando problemas de confiança no compilador. A toolchain Clarinet fornece fluxos de desenvolvimento local, testes e implantação.',
    },
  },
} satisfies Language;
