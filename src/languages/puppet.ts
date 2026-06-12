import type { Language } from '../types';

export const puppet = {
  slug: 'puppet',
  publishedDate: '2005-01-01',
  extensions: ['.pp', '.epp'],
  author: 'Luke Kanies / Puppet, Inc.',
  website: 'https://www.puppet.com/docs/puppet/latest/lang_summary',
  paradigms: ['declarative', 'configuration management', 'infrastructure as code'],
  tooling: {
    runtimes: ['Puppet Agent', 'Puppet Server'],
    packageManagers: ['Puppet Forge', 'r10k', 'Code Manager'],
    ecosystems: ['DevOps', 'Infrastructure as Code', 'Configuration Management'],
  },
  version: 'Puppet 8',
  logo: 'https://cdn.simpleicons.org/puppet/FFAE1A',
  color: '#FFAE1A',
  i18n: {
    en: {
      name: 'Puppet',
      description:
        'A declarative infrastructure language for describing system resources, configuration state, and reusable modules.',
      longDescription:
        'The Puppet language describes desired infrastructure state using resources, classes, defined types, variables, conditionals, and modules. Puppet agents apply catalogs compiled from this language to converge systems toward the declared configuration.\n\nIt is used for configuration management, compliance, provisioning, and infrastructure automation across servers and services. The language favors declarative resource relationships over imperative shell-style steps.',
    },
    es: {
      name: 'Puppet',
      description:
        'Lenguaje declarativo de infraestructura para describir recursos del sistema, estado de configuracion y modulos reutilizables.',
      longDescription:
        'El lenguaje Puppet describe el estado deseado de la infraestructura mediante recursos, clases, tipos definidos, variables, condicionales y modulos. Los agentes Puppet aplican catalogos compilados desde este lenguaje para converger los sistemas hacia la configuracion declarada.\n\nSe usa para gestion de configuracion, cumplimiento, aprovisionamiento y automatizacion de infraestructura en servidores y servicios.',
    },
    it: {
      name: 'Puppet',
      description:
        'Linguaggio dichiarativo per definire risorse di sistema, stato di configurazione e moduli riutilizzabili.',
      longDescription:
        "Il linguaggio Puppet descrive lo stato desiderato dell'infrastruttura utilizzando risorse, classi, tipi definiti, variabili, condizioni e moduli. Gli agenti Puppet applicano cataloghi compilati da questo linguaggio per portare i sistemi verso la configurazione dichiarata.\n\nViene utilizzato per la gestione della configurazione, il controllo della conformità, l'erogazione e l'automazione dell'infrastruttura su server e servizi. Il linguaggio favorisce le relazioni dichiarative tra risorse rispetto ai passaggi imperativi in stile shell.",
    },
    fr: {
      name: 'Puppet',
      description:
        "Langage déclaratif pour décrire les ressources système, l'état de configuration et les modules réutilisables.",
      longDescription:
        "Le langage Puppet décrit l'état d'infrastructure souhaité à l'aide de ressources, de classes, de types définis, de variables, de conditions et de modules. Les agents Puppet appliquent des catalogues compilés à partir de ce langage pour converger les systèmes vers la configuration déclarée.\n\nIl est utilisé pour la gestion de la configuration, le respect des normes, la provisionnement et l'automatisation de l'infrastructure sur serveurs et services. Le langage favorise les relations entre ressources déclaratives plutôt que les étapes impératives de type shell.",
    },
    de: {
      name: 'Puppet',
      description:
        'Eine deklarative Infrastruktur-Sprache zur Beschreibung von Systemressourcen und Konfigurationen sowie wiederverwendbaren Modulen.',
      longDescription:
        'Die Puppet-Sprache beschreibt den gewünschten Infrastrukturtzustand mithilfe von Ressourcen, Klassen, definierten Typen, Variablen, Bedingungen und Modulen. Puppet-Agenten wenden diese Kataloge an, um Systeme auf die deklarierte Konfiguration zu bringen.\n\nSie wird für Konfigurationsmanagement, Compliance, Provisionierung und Automatisierung der Infrastruktur über Server und Dienste verwendet. Die Sprache bevorzugt deklarative Ressourcenbeziehungen gegenüber imperativen Shell-Befehlen.',
    },
    pt: {
      name: 'Puppet',
      description:
        'Linguagem declarativa para descrever recursos do sistema, estado de configuração e módulos reutilizáveis.',
      longDescription:
        'A linguagem Puppet descreve o estado desejado da infraestrutura usando recursos, classes, tipos definidos, variáveis, condicionais e módulos. Os agentes Puppet aplicam catálogos compilados a partir desta linguagem para convergir sistemas em direção à configuração declarada.\n\nÉ usada para gerenciamento de configuração, conformidade, provisionamento e automação de infraestrutura em servidores e serviços. A linguagem favorece relacionamentos declarativos entre recursos em vez de etapas imperativas no estilo shell.',
    },
  },
} satisfies Language;
