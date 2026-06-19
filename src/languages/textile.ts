import type { Language } from '../types';

export const textile = {
  slug: 'textile',
  publishedDate: '2002-12-26',
  extensions: ['.textile'],
  author: 'Dean Allen',
  website: 'https://textile-lang.com',
  paradigms: ['markup', 'documentation'],
  tooling: {
    ecosystems: ['Web', 'CMS', 'Documentation'],
  },
  version: '4.1.4',
  logo: 'https://dummyimage.com/32x32/CC0000/ffffff.png&text=TX',
  color: '#CC0000',
  i18n: {
    en: {
      name: 'Textile',
      description:
        'A lightweight markup language that converts readable plain text into structured HTML.',
      longDescription:
        'Textile provides concise syntax for headings, emphasis, links, images, lists, tables, code, and typographic substitutions. Processors transform the source into HTML while preserving readable authoring text.\n\nThe format has been used by content management systems, issue trackers, forums, and publishing tools. Multiple implementations exist, with PHP Textile serving as a maintained reference in the current ecosystem.',
    },
    es: {
      name: 'Textile',
      description: 'Lenguaje de marcado ligero que convierte texto legible en HTML estructurado.',
      longDescription:
        'Textile ofrece sintaxis concisa para encabezados, enfasis, enlaces, imagenes, listas, tablas, codigo y sustituciones tipograficas. Sus procesadores convierten la fuente en HTML manteniendo un texto facil de escribir y leer.\n\nEl formato se ha usado en gestores de contenido, trackers, foros y herramientas de publicacion. Existen varias implementaciones; PHP Textile funciona como referencia mantenida del ecosistema actual.',
    },
    it: {
      name: 'Textile',
      description: 'Linguaggio di markup leggero che converte testo leggibile in HTML strutturato.',
      longDescription:
        'Textile offre una sintassi concisa per titoli, enfasi, link, immagini, liste, tabelle, codice e sostituzioni tipografiche. I processori trasformano il sorgente in HTML mantenendo il testo facile da scrivere e leggere.\n\nIl formato e stato usato in CMS, issue tracker, forum e strumenti di pubblicazione. Esistono diverse implementazioni; PHP Textile funge da riferimento mantenuto nell ecosistema attuale.',
    },
    fr: {
      name: 'Textile',
      description: 'Langage de balisage leger convertissant un texte lisible en HTML structure.',
      longDescription:
        'Textile fournit une syntaxe concise pour titres, emphase, liens, images, listes, tableaux, code et substitutions typographiques. Les processeurs transforment la source en HTML tout en gardant un texte facile a ecrire et lire.\n\nLe format a servi dans gestionnaires de contenu, suivis de problemes, forums et outils de publication. Plusieurs implementations existent; PHP Textile reste une reference maintenue de l ecosysteme actuel.',
    },
    de: {
      name: 'Textile',
      description:
        'Leichtgewichtige Markup-Sprache, die lesbaren Klartext in strukturiertes HTML umwandelt.',
      longDescription:
        'Textile bietet kompakte Syntax fur Uberschriften, Hervorhebung, Links, Bilder, Listen, Tabellen, Code und typografische Ersetzungen. Prozessoren wandeln den Quelltext in HTML um, wahrend der Autorentext lesbar bleibt.\n\nDas Format wurde in Content-Management-Systemen, Issue-Trackern, Foren und Publikationswerkzeugen eingesetzt. Mehrere Implementierungen existieren; PHP Textile dient als gepflegte Referenz.',
    },
    pt: {
      name: 'Textile',
      description: 'Linguagem de marcacao leve que converte texto legivel em HTML estruturado.',
      longDescription:
        'Textile oferece sintaxe concisa para titulos, enfase, links, imagens, listas, tabelas, codigo e substituicoes tipograficas. Processadores transformam a fonte em HTML mantendo texto facil de escrever e ler.\n\nO formato foi usado em gestores de conteudo, rastreadores, foruns e ferramentas de publicacao. Existem varias implementacoes; PHP Textile funciona como referencia mantida no ecossistema atual.',
    },
  },
} satisfies Language;
