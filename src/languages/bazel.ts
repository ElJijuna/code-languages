import type { Language } from '@/types';

export const bazel = {
  slug: 'bazel',
  publishedDate: '2015-03-25',
  extensions: ['BUILD.bazel', 'WORKSPACE', 'WORKSPACE.bazel', 'MODULE.bazel'],
  author: 'Google / Bazel contributors',
  website: 'https://bazel.build',
  paradigms: ['declarative', 'build-configuration', 'hermetic', 'monorepo'],
  tooling: {
    runtimes: ['Bazel'],
    packageManagers: ['Bzlmod', 'Bazel Central Registry'],
    ecosystems: ['Build Systems', 'Monorepos', 'CI/CD', 'Polyglot Repositories'],
  },
  version: '9.2.0',
  logo: 'https://cdn.simpleicons.org/bazel/43A047',
  color: '#43A047',
  i18n: {
    en: {
      name: 'Bazel',
      description:
        'A build and test configuration language for fast, reproducible multi-language builds.',
      longDescription:
        "Bazel files describe packages, targets, dependencies, toolchains, platforms, modules, and build rules for Bazel's hermetic build graph. BUILD and MODULE files are declarative, while extension logic is commonly written in Starlark.\n\nIt is used in monorepos, large-scale CI systems, polyglot projects, remote execution workflows, reproducible builds, dependency graph analysis, and teams that need consistent builds across machines and languages.",
    },
    es: {
      name: 'Bazel',
      description:
        'Un lenguaje de configuracion de build y test para compilaciones rapidas y reproducibles.',
      longDescription:
        'Los archivos Bazel describen paquetes, targets, dependencias, toolchains, plataformas, modulos y reglas para el grafo de build hermetico de Bazel. Los archivos BUILD y MODULE son declarativos, mientras que la logica de extension suele escribirse en Starlark.\n\nSe usa en monorepos, sistemas CI a gran escala, proyectos poliglota, remote execution, builds reproducibles, analisis de grafos de dependencias y equipos que necesitan builds consistentes entre maquinas y lenguajes.',
    },
    it: {
      name: 'Bazel',
      description:
        'Un linguaggio di configurazione per la compilazione e i test per build e test riproducibili multi-linguaggio veloci.',
      longDescription:
        'I file Bazel descrivono pacchetti, target, dipendenze, toolchain, piattaforme, moduli e regole di compilazione per il grafo di compilazione ermetico di Bazel. I file BUILD e MODULE sono dichiarativi, mentre la logica di estensione viene comunemente scritta in Starlark.\n\nViene utilizzato in monorepos, sistemi CI su larga scala, progetti poliglotti, workflow di esecuzione remota, build riproducibili, analisi del grafo di dipendenze e team che necessitano di build coerenti su macchine e linguaggi diversi.',
    },
    fr: {
      name: 'Bazel',
      description:
        'Un langage de configuration de construction et de test pour des constructions multi-langues rapides et reproductibles.',
      longDescription:
        "Les fichiers Bazel decrivent les paquets, les cibles, les dependances, les outils, les plateformes, les modules et les regles de construction pour le graphe de construction hermetique de Bazel. Les fichiers BUILD et MODULE sont declaratifs, tandis que la logique d'extension est couramment ecrite en Starlark.\n\nIl est utilise dans les depots monorepos, les systemes CI a grande echelle, les projets polyglots, les workflows d'execution a distance, les constructions reproductibles, l'analyse du graphe de dependances et les equipes qui ont besoin de constructions coherentes sur differentes machines et langages.",
    },
    de: {
      name: 'Bazel',
      description:
        'Eine Build- und Testkonfigurationssprache für schnelle, reproduzierbare Builds in mehreren Sprachen.',
      longDescription:
        'Bazel-Dateien beschreiben Pakete, Ziele, Abhängigkeiten, Toolchains, Plattformen, Module und Build-Regeln für Bazels hermetischen Build-Graph. BUILD- und MODULE-Dateien sind deklarativ, während die Erweiterungslogik häufig in Starlark geschrieben wird.\n\nEs wird in Monorepos, großen CI-Systemen, polyglotten Projekten, Remote-Execution-Workflows, reproduzierbaren Builds, Dependency-Graph-Analysen und Teams verwendet, die konsistente Builds über verschiedene Maschinen und Sprachen benötigen.',
    },
    pt: {
      name: 'Bazel',
      description:
        'Linguagem de configuração para construir e testar, para builds multi-linguagem rápidos e reproduzíveis.',
      longDescription:
        'Arquivos Bazel descrevem pacotes, alvos, dependências, toolchains, plataformas, módulos e regras de construção para o grafo de construção hermético do Bazel. Os arquivos BUILD e MODULE são declarativos, enquanto a lógica de extensão é frequentemente escrita em Starlark.\n\nÉ usada em repositórios monorepo, sistemas CI em larga escala, projetos poliglóticos, fluxos de trabalho de execução remota, builds reproduzíveis, análise de grafo de dependências e equipes que precisam de builds consistentes em diferentes máquinas e linguagens.',
    },
  },
} satisfies Language;
