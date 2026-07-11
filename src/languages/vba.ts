import type { Language } from '@/types';

export const vba = {
  slug: 'vba',
  publishedDate: '1993-04-01',
  extensions: ['.bas', '.cls', '.frm', '.vba'],
  author: 'Microsoft',
  website: 'https://learn.microsoft.com/en-us/office/vba/api/overview/',
  paradigms: ['imperative', 'object-oriented', 'event-driven'],
  tooling: {
    ecosystems: ['Microsoft Office', 'Excel', 'Access', 'Word', 'Outlook'],
  },
  version: 'VBA 7.1',
  logo: 'https://dummyimage.com/32x32/217346/ffffff.png&text=VBA',
  color: '#217346',
  i18n: {
    en: {
      name: 'VBA',
      description: 'A macro language embedded in Microsoft Office applications.',
      longDescription:
        'Visual Basic for Applications (VBA) is an event-driven programming language built into most Microsoft Office applications.\n\nIt enables automation of repetitive tasks, creation of custom functions, interaction with Windows APIs, and integration between Office applications such as Excel, Word, Access, and Outlook.',
    },
    es: {
      name: 'VBA',
      description: 'Un lenguaje de macros integrado en las aplicaciones de Microsoft Office.',
      longDescription:
        'Visual Basic for Applications (VBA) es un lenguaje de programacion orientado a eventos integrado en la mayoria de las aplicaciones de Microsoft Office.\n\nPermite automatizar tareas repetitivas, crear funciones personalizadas, interactuar con las APIs de Windows e integrar aplicaciones de Office como Excel, Word, Access y Outlook.',
    },
    it: {
      name: 'VBA',
      description: 'Un linguaggio macro integrato nelle applicazioni Microsoft Office.',
      longDescription:
        'Visual Basic for Applications (VBA) e un linguaggio di programmazione orientato agli eventi integrato nella maggior parte delle applicazioni Microsoft Office.\n\nConsente di automatizzare le attivita ripetitive, creare funzioni personalizzate, interagire con le API di Windows e integrare applicazioni Office come Excel, Word, Access e Outlook.',
    },
    fr: {
      name: 'VBA',
      description: 'Un langage de macros intégré aux applications Microsoft Office.',
      longDescription:
        "Visual Basic for Applications (VBA) est un langage de programmation orienté événements intégré dans la plupart des applications Microsoft Office.\n\nIl permet d'automatiser les tâches répétitives, de créer des fonctions personnalisées, d'interagir avec les API Windows et d'intégrer des applications Office comme Excel, Word, Access et Outlook.",
    },
    de: {
      name: 'VBA',
      description: 'Eine in Microsoft Office-Anwendungen eingebettete Makrosprache.',
      longDescription:
        'Visual Basic for Applications (VBA) ist eine ereignisgesteuerte Programmiersprache, die in die meisten Microsoft Office-Anwendungen integriert ist.\n\nSie ermöglicht die Automatisierung von Routineaufgaben, die Erstellung benutzerdefinierter Funktionen, die Interaktion mit Windows-APIs und die Integration von Office-Anwendungen wie Excel, Word, Access und Outlook.',
    },
    pt: {
      name: 'VBA',
      description: 'Uma linguagem de macros incorporada nos aplicativos do Microsoft Office.',
      longDescription:
        'Visual Basic for Applications (VBA) é uma linguagem de programação orientada a eventos integrada à maioria dos aplicativos Microsoft Office.\n\nPermite automatizar tarefas repetitivas, criar funções personalizadas, interagir com APIs do Windows e integrar aplicativos Office como Excel, Word, Access e Outlook.',
    },
  },
} satisfies Language;
