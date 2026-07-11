import type { Language } from '@/types';

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
  version: '1.55.1',
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
    it: {
      name: 'Just',
      description:
        'Un linguaggio di scripting per definire ricette, automatizzare attività e creare flussi di lavoro ripetibili per i progetti.',
      longDescription:
        'Just è un interprete di comandi che utilizza la sintassi justfile per definire ricette denominate per compiti comuni del progetto. Viene spesso utilizzato come alternativa più semplice agli script shell o ai target make quando non sono necessarie le semantiche del grafo delle dipendenze.\n\nLe ricette possono accettare parametri, impostare variabili, scegliere gli interpreti, caricare file .env e comporre altre ricette. Il formato è popolare per i flussi di lavoro di sviluppo locali, helper CI, comandi di rilascio e automazione cross-platform dei progetti.',
    },
    fr: {
      name: 'Just',
      description:
        "Un langage de commande pour les recettes de projet, l'automatisation des tâches et les flux de travail reproductibles des développeurs.",
      longDescription:
        "Just est un exécuteur de commandes dont la syntaxe `justfile` définit des recettes nommées pour les tâches courantes du projet. Il est souvent utilisé comme une alternative plus conviviale aux scripts shell ad hoc ou aux cibles make lorsque la sémantique du graphe de dépendances n'est pas nécessaire.\n\nLes recettes peuvent accepter des paramètres, définir des variables, choisir des shells, charger des fichiers `.env` et composer d'autres recettes. Le format est populaire pour les flux de travail de développement local, les assistants CI, les commandes de publication et l'automatisation de projet multiplateforme.",
    },
    de: {
      name: 'Just',
      description:
        'Eine Befehlsausführungs-Sprache für Projektrezepte, Aufgabenautomatisierung und wiederholbare Entwicklerworkflows.',
      longDescription:
        'Just ist ein Befehlsausführender, dessen justfile-Syntax benannte Rezepte für gängige Projekttasks definiert. Es wird oft als freundlichere Alternative zu ad hoc Shell-Skripten oder Make-Zielen verwendet, wenn keine Abhängigkeitsgraph-Semantik benötigt wird.\n\nRezepte können Parameter akzeptieren, Variablen setzen, Shells auswählen, .env-Dateien laden und andere Rezepte kombinieren. Das Format ist beliebt für lokale Entwicklerworkflows, CI-Helfer, Release-Befehle und plattformübergreifende Projektautomatisierung.',
    },
    pt: {
      name: 'Just',
      description:
        'Uma linguagem de execução de comandos para receitas de projetos, automação de tarefas e fluxos de trabalho repetíveis para desenvolvedores.',
      longDescription:
        "Just é um interpretador de comandos que usa a sintaxe 'justfile' para definir receitas nomeadas para tarefas comuns do projeto. É frequentemente usado como uma alternativa mais amigável aos scripts shell ou alvos 'make' quando a semântica de grafo de dependências não são necessárias.\n\nAs receitas podem aceitar parâmetros, definir variáveis, escolher shells, carregar arquivos '.env' e compor outras receitas. O formato é popular para fluxos de trabalho locais de desenvolvimento, auxiliares CI, comandos de lançamento e automação de projetos multiplataforma.",
    },
  },
} satisfies Language;
