import type { Language } from '../types';

export const git = {
  slug: 'git',
  publishedDate: '2005-04-07',
  extensions: ['.git', '.gitignore', '.gitattributes', '.gitmodules', '.gitkeep'],
  author: 'Linus Torvalds / Junio C Hamano',
  website: 'https://git-scm.com',
  paradigms: ['configuration', 'version-control', 'ignore-patterns'],
  tooling: {
    runtimes: ['Git'],
    ecosystems: ['Version Control', 'DevOps', 'Source Control'],
  },
  version: '2.54.0',
  logo: 'https://cdn.simpleicons.org/git/F05032',
  color: '#F05032',
  i18n: {
    en: {
      name: 'Git',
      description:
        'Metadata and configuration files used by Git repositories and version-control workflows.',
      longDescription:
        'Git-related files define repository ignore rules, attributes, submodules, local configuration, placeholders, and repository metadata used by Git tooling.\n\nThey are used in software projects to control which files are tracked, how paths are treated, how submodules are linked, and how repository-specific automation or conventions behave.',
    },
    es: {
      name: 'Git',
      description:
        'Archivos de metadata y configuracion usados por repositorios Git y flujos de control de versiones.',
      longDescription:
        'Los archivos relacionados con Git definen reglas de ignorado, atributos, submodulos, configuracion local, placeholders y metadata de repositorio usada por herramientas Git.\n\nSe usan en proyectos de software para controlar que archivos se versionan, como se tratan las rutas, como se enlazan submodulos y como se comportan automatizaciones o convenciones especificas del repositorio.',
    },
    it: {
      name: 'Git',
      description:
        'File di metadati e di configurazione utilizzati dai repository Git e dai flussi di lavoro di controllo delle versioni.',
      longDescription:
        'I file relativi a Git definiscono le regole di esclusione del repository, gli attributi, i sottomoduli, la configurazione locale, i segnaposto e i metadati del repository utilizzati dagli strumenti Git.\n\nSono utilizzati in progetti software per controllare quali file devono essere tracciati, come vengono trattati i percorsi, come vengono collegati i sottomoduli e come si comportano le automazioni o le convenzioni specifiche del repository.',
    },
    fr: {
      name: 'Git',
      description:
        'Fichiers de metadonnees et de configuration utilises par les depots Git et les workflows de controle de version.',
      longDescription:
        "Les fichiers lies a Git definissent les regles d'ignoration des depots, les attributs, les sous-modules, la configuration locale, les espaces reserves et les metadonnees du depot utilises par les outils Git.\n\nIls sont utilises dans les projets logiciels pour controler quels fichiers sont suivis, comment les chemins sont traites, comment les sous-modules sont lies et comment le comportement de l'automatisation ou des conventions specifiques au depot.",
    },
    de: {
      name: 'Git',
      description:
        'Metadaten und Konfigurationsdateien, die von Git-Repositories und Versionskontroll-Workflows verwendet werden.',
      longDescription:
        'Git-bezogene Dateien definieren Regeln für die Ignorierung von Dateien, Attribute, Submodule, lokale Konfiguration, Platzhalter und Metadaten des Repositorys, die von Git-Tools verwendet werden.\n\nSie werden in Softwareprojekten verwendet, um zu steuern, welche Dateien verfolgt werden, wie Pfade behandelt werden, wie Submodule verknüpft werden und wie sich Repository-spezifische Automatisierung oder Konventionen verhalten.',
    },
    pt: {
      name: 'Git',
      description:
        'Metadados e arquivos de configuração usados por repositórios Git e fluxos de trabalho de controle de versão.',
      longDescription:
        'Arquivos relacionados ao Git definem regras de ignorar repositórios, atributos, submódulos, configuração local, marcadores e metadados do repositório usados pelas ferramentas do Git.\n\nSão usados em projetos de software para controlar quais arquivos são rastreados, como os caminhos são tratados, como os submódulos são vinculados e como o comportamento da automação ou convenções específicas do repositório.',
    },
  },
} satisfies Language;
