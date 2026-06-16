import type { Language } from '../types';

export const bibtex = {
  slug: 'bibtex',
  publishedDate: '1985-01-01',
  extensions: ['.bib', '.bibtex'],
  author: 'Oren Patashnik and Leslie Lamport',
  website: 'https://ctan.org/pkg/bibtex',
  paradigms: ['data', 'bibliography'],
  tooling: {
    runtimes: ['BibTeX', 'Biber'],
    ecosystems: ['TeX', 'LaTeX', 'Academic publishing'],
  },
  version: 'stable',
  logo: 'https://dummyimage.com/32x32/2563EB/ffffff.png&text=Bi',
  color: '#2563EB',
  i18n: {
    en: {
      name: 'BibTeX',
      description: 'A bibliography data format and toolchain used with TeX and LaTeX documents.',
      longDescription:
        'BibTeX is both a bibliography processing program and a structured text format for citation records. Entries describe books, articles, proceedings, theses, and other sources with fields such as author, title, year, and publisher.\n\nIt is central to many TeX and LaTeX workflows, especially in academic publishing. BibTeX files can be edited by hand, exported by reference managers, and rendered through style files into formatted bibliographies.',
    },
    es: {
      name: 'BibTeX',
      description:
        'Formato de datos bibliograficos y herramienta usada con documentos TeX y LaTeX.',
      longDescription:
        'BibTeX es un programa de procesamiento bibliografico y un formato de texto estructurado para registros de citas. Las entradas describen libros, articulos, actas, tesis y otras fuentes con campos como autor, titulo, ano y editorial.\n\nEs central en muchos flujos de TeX y LaTeX, sobre todo en publicacion academica. Los archivos BibTeX pueden editarse a mano, exportarse desde gestores de referencias y renderizarse con estilos como bibliografias formateadas.',
    },
    it: {
      name: 'BibTeX',
      description: 'Formato di dati bibliografici e toolchain usati con documenti TeX e LaTeX.',
      longDescription:
        'BibTeX e sia un programma di elaborazione bibliografica sia un formato testuale strutturato per record di citazioni. Le voci descrivono libri, articoli, atti, tesi e altre fonti con campi come autore, titolo, anno ed editore.\n\nE centrale in molti flussi TeX e LaTeX, specialmente nella pubblicazione accademica. I file BibTeX possono essere modificati a mano, esportati da gestori di riferimenti e resi tramite file di stile in bibliografie formattate.',
    },
    fr: {
      name: 'BibTeX',
      description:
        'Format de donnees bibliographiques et chaine d outils utilises avec TeX et LaTeX.',
      longDescription:
        'BibTeX est a la fois un programme de traitement bibliographique et un format texte structure pour les citations. Les entrees decrivent livres, articles, actes, theses et autres sources avec des champs comme auteur, titre, annee et editeur.\n\nIl est central dans de nombreux flux TeX et LaTeX, surtout pour l edition academique. Les fichiers BibTeX peuvent etre modifies a la main, exportes par des gestionnaires de references et rendus via des styles en bibliographies formatees.',
    },
    de: {
      name: 'BibTeX',
      description: 'Bibliografisches Datenformat und Werkzeugkette fur TeX- und LaTeX-Dokumente.',
      longDescription:
        'BibTeX ist ein Bibliografieprogramm und ein strukturiertes Textformat fur Zitationsdaten. Eintrage beschreiben Bucher, Artikel, Tagungsbande, Arbeiten und andere Quellen mit Feldern wie Autor, Titel, Jahr und Verlag.\n\nEs ist zentral in vielen TeX- und LaTeX-Ablaufen, besonders im akademischen Publizieren. BibTeX-Dateien konnen von Hand gepflegt, aus Literaturverwaltungen exportiert und uber Stildateien zu formatierten Bibliografien gerendert werden.',
    },
    pt: {
      name: 'BibTeX',
      description: 'Formato de dados bibliograficos e cadeia de ferramentas usada com TeX e LaTeX.',
      longDescription:
        'BibTeX e ao mesmo tempo um programa de processamento bibliografico e um formato de texto estruturado para registros de citacao. As entradas descrevem livros, artigos, anais, teses e outras fontes com campos como autor, titulo, ano e editora.\n\nEle e central em muitos fluxos TeX e LaTeX, especialmente na publicacao academica. Arquivos BibTeX podem ser editados a mao, exportados por gerenciadores de referencias e renderizados por estilos em bibliografias formatadas.',
    },
  },
} satisfies Language;
