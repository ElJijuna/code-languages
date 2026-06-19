import type { Language } from '../types';

export const maxima = {
  slug: 'maxima',
  publishedDate: '1982-01-01',
  extensions: ['.mac', '.wxm'],
  author: 'MIT Project MAC and the Maxima community',
  website: 'https://maxima.sourceforge.io',
  paradigms: ['symbolic', 'functional', 'scientific'],
  tooling: {
    runtimes: ['Maxima'],
    ecosystems: ['Computer Algebra', 'Mathematics', 'Scientific Computing'],
  },
  version: '5.49.0',
  logo: 'https://maxima.sourceforge.io/img/maxima.svg',
  color: '#92278F',
  i18n: {
    en: {
      name: 'Maxima',
      description:
        'A symbolic computation language and computer algebra system descended from Macsyma.',
      longDescription:
        'Maxima evaluates symbolic and numeric expressions for algebra, calculus, differential equations, linear algebra, number theory, and plotting. Its interactive language supports functions, rules, pattern matching, lists, matrices, and reusable packages.\n\nThe system descends from Macsyma and is implemented primarily in Common Lisp. It is used in education, research, engineering, and automated mathematical workflows through command-line and graphical interfaces.',
    },
    es: {
      name: 'Maxima',
      description:
        'Lenguaje de computacion simbolica y sistema algebraico descendiente de Macsyma.',
      longDescription:
        'Maxima evalua expresiones simbolicas y numericas para algebra, calculo, ecuaciones diferenciales, algebra lineal, teoria de numeros y graficos. Su lenguaje interactivo incluye funciones, reglas, patrones, listas, matrices y paquetes reutilizables.\n\nEl sistema desciende de Macsyma y esta implementado principalmente en Common Lisp. Se usa en educacion, investigacion, ingenieria y flujos matematicos automatizados mediante interfaces de terminal y graficas.',
    },
    it: {
      name: 'Maxima',
      description: 'Linguaggio di calcolo simbolico e sistema di algebra derivato da Macsyma.',
      longDescription:
        'Maxima valuta espressioni simboliche e numeriche per algebra, analisi, equazioni differenziali, algebra lineare, teoria dei numeri e grafici. Il linguaggio interattivo supporta funzioni, regole, pattern, liste, matrici e pacchetti riutilizzabili.\n\nIl sistema discende da Macsyma ed e implementato soprattutto in Common Lisp. Viene usato in didattica, ricerca, ingegneria e workflow matematici automatizzati tramite interfacce testuali e grafiche.',
    },
    fr: {
      name: 'Maxima',
      description: 'Langage de calcul symbolique et systeme d algebre descendant de Macsyma.',
      longDescription:
        'Maxima evalue des expressions symboliques et numeriques pour algebre, calcul, equations differentielles, algebre lineaire, theorie des nombres et graphiques. Son langage interactif prend en charge fonctions, regles, motifs, listes, matrices et paquets reutilisables.\n\nLe systeme descend de Macsyma et est principalement implemente en Common Lisp. Il sert en enseignement, recherche, ingenierie et automatisation mathematique via interfaces texte et graphiques.',
    },
    de: {
      name: 'Maxima',
      description:
        'Sprache fur symbolisches Rechnen und Computeralgebrasystem auf Basis von Macsyma.',
      longDescription:
        'Maxima wertet symbolische und numerische Ausdrucke fur Algebra, Analysis, Differentialgleichungen, lineare Algebra, Zahlentheorie und Diagramme aus. Die interaktive Sprache unterstutzt Funktionen, Regeln, Muster, Listen, Matrizen und wiederverwendbare Pakete.\n\nDas System stammt von Macsyma ab und ist hauptsachlich in Common Lisp implementiert. Es wird in Lehre, Forschung, Technik und automatisierten Mathematik-Workflows uber Text- und Grafikoberflachen eingesetzt.',
    },
    pt: {
      name: 'Maxima',
      description: 'Linguagem de computacao simbolica e sistema de algebra descendente do Macsyma.',
      longDescription:
        'Maxima avalia expressoes simbolicas e numericas para algebra, calculo, equacoes diferenciais, algebra linear, teoria dos numeros e graficos. Sua linguagem interativa suporta funcoes, regras, padroes, listas, matrizes e pacotes reutilizaveis.\n\nO sistema descende do Macsyma e e implementado principalmente em Common Lisp. E usado em ensino, pesquisa, engenharia e fluxos matematicos automatizados por interfaces de terminal e graficas.',
    },
  },
} satisfies Language;
