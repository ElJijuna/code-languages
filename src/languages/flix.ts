import type { Language } from '@/types';

export const flix = {
  slug: 'flix',
  publishedDate: '2016-01-01',
  extensions: ['.flix'],
  author: 'Magnus Madsen / Aarhus University',
  website: 'https://flix.dev',
  paradigms: ['functional', 'imperative', 'logic', 'concurrent'],
  tooling: {
    runtimes: ['JVM'],
    packageManagers: ['Flix package manager'],
    ecosystems: ['JVM'],
  },
  version: '0.60.0',
  logo: 'https://avatars.githubusercontent.com/u/16831634?v=4',
  color: '#2D2A55',
  i18n: {
    en: {
      name: 'Flix',
      description: 'A JVM language combining functional, imperative, and Datalog-style logic programming.',
      longDescription:
        'Flix is a statically typed language for the JVM that blends functional programming with algebraic effects, channels and processes for concurrency, and first-class Datalog constraints for logic programming. Its type and effect system tracks purity, enabling safe parallelism and aggressive optimization.\n\nDeveloped as a research language at Aarhus University with an open-source community, Flix ships a complete toolchain — compiler, build tool, package manager, and Visual Studio Code extension.',
    },
    es: {
      name: 'Flix',
      description: 'Un lenguaje JVM que combina programación funcional, imperativa y lógica estilo Datalog.',
      longDescription:
        'Flix es un lenguaje de tipado estático para la JVM que mezcla programación funcional con efectos algebraicos, canales y procesos para concurrencia, y restricciones Datalog de primera clase para programación lógica. Su sistema de tipos y efectos rastrea la pureza, habilitando paralelismo seguro y optimización agresiva.\n\nDesarrollado como lenguaje de investigación en la Universidad de Aarhus con una comunidad de código abierto, Flix incluye una cadena de herramientas completa: compilador, herramienta de build, gestor de paquetes y extensión para Visual Studio Code.',
    },
    it: {
      name: 'Flix',
      description: 'Un linguaggio JVM che combina programmazione funzionale, imperativa e logica in stile Datalog.',
      longDescription:
        "Flix è un linguaggio a tipizzazione statica per la JVM che unisce la programmazione funzionale con effetti algebrici, canali e processi per la concorrenza, e vincoli Datalog di prima classe per la programmazione logica. Il suo sistema di tipi ed effetti traccia la purezza, abilitando parallelismo sicuro e ottimizzazioni aggressive.\n\nSviluppato come linguaggio di ricerca all'Università di Aarhus con una comunità open source, Flix offre una toolchain completa: compilatore, strumento di build, gestore di pacchetti ed estensione per Visual Studio Code.",
    },
    fr: {
      name: 'Flix',
      description: 'Un langage JVM combinant programmation fonctionnelle, impérative et logique de type Datalog.',
      longDescription:
        "Flix est un langage à typage statique pour la JVM qui marie la programmation fonctionnelle avec des effets algébriques, des canaux et des processus pour la concurrence, et des contraintes Datalog de première classe pour la programmation logique. Son système de types et d'effets suit la pureté, permettant un parallélisme sûr et des optimisations agressives.\n\nDéveloppé comme langage de recherche à l'université d'Aarhus avec une communauté open source, Flix fournit une chaîne d'outils complète : compilateur, outil de build, gestionnaire de paquets et extension Visual Studio Code.",
    },
    de: {
      name: 'Flix',
      description: 'Eine JVM-Sprache, die funktionale, imperative und Datalog-artige Logikprogrammierung vereint.',
      longDescription:
        'Flix ist eine statisch typisierte Sprache für die JVM, die funktionale Programmierung mit algebraischen Effekten, Kanälen und Prozessen für Nebenläufigkeit sowie erstklassigen Datalog-Constraints für Logikprogrammierung verbindet. Ihr Typ- und Effektsystem verfolgt Reinheit und ermöglicht sichere Parallelität und aggressive Optimierung.\n\nAls Forschungssprache an der Universität Aarhus mit einer Open-Source-Community entwickelt, liefert Flix eine vollständige Toolchain: Compiler, Build-Tool, Paketmanager und Visual-Studio-Code-Erweiterung.',
    },
    pt: {
      name: 'Flix',
      description: 'Uma linguagem JVM que combina programação funcional, imperativa e lógica estilo Datalog.',
      longDescription:
        'Flix é uma linguagem de tipagem estática para a JVM que mistura programação funcional com efeitos algébricos, canais e processos para concorrência, e restrições Datalog de primeira classe para programação lógica. Seu sistema de tipos e efeitos rastreia a pureza, permitindo paralelismo seguro e otimização agressiva.\n\nDesenvolvida como linguagem de pesquisa na Universidade de Aarhus com uma comunidade de código aberto, a Flix traz uma toolchain completa: compilador, ferramenta de build, gerenciador de pacotes e extensão para o Visual Studio Code.',
    },
  },
} satisfies Language;
