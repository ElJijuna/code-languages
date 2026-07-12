import type { Language } from '@/types';

export const postscript = {
  slug: 'postscript',
  publishedDate: '1984-01-01',
  extensions: ['.ps', '.eps'],
  author: 'John Warnock, Charles Geschke / Adobe Systems',
  website: 'https://www.adobe.com/products/postscript.html',
  paradigms: ['stack-based', 'declarative', 'procedural'],
  tooling: {
    ecosystems: ['Print', 'PDF'],
  },
  version: 'PostScript 3',
  logo: 'https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_postscript.svg',
  color: '#EC1C24',
  i18n: {
    en: {
      name: 'PostScript',
      description:
        'A stack-based page description language used in professional printing and as the foundation of PDF.',
      longDescription:
        'PostScript is a stack-based, Turing-complete programming language and page description language developed by Adobe Systems.\n\nIt describes pages to be rendered by a printer or viewer using vector graphics commands, text layout, and image data. PostScript is the technical foundation for the PDF format and remains widely used in professional typesetting and print workflows.',
    },
    es: {
      name: 'PostScript',
      description:
        'Un lenguaje de descripción de página basado en pila usado en impresión profesional y como base del PDF.',
      longDescription:
        'PostScript es un lenguaje de programación basado en pila, Turing completo, y lenguaje de descripción de página desarrollado por Adobe Systems.\n\nDescribe páginas a renderizar por una impresora o visor mediante comandos de gráficos vectoriales, diseño de texto y datos de imagen. PostScript es la base técnica del formato PDF y sigue siendo ampliamente utilizado en composición tipográfica profesional y flujos de trabajo de impresión.',
    },
    it: {
      name: 'PostScript',
      description:
        'Un linguaggio di descrizione delle pagine basato su stack utilizzato nella stampa professionale e come base del PDF.',
      longDescription:
        'PostScript e un linguaggio di programmazione basato su stack, Turing-completo, e linguaggio di descrizione delle pagine sviluppato da Adobe Systems.\n\nDescrive le pagine da renderizzare da una stampante o da un visualizzatore tramite comandi di grafica vettoriale, layout del testo e dati immagine. PostScript e la base tecnica del formato PDF e rimane ampiamente utilizzato nella composizione tipografica professionale e nei flussi di lavoro di stampa.',
    },
    fr: {
      name: 'PostScript',
      description:
        "Un langage de description de page basé sur une pile utilisé dans l'impression professionnelle et comme fondement du PDF.",
      longDescription:
        "PostScript est un langage de programmation basé sur une pile, Turing-complet, et un langage de description de page développé par Adobe Systems.\n\nIl décrit les pages à rendre par une imprimante ou un visualiseur à l'aide de commandes graphiques vectorielles, de mise en page de texte et de données d'image. PostScript est la base technique du format PDF et reste largement utilisé dans la composition professionnelle et les flux de travail d'impression.",
    },
    de: {
      name: 'PostScript',
      description:
        'Eine stapelbasierte Seitenbeschreibungssprache für professionellen Druck und als Grundlage von PDF.',
      longDescription:
        'PostScript ist eine stapelbasierte, Turing-vollständige Programmiersprache und Seitenbeschreibungssprache, die von Adobe Systems entwickelt wurde.\n\nSie beschreibt Seiten, die von einem Drucker oder Viewer mithilfe von Vektorgrafik-Befehlen, Textlayout und Bilddaten gerendert werden sollen. PostScript ist die technische Grundlage des PDF-Formats und wird weiterhin häufig im professionellen Satz und in Druckworkflows eingesetzt.',
    },
    pt: {
      name: 'PostScript',
      description:
        'Uma linguagem de descrição de página baseada em pilha usada em impressão profissional e como base do PDF.',
      longDescription:
        'PostScript é uma linguagem de programação baseada em pilha, Turing-completa, e linguagem de descrição de página desenvolvida pela Adobe Systems.\n\nDescreve páginas a serem renderizadas por uma impressora ou visualizador usando comandos de gráficos vetoriais, layout de texto e dados de imagem. O PostScript é a base técnica do formato PDF e continua amplamente utilizado na composição tipográfica profissional e nos fluxos de trabalho de impressão.',
    },
  },
} satisfies Language;
