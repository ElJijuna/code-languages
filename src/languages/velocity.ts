import type { Language } from '@/types';

export const velocity = {
  slug: 'velocity',
  publishedDate: '2001-01-01',
  extensions: ['.vm', '.vtl'],
  author: 'Apache Software Foundation',
  website: 'https://velocity.apache.org',
  paradigms: ['template', 'declarative'],
  tooling: {
    runtimes: ['Apache Velocity Engine'],
    ecosystems: ['Java', 'Web', 'Code Generation'],
  },
  version: '2.4.1',
  logo: 'https://velocity.apache.org/engine/devel/images/velocity-logo.png',
  color: '#2D3E50',
  i18n: {
    en: {
      name: 'Apache Velocity',
      description:
        'A Java template language for generating text from application data and objects.',
      longDescription:
        'Apache Velocity Template Language combines references, directives, loops, conditions, and macros to render text from Java objects. Templates remain separate from application code and can target HTML, email, source code, or configuration files.\n\nVelocity is commonly embedded in Java applications, build tools, generators, and web frameworks. Its engine supplies the context that templates read while controlling resource loading, escaping, and execution behavior.',
    },
    es: {
      name: 'Apache Velocity',
      description:
        'Lenguaje de plantillas Java para generar texto desde datos y objetos de aplicaciones.',
      longDescription:
        'Apache Velocity Template Language combina referencias, directivas, bucles, condiciones y macros para renderizar texto desde objetos Java. Las plantillas permanecen separadas del codigo y pueden producir HTML, correos, codigo fuente o configuracion.\n\nVelocity suele integrarse en aplicaciones Java, herramientas de construccion, generadores y frameworks web. Su motor aporta el contexto que leen las plantillas y controla carga de recursos, escape y ejecucion.',
    },
    it: {
      name: 'Apache Velocity',
      description: 'Linguaggio di template Java per generare testo da dati e oggetti applicativi.',
      longDescription:
        'Apache Velocity Template Language combina riferimenti, direttive, cicli, condizioni e macro per produrre testo da oggetti Java. I template restano separati dal codice e possono generare HTML, email, codice sorgente o configurazioni.\n\nVelocity viene incorporato in applicazioni Java, strumenti di build, generatori e framework web. Il motore fornisce il contesto letto dai template e controlla caricamento delle risorse, escaping ed esecuzione.',
    },
    fr: {
      name: 'Apache Velocity',
      description:
        'Langage de templates Java pour generer du texte depuis les donnees et objets applicatifs.',
      longDescription:
        'Apache Velocity Template Language combine references, directives, boucles, conditions et macros pour produire du texte a partir d objets Java. Les templates restent separes du code et peuvent generer HTML, courriels, code source ou configuration.\n\nVelocity est integre aux applications Java, outils de build, generateurs et frameworks web. Son moteur fournit le contexte lu par les templates et controle chargement des ressources, echappement et execution.',
    },
    de: {
      name: 'Apache Velocity',
      description: 'Java-Templatesprache zur Texterzeugung aus Anwendungsdaten und Objekten.',
      longDescription:
        'Apache Velocity Template Language kombiniert Referenzen, Direktiven, Schleifen, Bedingungen und Makros, um Text aus Java-Objekten zu erzeugen. Templates bleiben vom Anwendungscode getrennt und konnen HTML, E-Mails, Quellcode oder Konfiguration ausgeben.\n\nVelocity wird in Java-Anwendungen, Build-Werkzeuge, Generatoren und Web-Frameworks eingebettet. Die Engine liefert den Template-Kontext und steuert Ressourcenladen, Escaping und Ausfuhrung.',
    },
    pt: {
      name: 'Apache Velocity',
      description:
        'Linguagem de templates Java para gerar texto a partir de dados e objetos da aplicacao.',
      longDescription:
        'Apache Velocity Template Language combina referencias, diretivas, lacos, condicoes e macros para produzir texto a partir de objetos Java. Templates ficam separados do codigo e podem gerar HTML, emails, codigo-fonte ou configuracao.\n\nVelocity e incorporado em aplicacoes Java, ferramentas de build, geradores e frameworks web. Seu motor fornece o contexto lido pelos templates e controla carregamento de recursos, escape e execucao.',
    },
  },
} satisfies Language;
