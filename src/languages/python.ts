import type { Language } from '@/types';

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
  version: '3.14.6',
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
        'Eine hochrangige, leicht verständliche Sprache für Anwendungen, Automatisierung, Daten und KI.',
      longDescription:
        'Python legt Wert auf Lesbarkeit, eine kompakte Syntax und eine umfangreiche Standardbibliothek, was es beliebt für Skripting, Backend-Dienste, Datenanalyse, Bildung und wissenschaftliche Berechnungen macht.\n\nEs umfasst wichtige Frameworks und Pakete für Webentwicklung, Automatisierung, maschinelles Lernen, numerische Berechnungen, Tests und Kommandozeilen-Tools.',
    },
    pt: {
      name: 'Python',
      description:
        'Linguagem de alto nível, fácil de ler, usada para aplicações, automação, dados e IA.',
      longDescription:
        'O Python enfatiza a legibilidade, uma sintaxe compacta e uma vasta biblioteca padrão, tornando-o popular para scripting, serviços backend, análise de dados, educação e computação científica.\n\nSeu ecossistema inclui frameworks e pacotes importantes para desenvolvimento web, automação, aprendizado de máquina, computação numérica, testes e ferramentas de linha de comando.',
    },
  },
} satisfies Language;
