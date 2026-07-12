import type { Language } from '@/types';

export const restructuredtext = {
  slug: 'restructuredtext',
  aliases: ['rst'],
  publishedDate: '2001-06-01',
  extensions: ['.rst', '.rest'],
  author: 'David Goodger / Docutils contributors',
  website: 'https://docutils.sourceforge.io/rst.html',
  paradigms: ['markup', 'declarative', 'documentation'],
  tooling: {
    runtimes: ['Docutils', 'Sphinx'],
    packageManagers: ['pip'],
    ecosystems: ['Python', 'Documentation', 'Publishing'],
  },
  version: 'Docutils 0.22.2',
  logo: 'https://cdn.simpleicons.org/readthedocs/8CA1AF',
  color: '#8CA1AF',
  i18n: {
    en: {
      name: 'reStructuredText',
      description: 'A plain-text markup format used by Docutils and Sphinx documentation.',
      longDescription:
        'reStructuredText is a structured plain-text markup language with sections, directives, roles, references, tables, lists, and extension points. Docutils defines the parser model and Sphinx extends it for technical documentation.\n\nIt is used for Python documentation, manuals, API references, books, project notes, and publishing workflows that need semantic markup from readable text.',
    },
    es: {
      name: 'reStructuredText',
      description: 'Un formato de marcado en texto plano usado por Docutils y Sphinx.',
      longDescription:
        'reStructuredText es un lenguaje de marcado estructurado en texto plano con secciones, directives, roles, referencias, tablas, listas y puntos de extension. Docutils define su modelo de parser y Sphinx lo extiende para documentacion tecnica.\n\nSe usa en documentacion Python, manuales, referencias API, libros, notas de proyectos y flujos de publicacion que necesitan marcado semantico desde texto legible.',
    },
    it: {
      name: 'reStructuredText',
      description:
        'Un formato di markup testuale semplice utilizzato da Docutils e Sphinx per la documentazione.',
      longDescription:
        'reStructuredText e un linguaggio di markup testuale strutturato con sezioni, direttive, ruoli, riferimenti, tabelle, liste ed estensioni. Docutils definisce il modello di parser e Sphinx lo estende per la documentazione tecnica.\n\nViene utilizzato per la documentazione di Python, manuali, riferimenti API, libri, note di progetto e flussi di lavoro di pubblicazione che richiedono markup semantico da testo leggibile.',
    },
    fr: {
      name: 'reStructuredText',
      description:
        'Un format de balisage textuel simple utilise par Docutils et Sphinx pour la documentation.',
      longDescription:
        "reStructuredText est un langage de balisage textuel structure avec des sections, des directives, des roles, des references, des tableaux, des listes et des points d'extension. Docutils definit le modele d'analyseur et Sphinx le etend pour la documentation technique.\n\nIl est utilise pour la documentation Python, les manuels, les references API, les livres, les notes de projet et les flux de travail de publication qui necessitent un balisage semantique a partir de texte lisible.",
    },
    de: {
      name: 'reStructuredText',
      description:
        'Ein reines Text-Markup-Format, das von Docutils und Sphinx für die Dokumentation verwendet wird.',
      longDescription:
        'reStructuredText ist eine strukturierte Text-Markup-Sprache mit Abschnitten, Direktiven, Rollen, Referenzen, Tabellen, Listen und Erweiterungspunkten. Docutils definiert das Parser-Modell, und Sphinx erweitert es für technische Dokumentation.\n\nEs wird für Python-Dokumentation, Handbücher, API-Referenzen, Bücher, Projektnotizen und Publishing-Workflows verwendet, die semantisches Markup aus lesbarem Text benötigen.',
    },
    pt: {
      name: 'reStructuredText',
      description: 'Formato de marcação em texto simples usado por Docutils e Sphinx.',
      longDescription:
        'reStructuredText é uma linguagem de marcação em texto simples estruturada com seções, diretivas, papéis, referências, tabelas, listas e pontos de extensão. Docutils define o modelo de análise e Sphinx o estende para documentação técnica.\n\nÉ usado para documentação Python, manuais, referências de API, livros, notas de projeto e fluxos de trabalho de publicação que requerem marcação semântica a partir de texto legível.',
    },
  },
} satisfies Language;
