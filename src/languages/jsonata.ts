import type { Language } from '@/types';

export const jsonata = {
  slug: 'jsonata',
  publishedDate: '2016-01-01',
  extensions: ['.jsonata'],
  author: 'IBM',
  website: 'https://jsonata.org',
  paradigms: ['query', 'functional'],
  tooling: {
    runtimes: ['JSONata engine'],
    ecosystems: ['JSON', 'Low-code automation'],
  },
  version: 'stable',
  logo: 'https://jsonata.org/images/jsonata-button.png',
  color: '#D23669',
  i18n: {
    en: {
      name: 'JSONata',
      description: 'A functional query and transformation language for JSON documents.',
      longDescription:
        'JSONata is a compact expression language for querying and transforming JSON data. It combines path navigation, predicates, operators, variables, functions, object construction, grouping, and aggregation.\n\nThe language is used in integration tools, message processing, automation platforms, and applications that need declarative JSON reshaping. Its functional features make complex transformations possible without writing a full host-language program.',
    },
    es: {
      name: 'JSONata',
      description: 'Lenguaje funcional de consulta y transformacion para documentos JSON.',
      longDescription:
        'JSONata es un lenguaje compacto de expresiones para consultar y transformar datos JSON. Combina navegacion por rutas, predicados, operadores, variables, funciones, construccion de objetos, agrupacion y agregacion.\n\nEl lenguaje se usa en herramientas de integracion, procesamiento de mensajes, plataformas de automatizacion y apps que necesitan remodelar JSON de forma declarativa. Sus rasgos funcionales permiten transformaciones complejas sin escribir un programa completo en el lenguaje anfitrion.',
    },
    it: {
      name: 'JSONata',
      description: 'Linguaggio funzionale di query e trasformazione per documenti JSON.',
      longDescription:
        'JSONata e un linguaggio compatto di espressioni per interrogare e trasformare dati JSON. Combina navigazione per percorsi, predicati, operatori, variabili, funzioni, costruzione di oggetti, raggruppamento e aggregazione.\n\nIl linguaggio e usato in strumenti di integrazione, elaborazione messaggi, piattaforme di automazione e app che richiedono rimodellamento JSON dichiarativo. Le sue funzioni rendono possibili trasformazioni complesse senza scrivere un programma completo nel linguaggio host.',
    },
    fr: {
      name: 'JSONata',
      description: 'Langage fonctionnel de requete et transformation pour documents JSON.',
      longDescription:
        'JSONata est un langage d expressions compact pour interroger et transformer des donnees JSON. Il combine navigation par chemins, predicats, operateurs, variables, fonctions, construction d objets, groupement et agregation.\n\nLe langage est utilise dans outils d integration, traitement de messages, plateformes d automatisation et apps qui doivent remodeler JSON declarativement. Ses fonctions permettent des transformations complexes sans ecrire un programme complet dans le langage hote.',
    },
    de: {
      name: 'JSONata',
      description: 'Funktionale Abfrage- und Transformationssprache fur JSON-Dokumente.',
      longDescription:
        'JSONata ist eine kompakte Ausdruckssprache zum Abfragen und Transformieren von JSON-Daten. Sie kombiniert Pfadnavigation, Pradikate, Operatoren, Variablen, Funktionen, Objektaufbau, Gruppierung und Aggregation.\n\nDie Sprache wird in Integrationswerkzeugen, Nachrichtenverarbeitung, Automationsplattformen und Anwendungen genutzt, die JSON deklarativ umformen mussen. Ihre funktionalen Eigenschaften ermoglichen komplexe Transformationen ohne ein vollstandiges Hostsprachen-Programm.',
    },
    pt: {
      name: 'JSONata',
      description: 'Linguagem funcional de consulta e transformacao para documentos JSON.',
      longDescription:
        'JSONata e uma linguagem compacta de expressoes para consultar e transformar dados JSON. Ela combina navegacao por caminhos, predicados, operadores, variaveis, funcoes, construcao de objetos, agrupamento e agregacao.\n\nA linguagem e usada em ferramentas de integracao, processamento de mensagens, plataformas de automacao e apps que precisam remodelar JSON de forma declarativa. Seus recursos funcionais permitem transformacoes complexas sem escrever um programa completo na linguagem hospedeira.',
    },
  },
} satisfies Language;
