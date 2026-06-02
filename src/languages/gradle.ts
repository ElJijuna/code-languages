import type { Language } from '../types';

export const gradle = {
  slug: 'gradle',
  publishedDate: '2007-07-01',
  extensions: ['.gradle', '.gradle.kts'],
  author: 'Hans Dockter / Gradle Inc.',
  website: 'https://gradle.org',
  paradigms: ['build-automation', 'declarative', 'imperative', 'configuration'],
  tooling: {
    runtimes: ['JVM', 'Gradle'],
    packageManagers: ['Gradle'],
    ecosystems: ['JVM', 'Android', 'Java', 'Kotlin', 'Groovy'],
  },
  version: '9.5.1',
  logo: 'https://cdn.simpleicons.org/gradle/02303A',
  color: '#02303A',
  i18n: {
    en: {
      name: 'Gradle',
      description:
        'A build automation DSL and tool used to define, configure, and run software builds.',
      longDescription:
        'Gradle build scripts define projects, plugins, dependencies, repositories, tasks, test suites, publishing rules, and multi-project build logic using Groovy DSL or Kotlin DSL files.\n\nIt is widely used in Java, Kotlin, Android, JVM, and polyglot projects that need reproducible builds, dependency management, custom automation, and integration with CI/CD pipelines.',
    },
    es: {
      name: 'Gradle',
      description:
        'Un DSL y herramienta de automatizacion de builds usado para definir, configurar y ejecutar builds.',
      longDescription:
        'Los scripts de build de Gradle definen proyectos, plugins, dependencias, repositorios, tareas, suites de prueba, reglas de publicacion y logica de builds multiproyecto usando archivos Groovy DSL o Kotlin DSL.\n\nSe usa ampliamente en proyectos Java, Kotlin, Android, JVM y poliglotas que necesitan builds reproducibles, gestion de dependencias, automatizacion personalizada e integracion con pipelines CI/CD.',
    },
    it: {
      name: 'Gradle',
      description:
        'Uno strumento DSL e di automazione della build utilizzato per definire, configurare ed eseguire build software.',
      longDescription:
        'Gli script di build Gradle definiscono progetti, plugin, dipendenze, repository, task, suite di test e regole di pubblicazione utilizzando file DSL di Groovy o Kotlin.\n\nE ampiamente utilizzato in progetti Java, Kotlin, Android, JVM e polyglot che necessitano di build riproducibili, gestione delle dipendenze, automazione personalizzata e integrazione con pipeline CI/CD.',
    },
    fr: {
      name: 'Gradle',
      description:
        "Un DSL et un outil d'automatisation de la construction utilises pour definir, configurer et executer les constructions de logiciels.",
      longDescription:
        "Les scripts de construction Gradle definissent les projets, les plugins, les dependances, les referentiels, les taches, les suites de tests et les regles de publication a l'aide de fichiers DSL Groovy ou Kotlin.\n\nIl est largement utilise dans les projets Java, Kotlin, Android, JVM et polyglottes qui necessitent des constructions reproductibles, la gestion des dependances, l'automatisation personnalisee et l'integration avec les pipelines CI/CD.",
    },
    de: {
      name: 'Gradle',
      description:
        'Ein Build-Automatisierungs-DSL und -Tool zum Definieren, Konfigurieren und Ausf\u00fchren von Software-Builds.',
      longDescription:
        'Gradle-Build-Skripte definieren Projekte, Plugins, Abh\u00e4ngigkeiten, Repositories, Aufgaben, Testsuiten, Ver\u00f6ffentlichungsvorschriften und Build-Logik f\u00fcr mehrere Projekte mithilfe von Groovy DSL oder Kotlin DSL-Dateien.\n\nEs wird h\u00e4ufig in Java-, Kotlin-, Android-, JVM- und polyglotten Projekten verwendet, die reproduzierbare Builds, Dependency-Management, benutzerdefinierte Automatisierung und Integration in CI/CD-Pipelines ben\u00f6tigen.',
    },
    pt: {
      name: 'Gradle',
      description:
        'DSL e ferramenta de automa\u00e7\u00e3o de constru\u00e7\u00e3o para definir, configurar e executar builds de software.',
      longDescription:
        'Scripts de constru\u00e7\u00e3o Gradle definem projetos, plugins, depend\u00eancias, reposit\u00f3rios, tarefas, suites de testes e regras de publica\u00e7\u00e3o usando arquivos DSL Groovy ou Kotlin.\n\n\u00c9 amplamente utilizado em projetos Java, Kotlin, Android, JVM e poligl\u00f3ticos que necessitam de constru\u00e7\u00f5es reproduz\u00edveis, gerenciamento de depend\u00eancias, automa\u00e7\u00e3o personalizada e integra\u00e7\u00e3o com pipelines CI/CD.',
    },
  },
} satisfies Language;
