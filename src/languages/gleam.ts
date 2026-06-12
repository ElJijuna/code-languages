import type { Language } from '../types';

export const gleam = {
  slug: 'gleam',
  publishedDate: '2019-04-15',
  extensions: ['.gleam'],
  author: 'Louis Pilfold',
  website: 'https://gleam.run',
  paradigms: ['functional', 'statically typed', 'concurrent', 'actor-model'],
  tooling: {
    runtimes: ['Erlang/OTP', 'BEAM', 'JavaScript'],
    packageManagers: ['gleam', 'Hex'],
    ecosystems: ['BEAM', 'Erlang', 'Elixir', 'JavaScript', 'Web'],
  },
  version: '1.17.0',
  logo: 'https://cdn.simpleicons.org/gleam/FFAFF3',
  color: '#FFAFF3',
  i18n: {
    en: {
      name: 'Gleam',
      description: 'A friendly statically typed functional language for the BEAM and JavaScript.',
      longDescription:
        'Gleam is a statically typed functional programming language that compiles to Erlang and JavaScript. It provides algebraic data types, pattern matching, immutable data, a small syntax, helpful compiler errors, and interoperability with Erlang and Elixir libraries on the BEAM.\n\nIt is used for web services, concurrent systems, command-line tools, full-stack applications, and projects that want BEAM reliability with a lightweight type system and approachable functional programming model.',
    },
    es: {
      name: 'Gleam',
      description: 'Un lenguaje funcional amigable y de tipado estatico para BEAM y JavaScript.',
      longDescription:
        'Gleam es un lenguaje de programacion funcional con tipado estatico que compila a Erlang y JavaScript. Ofrece tipos algebraicos, pattern matching, datos inmutables, una sintaxis pequena, errores de compilador utiles e interoperabilidad con bibliotecas Erlang y Elixir sobre BEAM.\n\nSe usa en servicios web, sistemas concurrentes, herramientas de linea de comandos, aplicaciones full-stack y proyectos que buscan la confiabilidad de BEAM con un sistema de tipos ligero y un modelo funcional accesible.',
    },
    it: {
      name: 'Gleam',
      description:
        'Un linguaggio funzionale staticamente tipizzato e amichevole per BEAM e JavaScript.',
      longDescription:
        "Gleam e un linguaggio di programmazione funzionale staticamente tipizzato che compila in Erlang e JavaScript. Fornisce tipi di dati algebrici, corrispondenza di pattern, dati immutabili, una sintassi piccola, errori del compilatore utili e interoperabilita con librerie Erlang ed Elixir su BEAM.\n\nE utilizzato per servizi web, sistemi concorrenti, strumenti da riga di comando, applicazioni full-stack e progetti che desiderano l'affidabilita di BEAM con un sistema di tipi leggero e un modello di programmazione funzionale accessibile.",
    },
    fr: {
      name: 'Gleam',
      description: 'Un langage fonctionnel statiquement type convivial pour BEAM et JavaScript.',
      longDescription:
        'Gleam est un langage de programmation fonctionnel statiquement type qui compile vers Erlang et JavaScript. Il fournit des types de donnees algebriques, la correspondance de motifs, des donnees immuables, une syntaxe concise, des erreurs de compilateur utiles et une interoperabilite avec les bibliotheques Erlang et Elixir sur BEAM.\n\nIl est utilise pour les services web, les systemes concurrents, les outils en ligne de commande, les applications full-stack et les projets qui souhaitent la fiabilite de BEAM avec un systeme de types leger et un modele de programmation fonctionnelle accessible.',
    },
    de: {
      name: 'Gleam',
      description:
        'Ein freundlicher, statisch typisierter funktionaler Programmiersprache für BEAM und JavaScript.',
      longDescription:
        'Gleam ist eine statisch typisierte funktionale Programmiersprache, die auf Erlang und JavaScript kompiliert. Sie bietet algebraische Datentypen, Pattern Matching, unveränderliche Daten, eine kleine Syntax, hilfreiche Compiler-Fehlermeldungen und Interoperabilität mit Erlang- und Elixir-Bibliotheken auf BEAM.\n\nSie wird für Webdienste, nebenläufige Systeme, Kommandozeilen-Tools, Full-Stack-Anwendungen und Projekte verwendet, die BEAM-Zuverlässigkeit mit einem leichten Typsystem und einem zugänglichen funktionalen Programmiermodell wünschen.',
    },
    pt: {
      name: 'Gleam',
      description: 'Linguagem funcional estaticamente tipada amigável para BEAM e JavaScript.',
      longDescription:
        'Gleam é uma linguagem de programação funcional estaticamente tipada que compila para Erlang e JavaScript. Oferece tipos de dados algébricos, correspondência de padrões, dados imutáveis, uma sintaxe pequena, mensagens de erro de compilador úteis e interoperabilidade com bibliotecas Erlang e Elixir no BEAM.\n\nÉ usada para serviços web, sistemas concorrentes, ferramentas de linha de comando, aplicações full-stack e projetos que desejam a confiabilidade do BEAM com um sistema de tipos leve e um modelo de programação funcional acessível.',
    },
  },
} satisfies Language;
