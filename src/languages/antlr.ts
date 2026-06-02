import type { Language } from '../types';

export const antlr = {
  slug: 'antlr',
  publishedDate: '1989-02-01',
  extensions: ['.g4'],
  author: 'Terence Parr',
  website: 'https://www.antlr.org',
  paradigms: ['declarative', 'grammar', 'parser generation'],
  tooling: {
    runtimes: ['ANTLR Tool', 'ANTLR Runtime'],
    packageManagers: ['Maven', 'npm', 'NuGet', 'pip'],
    ecosystems: ['Compilers', 'Language Tools', 'Static Analysis'],
  },
  version: '4.13.2',
  logo: 'https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_antlr.svg',
  color: '#9DC3FF',
  i18n: {
    en: {
      name: 'ANTLR Grammar',
      description:
        'A grammar notation used with ANTLR to generate lexers, parsers, and language tools.',
      longDescription:
        'ANTLR grammars describe lexical tokens and parser rules for programming languages, data formats, query languages, and domain-specific syntaxes.\n\nThe generated parsers are used in compilers, interpreters, code analyzers, migration tools, editors, and other systems that need structured language recognition.',
    },
    es: {
      name: 'ANTLR Grammar',
      description:
        'Una notacion de gramaticas usada con ANTLR para generar lexers, parsers y herramientas de lenguaje.',
      longDescription:
        'Las gramaticas ANTLR describen tokens lexicos y reglas de parser para lenguajes de programacion, formatos de datos, lenguajes de consulta y sintaxis especificas de dominio.\n\nLos parsers generados se usan en compiladores, interpretes, analizadores de codigo, herramientas de migracion, editores y otros sistemas que necesitan reconocer lenguajes de forma estructurada.',
    },
    it: {
      name: 'ANTLR Grammar',
      description:
        'Una notazione grammaticale utilizzata con ANTLR per generare lexer, parser e strumenti linguistici.',
      longDescription:
        'Le grammatiche ANTLR descrivono i token lessicali e le regole del parser per i linguaggi di programmazione, i formati di dati, i linguaggi di query e le sintassi specifiche del dominio.\n\nI parser generati vengono utilizzati in compilatori, interpreti, analizzatori di codice, strumenti di migrazione, editor e altri sistemi che necessitano di riconoscimento strutturato del linguaggio.',
    },
    fr: {
      name: 'ANTLR Grammar',
      description:
        'Une notation de grammaire utilisee avec ANTLR pour generer des analyseurs lexiques, des analyseurs syntaxiques et des outils de langage.',
      longDescription:
        'Les grammaires ANTLR decrivent les jetons lexicaux et les regles de syntaxe pour les langages de programmation, les formats de donnees, les langages de requete et les syntaxes specifiques a un domaine.\n\nLes analyseurs generes sont utilises dans les compilateurs, les interpreteurs, les analyseurs de code, les outils de migration, les editeurs et autres systemes qui ont besoin de reconnaitre des langages structures.',
    },
    de: {
      name: 'ANTLR Grammar',
      description:
        'Grammatiknotation f\u00fcr ANTLR zur Generierung von Lexern, Parsern und Sprachwerkzeugen.',
      longDescription:
        'ANTLR-Grammatiken beschreiben lexikalische Token und Parserregeln f\u00fcr Programmiersprachen, Datenformate, Abfragesprachen und dom\u00e4nenspezifische Syntaxen.\n\nDie generierten Parser werden in Compilern, Interpretern, Code-Analysatoren, Migrationswerkzeugen, Editoren und anderen Systemen verwendet, die strukturierte Spracherkennung ben\u00f6tigen.',
    },
    pt: {
      name: 'ANTLR Grammar',
      description:
        'Nota\u00e7\u00e3o gramatical usada com ANTLR para gerar lexers, parsers e ferramentas de linguagem.',
      longDescription:
        'As gram\u00e1ticas ANTLR descrevem tokens lexicais e regras de an\u00e1lise para linguagens de programa\u00e7\u00e3o, formatos de dados, linguagens de consulta e sintaxes espec\u00edficas de dom\u00ednio.\n\nOs parsers gerados s\u00e3o usados em compiladores, interpretadores, analisadores de c\u00f3digo, ferramentas de migra\u00e7\u00e3o, editores e outros sistemas que precisam de reconhecimento estruturado de linguagem.',
    },
  },
} satisfies Language;
