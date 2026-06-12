import type { Language } from '../types';

export const haxe = {
  slug: 'haxe',
  publishedDate: '2005-10-01',
  extensions: ['.hx', '.hxml'],
  author: 'Nicolas Cannasse / Haxe Foundation',
  website: 'https://haxe.org',
  paradigms: ['object-oriented', 'functional', 'cross-platform', 'statically typed'],
  tooling: {
    runtimes: ['JavaScript', 'HashLink', 'JVM', 'C++', 'C#', 'PHP', 'Lua', 'Python'],
    packageManagers: ['haxelib'],
    ecosystems: ['Games', 'Web', 'Cross-platform Applications', 'OpenFL', 'Heaps'],
  },
  version: '4.3.7',
  logo: 'https://cdn.simpleicons.org/haxe/EA8220',
  color: '#EA8220',
  i18n: {
    en: {
      name: 'Haxe',
      description: 'A cross-platform typed language that compiles to many runtimes and targets.',
      longDescription:
        'Haxe is a high-level, statically typed programming language and compiler toolkit that targets JavaScript, C++, C#, Java, JVM bytecode, PHP, Lua, Python, HashLink, and other platforms. It includes type inference, macros, abstracts, generics, pattern matching, and a shared standard library.\n\nIt is used for games, web applications, creative coding, cross-platform tools, multimedia frameworks, and codebases that need to share typed business or engine logic across many targets.',
    },
    es: {
      name: 'Haxe',
      description: 'Un lenguaje tipado multiplataforma que compila a muchos runtimes y destinos.',
      longDescription:
        'Haxe es un lenguaje de programacion de alto nivel con tipado estatico y un toolkit de compilador que apunta a JavaScript, C++, C#, Java, bytecode JVM, PHP, Lua, Python, HashLink y otras plataformas. Incluye inferencia de tipos, macros, abstracts, genericos, pattern matching y una biblioteca estandar compartida.\n\nSe usa en juegos, aplicaciones web, creative coding, herramientas multiplataforma, frameworks multimedia y codebases que necesitan compartir logica tipada de negocio o motor entre muchos destinos.',
    },
    it: {
      name: 'Haxe',
      description:
        'Un linguaggio di programmazione tipizzato cross-platform che compila per molti runtime e target.',
      longDescription:
        'Haxe e un linguaggio di programmazione di alto livello, staticamente tipizzato e un toolkit di compilazione che mira a JavaScript, C++, C#, Java, bytecode JVM, PHP, Lua, Python, HashLink e altre piattaforme. Include inferenza di tipi, macro, astrazioni, generics, pattern matching e una libreria standard condivisa.\n\nViene utilizzato per giochi, applicazioni web, coding creativo, strumenti cross-platform, framework multimediali e codebase che devono condividere logica di business o di engine tipizzata su molti target.',
    },
    fr: {
      name: 'Haxe',
      description:
        "Un langage de programmation type multiplateforme qui compile vers de nombreux environnements d'execution et plateformes.",
      longDescription:
        "Haxe est un langage de programmation de haut niveau, statiquement type et un ensemble d'outils de compilation qui cible JavaScript, C++, C#, Java, bytecode JVM, PHP, Lua, Python, HashLink et d'autres plateformes. Il inclut l'inference de types, les macros, les abstractions, les generiques, la correspondance de motifs et une bibliotheque standard partagee.\n\nIl est utilise pour les jeux, les applications web, le codage creatif, les outils multiplateformes, les frameworks multimedias et les bases de code qui doivent partager une logique metier ou un moteur typee sur de nombreuses plateformes.",
    },
    de: {
      name: 'Haxe',
      description:
        'Eine plattformübergreifende, typisierte Sprache, die zu vielen Laufzeitumgebungen und Zielen kompiliert.',
      longDescription:
        'Haxe ist eine hochstufige, statisch typisierte Programmiersprache und Compiler-Toolkit, das auf JavaScript, C++, C#, Java, JVM-Bytecode, PHP, Lua, Python, HashLink und andere Plattformen abzielt. Es umfasst Typinferenz, Makros, Abstraktionen, Generics, Pattern Matching und eine gemeinsame Standardbibliothek.\n\nEs wird für Spiele, Webanwendungen, kreative Programmierung, plattformübergreifende Tools, Multimedia-Frameworks und Codebasen verwendet, die typisierte Geschäfts- oder Engine-Logik über viele Ziele hinweg teilen müssen.',
    },
    pt: {
      name: 'Haxe',
      description:
        'Linguagem de programação tipada multiplataforma que compila para várias plataformas e alvos.',
      longDescription:
        'Haxe é uma linguagem de programação de alto nível e um conjunto de ferramentas de compilação estaticamente tipadas que visam JavaScript, C++, C#, Java, bytecode JVM, PHP, Lua, Python, HashLink e outras plataformas. Inclui inferência de tipo, macros, abstrações, genéricos, correspondência de padrões e uma biblioteca padrão compartilhada.\n\nÉ usada para jogos, aplicações web, codificação criativa, ferramentas multiplataforma, frameworks multimídia e bases de código que precisam compartilhar lógica de negócios ou de motor tipada em vários alvos.',
    },
  },
} satisfies Language;
