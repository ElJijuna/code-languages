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
  },
} satisfies Language;
