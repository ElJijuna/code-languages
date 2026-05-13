import type { Language } from "../types";

export const batch = {
  slug: "batch",
  publishedDate: "1981-08-12",
  extensions: [".bat", ".cmd"],
  author: "Microsoft / IBM",
  website:
    "https://learn.microsoft.com/windows-server/administration/windows-commands/windows-commands",
  paradigms: ["command", "imperative", "scripting", "shell"],
  tooling: {
    runtimes: ["Command Prompt", "cmd.exe", "MS-DOS"],
    ecosystems: ["Windows", "DOS", "Automation"],
  },
  version: "Windows Command Processor",
  logo: "https://icons.iconarchive.com/icons/simpleicons-team/simple/128/windowsterminal-icon.png",
  i18n: {
    en: {
      name: "Batch",
      description:
        "A Windows command scripting format used to automate command-line tasks with cmd.exe.",
      longDescription:
        "Batch files contain commands interpreted by the Windows Command Processor, including command invocation, variables, labels, conditionals, loops, argument handling, and process control.\n\nThey are used for Windows setup scripts, developer shortcuts, administrative automation, legacy DOS workflows, and simple command-line task orchestration on Windows systems.",
    },
    es: {
      name: "Batch",
      description:
        "Un formato de scripting de comandos de Windows usado para automatizar tareas con cmd.exe.",
      longDescription:
        "Los archivos Batch contienen comandos interpretados por Windows Command Processor, incluyendo invocacion de comandos, variables, etiquetas, condicionales, bucles, manejo de argumentos y control de procesos.\n\nSe usan para scripts de configuracion en Windows, accesos rapidos de desarrollo, automatizacion administrativa, flujos legacy de DOS y orquestacion simple de tareas de linea de comandos en sistemas Windows.",
    },
  },
} satisfies Language;
