import type { Language } from '../types';

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
        'Ein gesch\u00e4ftsorientiertes Sprach f\u00fcr langlebige, datenintensive Unternehmenssysteme.',
      longDescription:
        'COBOL ist eine gesch\u00e4ftsorientierte Programmiersprache, die von CODASYL f\u00fcr lesbaren, portablen Datenverarbeitung in kommerziellen Computersystemen entwickelt wurde. Ihre Syntax betont englisch\u00e4hnliche Anweisungen, strukturierte Datens\u00e4tze, Dezimalarithmetik, Batch-Verarbeitung und reportorientierte Arbeitsabl\u00e4ufe.\n\nEs wird in Banken, Versicherungen, Regierung, Gehaltsabrechnung, Transaktionsverarbeitung, Mainframe-Systemen und Modernisierungsprojekten eingesetzt, in denen gro\u00dfe, dauerhafte Gesch\u00e4ftsprogrammen weiterhin kritische Operationen ausf\u00fchren.',
    },
    pt: {
      name: 'COBOL',
      description:
        'Linguagem de neg\u00f3cios para sistemas empresariais de longa dura\u00e7\u00e3o e com grande volume de dados.',
      longDescription:
        'COBOL \u00e9 uma linguagem de programa\u00e7\u00e3o de neg\u00f3cios criada pela CODASYL para processamento de dados leg\u00edvel e port\u00e1til em sistemas de computa\u00e7\u00e3o comerciais. Sua sintaxe enfatiza declara\u00e7\u00f5es semelhantes ao ingl\u00eas, registros estruturados, aritm\u00e9tica decimal, processamento em lote e fluxos de trabalho orientados a relat\u00f3rios.\n\n\u00c9 utilizada em bancos, seguros, governo, folha de pagamento, processamento de transa\u00e7\u00f5es, sistemas mainframe e projetos de moderniza\u00e7\u00e3o onde grandes e dur\u00e1veis bases de c\u00f3digo de neg\u00f3cios continuam a executar opera\u00e7\u00f5es cr\u00edticas.',
    },
  },
} satisfies Language;
