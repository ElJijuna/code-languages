import type { Language } from '../types';

export const vue = {
  slug: 'vue',
  publishedDate: '2014-02-01',
  extensions: ['.vue'],
  author: 'Evan You / Vue Core Team',
  website: 'https://vuejs.org',
  paradigms: ['component-based', 'declarative', 'reactive'],
  tooling: {
    runtimes: ['Browser', 'Node.js'],
    packageManagers: ['npm', 'pnpm', 'Yarn', 'Bun'],
    ecosystems: ['Web', 'Vue', 'Vite', 'Nuxt'],
  },
  version: '3.5.35',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
  color: '#4FC08D',
  i18n: {
    en: {
      name: 'Vue',
      description:
        'A progressive JavaScript framework for building user interfaces with reactive components.',
      longDescription:
        'Vue is a progressive framework for building user interfaces with single-file components, declarative templates, reactivity, composition APIs, routing, state management, and tooling through the broader Vue ecosystem.\n\nIt is widely used for single-page applications, interactive interfaces, design systems, dashboards, embedded widgets, and full-stack web applications with frameworks such as Nuxt.',
    },
    es: {
      name: 'Vue',
      description:
        'Un framework progresivo de JavaScript para crear interfaces con componentes reactivos.',
      longDescription:
        'Vue es un framework progresivo para crear interfaces de usuario con componentes de archivo unico, plantillas declarativas, reactividad, APIs de composicion, enrutamiento, gestion de estado y herramientas del ecosistema Vue.\n\nSe usa ampliamente en aplicaciones de una sola pagina, interfaces interactivas, sistemas de diseno, dashboards, widgets embebidos y aplicaciones web full-stack con frameworks como Nuxt.',
    },
    it: {
      name: 'Vue',
      description:
        'Un framework JavaScript progressivo per la creazione di interfacce utente con componenti reattivi.',
      longDescription:
        "Vue e un framework progressivo per la creazione di interfacce utente con componenti a singolo file, modelli dichiarativi, reattivita, API di composizione, routing, gestione dello stato e strumenti attraverso l'ecosistema piu ampio di Vue.\n\nE ampiamente utilizzato per applicazioni a pagina singola, interfacce interattive, sistemi di design, dashboard, widget incorporati e applicazioni web full-stack con framework come Nuxt.",
    },
    fr: {
      name: 'Vue',
      description:
        "Un framework JavaScript progressif pour la creation d'interfaces utilisateur avec des composants reactifs.",
      longDescription:
        "Vue est un framework progressif pour la creation d'interfaces utilisateur avec des composants a fichier unique, des modeles declaratifs, la reactivite, les API de composition, le routage, la gestion de l'etat et des outils grace a l'ecosysteme Vue plus large.\n\nIl est largement utilise pour les applications monopages, les interfaces interactives, les systemes de conception, les tableaux de bord, les widgets embarques et les applications web completes avec des frameworks tels que Nuxt.",
    },
    de: {
      name: 'Vue',
      description:
        'Ein progressives JavaScript-Framework zum Erstellen von Benutzeroberflächen mit reaktiven Komponenten.',
      longDescription:
        'Vue ist ein progressives Framework zum Erstellen von Benutzeroberflächen mit Single-File-Komponenten, deklarativen Templates, Reaktivität, Composition APIs, Routing, State Management und Tools durch das breitere Vue-Ökosystem.\n\nEs wird häufig für Single-Page-Anwendungen, interaktive Oberflächen, Designsysteme, Dashboards, eingebettete Widgets und Full-Stack-Webanwendungen mit Frameworks wie Nuxt verwendet.',
    },
    pt: {
      name: 'Vue',
      description:
        'Framework JavaScript progressivo para construir interfaces de usuário com componentes reativos.',
      longDescription:
        'Vue é um framework progressivo para construir interfaces de usuário com componentes de arquivo único, modelos declarativos, reatividade, APIs de composição, roteamento, gerenciamento de estado e ferramentas através do ecossistema Vue mais amplo.\n\nÉ amplamente utilizado para aplicações de página única, interfaces interativas, sistemas de design, painéis, widgets embarcados e aplicações web completas com frameworks como Nuxt.',
    },
  },
} satisfies Language;
