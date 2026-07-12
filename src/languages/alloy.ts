import type { Language } from '@/types';

export const alloy = {
  slug: 'alloy',
  publishedDate: '2002-01-01',
  extensions: ['.als'],
  author: 'Daniel Jackson / MIT',
  website: 'https://alloytools.org',
  paradigms: ['declarative', 'logic', 'formal-methods'],
  tooling: {
    runtimes: ['Alloy Analyzer', 'JVM'],
    ecosystems: ['Formal Methods', 'Verification'],
  },
  version: 'Alloy 6',
  logo: 'https://avatars.githubusercontent.com/u/30268214?v=4',
  color: '#64C800',
  i18n: {
    en: {
      name: 'Alloy',
      description: 'A relational modeling language with a SAT-based analyzer for finding design flaws.',
      longDescription:
        'Alloy is a declarative modeling language based on relational logic, created by Daniel Jackson at MIT. Models describe structures and constraints; the Alloy Analyzer exhaustively searches bounded scopes with a SAT solver to find counterexamples, and Alloy 6 adds temporal operators for modeling system behavior over time.\n\nAlloy is used to check software designs, security protocols, and data models before implementation, catching subtle flaws that testing rarely reaches.',
    },
    es: {
      name: 'Alloy',
      description: 'Un lenguaje de modelado relacional con un analizador basado en SAT para hallar fallos de diseño.',
      longDescription:
        'Alloy es un lenguaje de modelado declarativo basado en lógica relacional, creado por Daniel Jackson en el MIT. Los modelos describen estructuras y restricciones; el Alloy Analyzer busca exhaustivamente en ámbitos acotados con un solucionador SAT para encontrar contraejemplos, y Alloy 6 añade operadores temporales para modelar el comportamiento del sistema en el tiempo.\n\nAlloy se usa para verificar diseños de software, protocolos de seguridad y modelos de datos antes de la implementación, atrapando fallos sutiles que las pruebas rara vez alcanzan.',
    },
    it: {
      name: 'Alloy',
      description: 'Un linguaggio di modellazione relazionale con un analizzatore basato su SAT per trovare difetti di progetto.',
      longDescription:
        "Alloy è un linguaggio di modellazione dichiarativo basato sulla logica relazionale, creato da Daniel Jackson al MIT. I modelli descrivono strutture e vincoli; l'Alloy Analyzer esplora esaustivamente ambiti limitati con un risolutore SAT per trovare controesempi, e Alloy 6 aggiunge operatori temporali per modellare il comportamento del sistema nel tempo.\n\nAlloy è usato per verificare progetti software, protocolli di sicurezza e modelli di dati prima dell'implementazione, catturando difetti sottili che i test raramente raggiungono.",
    },
    fr: {
      name: 'Alloy',
      description: 'Un langage de modélisation relationnelle avec un analyseur SAT pour détecter les défauts de conception.',
      longDescription:
        "Alloy est un langage de modélisation déclaratif fondé sur la logique relationnelle, créé par Daniel Jackson au MIT. Les modèles décrivent structures et contraintes ; l'Alloy Analyzer explore exhaustivement des portées bornées avec un solveur SAT pour trouver des contre-exemples, et Alloy 6 ajoute des opérateurs temporels pour modéliser le comportement des systèmes dans le temps.\n\nAlloy sert à vérifier des conceptions logicielles, des protocoles de sécurité et des modèles de données avant l'implémentation, débusquant des défauts subtils que les tests atteignent rarement.",
    },
    de: {
      name: 'Alloy',
      description: 'Eine relationale Modellierungssprache mit SAT-basiertem Analyzer zum Aufspüren von Designfehlern.',
      longDescription:
        'Alloy ist eine deklarative Modellierungssprache auf Basis relationaler Logik, geschaffen von Daniel Jackson am MIT. Modelle beschreiben Strukturen und Constraints; der Alloy Analyzer durchsucht begrenzte Suchräume erschöpfend mit einem SAT-Solver nach Gegenbeispielen, und Alloy 6 ergänzt temporale Operatoren zur Modellierung von Systemverhalten über die Zeit.\n\nAlloy wird eingesetzt, um Softwaredesigns, Sicherheitsprotokolle und Datenmodelle vor der Implementierung zu prüfen und subtile Fehler zu finden, die Tests selten erreichen.',
    },
    pt: {
      name: 'Alloy',
      description: 'Uma linguagem de modelagem relacional com analisador baseado em SAT para achar falhas de projeto.',
      longDescription:
        'Alloy é uma linguagem de modelagem declarativa baseada em lógica relacional, criada por Daniel Jackson no MIT. Os modelos descrevem estruturas e restrições; o Alloy Analyzer busca exaustivamente em escopos limitados com um resolvedor SAT para encontrar contraexemplos, e o Alloy 6 adiciona operadores temporais para modelar o comportamento do sistema ao longo do tempo.\n\nAlloy é usado para verificar projetos de software, protocolos de segurança e modelos de dados antes da implementação, capturando falhas sutis que os testes raramente alcançam.',
    },
  },
} satisfies Language;
