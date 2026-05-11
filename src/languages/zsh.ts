import type { Language } from "../types";

export const zsh = {
  slug: "zsh",
  publishedDate: "1990-01-01",
  extensions: [
    ".zsh",
    ".zshrc",
    ".zshenv",
    ".zprofile",
    ".zlogin",
    ".zlogout",
    ".zsh-theme",
  ],
  author: "Paul Falstad",
  website: "https://www.zsh.org",
  paradigms: ["command", "imperative", "scripting", "shell"],
  tooling: {
    runtimes: ["Z shell", "Unix-like shells"],
    packageManagers: ["Homebrew", "APT", "DNF", "Pacman"],
    ecosystems: ["Unix", "Linux", "macOS", "DevOps"],
  },
  version: "5.9",
  logo:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Z_Shell_Logo_Color_Horizontal.svg",
  i18n: {
    en: {
      name: "zsh",
      description:
        "A Unix shell and command language for interactive use, scripting, and automation.",
      longDescription:
        "zsh is a Unix shell designed for interactive command-line use and shell scripting, with advanced completion, globbing, prompt customization, and shell emulation features.\n\nIt is widely used as a login shell, especially on Unix-like systems and macOS, and is common in developer workflows, terminal customization, automation scripts, and system administration.",
    },
    es: {
      name: "zsh",
      description:
        "Un shell Unix y lenguaje de comandos para uso interactivo, scripting y automatizacion.",
      longDescription:
        "zsh es un shell Unix disenado para uso interactivo en linea de comandos y scripting, con autocompletado avanzado, globbing, personalizacion del prompt y funciones de emulacion de shells.\n\nSe usa ampliamente como login shell, especialmente en sistemas tipo Unix y macOS, y es comun en flujos de desarrollo, personalizacion de terminales, scripts de automatizacion y administracion de sistemas.",
    },
  },
} satisfies Language;
