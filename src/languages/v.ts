import type { Language } from '@/types';

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
        'Eine kompilierte, statisch typisierte Sprache für einfache native Anwendungsentwicklung.',
      longDescription:
        'V ist eine kompilierte Sprache mit Modulen, Summen-Typen, Generics, Nebenläufigkeitssyntax, C-Interoperabilität und einem Toolchain, der schnelle Kompilierungszeiten und kleine Deployment-Workflows betont. Sie zielt auf C und native Ausgaben durch ihren Compiler.\n\nSie wird für Kommandozeilen-Tools, native Anwendungen, Experimente, Webdienste und Projekte verwendet, die eine integrierte, leichte Toolchain bevorzugen.',
    },
    pt: {
      name: 'V',
      description:
        'Linguagem compilada estaticamente tipada para a criação de aplicações nativas simples.',
      longDescription:
        'V é uma linguagem compilada com módulos, tipos de soma, genéricos, sintaxe de concorrência, interoperabilidade com C e uma ferramenta que enfatiza a compilação rápida e fluxos de trabalho de implantação pequenos. Ela visa C e saídas nativas através do seu compilador.\n\nÉ usada para ferramentas de linha de comando, aplicações nativas, experimentos, serviços web e projetos que preferem uma ferramenta integrada leve.',
    },
  },
} satisfies Language;
