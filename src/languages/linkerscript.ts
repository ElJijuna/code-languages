import type { Language } from '../types';

export const linkerscript = {
  slug: 'linkerscript',
  publishedDate: '1988-01-01',
  extensions: ['.ld', '.lds', '.x'],
  author: 'GNU Project',
  website: 'https://sourceware.org/binutils/docs/ld/Scripts.html',
  paradigms: ['configuration', 'systems'],
  tooling: {
    runtimes: ['GNU ld', 'LLD'],
    ecosystems: ['Embedded systems', 'Operating systems'],
  },
  version: 'stable',
  logo: 'https://dummyimage.com/32x32/475569/ffffff.png&text=LD',
  color: '#475569',
  i18n: {
    en: {
      name: 'Linker Script',
      description:
        'A script language for controlling memory layout and section placement during linking.',
      longDescription:
        'Linker scripts describe how object files are combined into an executable or image. They define memory regions, output sections, symbol assignments, entry points, and placement rules used by linkers.\n\nThey are especially important in embedded systems, kernels, bootloaders, firmware, and bare-metal programs where exact addresses and memory maps matter. Linker scripts connect compiler output to hardware and runtime constraints.',
    },
    es: {
      name: 'Linker Script',
      description:
        'Lenguaje de scripts para controlar layout de memoria y secciones durante el enlazado.',
      longDescription:
        'Los linker scripts describen como se combinan archivos objeto en un ejecutable o imagen. Definen regiones de memoria, secciones de salida, asignaciones de simbolos, puntos de entrada y reglas de ubicacion usadas por enlazadores.\n\nSon especialmente importantes en sistemas embebidos, kernels, bootloaders, firmware y programas bare-metal donde importan direcciones exactas y mapas de memoria. Los linker scripts conectan la salida del compilador con hardware y restricciones de runtime.',
    },
    it: {
      name: 'Linker Script',
      description:
        'Linguaggio di script per controllare layout memoria e sezioni durante il linking.',
      longDescription:
        'I linker script descrivono come i file oggetto vengono combinati in un eseguibile o immagine. Definiscono regioni di memoria, sezioni di output, assegnazioni di simboli, entry point e regole di posizionamento usate dai linker.\n\nSono particolarmente importanti in sistemi embedded, kernel, bootloader, firmware e programmi bare-metal dove contano indirizzi esatti e mappe di memoria. I linker script collegano l output del compilatore a vincoli hardware e runtime.',
    },
    fr: {
      name: 'Linker Script',
      description:
        'Langage de script pour controler layout memoire et placement de sections au link.',
      longDescription:
        'Les linker scripts decrivent comment des fichiers objet sont combines en executable ou image. Ils definissent regions memoire, sections de sortie, affectations de symboles, points d entree et regles de placement utilisees par les linkers.\n\nIls sont particulierement importants dans les systemes embarques, noyaux, bootloaders, firmwares et programmes bare-metal ou adresses exactes et cartes memoire comptent. Les linker scripts relient la sortie du compilateur aux contraintes materiel et runtime.',
    },
    de: {
      name: 'Linker Script',
      description:
        'Skriptsprache zur Steuerung von Speicherlayout und Section-Platzierung beim Linken.',
      longDescription:
        'Linker-Skripte beschreiben, wie Objektdateien zu einer ausfuhrbaren Datei oder einem Image kombiniert werden. Sie definieren Speicherbereiche, Ausgabesections, Symbolzuweisungen, Einstiegspunkte und Platzierungsregeln fur Linker.\n\nSie sind besonders wichtig in Embedded-Systemen, Kerneln, Bootloadern, Firmware und Bare-Metal-Programmen, wo genaue Adressen und Speicherkarten zahlen. Linker-Skripte verbinden Compiler-Ausgabe mit Hardware- und Laufzeitgrenzen.',
    },
    pt: {
      name: 'Linker Script',
      description:
        'Linguagem de script para controlar layout de memoria e secoes durante linkagem.',
      longDescription:
        'Linker scripts descrevem como arquivos objeto sao combinados em um executavel ou imagem. Eles definem regioes de memoria, secoes de saida, atribuicoes de simbolos, pontos de entrada e regras de posicionamento usadas por linkers.\n\nSao especialmente importantes em sistemas embarcados, kernels, bootloaders, firmware e programas bare-metal, onde enderecos exatos e mapas de memoria importam. Linker scripts conectam a saida do compilador a restricoes de hardware e runtime.',
    },
  },
} satisfies Language;
