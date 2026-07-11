import type { Language } from '@/types';

export const openscad = {
  slug: 'openscad',
  publishedDate: '2010-01-01',
  extensions: ['.scad'],
  author: 'Marius Kintel, Clifford Wolf',
  website: 'https://openscad.org',
  paradigms: ['functional', 'declarative', 'imperative'],
  tooling: {
    ecosystems: ['3D modeling', 'CAD'],
  },
  version: '2021.01',
  logo: 'https://avatars.githubusercontent.com/u/1864477?v=4',
  color: '#F5CD2F',
  i18n: {
    en: {
      name: 'OpenSCAD',
      description: 'A script-based 3D CAD modeler for creating solid 3D models.',
      longDescription:
        'OpenSCAD is a free and open-source application for creating solid 3D CAD objects using a scripting language.\n\nUnlike interactive 3D modelers, OpenSCAD uses a purely functional script to describe geometry using constructive solid geometry (CSG) operations, making it popular for parametric design and 3D printing.',
    },
    es: {
      name: 'OpenSCAD',
      description: 'Un modelador 3D CAD basado en scripts para crear modelos sólidos 3D.',
      longDescription:
        'OpenSCAD es una aplicación libre y de código abierto para crear objetos sólidos 3D CAD mediante un lenguaje de scripting.\n\nA diferencia de los modeladores 3D interactivos, OpenSCAD utiliza un script puramente funcional para describir geometría mediante operaciones de geometría sólida constructiva (CSG), siendo popular para el diseño paramétrico y la impresión 3D.',
    },
    it: {
      name: 'OpenSCAD',
      description: 'Un modellatore CAD 3D basato su script per la creazione di modelli solidi 3D.',
      longDescription:
        "OpenSCAD e un'applicazione libera e open source per la creazione di oggetti CAD 3D solidi tramite un linguaggio di scripting.\n\nA differenza dei modellatori 3D interattivi, OpenSCAD utilizza uno script puramente funzionale per descrivere la geometria tramite operazioni di geometria solida costruttiva (CSG), rendendolo popolare per il design parametrico e la stampa 3D.",
    },
    fr: {
      name: 'OpenSCAD',
      description: 'Un modeleur CAO 3D basé sur des scripts pour créer des modèles solides 3D.',
      longDescription:
        "OpenSCAD est une application libre et open source pour créer des objets CAO 3D solides à l'aide d'un langage de script.\n\nContrairement aux modeleurs 3D interactifs, OpenSCAD utilise un script purement fonctionnel pour décrire la géométrie à l'aide d'opérations de géométrie solide constructive (CSG), ce qui le rend populaire pour la conception paramétrique et l'impression 3D.",
    },
    de: {
      name: 'OpenSCAD',
      description: 'Ein skriptbasierter 3D-CAD-Modellierer zur Erstellung solider 3D-Modelle.',
      longDescription:
        'OpenSCAD ist eine freie und quelloffene Anwendung zur Erstellung solider 3D-CAD-Objekte mit einer Skriptsprache.\n\nIm Gegensatz zu interaktiven 3D-Modellierern verwendet OpenSCAD ein rein funktionales Skript zur Beschreibung der Geometrie mittels konstruktiver Festkörpergeometrie (CSG) und ist beliebt für parametrisches Design und 3D-Druck.',
    },
    pt: {
      name: 'OpenSCAD',
      description: 'Um modelador CAD 3D baseado em scripts para criar modelos sólidos 3D.',
      longDescription:
        'OpenSCAD é uma aplicação livre e de código aberto para criar objetos CAD 3D sólidos usando uma linguagem de scripting.\n\nAo contrário dos modeladores 3D interativos, o OpenSCAD usa um script puramente funcional para descrever a geometria usando operações de geometria sólida construtiva (CSG), sendo popular para design paramétrico e impressão 3D.',
    },
  },
} satisfies Language;
