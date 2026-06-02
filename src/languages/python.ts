import type { Language } from '../types';

export const python = {
  slug: 'python',
  publishedDate: '1991-02-20',
  extensions: ['.py', '.pyw'],
  author: 'Guido van Rossum',
  website: 'https://www.python.org',
  paradigms: ['object-oriented', 'functional', 'imperative', 'procedural'],
  tooling: {
    runtimes: ['CPython', 'PyPy'],
    packageManagers: ['pip', 'Poetry', 'uv', 'conda'],
    ecosystems: ['Web', 'Data Science', 'Machine Learning', 'Automation'],
  },
  version: '3.14.5',
  logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Python-logo-notext.svg',
  color: '#3776AB',
  i18n: {
    en: {
      name: 'Python',
      description:
        'A high-level, readable language used for applications, automation, data, and AI.',
      longDescription:
        'Python emphasizes readability, a compact syntax, and a broad standard library, making it popular for scripting, backend services, data analysis, education, and scientific computing.\n\nIts ecosystem includes major frameworks and packages for web development, automation, machine learning, numerical computing, testing, and command-line tooling.',
    },
    es: {
      name: 'Python',
      description:
        'Un lenguaje de alto nivel y legible usado en aplicaciones, automatizacion, datos e IA.',
      longDescription:
        'Python enfatiza la legibilidad, una sintaxis compacta y una biblioteca estandar amplia, lo que lo hace popular para scripting, servicios backend, analisis de datos, educacion y computacion cientifica.\n\nSu ecosistema incluye frameworks y paquetes importantes para desarrollo web, automatizacion, machine learning, computacion numerica, testing y herramientas de linea de comandos.',
    },
    it: {
      name: 'Python',
      description:
        'Un linguaggio di alto livello, leggibile, utilizzato per applicazioni, automazione, dati e IA.',
      longDescription:
        "Python enfatizza la leggibilita, una sintassi compatta e una vasta libreria standard, rendendolo popolare per la scripting, i servizi backend, l'analisi dei dati, l'istruzione e il calcolo scientifico.\n\nIl suo ecosistema include framework e pacchetti principali per lo sviluppo web, l'automazione, l'apprendimento automatico, il calcolo numerico, i test e gli strumenti a riga di comando.",
    },
    fr: {
      name: 'Python',
      description:
        "Un langage de haut niveau, lisible, utilise pour les applications, l'automatisation, les donnees et l'IA.",
      longDescription:
        "Python met l'accent sur la lisibilite, une syntaxe concise et une vaste bibliotheque standard, ce qui le rend populaire pour le script, les services backend, l'analyse de donnees, l'education et le calcul scientifique.\n\nSon ecosysteme comprend des frameworks et des packages majeurs pour le developpement web, l'automatisation, l'apprentissage automatique, le calcul numerique, les tests et les outils en ligne de commande.",
    },
    de: {
      name: 'Python',
      description:
        'Eine hochrangige, leicht verst\u00e4ndliche Sprache f\u00fcr Anwendungen, Automatisierung, Daten und KI.',
      longDescription:
        'Python legt Wert auf Lesbarkeit, eine kompakte Syntax und eine umfangreiche Standardbibliothek, was es beliebt f\u00fcr Skripting, Backend-Dienste, Datenanalyse, Bildung und wissenschaftliche Berechnungen macht.\n\nEs umfasst wichtige Frameworks und Pakete f\u00fcr Webentwicklung, Automatisierung, maschinelles Lernen, numerische Berechnungen, Tests und Kommandozeilen-Tools.',
    },
    pt: {
      name: 'Python',
      description:
        'Linguagem de alto n\u00edvel, f\u00e1cil de ler, usada para aplica\u00e7\u00f5es, automa\u00e7\u00e3o, dados e IA.',
      longDescription:
        'O Python enfatiza a legibilidade, uma sintaxe compacta e uma vasta biblioteca padr\u00e3o, tornando-o popular para scripting, servi\u00e7os backend, an\u00e1lise de dados, educa\u00e7\u00e3o e computa\u00e7\u00e3o cient\u00edfica.\n\nSeu ecossistema inclui frameworks e pacotes importantes para desenvolvimento web, automa\u00e7\u00e3o, aprendizado de m\u00e1quina, computa\u00e7\u00e3o num\u00e9rica, testes e ferramentas de linha de comando.',
    },
  },
} satisfies Language;
