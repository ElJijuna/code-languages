import type { Language } from "../types";

export const bazel = {
  slug: "bazel",
  publishedDate: "2015-03-25",
  extensions: ["BUILD.bazel", "WORKSPACE", "WORKSPACE.bazel", "MODULE.bazel"],
  author: "Google / Bazel contributors",
  website: "https://bazel.build",
  paradigms: ["declarative", "build-configuration", "hermetic", "monorepo"],
  tooling: {
    runtimes: ["Bazel"],
    packageManagers: ["Bzlmod", "Bazel Central Registry"],
    ecosystems: ["Build Systems", "Monorepos", "CI/CD", "Polyglot Repositories"],
  },
  version: "9.1.0",
  logo: "https://cdn.simpleicons.org/bazel/43A047",
  color: "#43A047",
  i18n: {
    en: {
      name: "Bazel",
      description:
        "A build and test configuration language for fast, reproducible multi-language builds.",
      longDescription:
        "Bazel files describe packages, targets, dependencies, toolchains, platforms, modules, and build rules for Bazel's hermetic build graph. BUILD and MODULE files are declarative, while extension logic is commonly written in Starlark.\n\nIt is used in monorepos, large-scale CI systems, polyglot projects, remote execution workflows, reproducible builds, dependency graph analysis, and teams that need consistent builds across machines and languages.",
    },
    es: {
      name: "Bazel",
      description:
        "Un lenguaje de configuracion de build y test para compilaciones rapidas y reproducibles.",
      longDescription:
        "Los archivos Bazel describen paquetes, targets, dependencias, toolchains, plataformas, modulos y reglas para el grafo de build hermetico de Bazel. Los archivos BUILD y MODULE son declarativos, mientras que la logica de extension suele escribirse en Starlark.\n\nSe usa en monorepos, sistemas CI a gran escala, proyectos poliglota, remote execution, builds reproducibles, analisis de grafos de dependencias y equipos que necesitan builds consistentes entre maquinas y lenguajes.",
    },
    it: {
      name: "Bazel",
      description:
        "Un linguaggio di configurazione per la compilazione e i test per build e test riproducibili multi-linguaggio veloci.",
      longDescription:
        "I file Bazel descrivono pacchetti, target, dipendenze, toolchain, piattaforme, moduli e regole di compilazione per il grafo di compilazione ermetico di Bazel. I file BUILD e MODULE sono dichiarativi, mentre la logica di estensione viene comunemente scritta in Starlark.\n\nViene utilizzato in monorepos, sistemi CI su larga scala, progetti poliglotti, workflow di esecuzione remota, build riproducibili, analisi del grafo di dipendenze e team che necessitano di build coerenti su macchine e linguaggi diversi.",
    },
    fr: {
      name: "Bazel",
      description:
        "Un langage de configuration de construction et de test pour des constructions multi-langues rapides et reproductibles.",
      longDescription:
        "Les fichiers Bazel decrivent les paquets, les cibles, les dependances, les outils, les plateformes, les modules et les regles de construction pour le graphe de construction hermetique de Bazel. Les fichiers BUILD et MODULE sont declaratifs, tandis que la logique d'extension est couramment ecrite en Starlark.\n\nIl est utilise dans les depots monorepos, les systemes CI a grande echelle, les projets polyglots, les workflows d'execution a distance, les constructions reproductibles, l'analyse du graphe de dependances et les equipes qui ont besoin de constructions coherentes sur differentes machines et langages.",
    },
    de: {
      name: "Bazel",
      description:
        "Eine Build- und Testkonfigurationssprache f\u00fcr schnelle, reproduzierbare Builds in mehreren Sprachen.",
      longDescription:
        "Bazel-Dateien beschreiben Pakete, Ziele, Abh\u00e4ngigkeiten, Toolchains, Plattformen, Module und Build-Regeln f\u00fcr Bazels hermetischen Build-Graph. BUILD- und MODULE-Dateien sind deklarativ, w\u00e4hrend die Erweiterungslogik h\u00e4ufig in Starlark geschrieben wird.\n\nEs wird in Monorepos, gro\u00dfen CI-Systemen, polyglotten Projekten, Remote-Execution-Workflows, reproduzierbaren Builds, Dependency-Graph-Analysen und Teams verwendet, die konsistente Builds \u00fcber verschiedene Maschinen und Sprachen ben\u00f6tigen.",
    },
    pt: {
      name: "Bazel",
      description:
        "Linguagem de configura\u00e7\u00e3o para construir e testar, para builds multi-linguagem r\u00e1pidos e reproduz\u00edveis.",
      longDescription:
        "Arquivos Bazel descrevem pacotes, alvos, depend\u00eancias, toolchains, plataformas, m\u00f3dulos e regras de constru\u00e7\u00e3o para o grafo de constru\u00e7\u00e3o herm\u00e9tico do Bazel. Os arquivos BUILD e MODULE s\u00e3o declarativos, enquanto a l\u00f3gica de extens\u00e3o \u00e9 frequentemente escrita em Starlark.\n\n\u00c9 usada em reposit\u00f3rios monorepo, sistemas CI em larga escala, projetos poligl\u00f3ticos, fluxos de trabalho de execu\u00e7\u00e3o remota, builds reproduz\u00edveis, an\u00e1lise de grafo de depend\u00eancias e equipes que precisam de builds consistentes em diferentes m\u00e1quinas e linguagens.",
    },
  },
} satisfies Language;
