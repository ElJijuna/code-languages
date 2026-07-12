import type { Language } from '@/types';

export const verse = {
  slug: 'verse',
  publishedDate: '2023-03-23',
  extensions: ['.verse'],
  author: 'Epic Games',
  website: 'https://dev.epicgames.com/documentation/en-us/uefn/verse-language-reference',
  paradigms: ['functional', 'logic', 'scripting'],
  tooling: {
    runtimes: ['Unreal Editor for Fortnite'],
    ecosystems: ['Unreal Engine', 'Fortnite Creator'],
  },
  version: 'UEFN Verse',
  logo: 'https://cdn.simpleicons.org/epicgames',
  color: '#111827',
  i18n: {
    en: {
      name: 'Verse',
      description:
        'A functional-logic scripting language from Epic Games for UEFN and future Unreal workflows.',
      longDescription:
        'Verse is a programming language developed by Epic Games for Unreal Editor for Fortnite and related game-creation workflows. It combines scripting for interactive experiences with ideas from functional and logic programming.\n\nVerse is used to define gameplay behavior, devices, rules, and systems in UEFN projects. Its public ecosystem is tied to Fortnite Creator tooling and Unreal Engine documentation.',
    },
    es: {
      name: 'Verse',
      description:
        'Lenguaje de scripting funcional-logico de Epic Games para UEFN y flujos Unreal.',
      longDescription:
        'Verse es un lenguaje de programacion desarrollado por Epic Games para Unreal Editor for Fortnite y flujos relacionados de creacion de juegos. Combina scripting para experiencias interactivas con ideas de programacion funcional y logica.\n\nVerse se usa para definir comportamiento de juego, dispositivos, reglas y sistemas en proyectos UEFN. Su ecosistema publico esta ligado a las herramientas de Fortnite Creator y a la documentacion de Unreal Engine.',
    },
    it: {
      name: 'Verse',
      description:
        'Linguaggio di scripting funzionale-logico di Epic Games per UEFN e workflow Unreal.',
      longDescription:
        'Verse e un linguaggio di programmazione sviluppato da Epic Games per Unreal Editor for Fortnite e workflow correlati di creazione di giochi. Combina scripting per esperienze interattive con idee di programmazione funzionale e logica.\n\nVerse viene usato per definire comportamento di gioco, dispositivi, regole e sistemi nei progetti UEFN. Il suo ecosistema pubblico e legato agli strumenti Fortnite Creator e alla documentazione Unreal Engine.',
    },
    fr: {
      name: 'Verse',
      description:
        'Langage de script fonctionnel-logique d Epic Games pour UEFN et les flux Unreal.',
      longDescription:
        'Verse est un langage de programmation developpe par Epic Games pour Unreal Editor for Fortnite et les flux associes de creation de jeux. Il combine le script d experiences interactives avec des idees issues de la programmation fonctionnelle et logique.\n\nVerse sert a definir comportements de gameplay, appareils, regles et systemes dans les projets UEFN. Son ecosysteme public est lie aux outils Fortnite Creator et a la documentation Unreal Engine.',
    },
    de: {
      name: 'Verse',
      description:
        'Funktional-logische Skriptsprache von Epic Games fur UEFN und Unreal-Workflows.',
      longDescription:
        'Verse ist eine von Epic Games entwickelte Programmiersprache fur Unreal Editor for Fortnite und verwandte Workflows zur Spieleerstellung. Sie kombiniert Skripting fur interaktive Erlebnisse mit Ideen aus funktionaler und logischer Programmierung.\n\nVerse wird genutzt, um Gameplay-Verhalten, Gerate, Regeln und Systeme in UEFN-Projekten zu definieren. Das offentliche Okosystem ist an Fortnite-Creator-Werkzeuge und Unreal-Engine-Dokumentation gebunden.',
    },
    pt: {
      name: 'Verse',
      description:
        'Linguagem de scripting funcional-logica da Epic Games para UEFN e fluxos Unreal.',
      longDescription:
        'Verse e uma linguagem de programacao desenvolvida pela Epic Games para Unreal Editor for Fortnite e fluxos relacionados de criacao de jogos. Ela combina scripting para experiencias interativas com ideias de programacao funcional e logica.\n\nVerse e usada para definir comportamento de gameplay, dispositivos, regras e sistemas em projetos UEFN. Seu ecossistema publico esta ligado as ferramentas Fortnite Creator e a documentacao do Unreal Engine.',
    },
  },
} satisfies Language;
