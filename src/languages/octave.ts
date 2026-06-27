import type { Language } from '../types';

export const octave = {
  slug: 'octave',
  publishedDate: '1993-01-01',
  extensions: ['.m', '.octave'],
  author: 'John W. Eaton and GNU Project contributors',
  website: 'https://octave.org',
  paradigms: ['procedural', 'functional', 'object-oriented', 'scientific'],
  tooling: {
    runtimes: ['GNU Octave'],
    ecosystems: ['Scientific Computing', 'Numerical Analysis', 'Mathematics', 'Signal Processing'],
  },
  version: '9.3.0',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Gnu-octave-logo.svg',
  color: '#0790C0',
  i18n: {
    en: {
      name: 'Octave',
      description:
        'A scientific programming language mostly compatible with MATLAB for numerical computation.',
      longDescription:
        'GNU Octave is a high-level language primarily intended for numerical computations. It provides a convenient command-line interface for solving linear and nonlinear problems, performing matrix arithmetic, plotting data, and implementing algorithms in areas such as signal processing and statistics.\n\nOctave is largely compatible with MATLAB, allowing users to run many MATLAB scripts without modification. It is free software distributed under the GNU General Public License, widely used in academia and engineering for prototyping and teaching numerical methods.',
    },
    es: {
      name: 'Octave',
      description:
        'Lenguaje de programacion cientifica mayormente compatible con MATLAB para calculo numerico.',
      longDescription:
        'GNU Octave es un lenguaje de alto nivel orientado principalmente al calculo numerico. Proporciona una interfaz de linea de comandos para resolver problemas lineales y no lineales, aritmetica matricial, visualizacion de datos e implementacion de algoritmos en procesamiento de senales y estadistica.\n\nOctave es ampliamente compatible con MATLAB, lo que permite ejecutar muchos scripts de MATLAB sin modificaciones. Es software libre bajo licencia GNU GPL, ampliamente usado en academia e ingenieria para prototipado y ensenanza de metodos numericos.',
    },
    it: {
      name: 'Octave',
      description:
        'Linguaggio di programmazione scientifica largamente compatibile con MATLAB per il calcolo numerico.',
      longDescription:
        'GNU Octave e un linguaggio ad alto livello orientato principalmente al calcolo numerico. Offre un comodo ambiente a riga di comando per risolvere problemi lineari e non lineari, eseguire aritmetica matriciale, tracciare grafici e implementare algoritmi in elaborazione del segnale e statistica.\n\nOctave e ampiamente compatibile con MATLAB, consentendo l esecuzione di molti script MATLAB senza modifiche. E software libero distribuito sotto licenza GNU GPL, usato in ambito accademico e ingegneristico per la prototipazione e l insegnamento dei metodi numerici.',
    },
    fr: {
      name: 'Octave',
      description:
        'Langage de programmation scientifique largement compatible avec MATLAB pour le calcul numerique.',
      longDescription:
        'GNU Octave est un langage de haut niveau principalement destine au calcul numerique. Il fournit une interface en ligne de commande pratique pour resoudre des problemes lineaires et non lineaires, effectuer des operations matricielles, tracer des graphiques et implementer des algorithmes en traitement du signal et statistiques.\n\nOctave est largement compatible avec MATLAB, permettant d executer de nombreux scripts MATLAB sans modification. C est un logiciel libre sous licence GNU GPL, largement utilise dans l enseignement superieur et l ingenierie pour le prototypage et l enseignement des methodes numeriques.',
    },
    de: {
      name: 'Octave',
      description:
        'Wissenschaftliche Programmiersprache weitgehend kompatibel mit MATLAB fur numerische Berechnungen.',
      longDescription:
        'GNU Octave ist eine Hochsprache, die hauptsachlich fur numerische Berechnungen entwickelt wurde. Sie bietet eine komfortable Kommandozeilenschnittstelle fur lineare und nichtlineare Probleme, Matrixarithmetik, Datenvisualisierung und Algorithmenimplementierung in Signalverarbeitung und Statistik.\n\nOctave ist weitgehend MATLAB-kompatibel und erlaubt das Ausfuhren vieler MATLAB-Skripte ohne Anderungen. Es ist freie Software unter der GNU GPL, verbreitet in Hochschulen und Ingenieurwesen fur Prototypentwicklung und die Lehre numerischer Methoden.',
    },
    pt: {
      name: 'Octave',
      description:
        'Linguagem de programacao cientifica amplamente compativel com MATLAB para calculo numerico.',
      longDescription:
        'GNU Octave e uma linguagem de alto nivel voltada principalmente para computacao numerica. Fornece uma interface de linha de comando conveniente para resolver problemas lineares e nao lineares, aritmetica matricial, visualizacao de dados e implementacao de algoritmos em processamento de sinais e estatistica.\n\nOctave e amplamente compativel com MATLAB, permitindo executar muitos scripts MATLAB sem modificacoes. E software livre sob a licenca GNU GPL, amplamente utilizado em universidades e engenharia para prototipagem e ensino de metodos numericos.',
    },
  },
} satisfies Language;
