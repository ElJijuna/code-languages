import type { Language } from '@/types';

export const twee = {
  slug: 'twee',
  publishedDate: '2009-01-01',
  extensions: ['.tw', '.twee', '.tw2'],
  author: 'Chris Klimas and contributors',
  website: 'https://twinery.org',
  paradigms: ['narrative', 'declarative', 'markup', 'hypertext'],
  tooling: {
    runtimes: ['Twine', 'Tweego'],
    ecosystems: ['Interactive Fiction', 'Narrative Games', 'Game Development'],
  },
  version: '2.10.0',
  logo: 'https://avatars.githubusercontent.com/u/2966890?v=4',
  color: '#0A6D91',
  i18n: {
    en: {
      name: 'Twee/Twine',
      description:
        'A plain-text format for writing interactive hypertext fiction in the Twine ecosystem.',
      longDescription:
        'Twee is the plain-text source format underlying the Twine interactive fiction ecosystem. Passages are defined with double-bracket links and special markup that compiles to story formats such as Harlowe, Sugarcube, and Chapbook, producing self-contained HTML files that run in any browser without plugins.\n\nOriginally created by Chris Klimas as a visual tool for non-programmers, Twine and its Twee format have become a popular entry point for interactive fiction authors. The command-line compiler Tweego enables version-controlled, file-based authoring workflows, while the graphical Twine editor supports visual story mapping.',
    },
    es: {
      name: 'Twee/Twine',
      description:
        'Formato de texto plano para escribir ficcion interactiva de hipertexto en el ecosistema Twine.',
      longDescription:
        'Twee es el formato de texto plano subyacente al ecosistema de ficcion interactiva Twine. Los pasajes se definen con enlaces de doble corchete y marcado especial que se compila a formatos de historia como Harlowe, Sugarcube y Chapbook, produciendo archivos HTML autocontenidos que funcionan en cualquier navegador sin complementos.\n\nCreado originalmente por Chris Klimas como herramienta visual para no programadores, Twine y su formato Twee se han convertido en un popular punto de entrada para autores de ficcion interactiva. El compilador de linea de comandos Tweego permite flujos de trabajo basados en archivos con control de versiones, mientras que el editor grafico Twine admite mapeo visual de historias.',
    },
    it: {
      name: 'Twee/Twine',
      description:
        'Formato in testo semplice per scrivere narrativa interattiva ipertestuale nell ecosistema Twine.',
      longDescription:
        'Twee e il formato in testo semplice alla base dell ecosistema di narrativa interattiva Twine. I passaggi sono definiti con link a doppie parentesi e markup speciale che si compila in formati come Harlowe, Sugarcube e Chapbook, producendo file HTML autonomi eseguibili in qualsiasi browser senza plugin.\n\nOriginariamente creato da Chris Klimas come strumento visivo per non programmatori, Twine e il formato Twee sono diventati un punto di ingresso popolare per gli autori di narrativa interattiva. Il compilatore da riga di comando Tweego abilita flussi di lavoro basati su file con controllo versione, mentre l editor grafico Twine supporta la mappatura visiva delle storie.',
    },
    fr: {
      name: 'Twee/Twine',
      description:
        'Format texte brut pour ecrire de la fiction interactive hypertextuelle dans l ecosysteme Twine.',
      longDescription:
        'Twee est le format texte brut sous-jacent a l ecosysteme de fiction interactive Twine. Les passages sont definis avec des liens a double crochet et un balisage special qui se compile vers des formats d histoire comme Harlowe, Sugarcube et Chapbook, produisant des fichiers HTML autonomes fonctionnant dans n importe quel navigateur sans plugin.\n\nCree initialement par Chris Klimas comme outil visuel pour les non-programmeurs, Twine et son format Twee sont devenus un point d entree populaire pour les auteurs de fiction interactive. Le compilateur en ligne de commande Tweego permet des flux de travail bases sur des fichiers avec controle de version, tandis que l editeur graphique Twine permet la cartographie visuelle des histoires.',
    },
    de: {
      name: 'Twee/Twine',
      description:
        'Klartextformat fur das Schreiben interaktiver Hypertextfiction im Twine-Okosystem.',
      longDescription:
        'Twee ist das Klartextquellenformat des Twine-Interaktivfiction-Okosystems. Passagen werden mit doppeleckigen Klammern und speziellem Markup definiert, das zu Story-Formaten wie Harlowe, Sugarcube und Chapbook kompiliert wird und eigenstandige HTML-Dateien erzeugt, die ohne Plugins in jedem Browser laufen.\n\nUrsprunglich von Chris Klimas als visuelles Werkzeug fur Nicht-Programmierer entwickelt, sind Twine und das Twee-Format zu einem beliebten Einstiegspunkt fur Interaktivfiction-Autoren geworden. Der Kommandozeilencompiler Tweego ermoglicht dateibasierte Arbeitsablaufe mit Versionskontrolle, wahrend der grafische Twine-Editor visuelles Story-Mapping unterstutzt.',
    },
    pt: {
      name: 'Twee/Twine',
      description:
        'Formato de texto simples para escrever ficcao interativa de hipertexto no ecossistema Twine.',
      longDescription:
        'Twee e o formato de texto simples subjacente ao ecossistema de ficcao interativa Twine. As passagens sao definidas com links de duplo colchete e marcacao especial que compila para formatos de historia como Harlowe, Sugarcube e Chapbook, produzindo arquivos HTML autocontidos que funcionam em qualquer navegador sem plugins.\n\nCriado originalmente por Chris Klimas como ferramenta visual para nao-programadores, Twine e seu formato Twee tornaram-se um ponto de entrada popular para autores de ficcao interativa. O compilador de linha de comando Tweego permite fluxos de trabalho baseados em arquivos com controle de versao, enquanto o editor grafico Twine suporta mapeamento visual de historias.',
    },
  },
} satisfies Language;
