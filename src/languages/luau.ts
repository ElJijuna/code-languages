import type { Language } from "../types";

export const luau = {
  slug: "luau",
  publishedDate: "2021-11-03",
  extensions: [".luau"],
  author: "Roblox",
  website: "https://luau.org",
  paradigms: ["imperative", "scripting", "gradually typed", "embeddable"],
  tooling: {
    runtimes: ["Luau VM", "Roblox"],
    packageManagers: ["Wally", "Pesde"],
    ecosystems: ["Roblox", "Games", "Embedded scripting"],
  },
  version: "0.719",
  logo: "https://cdn.simpleicons.org/roblox/000000",
  color: "#000000",
  i18n: {
    en: {
      name: "Luau",
      description: "A fast Lua-derived scripting language with gradual typing.",
      longDescription:
        "Luau is a scripting language derived from Lua 5.1 and developed by Roblox. It adds gradual typing, performance-focused compiler and VM work, linting, type inference, and features aimed at large game codebases.\n\nIt is used in Roblox experiences, game tooling, embedded scripting, and projects that want Lua-like ergonomics with stronger static analysis and modern runtime performance.",
    },
    es: {
      name: "Luau",
      description: "Un lenguaje de scripting derivado de Lua, rapido y con tipado gradual.",
      longDescription:
        "Luau es un lenguaje de scripting derivado de Lua 5.1 y desarrollado por Roblox. Agrega tipado gradual, trabajo de compilador y VM orientado al rendimiento, linting, inferencia de tipos y caracteristicas para grandes bases de codigo de juegos.\n\nSe usa en experiencias de Roblox, herramientas de juegos, scripting embebido y proyectos que quieren ergonomia similar a Lua con analisis estatico mas fuerte y rendimiento moderno.",
    },
  },
} satisfies Language;
