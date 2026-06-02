import type { Language } from '../types';

export const bash = {
  slug: 'bash',
  publishedDate: '1989-06-08',
  extensions: ['.sh', '.bash', '.bashrc', '.bash_profile', '.bash_login', '.profile'],
  author: 'Brian Fox / GNU Project',
  website: 'https://www.gnu.org/software/bash/',
  paradigms: ['command', 'imperative', 'scripting', 'shell'],
  tooling: {
    runtimes: ['Bash shell', 'POSIX-like shells'],
    packageManagers: ['Homebrew', 'APT', 'DNF', 'Pacman'],
    ecosystems: ['Unix', 'Linux', 'macOS', 'DevOps'],
  },
  version: '5.3',
  logo: 'https://bashlogo.com/img/symbol/svg/full_colored_dark.svg',
  color: '#4EAA25',
  i18n: {
    en: {
      name: 'Bash',
      description: 'A Unix shell and command language for scripting and interactive use.',
      longDescription:
        "Bash is the GNU Project's Bourne Again Shell, an sh-compatible shell with features from the Bourne shell, Korn shell, and C shell.\n\nIt is widely used for command-line sessions, shell scripts, automation, system administration, build tooling, CI workflows, and Unix-like operating system environments.",
    },
    es: {
      name: 'Bash',
      description: 'Un shell Unix y lenguaje de comandos para scripting y uso interactivo.',
      longDescription:
        'Bash es el Bourne Again Shell del Proyecto GNU, un shell compatible con sh que incorpora caracteristicas del Bourne shell, Korn shell y C shell.\n\nSe usa ampliamente en sesiones de linea de comandos, scripts de shell, automatizacion, administracion de sistemas, herramientas de build, flujos CI y entornos de sistemas tipo Unix.',
    },
    it: {
      name: 'Bash',
      description: 'Una shell Unix e linguaggio di comandi per scripting e uso interattivo.',
      longDescription:
        'Bash e la shell Bourne Again del GNU Project, una shell compatibile con sh con funzionalita derivate dalle shell Bourne, Korn e C.\n\nE ampiamente utilizzata per sessioni a riga di comando, script di shell, automazione, amministrazione di sistema, strumenti di build, flussi di lavoro CI e ambienti di sistemi operativi simili a Unix.',
    },
    fr: {
      name: 'Bash',
      description: "Un interpreteur de commandes et langage de script pour l'environnement Unix.",
      longDescription:
        "Bash est le Bourne Again Shell du projet GNU, un interpreteur compatible avec le shell sh, dote de fonctionnalites issues des shells Bourne, Korn et C.\n\nIl est largement utilise pour les sessions de ligne de commande, les scripts shell, l'automatisation, l'administration systeme, les outils de construction, les workflows CI et les environnements de systemes d'exploitation similaires a Unix.",
    },
    de: {
      name: 'Bash',
      description:
        'Ein Unix-Shell und eine Befehls-Sprache f\u00fcr Skripte und interaktive Nutzung.',
      longDescription:
        'Bash ist der GNU-Projekt-Bourne Again Shell, ein sh-kompatibler Shell mit Funktionen aus dem Bourne-, Korn- und C-Shell.\n\nEs wird h\u00e4ufig f\u00fcr Kommandozeitsitzungen, Shell-Skripte, Automatisierung, Systemadministration, Build-Tools, CI-Workflows und Unix-\u00e4hnliche Betriebssystemumgebungen verwendet.',
    },
    pt: {
      name: 'Bash',
      description: 'Interface de linha de comando e linguagem de script para o sistema Unix.',
      longDescription:
        'Bash \u00e9 a GNU Bourne Again Shell, um shell compat\u00edvel com o sh, com recursos do Bourne shell, Korn shell e C shell.\n\n\u00c9 amplamente utilizado para sess\u00f5es de linha de comando, scripts de shell, automa\u00e7\u00e3o, administra\u00e7\u00e3o de sistemas, ferramentas de constru\u00e7\u00e3o e fluxos de trabalho CI em ambientes de sistemas operacionais semelhantes ao Unix.',
    },
  },
} satisfies Language;
