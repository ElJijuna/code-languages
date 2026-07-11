import type { Language } from '@/types';

export const qmake = {
  slug: 'qmake',
  publishedDate: '2002-01-01',
  extensions: ['.pri', '.prf'],
  author: 'Trolltech',
  website: 'https://doc.qt.io/qt-6/qmake-manual.html',
  paradigms: ['build configuration'],
  tooling: {
    runtimes: ['qmake'],
    ecosystems: ['Qt', 'C++'],
  },
  version: 'stable',
  logo: 'https://d33sqmjvzgs8hq.cloudfront.net/wp-content/themes/oneqt/assets/images/favicon-32x32.png',
  color: '#41CD52',
  i18n: {
    en: {
      name: 'qmake',
      description:
        'A Qt build configuration language for generating platform-specific Makefiles and projects.',
      longDescription:
        'qmake project files describe Qt and C++ builds with variables, scopes, conditions, templates, sources, headers, resources, and platform-specific settings. qmake reads these files and generates native build files for the target environment.\n\nThe language is strongly associated with Qt applications and libraries, especially older and long-lived projects. It remains useful for maintaining Qt codebases that predate or choose not to migrate to CMake.',
    },
    es: {
      name: 'qmake',
      description:
        'Lenguaje de configuracion de builds Qt para generar Makefiles y proyectos por plataforma.',
      longDescription:
        'Los archivos de proyecto qmake describen builds Qt y C++ con variables, scopes, condiciones, templates, fuentes, headers, recursos y ajustes por plataforma. qmake lee estos archivos y genera archivos de build nativos para el entorno destino.\n\nEl lenguaje esta muy asociado a aplicaciones y bibliotecas Qt, sobre todo proyectos antiguos o de larga vida. Sigue siendo util para mantener bases Qt anteriores a CMake o que eligen no migrar.',
    },
    it: {
      name: 'qmake',
      description:
        'Linguaggio di configurazione build Qt per generare Makefile e progetti specifici.',
      longDescription:
        'I file progetto qmake descrivono build Qt e C++ con variabili, scope, condizioni, template, sorgenti, header, risorse e impostazioni specifiche di piattaforma. qmake legge questi file e genera file di build nativi per l ambiente target.\n\nIl linguaggio e fortemente associato ad applicazioni e librerie Qt, specialmente progetti vecchi e longevi. Rimane utile per mantenere codebase Qt precedenti a CMake o che scelgono di non migrare.',
    },
    fr: {
      name: 'qmake',
      description:
        'Langage de configuration build Qt pour generer Makefiles et projets par plateforme.',
      longDescription:
        'Les fichiers projet qmake decrivent des builds Qt et C++ avec variables, scopes, conditions, templates, sources, headers, ressources et reglages par plateforme. qmake lit ces fichiers et genere des fichiers de build natifs pour l environnement cible.\n\nLe langage est fortement associe aux applications et bibliotheques Qt, surtout les projets anciens ou durables. Il reste utile pour maintenir des bases Qt anterieures a CMake ou qui choisissent de ne pas migrer.',
    },
    de: {
      name: 'qmake',
      description:
        'Qt-Build-Konfigurationssprache zum Erzeugen plattformspezifischer Makefiles und Projekte.',
      longDescription:
        'qmake-Projektdateien beschreiben Qt- und C++-Builds mit Variablen, Scopes, Bedingungen, Templates, Quellen, Headern, Ressourcen und plattformspezifischen Einstellungen. qmake liest diese Dateien und erzeugt native Build-Dateien fur die Zielumgebung.\n\nDie Sprache ist eng mit Qt-Anwendungen und Bibliotheken verbunden, besonders mit alteren und langlebigen Projekten. Sie bleibt nutzlich fur Qt-Codebasen, die vor CMake entstanden sind oder nicht migrieren wollen.',
    },
    pt: {
      name: 'qmake',
      description:
        'Linguagem de configuracao de build Qt para gerar Makefiles e projetos por plataforma.',
      longDescription:
        'Arquivos de projeto qmake descrevem builds Qt e C++ com variaveis, escopos, condicoes, templates, fontes, headers, recursos e ajustes por plataforma. qmake le esses arquivos e gera arquivos de build nativos para o ambiente alvo.\n\nA linguagem e fortemente associada a aplicativos e bibliotecas Qt, especialmente projetos antigos e duradouros. Continua util para manter bases Qt anteriores ao CMake ou que escolhem nao migrar.',
    },
  },
} satisfies Language;
