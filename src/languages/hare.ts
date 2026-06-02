import type { Language } from '../types';

export const hare = {
  slug: 'hare',
  publishedDate: '2022-04-25',
  extensions: ['.ha'],
  author: 'Drew DeVault',
  website: 'https://harelang.org',
  paradigms: ['imperative', 'systems'],
  tooling: {
    runtimes: ['hare'],
    packageManagers: ['hare (built-in modules)'],
    ecosystems: ['Systems', 'Embedded', 'Unix', 'Linux'],
  },
  version: '0.25.1',
  logo: 'https://harelang.org/mascot.png',
  color: '#5D4E37',
  i18n: {
    en: {
      name: 'Hare',
      description:
        'A systems programming language designed to be simple, stable, and robust, with explicit memory management and no hidden control flow.',
      longDescription:
        'Hare is a systems programming language designed by Drew DeVault with an emphasis on simplicity, stability, and long-term maintainability. It targets Unix-like operating systems and bare-metal environments, serving as a modern alternative to C.\n\nHare has no runtime, no garbage collector, and no hidden control flow. Memory management is manual and explicit. The language includes tagged unions, slices, deferred function calls, and a standard library that covers I/O, networking, cryptography, and datetime handling. Hare uses a reproducible build system and aims for a stable specification that does not change, making it suitable for long-lived systems software.',
    },
    es: {
      name: 'Hare',
      description:
        'Un lenguaje de programación de sistemas diseñado para ser simple, estable y robusto, con gestión de memoria explícita y sin flujo de control oculto.',
      longDescription:
        'Hare es un lenguaje de programación de sistemas diseñado por Drew DeVault con énfasis en la simplicidad, estabilidad y mantenibilidad a largo plazo. Está dirigido a sistemas operativos Unix-like y entornos bare-metal, como alternativa moderna a C.\n\nHare no tiene runtime ni recolector de basura, y no tiene flujo de control oculto. La gestión de memoria es manual y explícita. El lenguaje incluye uniones etiquetadas, slices, llamadas diferidas y una biblioteca estándar que cubre E/S, redes, criptografía y fechas.',
    },
    it: {
      name: 'Hare',
      description:
        'Linguaggio di sistema semplice e stabile con gestione esplicita della memoria e senza flusso di controllo nascosto.',
      longDescription:
        'Hare è un linguaggio di programmazione di sistema progettato da Drew DeVault con enfasi su semplicità, stabilità e manutenibilità a lungo termine. È destinato a sistemi operativi Unix-like e ambienti bare-metal, come alternativa moderna a C.\n\nHare non ha runtime né garbage collector, e non ha flusso di controllo nascosto. La gestione della memoria è manuale ed esplicita. Il linguaggio include union taggate, slice, chiamate differite e una libreria standard che copre I/O, rete, crittografia e gestione delle date.',
    },
    fr: {
      name: 'Hare',
      description:
        'Un langage de programmation système conçu pour être simple, stable et robuste, avec une gestion de mémoire explicite et sans flux de contrôle caché.',
      longDescription:
        "Hare est un langage de programmation système conçu par Drew DeVault avec un accent sur la simplicité, la stabilité et la maintenabilité à long terme. Il cible les systèmes d'exploitation de type Unix et les environnements bare-metal, comme alternative moderne à C.\n\nHare n'a pas de runtime ni de garbage collector, et pas de flux de contrôle caché. La gestion de la mémoire est manuelle et explicite. Le langage inclut des unions étiquetées, des slices, des appels différés et une bibliothèque standard couvrant l'I/O, le réseau, la cryptographie et la gestion des dates.",
    },
    de: {
      name: 'Hare',
      description:
        'Systemprogrammiersprache für Einfachheit, Stabilität und Robustheit, mit expliziter Speicherverwaltung und ohne verborgenen Kontrollfluss.',
      longDescription:
        'Hare ist eine von Drew DeVault entwickelte Systemprogrammiersprache mit Schwerpunkt auf Einfachheit, Stabilität und langfristiger Wartbarkeit. Sie zielt auf Unix-ähnliche Betriebssysteme und Bare-Metal-Umgebungen als moderne Alternative zu C.\n\nHare hat keine Laufzeitumgebung, keinen Garbage Collector und keinen verborgenen Kontrollfluss. Die Speicherverwaltung ist manuell und explizit. Die Sprache umfasst Tagged Unions, Slices, verzögerte Funktionsaufrufe und eine Standardbibliothek für I/O, Netzwerk, Kryptographie und Datumsverwaltung.',
    },
    pt: {
      name: 'Hare',
      description:
        'Uma linguagem de programação de sistemas projetada para ser simples, estável e robusta, com gerenciamento de memória explícito e sem fluxo de controle oculto.',
      longDescription:
        'Hare é uma linguagem de programação de sistemas projetada por Drew DeVault com ênfase em simplicidade, estabilidade e manutenibilidade a longo prazo. Destina-se a sistemas operacionais Unix-like e ambientes bare-metal, como alternativa moderna ao C.\n\nHare não tem runtime nem coletor de lixo, e não tem fluxo de controle oculto. O gerenciamento de memória é manual e explícito. A linguagem inclui uniões marcadas, slices, chamadas diferidas e uma biblioteca padrão que cobre I/O, rede, criptografia e manipulação de datas.',
    },
  },
} satisfies Language;
