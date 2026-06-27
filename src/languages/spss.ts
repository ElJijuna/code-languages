import type { Language } from '../types';

export const spss = {
  slug: 'spss',
  publishedDate: '1968-01-01',
  extensions: ['.sps', '.spss'],
  author: 'IBM SPSS Statistics',
  website: 'https://www.ibm.com/spss',
  paradigms: ['procedural', 'statistical', 'declarative'],
  tooling: {
    runtimes: ['SPSS Statistics', 'SPSS Modeler'],
    ecosystems: ['Statistics', 'Data Analysis', 'Social Sciences', 'Business Intelligence'],
  },
  version: '29.0',
  logo: 'https://dummyimage.com/32x32/052FAD/ffffff.png&text=SPSS',
  color: '#052FAD',
  i18n: {
    en: {
      name: 'SPSS',
      description:
        'A statistical software language for data management, analysis, and predictive modeling.',
      longDescription:
        'SPSS (Statistical Package for the Social Sciences) is a software suite and syntax language for statistical analysis widely used in academic research, market research, health studies, and government data analysis. Its command syntax allows users to automate data transformations, run descriptive statistics, hypothesis tests, regression models, and produce publication-ready output.\n\nOriginally developed at Stanford in 1968 and now owned by IBM, SPSS combines a graphical interface with a procedural scripting language. The syntax files enable reproducible analyses and batch processing, making it a staple tool in the social, behavioral, and health sciences.',
    },
    es: {
      name: 'SPSS',
      description:
        'Lenguaje estadistico para gestion de datos, analisis y modelado predictivo en ciencias sociales.',
      longDescription:
        'SPSS (Paquete Estadistico para Ciencias Sociales) es una suite de software y lenguaje de sintaxis para analisis estadistico ampliamente utilizado en investigacion academica, investigacion de mercados, estudios de salud y analisis gubernamental. Su sintaxis permite automatizar transformaciones de datos, estadisticas descriptivas, pruebas de hipotesis, modelos de regresion y producir informes publicables.\n\nDesarrollado originalmente en Stanford en 1968 y actualmente propiedad de IBM, SPSS combina una interfaz grafica con un lenguaje de scripting procedural. Los archivos de sintaxis permiten analisis reproducibles y procesamiento por lotes, siendo una herramienta fundamental en ciencias sociales, conductuales y de la salud.',
    },
    it: {
      name: 'SPSS',
      description:
        'Linguaggio statistico per la gestione dei dati, l analisi e la modellazione predittiva.',
      longDescription:
        'SPSS (Statistical Package for the Social Sciences) e una suite software e linguaggio di sintassi per l analisi statistica ampiamente usato nella ricerca accademica, di mercato, sanitaria e governativa. La sua sintassi consente di automatizzare trasformazioni dei dati, statistiche descrittive, test di ipotesi, modelli di regressione e output pronti per la pubblicazione.\n\nSviluppato originariamente a Stanford nel 1968 e ora di proprieta IBM, SPSS combina un interfaccia grafica con un linguaggio di scripting procedurale. I file di sintassi abilitano analisi riproducibili ed elaborazione batch, rendendolo uno strumento fondamentale nelle scienze sociali, comportamentali e della salute.',
    },
    fr: {
      name: 'SPSS',
      description:
        'Langage statistique pour la gestion des donnees, l analyse et la modelisation predictive.',
      longDescription:
        'SPSS (Statistical Package for the Social Sciences) est une suite logicielle et un langage de syntaxe pour l analyse statistique largement utilise dans la recherche academique, les etudes de marche, la sante et l analyse gouvernementale. Sa syntaxe permet d automatiser les transformations de donnees, les statistiques descriptives, les tests d hypotheses, les modeles de regression et produire des sorties publiables.\n\nDeveloppe a l origine a Stanford en 1968 et maintenant detenu par IBM, SPSS combine une interface graphique avec un langage de script procedural. Les fichiers de syntaxe permettent des analyses reproductibles et un traitement par lots, en faisant un outil incontournable dans les sciences sociales, comportementales et de la sante.',
    },
    de: {
      name: 'SPSS',
      description:
        'Statistische Softwaresprache fur Datenverwaltung, Analyse und pradiktive Modellierung.',
      longDescription:
        'SPSS (Statistical Package for the Social Sciences) ist eine Softwaresuite und Syntaxsprache fur statistische Analysen, die in akademischer Forschung, Marktforschung, Gesundheitsstudien und Regierungsanalysen weit verbreitet ist. Die Befehlssyntax ermoglicht die Automatisierung von Datentransformationen, deskriptiver Statistik, Hypothesentests, Regressionsmodellen und publikationsreifen Ausgaben.\n\nUrsprunglich 1968 an der Stanford University entwickelt und jetzt im Besitz von IBM, kombiniert SPSS eine grafische Oberflache mit einer prozeduralen Skriptsprache. Syntaxdateien ermoglichen reproduzierbare Analysen und Stapelverarbeitung, was SPSS zu einem unverzichtbaren Werkzeug in den Sozial-, Verhaltens- und Gesundheitswissenschaften macht.',
    },
    pt: {
      name: 'SPSS',
      description:
        'Linguagem estatistica para gestao de dados, analise e modelagem preditiva em ciencias sociais.',
      longDescription:
        'SPSS (Statistical Package for the Social Sciences) e uma suite de software e linguagem de sintaxe para analise estatistica amplamente utilizada em pesquisa academica, pesquisa de mercado, estudos de saude e analise governamental. Sua sintaxe permite automatizar transformacoes de dados, estatisticas descritivas, testes de hipoteses, modelos de regressao e producao de saidas publicaveis.\n\nDesenvolvido originalmente em Stanford em 1968 e agora de propriedade da IBM, o SPSS combina uma interface grafica com uma linguagem de scripting procedural. Os arquivos de sintaxe permitem analises reproduziveis e processamento em lote, tornando-o uma ferramenta essencial nas ciencias sociais, comportamentais e da saude.',
    },
  },
} satisfies Language;
