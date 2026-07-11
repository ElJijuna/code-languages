import type { Language } from '@/types';

export const fish = {
  slug: 'fish',
  publishedDate: '2005-10-13',
  extensions: ['.fish'],
  author: 'Axel Liljencrantz',
  website: 'https://fishshell.com',
  paradigms: ['imperative', 'scripting'],
  tooling: {
    runtimes: ['fish'],
    packageManagers: ['Fisher', 'Oh My Fish'],
    ecosystems: ['Shell', 'Unix', 'macOS', 'Linux'],
  },
  version: '4.8.0',
  logo: 'https://fishshell.com/assets/img/Terminal_Logo2_CRT_Flat.png',
  color: '#4AAE21',
  i18n: {
    en: {
      name: 'Fish',
      description:
        'A smart and user-friendly command line shell for Unix-like systems with autosuggestions and syntax highlighting.',
      longDescription:
        'Fish (Friendly Interactive SHell) is a Unix shell designed to be interactive and user-friendly out of the box. It provides features like autosuggestions based on history, syntax highlighting, tab completions from man pages, and a web-based configuration interface.\n\nUnlike Bash or Zsh, Fish avoids POSIX compatibility to offer a cleaner scripting language with consistent syntax. It is popular among developers who want a productive shell experience without heavy configuration.',
    },
    es: {
      name: 'Fish',
      description:
        'Un shell de línea de comandos amigable para sistemas Unix con autosugerencias y resaltado de sintaxis.',
      longDescription:
        'Fish (Friendly Interactive SHell) es un shell Unix diseñado para ser interactivo y fácil de usar. Ofrece autosugerencias basadas en el historial, resaltado de sintaxis, completado de tabulación desde páginas man y una interfaz de configuración web.\n\nA diferencia de Bash o Zsh, Fish evita la compatibilidad POSIX para ofrecer un lenguaje de scripting más limpio con sintaxis consistente. Es popular entre desarrolladores que buscan productividad sin configuración compleja.',
    },
    it: {
      name: 'Fish',
      description:
        'Una shell a riga di comando intelligente per sistemi Unix con suggerimenti automatici e evidenziazione della sintassi.',
      longDescription:
        "Fish (Friendly Interactive SHell) è una shell Unix progettata per essere interattiva e facile da usare. Offre suggerimenti automatici basati sulla cronologia, evidenziazione della sintassi, completamento con tab dalle pagine man e un'interfaccia di configurazione web.\n\nA differenza di Bash o Zsh, Fish evita la compatibilità POSIX per offrire un linguaggio di scripting più pulito con sintassi coerente. È popolare tra gli sviluppatori che vogliono produttività senza configurazione complessa.",
    },
    fr: {
      name: 'Fish',
      description:
        'Un shell en ligne de commande convivial pour les systèmes Unix avec autocomplétion et coloration syntaxique.',
      longDescription:
        "Fish (Friendly Interactive SHell) est un shell Unix conçu pour être interactif et facile à utiliser. Il offre des suggestions automatiques basées sur l'historique, la coloration syntaxique, la complétion par tabulation depuis les pages man et une interface de configuration web.\n\nContrairement à Bash ou Zsh, Fish évite la compatibilité POSIX pour proposer un langage de script plus propre avec une syntaxe cohérente. Il est populaire parmi les développeurs qui souhaitent une productivité élevée sans configuration complexe.",
    },
    de: {
      name: 'Fish',
      description:
        'Eine benutzerfreundliche Kommandozeilen-Shell für Unix-Systeme mit Autovervollständigung und Syntaxhervorhebung.',
      longDescription:
        'Fish (Friendly Interactive SHell) ist eine Unix-Shell, die von Grund auf interaktiv und benutzerfreundlich gestaltet ist. Sie bietet verlaufsbasierte Autovervollständigung, Syntaxhervorhebung, Tab-Vervollständigung aus Man-Seiten und eine webbasierte Konfigurationsoberfläche.\n\nAnders als Bash oder Zsh verzichtet Fish auf POSIX-Kompatibilität, um eine sauberere Skriptsprache mit konsistenter Syntax zu bieten. Sie ist bei Entwicklern beliebt, die produktiv arbeiten möchten ohne aufwendige Konfiguration.',
    },
    pt: {
      name: 'Fish',
      description:
        'Um shell de linha de comando amigável para sistemas Unix com autosugestões e destaque de sintaxe.',
      longDescription:
        'Fish (Friendly Interactive SHell) é um shell Unix projetado para ser interativo e fácil de usar. Oferece autosugestões baseadas no histórico, destaque de sintaxe, completamento por tab a partir de páginas man e uma interface de configuração web.\n\nAo contrário do Bash ou Zsh, o Fish evita compatibilidade POSIX para oferecer uma linguagem de script mais limpa com sintaxe consistente. É popular entre desenvolvedores que buscam produtividade sem configuração complexa.',
    },
  },
} satisfies Language;
