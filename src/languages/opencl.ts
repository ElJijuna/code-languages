import type { Language } from "../types";

export const opencl = {
  slug: "opencl",
  publishedDate: "2008-12-08",
  extensions: [".cl", ".clh"],
  author: "Khronos Group",
  website: "https://www.khronos.org/opencl/",
  paradigms: ["parallel", "kernel", "data-parallel", "c-family"],
  tooling: {
    runtimes: ["OpenCL Runtime"],
    ecosystems: ["GPU Compute", "Heterogeneous Computing", "Khronos"],
  },
  version: "OpenCL C 3.0",
  logo: "https://cdn.simpleicons.org/khronosgroup/CC3333",
  color: "#CC3333",
  i18n: {
    en: {
      name: "OpenCL C",
      description: "The C-based kernel language for OpenCL heterogeneous compute programs.",
      longDescription:
        "OpenCL C is the kernel programming language used by OpenCL to describe parallel work over devices such as CPUs, GPUs, and accelerators. It extends a C-family model with address spaces, vector types, work-items, and synchronization primitives.\n\nIt is used for compute kernels, image processing, simulations, numeric workloads, and portable heterogeneous programs that target OpenCL runtimes.",
    },
    es: {
      name: "OpenCL C",
      description: "El lenguaje de kernels basado en C para programas de computo OpenCL.",
      longDescription:
        "OpenCL C es el lenguaje de kernels que usa OpenCL para describir trabajo paralelo sobre dispositivos como CPUs, GPUs y aceleradores. Extiende un modelo de la familia C con espacios de direcciones, tipos vectoriales, work-items y primitivas de sincronizacion.\n\nSe usa en kernels de computo, procesamiento de imagenes, simulaciones, cargas numericas y programas heterogeneos portables dirigidos a runtimes OpenCL.",
    },
    it: {
      name: "OpenCL C",
      description: "C basato per i programmi di calcolo eterogenei di OpenCL.",
      longDescription:
        "OpenCL C e il linguaggio di programmazione del kernel utilizzato da OpenCL per descrivere il lavoro parallelo su dispositivi come CPU, GPU e acceleratori. Estende un modello basato su C con spazi di indirizzo, tipi vettoriali, elementi di lavoro e primitive di sincronizzazione.\n\nE utilizzato per i kernel di calcolo, l'elaborazione di immagini, le simulazioni, i carichi di lavoro numerici e i programmi eterogenei portabili che mirano alle runtime di OpenCL.",
    },
    fr: {
      name: "OpenCL C",
      description: "Langage de noyau base sur C pour les programmes de calcul heterogenes OpenCL.",
      longDescription:
        "OpenCL C est le langage de programmation de noyau utilise par OpenCL pour decrire le travail parallele sur des peripheriques tels que les CPU, les GPU et les accelerateurs. Il etend un modele de la famille C avec des espaces d'adressage, des types vectoriels, des elements de travail et des primitives de synchronisation.\n\nIl est utilise pour les noyaux de calcul, le traitement d'images, les simulations, les charges de travail numeriques et les programmes heterogenes portables qui ciblent les environnements d'execution OpenCL.",
    },
    de: {
      name: "OpenCL C",
      description:
        "Die C-basierte Kernel-Sprache f\u00fcr OpenCL-heterogene Berechnungsanwendungen.",
      longDescription:
        "OpenCL C ist die Kernel-Programmiersprache, die von OpenCL verwendet wird, um parallele Aufgaben \u00fcber Ger\u00e4te wie CPUs, GPUs und Beschleuniger zu beschreiben. Sie erweitert ein C-\u00e4hnliches Modell mit Adressr\u00e4umen, Vektor-Typen, Work-Items und Synchronisationsprimitiven.\n\nEs wird f\u00fcr Berechnungs-Kernel, Bildverarbeitung, Simulationen, numerische Arbeitslasten und portable heterogene Programme verwendet, die OpenCL-Runtime-Umgebungen ansprechen.",
    },
    pt: {
      name: "OpenCL C",
      description:
        "Linguagem de kernel baseada em C para programas de computa\u00e7\u00e3o heterog\u00eaneos OpenCL.",
      longDescription:
        "OpenCL C \u00e9 a linguagem de programa\u00e7\u00e3o de kernel usada pelo OpenCL para descrever trabalho paralelo em dispositivos como CPUs, GPUs e aceleradores. Ela estende um modelo baseado em C com espa\u00e7os de endere\u00e7o, tipos de vetores, itens de trabalho e primitivas de sincroniza\u00e7\u00e3o.\n\n\u00c9 usada para kernels de computa\u00e7\u00e3o, processamento de imagens, simula\u00e7\u00f5es, cargas de trabalho num\u00e9ricas e programas heterog\u00eaneos port\u00e1teis que visam as plataformas OpenCL.",
    },
  },
} satisfies Language;
