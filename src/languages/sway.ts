import type { Language } from '@/types';

export const sway = {
  slug: 'sway',
  status: 'experimental',
  publishedDate: '2021-01-01',
  extensions: ['.sw'],
  author: 'Fuel Labs',
  website: 'https://fuellabs.github.io/sway',
  paradigms: ['imperative', 'functional', 'smart-contract'],
  tooling: {
    runtimes: ['FuelVM'],
    packageManagers: ['Forc'],
    ecosystems: ['Blockchain', 'Web3'],
  },
  version: '0.69.0',
  logo: 'https://avatars.githubusercontent.com/u/55993183?v=4',
  color: '#00F58C',
  i18n: {
    en: {
      name: 'Sway',
      description:
        'A Rust-inspired smart contract language for the Fuel blockchain virtual machine.',
      longDescription:
        'Sway is a domain-specific language for writing smart contracts on the FuelVM, the execution layer built by Fuel Labs. It borrows Rust syntax, traits, and safety principles while adding blockchain-native concepts such as contract storage, predicates, and scripts.\n\nThe Forc toolchain manages builds, dependencies, testing, and deployment, giving Sway developers a cargo-like workflow for the Fuel modular rollup ecosystem.',
    },
    es: {
      name: 'Sway',
      description:
        'Un lenguaje de contratos inteligentes inspirado en Rust para la máquina virtual de Fuel.',
      longDescription:
        'Sway es un lenguaje de dominio específico para escribir contratos inteligentes en la FuelVM, la capa de ejecución construida por Fuel Labs. Toma prestados la sintaxis, los traits y los principios de seguridad de Rust, añadiendo conceptos nativos de blockchain como almacenamiento de contratos, predicados y scripts.\n\nLa cadena de herramientas Forc gestiona builds, dependencias, pruebas y despliegue, dando a los desarrolladores de Sway un flujo estilo cargo para el ecosistema de rollups modulares de Fuel.',
    },
    it: {
      name: 'Sway',
      description:
        'Un linguaggio per smart contract ispirato a Rust per la macchina virtuale di Fuel.',
      longDescription:
        "Sway è un linguaggio di dominio specifico per scrivere smart contract sulla FuelVM, il livello di esecuzione costruito da Fuel Labs. Prende in prestito la sintassi, i trait e i principi di sicurezza di Rust, aggiungendo concetti nativi della blockchain come lo storage dei contratti, i predicati e gli script.\n\nLa toolchain Forc gestisce build, dipendenze, test e deployment, offrendo agli sviluppatori Sway un flusso di lavoro in stile cargo per l'ecosistema di rollup modulari di Fuel.",
    },
    fr: {
      name: 'Sway',
      description: 'Un langage de smart contracts inspiré de Rust pour la machine virtuelle Fuel.',
      longDescription:
        "Sway est un langage dédié à l'écriture de smart contracts sur la FuelVM, la couche d'exécution construite par Fuel Labs. Il emprunte la syntaxe, les traits et les principes de sûreté de Rust, en ajoutant des concepts propres à la blockchain comme le stockage de contrats, les prédicats et les scripts.\n\nLa chaîne d'outils Forc gère la compilation, les dépendances, les tests et le déploiement, offrant aux développeurs Sway un flux de travail à la cargo pour l'écosystème de rollups modulaires de Fuel.",
    },
    de: {
      name: 'Sway',
      description:
        'Eine Rust-inspirierte Smart-Contract-Sprache für die virtuelle Maschine von Fuel.',
      longDescription:
        'Sway ist eine domänenspezifische Sprache zum Schreiben von Smart Contracts auf der FuelVM, der von Fuel Labs entwickelten Ausführungsschicht. Sie übernimmt Syntax, Traits und Sicherheitsprinzipien von Rust und ergänzt Blockchain-native Konzepte wie Contract-Storage, Prädikate und Skripte.\n\nDie Forc-Toolchain verwaltet Builds, Abhängigkeiten, Tests und Deployment und bietet Sway-Entwicklern einen cargo-ähnlichen Workflow für das modulare Rollup-Ökosystem von Fuel.',
    },
    pt: {
      name: 'Sway',
      description:
        'Uma linguagem de contratos inteligentes inspirada em Rust para a máquina virtual da Fuel.',
      longDescription:
        'Sway é uma linguagem de domínio específico para escrever contratos inteligentes na FuelVM, a camada de execução construída pela Fuel Labs. Ela toma emprestados a sintaxe, os traits e os princípios de segurança do Rust, adicionando conceitos nativos de blockchain como armazenamento de contratos, predicados e scripts.\n\nA toolchain Forc gerencia builds, dependências, testes e implantação, dando aos desenvolvedores Sway um fluxo de trabalho no estilo cargo para o ecossistema de rollups modulares da Fuel.',
    },
  },
} satisfies Language;
