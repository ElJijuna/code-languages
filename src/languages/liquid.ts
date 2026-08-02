import type { Language } from '@/types';

export const liquid = {
  slug: 'liquid',
  publishedDate: '2006-06-01',
  extensions: ['.liquid'],
  author: 'Shopify',
  website: 'https://shopify.github.io/liquid/',
  paradigms: ['templating', 'declarative', 'logic-less', 'server-side'],
  tooling: {
    runtimes: ['Ruby', 'Node.js', 'Shopify'],
    packageManagers: ['RubyGems', 'npm'],
    ecosystems: ['Shopify', 'Jekyll', 'Static Sites', 'E-commerce'],
  },
  version: '10.28.0',
  logo: 'https://cdn.simpleicons.org/shopify/7AB55C',
  color: '#7AB55C',
  i18n: {
    en: {
      name: 'Liquid',
      description: 'A safe template language used by Shopify, Jekyll, and content-driven sites.',
      longDescription:
        'Liquid is a template language designed to expose controlled data to templates through tags, objects, filters, loops, conditions, and includes. It favors predictable rendering and constrained logic so non-developers can safely customize content presentation.\n\nIt is used in Shopify themes, Jekyll sites, GitHub Pages, storefront customization, content management systems, email templates, and static publishing workflows.',
    },
    es: {
      name: 'Liquid',
      description:
        'Un lenguaje de plantillas seguro usado por Shopify, Jekyll y sitios basados en contenido.',
      longDescription:
        'Liquid es un lenguaje de plantillas disenado para exponer datos controlados mediante tags, objetos, filtros, bucles, condiciones e includes. Prioriza renderizado predecible y logica limitada para que personas no desarrolladoras puedan personalizar la presentacion de contenido con seguridad.\n\nSe usa en temas de Shopify, sitios Jekyll, GitHub Pages, personalizacion de tiendas, sistemas de gestion de contenido, plantillas de email y flujos de publicacion estatica.',
    },
    it: {
      name: 'Liquid',
      description:
        'Un linguaggio di template sicuro utilizzato da Shopify, Jekyll e siti basati sui contenuti.',
      longDescription:
        'Liquid e un linguaggio di template progettato per esporre dati controllati ai template tramite tag, oggetti, filtri, cicli, condizioni e inclusioni. Favorisce la rendering prevedibile e la logica limitata, in modo che anche chi non e uno sviluppatore possa personalizzare in modo sicuro la presentazione dei contenuti.\n\nE utilizzato in temi Shopify, siti Jekyll, GitHub Pages, personalizzazione dei negozi online, sistemi di gestione dei contenuti, modelli di email e flussi di lavoro di pubblicazione statica.',
    },
    fr: {
      name: 'Liquid',
      description:
        'Un langage de modele securise utilise par Shopify, Jekyll et les sites axes sur le contenu.',
      longDescription:
        "Liquid est un langage de modele concu pour exposer des donnees controlees aux modeles via des balises, des objets, des filtres, des boucles, des conditions et des inclusions. Il favorise le rendu previsible et une logique contrainte, de sorte que les non-developpeurs puissent personnaliser en toute securite la presentation du contenu.\n\nIl est utilise dans les themes Shopify, les sites Jekyll, GitHub Pages, la personnalisation des boutiques, les systemes de gestion de contenu, les modeles d'e-mails et les flux de publication statique.",
    },
    de: {
      name: 'Liquid',
      description:
        'Eine sichere Template-Sprache, die von Shopify, Jekyll und Inhaltsseiten verwendet wird.',
      longDescription:
        'Liquid ist eine Template-Sprache, die kontrollierten Daten durch Tags, Objekte, Filter, Schleifen, Bedingungen und Includes an Templates ausgibt. Sie bevorzugt vorhersehbare Rendering- und eingeschränkte Logik, sodass auch Nicht-Entwickler Inhalte sicher anpassen können.\n\nSie wird in Shopify-Themes, Jekyll-Sites, GitHub Pages, für die Anpassung von Frontends, in Content-Management-Systemen, E-Mail-Vorlagen und für statische Publishing-Workflows verwendet.',
    },
    pt: {
      name: 'Liquid',
      description:
        'Linguagem de template segura usada por Shopify, Jekyll e sites baseados em conteúdo.',
      longDescription:
        'Liquid é uma linguagem de template projetada para expor dados controlados a templates por meio de tags, objetos, filtros, loops, condições e includes. Ela favorece a renderização previsível e a lógica restrita, permitindo que usuários sem experiência em desenvolvimento personalizem a apresentação do conteúdo com segurança.\n\nÉ utilizada em temas Shopify, sites Jekyll, GitHub Pages, personalização de storefronts, sistemas de gerenciamento de conteúdo, modelos de e-mail e fluxos de publicação estática.',
    },
  },
} satisfies Language;
