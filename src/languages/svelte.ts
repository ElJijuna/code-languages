import type { Language } from '../types';

export const svelte = {
  slug: 'svelte',
  publishedDate: '2016-11-26',
  extensions: ['.svelte'],
  author: 'Rich Harris / Svelte contributors',
  website: 'https://svelte.dev',
  paradigms: ['component-based', 'declarative', 'reactive', 'compiled'],
  tooling: {
    runtimes: ['Browser', 'Node.js'],
    packageManagers: ['npm', 'pnpm', 'Yarn', 'Bun'],
    ecosystems: ['Web', 'SvelteKit', 'Vite'],
  },
  version: '5.56.2',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg',
  color: '#FF3E00',
  i18n: {
    en: {
      name: 'Svelte',
      description: 'A compiled component framework for building reactive web user interfaces.',
      longDescription:
        'Svelte components combine markup, styles, and script logic in single-file components that are compiled into efficient JavaScript for updating the DOM.\n\nIt is widely used for web applications, interactive interfaces, static sites, design systems, dashboards, and SvelteKit projects where developers want a reactive component model with minimal runtime overhead.',
    },
    es: {
      name: 'Svelte',
      description: 'Un framework de componentes compilado para crear interfaces web reactivas.',
      longDescription:
        'Los componentes Svelte combinan marcado, estilos y logica de script en componentes de archivo unico que se compilan a JavaScript eficiente para actualizar el DOM.\n\nSe usa ampliamente en aplicaciones web, interfaces interactivas, sitios estaticos, sistemas de diseno, dashboards y proyectos SvelteKit donde se busca un modelo de componentes reactivo con poca sobrecarga en runtime.',
    },
    it: {
      name: 'Svelte',
      description:
        'Un framework di componenti compilato per la creazione di interfacce utente web reattive.',
      longDescription:
        'I componenti Svelte combinano markup, stili e logica di script in componenti a singolo file che vengono compilati in JavaScript efficiente per aggiornare il DOM.\n\nE ampiamente utilizzato per applicazioni web, interfacce interattive, siti statici, sistemi di design, dashboard e progetti SvelteKit in cui gli sviluppatori desiderano un modello di componenti reattivo con un overhead di runtime minimo.',
    },
    fr: {
      name: 'Svelte',
      description:
        "Un framework de composants compile pour la creation d'interfaces utilisateur web reactives.",
      longDescription:
        "Les composants Svelte combinent la mise en forme, les styles et la logique de script dans des composants a fichier unique, qui sont compiles en JavaScript efficace pour mettre a jour le DOM.\n\nIl est largement utilise pour les applications web, les interfaces interactives, les sites statiques, les systemes de conception, les tableaux de bord et les projets SvelteKit, ou les developpeurs souhaitent un modele de composants reactif avec une faible surcharge d'execution.",
    },
    de: {
      name: 'Svelte',
      description:
        'Ein kompiliertes Komponenten-Framework zum Erstellen reaktiver Web-Benutzeroberfl\u00e4chen.',
      longDescription:
        'Svelte-Komponenten kombinieren Markup, Stile und Skriptlogik in einzelnen Dateien, die kompiliert werden, um effizienten JavaScript f\u00fcr die DOM-Aktualisierung zu erzeugen.\n\nEs wird h\u00e4ufig f\u00fcr Webanwendungen, interaktive Oberfl\u00e4chen, statische Websites, Designsysteme, Dashboards und SvelteKit-Projekte verwendet, in denen Entwickler ein reaktives Komponentenmodell mit minimalem Laufzeitaufwand w\u00fcnschen.',
    },
    pt: {
      name: 'Svelte',
      description:
        'Um framework de componentes compilado para construir interfaces de usu\u00e1rio web reativas.',
      longDescription:
        'Os componentes Svelte combinam marca\u00e7\u00e3o, estilos e l\u00f3gica de script em componentes de arquivo \u00fanico, que s\u00e3o compilados em JavaScript eficiente para atualizar o DOM.\n\n\u00c9 amplamente utilizado para aplica\u00e7\u00f5es web, interfaces interativas, sites est\u00e1ticos, sistemas de design, pain\u00e9is de controle e projetos SvelteKit, onde os desenvolvedores desejam um modelo de componente reativo com m\u00ednimo overhead de tempo de execu\u00e7\u00e3o.',
    },
  },
} satisfies Language;
