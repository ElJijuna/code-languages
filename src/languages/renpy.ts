import type { Language } from '@/types';

export const renpy = {
  slug: 'renpy',
  aliases: ["ren'py"],
  publishedDate: '2004-08-24',
  extensions: ['.rpy', '.rpym'],
  author: 'Tom Rothamel',
  website: 'https://www.renpy.org',
  paradigms: ['imperative', 'scripting', 'narrative'],
  tooling: {
    runtimes: ["Ren'Py Engine", 'CPython'],
    ecosystems: ['Game Development', 'Interactive Fiction'],
  },
  version: '8.3.7',
  logo: 'https://avatars.githubusercontent.com/u/1900740?v=4',
  color: '#FF7F7F',
  i18n: {
    en: {
      name: "Ren'Py",
      description: 'A visual novel engine with a screenplay-like script language embedding Python.',
      longDescription:
        "Ren'Py is an open-source engine for visual novels and story-driven games. Its script language reads like a screenplay — labels, dialogue, menus, and scene statements — while full Python can be embedded anywhere game logic needs it.\n\nThousands of commercial and free titles ship on Ren'Py, which exports to Windows, macOS, Linux, Android, iOS, and the web, and includes built-in support for saves, rollback, localization, and accessibility.",
    },
    es: {
      name: "Ren'Py",
      description:
        'Un motor de novelas visuales con un lenguaje de guion tipo cinematográfico que embebe Python.',
      longDescription:
        "Ren'Py es un motor de código abierto para novelas visuales y juegos narrativos. Su lenguaje de script se lee como un guion — etiquetas, diálogo, menús y sentencias de escena — mientras que Python completo puede embeberse donde la lógica del juego lo necesite.\n\nMiles de títulos comerciales y gratuitos se publican con Ren'Py, que exporta a Windows, macOS, Linux, Android, iOS y la web, e incluye soporte integrado para guardados, rollback, localización y accesibilidad.",
    },
    it: {
      name: "Ren'Py",
      description:
        'Un motore per visual novel con un linguaggio di script simile a una sceneggiatura che incorpora Python.',
      longDescription:
        "Ren'Py è un motore open source per visual novel e giochi narrativi. Il suo linguaggio di script si legge come una sceneggiatura — etichette, dialoghi, menu e istruzioni di scena — mentre Python completo può essere incorporato ovunque serva logica di gioco.\n\nMigliaia di titoli commerciali e gratuiti sono pubblicati con Ren'Py, che esporta su Windows, macOS, Linux, Android, iOS e web, e include supporto integrato per salvataggi, rollback, localizzazione e accessibilità.",
    },
    fr: {
      name: "Ren'Py",
      description:
        'Un moteur de visual novels au langage de script façon scénario, avec Python intégré.',
      longDescription:
        "Ren'Py est un moteur open source pour visual novels et jeux narratifs. Son langage de script se lit comme un scénario — étiquettes, dialogues, menus et instructions de scène — tandis que Python complet peut être intégré partout où la logique du jeu l'exige.\n\nDes milliers de titres commerciaux et gratuits sortent sur Ren'Py, qui exporte vers Windows, macOS, Linux, Android, iOS et le web, avec une prise en charge intégrée des sauvegardes, du rollback, de la localisation et de l'accessibilité.",
    },
    de: {
      name: "Ren'Py",
      description:
        'Eine Visual-Novel-Engine mit drehbuchartiger Skriptsprache und eingebettetem Python.',
      longDescription:
        "Ren'Py ist eine Open-Source-Engine für Visual Novels und erzählgetriebene Spiele. Die Skriptsprache liest sich wie ein Drehbuch — Labels, Dialoge, Menüs und Szenenanweisungen —, während vollständiges Python überall eingebettet werden kann, wo Spiellogik nötig ist.\n\nTausende kommerzielle und freie Titel erscheinen auf Ren'Py, das nach Windows, macOS, Linux, Android, iOS und ins Web exportiert und eingebaute Unterstützung für Spielstände, Rollback, Lokalisierung und Barrierefreiheit mitbringt.",
    },
    pt: {
      name: "Ren'Py",
      description:
        'Um motor de visual novels com linguagem de script estilo roteiro que incorpora Python.',
      longDescription:
        "Ren'Py é um motor de código aberto para visual novels e jogos narrativos. Sua linguagem de script se lê como um roteiro — rótulos, diálogos, menus e instruções de cena — enquanto Python completo pode ser incorporado onde a lógica do jogo precisar.\n\nMilhares de títulos comerciais e gratuitos são lançados com Ren'Py, que exporta para Windows, macOS, Linux, Android, iOS e web, e inclui suporte embutido a salvamentos, rollback, localização e acessibilidade.",
    },
  },
} satisfies Language;
