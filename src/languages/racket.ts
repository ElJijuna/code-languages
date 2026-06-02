import type { Language } from '../types';

export const racket = {
  slug: 'racket',
  publishedDate: '1995-01-01',
  extensions: ['.rkt', '.rktd', '.rktl', '.scrbl'],
  author: 'Matthias Felleisen, Robert Bruce Findler, Matthew Flatt, Shriram Krishnamurthi',
  website: 'https://racket-lang.org',
  paradigms: ['functional', 'multi-paradigm', 'language-oriented', 'metaprogramming'],
  tooling: {
    runtimes: ['Racket CS', 'Racket BC', 'DrRacket'],
    packageManagers: ['raco pkg'],
    ecosystems: ['Education', 'Language Design', 'DSLs', 'Research', 'Scripting'],
  },
  version: '9.2',
  logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Racket-logo.svg',
  color: '#9F1D20',
  i18n: {
    en: {
      name: 'Racket',
      description:
        'A Scheme-family language and platform for functional, educational, and language-oriented programming.',
      longDescription:
        'Racket is a general-purpose programming language in the Scheme and Lisp family, designed as a platform for creating languages as well as applications. It includes modules, macros, contracts, pattern matching, a rich standard library, DrRacket, and tools for building domain-specific languages.\n\nIt is used in programming education, language design research, DSLs, compilers, scripting, web applications, documentation with Scribble, and projects that benefit from programmable syntax and interactive development.',
    },
    es: {
      name: 'Racket',
      description:
        'Un lenguaje de la familia Scheme y una plataforma para programacion funcional, educativa y orientada a lenguajes.',
      longDescription:
        'Racket es un lenguaje de programacion de proposito general de la familia Scheme y Lisp, disenado como plataforma para crear lenguajes ademas de aplicaciones. Incluye modulos, macros, contratos, pattern matching, una biblioteca estandar amplia, DrRacket y herramientas para construir lenguajes especificos de dominio.\n\nSe usa en educacion en programacion, investigacion en diseno de lenguajes, DSLs, compiladores, scripting, aplicaciones web, documentacion con Scribble y proyectos que se benefician de sintaxis programable y desarrollo interactivo.',
    },
    it: {
      name: 'Racket',
      description:
        'Un linguaggio e piattaforma della famiglia Scheme per la programmazione funzionale, didattica e orientata al linguaggio.',
      longDescription:
        "Racket e un linguaggio di programmazione di uso generale nella famiglia Scheme e Lisp, progettato come piattaforma per la creazione di linguaggi, nonche di applicazioni. Include moduli, macro, contratti, corrispondenza di pattern, una ricca libreria standard, DrRacket e strumenti per la creazione di linguaggi specifici per il dominio.\n\nViene utilizzato nell'istruzione di programmazione, nella ricerca sulla progettazione di linguaggi, nei DSL, nei compilatori, nello scripting, nelle applicazioni web, nella documentazione con Scribble e in progetti che beneficiano della sintassi programmabile e dello sviluppo interattivo.",
    },
    fr: {
      name: 'Racket',
      description:
        'Un langage et une plateforme de la famille Scheme, pour la programmation fonctionnelle, educative et orientee langage.',
      longDescription:
        "Racket est un langage de programmation general a usage, de la famille Scheme et Lisp, concu comme une plateforme pour creer des langages ainsi que des applications. Il inclut des modules, des macros, des contrats, la correspondance de motifs, une bibliotheque standard riche, DrRacket, et des outils pour construire des langages specifiques a un domaine.\n\nIl est utilise dans l'enseignement de la programmation, la recherche sur la conception de langages, les DSL, les compilateurs, le scripting, les applications web, la documentation avec Scribble, et des projets qui beneficient d'une syntaxe programmable et d'un developpement interactif.",
    },
    de: {
      name: 'Racket',
      description:
        'Eine Scheme-basierte Sprache und Plattform f\u00fcr funktionale, lehrhafte und sprachorientierte Programmierung.',
      longDescription:
        'Racket ist eine allgemeine Programmiersprache, die zur Scheme-Familie geh\u00f6rt, und wurde als Plattform f\u00fcr die Erstellung von Sprachen sowie Anwendungen entwickelt. Sie enth\u00e4lt Module, Makros, Vertr\u00e4ge, Mustervergleich, eine umfangreiche Standardbibliothek, DrRacket und Werkzeuge zum Aufbau von dom\u00e4nenspezifischen Sprachen.\n\nSie wird in der Programmierausbildung, der Forschung im Bereich der Sprachgestaltung, f\u00fcr DSLs, Compiler, Skripting, Webanwendungen, Dokumentation mit Scribble und Projekten verwendet, die von programmierbarer Syntax und interaktiver Entwicklung profitieren.',
    },
    pt: {
      name: 'Racket',
      description:
        'Linguagem e plataforma Scheme, para programa\u00e7\u00e3o funcional, educacional e orientada a linguagens.',
      longDescription:
        'Racket \u00e9 uma linguagem de programa\u00e7\u00e3o de prop\u00f3sito geral da fam\u00edlia Scheme e Lisp, projetada como uma plataforma para criar linguagens, bem como aplica\u00e7\u00f5es. Inclui m\u00f3dulos, macros, contratos, correspond\u00eancia de padr\u00f5es, uma biblioteca padr\u00e3o rica, DrRacket e ferramentas para construir linguagens espec\u00edficas de dom\u00ednio.\n\n\u00c9 usada em educa\u00e7\u00e3o em programa\u00e7\u00e3o, pesquisa em design de linguagens, DSLs, compiladores, scripting, aplica\u00e7\u00f5es web, documenta\u00e7\u00e3o com Scribble e projetos que se beneficiam de sintaxe program\u00e1vel e desenvolvimento interativo.',
    },
  },
} satisfies Language;
