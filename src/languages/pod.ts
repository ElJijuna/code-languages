import type { Language } from '../types';

export const pod = {
  slug: 'pod',
  publishedDate: '1994-01-01',
  extensions: ['.pod'],
  author: 'Larry Wall and the Perl community',
  website: 'https://perldoc.perl.org/perlpod',
  paradigms: ['markup', 'documentation'],
  tooling: {
    runtimes: ['perldoc', 'Pod::Simple'],
    ecosystems: ['Perl', 'Documentation'],
  },
  version: 'Perl 5.42.2',
  logo: 'https://cdn.simpleicons.org/perl/39457E',
  color: '#39457E',
  i18n: {
    en: {
      name: 'Plain Old Documentation',
      description: 'A lightweight documentation markup format distributed with Perl.',
      longDescription:
        'Plain Old Documentation uses paragraph-oriented directives for headings, lists, links, code, formatting, and embedded metadata. POD can live in standalone .pod files or alongside Perl source code after the interpreter has finished reading executable statements.\n\nPerl tooling converts POD into terminal help, manual pages, HTML, and other formats. It is the standard documentation source for Perl modules, commands, language manuals, and CPAN distributions.',
    },
    es: {
      name: 'Plain Old Documentation',
      description: 'Formato ligero de documentacion distribuido con Perl.',
      longDescription:
        'Plain Old Documentation usa directivas orientadas a parrafos para encabezados, listas, enlaces, codigo, formato y metadatos. POD puede vivir en archivos .pod independientes o junto al codigo Perl despues de las sentencias ejecutables.\n\nLas herramientas Perl convierten POD en ayuda de terminal, paginas man, HTML y otros formatos. Es la fuente estandar de documentacion para modulos, comandos, manuales y distribuciones CPAN.',
    },
    it: {
      name: 'Plain Old Documentation',
      description: 'Formato leggero di documentazione distribuito con Perl.',
      longDescription:
        'Plain Old Documentation usa direttive orientate ai paragrafi per titoli, liste, link, codice, formattazione e metadati. POD puo vivere in file .pod autonomi o insieme al codice Perl dopo le istruzioni eseguibili.\n\nGli strumenti Perl convertono POD in aiuto da terminale, pagine man, HTML e altri formati. E la fonte standard di documentazione per moduli, comandi, manuali e distribuzioni CPAN.',
    },
    fr: {
      name: 'Plain Old Documentation',
      description: 'Format leger de documentation distribue avec Perl.',
      longDescription:
        'Plain Old Documentation utilise des directives par paragraphes pour titres, listes, liens, code, mise en forme et metadonnees. POD peut vivre dans des fichiers .pod autonomes ou avec le code Perl apres les instructions executables.\n\nLes outils Perl convertissent POD en aide terminal, pages man, HTML et autres formats. Il constitue la source standard de documentation pour modules, commandes, manuels et distributions CPAN.',
    },
    de: {
      name: 'Plain Old Documentation',
      description: 'Leichtgewichtiges Dokumentationsformat, das mit Perl ausgeliefert wird.',
      longDescription:
        'Plain Old Documentation verwendet absatzorientierte Direktiven fur Uberschriften, Listen, Links, Code, Formatierung und Metadaten. POD kann in eigenstandigen .pod-Dateien oder nach ausfuhrbaren Anweisungen direkt im Perl-Quellcode stehen.\n\nPerl-Werkzeuge wandeln POD in Terminalhilfe, Handbuchseiten, HTML und weitere Formate um. Es ist die Standardquelle fur Dokumentation von Modulen, Befehlen, Sprachhandbuchern und CPAN-Distributionen.',
    },
    pt: {
      name: 'Plain Old Documentation',
      description: 'Formato leve de documentacao distribuido com Perl.',
      longDescription:
        'Plain Old Documentation usa diretivas orientadas a paragrafos para titulos, listas, links, codigo, formatacao e metadados. POD pode existir em arquivos .pod independentes ou junto ao codigo Perl apos instrucoes executaveis.\n\nFerramentas Perl convertem POD em ajuda de terminal, paginas man, HTML e outros formatos. E a fonte padrao de documentacao para modulos, comandos, manuais e distribuicoes CPAN.',
    },
  },
} satisfies Language;
