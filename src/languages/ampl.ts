import type { Language } from '@/types';

export const ampl = {
  slug: 'ampl',
  publishedDate: '1985-01-01',
  extensions: ['.mod', '.dat', '.run'],
  author: 'Robert Fourer, David Gay, and Brian Kernighan',
  website: 'https://ampl.com',
  paradigms: ['declarative', 'mathematical modeling'],
  tooling: {
    runtimes: ['AMPL'],
    ecosystems: ['Optimization', 'Operations research'],
  },
  version: 'stable',
  logo: 'https://ampl.com/wp-content/uploads/AMPL-favicon-36x29-1.svg',
  color: '#1D4ED8',
  i18n: {
    en: {
      name: 'AMPL',
      description:
        'A declarative language for describing optimization models and data for mathematical solvers.',
      longDescription:
        'AMPL is a modeling language for linear, nonlinear, integer, and constraint optimization. It lets modelers express sets, parameters, variables, objectives, and constraints close to mathematical notation.\n\nThe language is widely used in operations research, logistics, energy planning, finance, and industrial scheduling. AMPL separates model structure from data and connects to many commercial and open source solvers.',
    },
    es: {
      name: 'AMPL',
      description:
        'Lenguaje declarativo para describir modelos y datos de optimizacion para solvers matematicos.',
      longDescription:
        'AMPL es un lenguaje de modelado para optimizacion lineal, no lineal, entera y con restricciones. Permite expresar conjuntos, parametros, variables, objetivos y restricciones cerca de la notacion matematica.\n\nEl lenguaje se usa en investigacion de operaciones, logistica, planificacion energetica, finanzas y programacion industrial. AMPL separa la estructura del modelo de los datos y se conecta con muchos solvers comerciales y abiertos.',
    },
    it: {
      name: 'AMPL',
      description:
        'Linguaggio dichiarativo per descrivere modelli e dati di ottimizzazione per solver matematici.',
      longDescription:
        'AMPL e un linguaggio di modellazione per ottimizzazione lineare, non lineare, intera e vincolata. Permette di esprimere insiemi, parametri, variabili, obiettivi e vincoli vicino alla notazione matematica.\n\nIl linguaggio e usato in ricerca operativa, logistica, pianificazione energetica, finanza e schedulazione industriale. AMPL separa la struttura del modello dai dati e si collega a molti solver commerciali e open source.',
    },
    fr: {
      name: 'AMPL',
      description:
        'Langage declaratif pour decrire modeles et donnees d optimisation pour solveurs mathematiques.',
      longDescription:
        'AMPL est un langage de modelisation pour l optimisation lineaire, non lineaire, entiere et sous contraintes. Il permet d exprimer ensembles, parametres, variables, objectifs et contraintes pres de la notation mathematique.\n\nLe langage est utilise en recherche operationnelle, logistique, planification energetique, finance et ordonnancement industriel. AMPL separe la structure du modele des donnees et se connecte a de nombreux solveurs commerciaux et ouverts.',
    },
    de: {
      name: 'AMPL',
      description:
        'Deklarative Sprache fur Optimierungsmodelle und Daten fur mathematische Solver.',
      longDescription:
        'AMPL ist eine Modellierungssprache fur lineare, nichtlineare, ganzzahlige und eingeschrankte Optimierung. Sie beschreibt Mengen, Parameter, Variablen, Ziele und Nebenbedingungen nahe an mathematischer Notation.\n\nDie Sprache wird in Operations Research, Logistik, Energieplanung, Finanzwesen und industrieller Planung genutzt. AMPL trennt Modellstruktur von Daten und bindet viele kommerzielle und offene Solver an.',
    },
    pt: {
      name: 'AMPL',
      description:
        'Linguagem declarativa para descrever modelos e dados de otimizacao para solvers matematicos.',
      longDescription:
        'AMPL e uma linguagem de modelagem para otimizacao linear, nao linear, inteira e com restricoes. Ela permite expressar conjuntos, parametros, variaveis, objetivos e restricoes perto da notacao matematica.\n\nA linguagem e usada em pesquisa operacional, logistica, planejamento energetico, financas e escalonamento industrial. AMPL separa a estrutura do modelo dos dados e se conecta a muitos solvers comerciais e abertos.',
    },
  },
} satisfies Language;
