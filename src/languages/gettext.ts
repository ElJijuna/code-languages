import type { Language } from '@/types';

export const gettext = {
  slug: 'gettext',
  publishedDate: '1995-01-01',
  extensions: ['.po', '.pot'],
  author: 'GNU Project',
  website: 'https://www.gnu.org/software/gettext',
  paradigms: ['localization', 'data'],
  tooling: {
    runtimes: ['GNU gettext'],
    ecosystems: ['Internationalization', 'Localization'],
  },
  version: 'stable',
  logo: 'https://dummyimage.com/32x32/7C3AED/ffffff.png&text=PO',
  color: '#7C3AED',
  i18n: {
    en: {
      name: 'Gettext',
      description: 'A localization message catalog format for translating software strings.',
      longDescription:
        'Gettext PO and POT files store translatable messages, translations, contexts, plural forms, comments, and source references. The format is line-oriented text, designed for extraction tools and translation workflows.\n\nIt is widely used in free software, desktop applications, command-line tools, web frameworks, and content systems. Gettext catalogs let source strings stay in code while translators work in separate message files.',
    },
    es: {
      name: 'Gettext',
      description:
        'Formato de catalogo de mensajes de localizacion para traducir cadenas de software.',
      longDescription:
        'Los archivos PO y POT de Gettext almacenan mensajes traducibles, traducciones, contextos, formas plurales, comentarios y referencias de origen. El formato es texto orientado a lineas, disenado para herramientas de extraccion y flujos de traduccion.\n\nSe usa ampliamente en software libre, aplicaciones de escritorio, herramientas de linea de comandos, frameworks web y sistemas de contenido. Los catalogos Gettext permiten mantener cadenas fuente en codigo mientras traductores trabajan en archivos separados.',
    },
    it: {
      name: 'Gettext',
      description:
        'Formato di catalogo messaggi per localizzazione e traduzione di stringhe software.',
      longDescription:
        'I file PO e POT di Gettext memorizzano messaggi traducibili, traduzioni, contesti, forme plurali, commenti e riferimenti sorgente. Il formato e testo orientato alle righe, progettato per strumenti di estrazione e flussi di traduzione.\n\nE molto usato in software libero, applicazioni desktop, strumenti a riga di comando, framework web e sistemi di contenuto. I cataloghi Gettext permettono di tenere le stringhe sorgente nel codice mentre i traduttori lavorano in file separati.',
    },
    fr: {
      name: 'Gettext',
      description:
        'Format de catalogue de messages de localisation pour traduire les chaines logicielles.',
      longDescription:
        'Les fichiers PO et POT de Gettext stockent messages traduisibles, traductions, contextes, formes plurielles, commentaires et references source. Le format est un texte oriente lignes, concu pour les outils d extraction et les flux de traduction.\n\nIl est tres utilise dans le logiciel libre, les applications de bureau, les outils en ligne de commande, les frameworks web et les systemes de contenu. Les catalogues Gettext gardent les chaines source dans le code tandis que les traducteurs travaillent dans des fichiers separes.',
    },
    de: {
      name: 'Gettext',
      description: 'Lokalisierungs-Katalogformat zum Ubersetzen von Software-Zeichenketten.',
      longDescription:
        'Gettext-PO- und POT-Dateien speichern ubersetzbare Meldungen, Ubersetzungen, Kontexte, Pluralformen, Kommentare und Quellreferenzen. Das Format ist zeilenorientierter Text fur Extraktionswerkzeuge und Ubersetzungsablaufe.\n\nEs wird breit in freier Software, Desktop-Anwendungen, Kommandozeilenwerkzeugen, Webframeworks und Content-Systemen genutzt. Gettext-Kataloge lassen Quellstrings im Code, wahrend Ubersetzer in separaten Meldungsdateien arbeiten.',
    },
    pt: {
      name: 'Gettext',
      description:
        'Formato de catalogo de mensagens de localizacao para traduzir strings de software.',
      longDescription:
        'Arquivos PO e POT de Gettext armazenam mensagens traduziveis, traducoes, contextos, formas plurais, comentarios e referencias de origem. O formato e texto orientado a linhas, feito para ferramentas de extracao e fluxos de traducao.\n\nEle e muito usado em software livre, aplicativos desktop, ferramentas de linha de comando, frameworks web e sistemas de conteudo. Catalogos Gettext deixam strings fonte no codigo enquanto tradutores trabalham em arquivos separados.',
    },
  },
} satisfies Language;
