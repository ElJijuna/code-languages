import type { Language } from '@/types';

export const j = {
  slug: 'j',
  publishedDate: '1990-01-01',
  extensions: ['.ijs'],
  author: 'Kenneth E. Iverson / Roger Hui',
  website: 'https://www.jsoftware.com',
  paradigms: ['array', 'functional', 'tacit'],
  tooling: {
    runtimes: ['J Engine'],
    ecosystems: ['Data Science', 'Numerical Computing'],
  },
  version: 'J9.6',
  logo: 'https://avatars.githubusercontent.com/u/583748?v=4',
  color: '#9EEDFF',
  i18n: {
    en: {
      name: 'J',
      description: 'A terse array language by the creator of APL, using ASCII instead of symbols.',
      longDescription:
        'J is an array programming language designed by Kenneth Iverson and Roger Hui as a successor to APL, replacing its special symbol set with ASCII digraphs. Programs compose verbs and adverbs over whole arrays, often in a point-free (tacit) style.\n\nJ excels at statistics, mathematical exploration, and data transformation, packing algorithms into remarkably short expressions. The interpreter, labs, and extensive vocabulary documentation are freely available from Jsoftware.',
    },
    es: {
      name: 'J',
      description: 'Un lenguaje de arrays conciso del creador de APL, usando ASCII en lugar de símbolos.',
      longDescription:
        'J es un lenguaje de programación de arrays diseñado por Kenneth Iverson y Roger Hui como sucesor de APL, reemplazando su juego de símbolos especiales por dígrafos ASCII. Los programas componen verbos y adverbios sobre arrays completos, a menudo en estilo tácito (point-free).\n\nJ destaca en estadística, exploración matemática y transformación de datos, condensando algoritmos en expresiones notablemente cortas. El intérprete, los laboratorios y la extensa documentación de vocabulario están disponibles gratuitamente en Jsoftware.',
    },
    it: {
      name: 'J',
      description: "Un linguaggio di array conciso del creatore di APL, con ASCII al posto dei simboli.",
      longDescription:
        "J è un linguaggio di programmazione di array progettato da Kenneth Iverson e Roger Hui come successore di APL, sostituendo il suo set di simboli speciali con digrammi ASCII. I programmi compongono verbi e avverbi su interi array, spesso in stile tacito (point-free).\n\nJ eccelle in statistica, esplorazione matematica e trasformazione dei dati, condensando algoritmi in espressioni notevolmente brevi. L'interprete, i laboratori e l'ampia documentazione del vocabolario sono disponibili gratuitamente da Jsoftware.",
    },
    fr: {
      name: 'J',
      description: "Un langage de tableaux concis du créateur d'APL, utilisant l'ASCII plutôt que des symboles.",
      longDescription:
        "J est un langage de programmation de tableaux conçu par Kenneth Iverson et Roger Hui comme successeur d'APL, remplaçant son jeu de symboles spéciaux par des digrammes ASCII. Les programmes composent des verbes et des adverbes sur des tableaux entiers, souvent dans un style tacite (point-free).\n\nJ excelle en statistique, en exploration mathématique et en transformation de données, condensant les algorithmes en expressions remarquablement courtes. L'interpréteur, les laboratoires et la vaste documentation du vocabulaire sont disponibles gratuitement chez Jsoftware.",
    },
    de: {
      name: 'J',
      description: 'Eine knappe Array-Sprache vom Schöpfer von APL, mit ASCII statt Sonderzeichen.',
      longDescription:
        'J ist eine Array-Programmiersprache, die Kenneth Iverson und Roger Hui als Nachfolger von APL entworfen haben; der spezielle Symbolsatz wurde durch ASCII-Digraphen ersetzt. Programme komponieren Verben und Adverbien über ganze Arrays, oft im punktfreien (taciten) Stil.\n\nJ glänzt bei Statistik, mathematischer Exploration und Datentransformation und verdichtet Algorithmen zu bemerkenswert kurzen Ausdrücken. Interpreter, Labs und die umfangreiche Vokabular-Dokumentation sind bei Jsoftware frei erhältlich.',
    },
    pt: {
      name: 'J',
      description: 'Uma linguagem de arrays concisa do criador do APL, usando ASCII em vez de símbolos.',
      longDescription:
        'J é uma linguagem de programação de arrays projetada por Kenneth Iverson e Roger Hui como sucessora do APL, substituindo seu conjunto de símbolos especiais por dígrafos ASCII. Os programas compõem verbos e advérbios sobre arrays inteiros, frequentemente em estilo tácito (point-free).\n\nJ se destaca em estatística, exploração matemática e transformação de dados, condensando algoritmos em expressões notavelmente curtas. O interpretador, os laboratórios e a extensa documentação de vocabulário estão disponíveis gratuitamente na Jsoftware.',
    },
  },
} satisfies Language;
