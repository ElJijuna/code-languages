import type { Language } from '@/types';

export const plantuml = {
  slug: 'plantuml',
  publishedDate: '2009-04-17',
  extensions: ['.puml', '.plantuml', '.iuml'],
  author: 'Arnaud Roques / PlantUML contributors',
  website: 'https://plantuml.com',
  paradigms: ['declarative', 'diagramming', 'modeling'],
  tooling: {
    runtimes: ['Java', 'PlantUML Server'],
    packageManagers: ['Maven', 'Gradle', 'npm'],
    ecosystems: ['UML', 'Architecture', 'Documentation', 'Diagrams'],
  },
  version: '1.2026.6',
  logo: 'https://plantuml.com/logo3.png',
  color: '#FBB03B',
  i18n: {
    en: {
      name: 'PlantUML',
      description:
        'A text-based diagram language for UML, architecture, and documentation diagrams.',
      longDescription:
        'PlantUML is a diagram language and renderer for sequence, class, activity, component, state, object, deployment, timing, mind map, and architecture diagrams. It lets teams keep diagrams in source control and generate images from compact text.\n\nIt is used in software architecture documentation, design reviews, technical specs, wikis, CI-generated diagrams, and projects that prefer versionable diagrams over manually edited drawing files.',
    },
    es: {
      name: 'PlantUML',
      description: 'Un lenguaje textual de diagramas para UML, arquitectura y documentacion.',
      longDescription:
        'PlantUML es un lenguaje y renderer de diagramas para secuencia, clases, actividad, componentes, estados, objetos, despliegue, timing, mapas mentales y arquitectura. Permite mantener diagramas en control de versiones y generar imagenes desde texto compacto.\n\nSe usa en documentacion de arquitectura de software, revisiones de diseno, especificaciones tecnicas, wikis, diagramas generados en CI y proyectos que prefieren diagramas versionables a archivos de dibujo editados manualmente.',
    },
    it: {
      name: 'PlantUML',
      description:
        'Un linguaggio di diagrammi basato su testo per UML, diagrammi di architettura e documentazione.',
      longDescription:
        "PlantUML e un linguaggio e un motore di diagrammi per diagrammi di sequenza, classe, attivita, componente, stato, oggetto, deployment, temporizzazione, mappe mentali e architettura. Permette ai team di mantenere i diagrammi nel controllo delle versioni e di generare immagini da testo compatto.\n\nViene utilizzato nella documentazione dell'architettura del software, revisioni di progettazione, specifiche tecniche, wiki, diagrammi generati da CI e progetti che preferiscono diagrammi versionabili rispetto a file di disegno modificati manualmente.",
    },
    fr: {
      name: 'PlantUML',
      description:
        "Un langage de diagramme base sur du texte pour UML, les diagrammes d'architecture et de documentation.",
      longDescription:
        "PlantUML est un langage et un moteur de diagrammes pour les diagrammes de sequence, de classes, d'activite, de composants, d'etat, d'objets, de deploiement, de timing, de cartes mentales et d'architecture. Il permet aux equipes de conserver les diagrammes dans un systeme de controle de version et de generer des images a partir de texte concis. \n\nIl est utilise dans la documentation de l'architecture logicielle, les revues de conception, les specifications techniques, les wikis, les diagrammes generes par CI et les projets qui preferent des diagrammes versionnables aux fichiers de dessin edites manuellement.",
    },
    de: {
      name: 'PlantUML',
      description:
        'Eine textbasierte Diagrammsprache für UML, Architektur- und Dokumentationsdiagramme.',
      longDescription:
        'PlantUML ist eine Diagrammsprache und -renderer für Sequenz-, Klass-, Aktivitäts-, Komponenten-, Zustands-, Objekt-, Deployment-, Timing-, Mindmap- und Architekturdagramme. Es ermöglicht Teams, Diagramme im Quellcode zu verwalten und Bilder aus kompaktem Text zu generieren.\n\nEs wird in der Softwarearchitekturdokumentation, Design-Reviews, technischen Spezifikationen, Wikis, CI-generierten Diagrammen und Projekten verwendet, die versionierbare Diagramme gegenüber manuell bearbeiteten Zeichnungsvorlagen bevorzugen.',
    },
    pt: {
      name: 'PlantUML',
      description:
        'Linguagem de diagramas baseada em texto para UML, diagramas de arquitetura e documentação.',
      longDescription:
        'PlantUML é uma linguagem e renderizador de diagramas para diagramas de sequência, classe, atividade, componente, estado, objeto, implantação, temporização, mapa mental e arquitetura. Permite que as equipes mantenham os diagramas no controle de versão e gerem imagens a partir de texto conciso.\n\nÉ usado em documentação de arquitetura de software, revisões de design, especificações técnicas, wikis, diagramas gerados por CI e projetos que preferem diagramas versionáveis em vez de arquivos de desenho editados manualmente.',
    },
  },
} satisfies Language;
