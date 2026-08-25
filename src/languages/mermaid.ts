import type { Language } from '@/types';

export const mermaid = {
  slug: 'mermaid',
  publishedDate: '2014-11-04',
  extensions: ['.mmd', '.mermaid'],
  author: 'Knut Sveidqvist / Mermaid contributors',
  website: 'https://mermaid.js.org',
  paradigms: ['declarative', 'diagramming', 'markup'],
  tooling: {
    runtimes: ['Browser', 'Node.js'],
    packageManagers: ['npm', 'Yarn', 'pnpm'],
    ecosystems: ['Documentation', 'Markdown', 'Diagrams', 'Knowledge Management'],
  },
  version: '11.17.1',
  logo: 'https://cdn.simpleicons.org/mermaid/FF3670',
  color: '#FF3670',
  i18n: {
    en: {
      name: 'Mermaid',
      description: 'A text-based diagram language for flowcharts, sequences, timelines, and more.',
      longDescription:
        'Mermaid is a diagramming language that renders structured text into diagrams such as flowcharts, sequence diagrams, class diagrams, state diagrams, entity relationship diagrams, gantt charts, timelines, and mind maps. It is designed to live comfortably beside Markdown documentation.\n\nIt is used in READMEs, architecture notes, wikis, documentation sites, issue trackers, knowledge bases, and workflows where diagrams should be versioned as plain text.',
    },
    es: {
      name: 'Mermaid',
      description:
        'Un lenguaje textual de diagramas para flujos, secuencias, lineas de tiempo y mas.',
      longDescription:
        'Mermaid es un lenguaje de diagramacion que renderiza texto estructurado como diagramas de flujo, secuencia, clases, estados, entidad-relacion, gantt, lineas de tiempo y mapas mentales. Esta pensado para convivir comodamente con documentacion Markdown.\n\nSe usa en READMEs, notas de arquitectura, wikis, sitios de documentacion, issue trackers, bases de conocimiento y flujos donde los diagramas deben versionarse como texto plano.',
    },
    it: {
      name: 'Mermaid',
      description:
        'Un linguaggio di diagrammi basato su testo per flowchart, sequenze, timeline e altro.',
      longDescription:
        'Mermaid e un linguaggio di diagrammi che converte testo strutturato in diagrammi come flowchart, diagrammi di sequenza, diagrammi di classe, diagrammi di stato, diagrammi di relazioni entita, grafici Gantt, timeline e mappe mentali. E progettato per coesistere comodamente con la documentazione in formato Markdown.\n\nViene utilizzato in README, note di architettura, wiki, siti di documentazione, tracker di issue, basi di conoscenza e workflow in cui i diagrammi devono essere versionati come testo semplice.',
    },
    fr: {
      name: 'Mermaid',
      description:
        'Un langage de diagramme base sur du texte pour les schemas, les sequences, les chronologies, et plus encore.',
      longDescription:
        "Mermaid est un langage de diagrammes qui convertit du texte structure en diagrammes tels que les schemas, les diagrammes de sequence, les diagrammes de classes, les diagrammes d'etat, les diagrammes de relations entite-relation, les diagrammes de Gantt, les chronologies et les cartes mentales. Il est concu pour coexister confortablement avec la documentation Markdown.\n\nIl est utilise dans les README, les notes d'architecture, les wikis, les sites de documentation, les outils de suivi des problemes, les bases de connaissances et les flux de travail ou les diagrammes doivent etre versionnes sous forme de texte brut.",
    },
    de: {
      name: 'Mermaid',
      description:
        'Eine textbasierte Diagrammiersprache für Flussdiagramme, Sequenzen, Zeitlinien und mehr.',
      longDescription:
        'Mermaid ist eine Diagrammiersprache, die strukturierte Texte in Diagramme wie Flussdiagramme, Sequenzdiagramme, Klassendiagramme, Zustandsdiagramme, Entitäts-Beziehungsdiagramme, Gantt-Diagramme, Zeitlinien und Mindmaps umwandelt. Sie ist darauf ausgelegt, problemlos mit Markdown-Dokumentation zusammenzuarbeiten.\n\nSie wird in READMEs, Architekturnotizen, Wikis, Dokumentationsseiten, Issue-Trackern, Wissensdatenbanken und Arbeitsabläufen verwendet, in denen Diagramme als reiner Text versioniert werden sollen.',
    },
    pt: {
      name: 'Mermaid',
      description:
        'Linguagem de diagramas baseada em texto para fluxogramas, sequências, cronogramas e mais.',
      longDescription:
        'Mermaid é uma linguagem de diagramação que converte texto estruturado em diagramas como fluxogramas, diagramas de sequência, diagramas de classes, diagramas de estado, diagramas de relações entidade, gráficos de Gantt, cronogramas e mapas mentais. É projetada para coexistir confortavelmente com a documentação em Markdown.\n\nÉ usada em READMEs, notas de arquitetura, wikis, sites de documentação, rastreadores de problemas, bases de conhecimento e fluxos de trabalho onde os diagramas devem ser versionados como texto simples.',
    },
  },
} satisfies Language;
