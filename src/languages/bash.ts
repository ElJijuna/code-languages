import type { Language } from "../types";

export const bash = {
  slug: "bash",
  publishedDate: "1989-06-08",
  extensions: [".sh", ".bash", ".bashrc", ".bash_profile", ".bash_login", ".profile"],
  author: "Brian Fox / GNU Project",
  website: "https://www.gnu.org/software/bash/",
  paradigms: ["command", "imperative", "scripting", "shell"],
  tooling: {
    runtimes: ["Bash shell", "POSIX-like shells"],
    packageManagers: ["Homebrew", "APT", "DNF", "Pacman"],
    ecosystems: ["Unix", "Linux", "macOS", "DevOps"],
  },
  version: "5.3",
  logo: "https://bashlogo.com/img/symbol/svg/full_colored_dark.svg",
  color: "#4EAA25",
  i18n: {
    en: {
      name: "Bash",
      description: "A Unix shell and command language for scripting and interactive use.",
      longDescription:
        "Bash is the GNU Project's Bourne Again Shell, an sh-compatible shell with features from the Bourne shell, Korn shell, and C shell.\n\nIt is widely used for command-line sessions, shell scripts, automation, system administration, build tooling, CI workflows, and Unix-like operating system environments.",
    },
    es: {
      name: "Bash",
      description: "Un shell Unix y lenguaje de comandos para scripting y uso interactivo.",
      longDescription:
        "Bash es el Bourne Again Shell del Proyecto GNU, un shell compatible con sh que incorpora caracteristicas del Bourne shell, Korn shell y C shell.\n\nSe usa ampliamente en sesiones de linea de comandos, scripts de shell, automatizacion, administracion de sistemas, herramientas de build, flujos CI y entornos de sistemas tipo Unix.",
    },
  },
} satisfies Language;
