import type { Language } from "../types";

export const nix = {
  slug: "nix",
  publishedDate: "2003-06-14",
  extensions: [".nix"],
  author: "Eelco Dolstra",
  website: "https://nixos.org",
  paradigms: ["functional", "declarative", "lazy"],
  tooling: {
    runtimes: ["Nix", "NixOS"],
    packageManagers: ["nix", "nix flakes"],
    ecosystems: ["Linux", "macOS", "NixOS", "DevOps"],
  },
  version: "2.34.7",
  logo: "https://cdn.simpleicons.org/nixos/5277C3",
  color: "#5277C3",
  i18n: {
    en: {
      name: "Nix",
      description:
        "A purely functional, lazy language for reproducible package management and system configuration.",
      longDescription:
        "Nix is a purely functional, lazily-evaluated expression language used by the Nix package manager and NixOS. It treats packages and system configurations as pure functions of their inputs, guaranteeing reproducible builds and atomic upgrades with no side effects.\n\nIt is used to define packages in Nixpkgs, configure NixOS systems declaratively, and manage development environments via nix-shell and nix flakes. Its lazy evaluation model allows infinite data structures and deferred computation, making it well-suited for large-scale configuration management.",
    },
    es: {
      name: "Nix",
      description:
        "Un lenguaje funcional puro y perezoso para gestion de paquetes y configuracion de sistemas reproducibles.",
      longDescription:
        "Nix es un lenguaje de expresion puramente funcional y de evaluacion perezosa usado por el gestor de paquetes Nix y NixOS. Trata los paquetes y configuraciones de sistema como funciones puras de sus entradas, garantizando compilaciones reproducibles y actualizaciones atomicas sin efectos secundarios.\n\nSe usa para definir paquetes en Nixpkgs, configurar sistemas NixOS de forma declarativa y gestionar entornos de desarrollo con nix-shell y nix flakes. Su modelo de evaluacion perezosa permite estructuras de datos infinitas y computacion diferida, siendo ideal para gestion de configuracion a gran escala.",
    },
  },
} satisfies Language;
