import type { Language } from '../types';

export const crystal = {
  slug: 'crystal',
  publishedDate: '2014-06-18',
  extensions: ['.cr'],
  author: 'Ary Borenszweig, Juan Wajnerman, Brian Cardiff / Crystal contributors',
  website: 'https://crystal-lang.org',
  paradigms: ['object-oriented', 'functional', 'imperative', 'concurrent'],
  tooling: {
    runtimes: ['Crystal'],
    packageManagers: ['Shards'],
    ecosystems: ['Web', 'CLI', 'Systems', 'Native Applications'],
  },
  version: '1.20.2',
  logo: 'https://cdn.simpleicons.org/crystal/000000',
  color: '#000000',
  i18n: {
    en: {
      name: 'Crystal',
      description:
        'A compiled, statically typed language with Ruby-inspired syntax and native performance.',
      longDescription:
        'Crystal is a general-purpose programming language with syntax inspired by Ruby, static type checking, type inference, macros, fibers, channels, C bindings, and native compilation. It aims to keep code expressive while catching type errors at compile time.\n\nIt is used for web services, command-line tools, automation, native applications, performance-sensitive backend systems, and projects that want Ruby-like ergonomics with a compiled toolchain.',
    },
    es: {
      name: 'Crystal',
      description:
        'Un lenguaje compilado y tipado estaticamente con sintaxis inspirada en Ruby y rendimiento nativo.',
      longDescription:
        'Crystal es un lenguaje de programacion de proposito general con sintaxis inspirada en Ruby, verificacion estatica de tipos, inferencia de tipos, macros, fibers, channels, bindings con C y compilacion nativa. Busca mantener el codigo expresivo mientras detecta errores de tipos en compilacion.\n\nSe usa en servicios web, herramientas de linea de comandos, automatizacion, aplicaciones nativas, backends sensibles al rendimiento y proyectos que quieren ergonomia similar a Ruby con un toolchain compilado.',
    },
    it: {
      name: 'Crystal',
      description:
        'Un linguaggio compilato, con tipi statici, con sintassi ispirata a Ruby e prestazioni native.',
      longDescription:
        "Crystal e un linguaggio di programmazione general-purpose con sintassi ispirata a Ruby, controllo dei tipi statico, inferenza dei tipi, macro, fibre, canali, binding C e compilazione nativa. Mira a mantenere il codice espressivo catturando errori di tipo a compile time.\n\nViene utilizzato per servizi web, strumenti da riga di comando, automazione, applicazioni native, sistemi backend sensibili alle prestazioni e progetti che desiderano l'ergonomia simile a Ruby con un toolchain compilato.",
    },
    fr: {
      name: 'Crystal',
      description:
        'Un langage compile, de typage statique, avec une syntaxe inspiree de Ruby et des performances natives.',
      longDescription:
        "Crystal est un langage de programmation general a usage, avec une syntaxe inspiree de Ruby, un controle de type statique, l'inference de type, des macros, des fibres, des canaux, des liaisons C et une compilation native. Il vise a maintenir le code expressif tout en detectant les erreurs de type au moment de la compilation. \n\nIl est utilise pour les services web, les outils en ligne de commande, l'automatisation, les applications natives, les systemes backend sensibles aux performances et les projets qui souhaitent une ergonomie similaire a Ruby avec un outil de compilation.",
    },
    de: {
      name: 'Crystal',
      description:
        'Eine kompilierte, statisch typisierte Sprache mit Ruby-ähnlicher Syntax und nativem Leistung.',
      longDescription:
        'Crystal ist eine allgemeine Programmiersprache mit Syntax, die von Ruby inspiriert ist, statischer Typüberprüfung, Typinferenz, Makros, Fibers, Kanälen, C-Bindings und nativem Kompilieren. Sie zielt darauf ab, Code ausdrucksstark zu halten und gleichzeitig Typfehler zur Kompilierzeit zu erkennen.\n\nEs wird für Webdienste, Kommandozeilen-Tools, Automatisierung, native Anwendungen, performante Backend-Systeme und Projekte verwendet, die die Ergonomie von Ruby mit einer kompilierten Toolchain wünschen.',
    },
    pt: {
      name: 'Crystal',
      description:
        'Linguagem compilada, estaticamente tipada com sintaxe inspirada em Ruby e desempenho nativo.',
      longDescription:
        'Crystal é uma linguagem de programação de propósito geral com sintaxe inspirada em Ruby, verificação estática de tipos, inferência de tipos, macros, fibras, canais, bindings C e compilação nativa. Seu objetivo é manter o código expressivo, capturando erros de tipo em tempo de compilação.\n\nÉ usada para serviços web, ferramentas de linha de comando, automação, aplicativos nativos, sistemas de backend sensíveis ao desempenho e projetos que desejam a ergonomia semelhante ao Ruby com uma ferramenta compilada.',
    },
  },
} satisfies Language;
