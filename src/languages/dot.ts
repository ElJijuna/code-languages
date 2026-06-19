import type { Language } from '../types';

export const dot = {
  slug: 'dot',
  publishedDate: '1991-01-01',
  extensions: ['.dot', '.gv'],
  author: 'AT&T Bell Laboratories',
  website: 'https://graphviz.org/doc/info/lang.html',
  paradigms: ['declarative', 'graph description'],
  tooling: {
    runtimes: ['Graphviz'],
    ecosystems: ['Visualization', 'Documentation'],
  },
  version: 'stable',
  logo: 'https://graphviz.org/Resources/favicon.png',
  color: '#16A34A',
  i18n: {
    en: {
      name: 'DOT',
      description:
        'A declarative graph description language used by Graphviz for diagrams and layouts.',
      longDescription:
        'DOT is a text language for describing directed and undirected graphs. It defines nodes, edges, subgraphs, attributes, labels, and layout hints that Graphviz tools render into diagrams.\n\nThe language is common in documentation, architecture diagrams, compiler output, dependency graphs, state machines, and generated reports. Its compact syntax makes graphs easy to version, review, and produce from programs.',
    },
    es: {
      name: 'DOT',
      description: 'Lenguaje declarativo de grafos usado por Graphviz para diagramas y layouts.',
      longDescription:
        'DOT es un lenguaje de texto para describir grafos dirigidos y no dirigidos. Define nodos, aristas, subgrafos, atributos, etiquetas y pistas de layout que las herramientas Graphviz renderizan como diagramas.\n\nEl lenguaje es comun en documentacion, diagramas de arquitectura, salida de compiladores, grafos de dependencias, maquinas de estado e informes generados. Su sintaxis compacta facilita versionar, revisar y producir grafos desde programas.',
    },
    it: {
      name: 'DOT',
      description: 'Linguaggio dichiarativo per grafi usato da Graphviz per diagrammi e layout.',
      longDescription:
        'DOT e un linguaggio testuale per descrivere grafi diretti e non diretti. Definisce nodi, archi, sottografi, attributi, etichette e suggerimenti di layout che gli strumenti Graphviz rendono come diagrammi.\n\nIl linguaggio e comune in documentazione, diagrammi architetturali, output di compilatori, grafi di dipendenze, macchine a stati e report generati. La sua sintassi compatta rende i grafi facili da versionare, revisionare e produrre da programmi.',
    },
    fr: {
      name: 'DOT',
      description:
        'Langage declaratif de graphes utilise par Graphviz pour diagrammes et mises en page.',
      longDescription:
        'DOT est un langage texte pour decrire des graphes orientes et non orientes. Il definit noeuds, aretes, sous-graphes, attributs, libelles et indications de mise en page que les outils Graphviz rendent en diagrammes.\n\nLe langage est courant dans la documentation, les diagrammes d architecture, les sorties de compilateurs, les graphes de dependances, les machines a etats et les rapports generes. Sa syntaxe compacte facilite le versionnement, la revue et la production de graphes depuis des programmes.',
    },
    de: {
      name: 'DOT',
      description: 'Deklarative Graphbeschreibungssprache von Graphviz fur Diagramme und Layouts.',
      longDescription:
        'DOT ist eine Textsprache zum Beschreiben gerichteter und ungerichteter Graphen. Sie definiert Knoten, Kanten, Teilgraphen, Attribute, Beschriftungen und Layout-Hinweise, die Graphviz-Werkzeuge als Diagramme rendern.\n\nDie Sprache ist verbreitet in Dokumentation, Architekturdiagrammen, Compiler-Ausgaben, Abhangigkeitsgraphen, Zustandsmaschinen und generierten Berichten. Ihre kompakte Syntax macht Graphen leicht versionierbar, reviewbar und aus Programmen erzeugbar.',
    },
    pt: {
      name: 'DOT',
      description: 'Linguagem declarativa de grafos usada pelo Graphviz para diagramas e layouts.',
      longDescription:
        'DOT e uma linguagem de texto para descrever grafos dirigidos e nao dirigidos. Ela define nos, arestas, subgrafos, atributos, rotulos e dicas de layout que ferramentas Graphviz renderizam como diagramas.\n\nA linguagem e comum em documentacao, diagramas de arquitetura, saida de compiladores, grafos de dependencias, maquinas de estado e relatorios gerados. Sua sintaxe compacta facilita versionar, revisar e produzir grafos a partir de programas.',
    },
  },
} satisfies Language;
