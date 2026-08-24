import type { Language } from '@/types';

export const processing = {
  slug: 'processing',
  publishedDate: '2001-08-01',
  extensions: ['.pde'],
  author: 'Casey Reas, Ben Fry',
  website: 'https://processing.org',
  paradigms: ['imperative', 'object-oriented', 'visual'],
  tooling: {
    runtimes: ['JVM', 'Java'],
    ecosystems: ['Creative coding', 'Java'],
  },
  version: '4.5.6',
  logo: 'https://cdn.simpleicons.org/processingfoundation/006699',
  color: '#006699',
  i18n: {
    en: {
      name: 'Processing',
      description:
        'A flexible software sketchbook and language for learning to code in the context of the visual arts.',
      longDescription:
        'Processing is an open-source graphical language and environment built for the electronic arts and visual design communities.\n\nIt combines a simplified Java-like syntax with a rich set of 2D and 3D drawing APIs, making it a popular choice for creative coding, generative art, data visualization, and interactive installations.',
    },
    es: {
      name: 'Processing',
      description:
        'Un cuaderno de código flexible y lenguaje para aprender a programar en el contexto de las artes visuales.',
      longDescription:
        'Processing es un lenguaje y entorno gráfico de código abierto construido para las comunidades de artes electrónicas y diseño visual.\n\nCombina una sintaxis simplificada similar a Java con un rico conjunto de APIs de dibujo 2D y 3D, convirtiéndose en una opción popular para la codificación creativa, el arte generativo, la visualización de datos y las instalaciones interactivas.',
    },
    it: {
      name: 'Processing',
      description:
        'Un taccuino di codice flessibile e un linguaggio per imparare a programmare nel contesto delle arti visive.',
      longDescription:
        "Processing e un linguaggio e ambiente grafico open source costruito per le comunita delle arti elettroniche e del design visivo.\n\nCombina una sintassi semplificata simile a Java con un ricco insieme di API di disegno 2D e 3D, rendendolo una scelta popolare per il creative coding, l'arte generativa, la visualizzazione dei dati e le installazioni interattive.",
    },
    fr: {
      name: 'Processing',
      description:
        'Un carnet de code flexible et un langage pour apprendre à programmer dans le contexte des arts visuels.',
      longDescription:
        "Processing est un langage et un environnement graphique open source conçu pour les communautés des arts électroniques et du design visuel.\n\nIl combine une syntaxe simplifiée de type Java avec un riche ensemble d'API de dessin 2D et 3D, ce qui en fait un choix populaire pour le codage créatif, l'art génératif, la visualisation de données et les installations interactives.",
    },
    de: {
      name: 'Processing',
      description:
        'Ein flexibles Software-Skizzenbuch und eine Sprache zum Programmierenlernen im Kontext der visuellen Künste.',
      longDescription:
        'Processing ist eine Open-Source-Grafiksprache und -umgebung, die für die Gemeinschaft der elektronischen Künste und des visuellen Designs entwickelt wurde.\n\nEs kombiniert eine vereinfachte Java-ähnliche Syntax mit einem umfangreichen Satz von 2D- und 3D-Zeichen-APIs und ist eine beliebte Wahl für kreatives Coding, generative Kunst, Datenvisualisierung und interaktive Installationen.',
    },
    pt: {
      name: 'Processing',
      description:
        'Um caderno de software flexível e linguagem para aprender a programar no contexto das artes visuais.',
      longDescription:
        'Processing é uma linguagem e ambiente gráfico de código aberto criado para as comunidades de artes eletrônicas e design visual.\n\nCombina uma sintaxe simplificada semelhante ao Java com um rico conjunto de APIs de desenho 2D e 3D, tornando-se uma escolha popular para codificação criativa, arte generativa, visualização de dados e instalações interativas.',
    },
  },
} satisfies Language;
