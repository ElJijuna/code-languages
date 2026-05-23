import type { Language } from "../types";

export const nim = {
  slug: "nim",
  publishedDate: "2008-08-20",
  extensions: [".nim", ".nims", ".nimble"],
  author: "Andreas Rumpf",
  website: "https://nim-lang.org",
  paradigms: ["systems", "imperative", "functional", "metaprogramming", "statically typed"],
  tooling: {
    runtimes: ["Native", "JavaScript"],
    packageManagers: ["Nimble"],
    ecosystems: ["Systems Programming", "CLI", "Web", "Embedded", "Native Applications"],
  },
  version: "2.2.10",
  logo: "https://cdn.simpleicons.org/nim/FFE953",
  color: "#FFE953",
  i18n: {
    en: {
      name: "Nim",
      description:
        "A compiled systems language with Python-like syntax, macros, and efficient native output.",
      longDescription:
        "Nim is a statically typed compiled language designed for efficiency, expressiveness, and flexibility. It offers indentation-based syntax, generics, macros, templates, multiple memory-management strategies, C/C++/Objective-C interoperability, and compilation to C, C++, Objective-C, or JavaScript.\n\nIt is used for command-line tools, systems programming, embedded software, web services, scripting-like automation, native applications, and projects that want low overhead with powerful metaprogramming.",
    },
    es: {
      name: "Nim",
      description:
        "Un lenguaje compilado de sistemas con sintaxis similar a Python, macros y salida nativa eficiente.",
      longDescription:
        "Nim es un lenguaje compilado con tipado estatico disenado para eficiencia, expresividad y flexibilidad. Ofrece sintaxis basada en indentacion, genericos, macros, templates, varias estrategias de gestion de memoria, interoperabilidad con C/C++/Objective-C y compilacion a C, C++, Objective-C o JavaScript.\n\nSe usa en herramientas de linea de comandos, programacion de sistemas, software embebido, servicios web, automatizacion con estilo de scripting, aplicaciones nativas y proyectos que buscan bajo overhead con metaprogramacion potente.",
    },
    it: {
      name: "Nim",
      description:
        "Un linguaggio di sistema compilato con sintassi simile a Python, macro ed efficiente output nativo.",
      longDescription:
        "Nim e un linguaggio compilato staticamente tipizzato progettato per l'efficienza, l'espressivita e la flessibilita. Offre una sintassi basata sull'indentazione, generici, macro, template, strategie di gestione della memoria multiple, interoperabilita con C/C++/Objective-C e compilazione in C, C++, Objective-C o JavaScript.\n\nViene utilizzato per strumenti da riga di comando, programmazione di sistemi, software embedded, servizi web, automazione simile a scripting, applicazioni native e progetti che desiderano un basso overhead con potente metaprogrammazione.",
    },
    fr: {
      name: "Nim",
      description:
        "Un langage de systemes compile avec une syntaxe semblable a Python, des macros et une sortie native efficace.",
      longDescription:
        "Nim est un langage compile de type statique concu pour l'efficacite, l'expressivite et la flexibilite. Il offre une syntaxe basee sur l'indentation, des generiques, des macros, des modeles, plusieurs strategies de gestion de la memoire, l'interoperabilite C/C++/Objective-C et la compilation vers C, C++, Objective-C ou JavaScript. \n\nIl est utilise pour les outils en ligne de commande, la programmation systeme, les logiciels embarques, les services web, l'automatisation de type script, les applications natives et les projets qui souhaitent un faible encombrement avec une puissante meta-programmation.",
    },
    de: {
      name: "Nim",
      description:
        "Eine kompilierte Systemsprache mit Python-\u00e4hnlicher Syntax, Makros und effizienter nativem Output.",
      longDescription:
        "Nim ist eine statisch typisierte, kompilierte Sprache, die f\u00fcr Effizienz, Ausdrucksst\u00e4rke und Flexibilit\u00e4t entwickelt wurde. Sie bietet eine einr\u00fcckungsbasierte Syntax, Generics, Makros, Templates, mehrere Strategien zur Speicherverwaltung, Interoperabilit\u00e4t mit C/C++/Objective-C und Kompilierung zu C, C++, Objective-C oder JavaScript.\n\nSie wird f\u00fcr Kommandozeilen-Tools, Systems-Programmierung, eingebettete Software, Web-Services, Skripting-\u00e4hnliche Automatisierung, native Anwendungen und Projekte verwendet, die einen geringen Overhead mit leistungsstarker Metaprogrammierung ben\u00f6tigen.",
    },
    pt: {
      name: "Nim",
      description:
        "Linguagem compilada de sistemas com sintaxe semelhante \u00e0 Python, macros e sa\u00edda nativa eficiente.",
      longDescription:
        "Nim \u00e9 uma linguagem compilada estaticamente tipada, projetada para efici\u00eancia, expressividade e flexibilidade. Oferece sintaxe baseada em indenta\u00e7\u00e3o, gen\u00e9ricos, macros, templates, m\u00faltiplas estrat\u00e9gias de gerenciamento de mem\u00f3ria, interoperabilidade com C/C++/Objective-C e compila\u00e7\u00e3o para C, C++, Objective-C ou JavaScript.\n\n\u00c9 utilizada para ferramentas de linha de comando, programa\u00e7\u00e3o de sistemas, software embarcado, servi\u00e7os web, automa\u00e7\u00e3o de scripts, aplica\u00e7\u00f5es nativas e projetos que buscam baixo overhead com metaprograma\u00e7\u00e3o poderosa.",
    },
  },
} satisfies Language;
