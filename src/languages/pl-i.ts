import type { Language } from '@/types';

export const plI = {
  slug: 'pl-i',
  publishedDate: '1964-01-01',
  extensions: ['.pli', '.pl1'],
  author: 'IBM',
  website: 'https://www.ibm.com/products/pli-compiler-aix',
  paradigms: ['imperative', 'procedural', 'structured'],
  tooling: {
    runtimes: ['IBM Enterprise PL/I', 'Open PL/I compilers'],
    ecosystems: ['Mainframe', 'Enterprise', 'Scientific Computing'],
  },
  version: 'Enterprise PL/I 6.2',
  logo: 'https://dummyimage.com/32x32/1F2937/ffffff.png&text=PL1',
  color: '#1F2937',
  i18n: {
    en: {
      name: 'PL/I',
      description:
        'An IBM language combining business, scientific, and systems programming features.',
      longDescription:
        'PL/I was designed by IBM to cover business data processing, scientific computing, and systems programming in one language. It combines block structure, strong data-description facilities, exceptions, concurrency features, and rich numeric support.\n\nPL/I remains associated with mainframe and enterprise systems, where long-lived applications depend on its data handling, batch processing, and compatibility with IBM tooling.',
    },
    es: {
      name: 'PL/I',
      description:
        'Lenguaje de IBM que combina rasgos de programacion empresarial, cientifica y de sistemas.',
      longDescription:
        'PL/I fue disenado por IBM para cubrir procesamiento empresarial, computacion cientifica y programacion de sistemas en un solo lenguaje. Combina estructura de bloques, descripciones de datos, excepciones, concurrencia y soporte numerico amplio.\n\nSigue asociado a mainframes y sistemas empresariales donde aplicaciones de larga vida dependen de su manejo de datos, procesos batch y herramientas IBM.',
    },
    it: {
      name: 'PL/I',
      description:
        'Un linguaggio IBM che combina funzionalità per la programmazione aziendale, scientifica e di sistemi.',
      longDescription:
        "PL/I è stato progettato da IBM per coprire l'elaborazione dei dati aziendali, il calcolo scientifico e la programmazione di sistema in un unico linguaggio. Combina struttura a blocchi, potenti funzionalità di descrizione dei dati, gestione delle eccezioni, funzionalità di concorrenza e supporto numerico ricco.\n\nPL/I rimane associato ai sistemi mainframe ed enterprise, dove le applicazioni a lungo termine dipendono dalla sua capacità di gestire i dati, l'elaborazione batch e la compatibilità con gli strumenti IBM.",
    },
    fr: {
      name: 'PL/I',
      description:
        'Langage IBM combinant les fonctionnalités de programmation métier, scientifique et système.',
      longDescription:
        "Conçu par IBM, PL/I combine la gestion des données commerciales, le calcul scientifique et la programmation système. Il offre une structure en blocs, des capacités de description de données robustes, la gestion des exceptions, des fonctionnalités de concurrence et un support numérique riche.\n\nPL/I reste associé aux systèmes mainframe et d'entreprise, où les applications à long terme dépendent de ses capacités de manipulation des données, de traitement par lots et de sa compatibilité avec les outils IBM.",
    },
    de: {
      name: 'PL/I',
      description:
        'Eine von IBM entwickelte Sprache für Geschäftsanwendungen, wissenschaftliche Berechnungen und Systemprogrammierung.',
      longDescription:
        'PL/I wurde von IBM entwickelt, um Geschäftsdatenverarbeitung, wissenschaftliches Rechnen und Systemprogrammierung in einer einzigen Sprache zu vereinen. Es kombiniert Blockstruktur, leistungsstarke Datenbeschreibung, Ausnahmen, Nebenläufigkeitsfunktionen und umfangreiche numerische Unterstützung.\n\nPL/I ist weiterhin mit Mainframe- und Unternehmenssystemen verbunden, wo langlaufende Anwendungen auf seine Datenverarbeitung, Batch-Verarbeitung und Kompatibilität mit IBM-Tools angewiesen sind.',
    },
    pt: {
      name: 'PL/I',
      description:
        'Linguagem da IBM que combina recursos de programação empresarial, científica e de sistemas.',
      longDescription:
        'O PL/I foi projetado pela IBM para cobrir o processamento de dados empresariais, computação científica e programação de sistemas em uma única linguagem. Ele combina estrutura de blocos, fortes recursos de descrição de dados, tratamento de exceções, recursos de concorrência e suporte numérico rico.\n\nO PL/I permanece associado a sistemas mainframe e corporativos, onde aplicações de longa duração dependem do seu processamento de dados, processamento em lote e compatibilidade com as ferramentas IBM.',
    },
  },
} satisfies Language;
