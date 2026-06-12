import type { Language } from '../types';

export const logo = {
  slug: 'logo',
  publishedDate: '1967-01-01',
  extensions: ['.logo', '.lgo'],
  author: 'Wally Feurzeig, Seymour Papert, and Cynthia Solomon',
  website: 'https://people.eecs.berkeley.edu/~bh/logo.html',
  paradigms: ['educational', 'procedural', 'interactive'],
  tooling: {
    runtimes: ['UCBLogo', 'FMSLogo', 'Logo interpreters'],
    ecosystems: ['Education', 'Turtle Graphics', 'Creative Coding'],
  },
  version: 'UCBLogo 6.2',
  logo: 'https://dummyimage.com/32x32/16A34A/ffffff.png&text=Lg',
  color: '#16A34A',
  i18n: {
    en: {
      name: 'Logo',
      description:
        'An educational language known for turtle graphics, interactivity, and procedural ideas.',
      longDescription:
        'Logo is an educational programming language created to help learners explore procedures, recursion, geometry, and interactive problem solving. Its turtle graphics model made programming visual and concrete for generations of students.\n\nLogo dialects are still used in teaching, creative coding, and language-history contexts where immediate feedback and simple commands make computational ideas easier to explore.',
    },
    es: {
      name: 'Logo',
      description:
        'Lenguaje educativo conocido por graficos de tortuga, interactividad e ideas procedurales.',
      longDescription:
        'Logo es un lenguaje educativo creado para explorar procedimientos, recursion, geometria y resolucion interactiva de problemas. Su modelo de graficos de tortuga hizo la programacion visual y concreta para generaciones de estudiantes.\n\nSus dialectos siguen presentes en ensenanza, codigo creativo e historia de lenguajes, donde el feedback inmediato facilita explorar ideas computacionales.',
    },
    it: {
      name: 'Logo',
      description:
        "Linguaggio didattico noto per i grafici di tartaruga, l'interattività e le idee procedurali.",
      longDescription:
        "Logo è un linguaggio di programmazione didattico creato per aiutare gli studenti a esplorare procedure, ricorsione, geometria e la risoluzione interattiva dei problemi. Il suo modello grafico con la tartaruga ha reso la programmazione visibile e concreta per le generazioni di studenti.\n\nI dialetti di Logo sono ancora utilizzati nell'insegnamento, nella codifica creativa e nei contesti storici del linguaggio, dove il feedback immediato e i comandi semplici rendono più accessibili i concetti computazionali.",
    },
    fr: {
      name: 'Logo',
      description:
        'Langage éducatif connu pour ses graphiques de tortue, son interactivité et ses idées procédurales.',
      longDescription:
        "Logo est un langage de programmation éducatif créé pour aider les apprenants à explorer les procédures, la récursion, la géométrie et la résolution de problèmes interactives. Son modèle graphique de tortue a rendu la programmation visuelle et concrète pour des générations d'étudiants.\n\nLes dialectes Logo sont encore utilisés dans l'enseignement, le codage créatif et les contextes historiques du langage où les commentaires immédiats et les commandes simples facilitent l'exploration des idées computationnelles.",
    },
    de: {
      name: 'Logo',
      description:
        'Eine didaktische Sprache bekannt für Turtle-Grafiken, Interaktivität und algorithmisches Denken.',
      longDescription:
        'Logo ist eine didaktische Programmiersprache, die entwickelt wurde, um Lernenden das Erlernen von Verfahren, Rekursion, Geometrie und interaktiver Problemlösung zu ermöglichen. Das Turtle-Grafikmodell machte Programmieren für Generationen von Schülern visuell und greifbar.\n\nLogo-Dialekte werden weiterhin im Unterricht, in der kreativen Codierung und in sprachhistorischen Kontexten eingesetzt, wo unmittelbares Feedback und einfache Befehle das Erkunden von algorithmischem Denken erleichtern.',
    },
    pt: {
      name: 'Logo',
      description:
        'Linguagem educacional conhecida por gráficos de tartaruga, interatividade e ideias procedurais.',
      longDescription:
        'Logo é uma linguagem de programação educativa criada para ajudar os alunos a explorar procedimentos, recursão, geometria e resolução de problemas interativos. Seu modelo gráfico de tartaruga tornou a programação visual e concreta para gerações de estudantes.\n\nDialetos do Logo ainda são usados no ensino, codificação criativa e contextos históricos da linguagem, onde o feedback imediato e comandos simples tornam as ideias computacionais mais fáceis de explorar.',
    },
  },
} satisfies Language;
