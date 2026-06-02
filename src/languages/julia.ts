import type { Language } from '../types';

export const julia = {
  slug: 'julia',
  publishedDate: '2012-02-14',
  extensions: ['.jl'],
  author: 'Jeff Bezanson, Stefan Karpinski, Viral B. Shah, Alan Edelman',
  website: 'https://julialang.org',
  paradigms: ['multiple-dispatch', 'functional', 'imperative', 'metaprogramming'],
  tooling: {
    runtimes: ['Julia'],
    packageManagers: ['Pkg'],
    ecosystems: ['Scientific Computing', 'Data Science', 'Machine Learning', 'HPC'],
  },
  version: '1.12.6',
  logo: 'https://cdn.simpleicons.org/julia/9558B2',
  color: '#9558B2',
  i18n: {
    en: {
      name: 'Julia',
      description:
        'A high-performance language for technical computing, data science, and numerical work.',
      longDescription:
        'Julia is a high-level, high-performance programming language designed for numerical and scientific computing. It combines dynamic interactivity with just-in-time compilation, multiple dispatch, metaprogramming, and a package ecosystem focused on technical work.\n\nIt is widely used for scientific computing, data analysis, machine learning, optimization, simulations, high-performance computing, and workflows where teams want expressive code that can run close to native speed.',
    },
    es: {
      name: 'Julia',
      description:
        'Un lenguaje de alto rendimiento para computacion tecnica, ciencia de datos y trabajo numerico.',
      longDescription:
        'Julia es un lenguaje de programacion de alto nivel y alto rendimiento disenado para computacion numerica y cientifica. Combina interactividad dinamica con compilacion just-in-time, multiple dispatch, metaprogramacion y un ecosistema de paquetes enfocado en trabajo tecnico.\n\nSe usa ampliamente en computacion cientifica, analisis de datos, machine learning, optimizacion, simulaciones, computacion de alto rendimiento y flujos donde los equipos quieren codigo expresivo que pueda ejecutarse cerca de velocidad nativa.',
    },
    it: {
      name: 'Julia',
      description:
        'Un linguaggio ad alte prestazioni per il calcolo tecnico, la scienza dei dati e il lavoro numerico.',
      longDescription:
        "Julia e un linguaggio di programmazione di alto livello e ad alte prestazioni progettato per il calcolo numerico e scientifico. Combina l'interattivita dinamica con la compilazione just-in-time, la moltiplicazione, la metaprogrammazione e un ecosistema di pacchetti incentrato sul lavoro tecnico.\n\nE ampiamente utilizzato per il calcolo scientifico, l'analisi dei dati, l'apprendimento automatico, l'ottimizzazione, le simulazioni, il calcolo ad alte prestazioni e i flussi di lavoro in cui i team desiderano codice espressivo che possa essere eseguito a velocita vicine a quella nativa.",
    },
    fr: {
      name: 'Julia',
      description:
        'Un langage de haut niveau pour le calcul technique, la science des donnees et le travail numerique.',
      longDescription:
        "Julia est un langage de programmation de haut niveau et de haute performance concu pour le calcul et la science numeriques. Il combine l'interactivite dynamique avec la compilation au moment de l'execution, la gestion multiple, la meta-programmation et un ecosysteme de paquets axe sur le travail technique.\n\nIl est largement utilise pour le calcul scientifique, l'analyse de donnees, l'apprentissage automatique, l'optimisation, les simulations, le calcul haute performance et les flux de travail ou les equipes souhaitent un code expressif qui peut s'executer a une vitesse proche de celle du natif.",
    },
    de: {
      name: 'Julia',
      description:
        'Eine leistungsstarke Sprache f\u00fcr technische Berechnungen, Data Science und numerische Arbeit.',
      longDescription:
        'Julia ist eine hochleistungsf\u00e4hige, High-Level-Programmiersprache, die f\u00fcr numerische und wissenschaftliche Berechnungen entwickelt wurde. Sie kombiniert dynamische Interaktivit\u00e4t mit Just-in-Time-Kompilierung, Mehrfachdispatch, Metaprogrammierung und ein Paket\u00f6kosystem, das auf technische Anwendungen ausgerichtet ist.\n\nSie wird h\u00e4ufig f\u00fcr wissenschaftliche Berechnungen, Datenanalyse, maschinelles Lernen, Optimierung, Simulationen, Hochleistungsrechnen und Arbeitsabl\u00e4ufe verwendet, bei denen Teams Code w\u00fcnschen, der nahe an der Geschwindigkeit von nativen Anwendungen ausgef\u00fchrt werden kann.',
    },
    pt: {
      name: 'Julia',
      description:
        'Linguagem de alto desempenho para computa\u00e7\u00e3o t\u00e9cnica, ci\u00eancia de dados e trabalho num\u00e9rico.',
      longDescription:
        'Julia \u00e9 uma linguagem de programa\u00e7\u00e3o de alto n\u00edvel e alto desempenho, projetada para computa\u00e7\u00e3o e ci\u00eancia num\u00e9rica. Combina interatividade din\u00e2mica com compila\u00e7\u00e3o just-in-time, despacho m\u00faltiplo, metaprograma\u00e7\u00e3o e um ecossistema de pacotes focado em trabalho t\u00e9cnico.\n\n\u00c9 amplamente utilizada para computa\u00e7\u00e3o cient\u00edfica, an\u00e1lise de dados, aprendizado de m\u00e1quina, otimiza\u00e7\u00e3o, simula\u00e7\u00f5es, computa\u00e7\u00e3o de alto desempenho e fluxos de trabalho onde as equipes desejam c\u00f3digo expressivo que possa executar pr\u00f3ximo \u00e0 velocidade nativa.',
    },
  },
} satisfies Language;
