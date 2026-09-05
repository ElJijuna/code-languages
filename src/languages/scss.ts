import type { Language } from '@/types';

export const scss = {
  slug: 'scss',
  publishedDate: '2006-11-28',
  extensions: ['.scss', '.sass'],
  author: 'Hampton Catlin / Natalie Weizenbaum / Chris Eppstein',
  website: 'https://sass-lang.com',
  paradigms: ['declarative', 'stylesheet', 'preprocessor'],
  relations: {
    supersetOf: ['css'],
    compilesTo: ['css'],
  },
  tooling: {
    runtimes: ['Dart Sass'],
    packageManagers: ['npm', 'pnpm', 'Yarn', 'Bun'],
    ecosystems: ['Web', 'Design Systems'],
  },
  version: '1.104.0',
  logo: 'https://sass-lang.com/assets/img/logos/logo.svg',
  color: '#CC6699',
  i18n: {
    en: {
      name: 'Sass',
      description:
        'A stylesheet language and CSS preprocessor with variables, nesting, mixins, modules, and functions.',
      longDescription:
        'Sass extends CSS with features such as variables, nested rules, mixins, functions, modules, inheritance, and compile-time tooling that generates standard CSS.\n\nIt is widely used in design systems, component libraries, large web applications, themes, and projects that need reusable styling patterns on top of the CSS platform.',
    },
    es: {
      name: 'Sass',
      description:
        'Un lenguaje de hojas de estilo y preprocesador CSS con variables, anidamiento, mixins, modulos y funciones.',
      longDescription:
        'Sass extiende CSS con caracteristicas como variables, reglas anidadas, mixins, funciones, modulos, herencia y herramientas de compilacion que generan CSS estandar.\n\nSe usa ampliamente en sistemas de diseno, bibliotecas de componentes, grandes aplicaciones web, temas y proyectos que necesitan patrones de estilos reutilizables sobre la plataforma CSS.',
    },
    it: {
      name: 'Sass',
      description:
        'Un linguaggio di stile e preprocessore CSS con variabili, nidificazione, mixin, moduli e funzioni.',
      longDescription:
        'Sass estende CSS con funzionalita come variabili, regole nidificate, mixin, funzioni, moduli, ereditarieta e strumenti di compilazione che generano CSS standard.\n\nE ampiamente utilizzato in sistemi di design, librerie di componenti, grandi applicazioni web, temi e progetti che necessitano di modelli di stile riutilizzabili sulla piattaforma CSS.',
    },
    fr: {
      name: 'Sass',
      description:
        'Un langage de feuilles de style et preprocesseur CSS avec des variables, du nesting, des mixins, des modules et des fonctions.',
      longDescription:
        "Sass etend CSS avec des fonctionnalites telles que les variables, les regles imbriquees, les mixins, les fonctions, les modules, l'heritage et les outils de compilation qui generent du CSS standard.\n\nIl est largement utilise dans les systemes de conception, les bibliotheques de composants, les grandes applications web, les themes et les projets qui ont besoin de modeles de style reutilisables au-dessus de la plateforme CSS.",
    },
    de: {
      name: 'Sass',
      description:
        'Eine Stylesheet-Sprache und CSS-Präprozessor mit Variablen, Verschachtelung, Mixins, Modulen und Funktionen.',
      longDescription:
        'Sass erweitert CSS um Funktionen wie Variablen, verschachtelte Regeln, Mixins, Funktionen, Module, Vererbung und Tools zur Compile-Zeit, die standardmäßigen CSS erzeugen.\n\nEs wird häufig in Designsystemen, Komponentenbibliotheken, großen Webanwendungen, Themes und Projekten verwendet, die wiederverwendbare Styling-Muster auf der CSS-Plattform benötigen.',
    },
    pt: {
      name: 'Sass',
      description:
        'Linguagem de folhas de estilo e pré-processador CSS com variáveis, aninhamento, mixins, módulos e funções.',
      longDescription:
        'Sass estende o CSS com recursos como variáveis, regras aninhadas, mixins, funções, módulos, herança e ferramentas de compilação que geram CSS padrão.\n\nÉ amplamente utilizado em sistemas de design, bibliotecas de componentes, grandes aplicações web, temas e projetos que precisam de padrões de estilo reutilizáveis sobre a plataforma CSS.',
    },
  },
} satisfies Language;
