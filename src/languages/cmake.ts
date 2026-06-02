import type { Language } from '../types';

export const cmake = {
  slug: 'cmake',
  publishedDate: '2000-01-01',
  extensions: ['CMakeLists.txt', '.cmake'],
  author: 'Kitware',
  website: 'https://cmake.org',
  paradigms: ['build-automation', 'declarative', 'imperative', 'configuration'],
  tooling: {
    runtimes: ['CMake'],
    ecosystems: ['C', 'C++', 'Fortran', 'Cross-platform Builds', 'Embedded Systems'],
  },
  version: '4.3.3',
  logo: 'https://cmake.org/wp-content/uploads/2023/08/CMake-Logo.svg',
  color: '#064F8C',
  i18n: {
    en: {
      name: 'CMake',
      description:
        'A cross-platform build system language used to configure, generate, and manage builds.',
      longDescription:
        'CMake files describe projects, targets, dependencies, compiler options, install rules, tests, and platform-specific build behavior using a command-based scripting language.\n\nThey are widely used to generate native build files for tools such as Ninja, Make, Visual Studio, and Xcode, especially in C, C++, Fortran, embedded, scientific, and cross-platform software projects.',
    },
    es: {
      name: 'CMake',
      description:
        'Un lenguaje de build multiplataforma usado para configurar, generar y gestionar builds.',
      longDescription:
        'Los archivos CMake describen proyectos, targets, dependencias, opciones de compilador, reglas de instalacion, tests y comportamiento de build por plataforma usando un lenguaje de scripting basado en comandos.\n\nSe usan ampliamente para generar archivos de build nativos para herramientas como Ninja, Make, Visual Studio y Xcode, especialmente en proyectos C, C++, Fortran, embebidos, cientificos y multiplataforma.',
    },
    it: {
      name: 'CMake',
      description:
        'Un linguaggio di sistema di compilazione multipiattaforma utilizzato per configurare, generare e gestire le compilazioni.',
      longDescription:
        'I file CMake descrivono progetti, target, dipendenze, opzioni del compilatore, regole di installazione, test e comportamenti di compilazione specifici della piattaforma utilizzando un linguaggio di scripting basato su comandi.\n\nSono ampiamente utilizzati per generare file di compilazione nativi per strumenti come Ninja, Make, Visual Studio e Xcode, in particolare in progetti software in C, C++, Fortran, embedded, scientifici e multipiattaforma.',
    },
    fr: {
      name: 'CMake',
      description:
        'Un langage de systeme de construction multiplateforme utilise pour configurer, generer et gerer les constructions.',
      longDescription:
        "Les fichiers CMake decrivent les projets, les cibles, les dependances, les options du compilateur, les regles d'installation, les tests et le comportement de construction specifique a la plateforme, en utilisant un langage de script base sur des commandes.\n\nIls sont largement utilises pour generer des fichiers de construction natifs pour des outils tels que Ninja, Make, Visual Studio et Xcode, en particulier dans les projets de logiciels C, C++, Fortran, embarques, scientifiques et multiplateformes.",
    },
    de: {
      name: 'CMake',
      description:
        'Eine plattform\u00fcbergreifende Build-System-Sprache zur Konfiguration, Generierung und Verwaltung von Builds.',
      longDescription:
        'CMake-Dateien beschreiben Projekte, Ziele, Abh\u00e4ngigkeiten, Compiler-Optionen, Installationsregeln, Tests und plattformspezifisches Build-Verhalten mithilfe einer command-basierten Skriptsprache.\n\nSie werden h\u00e4ufig verwendet, um native Build-Dateien f\u00fcr Tools wie Ninja, Make, Visual Studio und Xcode zu generieren, insbesondere in C-, C++-, Fortran-, eingebetteten, wissenschaftlichen und plattform\u00fcbergreifenden Softwareprojekten.',
    },
    pt: {
      name: 'CMake',
      description:
        'Linguagem de sistema de constru\u00e7\u00e3o multiplataforma usada para configurar, gerar e gerenciar constru\u00e7\u00f5es.',
      longDescription:
        'Arquivos CMake descrevem projetos, alvos, depend\u00eancias, op\u00e7\u00f5es do compilador, regras de instala\u00e7\u00e3o e comportamento de constru\u00e7\u00e3o espec\u00edfico da plataforma usando uma linguagem de script baseada em comandos.\n\nS\u00e3o amplamente utilizados para gerar arquivos de constru\u00e7\u00e3o nativos para ferramentas como Ninja, Make, Visual Studio e Xcode, especialmente em projetos de software C, C++, Fortran, embarcado, cient\u00edfico e multiplataforma.',
    },
  },
} satisfies Language;
