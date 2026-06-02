import type { Language } from '../types';

export const matlab = {
  slug: 'matlab',
  publishedDate: '1984-01-01',
  extensions: ['.m', '.mlx'],
  author: 'MathWorks',
  website: 'https://www.mathworks.com/products/matlab.html',
  paradigms: ['array-oriented', 'imperative', 'object-oriented', 'procedural'],
  tooling: {
    runtimes: ['MATLAB'],
    packageManagers: ['MATLAB Add-On Explorer'],
    ecosystems: ['Scientific Computing', 'Numerical Computing', 'Engineering', 'Simulink'],
  },
  version: 'R2026a',
  logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Matlab_Logo.png',
  color: '#E16737',
  i18n: {
    en: {
      name: 'MATLAB',
      description:
        'A matrix-oriented language and environment for engineering, science, data, and simulation.',
      longDescription:
        'MATLAB is a programming language and numerical computing environment from MathWorks. It is centered on matrix and array operations, interactive analysis, visualization, algorithm development, and workflows for engineers and scientists.\n\nIt is commonly used for signal processing, control systems, robotics, data analysis, optimization, simulation, education, and model-based design alongside Simulink and MathWorks toolboxes.',
    },
    es: {
      name: 'MATLAB',
      description:
        'Un lenguaje y entorno orientado a matrices para ingenieria, ciencia, datos y simulacion.',
      longDescription:
        'MATLAB es un lenguaje de programacion y entorno de computacion numerica de MathWorks. Esta centrado en operaciones con matrices y arreglos, analisis interactivo, visualizacion, desarrollo de algoritmos y flujos de trabajo para ingenieros y cientificos.\n\nSe usa comunmente en procesamiento de senales, sistemas de control, robotica, analisis de datos, optimizacion, simulacion, educacion y diseno basado en modelos junto con Simulink y las toolboxes de MathWorks.',
    },
    it: {
      name: 'MATLAB',
      description:
        "Un linguaggio e un ambiente orientato alle matrici per l'ingegneria, la scienza, i dati e la simulazione.",
      longDescription:
        "MATLAB e un linguaggio di programmazione e un ambiente di calcolo numerico di MathWorks. E incentrato sulle operazioni di matrici e array, sull'analisi interattiva, sulla visualizzazione, sullo sviluppo di algoritmi e sui flussi di lavoro per ingegneri e scienziati.\n\nE comunemente utilizzato per l'elaborazione del segnale, i sistemi di controllo, la robotica, l'analisi dei dati, l'ottimizzazione, la simulazione, l'istruzione e la progettazione basata su modelli insieme a Simulink e alle toolbox di MathWorks.",
    },
    fr: {
      name: 'MATLAB',
      description:
        "Un langage et un environnement orientes sur les matrices pour l'ingenierie, la science, les donnees et la simulation.",
      longDescription:
        "MATLAB est un langage de programmation et un environnement de calcul numerique de MathWorks. Il est centre sur les operations matricielles et sur les tableaux, l'analyse interactive, la visualisation, le developpement d'algorithmes et les flux de travail pour les ingenieurs et les scientifiques.\n\nIl est couramment utilise pour le traitement du signal, les systemes de controle, la robotique, l'analyse de donnees, l'optimisation, la simulation, l'education et la conception basee sur des modeles, ainsi que Simulink et les boites a outils MathWorks.",
    },
    de: {
      name: 'MATLAB',
      description:
        'Eine matrixorientierte Sprache und Umgebung f\u00fcr Ingenieurwesen, Wissenschaft, Daten und Simulation.',
      longDescription:
        'MATLAB ist eine Programmiersprache und numerische Rechenumgebung von MathWorks. Sie basiert auf Matrix- und Array-Operationen, interaktiver Analyse, Visualisierung, Algorithmusentwicklung und Arbeitsabl\u00e4ufen f\u00fcr Ingenieure und Wissenschaftler.\n\nSie wird h\u00e4ufig f\u00fcr Signalverarbeitung, Steuerungssysteme, Robotik, Datenanalyse, Optimierung, Simulation, Ausbildung und modellbasierte Entwicklung zusammen mit Simulink und MathWorks-Toolboxen verwendet.',
    },
    pt: {
      name: 'MATLAB',
      description:
        'Linguagem e ambiente orientados a matrizes para engenharia, ci\u00eancia, dados e simula\u00e7\u00e3o.',
      longDescription:
        'MATLAB \u00e9 uma linguagem de programa\u00e7\u00e3o e ambiente de computa\u00e7\u00e3o num\u00e9rica da MathWorks. \u00c9 centrado em opera\u00e7\u00f5es de matrizes e arrays, an\u00e1lise interativa, visualiza\u00e7\u00e3o, desenvolvimento de algoritmos e fluxos de trabalho para engenheiros e cientistas.\n\n\u00c9 comumente usado para processamento de sinais, sistemas de controle, rob\u00f3tica, an\u00e1lise de dados, otimiza\u00e7\u00e3o, simula\u00e7\u00e3o, educa\u00e7\u00e3o e design baseado em modelos, juntamente com Simulink e toolboxes da MathWorks.',
    },
  },
} satisfies Language;
