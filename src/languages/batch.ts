import type { Language } from '@/types';

export const batch = {
  slug: 'batch',
  publishedDate: '1981-08-12',
  extensions: ['.bat', '.cmd'],
  author: 'Microsoft / IBM',
  website:
    'https://learn.microsoft.com/windows-server/administration/windows-commands/windows-commands',
  paradigms: ['command', 'imperative', 'scripting', 'shell'],
  tooling: {
    runtimes: ['Command Prompt', 'cmd.exe', 'MS-DOS'],
    ecosystems: ['Windows', 'DOS', 'Automation'],
  },
  version: 'Windows Command Processor',
  logo: 'https://icons.iconarchive.com/icons/simpleicons-team/simple/128/windowsterminal-icon.png',
  color: '#4D4D4D',
  i18n: {
    en: {
      name: 'Batch',
      description:
        'A Windows command scripting format used to automate command-line tasks with cmd.exe.',
      longDescription:
        'Batch files contain commands interpreted by the Windows Command Processor, including command invocation, variables, labels, conditionals, loops, argument handling, and process control.\n\nThey are used for Windows setup scripts, developer shortcuts, administrative automation, legacy DOS workflows, and simple command-line task orchestration on Windows systems.',
    },
    es: {
      name: 'Batch',
      description:
        'Un formato de scripting de comandos de Windows usado para automatizar tareas con cmd.exe.',
      longDescription:
        'Los archivos Batch contienen comandos interpretados por Windows Command Processor, incluyendo invocacion de comandos, variables, etiquetas, condicionales, bucles, manejo de argumentos y control de procesos.\n\nSe usan para scripts de configuracion en Windows, accesos rapidos de desarrollo, automatizacion administrativa, flujos legacy de DOS y orquestacion simple de tareas de linea de comandos en sistemas Windows.',
    },
    it: {
      name: 'Batch',
      description:
        'Un formato di scripting per comandi di Windows utilizzato per automatizzare attivita da riga di comando con cmd.exe.',
      longDescription:
        "I file Batch contengono comandi interpretati dal Windows Command Processor, inclusi l'invocazione di comandi, variabili, etichette, condizioni, cicli, gestione degli argomenti e controllo dei processi.\n\nSono utilizzati per script di installazione di Windows, scorciatoie per sviluppatori, automazione amministrativa, workflow legacy DOS e semplice orchestrazione di attivita da riga di comando su sistemi Windows.",
    },
    fr: {
      name: 'Batch',
      description:
        'Un format de scriptage en ligne de commande pour Windows utilise pour automatiser les taches de ligne de commande avec cmd.exe.',
      longDescription:
        "Les fichiers Batch contiennent des commandes interpretees par le Windows Command Processor, y compris l'invocation de commandes, les variables, les etiquettes, les conditions, les boucles, la gestion des arguments et le controle des processus.\n\nIls sont utilises pour les scripts de configuration Windows, les raccourcis pour les developpeurs, l'automatisation administrative, les workflows DOS herites et l'orchestration simple de taches de ligne de commande sur les systemes Windows.",
    },
    de: {
      name: 'Batch',
      description:
        'Ein Windows-Befehls-Skriptformat, das zum Automatisieren von Befehlszeitanwendungen mit cmd.exe verwendet wird.',
      longDescription:
        'Batch-Dateien enthalten Befehle, die vom Windows Command Processor interpretiert werden, einschließlich Befehlsausführung, Variablen, Labels, Bedingungen, Schleifen, Argumentbearbeitung und Prozesssteuerung.\n\nSie werden für Windows-Installationsskripte, Entwickler-Abkürzungen, administrative Automatisierung, ältere DOS-Workflows und einfache Befehlszeitanwendungen auf Windows-Systemen verwendet.',
    },
    pt: {
      name: 'Batch',
      description:
        'Formato de script de comandos do Windows usado para automatizar tarefas de linha de comando com cmd.exe.',
      longDescription:
        'Os arquivos Batch contêm comandos interpretados pelo Windows Command Processor, incluindo a invocação de comandos, variáveis, rótulos, condicionais, loops, manipulação de argumentos e controle de processos.\n\nSão usados para scripts de instalação do Windows, atalhos para desenvolvedores, automação administrativa, fluxos de trabalho legados do DOS e orquestração simples de tarefas de linha de comando em sistemas Windows.',
    },
  },
} satisfies Language;
