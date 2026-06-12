import type { Language } from '../types';

export const rust = {
  slug: 'rust',
  publishedDate: '2015-05-15',
  extensions: ['.rs'],
  author: 'Graydon Hoare / Mozilla Research',
  website: 'https://www.rust-lang.org',
  paradigms: ['concurrent', 'functional', 'imperative', 'procedural'],
  tooling: {
    runtimes: ['Native', 'WebAssembly'],
    packageManagers: ['Cargo'],
    ecosystems: ['Systems', 'WebAssembly', 'Embedded'],
  },
  version: '1.96.0',
  logo: 'https://www.rust-lang.org/logos/rust-logo-512x512.png',
  color: '#DEA584',
  i18n: {
    en: {
      name: 'Rust',
      description: 'A systems programming language focused on safety, speed, and concurrency.',
      longDescription:
        'Rust provides memory safety without a garbage collector through ownership, borrowing, lifetimes, and strong compile-time checks.\n\nIt is used for systems software, command-line tools, web services, embedded development, WebAssembly, and performance-critical infrastructure.',
    },
    es: {
      name: 'Rust',
      description: 'Un lenguaje de sistemas enfocado en seguridad, velocidad y concurrencia.',
      longDescription:
        'Rust ofrece seguridad de memoria sin recolector de basura mediante ownership, borrowing, lifetimes y verificaciones fuertes en tiempo de compilacion.\n\nSe usa en software de sistemas, herramientas de linea de comandos, servicios web, desarrollo embebido, WebAssembly e infraestructura critica para rendimiento.',
    },
    it: {
      name: 'Rust',
      description:
        'Un linguaggio di programmazione per sistemi focalizzato su sicurezza, velocita e concorrenza.',
      longDescription:
        'Rust fornisce sicurezza della memoria senza un garbage collector attraverso la proprieta, il prestito, i lifetimes e controlli rigorosi a tempo di compilazione.\n\nE utilizzato per software di sistema, strumenti da riga di comando, servizi web, sviluppo embedded, WebAssembly e infrastrutture critiche per le prestazioni.',
    },
    fr: {
      name: 'Rust',
      description:
        'Un langage de programmation systeme axe sur la securite, la vitesse et la concurrence.',
      longDescription:
        "Rust offre une securite de la memoire sans collecteur de tas grace a la propriete, au pret, aux durees de vie et a des verifications strictes au moment de la compilation.\n\nIl est utilise pour les logiciels systeme, les outils en ligne de commande, les services web, le developpement embarque, WebAssembly et l'infrastructure critique en termes de performance.",
    },
    de: {
      name: 'Rust',
      description:
        'Eine Programmiersprache für Systemprogrammierung, die auf Sicherheit, Geschwindigkeit und Nebenläufigkeit ausgerichtet ist.',
      longDescription:
        'Rust bietet Speichersicherheit ohne Garbage Collector durch Ownership, Borrowing, Lifetimes und starke Compile-Zeit-Prüfungen.\n\nEs wird für Systemsoftware, Kommandozeilen-Tools, Webdienste, eingebettete Entwicklung, WebAssembly und performante Infrastruktur verwendet.',
    },
    pt: {
      name: 'Rust',
      description:
        'Linguagem de programação de sistemas focada em segurança, velocidade e concorrência.',
      longDescription:
        'Rust oferece segurança de memória sem coletor de lixo através de propriedade, empréstimo, tempos de vida e verificações rigorosas em tempo de compilação.\n\nÉ usada para software de sistemas, ferramentas de linha de comando, serviços web, desenvolvimento embarcado, WebAssembly e infraestrutura de alto desempenho.',
    },
  },
} satisfies Language;
