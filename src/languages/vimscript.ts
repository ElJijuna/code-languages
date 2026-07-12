import type { Language } from '@/types';

export const vimscript = {
  slug: 'vimscript',
  aliases: ['vim', 'vim script', 'viml'],
  publishedDate: '1991-11-02',
  extensions: ['.vim', '.vimrc', '.gvimrc'],
  author: 'Bram Moolenaar',
  website: 'https://www.vim.org',
  paradigms: ['imperative', 'scripting'],
  tooling: {
    runtimes: ['Vim', 'Neovim'],
    packageManagers: ['vim-plug', 'lazy.nvim', 'packer.nvim'],
    ecosystems: ['Text Editors', 'Scripting'],
  },
  version: 'Vim 9.1',
  logo: 'https://cdn.simpleicons.org/vim/019733',
  color: '#019733',
  i18n: {
    en: {
      name: 'Vim script',
      description: 'The scripting language built into the Vim editor for configuration & plugins.',
      longDescription:
        'Vim script is the scripting language embedded in the Vim text editor. It drives user configuration through vimrc files and powers a large plugin ecosystem, with commands, autocommands, functions, and access to buffers, windows, and registers.\n\nVim 9 introduced Vim9 script, a faster, more structured dialect with typed variables and compiled functions, while Neovim pairs the legacy dialect with Lua as an alternative extension language.',
    },
    es: {
      name: 'Vim script',
      description:
        'El lenguaje de scripting integrado en el editor Vim para configuración y plugins.',
      longDescription:
        'Vim script es el lenguaje de scripting integrado en el editor de texto Vim. Gestiona la configuración del usuario mediante archivos vimrc e impulsa un gran ecosistema de plugins, con comandos, autocomandos, funciones y acceso a buffers, ventanas y registros.\n\nVim 9 introdujo Vim9 script, un dialecto más rápido y estructurado con variables tipadas y funciones compiladas, mientras que Neovim combina el dialecto clásico con Lua como lenguaje de extensión alternativo.',
    },
    it: {
      name: 'Vim script',
      description:
        "Il linguaggio di scripting integrato nell'editor Vim per configurazione e plugin.",
      longDescription:
        "Vim script è il linguaggio di scripting incorporato nell'editor di testo Vim. Gestisce la configurazione dell'utente tramite i file vimrc e alimenta un vasto ecosistema di plugin, con comandi, autocomandi, funzioni e accesso a buffer, finestre e registri.\n\nVim 9 ha introdotto Vim9 script, un dialetto più veloce e strutturato con variabili tipate e funzioni compilate, mentre Neovim affianca al dialetto classico Lua come linguaggio di estensione alternativo.",
    },
    fr: {
      name: 'Vim script',
      description:
        "Le langage de script intégré à l'éditeur Vim pour la configuration et les plugins.",
      longDescription:
        "Vim script est le langage de script intégré à l'éditeur de texte Vim. Il pilote la configuration de l'utilisateur via les fichiers vimrc et alimente un vaste écosystème de plugins, avec des commandes, des autocommandes, des fonctions et un accès aux tampons, fenêtres et registres.\n\nVim 9 a introduit Vim9 script, un dialecte plus rapide et plus structuré avec des variables typées et des fonctions compilées, tandis que Neovim associe le dialecte historique à Lua comme langage d'extension alternatif.",
    },
    de: {
      name: 'Vim script',
      description: 'Die im Vim-Editor eingebaute Skriptsprache für Konfiguration und Plugins.',
      longDescription:
        'Vim script ist die in den Texteditor Vim eingebettete Skriptsprache. Sie steuert die Benutzerkonfiguration über vimrc-Dateien und treibt ein großes Plugin-Ökosystem an, mit Befehlen, Autokommandos, Funktionen und Zugriff auf Puffer, Fenster und Register.\n\nVim 9 führte Vim9 script ein, einen schnelleren, stärker strukturierten Dialekt mit typisierten Variablen und kompilierten Funktionen, während Neovim den klassischen Dialekt mit Lua als alternativer Erweiterungssprache kombiniert.',
    },
    pt: {
      name: 'Vim script',
      description: 'A linguagem de script embutida no editor Vim para configuração e plugins.',
      longDescription:
        'Vim script é a linguagem de script embutida no editor de texto Vim. Ela controla a configuração do usuário por meio de arquivos vimrc e move um grande ecossistema de plugins, com comandos, autocomandos, funções e acesso a buffers, janelas e registradores.\n\nO Vim 9 introduziu o Vim9 script, um dialeto mais rápido e estruturado com variáveis tipadas e funções compiladas, enquanto o Neovim combina o dialeto clássico com Lua como linguagem de extensão alternativa.',
    },
  },
} satisfies Language;
