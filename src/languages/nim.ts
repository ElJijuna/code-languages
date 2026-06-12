import type { Language } from '../types';

export const nim = {
  slug: 'nim',
  publishedDate: '2008-08-20',
  extensions: ['.nim', '.nims', '.nimble'],
  author: 'Andreas Rumpf',
  website: 'https://nim-lang.org',
  paradigms: ['systems', 'imperative', 'functional', 'metaprogramming', 'statically typed'],
  tooling: {
    runtimes: ['Native', 'JavaScript'],
    packageManagers: ['Nimble'],
    ecosystems: ['Systems Programming', 'CLI', 'Web', 'Embedded', 'Native Applications'],
  },
  version: '2.2.10',
  logo: 'https://cdn.simpleicons.org/nim/FFE953',
  color: '#FFE953',
  i18n: {
    en: {
      name: 'Nim',
      description:
        'A compiled systems language with Python-like syntax, macros, and efficient native output.',
      longDescription:
        'Nim is a statically typed compiled language designed for efficiency, expressiveness, and flexibility. It offers indentation-based syntax, generics, macros, templates, multiple memory-management strategies, C/C++/Objective-C interoperability, and compilation to C, C++, Objective-C, or JavaScript.\n\nIt is used for command-line tools, systems programming, embedded software, web services, scripting-like automation, native applications, and projects that want low overhead with powerful metaprogramming.',
    },
    es: {
      name: 'Nim',
      description:
        'Un lenguaje compilado de sistemas con sintaxis similar a Python, macros y salida nativa eficiente.',
      longDescription:
        'Nim es un lenguaje compilado con tipado estatico disenado para eficiencia, expresividad y flexibilidad. Ofrece sintaxis basada en indentacion, genericos, macros, templates, varias estrategias de gestion de memoria, interoperabilidad con C/C++/Objective-C y compilacion a C, C++, Objective-C o JavaScript.\n\nSe usa en herramientas de linea de comandos, programacion de sistemas, software embebido, servicios web, automatizacion con estilo de scripting, aplicaciones nativas y proyectos que buscan bajo overhead con metaprogramacion potente.',
    },
    it: {
      name: 'Nim',
      description:
        'Un linguaggio di sistema compilato con sintassi simile a Python, macro ed efficiente output nativo.',
      longDescription:
        "Nim e un linguaggio compilato staticamente tipizzato progettato per l'efficienza, l'espressivita e la flessibilita. Offre una sintassi basata sull'indentazione, generici, macro, template, strategie di gestione della memoria multiple, interoperabilita con C/C++/Objective-C e compilazione in C, C++, Objective-C o JavaScript.\n\nViene utilizzato per strumenti da riga di comando, programmazione di sistemi, software embedded, servizi web, automazione simile a scripting, applicazioni native e progetti che desiderano un basso overhead con potente metaprogrammazione.",
    },
    fr: {
      name: 'Nim',
      description:
        'Un langage de systemes compile avec une syntaxe semblable a Python, des macros et une sortie native efficace.',
      longDescription:
        "Nim est un langage compile de type statique concu pour l'efficacite, l'expressivite et la flexibilite. Il offre une syntaxe basee sur l'indentation, des generiques, des macros, des modeles, plusieurs strategies de gestion de la memoire, l'interoperabilite C/C++/Objective-C et la compilation vers C, C++, Objective-C ou JavaScript. \n\nIl est utilise pour les outils en ligne de commande, la programmation systeme, les logiciels embarques, les services web, l'automatisation de type script, les applications natives et les projets qui souhaitent un faible encombrement avec une puissante meta-programmation.",
    },
    de: {
      name: 'Nim',
      description:
        'Eine kompilierte Systemsprache mit Python-ähnlicher Syntax, Makros und effizienter nativem Output.',
      longDescription:
        'Nim ist eine statisch typisierte, kompilierte Sprache, die für Effizienz, Ausdrucksstärke und Flexibilität entwickelt wurde. Sie bietet eine einrückungsbasierte Syntax, Generics, Makros, Templates, mehrere Strategien zur Speicherverwaltung, Interoperabilität mit C/C++/Objective-C und Kompilierung zu C, C++, Objective-C oder JavaScript.\n\nSie wird für Kommandozeilen-Tools, Systems-Programmierung, eingebettete Software, Web-Services, Skripting-ähnliche Automatisierung, native Anwendungen und Projekte verwendet, die einen geringen Overhead mit leistungsstarker Metaprogrammierung benötigen.',
    },
    pt: {
      name: 'Nim',
      description:
        'Linguagem compilada de sistemas com sintaxe semelhante à Python, macros e saída nativa eficiente.',
      longDescription:
        'Nim é uma linguagem compilada estaticamente tipada, projetada para eficiência, expressividade e flexibilidade. Oferece sintaxe baseada em indentação, genéricos, macros, templates, múltiplas estratégias de gerenciamento de memória, interoperabilidade com C/C++/Objective-C e compilação para C, C++, Objective-C ou JavaScript.\n\nÉ utilizada para ferramentas de linha de comando, programação de sistemas, software embarcado, serviços web, automação de scripts, aplicações nativas e projetos que buscam baixo overhead com metaprogramação poderosa.',
    },
  },
} satisfies Language;
