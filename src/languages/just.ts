import type { Language } from '../types';

export const just = {
  slug: 'just',
  publishedDate: '2016-03-13',
  extensions: ['justfile', 'Justfile', '.just'],
  author: 'Casey Rodarmor',
  website: 'https://just.systems',
  paradigms: ['task automation', 'command runner'],
  tooling: {
    runtimes: ['just'],
    packageManagers: ['Cargo', 'Homebrew', 'Scoop'],
    ecosystems: ['CLI', 'Build Automation', 'DevOps'],
  },
  version: '1.44.0',
  logo: 'https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_just.svg',
  color: '#384D54',
  i18n: {
    en: {
      name: 'Just',
      description:
        'A command-runner language for project recipes, task automation, and repeatable developer workflows.',
      longDescription:
        'Just is a command runner whose justfile syntax defines named recipes for common project tasks. It is often used as a friendlier alternative to ad hoc shell scripts or make targets when dependency graph semantics are not needed.\n\nRecipes can accept parameters, set variables, choose shells, load dotenv files, and compose other recipes. The format is popular for local development workflows, CI helpers, release commands, and cross-platform project automation.',
    },
    es: {
      name: 'Just',
      description:
        'Lenguaje de recetas para ejecutar comandos de proyecto, automatizar tareas y repetir flujos de desarrollo.',
      longDescription:
        'Just es un ejecutor de comandos cuya sintaxis justfile define recetas con nombre para tareas comunes del proyecto. Se usa como alternativa mas amable a scripts shell dispersos o targets de make cuando no se necesita un grafo de dependencias.\n\nLas recetas pueden aceptar parametros, definir variables, elegir shells, cargar archivos dotenv y componer otras recetas. Es comun en desarrollo local, ayudas de CI, comandos de release y automatizacion multiplataforma.',
    },
  },
} satisfies Language;
