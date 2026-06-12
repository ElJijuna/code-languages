import type { Language } from '../types';

export const freemarker = {
  slug: 'freemarker',
  publishedDate: '1999-01-01',
  extensions: ['.ftl', '.ftlh', '.ftlx'],
  author: 'Apache Software Foundation',
  website: 'https://freemarker.apache.org',
  paradigms: ['template', 'declarative'],
  tooling: {
    runtimes: ['JVM'],
    packageManagers: ['Maven', 'Gradle'],
    ecosystems: ['Java', 'Web', 'Apache'],
  },
  version: '2.3.34',
  logo: 'https://dummyimage.com/32x32/326CE5/ffffff.png&text=FM',
  color: '#326CE5',
  i18n: {
    en: {
      name: 'FreeMarker',
      description:
        'A JVM template language used to generate HTML, emails, configuration files, and other text output.',
      longDescription:
        'Apache FreeMarker is a template engine and template language for Java applications. It separates presentation text from application code and can generate HTML pages, emails, source files, configuration files, and other structured text.\n\nFreeMarker templates use expressions, directives, macros, includes, and data-model access rather than embedding Java code directly. It is common in server-side Java web applications and code generation workflows.',
    },
    es: {
      name: 'FreeMarker',
      description:
        'Lenguaje de plantillas para la JVM usado para generar HTML, correos, configuracion y otras salidas de texto.',
      longDescription:
        'Apache FreeMarker es un motor y lenguaje de plantillas para aplicaciones Java. Separa el texto de presentacion del codigo de aplicacion y puede generar paginas HTML, correos, codigo fuente, archivos de configuracion y otros textos estructurados.\n\nLas plantillas FreeMarker usan expresiones, directivas, macros, inclusiones y acceso a modelos de datos en lugar de embeber codigo Java directamente.',
    },
    it: {
      name: 'FreeMarker',
      description:
        'Linguaggio di template per JVM utilizzato per generare HTML, email, file di configurazione e altri output testuali.',
      longDescription:
        "FreeMarker è un motore di template e linguaggio per applicazioni Java. Separa il testo di presentazione dal codice dell'applicazione e può generare pagine HTML, email, file sorgente, file di configurazione e altri testi strutturati.\n\nI template FreeMarker utilizzano espressioni, direttive, macro, inclusioni e accesso al modello dati invece di incorporare direttamente il codice Java. È comune nelle applicazioni web Java lato server e nei flussi di lavoro di generazione del codice.",
    },
    fr: {
      name: 'FreeMarker',
      description:
        "Langage de modèle JVM pour générer du HTML, des emails, des fichiers de configuration et d'autres sorties textuelles.",
      longDescription:
        "FreeMarker est un moteur de modèles et un langage de modélisation pour les applications Java. Il sépare le texte de présentation du code de l'application et peut générer des pages HTML, des emails, des fichiers sources, des fichiers de configuration et d'autres textes structurés.\n\nLes modèles FreeMarker utilisent des expressions, des directives, des macros, des inclusions et l'accès au modèle de données plutôt que d'intégrer directement du code Java. Il est couramment utilisé dans les applications web Java côté serveur et dans les flux de travail de génération de code.",
    },
    de: {
      name: 'FreeMarker',
      description:
        'Eine JVM-basierte Template-Sprache zur Generierung von HTML, E-Mails und Konfigurationsdateien.',
      longDescription:
        'FreeMarker ist ein Template-Engine und eine Template-Sprache für Java-Anwendungen. Es trennt die Präsentationslogik vom Anwendungscode und kann HTML-Seiten, E-Mails, Quellcode, Konfigurationsdateien und andere strukturierte Texte generieren.\n\nFreeMarker-Vorlagen verwenden Ausdrücke, Direktiven, Makros, Includes und Datenmodellzugriff anstelle der direkten Einbettung von Java-Code. Es wird häufig in serverseitigen Java-Webanwendungen und Code-Generierungsworkflows verwendet.',
    },
    pt: {
      name: 'FreeMarker',
      description:
        'Linguagem de modelo para JVM usada para gerar HTML, e-mails, arquivos de configuração e outros textos.',
      longDescription:
        'FreeMarker é um motor de modelos e linguagem de templates para aplicações Java. Separa o texto de apresentação do código da aplicação e pode gerar páginas HTML, e-mails, arquivos de origem, arquivos de configuração e outros textos estruturados.\n\nAs linguagens FreeMarker usam expressões, diretivas, macros, includes e acesso ao modelo de dados em vez de incorporar diretamente código Java. É comum em aplicações web Java no lado do servidor e fluxos de trabalho de geração de código.',
    },
  },
} satisfies Language;
