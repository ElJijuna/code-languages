import type { Language } from '@/types';

export const unison = {
  slug: 'unison',
  publishedDate: '2019-10-04',
  extensions: ['.u', '.uu'],
  author: 'Paul Chiusano, Rúnar Bjarnason',
  website: 'https://www.unison-lang.org',
  paradigms: ['functional', 'distributed'],
  tooling: {
    runtimes: ['Unison runtime (UCM)'],
    packageManagers: ['Unison Share'],
    ecosystems: ['Distributed Systems', 'Cloud', 'Functional'],
  },
  version: '1.3.0',
  logo: 'https://avatars.githubusercontent.com/u/18563978?v=4',
  color: '#F37B1F',
  i18n: {
    en: {
      name: 'Unison',
      description:
        'A functional programming language where code is content-addressed by hash, eliminating dependency conflicts and enabling seamless distributed computing.',
      longDescription:
        "Unison is a programming language with a radically different approach to code storage and distribution. Instead of storing code as text files, Unison stores definitions by their content hash — a definition's identity is its content, not its name or location. This eliminates package versioning conflicts and enables a novel form of distributed programming.\n\nUnison's distributed abilities are built into the type system: functions can be serialized and sent to remote nodes where they execute with their full closure. The language is purely functional with algebraic effects, a strong type system with type inference, and first-class abilities (algebraic effects). Code is managed through the Unison Codebase Manager (UCM), and libraries are shared via Unison Share.",
    },
    es: {
      name: 'Unison',
      description:
        'Lenguaje funcional donde el código se almacena por hash de contenido, eliminando conflictos de dependencias y habilitando computación distribuida.',
      longDescription:
        'Unison es un lenguaje de programación con un enfoque radicalmente diferente al almacenamiento y distribución de código. En lugar de archivos de texto, Unison almacena definiciones por su hash de contenido. Esto elimina los conflictos de versiones de paquetes y habilita una nueva forma de programación distribuida.\n\nLas capacidades distribuidas de Unison están integradas en el sistema de tipos: las funciones pueden serializarse y enviarse a nodos remotos donde se ejecutan con todo su closure. El lenguaje es puramente funcional con efectos algebraicos y un sistema de tipos fuerte con inferencia de tipos.',
    },
    it: {
      name: 'Unison',
      description:
        'Linguaggio funzionale dove il codice è indirizzato per contenuto tramite hash, eliminando i conflitti di dipendenze e abilitando il calcolo distribuito.',
      longDescription:
        "Unison è un linguaggio di programmazione con un approccio radicalmente diverso all'archiviazione e distribuzione del codice. Invece di file di testo, Unison archivia le definizioni tramite il loro hash di contenuto. Questo elimina i conflitti di versioni dei pacchetti e abilita una nuova forma di programmazione distribuita.\n\nLe capacità distribuite di Unison sono integrate nel sistema di tipi: le funzioni possono essere serializzate e inviate a nodi remoti dove vengono eseguite con la loro closure completa. Il linguaggio è puramente funzionale con effetti algebrici e un sistema di tipi forte.",
    },
    fr: {
      name: 'Unison',
      description:
        'Un langage de programmation fonctionnel où le code est adressé par contenu via un hash, éliminant les conflits de dépendances et permettant le calcul distribué.',
      longDescription:
        "Unison est un langage de programmation avec une approche radicalement différente du stockage et de la distribution du code. Au lieu de fichiers texte, Unison stocke les définitions par leur hash de contenu. Cela élimine les conflits de versions de paquets et permet une nouvelle forme de programmation distribuée.\n\nLes capacités distribuées d'Unison sont intégrées dans le système de types: les fonctions peuvent être sérialisées et envoyées à des nœuds distants où elles s'exécutent avec leur closure complète. Le langage est purement fonctionnel avec des effets algébriques.",
    },
    de: {
      name: 'Unison',
      description:
        'Funktionale Programmiersprache, bei der Code per Hash inhaltsadressiert ist, Abhängigkeitskonflikte eliminiert und verteilte Berechnung ermöglicht.',
      longDescription:
        'Unison ist eine Programmiersprache mit einem radikal anderen Ansatz zur Code-Speicherung und -Verteilung. Statt Textdateien speichert Unison Definitionen durch ihren Inhalts-Hash. Dies eliminiert Paketversionskonflikte und ermöglicht eine neue Form des verteilten Programmierens.\n\nUnisons verteilte Fähigkeiten sind in das Typsystem integriert: Funktionen können serialisiert und an entfernte Knoten gesendet werden, wo sie mit ihrer vollständigen Closure ausgeführt werden. Die Sprache ist rein funktional mit algebraischen Effekten.',
    },
    pt: {
      name: 'Unison',
      description:
        'Linguagem funcional onde o código é endereçado por hash de conteúdo, eliminando conflitos de dependências e permitindo computação distribuída.',
      longDescription:
        'Unison é uma linguagem de programação com uma abordagem radicalmente diferente para armazenamento e distribuição de código. Em vez de arquivos de texto, o Unison armazena definições pelo seu hash de conteúdo. Isso elimina conflitos de versão de pacotes e permite uma nova forma de programação distribuída.\n\nAs capacidades distribuídas do Unison estão integradas no sistema de tipos: funções podem ser serializadas e enviadas para nós remotos onde são executadas com todo o seu closure. A linguagem é puramente funcional com efeitos algébricos e um sistema de tipos forte.',
    },
  },
} satisfies Language;
