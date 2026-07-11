import type { Language } from '@/types';

export const spark = {
  slug: 'spark',
  publishedDate: '2009-01-01',
  extensions: ['.spark', '.adb', '.ads'],
  author: 'Altran and AdaCore',
  website: 'https://www.adacore.com/about-spark',
  paradigms: ['imperative', 'object-oriented', 'formal verification'],
  tooling: {
    runtimes: ['GNAT', 'Ada runtimes'],
    ecosystems: ['Ada', 'Embedded', 'Safety-critical software'],
  },
  version: 'SPARK Community 2021',
  logo: 'https://dummyimage.com/32x32/DC2626/ffffff.png&text=SP',
  color: '#DC2626',
  i18n: {
    en: {
      name: 'SPARK',
      description:
        'A formally verifiable Ada-based language for high-integrity and safety-critical software.',
      longDescription:
        'SPARK is a programming language and verification ecosystem based on Ada, designed for software where correctness, safety, and security matter. It restricts and extends Ada with contracts, proof-oriented annotations, and analyzable semantics.\n\nSPARK is used in avionics, defense, embedded systems, industrial control, and other high-integrity domains. Its tooling can prove absence of runtime errors and verify functional properties before code runs.',
    },
    es: {
      name: 'SPARK',
      description:
        'Lenguaje basado en Ada y verificable formalmente para software critico y de alta integridad.',
      longDescription:
        'SPARK es un lenguaje de programacion y ecosistema de verificacion basado en Ada, disenado para software donde importan correccion, seguridad funcional y seguridad informatica. Restringe y extiende Ada con contratos, anotaciones orientadas a pruebas y semantica analizable.\n\nSPARK se usa en avionica, defensa, sistemas embebidos, control industrial y otros dominios de alta integridad. Sus herramientas pueden probar ausencia de errores en tiempo de ejecucion y verificar propiedades funcionales antes de ejecutar el codigo.',
    },
    it: {
      name: 'SPARK',
      description:
        'Linguaggio basato su Ada e verificabile formalmente per software critico e ad alta integrita.',
      longDescription:
        'SPARK e un linguaggio di programmazione e un ecosistema di verifica basato su Ada, progettato per software in cui correttezza, safety e security sono fondamentali. Restringe ed estende Ada con contratti, annotazioni orientate alla prova e semantica analizzabile.\n\nSPARK e usato in avionica, difesa, sistemi embedded, controllo industriale e altri domini ad alta integrita. I suoi strumenti possono provare l assenza di errori a runtime e verificare proprieta funzionali prima dell esecuzione del codice.',
    },
    fr: {
      name: 'SPARK',
      description:
        'Langage base sur Ada, verifiable formellement, pour logiciels critiques et haute integrite.',
      longDescription:
        'SPARK est un langage de programmation et un ecosysteme de verification base sur Ada, concu pour les logiciels ou correction, surete et securite sont essentielles. Il restreint et etend Ada avec des contrats, des annotations orientees preuve et une semantique analysable.\n\nSPARK est utilise dans l avionique, la defense, les systemes embarques, le controle industriel et d autres domaines a haute integrite. Ses outils peuvent prouver l absence d erreurs a l execution et verifier des proprietes fonctionnelles avant que le code ne tourne.',
    },
    de: {
      name: 'SPARK',
      description:
        'Formal verifizierbare Ada-basierte Sprache fur sicherheitskritische High-Integrity-Software.',
      longDescription:
        'SPARK ist eine auf Ada basierende Programmiersprache und Verifikationsumgebung fur Software, bei der Korrektheit, Safety und Security entscheidend sind. Sie beschrankt und erweitert Ada mit Vertragen, beweisorientierten Annotationen und analysierbarer Semantik.\n\nSPARK wird in Avionik, Verteidigung, eingebetteten Systemen, industrieller Steuerung und anderen High-Integrity-Domanen genutzt. Die Werkzeuge konnen Laufzeitfehlerfreiheit beweisen und funktionale Eigenschaften vor der Ausfuhrung verifizieren.',
    },
    pt: {
      name: 'SPARK',
      description:
        'Linguagem baseada em Ada e verificavel formalmente para software critico e de alta integridade.',
      longDescription:
        'SPARK e uma linguagem de programacao e ecossistema de verificacao baseado em Ada, criado para software onde correcao, seguranca funcional e seguranca importam. Ela restringe e estende Ada com contratos, anotacoes orientadas a provas e semantica analisavel.\n\nSPARK e usada em avionica, defesa, sistemas embarcados, controle industrial e outros dominios de alta integridade. Suas ferramentas podem provar ausencia de erros em tempo de execucao e verificar propriedades funcionais antes do codigo rodar.',
    },
  },
} satisfies Language;
