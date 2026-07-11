import type { Language } from '@/types';

export const inkNarrative = {
  slug: 'ink-narrative',
  publishedDate: '2016-01-01',
  extensions: ['.ink'],
  author: 'Inkle Studios',
  website: 'https://www.inklestudios.com/ink',
  paradigms: ['narrative', 'declarative', 'functional', 'scripting'],
  tooling: {
    runtimes: ['Ink Runtime', 'Inky'],
    ecosystems: ['Game Development', 'Interactive Fiction', 'Narrative Games'],
  },
  version: '1.2.0',
  logo: 'https://avatars.githubusercontent.com/u/1987090?v=4',
  color: '#FF6666',
  i18n: {
    en: {
      name: 'Ink',
      description:
        'A narrative scripting language for writing branching interactive fiction and story games.',
      longDescription:
        "Ink is a narrative scripting language developed by Inkle Studios for writing branching interactive stories. Its plain-text syntax uses knots, stitches, choices, and diverts to build nonlinear narratives that compile to JSON and integrate with game engines such as Unity via the Inkle runtime library.\n\nThe language is designed to be written by authors and narrative designers rather than just programmers, with a readable format close to plain prose. Ink has been used to write acclaimed games such as 80 Days, Heaven's Vault, and Overboard!, and is supported by the open-source Inky editor for authoring and testing stories.",
    },
    es: {
      name: 'Ink',
      description:
        'Lenguaje de scripting narrativo para escribir ficcion interactiva y juegos de historia ramificados.',
      longDescription:
        "Ink es un lenguaje de scripting narrativo desarrollado por Inkle Studios para escribir historias interactivas ramificadas. Su sintaxis de texto plano usa nudos, puntadas, elecciones y desvios para construir narrativas no lineales que se compilan a JSON y se integran con motores como Unity mediante la biblioteca de runtime de Inkle.\n\nEl lenguaje esta disenado para ser escrito por autores y disenadores narrativos, con un formato legible cercano a la prosa. Ink se ha utilizado en juegos aclamados como 80 Days, Heaven's Vault y Overboard!, y cuenta con el editor de codigo abierto Inky para crear y probar historias.",
    },
    it: {
      name: 'Ink',
      description:
        'Linguaggio di scripting narrativo per scrivere narrativa interattiva e giochi di storia ramificata.',
      longDescription:
        "Ink e un linguaggio di scripting narrativo sviluppato da Inkle Studios per scrivere storie interattive ramificate. La sua sintassi in testo semplice usa nodi, cuciture, scelte e deviazioni per costruire narrazioni non lineari che si compilano in JSON e si integrano con motori come Unity tramite la libreria di runtime Inkle.\n\nIl linguaggio e progettato per essere scritto da autori e designer narrativi, con un formato leggibile vicino alla prosa. Ink e stato usato in giochi acclamati come 80 Days, Heaven's Vault e Overboard!, ed e supportato dall editor open-source Inky per la creazione e il test delle storie.",
    },
    fr: {
      name: 'Ink',
      description:
        'Langage de script narratif pour ecrire des fictions interactives et jeux a embranchements.',
      longDescription:
        "Ink est un langage de script narratif developpe par Inkle Studios pour ecrire des histoires interactives ramifiees. Sa syntaxe en texte brut utilise des noeuds, des points, des choix et des deviations pour construire des recits non lineaires qui se compilent en JSON et s integrent avec des moteurs comme Unity via la bibliotheque de runtime Inkle.\n\nLe langage est concu pour etre ecrit par des auteurs et des narrateurs, avec un format lisible proche de la prose. Ink a ete utilise dans des jeux acclamEs comme 80 Days, Heaven's Vault et Overboard!, et est supporte par l editeur open-source Inky pour la creation et les tests d histoires.",
    },
    de: {
      name: 'Ink',
      description:
        'Narrative Skriptsprache fur das Schreiben verzweigter interaktiver Fiktion und Story-Spiele.',
      longDescription:
        "Ink ist eine narrative Skriptsprache, die von Inkle Studios fur das Schreiben verzweigter interaktiver Geschichten entwickelt wurde. Die Klartextsyntax verwendet Knoten, Nahte, Entscheidungen und Weiterleitungen, um nichtlineare Erzahlungen zu konstruieren, die zu JSON kompiliert und uber die Inkle-Runtime-Bibliothek in Spiel-Engines wie Unity integriert werden.\n\nDie Sprache ist so gestaltet, dass sie von Autoren und Narrativdesignern geschrieben werden kann, mit einem lesbaren Format nahe an Prosa. Ink wurde in gefeierten Spielen wie 80 Days, Heaven's Vault und Overboard! eingesetzt und wird vom Open-Source-Editor Inky fur das Erstellen und Testen von Geschichten unterstutzt.",
    },
    pt: {
      name: 'Ink',
      description:
        'Linguagem de script narrativo para escrever ficcao interativa e jogos de historia ramificados.',
      longDescription:
        "Ink e uma linguagem de script narrativo desenvolvida pela Inkle Studios para escrever historias interativas ramificadas. Sua sintaxe em texto simples usa nos, pontos, escolhas e desvios para construir narrativas nao lineares que compilam para JSON e se integram com engines como Unity via biblioteca de runtime da Inkle.\n\nA linguagem foi projetada para ser escrita por autores e designers narrativos, com um formato legivel proximo a prosa. O Ink foi usado em jogos aclamados como 80 Days, Heaven's Vault e Overboard!, e e suportado pelo editor de codigo aberto Inky para criacao e teste de historias.",
    },
  },
} satisfies Language;
