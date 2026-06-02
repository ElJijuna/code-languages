import type { Language } from '../types';

export const groovy = {
  slug: 'groovy',
  publishedDate: '2007-01-02',
  extensions: ['.groovy', '.gvy', '.gy', '.gsh'],
  author: 'James Strachan / Apache Software Foundation',
  website: 'https://groovy.apache.org',
  paradigms: ['object-oriented', 'functional', 'dynamic', 'scripting'],
  tooling: {
    runtimes: ['JVM'],
    packageManagers: ['Gradle', 'Maven'],
    ecosystems: ['JVM', 'Gradle'],
  },
  version: '5.0.6',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Groovy-logo.svg',
  color: '#4298B8',
  i18n: {
    en: {
      name: 'Groovy',
      description: 'A dynamic language for the JVM with Java-like syntax and scripting features.',
      longDescription:
        'Groovy is a JVM language that integrates with Java while adding dynamic typing, concise syntax, closures, builders, metaprogramming, and scripting capabilities.\n\nIt is used for automation, testing, build scripts, Gradle plugins, web applications, and JVM projects that benefit from expressive syntax and Java interoperability.',
    },
    es: {
      name: 'Groovy',
      description:
        'Un lenguaje dinamico para la JVM con sintaxis similar a Java y funciones de scripting.',
      longDescription:
        'Groovy es un lenguaje para la JVM que se integra con Java y agrega tipado dinamico, sintaxis concisa, closures, builders, metaprogramacion y capacidades de scripting.\n\nSe usa para automatizacion, testing, scripts de build, plugins de Gradle, aplicaciones web y proyectos JVM que se benefician de sintaxis expresiva e interoperabilidad con Java.',
    },
    it: {
      name: 'Groovy',
      description:
        'Un linguaggio dinamico per la JVM con sintassi simile a Java e funzionalita di scripting.',
      longDescription:
        "Groovy e un linguaggio JVM che si integra con Java, aggiungendo tipizzazione dinamica, sintassi concisa, closure, builder, metaprogrammazione e funzionalita di scripting.\n\nE utilizzato per l'automazione, i test, gli script di build, i plugin Gradle, le applicazioni web e i progetti JVM che beneficiano di una sintassi espressiva e dell'interoperabilita con Java.",
    },
    fr: {
      name: 'Groovy',
      description:
        'Un langage dynamique pour la JVM avec une syntaxe semblable a Java et des fonctionnalites de script.',
      longDescription:
        "Groovy est un langage JVM qui s'integre avec Java tout en ajoutant le typage dynamique, une syntaxe concise, les closures, les builders, la metaprogrammation et les capacites de script.\n\nIl est utilise pour l'automatisation, les tests, les scripts de construction, les plugins Gradle, les applications web et les projets JVM qui beneficient d'une syntaxe expressive et de l'interoperabilite Java.",
    },
    de: {
      name: 'Groovy',
      description:
        'Eine dynamische Sprache f\u00fcr die JVM mit Java-\u00e4hnlicher Syntax und Skriptfunktionen.',
      longDescription:
        'Groovy ist eine JVM-Sprache, die mit Java interagiert und dynamische Typisierung, pr\u00e4gnante Syntax, Closures, Builder, Metaprogrammierung und Skriptf\u00e4higkeiten hinzuf\u00fcgt.\n\nSie wird f\u00fcr Automatisierung, Tests, Build-Skripte, Gradle-Plugins, Webanwendungen und JVM-Projekte verwendet, die von einer ausdrucksstarken Syntax und Java-Interoperabilit\u00e4t profitieren.',
    },
    pt: {
      name: 'Groovy',
      description:
        'Linguagem din\u00e2mica para a JVM com sintaxe semelhante \u00e0 Java e recursos de scripting.',
      longDescription:
        'Groovy \u00e9 uma linguagem JVM que se integra com o Java, adicionando tipagem din\u00e2mica, sintaxe concisa, closures, builders, metaprograma\u00e7\u00e3o e capacidades de scripting.\n\n\u00c9 usada para automa\u00e7\u00e3o, testes, scripts de constru\u00e7\u00e3o, plugins Gradle, aplica\u00e7\u00f5es web e projetos JVM que se beneficiam de uma sintaxe expressiva e interoperabilidade com Java.',
    },
  },
} satisfies Language;
