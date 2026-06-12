import type { Language } from '../types';

export const json5 = {
  slug: 'json5',
  publishedDate: '2012-01-01',
  extensions: ['.json5'],
  author: 'Aseem Kishore',
  website: 'https://json5.org',
  paradigms: ['declarative'],
  tooling: {
    runtimes: ['Node.js', 'Browser'],
    packageManagers: ['npm', 'pnpm', 'Yarn'],
    ecosystems: ['Configuration', 'Web', 'Node.js'],
  },
  version: '2.2.3',
  logo: 'https://dummyimage.com/32x32/267CB9/ffffff.png&text=J5',
  color: '#267CB9',
  i18n: {
    en: {
      name: 'JSON5',
      description:
        'An extension of JSON that allows comments, trailing commas, and unquoted keys to make configuration files more human-readable.',
      longDescription:
        'JSON5 is a superset of JSON that adds syntax conveniences inspired by ES5 JavaScript, including single-line and multi-line comments, trailing commas in objects and arrays, unquoted object keys, single-quoted strings, and hexadecimal numbers.\n\nIt is commonly used for configuration files where readability and maintainability matter but the strict JSON format is too limiting. JSON5 parsers are available in JavaScript, Python, Go, Rust, and other languages.',
    },
    es: {
      name: 'JSON5',
      description:
        'Una extensión de JSON que permite comentarios, comas finales y claves sin comillas para hacer los archivos de configuración más legibles.',
      longDescription:
        'JSON5 es un superconjunto de JSON que añade conveniencias de sintaxis inspiradas en ES5 JavaScript, incluyendo comentarios de una y varias líneas, comas finales en objetos y arreglos, claves de objeto sin comillas, cadenas con comillas simples y números hexadecimales.\n\nSe usa habitualmente en archivos de configuración donde la legibilidad importa pero el formato JSON estricto es demasiado limitante. Hay parsers de JSON5 disponibles en JavaScript, Python, Go, Rust y otros lenguajes.',
    },
    it: {
      name: 'JSON5',
      description:
        "Un'estensione di JSON che consente commenti, virgole finali e chiavi senza virgolette per rendere i file di configurazione più leggibili.",
      longDescription:
        'JSON5 è un superset di JSON che aggiunge comodità sintattiche ispirate a ES5 JavaScript, tra cui commenti su una o più righe, virgole finali in oggetti e array, chiavi oggetto senza virgolette, stringhe con virgolette singole e numeri esadecimali.\n\nÈ comunemente utilizzato per file di configurazione dove la leggibilità è importante ma il formato JSON stretto è troppo limitante. I parser JSON5 sono disponibili in JavaScript, Python, Go, Rust e altri linguaggi.',
    },
    fr: {
      name: 'JSON5',
      description:
        'Une extension de JSON qui autorise les commentaires, les virgules finales et les clés non citées pour rendre les fichiers de configuration plus lisibles.',
      longDescription:
        "JSON5 est un superset de JSON qui ajoute des commodités syntaxiques inspirées de ES5 JavaScript, notamment les commentaires sur une ou plusieurs lignes, les virgules finales dans les objets et tableaux, les clés d'objet sans guillemets, les chaînes entre guillemets simples et les nombres hexadécimaux.\n\nIl est couramment utilisé pour les fichiers de configuration où la lisibilité est importante mais où le format JSON strict est trop contraignant. Des parseurs JSON5 sont disponibles en JavaScript, Python, Go, Rust et d'autres langages.",
    },
    de: {
      name: 'JSON5',
      description:
        'Eine Erweiterung von JSON, die Kommentare, abschließende Kommas und Schlüssel ohne Anführungszeichen erlaubt, um Konfigurationsdateien lesbarer zu machen.',
      longDescription:
        'JSON5 ist eine Obermenge von JSON, die durch ES5-JavaScript inspirierte Syntaxerleichterungen hinzufügt, darunter einzeilige und mehrzeilige Kommentare, abschließende Kommas in Objekten und Arrays, Objektschlüssel ohne Anführungszeichen, Strings in einfachen Anführungszeichen und Hexadezimalzahlen.\n\nEs wird häufig für Konfigurationsdateien verwendet, bei denen Lesbarkeit und Wartbarkeit wichtig sind, das strenge JSON-Format aber zu einschränkend ist. JSON5-Parser sind in JavaScript, Python, Go, Rust und anderen Sprachen verfügbar.',
    },
    pt: {
      name: 'JSON5',
      description:
        'Uma extensão do JSON que permite comentários, vírgulas finais e chaves sem aspas para tornar os arquivos de configuração mais legíveis.',
      longDescription:
        'JSON5 é um superconjunto de JSON que adiciona conveniências de sintaxe inspiradas no ES5 JavaScript, incluindo comentários de uma e várias linhas, vírgulas finais em objetos e arrays, chaves de objeto sem aspas, strings com aspas simples e números hexadecimais.\n\nÉ comumente usado em arquivos de configuração onde legibilidade e manutenibilidade importam, mas o formato JSON estrito é muito limitante. Parsers de JSON5 estão disponíveis em JavaScript, Python, Go, Rust e outras linguagens.',
    },
  },
} satisfies Language;
