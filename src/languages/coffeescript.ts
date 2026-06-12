import type { Language } from '../types';

export const coffeescript = {
  slug: 'coffeescript',
  publishedDate: '2009-12-25',
  extensions: ['.coffee', '.litcoffee', '.cson'],
  author: 'Jeremy Ashkenas',
  website: 'https://coffeescript.org',
  paradigms: ['functional', 'imperative', 'object-oriented', 'scripting'],
  tooling: {
    runtimes: ['Browser', 'Node.js'],
    packageManagers: ['npm', 'pnpm', 'Yarn'],
    ecosystems: ['JavaScript', 'Web', 'Node.js'],
  },
  version: '2.7.0',
  logo: 'https://cdn.simpleicons.org/coffeescript/2F2625',
  color: '#2F2625',
  i18n: {
    en: {
      name: 'CoffeeScript',
      description:
        'A small language that compiles to JavaScript with concise syntax inspired by Ruby and Python.',
      longDescription:
        'CoffeeScript adds a concise syntax over JavaScript with significant whitespace, function shortcuts, comprehensions, destructuring, classes, string interpolation, and other expressive conveniences.\n\nIt was widely used in earlier JavaScript application stacks and remains relevant in legacy projects, build pipelines, and codebases that prefer its compact syntax while targeting standard JavaScript.',
    },
    es: {
      name: 'CoffeeScript',
      description:
        'Un lenguaje pequeno que compila a JavaScript con sintaxis concisa inspirada en Ruby y Python.',
      longDescription:
        'CoffeeScript agrega una sintaxis concisa sobre JavaScript con indentacion significativa, atajos para funciones, comprehensions, destructuring, clases, interpolacion de cadenas y otras comodidades expresivas.\n\nFue muy usado en stacks anteriores de aplicaciones JavaScript y sigue siendo relevante en proyectos legacy, pipelines de build y codebases que prefieren su sintaxis compacta mientras generan JavaScript estandar.',
    },
    it: {
      name: 'CoffeeScript',
      description:
        'Un linguaggio piccolo che compila in JavaScript con una sintassi concisa ispirata a Ruby e Python.',
      longDescription:
        'CoffeeScript aggiunge una sintassi concisa a JavaScript con un uso significativo dello spazio, scorciatoie per le funzioni, comprensioni, destrutturazione, classi, interpolazione di stringhe e altre comodita espressive.\n\nE stato ampiamente utilizzato in stack di applicazioni JavaScript precedenti e rimane rilevante in progetti legacy, pipeline di build e codebase che preferiscono la sua sintassi compatta, pur mirando a JavaScript standard.',
    },
    fr: {
      name: 'CoffeeScript',
      description:
        'Un petit langage qui compile vers JavaScript avec une syntaxe concise inspiree de Ruby et Python.',
      longDescription:
        "CoffeeScript ajoute une syntaxe concise au-dessus de JavaScript avec un espacement important, des raccourcis de fonction, des comprehensions, la destructuration, les classes, l'interpolation de chaines et d'autres commodites expressives.\n\nIl etait largement utilise dans les anciens stacks d'applications JavaScript et reste pertinent dans les projets herites, les pipelines de construction et les bases de code qui preferent sa syntaxe concise tout en ciblant le JavaScript standard.",
    },
    de: {
      name: 'CoffeeScript',
      description:
        'Eine kleine Sprache, die zu JavaScript kompiliert, mit prägnanter Syntax, inspiriert von Ruby und Python.',
      longDescription:
        'CoffeeScript fügt JavaScript eine prägnante Syntax mit signifikanter Whitespace, Funktionsabkürzungen, Comprehensions, Destrukturierung, Klassen, String-Interpolation und anderen ausdrucksstarken Funktionen hinzu.\n\nEs wurde in früheren JavaScript-Anwendungsumgebungen weit verbreitet und ist auch in Legacy-Projekten, Build-Pipelines und Codebasen relevant, die seine kompakte Syntax bevorzugen, während sie auf Standard-JavaScript abzielen.',
    },
    pt: {
      name: 'CoffeeScript',
      description:
        'Uma linguagem pequena que compila para JavaScript com sintaxe concisa inspirada em Ruby e Python.',
      longDescription:
        'CoffeeScript adiciona uma sintaxe concisa ao JavaScript com espaços em branco significativos, atalhos de função, comprehensions, destructuring, classes, interpolação de strings e outras conveniências expressivas.\n\nFoi amplamente utilizada em stacks de aplicações JavaScript anteriores e permanece relevante em projetos legados, pipelines de construção e bases de código que preferem sua sintaxe compacta, ao mesmo tempo que visam JavaScript padrão.',
    },
  },
} satisfies Language;
