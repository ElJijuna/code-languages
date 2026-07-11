import type { Language } from '../types';

export const awk = {
  slug: 'awk',
  publishedDate: '1977-01-01',
  extensions: ['.awk'],
  author: 'Alfred Aho, Peter Weinberger, Brian Kernighan',
  website: 'https://www.gnu.org/software/gawk/',
  paradigms: ['text-processing', 'scripting', 'pattern-action', 'data-driven'],
  tooling: {
    runtimes: ['awk', 'gawk', 'mawk', 'nawk'],
    packageManagers: ['APT', 'DNF', 'Pacman', 'Homebrew'],
    ecosystems: ['Unix', 'Text Processing', 'Shell', 'Data Extraction'],
  },
  version: 'GNU Awk 5.4.1',
  logo: 'https://cdn.simpleicons.org/gnu/A42E2B',
  color: '#4E9A06',
  i18n: {
    en: {
      name: 'awk',
      description:
        'A pattern-action language for scanning, transforming, and reporting on text data.',
      longDescription:
        'awk is a compact text-processing language built around pattern-action rules, records, fields, associative arrays, regular expressions, and streaming input. It is commonly available on Unix-like systems, with GNU Awk adding many extensions and tooling conveniences.\n\nIt is used for command-line data extraction, log processing, report generation, one-off transformations, shell pipelines, lightweight ETL tasks, and scripts that need concise processing of structured or semi-structured text.',
    },
    es: {
      name: 'awk',
      description:
        'Un lenguaje de patron-accion para analizar, transformar y reportar datos de texto.',
      longDescription:
        'awk es un lenguaje compacto de procesamiento de texto basado en reglas patron-accion, registros, campos, arreglos asociativos, expresiones regulares y entrada en streaming. Esta disponible comunmente en sistemas tipo Unix, con GNU Awk agregando muchas extensiones y comodidades de tooling.\n\nSe usa para extraccion de datos en linea de comandos, procesamiento de logs, generacion de reportes, transformaciones puntuales, pipelines de shell, tareas ETL ligeras y scripts que necesitan procesar texto estructurado o semiestructurado de forma concisa.',
    },
    it: {
      name: 'awk',
      description:
        'Un linguaggio di pattern-azione per la scansione, la trasformazione e la generazione di report su dati testuali.',
      longDescription:
        "awk e un linguaggio di elaborazione testuale compatto, basato su regole di pattern-azione, record, campi, array associativi, espressioni regolari e input in streaming. E comunemente disponibile su sistemi simili a Unix, con GNU Awk che aggiunge molte estensioni e comodita di strumenti.\n\nViene utilizzato per l'estrazione di dati da riga di comando, l'elaborazione di log, la generazione di report, trasformazioni una tantum, pipeline di shell, attivita ETL leggere e script che richiedono un'elaborazione concisa di testo strutturato o semi-strutturato.",
    },
    fr: {
      name: 'awk',
      description:
        'Un langage de modele-action pour la numerisation, la transformation et la generation de rapports sur les donnees textuelles.',
      longDescription:
        "awk est un langage de traitement de texte compact construit autour de regles modele-action, de records, de champs, d'armoires associatives, d'expressions regulieres et d'entrees en flux. Il est couramment disponible sur les systemes similaires a Unix, avec GNU Awk ajoutant de nombreuses extensions et commodites d'outillage.\n\nIl est utilise pour l'extraction de donnees en ligne de commande, le traitement des journaux, la generation de rapports, les transformations ponctuelles, les pipelines de shell, les taches ETL legeres et les scripts qui necessitent un traitement concis de texte structure ou semi-structure.",
    },
    de: {
      name: 'awk',
      description:
        'Eine Muster-Aktionssprache zum Scannen, Transformieren und Berichten von Textdaten.',
      longDescription:
        'awk ist eine kompakte Textverarbeitungs-Sprache, die auf Muster-Aktions-Regeln, Datensätzen, Feldern, assoziativen Arrays, regulären Ausdrücken und Streaming-Eingabe basiert. Sie ist häufig auf Unix-ähnlichen Systemen verfügbar, wobei GNU Awk viele Erweiterungen und Werkzeug-Bequemlichkeiten hinzufügt.\n\nSie wird für die Extraktion von Daten aus der Kommandozeile, die Verarbeitung von Protokollen, die Generierung von Berichten, einmalige Transformationen, Shell-Pipelines, leichte ETL-Aufgaben und Skripte verwendet, die eine prägnante Verarbeitung von strukturiertem oder halbstrukturiertem Text erfordern.',
    },
    pt: {
      name: 'awk',
      description:
        'Linguagem de padrão-ação para analisar, transformar e gerar relatórios a partir de dados textuais.',
      longDescription:
        'awk é uma linguagem de processamento de texto compacta, baseada em regras de padrão-ação, registros, campos, arrays associativos, expressões regulares e entrada em fluxo. É comumente disponível em sistemas semelhantes a Unix, com GNU Awk adicionando muitas extensões e conveniências de ferramentas.\n\nÉ utilizada para extração de dados na linha de comando, processamento de logs, geração de relatórios, transformações únicas, pipelines de shell, tarefas ETL leves e scripts que precisam de processamento conciso de texto estruturado ou semiestruturado.',
    },
  },
} satisfies Language;
