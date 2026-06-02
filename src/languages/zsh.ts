import type { Language } from '../types';

export const zsh = {
  slug: 'zsh',
  publishedDate: '1990-01-01',
  extensions: ['.zsh', '.zshrc', '.zshenv', '.zprofile', '.zlogin', '.zlogout', '.zsh-theme'],
  author: 'Paul Falstad',
  website: 'https://www.zsh.org',
  paradigms: ['command', 'imperative', 'scripting', 'shell'],
  tooling: {
    runtimes: ['Z shell', 'Unix-like shells'],
    packageManagers: ['Homebrew', 'APT', 'DNF', 'Pacman'],
    ecosystems: ['Unix', 'Linux', 'macOS', 'DevOps'],
  },
  version: '5.9.1',
  logo: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Z_Shell_Logo_Color_Horizontal.svg',
  color: '#89E051',
  i18n: {
    en: {
      name: 'zsh',
      description:
        'A Unix shell and command language for interactive use, scripting, and automation.',
      longDescription:
        'zsh is a Unix shell designed for interactive command-line use and shell scripting, with advanced completion, globbing, prompt customization, and shell emulation features.\n\nIt is widely used as a login shell, especially on Unix-like systems and macOS, and is common in developer workflows, terminal customization, automation scripts, and system administration.',
    },
    es: {
      name: 'zsh',
      description:
        'Un shell Unix y lenguaje de comandos para uso interactivo, scripting y automatizacion.',
      longDescription:
        'zsh es un shell Unix disenado para uso interactivo en linea de comandos y scripting, con autocompletado avanzado, globbing, personalizacion del prompt y funciones de emulacion de shells.\n\nSe usa ampliamente como login shell, especialmente en sistemas tipo Unix y macOS, y es comun en flujos de desarrollo, personalizacion de terminales, scripts de automatizacion y administracion de sistemas.',
    },
    it: {
      name: 'zsh',
      description:
        "Un shell Unix e linguaggio di comandi per l'uso interattivo, la scripting e l'automazione.",
      longDescription:
        "zsh e un shell Unix progettato per l'uso interattivo della riga di comando e la scripting di shell, con funzionalita avanzate di completamento, globbing, personalizzazione del prompt e emulazione di shell.\n\nE ampiamente utilizzato come shell di login, in particolare sui sistemi Unix-like e macOS, ed e comune nei flussi di lavoro degli sviluppatori, nella personalizzazione del terminale, negli script di automazione e nell'amministrazione di sistema.",
    },
    fr: {
      name: 'zsh',
      description:
        "Un shell et langage de commande Unix pour une utilisation interactive, le script et l'automatisation.",
      longDescription:
        "zsh est un shell Unix concu pour une utilisation interactive en ligne de commande et le script de shell, avec des fonctionnalites avancees telles que la completion, le globbing, la personnalisation du prompt et l'emulation de shell.\n\nIl est largement utilise comme shell de connexion, en particulier sur les systemes Unix-like et macOS, et est courant dans les flux de travail des developpeurs, la personnalisation des terminaux, les scripts d'automatisation et l'administration systeme.",
    },
    de: {
      name: 'zsh',
      description:
        'Ein Unix-Shell und eine Befehls-Sprache f\u00fcr interaktive Nutzung, Skripte und Automatisierung.',
      longDescription:
        'zsh ist ein Unix-Shell, das f\u00fcr interaktive Kommandozeilen-Nutzung und Shell-Skripte entwickelt wurde, mit erweiterten Funktionen wie Autovervollst\u00e4ndigung, Globbing, Prompt-Anpassung und Shell-Emulation.\n\nEs wird h\u00e4ufig als Login-Shell verwendet, insbesondere auf Unix-\u00e4hnlichen Systemen und macOS, und ist in Entwickler-Workflows, Terminal-Anpassungen, Automatisierungsskripten und Systemadministration weit verbreitet.',
    },
    pt: {
      name: 'zsh',
      description:
        'Uma shell e linguagem de comando Unix para uso interativo, scripting e automa\u00e7\u00e3o.',
      longDescription:
        'zsh \u00e9 uma shell Unix projetada para uso interativo na linha de comando e scripting de shell, com recursos avan\u00e7ados de autocompletar, expans\u00e3o de glob, personaliza\u00e7\u00e3o do prompt e emula\u00e7\u00e3o de shell.\n\n\u00c9 amplamente utilizada como shell de login, especialmente em sistemas Unix-like e macOS, e \u00e9 comum em fluxos de trabalho de desenvolvedores, personaliza\u00e7\u00e3o de terminais, scripts de automa\u00e7\u00e3o e administra\u00e7\u00e3o de sistemas.',
    },
  },
} satisfies Language;
