import type { Language } from '@/types';

export const haml = {
  slug: 'haml',
  publishedDate: '2006-10-01',
  extensions: ['.haml'],
  author: 'Hampton Catlin',
  website: 'https://haml.info',
  paradigms: ['template', 'markup', 'declarative'],
  tooling: {
    runtimes: ['Ruby'],
    packageManagers: ['RubyGems', 'Bundler'],
    ecosystems: ['Ruby', 'Ruby on Rails', 'Web'],
  },
  version: '7.3.1',
  logo: 'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_haml.svg',
  color: '#ECE2A9',
  i18n: {
    en: {
      name: 'Haml',
      description: 'A whitespace-sensitive template language for writing HTML tersely.',
      longDescription:
        'Haml is a markup and template language for generating HTML with indentation-based structure. It removes closing tags, reduces boilerplate, and integrates with Ruby frameworks such as Ruby on Rails.\n\nIt is used in web applications and static rendering pipelines that prefer concise templates, readable nesting, and Ruby-powered interpolation over explicit HTML syntax.',
    },
    es: {
      name: 'Haml',
      description:
        'Un lenguaje de templates sensible a espacios para escribir HTML de forma concisa.',
      longDescription:
        'Haml es un lenguaje de marcado y templates para generar HTML con estructura basada en indentacion. Elimina etiquetas de cierre, reduce repeticion e integra con frameworks Ruby como Ruby on Rails.\n\nSe usa en aplicaciones web y pipelines de renderizado estatico que prefieren templates concisos, anidacion legible e interpolacion con Ruby en vez de sintaxis HTML explicita.',
    },
    it: {
      name: 'Haml',
      description:
        'Un linguaggio di template sensibile allo spazio bianco per scrivere HTML in modo conciso.',
      longDescription:
        "Haml e un linguaggio di markup e template per generare HTML con una struttura basata sull'indentazione. Rimuove i tag di chiusura, riduce il codice boilerplate e si integra con framework Ruby come Ruby on Rails.\n\nE utilizzato in applicazioni web e pipeline di rendering statico che preferiscono modelli concisi, nidificazione leggibile e interpolazione basata su Ruby rispetto alla sintassi HTML esplicita.",
    },
    fr: {
      name: 'Haml',
      description:
        'Un langage de modele sensible aux espaces pour ecrire du HTML de maniere concise.',
      longDescription:
        "Haml est un langage de balisage et de modele pour generer du HTML avec une structure basee sur l'indentation. Il supprime les balises de fermeture, reduit le code repetitif et s'integre avec les frameworks Ruby tels que Ruby on Rails.\n\nIl est utilise dans les applications web et les pipelines de rendu statique qui preferent des modeles concis, un imbricage lisible et l'interpetation Ruby plutot que la syntaxe HTML explicite.",
    },
    de: {
      name: 'Haml',
      description: 'Eine Whitespace-sensitive Template-Sprache zum prägnanten Schreiben von HTML.',
      longDescription:
        'Haml ist eine Markup- und Template-Sprache zum Generieren von HTML mit einer Struktur, die auf Einrückung basiert. Sie entfernt schließende Tags, reduziert Boilerplate und integriert sich in Ruby-Frameworks wie Ruby on Rails.\n\nEs wird in Webanwendungen und statischen Rendering-Pipelines verwendet, die prägnante Templates, lesbare Verschachtelung und Ruby-basierte Interpolation gegenüber expliziter HTML-Syntax bevorzugen.',
    },
    pt: {
      name: 'Haml',
      description:
        'Linguagem de template sensível a espaços em branco para escrever HTML de forma concisa.',
      longDescription:
        'Haml é uma linguagem de marcação e template para gerar HTML com estrutura baseada em indentação. Remove tags de fechamento, reduz código repetitivo e integra-se com frameworks Ruby como Ruby on Rails.\n\nÉ utilizada em aplicações web e pipelines de renderização estática que preferem templates concisos, estrutura de aninhamento legível e interpolação Ruby em vez de sintaxe HTML explícita.',
    },
  },
} satisfies Language;
