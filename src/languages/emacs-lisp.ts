import type { Language } from '@/types';

export const emacsLisp = {
  slug: 'emacs-lisp',
  aliases: ['elisp'],
  publishedDate: '1985-03-20',
  extensions: ['.el'],
  author: 'Richard Stallman / GNU Project',
  website: 'https://www.gnu.org/software/emacs/manual/elisp.html',
  paradigms: ['functional', 'imperative', 'meta-programming', 'scripting'],
  tooling: {
    runtimes: ['GNU Emacs'],
    packageManagers: ['package.el', 'ELPA', 'MELPA'],
    ecosystems: ['Text Editors', 'Scripting'],
  },
  version: 'Emacs 30.1',
  logo: 'https://cdn.simpleicons.org/gnuemacs/7F5AB6',
  color: '#7F5AB6',
  i18n: {
    en: {
      name: 'Emacs Lisp',
      description: 'The Lisp dialect used to implement and extend the GNU Emacs editor.',
      longDescription:
        'Emacs Lisp is a dialect of Lisp that powers most of the GNU Emacs editor. Beyond configuration, it is a complete programming language with dynamic and lexical binding, macros, and an interactive development workflow built into the editor itself.\n\nThousands of packages distributed through ELPA and MELPA are written in Emacs Lisp, covering everything from mail clients and file managers to language servers and note-taking systems such as Org mode.',
    },
    es: {
      name: 'Emacs Lisp',
      description: 'El dialecto de Lisp usado para implementar y extender el editor GNU Emacs.',
      longDescription:
        'Emacs Lisp es un dialecto de Lisp que impulsa la mayor parte del editor GNU Emacs. Más allá de la configuración, es un lenguaje de programación completo con enlace dinámico y léxico, macros y un flujo de desarrollo interactivo integrado en el propio editor.\n\nMiles de paquetes distribuidos a través de ELPA y MELPA están escritos en Emacs Lisp, cubriendo desde clientes de correo y gestores de archivos hasta servidores de lenguaje y sistemas de notas como Org mode.',
    },
    it: {
      name: 'Emacs Lisp',
      description: "Il dialetto Lisp usato per implementare ed estendere l'editor GNU Emacs.",
      longDescription:
        "Emacs Lisp è un dialetto di Lisp che alimenta la maggior parte dell'editor GNU Emacs. Oltre alla configurazione, è un linguaggio di programmazione completo con binding dinamico e lessicale, macro e un flusso di sviluppo interattivo integrato nell'editor stesso.\n\nMigliaia di pacchetti distribuiti tramite ELPA e MELPA sono scritti in Emacs Lisp, coprendo di tutto: client di posta, gestori di file, language server e sistemi di appunti come Org mode.",
    },
    fr: {
      name: 'Emacs Lisp',
      description: "Le dialecte Lisp utilisé pour implémenter et étendre l'éditeur GNU Emacs.",
      longDescription:
        "Emacs Lisp est un dialecte de Lisp qui fait fonctionner la majeure partie de l'éditeur GNU Emacs. Au-delà de la configuration, c'est un langage de programmation complet avec liaison dynamique et lexicale, macros et un flux de développement interactif intégré à l'éditeur lui-même.\n\nDes milliers de paquets distribués via ELPA et MELPA sont écrits en Emacs Lisp, couvrant aussi bien des clients de messagerie et des gestionnaires de fichiers que des serveurs de langage et des systèmes de prise de notes comme Org mode.",
    },
    de: {
      name: 'Emacs Lisp',
      description:
        'Der Lisp-Dialekt, mit dem der GNU-Emacs-Editor implementiert und erweitert wird.',
      longDescription:
        'Emacs Lisp ist ein Lisp-Dialekt, der den größten Teil des GNU-Emacs-Editors antreibt. Über die Konfiguration hinaus ist es eine vollständige Programmiersprache mit dynamischer und lexikalischer Bindung, Makros und einem interaktiven Entwicklungsworkflow direkt im Editor.\n\nTausende über ELPA und MELPA verteilte Pakete sind in Emacs Lisp geschrieben und decken alles ab: von Mail-Clients und Dateimanagern bis zu Language-Servern und Notizsystemen wie Org mode.',
    },
    pt: {
      name: 'Emacs Lisp',
      description: 'O dialeto de Lisp usado para implementar e estender o editor GNU Emacs.',
      longDescription:
        'Emacs Lisp é um dialeto de Lisp que move a maior parte do editor GNU Emacs. Além da configuração, é uma linguagem de programação completa com ligação dinâmica e léxica, macros e um fluxo de desenvolvimento interativo integrado ao próprio editor.\n\nMilhares de pacotes distribuídos via ELPA e MELPA são escritos em Emacs Lisp, cobrindo de clientes de e-mail e gerenciadores de arquivos a servidores de linguagem e sistemas de notas como o Org mode.',
    },
  },
} satisfies Language;
