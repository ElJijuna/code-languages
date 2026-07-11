import type { Language } from '@/types';

export const hy = {
  slug: 'hy',
  publishedDate: '2013-04-03',
  extensions: ['.hy'],
  author: 'Paul Tagliamonte',
  website: 'https://hylang.org',
  paradigms: ['functional', 'meta-programming', 'object-oriented'],
  tooling: {
    runtimes: ['hy (Python-based)'],
    packageManagers: ['pip'],
    ecosystems: ['Python', 'Machine Learning', 'Data Science', 'Scripting'],
  },
  version: '1.0.0',
  logo: 'https://avatars.githubusercontent.com/u/10551643?v=4',
  color: '#35B9E9',
  i18n: {
    en: {
      name: 'Hy',
      description:
        'A Lisp dialect embedded in Python that compiles to Python AST, giving full access to the Python ecosystem with a macro-capable Lisp syntax.',
      longDescription:
        "Hy is a Lisp dialect that is embedded directly in Python. Hy code is compiled to Python's abstract syntax tree (AST) and therefore has complete, bidirectional interoperability with Python: Python can import Hy modules and Hy can import Python modules.\n\nHy brings Lisp's powerful macro system to Python, enabling code generation and domain-specific languages. It supports all Python data types and features, including classes, decorators, generators, and async/await. The entire Python standard library and third-party ecosystem — NumPy, Pandas, TensorFlow — are available natively. Hy is particularly popular for Python developers who want to explore Lisp without leaving their familiar ecosystem.",
    },
    es: {
      name: 'Hy',
      description:
        'Un dialecto Lisp integrado en Python que compila a AST de Python, dando acceso completo al ecosistema de Python con una sintaxis Lisp con macros.',
      longDescription:
        'Hy es un dialecto Lisp integrado directamente en Python. El código Hy se compila al árbol de sintaxis abstracta (AST) de Python, por lo que tiene interoperabilidad completa y bidireccional con Python.\n\nHy trae el potente sistema de macros de Lisp a Python, permitiendo la generación de código y lenguajes específicos de dominio. Soporta todos los tipos de datos y características de Python, incluidos clases, decoradores, generadores y async/await. Todo el ecosistema Python — NumPy, Pandas, TensorFlow — está disponible de forma nativa.',
    },
    it: {
      name: 'Hy',
      description:
        "Un dialetto Lisp integrato in Python che compila in AST Python, offrendo accesso completo all'ecosistema Python con una sintassi Lisp con macro.",
      longDescription:
        "Hy è un dialetto Lisp integrato direttamente in Python. Il codice Hy viene compilato nell'albero di sintassi astratta (AST) di Python e ha quindi una completa interoperabilità bidirezionale con Python.\n\nHy porta il potente sistema di macro di Lisp in Python, abilitando la generazione di codice e i linguaggi specifici di dominio. Supporta tutti i tipi di dati e le funzionalità di Python, incluse classi, decoratori, generatori e async/await. L'intero ecosistema Python — NumPy, Pandas, TensorFlow — è disponibile nativamente.",
    },
    fr: {
      name: 'Hy',
      description:
        "Un dialecte Lisp intégré dans Python qui compile vers l'AST Python, donnant un accès complet à l'écosystème Python avec une syntaxe Lisp capable de macros.",
      longDescription:
        "Hy est un dialecte Lisp intégré directement dans Python. Le code Hy est compilé vers l'arbre de syntaxe abstraite (AST) de Python et dispose donc d'une interopérabilité complète et bidirectionnelle avec Python.\n\nHy apporte le puissant système de macros de Lisp à Python, permettant la génération de code et les langages spécifiques à un domaine. Il prend en charge tous les types de données et fonctionnalités Python, y compris les classes, décorateurs, générateurs et async/await. Tout l'écosystème Python est disponible nativement.",
    },
    de: {
      name: 'Hy',
      description:
        'Ein in Python eingebetteter Lisp-Dialekt, der zu Python-AST kompiliert und vollen Zugang zum Python-Ökosystem mit einer makrofähigen Lisp-Syntax bietet.',
      longDescription:
        'Hy ist ein Lisp-Dialekt, der direkt in Python eingebettet ist. Hy-Code wird zu Pythons abstrakter Syntaxbaumdarstellung (AST) kompiliert und hat daher vollständige, bidirektionale Interoperabilität mit Python.\n\nHy bringt Lisps leistungsstarkes Makrosystem nach Python und ermöglicht Code-Generierung und domänenspezifische Sprachen. Es unterstützt alle Python-Datentypen und -Funktionen, einschließlich Klassen, Dekoratoren, Generatoren und async/await. Das gesamte Python-Ökosystem — NumPy, Pandas, TensorFlow — ist nativ verfügbar.',
    },
    pt: {
      name: 'Hy',
      description:
        'Um dialeto Lisp embutido no Python que compila para a AST do Python, dando acesso completo ao ecossistema Python com uma sintaxe Lisp com suporte a macros.',
      longDescription:
        'Hy é um dialeto Lisp integrado diretamente no Python. O código Hy é compilado para a árvore de sintaxe abstrata (AST) do Python e, portanto, tem interoperabilidade completa e bidirecional com Python.\n\nHy traz o poderoso sistema de macros do Lisp para o Python, permitindo geração de código e linguagens específicas de domínio. Suporta todos os tipos de dados e recursos do Python, incluindo classes, decoradores, geradores e async/await. Todo o ecossistema Python — NumPy, Pandas, TensorFlow — está disponível nativamente.',
    },
  },
} satisfies Language;
