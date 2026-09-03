import type { Language } from '@/types';

export const clojure = {
  slug: 'clojure',
  publishedDate: '2007-10-16',
  extensions: ['.clj', '.cljs', '.cljc', '.edn', '.bb'],
  author: 'Rich Hickey',
  website: 'https://clojure.org',
  paradigms: ['functional', 'lisp', 'concurrent', 'dynamic', 'immutable-data'],
  tooling: {
    runtimes: ['JVM', 'ClojureScript', 'Babashka', 'ClojureCLR'],
    packageManagers: ['Clojure CLI', 'Leiningen', 'Boot', 'Maven'],
    ecosystems: ['JVM', 'JavaScript', 'Data Processing', 'Web', 'REPL-driven Development'],
  },
  version: '1.12.6',
  logo: 'https://cdn.simpleicons.org/clojure/5881D8',
  color: '#5881D8',
  i18n: {
    en: {
      name: 'Clojure',
      description:
        'A modern Lisp for the JVM and JavaScript ecosystems with immutable data and interactive development.',
      longDescription:
        'Clojure is a dynamic functional Lisp dialect designed for practical software development on hosted runtimes. It emphasizes immutable persistent data structures, first-class functions, macros, namespaces, protocols, software transactional memory, and REPL-driven workflows.\n\nIt is used for backend services, data pipelines, interactive systems, scripting with Babashka, web applications, distributed systems, and projects that benefit from a small language core with strong data-oriented programming practices.',
    },
    es: {
      name: 'Clojure',
      description:
        'Un Lisp moderno para los ecosistemas JVM y JavaScript con datos inmutables y desarrollo interactivo.',
      longDescription:
        'Clojure es un dialecto Lisp funcional y dinamico disenado para desarrollo practico de software sobre runtimes hospedados. Enfatiza estructuras de datos persistentes e inmutables, funciones de primera clase, macros, namespaces, protocolos, memoria transaccional de software y flujos guiados por REPL.\n\nSe usa en servicios backend, pipelines de datos, sistemas interactivos, scripting con Babashka, aplicaciones web, sistemas distribuidos y proyectos que se benefician de un nucleo pequeno de lenguaje con practicas fuertes de programacion orientada a datos.',
    },
    it: {
      name: 'Clojure',
      description:
        'Un Lisp moderno per gli ecosistemi JVM e JavaScript con dati immutabili e sviluppo interattivo.',
      longDescription:
        'Clojure e un dialetto dinamico funzionale di Lisp progettato per lo sviluppo di software pratico su runtime ospitati. Enfatizza strutture dati persistenti immutabili, funzioni di prima classe, macro, namespace, protocolli, memoria transazionale software e flussi di lavoro guidati da REPL.\n\nViene utilizzato per servizi backend, pipeline di dati, sistemi interattivi, scripting con Babashka, applicazioni web, sistemi distribuiti e progetti che beneficiano di un piccolo nucleo di linguaggio con forti pratiche di programmazione orientate ai dati.',
    },
    fr: {
      name: 'Clojure',
      description:
        'Un Lisp moderne pour les ecosystemes JVM et JavaScript avec des donnees immuables et un developpement interactif.',
      longDescription:
        "Clojure est un dialecte Lisp fonctionnel dynamique concu pour le developpement logiciel pratique sur des environnements d'execution heberges. Il met l'accent sur les structures de donnees persistantes immuables, les fonctions de premiere classe, les macros, les espaces de noms, les protocoles, la memoire transactionnelle et les flux de travail bases sur REPL.\n\nIl est utilise pour les services backend, les pipelines de donnees, les systemes interactifs, le scripting avec Babashka, les applications web, les systemes distribues et les projets qui beneficient d'un noyau de langage compact avec de solides pratiques de programmation orientee donnees.",
    },
    de: {
      name: 'Clojure',
      description:
        'Ein moderner Lisp für die JVM und JavaScript-Ökosysteme mit unveränderlichen Daten und interaktiver Entwicklung.',
      longDescription:
        'Clojure ist ein dynamischer funktionaler Lisp-Dialekt, der für die praktische Softwareentwicklung auf gehosteten Laufzeitumgebungen entwickelt wurde. Es betont unveränderliche, persistente Datenstrukturen, Funktionen von erster Klasse, Makros, Namespaces, Protokolle, Software-Transaktions-Speicher und REPL-gesteuerte Arbeitsabläufe.\n\nEs wird für Backend-Dienste, Datenpipelines, interaktive Systeme, Skripting mit Babashka, Webanwendungen, verteilte Systeme und Projekte verwendet, die von einer kleinen Sprache mit starken Datenorientierungs-Programmierpraktiken profitieren.',
    },
    pt: {
      name: 'Clojure',
      description:
        'Lisp moderno para os ecossistemas JVM e JavaScript com dados imutáveis e desenvolvimento interativo.',
      longDescription:
        'Clojure é um dialeto dinâmico funcional de Lisp projetado para desenvolvimento de software prático em ambientes de execução hospedados. Enfatiza estruturas de dados persistentes imutáveis, funções de primeira classe, macros, namespaces, protocolos, memória transacional e fluxos de trabalho baseados em REPL.\n\nÉ usado para serviços de backend, pipelines de dados, sistemas interativos, scripting com Babashka, aplicações web, sistemas distribuídos e projetos que se beneficiam de um núcleo de linguagem pequeno com fortes práticas de programação orientada a dados.',
    },
  },
} satisfies Language;
