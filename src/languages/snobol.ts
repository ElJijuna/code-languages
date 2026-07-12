import type { Language } from '@/types';

export const snobol = {
  slug: 'snobol',
  status: 'historical',
  publishedDate: '1962-01-01',
  extensions: ['.sno', '.snobol'],
  author: 'David J. Farber, Ralph Griswold, and Ivan P. Polonsky',
  website: 'https://www.regressive.org/snobol4/',
  paradigms: ['imperative', 'procedural', 'text-processing'],
  tooling: {
    runtimes: ['SNOBOL4 implementations', 'SPITBOL'],
    ecosystems: ['Text processing', 'Language history'],
  },
  version: 'SNOBOL4',
  logo: 'https://dummyimage.com/32x32/7C2D12/ffffff.png&text=SN',
  color: '#7C2D12',
  i18n: {
    en: {
      name: 'SNOBOL',
      description:
        'A text-processing language known for pattern matching, symbolic programming, and string manipulation.',
      longDescription:
        'SNOBOL is a family of programming languages from Bell Labs focused on string processing, symbolic computation, and pattern matching. SNOBOL4 became the best-known version, with patterns as first-class values and expressive operators for text transformation.\n\nIt influenced later text-processing and scripting languages, especially through its treatment of patterns and dynamic data. Today it is mainly used for historical study, preservation, and specialized legacy programs.',
    },
    es: {
      name: 'SNOBOL',
      description:
        'Lenguaje de procesamiento de texto conocido por patrones, simbolos y manipulacion de cadenas.',
      longDescription:
        'SNOBOL es una familia de lenguajes de Bell Labs centrada en procesamiento de cadenas, computacion simbolica y coincidencia de patrones. SNOBOL4 se convirtio en la version mas conocida, con patrones como valores de primera clase y operadores expresivos para transformar texto.\n\nInfluyo en lenguajes posteriores de procesamiento de texto y scripting, especialmente por su tratamiento de patrones y datos dinamicos. Hoy se usa principalmente para estudio historico, preservacion y programas legacy especializados.',
    },
    it: {
      name: 'SNOBOL',
      description:
        'Linguaggio per elaborazione del testo noto per pattern matching, simboli e stringhe.',
      longDescription:
        'SNOBOL e una famiglia di linguaggi di Bell Labs focalizzata su elaborazione di stringhe, computazione simbolica e pattern matching. SNOBOL4 divenne la versione piu nota, con pattern come valori di prima classe e operatori espressivi per trasformare testo.\n\nInfluenzo linguaggi successivi di elaborazione del testo e scripting, soprattutto per il trattamento di pattern e dati dinamici. Oggi e usato principalmente per studio storico, conservazione e programmi legacy specializzati.',
    },
    fr: {
      name: 'SNOBOL',
      description:
        'Langage de traitement de texte connu pour les motifs, la programmation symbolique et les chaines.',
      longDescription:
        'SNOBOL est une famille de langages de Bell Labs centree sur le traitement des chaines, le calcul symbolique et la reconnaissance de motifs. SNOBOL4 est devenu la version la plus connue, avec des motifs comme valeurs de premiere classe et des operateurs expressifs pour transformer le texte.\n\nIl a influence des langages ulterieurs de traitement de texte et de script, surtout par son traitement des motifs et des donnees dynamiques. Aujourd hui, il sert surtout a l etude historique, a la preservation et a des programmes legacy specialises.',
    },
    de: {
      name: 'SNOBOL',
      description:
        'Textverarbeitungssprache fur Musterabgleich, symbolische Programmierung und Zeichenketten.',
      longDescription:
        'SNOBOL ist eine Sprachfamilie aus den Bell Labs mit Fokus auf Zeichenkettenverarbeitung, symbolische Berechnung und Musterabgleich. SNOBOL4 wurde zur bekanntesten Version, mit Mustern als First-Class-Werten und ausdrucksstarken Operatoren zur Texttransformation.\n\nDie Sprache beeinflusste spatere Textverarbeitungs- und Skriptsprachen, besonders durch den Umgang mit Mustern und dynamischen Daten. Heute wird sie vor allem fur historische Studien, Bewahrung und spezialisierte Legacy-Programme genutzt.',
    },
    pt: {
      name: 'SNOBOL',
      description:
        'Linguagem de processamento de texto conhecida por padroes, simbolos e manipulacao de strings.',
      longDescription:
        'SNOBOL e uma familia de linguagens da Bell Labs focada em processamento de strings, computacao simbolica e correspondencia de padroes. SNOBOL4 tornou-se a versao mais conhecida, com padroes como valores de primeira classe e operadores expressivos para transformar texto.\n\nEla influenciou linguagens posteriores de processamento de texto e scripting, especialmente pelo tratamento de padroes e dados dinamicos. Hoje e usada principalmente para estudo historico, preservacao e programas legados especializados.',
    },
  },
} satisfies Language;
