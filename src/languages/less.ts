import type { Language } from '../types';

export const less = {
  slug: 'less',
  publishedDate: '2009-01-01',
  extensions: ['.less'],
  author: 'Alexis Sellier / Less Core Team',
  website: 'https://lesscss.org',
  paradigms: ['declarative', 'stylesheet', 'preprocessor'],
  tooling: {
    runtimes: ['Less.js', 'Node.js', 'Browser'],
    packageManagers: ['npm', 'pnpm', 'Yarn', 'Bun'],
    ecosystems: ['Web', 'Design Systems', 'Bootstrap'],
  },
  version: '4.6.4',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/LESS_Logo.svg',
  color: '#1D365D',
  i18n: {
    en: {
      name: 'Less',
      description: 'A CSS preprocessor with variables, nesting, mixins, operations, and functions.',
      longDescription:
        'Less is a dynamic stylesheet language that extends CSS with variables, nested rules, mixins, operations, functions, and reusable abstractions while keeping syntax close to standard CSS.\n\nIt is commonly used in web applications, design systems, themes, legacy front-end stacks, and projects that compile richer styling source files into browser-compatible CSS.',
    },
    es: {
      name: 'Less',
      description:
        'Un preprocesador CSS con variables, anidamiento, mixins, operaciones y funciones.',
      longDescription:
        'Less es un lenguaje dinamico de hojas de estilo que extiende CSS con variables, reglas anidadas, mixins, operaciones, funciones y abstracciones reutilizables mientras mantiene una sintaxis cercana a CSS estandar.\n\nSe usa comunmente en aplicaciones web, sistemas de diseno, temas, stacks front-end heredados y proyectos que compilan archivos de estilos mas expresivos a CSS compatible con navegadores.',
    },
    it: {
      name: 'Less',
      description:
        'Un preprocessore CSS con variabili, nidificazione, mixin, operazioni e funzioni.',
      longDescription:
        'Less e un linguaggio di stile dinamico che estende CSS con variabili, regole nidificate, mixin, operazioni, funzioni e astrazioni riutilizzabili, mantenendo la sintassi simile a quella standard di CSS.\n\nE comunemente utilizzato in applicazioni web, sistemi di design, temi, stack front-end legacy e progetti che compilano file di stile piu ricchi in CSS compatibile con il browser.',
    },
    fr: {
      name: 'Less',
      description:
        "Un preprocesseur CSS avec des variables, de l'imbrication, des mixins, des operations et des fonctions.",
      longDescription:
        'Less est un langage de feuilles de style dynamique qui etend CSS avec des variables, des regles imbriquees, des mixins, des operations, des fonctions et des abstractions reutilisables, tout en maintenant une syntaxe proche de la CSS standard.\n\nIl est couramment utilise dans les applications web, les systemes de conception, les themes, les stacks front-end heritees et les projets qui compilent des fichiers de style plus riches en CSS compatibles avec le navigateur.',
    },
    de: {
      name: 'Less',
      description:
        'Ein CSS-Präprozessor mit Variablen, Verschachtelung, Mixins, Operationen und Funktionen.',
      longDescription:
        'Less ist eine dynamische Stylesheet-Sprache, die CSS mit Variablen, verschachtelten Regeln, Mixins, Operationen, Funktionen und wiederverwendbaren Abstraktionen erweitert und dabei die Syntax nahe an der Standard-CSS-Syntax hält.\n\nEs wird häufig in Webanwendungen, Designsystemen, Themes, Legacy-Frontend-Stacks und Projekten verwendet, die umfangreichere Styling-Quelldateien in browserkompatiblen CSS-Code kompilieren.',
    },
    pt: {
      name: 'Less',
      description:
        'Um pré-processador CSS com variáveis, aninhamento, mixins, operações e funções.',
      longDescription:
        'O Less é uma linguagem de estilo dinâmica que estende o CSS com variáveis, regras aninhadas, mixins, operações, funções e abstrações reutilizáveis, mantendo a sintaxe próxima do CSS padrão.\n\nÉ comumente usado em aplicações web, sistemas de design, temas, stacks front-end legadas e projetos que compilam arquivos de estilo mais ricos em CSS compatível com o navegador.',
    },
  },
} satisfies Language;
