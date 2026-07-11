import type { Language } from '@/types';

export const html = {
  slug: 'html',
  publishedDate: '1993-06-01',
  extensions: ['.html', '.htm'],
  author: 'Tim Berners-Lee / WHATWG',
  website: 'https://html.spec.whatwg.org',
  paradigms: ['declarative', 'markup'],
  version: 'Living Standard',
  logo: 'https://www.w3.org/html/logo/downloads/HTML5_Badge.svg',
  color: '#E34F26',
  i18n: {
    en: {
      name: 'HTML',
      description: 'A markup language for structuring web pages and browser-rendered documents.',
      longDescription:
        'HTML defines the structure and semantics of documents on the web, using elements and attributes to describe headings, paragraphs, links, media, forms, and application surfaces.\n\nIt is maintained as a living standard and works alongside CSS and JavaScript as one of the core technologies of the web platform.',
    },
    es: {
      name: 'HTML',
      description:
        'Un lenguaje de marcado para estructurar paginas web y documentos en navegadores.',
      longDescription:
        'HTML define la estructura y semantica de documentos en la web, usando elementos y atributos para describir encabezados, parrafos, enlaces, medios, formularios y superficies de aplicacion.\n\nSe mantiene como un estandar vivo y trabaja junto a CSS y JavaScript como una de las tecnologias centrales de la plataforma web.',
    },
    it: {
      name: 'HTML',
      description:
        'Un linguaggio di markup per strutturare pagine web e documenti renderizzati dal browser.',
      longDescription:
        'HTML definisce la struttura e la semantica dei documenti sul web, utilizzando elementi e attributi per descrivere intestazioni, paragrafi, link, media, moduli e superfici di applicazione.\n\nE mantenuto come standard vivente e funziona in parallelo con CSS e JavaScript come una delle tecnologie fondamentali della piattaforma web.',
    },
    fr: {
      name: 'HTML',
      description:
        'Un langage de balisage pour structurer les pages web et les documents rendus par les navigateurs.',
      longDescription:
        "HTML definit la structure et la semantique des documents sur le web, en utilisant des elements et des attributs pour decrire les titres, les paragraphes, les liens, les medias, les formulaires et les surfaces d'application.\n\nIl est maintenu comme un standard vivant et fonctionne en collaboration avec CSS et JavaScript, en tant que l'une des technologies de base de la plateforme web.",
    },
    de: {
      name: 'HTML',
      description:
        'Eine Markup-Sprache zur Strukturierung von Webseiten und browserbasierten Dokumenten.',
      longDescription:
        'HTML definiert die Struktur und Semantik von Dokumenten im Web, wobei Elemente und Attribute verwendet werden, um Überschriften, Absätze, Links, Medien, Formulare und Anwendungsoberflächen zu beschreiben.\n\nEs wird als lebendige Norm gepflegt und arbeitet zusammen mit CSS und JavaScript als eine der Kerntechnologien der Webplattform.',
    },
    pt: {
      name: 'HTML',
      description:
        'Linguagem de marcação para estruturar páginas da web e documentos renderizados por navegadores.',
      longDescription:
        'O HTML define a estrutura e a semântica de documentos na web, usando elementos e atributos para descrever cabeçalhos, parágrafos, links, mídia, formulários e interfaces de aplicações.\n\nÉ mantido como um padrão vivo e funciona em conjunto com CSS e JavaScript como uma das principais tecnologias da plataforma web.',
    },
  },
} satisfies Language;
