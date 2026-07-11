import type { Language } from '@/types';

export const mdx = {
  slug: 'mdx',
  publishedDate: '2018-03-23',
  extensions: ['.mdx'],
  author: 'MDX contributors',
  website: 'https://mdxjs.com',
  paradigms: ['markup', 'component-oriented', 'declarative', 'documentation'],
  tooling: {
    runtimes: ['React', 'Node.js'],
    packageManagers: ['npm', 'Yarn', 'pnpm'],
    ecosystems: ['Documentation', 'React', 'Static Sites', 'Content'],
  },
  version: '3.1.1',
  logo: 'https://cdn.simpleicons.org/mdx/1B1F24',
  color: '#1B1F24',
  i18n: {
    en: {
      name: 'MDX',
      description: 'A Markdown-based format that embeds JSX components in content documents.',
      longDescription:
        'MDX combines Markdown prose with JSX expressions and components, allowing documents to include interactive examples, imports, exports, and component-driven layouts. It is commonly compiled into JavaScript for React-based rendering pipelines.\n\nIt is used in documentation sites, design systems, blogs, tutorials, component demos, content platforms, and static site generators that need prose and UI components in the same source file.',
    },
    es: {
      name: 'MDX',
      description:
        'Un formato basado en Markdown que inserta componentes JSX en documentos de contenido.',
      longDescription:
        'MDX combina prosa Markdown con expresiones y componentes JSX, permitiendo que los documentos incluyan ejemplos interactivos, imports, exports y layouts basados en componentes. Normalmente se compila a JavaScript para pipelines de renderizado con React.\n\nSe usa en sitios de documentacion, sistemas de diseno, blogs, tutoriales, demos de componentes, plataformas de contenido y generadores de sitios estaticos que necesitan prosa y UI en el mismo archivo fuente.',
    },
    it: {
      name: 'MDX',
      description:
        'Un formato basato su Markdown che incorpora componenti JSX nei documenti di contenuto.',
      longDescription:
        'MDX combina la prosa Markdown con le espressioni e i componenti JSX, consentendo ai documenti di includere esempi interattivi, importazioni, esportazioni e layout guidati dai componenti. Viene comunemente compilato in JavaScript per pipeline di rendering basate su React.\n\nViene utilizzato in siti di documentazione, sistemi di design, blog, tutorial, demo di componenti, piattaforme di contenuti e generatori di siti statici che necessitano di prosa e componenti UI nello stesso file sorgente.',
    },
    fr: {
      name: 'MDX',
      description:
        'Un format base sur Markdown qui integre des composants JSX dans les documents de contenu.',
      longDescription:
        "MDX combine la prose Markdown avec des expressions et des composants JSX, permettant aux documents d'inclure des exemples interactifs, des importations, des exportations et des mises en page basees sur des composants. Il est couramment compile en JavaScript pour les pipelines de rendu bases sur React.\n\nIl est utilise dans les sites de documentation, les systemes de conception, les blogs, les tutoriels, les demos de composants, les plateformes de contenu et les generateurs de sites statiques qui ont besoin de prose et de composants d'interface utilisateur dans le meme fichier source.",
    },
    de: {
      name: 'MDX',
      description:
        'Ein Markdown-basierter Format, das JSX-Komponenten in Inhaltsdokumenten einbettet.',
      longDescription:
        'MDX kombiniert Markdown-Text mit JSX-Ausdrücken und -Komponenten, sodass Dokumente interaktive Beispiele, Importe, Exporte und komponentengesteuerte Layouts enthalten können. Es wird üblicherweise in JavaScript kompiliert für React-basierte Rendering-Pipelines.\n\nEs wird in Dokumentationsseiten, Designsystemen, Blogs, Tutorials, Komponenten-Demos, Content-Plattformen und statischen Site-Generatoren verwendet, die sowohl Text als auch UI-Komponenten in derselben Quelldatei benötigen.',
    },
    pt: {
      name: 'MDX',
      description:
        'Formato baseado em Markdown que incorpora componentes JSX em documentos de conteúdo.',
      longDescription:
        'O MDX combina a escrita em Markdown com expressões e componentes JSX, permitindo que os documentos incluam exemplos interativos, importações, exportações e layouts orientados a componentes. É comumente compilado para JavaScript para pipelines de renderização baseadas em React.\n\nÉ usado em sites de documentação, sistemas de design, blogs, tutoriais, demonstrações de componentes, plataformas de conteúdo e geradores de sites estáticos que precisam de texto e componentes de interface no mesmo arquivo.',
    },
  },
} satisfies Language;
