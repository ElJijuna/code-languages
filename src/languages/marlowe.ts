import type { Language } from '../types';

export const marlowe = {
  slug: 'marlowe',
  publishedDate: '2018-01-01',
  extensions: ['.marlowe'],
  author: 'IOG',
  website: 'https://marlowe.iohk.io',
  paradigms: ['smart contract', 'domain-specific', 'functional'],
  tooling: {
    runtimes: ['Cardano'],
    ecosystems: ['Cardano', 'Financial contracts'],
  },
  version: 'Marlowe Runtime',
  logo: 'https://dummyimage.com/32x32/6D28D9/ffffff.png&text=Ma',
  color: '#6D28D9',
  i18n: {
    en: {
      name: 'Marlowe',
      description: 'A domain-specific language for financial smart contracts on Cardano.',
      longDescription:
        'Marlowe is a domain-specific language for describing financial contracts, originally designed for Cardano. It models roles, choices, payments, deposits, timeouts, and contract continuations in a constrained language intended to be easier to analyze than general-purpose smart contract code.\n\nMarlowe is used for financial agreement prototypes, education, and contract workflows where explicit lifecycle modeling matters. Its tooling includes visual and textual authoring paths plus execution infrastructure in the Cardano ecosystem.',
    },
    es: {
      name: 'Marlowe',
      description:
        'Lenguaje especifico de dominio para contratos financieros inteligentes en Cardano.',
      longDescription:
        'Marlowe es un lenguaje especifico de dominio para describir contratos financieros, disenado originalmente para Cardano. Modela roles, elecciones, pagos, depositos, vencimientos y continuaciones de contratos en un lenguaje restringido pensado para ser mas facil de analizar que codigo general de contratos inteligentes.\n\nMarlowe se usa para prototipos de acuerdos financieros, educacion y flujos de contratos donde importa modelar explicitamente el ciclo de vida. Sus herramientas incluyen autoria visual y textual, ademas de infraestructura de ejecucion en el ecosistema Cardano.',
    },
    it: {
      name: 'Marlowe',
      description: 'DSL per smart contract finanziari su Cardano.',
      longDescription:
        'Marlowe e un linguaggio specifico di dominio per descrivere contratti finanziari, progettato originariamente per Cardano. Modella ruoli, scelte, pagamenti, depositi, timeout e continuazioni dei contratti in un linguaggio limitato pensato per essere piu facile da analizzare rispetto al codice generale per smart contract.\n\nMarlowe viene usato per prototipi di accordi finanziari, formazione e workflow contrattuali in cui conta modellare esplicitamente il ciclo di vita. Gli strumenti includono authoring visuale e testuale, oltre a infrastruttura di esecuzione nell ecosistema Cardano.',
    },
    fr: {
      name: 'Marlowe',
      description: 'DSL pour contrats financiers intelligents sur Cardano.',
      longDescription:
        'Marlowe est un langage specifique au domaine pour decrire des contrats financiers, concu a l origine pour Cardano. Il modelise les roles, choix, paiements, depots, delais et continuations de contrats dans un langage contraint plus facile a analyser que du code general de contrats intelligents.\n\nMarlowe est utilise pour des prototypes d accords financiers, l education et des flux de contrats ou la modelisation explicite du cycle de vie est importante. Ses outils incluent des modes d auteur visuels et textuels ainsi qu une infrastructure d execution dans l ecosysteme Cardano.',
    },
    de: {
      name: 'Marlowe',
      description: 'Domanenspezifische Sprache fur finanzielle Smart Contracts auf Cardano.',
      longDescription:
        'Marlowe ist eine domanenspezifische Sprache zum Beschreiben finanzieller Vertrage und wurde ursprunglich fur Cardano entworfen. Sie modelliert Rollen, Entscheidungen, Zahlungen, Einzahlungen, Timeouts und Vertragsfortsetzungen in einer eingeschrankten Sprache, die leichter analysierbar sein soll als allgemeiner Smart-Contract-Code.\n\nMarlowe wird fur Prototypen finanzieller Vereinbarungen, Lehre und Vertrags-Workflows genutzt, bei denen explizite Lebenszyklusmodellierung wichtig ist. Die Werkzeuge umfassen visuelle und textuelle Autorenschaft sowie Ausfuhrungsinfrastruktur im Cardano-Okosystem.',
    },
    pt: {
      name: 'Marlowe',
      description:
        'Linguagem especifica de dominio para contratos financeiros inteligentes no Cardano.',
      longDescription:
        'Marlowe e uma linguagem especifica de dominio para descrever contratos financeiros, criada originalmente para Cardano. Ela modela papeis, escolhas, pagamentos, depositos, prazos e continuacoes de contrato em uma linguagem restrita, pensada para ser mais facil de analisar que codigo geral de contratos inteligentes.\n\nMarlowe e usada em prototipos de acordos financeiros, educacao e fluxos de contratos onde a modelagem explicita do ciclo de vida importa. Suas ferramentas incluem autoria visual e textual, alem de infraestrutura de execucao no ecossistema Cardano.',
    },
  },
} satisfies Language;
