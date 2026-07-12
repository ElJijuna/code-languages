import type { Language } from '@/types';

export const powershell = {
  slug: 'powershell',
  aliases: ['pwsh'],
  publishedDate: '2006-11-14',
  extensions: ['.ps1', '.psm1', '.psd1', '.ps1xml'],
  author: 'Microsoft',
  website: 'https://learn.microsoft.com/powershell/',
  paradigms: ['command', 'imperative', 'object-oriented', 'scripting', 'shell'],
  tooling: {
    runtimes: ['PowerShell', 'Windows PowerShell', '.NET'],
    packageManagers: ['PowerShell Gallery', 'PSResourceGet', 'PowerShellGet'],
    ecosystems: ['Windows', 'Azure', 'DevOps', 'Automation'],
  },
  version: '7.6.3',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png',
  color: '#5391FE',
  i18n: {
    en: {
      name: 'PowerShell',
      description:
        'A cross-platform command shell and scripting language for automation and system administration.',
      longDescription:
        'PowerShell combines a command-line shell, scripting language, object pipeline, module system, providers, remoting, and deep integration with .NET and operating system management APIs.\n\nIt is widely used for Windows administration, Azure automation, DevOps workflows, configuration management, cloud operations, and repeatable infrastructure tasks across Windows, Linux, and macOS.',
    },
    es: {
      name: 'PowerShell',
      description:
        'Un shell de comandos y lenguaje de scripting multiplataforma para automatizacion y administracion de sistemas.',
      longDescription:
        'PowerShell combina un shell de linea de comandos, lenguaje de scripting, pipeline de objetos, sistema de modulos, proveedores, remoting e integracion profunda con .NET y APIs de administracion del sistema operativo.\n\nSe usa ampliamente para administracion de Windows, automatizacion de Azure, flujos DevOps, gestion de configuracion, operaciones cloud y tareas repetibles de infraestructura en Windows, Linux y macOS.',
    },
    it: {
      name: 'PowerShell',
      description:
        "Un shell di comando e linguaggio di scripting multipiattaforma per l'automazione e l'amministrazione di sistema.",
      longDescription:
        "PowerShell combina un shell di riga di comando, un linguaggio di scripting, un pipeline di oggetti, un sistema di moduli, provider, remoting e una profonda integrazione con le API di .NET e di gestione del sistema operativo.\n\nE ampiamente utilizzato per l'amministrazione di Windows, l'automazione di Azure, i flussi di lavoro DevOps, la gestione della configurazione, le operazioni cloud e attivita di infrastruttura ripetibili su Windows, Linux e macOS.",
    },
    fr: {
      name: 'PowerShell',
      description:
        "Un shell de commande et un langage de script multiplateforme pour l'automatisation et l'administration systeme.",
      longDescription:
        "PowerShell combine un shell en ligne de commande, un langage de script, une pipeline d'objets, un systeme de modules, des fournisseurs, le telemetrie et une integration profonde avec les API .NET et de gestion du systeme d'exploitation.\n\nIl est largement utilise pour l'administration Windows, l'automatisation Azure, les workflows DevOps, la gestion de la configuration, les operations cloud et les taches d'infrastructure repetitives sur Windows, Linux et macOS.",
    },
    de: {
      name: 'PowerShell',
      description:
        'Ein plattformübergreifendes Befehlszeilen-Shell und Skriptsprache für Automatisierung und Systemadministration.',
      longDescription:
        'PowerShell kombiniert eine Befehlszeilen-Shell, Skriptsprache, Objektpipeline, Modulsystem, Provider, Remoting und tiefe Integration mit .NET und Betriebssystem-Management-APIs.\n\nEs wird häufig für die Windows-Administration, Azure-Automatisierung, DevOps-Workflows, Konfigurationsmanagement, Cloud-Betrieb und wiederholbare Infrastrukturaufgaben auf Windows, Linux und macOS verwendet.',
    },
    pt: {
      name: 'PowerShell',
      description:
        'Uma interface de linha de comando e linguagem de script multiplataforma para automação e administração de sistemas.',
      longDescription:
        'O PowerShell combina um shell de linha de comando, linguagem de script, pipeline de objetos, sistema de módulos, provedores, remoting e integração profunda com APIs de gerenciamento .NET e do sistema operacional.\n\nÉ amplamente utilizado para administração do Windows, automação do Azure, fluxos de trabalho DevOps, gerenciamento de configuração, operações em nuvem e tarefas de infraestrutura repetíveis em Windows, Linux e macOS.',
    },
  },
} satisfies Language;
