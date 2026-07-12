import type { Language } from '@/types';

export const io = {
  slug: 'io',
  publishedDate: '2002-03-07',
  extensions: ['.io'],
  author: 'Steve Dekorte',
  website: 'https://iolanguage.org',
  paradigms: ['prototype-based', 'object-oriented', 'dynamic'],
  tooling: {
    runtimes: ['Io VM'],
    ecosystems: ['Scripting', 'Prototype Programming', 'Language Exploration'],
  },
  version: '2017.09.06',
  logo: 'https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_io.svg',
  color: '#2563EB',
  i18n: {
    en: {
      name: 'Io',
      description:
        'A small prototype-based language focused on message passing and minimal syntax.',
      longDescription:
        'Io is a dynamic prototype-based language inspired by Smalltalk, Self, Lisp, and Lua. Its object model is based on cloning prototypes and sending messages rather than class declarations.\n\nThe language has a compact syntax, coroutines, actors, reflection, and an embeddable runtime, making it a useful reference point for prototype programming and language design.',
    },
    es: {
      name: 'Io',
      description: 'Un lenguaje pequeno basado en prototipos, paso de mensajes y sintaxis minima.',
      longDescription:
        'Io es un lenguaje dinamico basado en prototipos e inspirado por Smalltalk, Self, Lisp y Lua. Su modelo usa clonacion y envio de mensajes, no clases.\n\nIncluye sintaxis compacta, corrutinas, actores, reflexion y runtime embebible.',
    },
    it: {
      name: 'Io',
      description:
        'Un piccolo linguaggio basato su prototipi focalizzato sulla comunicazione tramite messaggi e una sintassi minima.',
      longDescription:
        "Io è un linguaggio dinamico basato su prototipi ispirato a Smalltalk, Self, Lisp e Lua. Il suo modello di oggetti si basa sul clonaggio dei prototipi e sull'invio di messaggi piuttosto che sulle dichiarazioni di classe.\n\nIl linguaggio ha una sintassi compatta, coroutine, attori, riflessione e un runtime integrabile, rendendolo un punto di riferimento utile per la programmazione basata su prototipi e il design linguistico.",
    },
    fr: {
      name: 'Io',
      description:
        'Un petit langage basé sur les prototypes, axé sur le passage de messages et une syntaxe minimale.',
      longDescription:
        "Io est un langage dynamique basé sur les prototypes inspiré de Smalltalk, Self, Lisp et Lua. Son modèle d'objet repose sur la clonage des prototypes et l'envoi de messages plutôt que sur les déclarations de classes.\n\nLe langage possède une syntaxe compacte, des coroutines, des acteurs, un mécanisme de réflexion et une bibliothèque d'exécution embarquable, ce qui en fait un point de référence utile pour le prototypage et la conception de langages.",
    },
    de: {
      name: 'Io',
      description:
        'Eine kleine, prototypenbasiert basierte Sprache mit Fokus auf Nachrichtenübermittlung und minimaler Syntax.',
      longDescription:
        'Io ist eine dynamische, prototypenbasiert basierte Sprache, die von Smalltalk, Self, Lisp und Lua inspiriert wurde. Ihr Objektmodell basiert auf dem Klonen von Prototypen und dem Senden von Nachrichten anstelle von Klassendeklarationen.\n\nDie Sprache verfügt über eine kompakte Syntax, Koroutinen, Akteure, Reflection und einen eingebettbaren Runtime, was sie zu einem nützlichen Referenzpunkt für prototypenbasiertes Programmieren und die Sprachgestaltung macht.',
    },
    pt: {
      name: 'Io',
      description:
        'Uma linguagem de protótipos pequena focada em passagem de mensagens e sintaxe mínima.',
      longDescription:
        'Io é uma linguagem dinâmica baseada em protótipos inspirada em Smalltalk, Self, Lisp e Lua. Seu modelo de objeto se baseia na clonagem de protótipos e no envio de mensagens, em vez de declarações de classe.\n\nA linguagem possui uma sintaxe compacta, corrotinas, atores, reflexão e um runtime incorporável, tornando-a um ponto de referência útil para programação orientada a protótipos e design de linguagens.',
    },
  },
} satisfies Language;
