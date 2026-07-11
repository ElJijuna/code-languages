import type { Language } from '@/types';

export const cobol = {
  slug: 'cobol',
  publishedDate: '1959-12-18',
  extensions: ['.cob', '.cbl', '.cobol', '.cpy'],
  author: 'CODASYL',
  website: 'https://www.iso.org/standard/74527.html',
  paradigms: ['imperative', 'object-oriented', 'procedural', 'structured'],
  tooling: {
    runtimes: ['IBM Enterprise COBOL', 'GnuCOBOL', 'Micro Focus COBOL'],
    ecosystems: ['Mainframe', 'Business applications', 'Transaction processing'],
  },
  version: 'ISO/IEC 1989:2023',
  logo: 'https://logo.svgcdn.com/devicon/cobol-original.png',
  color: '#005CA5',
  i18n: {
    en: {
      name: 'COBOL',
      description: 'A business-oriented language for long-lived, data-heavy enterprise systems.',
      longDescription:
        'COBOL is a business-oriented programming language created by CODASYL for readable, portable data processing across commercial computing systems. Its syntax emphasizes English-like statements, structured records, decimal arithmetic, batch processing, and report-oriented workflows.\n\nIt is used in banking, insurance, government, payroll, transaction processing, mainframe systems, and modernization projects where large, durable business codebases continue to run critical operations.',
    },
    es: {
      name: 'COBOL',
      description:
        'Un lenguaje orientado al negocio para sistemas empresariales duraderos y centrados en datos.',
      longDescription:
        'COBOL es un lenguaje de programacion orientado al negocio creado por CODASYL para procesamiento de datos legible y portable en sistemas comerciales. Su sintaxis prioriza sentencias similares al ingles, registros estructurados, aritmetica decimal, procesamiento por lotes y flujos orientados a reportes.\n\nSe usa en banca, seguros, gobierno, nominas, procesamiento transaccional, sistemas mainframe y proyectos de modernizacion donde grandes bases de codigo empresarial siguen ejecutando operaciones criticas.',
    },
    it: {
      name: 'COBOL',
      description:
        'Un linguaggio orientato al business per sistemi aziendali di lunga durata e ad alta intensita di dati.',
      longDescription:
        "COBOL e un linguaggio di programmazione orientato al business creato da CODASYL per l'elaborazione dati leggibile e portabile su sistemi di calcolo commerciali. La sua sintassi enfatizza istruzioni simili all'inglese, record strutturati, aritmetica decimale, elaborazione in batch e flussi di lavoro orientati ai report.\n\nE utilizzato in banche, assicurazioni, governo, elaborazione stipendi, elaborazione transazioni, sistemi mainframe e progetti di modernizzazione in cui ampi e duraturi codebase aziendali continuano a eseguire operazioni critiche.",
    },
    fr: {
      name: 'COBOL',
      description:
        "Un langage oriente entreprise pour les systemes d'entreprise a longue duree de vie et riches en donnees.",
      longDescription:
        "COBOL est un langage de programmation oriente entreprise cree par CODASYL pour le traitement de donnees portable et lisible sur les systemes informatiques commerciaux. Sa syntaxe met l'accent sur des instructions similaires a l'anglais, des enregistrements structures, l'arithmetique decimale, le traitement par lots et des flux de travail orientes rapports.\n\nIl est utilise dans les banques, les assurances, le secteur public, la paie, le traitement des transactions, les systemes mainframe et les projets de modernisation ou de grandes bases de code d'entreprise continuent de faire fonctionner des operations critiques.",
    },
    de: {
      name: 'COBOL',
      description:
        'Ein geschäftsorientiertes Sprach für langlebige, datenintensive Unternehmenssysteme.',
      longDescription:
        'COBOL ist eine geschäftsorientierte Programmiersprache, die von CODASYL für lesbaren, portablen Datenverarbeitung in kommerziellen Computersystemen entwickelt wurde. Ihre Syntax betont englischähnliche Anweisungen, strukturierte Datensätze, Dezimalarithmetik, Batch-Verarbeitung und reportorientierte Arbeitsabläufe.\n\nEs wird in Banken, Versicherungen, Regierung, Gehaltsabrechnung, Transaktionsverarbeitung, Mainframe-Systemen und Modernisierungsprojekten eingesetzt, in denen große, dauerhafte Geschäftsprogrammen weiterhin kritische Operationen ausführen.',
    },
    pt: {
      name: 'COBOL',
      description:
        'Linguagem de negócios para sistemas empresariais de longa duração e com grande volume de dados.',
      longDescription:
        'COBOL é uma linguagem de programação de negócios criada pela CODASYL para processamento de dados legível e portátil em sistemas de computação comerciais. Sua sintaxe enfatiza declarações semelhantes ao inglês, registros estruturados, aritmética decimal, processamento em lote e fluxos de trabalho orientados a relatórios.\n\nÉ utilizada em bancos, seguros, governo, folha de pagamento, processamento de transações, sistemas mainframe e projetos de modernização onde grandes e duráveis bases de código de negócios continuam a executar operações críticas.',
    },
  },
} satisfies Language;
