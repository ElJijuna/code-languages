import type { Language } from '@/types';

export const self = {
  slug: 'self',
  publishedDate: '1987-01-01',
  extensions: ['.self'],
  author: 'David Ungar and Randall Smith',
  website: 'https://selflanguage.org',
  paradigms: ['prototype-based', 'object-oriented', 'dynamic'],
  tooling: {
    runtimes: ['Self VM'],
    ecosystems: ['Language Research', 'Interactive Environments', 'Prototype OO'],
  },
  version: '2024.1',
  logo: 'https://selflanguage.org/img/self-logo.png',
  color: '#EA580C',
  i18n: {
    en: {
      name: 'Self',
      description:
        'A prototype-based object language that influenced JavaScript, VM design, and live IDEs.',
      longDescription:
        'Self is a dynamic object-oriented language based on prototypes and message passing rather than classes. It was created as a research language for exploring object systems, live programming environments, and high-performance dynamic dispatch.\n\nSelf influenced JavaScript, Smalltalk VM work, adaptive optimization, and interactive development systems where objects can be inspected, changed, and extended while the program is running.',
    },
    es: {
      name: 'Self',
      description:
        'Lenguaje de objetos basado en prototipos que influyo en JavaScript, VMs e IDEs vivos.',
      longDescription:
        'Self es un lenguaje orientado a objetos dinamico basado en prototipos y envio de mensajes, no en clases. Fue creado como lenguaje de investigacion para explorar sistemas de objetos, entornos vivos y dispatch dinamico de alto rendimiento.\n\nInfluyo en JavaScript, trabajo de VMs de Smalltalk, optimizacion adaptativa y entornos interactivos donde los objetos pueden inspeccionarse y cambiarse mientras el programa corre.',
    },
    it: {
      name: 'Self',
      description:
        'Linguaggio basato su prototipi che ha influenzato JavaScript, il design delle VM e gli IDE interattivi.',
      longDescription:
        "Self è un linguaggio dinamico orientato agli oggetti basato sui prototipi e sulla comunicazione di messaggi, piuttosto che sulle classi. È stato creato come linguaggio di ricerca per esplorare i sistemi a oggetti, gli ambienti di programmazione interattiva e la dispatch dinamica ad alte prestazioni.\n\nSelf ha influenzato JavaScript, il lavoro delle VM Smalltalk, l'ottimizzazione adattativa e i sistemi di sviluppo interattivo in cui gli oggetti possono essere ispezionati, modificati ed estesi durante l'esecuzione del programma.",
    },
    fr: {
      name: 'Self',
      description:
        'Langage orienté objet basé sur les prototypes et le passage de messages, influant sur JavaScript, la conception des machines virtuelles et les IDE interactifs.',
      longDescription:
        "Self est un langage dynamique orienté objet basé sur les prototypes et le passage de messages plutôt que les classes. Il a été créé comme un langage de recherche pour explorer les systèmes d'objets, les environnements de programmation interactive et la mise en œuvre performante du dispatch dynamique.\n\nSelf a influencé JavaScript, le travail sur la machine virtuelle Smalltalk, l'optimisation adaptative et les systèmes de développement interactifs où les objets peuvent être inspectés, modifiés et étendus pendant que le programme s'exécute.",
    },
    de: {
      name: 'Self',
      description:
        'Ein Prototyp-basiertes Objektprogrammierungssprache, die JavaScript, VM-Design und Live-IDEs beeinflusste.',
      longDescription:
        'Self ist eine dynamische objektorientierte Sprache, die auf Prototypen und Nachrichtenübermittlung basiert, anstatt Klassen. Sie wurde als Forschungssprache entwickelt, um objektbasierte Systeme, interaktive Programmierumgebungen und hochleistungsfähige dynamische Dispatch-Mechanismen zu erkunden.\n\nSelf beeinflusste JavaScript, Smalltalk VM-Arbeit, adaptive Optimierung und interaktive Entwicklungssysteme, in denen Objekte während der Laufzeit inspiziert, geändert und erweitert werden können.',
    },
    pt: {
      name: 'Self',
      description:
        'Linguagem baseada em protótipos que influenciou o JavaScript, design de VMs e IDEs interativas.',
      longDescription:
        'Self é uma linguagem orientada a objetos dinâmica baseada em protótipos e passagem de mensagens, não classes. Foi criada como uma linguagem de pesquisa para explorar sistemas de objetos, ambientes de programação interativos e despacho dinâmico de alto desempenho.\n\nSelf influenciou o JavaScript, o trabalho com VMs Smalltalk, otimização adaptativa e sistemas de desenvolvimento interativo onde os objetos podem ser inspecionados, modificados e estendidos enquanto o programa está em execução.',
    },
  },
} satisfies Language;
