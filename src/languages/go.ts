import type { Language } from '../types';

export const go = {
  slug: 'go',
  publishedDate: '2012-03-28',
  extensions: ['.go'],
  author: 'Robert Griesemer, Rob Pike, Ken Thompson / Google',
  website: 'https://go.dev',
  paradigms: ['concurrent', 'imperative', 'procedural'],
  tooling: {
    runtimes: ['Go runtime'],
    packageManagers: ['Go modules'],
    ecosystems: ['Cloud', 'DevOps', 'Networking'],
  },
  version: '1.26.5',
  logo: 'https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg',
  color: '#00ADD8',
  i18n: {
    en: {
      name: 'Go',
      description: 'A compiled language designed for simplicity, fast builds, and concurrency.',
      longDescription:
        'Go combines a small language specification, garbage collection, static typing, and built-in concurrency primitives through goroutines and channels.\n\nIt is commonly used for cloud services, networking tools, distributed systems, command-line applications, and infrastructure software.',
    },
    es: {
      name: 'Go',
      description:
        'Un lenguaje compilado disenado para simplicidad, builds rapidos y concurrencia.',
      longDescription:
        'Go combina una especificacion pequena del lenguaje, recoleccion de basura, tipado estatico y primitivas de concurrencia integradas mediante goroutines y channels.\n\nSe usa comunmente en servicios cloud, herramientas de red, sistemas distribuidos, aplicaciones de linea de comandos y software de infraestructura.',
    },
    it: {
      name: 'Go',
      description:
        'Un linguaggio compilato progettato per la semplicita, i tempi di compilazione rapidi e la concorrenza.',
      longDescription:
        'Go combina una specifica del linguaggio piccola, la garbage collection, il tipaggio statico e le primitive di concorrenza integrate tramite goroutine e canali.\n\nE comunemente utilizzato per servizi cloud, strumenti di rete, sistemi distribuiti, applicazioni da riga di comando e software di infrastruttura.',
    },
    fr: {
      name: 'Go',
      description:
        'Un langage compile concu pour la simplicite, les constructions rapides et la concurrence.',
      longDescription:
        "Go combine une petite specification de langage, la gestion de la memoire, le typage statique et des primitives de concurrence integrees via les goroutines et les canaux.\n\nIl est couramment utilise pour les services cloud, les outils de reseau, les systemes distribues, les applications en ligne de commande et les logiciels d'infrastructure.",
    },
    de: {
      name: 'Go',
      description:
        'Eine kompilierte Sprache, die für Einfachheit, schnelle Builds und Nebenläufigkeit entwickelt wurde.',
      longDescription:
        'Go kombiniert eine kleine Sprachspezifikation, Garbage Collection, statische Typisierung und integrierte Nebenläufigkeitsprimitiven durch Goroutinen und Kanäle.\n\nEs wird häufig für Cloud-Dienste, Netzwerktools, verteilte Systeme, Kommandozeilenanwendungen und Infrastruktursoftware verwendet.',
    },
    pt: {
      name: 'Go',
      description:
        'Linguagem compilada projetada para simplicidade, tempos de compilação rápidos e concorrência.',
      longDescription:
        'Go combina uma especificação de linguagem pequena, coleta de lixo, tipagem estática e primitivas de concorrência embutidas através de goroutines e canais.\n\nÉ comumente usada para serviços em nuvem, ferramentas de rede, sistemas distribuídos, aplicativos de linha de comando e software de infraestrutura.',
    },
  },
} satisfies Language;
