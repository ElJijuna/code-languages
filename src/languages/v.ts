import type { Language } from '../types';

export const v = {
  slug: 'v',
  publishedDate: '2019-06-20',
  extensions: ['.v', '.vsh'],
  author: 'Alexander Medvednikov / V contributors',
  website: 'https://vlang.io',
  paradigms: ['imperative', 'systems', 'multi-paradigm', 'statically typed'],
  tooling: {
    runtimes: ['V compiler'],
    packageManagers: ['vpm'],
    ecosystems: ['Native', 'Web', 'Systems'],
  },
  version: 'weekly.2025.49',
  logo: 'https://cdn.simpleicons.org/v/5D87BF',
  color: '#5D87BF',
  i18n: {
    en: {
      name: 'V',
      description: 'A compiled statically typed language for simple native application builds.',
      longDescription:
        'V is a compiled language with modules, sum types, generics, concurrency syntax, C interop, and a toolchain that emphasizes quick compilation and small deployment workflows. It targets C and native outputs through its compiler.\n\nIt is used for command-line tools, native applications, experiments, web services, and projects that prefer an integrated lightweight toolchain.',
    },
    es: {
      name: 'V',
      description: 'Un lenguaje compilado y tipado para construir aplicaciones nativas simples.',
      longDescription:
        'V es un lenguaje compilado con modulos, sum types, generics, sintaxis concurrente, interop con C y un toolchain que enfatiza compilacion rapida y despliegues pequenos. Su compilador apunta a C y salidas nativas.\n\nSe usa en herramientas de linea de comandos, aplicaciones nativas, experimentos, servicios web y proyectos que prefieren un toolchain ligero e integrado.',
    },
    it: {
      name: 'V',
      description:
        'Un linguaggio compilato con tipizzazione statica per la creazione di applicazioni native semplici.',
      longDescription:
        'V e un linguaggio compilato con moduli, tipi di somma, generics, sintassi per la concorrenza, interoperabilita con C e un toolchain che enfatizza la compilazione rapida e i flussi di lavoro di distribuzione ridotti. Mira a C e output nativi attraverso il suo compilatore.\n\nE utilizzato per strumenti da riga di comando, applicazioni native, esperimenti, servizi web e progetti che preferiscono un toolchain leggero e integrato.',
    },
    fr: {
      name: 'V',
      description:
        "Un langage compile de type statique pour la creation d'applications natives simples.",
      longDescription:
        "V est un langage compile avec des modules, des types de somme, des generiques, une syntaxe de concurrence, une interoperabilite avec C et un outil qui met l'accent sur la compilation rapide et les workflows de deploiement reduits. Il cible C et des sorties natives grace a son compilateur.\n\nIl est utilise pour les outils en ligne de commande, les applications natives, les experimentations, les services web et les projets qui preferent une chaine d'outils legere et integree.",
    },
    de: {
      name: 'V',
      description:
        'Eine kompilierte, statisch typisierte Sprache f\u00fcr einfache native Anwendungsentwicklung.',
      longDescription:
        'V ist eine kompilierte Sprache mit Modulen, Summen-Typen, Generics, Nebenl\u00e4ufigkeitssyntax, C-Interoperabilit\u00e4t und einem Toolchain, der schnelle Kompilierungszeiten und kleine Deployment-Workflows betont. Sie zielt auf C und native Ausgaben durch ihren Compiler.\n\nSie wird f\u00fcr Kommandozeilen-Tools, native Anwendungen, Experimente, Webdienste und Projekte verwendet, die eine integrierte, leichte Toolchain bevorzugen.',
    },
    pt: {
      name: 'V',
      description:
        'Linguagem compilada estaticamente tipada para a cria\u00e7\u00e3o de aplica\u00e7\u00f5es nativas simples.',
      longDescription:
        'V \u00e9 uma linguagem compilada com m\u00f3dulos, tipos de soma, gen\u00e9ricos, sintaxe de concorr\u00eancia, interoperabilidade com C e uma ferramenta que enfatiza a compila\u00e7\u00e3o r\u00e1pida e fluxos de trabalho de implanta\u00e7\u00e3o pequenos. Ela visa C e sa\u00eddas nativas atrav\u00e9s do seu compilador.\n\n\u00c9 usada para ferramentas de linha de comando, aplica\u00e7\u00f5es nativas, experimentos, servi\u00e7os web e projetos que preferem uma ferramenta integrada leve.',
    },
  },
} satisfies Language;
