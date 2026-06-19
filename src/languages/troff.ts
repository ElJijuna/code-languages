import type { Language } from '../types';

export const troff = {
  slug: 'troff',
  publishedDate: '1973-01-01',
  extensions: ['.roff', '.troff', '.man', '.me', '.ms'],
  author: 'Joe Ossanna, Brian Kernighan, and GNU contributors',
  website: 'https://www.gnu.org/software/groff/',
  paradigms: ['markup', 'typesetting'],
  tooling: {
    runtimes: ['GNU groff', 'troff', 'nroff'],
    ecosystems: ['Unix', 'Documentation', 'Typesetting'],
  },
  version: 'GNU groff 1.24.1',
  logo: 'https://www.gnu.org/graphics/heckert_gnu.small.png',
  color: '#8F5902',
  i18n: {
    en: {
      name: 'Troff/Groff',
      description:
        'A typesetting markup language and GNU implementation used for Unix documents and man pages.',
      longDescription:
        'Troff source combines text with requests, escapes, registers, strings, and macros that control layout and typography. Macro packages such as man, mdoc, ms, me, and mom provide higher-level document conventions.\n\nGNU groff is the maintained free implementation of the historical Unix troff system. It formats manual pages, technical papers, books, and other documents for terminals, PostScript, PDF, HTML, and additional output devices.',
    },
    es: {
      name: 'Troff/Groff',
      description:
        'Lenguaje tipografico e implementacion GNU usado para documentos Unix y paginas man.',
      longDescription:
        'La fuente Troff combina texto con peticiones, escapes, registros, cadenas y macros que controlan maquetacion y tipografia. Paquetes como man, mdoc, ms, me y mom ofrecen convenciones documentales de mayor nivel.\n\nGNU groff es la implementacion libre mantenida del sistema troff historico de Unix. Formatea paginas man, articulos tecnicos, libros y otros documentos para terminal, PostScript, PDF, HTML y mas destinos.',
    },
    it: {
      name: 'Troff/Groff',
      description: 'Linguaggio tipografico e implementazione GNU per documenti Unix e pagine man.',
      longDescription:
        'Il sorgente Troff combina testo con richieste, escape, registri, stringhe e macro che controllano impaginazione e tipografia. Pacchetti come man, mdoc, ms, me e mom offrono convenzioni documentali di livello superiore.\n\nGNU groff e l implementazione libera mantenuta dello storico sistema troff Unix. Formatta pagine man, articoli tecnici, libri e altri documenti per terminale, PostScript, PDF, HTML e ulteriori dispositivi.',
    },
    fr: {
      name: 'Troff/Groff',
      description: 'Langage de composition et implementation GNU pour documents Unix et pages man.',
      longDescription:
        'Une source Troff combine texte, requetes, echappements, registres, chaines et macros qui controlent mise en page et typographie. Les paquets man, mdoc, ms, me et mom fournissent des conventions documentaires de plus haut niveau.\n\nGNU groff est l implementation libre maintenue du systeme troff historique d Unix. Il formate pages man, articles techniques, livres et autres documents pour terminal, PostScript, PDF, HTML et autres sorties.',
    },
    de: {
      name: 'Troff/Groff',
      description:
        'Satz-Markup-Sprache und GNU-Implementierung fur Unix-Dokumente und Handbuchseiten.',
      longDescription:
        'Troff-Quelltext kombiniert Text mit Befehlen, Escape-Sequenzen, Registern, Zeichenketten und Makros zur Steuerung von Layout und Typografie. Pakete wie man, mdoc, ms, me und mom bieten hohere Dokumentkonventionen.\n\nGNU groff ist die gepflegte freie Implementierung des historischen Unix-troff-Systems. Es formatiert Handbuchseiten, technische Artikel, Bucher und andere Dokumente fur Terminal, PostScript, PDF, HTML und weitere Ausgaben.',
    },
    pt: {
      name: 'Troff/Groff',
      description:
        'Linguagem tipografica e implementacao GNU usada em documentos Unix e paginas man.',
      longDescription:
        'Fontes Troff combinam texto com requisicoes, escapes, registradores, strings e macros que controlam layout e tipografia. Pacotes como man, mdoc, ms, me e mom oferecem convencoes documentais de nivel mais alto.\n\nGNU groff e a implementacao livre mantida do sistema troff historico do Unix. Formata paginas man, artigos tecnicos, livros e outros documentos para terminal, PostScript, PDF, HTML e outras saidas.',
    },
  },
} satisfies Language;
