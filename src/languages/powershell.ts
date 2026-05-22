import type { Language } from "../types";

export const powershell = {
  slug: "powershell",
  publishedDate: "2006-11-14",
  extensions: [".ps1", ".psm1", ".psd1", ".ps1xml"],
  author: "Microsoft",
  website: "https://learn.microsoft.com/powershell/",
  paradigms: ["command", "imperative", "object-oriented", "scripting", "shell"],
  tooling: {
    runtimes: ["PowerShell", "Windows PowerShell", ".NET"],
    packageManagers: ["PowerShell Gallery", "PSResourceGet", "PowerShellGet"],
    ecosystems: ["Windows", "Azure", "DevOps", "Automation"],
  },
  version: "7.6.1",
  logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png",
  color: "#5391FE",
  i18n: {
    en: {
      name: "PowerShell",
      description:
        "A cross-platform command shell and scripting language for automation and system administration.",
      longDescription:
        "PowerShell combines a command-line shell, scripting language, object pipeline, module system, providers, remoting, and deep integration with .NET and operating system management APIs.\n\nIt is widely used for Windows administration, Azure automation, DevOps workflows, configuration management, cloud operations, and repeatable infrastructure tasks across Windows, Linux, and macOS.",
    },
    es: {
      name: "PowerShell",
      description:
        "Un shell de comandos y lenguaje de scripting multiplataforma para automatizacion y administracion de sistemas.",
      longDescription:
        "PowerShell combina un shell de linea de comandos, lenguaje de scripting, pipeline de objetos, sistema de modulos, proveedores, remoting e integracion profunda con .NET y APIs de administracion del sistema operativo.\n\nSe usa ampliamente para administracion de Windows, automatizacion de Azure, flujos DevOps, gestion de configuracion, operaciones cloud y tareas repetibles de infraestructura en Windows, Linux y macOS.",
    },
  },
} satisfies Language;
