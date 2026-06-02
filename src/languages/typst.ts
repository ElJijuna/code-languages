import type { Language } from '../types';

export const typst = {
  slug: 'typst',
  publishedDate: '2023-03-21',
  extensions: ['.typ'],
  author: 'Typst GmbH / Typst contributors',
  website: 'https://typst.app',
  paradigms: ['markup', 'typesetting', 'functional', 'scripting'],
  tooling: {
    runtimes: ['Typst CLI', 'Typst Web App'],
    packageManagers: ['Typst Packages'],
    ecosystems: ['Publishing', 'Academic Writing', 'Documentation', 'Typesetting'],
  },
  version: '0.14.2',
  logo: 'https://cdn.simpleicons.org/typst/239DAD',
  color: '#239DAD',
  i18n: {
    en: {
      name: 'Typst',
      description: 'A modern markup and scripting language for typesetting documents and PDFs.',
      longDescription:
        'Typst combines lightweight markup, layout primitives, functions, variables, packages, math notation, bibliographies, templates, and scripting in a fast typesetting system. It aims to make professional document production more programmable and approachable than traditional TeX workflows.\n\nIt is used for academic papers, reports, books, resumes, lecture notes, templates, technical documents, and publishing workflows that need reproducible PDF generation from readable source files.',
    },
    es: {
      name: 'Typst',
      description: 'Un lenguaje moderno de marcado y scripting para componer documentos y PDFs.',
      longDescription:
        'Typst combina marcado liviano, primitivas de layout, funciones, variables, paquetes, notacion matematica, bibliografias, templates y scripting en un sistema rapido de composicion. Busca hacer la produccion profesional de documentos mas programable y accesible que los flujos tradicionales con TeX.\n\nSe usa para articulos academicos, reportes, libros, CVs, apuntes de clase, templates, documentos tecnicos y flujos de publicacion que necesitan generar PDFs reproducibles desde archivos fuente legibles.',
    },
    it: {
      name: 'Typst',
      description:
        'Un linguaggio di markup e scripting moderno per la formattazione di documenti e PDF.',
      longDescription:
        'Typst combina markup leggero, primitive di layout, funzioni, variabili, pacchetti, notazione matematica, bibliografie, modelli e scripting in un sistema di formattazione veloce. Mira a rendere la produzione di documenti professionali piu programmabile e accessibile rispetto ai flussi di lavoro tradizionali di TeX.\n\nViene utilizzato per articoli accademici, rapporti, libri, curriculum vitae, appunti di lezione, modelli, documenti tecnici e flussi di lavoro di pubblicazione che necessitano di generazione di PDF riproducibile da file di origine leggibili.',
    },
    fr: {
      name: 'Typst',
      description:
        'Un langage de balisage et de script moderne pour la composition de documents et de PDF.',
      longDescription:
        'Typst combine un balisage leger, des primitives de mise en page, des fonctions, des variables, des paquets, une notation mathematique, des bibliographies, des modeles et un langage de script dans un systeme de composition rapide. Il vise a rendre la production de documents professionnels plus programmable et accessible que les workflows traditionnels TeX.\n\nIl est utilise pour les articles universitaires, les rapports, les livres, les CV, les notes de cours, les modeles, les documents techniques et les flux de travail de publication qui necessitent la generation de PDF reproductible a partir de fichiers sources lisibles.',
    },
    de: {
      name: 'Typst',
      description:
        'Eine moderne Markup- und Skriptsprache f\u00fcr die Typografie und die Erstellung von Dokumenten und PDFs.',
      longDescription:
        'Typst kombiniert leichte Markup-Funktionen, Layout-Primitiven, Funktionen, Variablen, Pakete, mathematische Notation, Bibliografien, Vorlagen und Skripting in einem schnellen Typisierungs-System. Es zielt darauf ab, die professionelle Dokumentenerstellung programmierbarer und zug\u00e4nglicher zu machen als herk\u00f6mmliche TeX-Workflows.\n\nEs wird f\u00fcr wissenschaftliche Arbeiten, Berichte, B\u00fccher, Lebensl\u00e4ufe, Vorlesungsnotizen, Vorlagen, technische Dokumente und Publikationsworkflows verwendet, die reproduzierbare PDF-Generierung aus lesbaren Quelldateien ben\u00f6tigen.',
    },
    pt: {
      name: 'Typst',
      description:
        'Linguagem de marca\u00e7\u00e3o e script moderna para a tipografia de documentos e PDFs.',
      longDescription:
        'Typst combina marca\u00e7\u00e3o leve, primitivas de layout, fun\u00e7\u00f5es, vari\u00e1veis, pacotes, nota\u00e7\u00e3o matem\u00e1tica, bibliografias, modelos e scripting em um sistema de tipografia r\u00e1pido. Visa tornar a produ\u00e7\u00e3o de documentos profissionais mais program\u00e1vel e acess\u00edvel do que os fluxos de trabalho tradicionais do TeX.\n\n\u00c9 usado para artigos acad\u00eamicos, relat\u00f3rios, livros, curr\u00edculos, anota\u00e7\u00f5es de aula, modelos, documentos t\u00e9cnicos e fluxos de trabalho de publica\u00e7\u00e3o que precisam de gera\u00e7\u00e3o de PDF reproduz\u00edvel a partir de arquivos de origem leg\u00edveis.',
    },
  },
} satisfies Language;
