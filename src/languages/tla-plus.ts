import type { Language } from '@/types';

export const tlaPlus = {
  slug: 'tla-plus',
  publishedDate: '1999-01-01',
  extensions: ['.tla'],
  author: 'Leslie Lamport',
  website: 'https://lamport.azurewebsites.net/tla/tla.html',
  paradigms: ['specification', 'formal-methods', 'temporal-logic', 'declarative'],
  tooling: {
    runtimes: ['TLC', 'TLA+ Toolbox', 'Apalache'],
    ecosystems: ['Formal Methods', 'Distributed Systems', 'Verification'],
  },
  version: 'TLA+ 2',
  logo: 'https://avatars.githubusercontent.com/u/315978?v=4',
  color: '#4A5568',
  i18n: {
    en: {
      name: 'TLA+',
      description: 'A formal specification language for state machines and temporal properties.',
      longDescription:
        'TLA+ describes systems as mathematical state transitions with actions, invariants, temporal formulas, modules, and refinement-oriented specifications. Tooling such as TLC explores behaviors to check models.\n\nIt is used to reason about distributed algorithms, protocols, concurrency, safety properties, design reviews, and systems where a precise specification catches failures early.',
    },
    es: {
      name: 'TLA+',
      description: 'Un lenguaje de especificacion formal para estados y propiedades temporales.',
      longDescription:
        'TLA+ describe sistemas como transiciones matematicas de estado con acciones, invariantes, formulas temporales, modulos y especificaciones orientadas a refinamiento. Herramientas como TLC exploran comportamientos para revisar modelos.\n\nSe usa para razonar sobre algoritmos distribuidos, protocolos, concurrencia, propiedades de seguridad, revisiones de diseno y sistemas donde una especificacion precisa detecta fallos temprano.',
    },
    it: {
      name: 'TLA+',
      description: 'Un linguaggio di specifica formale per macchine a stati e proprieta temporali.',
      longDescription:
        'TLA+ descrive i sistemi come transizioni di stato matematiche con azioni, invarianti, formule temporali, moduli e specifiche orientate alla raffinazione. Strumenti come TLC esplorano i comportamenti per verificare i modelli.\n\nViene utilizzato per ragionare su algoritmi distribuiti, protocolli, concorrenza, proprieta di sicurezza, revisioni di progettazione e sistemi in cui una specifica precisa individa i guasti in anticipo.',
    },
    fr: {
      name: 'TLA+',
      description:
        'Un langage de specification formelle pour les machines a etats et les proprietes temporelles.',
      longDescription:
        "TLA+ decrit les systemes comme des transitions d'etat mathematiques avec des actions, des invariants, des formules temporelles, des modules et des specifications orientees vers la verification. Les outils tels que TLC explorent les comportements pour verifier les modeles.\n\nIl est utilise pour raisonner sur les algorithmes distribues, les protocoles, la concurrence, les proprietes de securite, les revues de conception et les systemes ou une specification precise detecte les erreurs tot.",
    },
    de: {
      name: 'TLA+',
      description:
        'Eine formale Spezifikationssprache für Zustandsautomaten und zeitliche Eigenschaften.',
      longDescription:
        'TLA+ beschreibt Systeme als mathematische Zustandsübergänge mit Aktionen, Invarianten, zeitlichen Formeln, Modulen und auf Refinement ausgerichteten Spezifikationen. Werkzeuge wie TLC untersuchen Verhaltensweisen, um Modelle zu überprüfen.\n\nEs wird verwendet, um über verteilte Algorithmen, Protokolle, Nebenläufigkeit, Sicherheitsmerkmale, Designüberprüfungen und Systeme zu argumentieren, bei denen eine präzise Spezifikation frühzeitig Fehler a﷬kt.',
    },
    pt: {
      name: 'TLA+',
      description: 'Linguagem formal para especificar máquinas de estado e propriedades temporais.',
      longDescription:
        'O TLA+ descreve sistemas como transições estatais matemáticas com ações, invariantes, fórmulas temporais, módulos e especificações orientadas à refinamento. Ferramentas como o TLC exploram comportamentos para verificar modelos.\n\nÉ usado para raciocinar sobre algoritmos distribuídos, protocolos, concorrência, propriedades de segurança, revisões de design e sistemas onde uma especificação precisa detecta falhas precocemente.',
    },
  },
} satisfies Language;
