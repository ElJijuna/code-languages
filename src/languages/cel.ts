import type { Language } from '../types';

export const cel = {
  slug: 'cel',
  publishedDate: '2018-01-01',
  extensions: ['.cel'],
  author: 'Google / CEL community',
  website: 'https://cel.dev',
  paradigms: ['expression', 'declarative', 'configuration'],
  tooling: {
    runtimes: ['cel-go', 'cel-java', 'cel-cpp'],
    ecosystems: ['Cloud Native', 'Policy', 'Configuration'],
  },
  version: '0.25.2',
  logo: 'https://dummyimage.com/32x32/4285F4/ffffff.png&text=CEL',
  color: '#4285F4',
  i18n: {
    en: {
      name: 'Common Expression Language',
      description:
        'A portable, non-Turing-complete language for fast and safe expression evaluation.',
      longDescription:
        'Common Expression Language provides a compact syntax for evaluating conditions, transformations, and policy rules inside host applications. Its non-Turing-complete design keeps evaluation predictable and suitable for untrusted expressions.\n\nCEL is embedded in cloud APIs, validation systems, authorization policies, and configuration tools. A shared specification and conformance tests support compatible implementations across several host languages.',
    },
    es: {
      name: 'Lenguaje Comun de Expresiones',
      description:
        'Lenguaje portable y no Turing-completo para evaluar expresiones de forma rapida y segura.',
      longDescription:
        'Common Expression Language ofrece una sintaxis compacta para evaluar condiciones, transformaciones y reglas de politica dentro de aplicaciones anfitrionas. Su diseno no Turing-completo mantiene la evaluacion predecible y apta para expresiones no confiables.\n\nCEL se integra en API de nube, sistemas de validacion, politicas de autorizacion y herramientas de configuracion. Una especificacion comun y pruebas de conformidad permiten implementaciones compatibles en varios lenguajes.',
    },
    it: {
      name: 'Common Expression Language',
      description:
        'Linguaggio portabile e non Turing-completo per valutare espressioni in modo rapido e sicuro.',
      longDescription:
        'Common Expression Language offre una sintassi compatta per valutare condizioni, trasformazioni e regole di policy nelle applicazioni host. Il design non Turing-completo rende la valutazione prevedibile e adatta a espressioni non attendibili.\n\nCEL viene incorporato in API cloud, sistemi di validazione, policy di autorizzazione e strumenti di configurazione. Una specifica comune e test di conformita supportano implementazioni compatibili in diversi linguaggi.',
    },
    fr: {
      name: 'Common Expression Language',
      description:
        'Langage portable et non Turing-complet pour evaluer des expressions rapidement et surement.',
      longDescription:
        'Common Expression Language fournit une syntaxe compacte pour evaluer conditions, transformations et regles de politique dans des applications hotes. Sa conception non Turing-complete rend l evaluation previsible et adaptee aux expressions non fiables.\n\nCEL est integre aux API cloud, systemes de validation, politiques d autorisation et outils de configuration. Une specification commune et des tests de conformite assurent des implementations compatibles dans plusieurs langages.',
    },
    de: {
      name: 'Common Expression Language',
      description:
        'Portable, nicht Turing-vollstandige Sprache zur schnellen und sicheren Ausdrucksauswertung.',
      longDescription:
        'Common Expression Language bietet eine kompakte Syntax zur Auswertung von Bedingungen, Transformationen und Richtlinien in Host-Anwendungen. Das nicht Turing-vollstandige Design macht die Auswertung vorhersehbar und fur nicht vertrauenswurdige Ausdrucke geeignet.\n\nCEL wird in Cloud-APIs, Validierungssysteme, Autorisierungsrichtlinien und Konfigurationswerkzeuge eingebettet. Eine gemeinsame Spezifikation und Konformitatstests ermoglichen kompatible Implementierungen in mehreren Sprachen.',
    },
    pt: {
      name: 'Common Expression Language',
      description:
        'Linguagem portavel e nao Turing-completa para avaliar expressoes com rapidez e seguranca.',
      longDescription:
        'Common Expression Language oferece sintaxe compacta para avaliar condicoes, transformacoes e regras de politica em aplicacoes hospedeiras. Seu design nao Turing-completo torna a avaliacao previsivel e adequada para expressoes nao confiaveis.\n\nCEL e incorporada em APIs de nuvem, sistemas de validacao, politicas de autorizacao e ferramentas de configuracao. Uma especificacao comum e testes de conformidade sustentam implementacoes compativeis em varias linguagens.',
    },
  },
} satisfies Language;
