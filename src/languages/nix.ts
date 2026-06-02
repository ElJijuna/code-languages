import type { Language } from '../types';

export const nix = {
  slug: 'nix',
  publishedDate: '2003-06-14',
  extensions: ['.nix'],
  author: 'Eelco Dolstra',
  website: 'https://nixos.org',
  paradigms: ['functional', 'declarative', 'lazy'],
  tooling: {
    runtimes: ['Nix', 'NixOS'],
    packageManagers: ['nix', 'nix flakes'],
    ecosystems: ['Linux', 'macOS', 'NixOS', 'DevOps'],
  },
  version: '2.34.7',
  logo: 'https://cdn.simpleicons.org/nixos/5277C3',
  color: '#5277C3',
  i18n: {
    en: {
      name: 'Nix',
      description:
        'A purely functional, lazy language for reproducible package management and system configuration.',
      longDescription:
        'Nix is a purely functional, lazily-evaluated expression language used by the Nix package manager and NixOS. It treats packages and system configurations as pure functions of their inputs, guaranteeing reproducible builds and atomic upgrades with no side effects.\n\nIt is used to define packages in Nixpkgs, configure NixOS systems declaratively, and manage development environments via nix-shell and nix flakes. Its lazy evaluation model allows infinite data structures and deferred computation, making it well-suited for large-scale configuration management.',
    },
    es: {
      name: 'Nix',
      description:
        'Un lenguaje funcional puro y perezoso para gestion de paquetes y configuracion de sistemas reproducibles.',
      longDescription:
        'Nix es un lenguaje de expresion puramente funcional y de evaluacion perezosa usado por el gestor de paquetes Nix y NixOS. Trata los paquetes y configuraciones de sistema como funciones puras de sus entradas, garantizando compilaciones reproducibles y actualizaciones atomicas sin efectos secundarios.\n\nSe usa para definir paquetes en Nixpkgs, configurar sistemas NixOS de forma declarativa y gestionar entornos de desarrollo con nix-shell y nix flakes. Su modelo de evaluacion perezosa permite estructuras de datos infinitas y computacion diferida, siendo ideal para gestion de configuracion a gran escala.',
    },
    it: {
      name: 'Nix',
      description:
        'Un linguaggio funzionale e lazy per la gestione riproducibile dei pacchetti e la configurazione del sistema.',
      longDescription:
        'Nix e un linguaggio di espressioni funzionale e lazy utilizzato dal gestore di pacchetti Nix e NixOS. Tratta i pacchetti e le configurazioni del sistema come funzioni pure delle loro input, garantendo build riproducibili e aggiornamenti atomici senza effetti collaterali.\n\nViene utilizzato per definire i pacchetti in Nixpkgs, configurare i sistemi NixOS in modo dichiarativo e gestire gli ambienti di sviluppo tramite nix-shell e nix flakes. Il suo modello di valutazione lazy consente strutture di dati infinite e calcoli differiti, rendendolo adatto per la gestione di configurazioni su larga scala.',
    },
    fr: {
      name: 'Nix',
      description:
        'Un langage fonctionnel et paresseux pour la gestion de paquets et la configuration systeme reproductibles.',
      longDescription:
        "Nix est un langage d'expressions fonctionnel et paresseux utilise par le gestionnaire de paquets Nix et NixOS. Il traite les paquets et les configurations systeme comme des fonctions pures de leurs entrees, garantissant ainsi des constructions reproductibles et des mises a jour atomiques sans effets secondaires.\n\nIl est utilise pour definir des paquets dans Nixpkgs, configurer les systemes NixOS de maniere declarative, et gerer les environnements de developpement via nix-shell et nix flakes. Son modele d'evaluation paresseuse permet des structures de donnees infinies et des calculs differes, ce qui le rend bien adapte a la gestion de configuration a grande echelle.",
    },
    de: {
      name: 'Nix',
      description:
        'Eine rein funktionale, lazy-auswertende Sprache f\u00fcr reproduzierbare Paketverwaltung und Systemkonfiguration.',
      longDescription:
        'Nix ist eine rein funktionale, lazy-auswertende Ausdruckssprache, die vom Nix-Paketmanager und NixOS verwendet wird. Sie behandelt Pakete und Systemkonfigurationen als reine Funktionen ihrer Eingaben, wodurch reproduzierbare Builds und atomare Upgrades ohne Seiteneffekte gew\u00e4hrleistet werden.\n\nSie wird verwendet, um Pakete in Nixpkgs zu definieren, NixOS-Systeme deklarativ zu konfigurieren und Entwicklungsumgebungen \u00fcber nix-shell und nix flakes zu verwalten. Ihr lazy-Evaluierungsmodell erm\u00f6glicht endliche Datenstrukturen und verz\u00f6gerte Berechnungen, was es f\u00fcr die Verwaltung gro\u00dfer Konfigurationen geeignet macht.',
    },
    pt: {
      name: 'Nix',
      description:
        'Linguagem funcional e pregui\u00e7osa para gerenciamento de pacotes e configura\u00e7\u00e3o de sistemas, garantindo reprodutibilidade.',
      longDescription:
        'Nix \u00e9 uma linguagem de express\u00e3o funcional e pregui\u00e7osa usada pelo gerenciador de pacotes Nix e pelo NixOS. Ela trata pacotes e configura\u00e7\u00f5es de sistema como fun\u00e7\u00f5es puras, garantindo builds reprodut\u00edveis e atualiza\u00e7\u00f5es at\u00f4micas sem efeitos colaterais.\n\n\u00c9 usada para definir pacotes no Nixpkgs, configurar sistemas NixOS de forma declarativa e gerenciar ambientes de desenvolvimento usando nix-shell e nix flakes. Seu modelo de avalia\u00e7\u00e3o pregui\u00e7osa permite estruturas de dados infinitas e computa\u00e7\u00e3o adiada, tornando-a adequada para gerenciamento de configura\u00e7\u00e3o em larga escala.',
    },
  },
} satisfies Language;
