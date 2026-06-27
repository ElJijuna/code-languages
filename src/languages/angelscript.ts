import type { Language } from '../types';

export const angelscript = {
  slug: 'angelscript',
  publishedDate: '2003-01-01',
  extensions: ['.as', '.angelscript'],
  author: 'Andreas Jonsson (AngelCode)',
  website: 'https://www.angelcode.com/angelscript',
  paradigms: ['object-oriented', 'procedural', 'scripting'],
  tooling: {
    runtimes: ['AngelScript Engine'],
    ecosystems: ['Game Development', 'Embedded Scripting', 'Modding'],
  },
  version: '2.36.1',
  logo: 'https://dummyimage.com/32x32/2D5FA0/ffffff.png&text=AS',
  color: '#2D5FA0',
  i18n: {
    en: {
      name: 'AngelScript',
      description:
        'A statically typed scripting language designed for embedding in C++ game engines.',
      longDescription:
        'AngelScript is a scripting language designed to be embedded in C++ applications and game engines. It uses a syntax close to C++ and Java, making it familiar to game developers, while being compiled to bytecode and executed by a lightweight virtual machine with low overhead.\n\nCreated by Andreas Jonsson at AngelCode, the language provides strong typing, automatic memory management via reference counting, and a flexible registration API for exposing C++ classes and functions to scripts. It is used in commercial games and tools such as Crimsonland, Age of Wonders, and several modding communities.',
    },
    es: {
      name: 'AngelScript',
      description:
        'Lenguaje de scripting tipado estaticamente disenado para incrustar en motores de juego C++.',
      longDescription:
        'AngelScript es un lenguaje de scripting disenado para incrustarse en aplicaciones C++ y motores de juego. Usa una sintaxis cercana a C++ y Java, familiar para desarrolladores de juegos, compilandose a bytecode y ejecutandose mediante una maquina virtual ligera con minima sobrecarga.\n\nCreado por Andreas Jonsson en AngelCode, el lenguaje ofrece tipado fuerte, gestion automatica de memoria mediante conteo de referencias y una API de registro flexible para exponer clases y funciones C++ a los scripts. Se usa en juegos comerciales y herramientas como Crimsonland, Age of Wonders y comunidades de mods.',
    },
    it: {
      name: 'AngelScript',
      description:
        'Linguaggio di scripting tipato staticamente progettato per essere incorporato in motori di gioco C++.',
      longDescription:
        'AngelScript e un linguaggio di scripting progettato per essere incorporato in applicazioni C++ e motori di gioco. Usa una sintassi simile a C++ e Java, familiare agli sviluppatori di giochi, compilando a bytecode ed eseguito da una macchina virtuale leggera con basso overhead.\n\nCreato da Andreas Jonsson di AngelCode, il linguaggio offre tipizzazione statica, gestione automatica della memoria tramite conteggio dei riferimenti e un API di registrazione flessibile per esporre classi e funzioni C++ agli script. E usato in giochi commerciali come Crimsonland, Age of Wonders e comunita di modding.',
    },
    fr: {
      name: 'AngelScript',
      description:
        'Langage de script a typage statique concu pour etre integre dans les moteurs de jeu C++.',
      longDescription:
        'AngelScript est un langage de script concu pour etre integre dans des applications C++ et des moteurs de jeu. Il utilise une syntaxe proche de C++ et Java, familiere aux developpeurs de jeux, avec une compilation en bytecode executee par une machine virtuelle legere a faible surcharge.\n\nCree par Andreas Jonsson chez AngelCode, le langage offre un typage statique, une gestion automatique de la memoire par comptage de references et une API d enregistrement flexible pour exposer des classes et fonctions C++ aux scripts. Il est utilise dans des jeux commerciaux comme Crimsonland, Age of Wonders et diverses communautes de mods.',
    },
    de: {
      name: 'AngelScript',
      description: 'Statisch typisierte Skriptsprache fur die Einbettung in C++-Spiel-Engines.',
      longDescription:
        'AngelScript ist eine Skriptsprache, die fur die Einbettung in C++-Anwendungen und Spiel-Engines entwickelt wurde. Sie verwendet eine Syntax ahnlich C++ und Java, die Spieleentwicklern vertraut ist, wird zu Bytecode kompiliert und von einer leichtgewichtigen virtuellen Maschine mit geringem Overhead ausgefuhrt.\n\nVon Andreas Jonsson bei AngelCode entwickelt, bietet die Sprache starke Typisierung, automatische Speicherverwaltung uber Referenzzahlung und eine flexible Registrierungs-API zum Bereitstellen von C++-Klassen und -Funktionen fur Skripte. Sie wird in kommerziellen Spielen wie Crimsonland, Age of Wonders und verschiedenen Modding-Communities eingesetzt.',
    },
    pt: {
      name: 'AngelScript',
      description:
        'Linguagem de script estaticamente tipada projetada para incorporacao em engines de jogos C++.',
      longDescription:
        'AngelScript e uma linguagem de script projetada para ser incorporada em aplicacoes C++ e engines de jogos. Usa uma sintaxe proxima de C++ e Java, familiar a desenvolvedores de jogos, compilando para bytecode executado por uma maquina virtual leve com baixa sobrecarga.\n\nCriada por Andreas Jonsson na AngelCode, a linguagem oferece tipagem estatica, gerenciamento automatico de memoria por contagem de referencias e uma API de registro flexivel para expor classes e funcoes C++ aos scripts. E usada em jogos comerciais como Crimsonland, Age of Wonders e comunidades de mods.',
    },
  },
} satisfies Language;
