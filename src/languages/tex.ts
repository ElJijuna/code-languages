import type { Language } from '../types';

export const tex = {
  slug: 'tex',
  publishedDate: '1978-01-01',
  extensions: ['.tex', '.sty', '.cls', '.dtx', '.ins', '.ltx'],
  author: 'Donald Knuth',
  website: 'https://www.tug.org/texlive/',
  paradigms: ['markup', 'typesetting', 'macro', 'declarative'],
  tooling: {
    runtimes: ['TeX Live', 'MiKTeX', 'pdfTeX', 'XeTeX', 'LuaTeX'],
    packageManagers: ['tlmgr', 'MiKTeX Console', 'CTAN'],
    ecosystems: ['Publishing', 'Academic Writing', 'Scientific Documents', 'Print'],
  },
  version: 'TeX Live 2026',
  logo: 'https://cdn.simpleicons.org/latex/008080',
  color: '#008080',
  i18n: {
    en: {
      name: 'TeX',
      description:
        "Donald Knuth's macro-based typesetting system for precise technical and scientific documents.",
      longDescription:
        'TeX is a programmable typesetting system built around macros, boxes, glue, mathematical layout, and precise page composition. Plain TeX, LaTeX, ConTeXt, and related formats build on the TeX engine family to produce high-quality documents from text source files.\n\nIt is used for academic papers, books, technical manuals, mathematics, physics, computer science publications, theses, and publishing workflows where reproducible typography and long-term source stability matter.',
    },
    es: {
      name: 'TeX',
      description:
        'El sistema de composicion tipografica basado en macros de Donald Knuth para documentos tecnicos.',
      longDescription:
        'TeX es un sistema programable de composicion tipografica basado en macros, cajas, espaciado flexible, notacion matematica y composicion precisa de paginas. Plain TeX, LaTeX, ConTeXt y formatos relacionados se apoyan en la familia de motores TeX para producir documentos de alta calidad desde archivos fuente de texto.\n\nSe usa para articulos academicos, libros, manuales tecnicos, matematicas, fisica, publicaciones de computacion, tesis y flujos editoriales donde importan la tipografia reproducible y la estabilidad del codigo fuente a largo plazo.',
    },
    it: {
      name: 'TeX',
      description:
        'Sistema di impaginazione basato su macro di Donald Knuth per documenti tecnici e scientifici precisi.',
      longDescription:
        'TeX e un sistema di impaginazione programmabile basato su macro, scatole, colla, layout matematico e composizione di pagine precise. Plain TeX, LaTeX, ConTeXt e formati correlati si basano sulla famiglia di motori TeX per produrre documenti di alta qualita da file di testo.\n\nViene utilizzato per articoli accademici, libri, manuali tecnici, matematica, fisica, pubblicazioni di informatica, tesi e flussi di lavoro di pubblicazione in cui la tipografia riproducibile e la stabilita a lungo termine della fonte sono importanti.',
    },
    fr: {
      name: 'TeX',
      description:
        'Systeme de composition de texte base sur des macros de Donald Knuth pour les documents techniques et scientifiques precis.',
      longDescription:
        "TeX est un systeme de composition de texte programmable base sur des macros, des boites, de la colle, la mise en page mathematique et la composition precise des pages. Plain TeX, LaTeX, ConTeXt et des formats connexes s'appuient sur la famille de moteurs TeX pour produire des documents de haute qualite a partir de fichiers sources de texte.\n\nIl est utilise pour les articles universitaires, les livres, les manuels techniques, les mathematiques, la physique, les publications en informatique, les theses et les flux de travail de publication ou la typographie reproductible et la stabilite a long terme de la source sont importantes.",
    },
    de: {
      name: 'TeX',
      description:
        'Donald Knuths programmierbares Typesetting-System f\u00fcr pr\u00e4zise technische und wissenschaftliche Dokumente.',
      longDescription:
        'TeX ist ein programmierbares Typesetting-System, das auf Makros, Boxen, Glue, mathematischer Layout und pr\u00e4ziser Seitenkomposition basiert. Plain TeX, LaTeX, ConTeXt und verwandte Formate basieren auf dem TeX-Engine-Familien, um aus Textquellen hochqualitative Dokumente zu erstellen.\n\nEs wird f\u00fcr akademische Arbeiten, B\u00fccher, technische Handb\u00fccher, Mathematik, Physik, Computerwissenschaftliche Publikationen, Dissertationen und Publishing-Workflows verwendet, bei denen reproduzierbare Typografie und langfristige Quellstabilit\u00e4t wichtig sind.',
    },
    pt: {
      name: 'TeX',
      description:
        'Sistema de tipografia baseado em macros de Donald Knuth para documentos t\u00e9cnicos e cient\u00edficos precisos.',
      longDescription:
        'TeX \u00e9 um sistema de tipografia program\u00e1vel baseado em macros, caixas, cola, layout matem\u00e1tico e composi\u00e7\u00e3o de p\u00e1ginas precisa. Plain TeX, LaTeX, ConTeXt e formatos relacionados constroem sobre o motor TeX para produzir documentos de alta qualidade a partir de arquivos de origem de texto.\n\n\u00c9 usado para artigos acad\u00eamicos, livros, manuais t\u00e9cnicos, matem\u00e1tica, f\u00edsica, publica\u00e7\u00f5es de ci\u00eancia da computa\u00e7\u00e3o, teses e fluxos de trabalho de publica\u00e7\u00e3o onde a tipografia reprodut\u00edvel e a estabilidade de longo prazo da fonte s\u00e3o importantes.',
    },
  },
} satisfies Language;
