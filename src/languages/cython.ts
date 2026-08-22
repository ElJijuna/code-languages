import type { Language } from '@/types';

export const cython = {
  slug: 'cython',
  publishedDate: '2007-07-28',
  extensions: ['.pyx', '.pxd', '.pxi'],
  author: 'Robert Bradshaw, Stefan Behnel, Dag Sverre Seljebotn, Greg Ewing, et al.',
  website: 'https://cython.org',
  paradigms: ['object-oriented', 'imperative', 'procedural'],
  relations: {
    supersetOf: ['python'],
    compilesTo: ['c'],
  },
  tooling: {
    runtimes: ['CPython'],
    packageManagers: ['pip', 'conda', 'Poetry'],
    ecosystems: ['Python', 'Native Extensions', 'Scientific Computing'],
  },
  version: '3.3.0',
  logo: 'https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_cython.svg',
  color: '#FED140',
  i18n: {
    en: {
      name: 'Cython',
      description:
        'A Python superset for compiling typed Python-like code into C extension modules.',
      longDescription:
        'Cython extends Python with optional static types, C declarations, and direct calls into C and C++ APIs, allowing Python code to be compiled into native extension modules.\n\nIt is widely used to speed up numeric code, wrap native libraries, build scientific Python packages, and write performance-sensitive components while keeping Python-like syntax.',
    },
    es: {
      name: 'Cython',
      description:
        'Un superconjunto de Python para compilar codigo tipado similar a Python como extensiones en C.',
      longDescription:
        'Cython extiende Python con tipos estaticos opcionales, declaraciones de C y llamadas directas a APIs de C y C++, permitiendo compilar codigo Python en modulos de extension nativos.\n\nSe usa ampliamente para acelerar codigo numerico, envolver bibliotecas nativas, crear paquetes cientificos de Python y escribir componentes sensibles al rendimiento manteniendo una sintaxis parecida a Python.',
    },
    it: {
      name: 'Cython',
      description:
        'Un superset di Python per compilare codice Python simile a tipi in moduli di estensione C.',
      longDescription:
        'Cython estende Python con tipi statici opzionali, dichiarazioni C e chiamate dirette alle API C e C++, consentendo di compilare il codice Python in moduli di estensione nativi.\n\nE ampiamente utilizzato per accelerare il codice numerico, per incapsulare librerie native, per creare pacchetti Python scientifici e per scrivere componenti sensibili alle prestazioni mantenendo la sintassi simile a Python.',
    },
    fr: {
      name: 'Cython',
      description:
        "Un superset de Python pour compiler le code Python type en modules d'extension C.",
      longDescription:
        "Cython etend Python avec des types statiques optionnels, des declarations C et des appels directs vers les API C et C++, permettant de compiler le code Python en modules d'extension natifs.\n\nIl est largement utilise pour accelerer le code numerique, encapsuler des bibliotheques natives, construire des packages Python scientifiques et ecrire des composants sensibles aux performances tout en conservant une syntaxe similaire a Python.",
    },
    de: {
      name: 'Cython',
      description:
        'Eine Python-Erweiterung zum Kompilieren von typisiertem Python-ähnlichem Code in C-Erweiterungsmodule.',
      longDescription:
        'Cython erweitert Python mit optionalen statischen Typen, C-Deklarationen und direkten Aufrufen in C- und C++-APIs, wodurch Python-Code in native Erweiterungsmodule kompiliert werden kann.\n\nEs wird häufig verwendet, um numerischen Code zu beschleunigen, native Bibliotheken einzubinden, wissenschaftliche Python-Pakete zu erstellen und leistungskritische Komponenten zu schreiben, während die Python-ähnliche Syntax beibehalten wird.',
    },
    pt: {
      name: 'Cython',
      description:
        'Superset de Python para compilar código Python com tipagem em módulos de extensão C.',
      longDescription:
        'Cython estende o Python com tipos estáticos opcionais, declarações C e chamadas diretas para APIs C e C++, permitindo que o código Python seja compilado em módulos de extensão nativos.\n\nÉ amplamente utilizado para acelerar o código numérico, envolver bibliotecas nativas, construir pacotes Python científicos e escrever componentes sensíveis ao desempenho, mantendo a sintaxe semelhante ao Python.',
    },
  },
} satisfies Language;
