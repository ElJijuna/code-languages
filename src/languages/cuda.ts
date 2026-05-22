import type { Language } from "../types";

export const cuda = {
  slug: "cuda",
  publishedDate: "2007-02-15",
  extensions: [".cu", ".cuh"],
  author: "NVIDIA",
  website: "https://developer.nvidia.com/cuda-toolkit",
  paradigms: ["parallel", "data-parallel", "systems", "heterogeneous-computing"],
  tooling: {
    runtimes: ["CUDA Runtime", "CUDA Driver API"],
    packageManagers: ["CUDA Toolkit", "conda"],
    ecosystems: ["GPU Computing", "HPC", "Machine Learning", "Scientific Computing"],
  },
  version: "13.2.1",
  logo: "https://cdn.simpleicons.org/nvidia/76B900",
  color: "#76B900",
  i18n: {
    en: {
      name: "CUDA",
      description: "NVIDIA's GPU programming platform and C/C++ extensions for parallel computing.",
      longDescription:
        "CUDA is NVIDIA's parallel computing platform and programming model for GPU-accelerated applications. CUDA C/C++ source files use extensions for kernels, device functions, memory spaces, grids, blocks, and threads that execute on NVIDIA GPUs.\n\nIt is used in machine learning, scientific computing, simulations, image processing, rendering, high-performance computing, and applications that need to offload massively parallel workloads to GPU hardware.",
    },
    es: {
      name: "CUDA",
      description: "La plataforma GPU de NVIDIA y extensiones C/C++ para computacion paralela.",
      longDescription:
        "CUDA es la plataforma de computacion paralela y modelo de programacion de NVIDIA para aplicaciones aceleradas por GPU. Los archivos CUDA C/C++ usan extensiones para kernels, funciones de dispositivo, espacios de memoria, grids, blocks y threads que se ejecutan en GPUs NVIDIA.\n\nSe usa en machine learning, computacion cientifica, simulaciones, procesamiento de imagenes, rendering, computacion de alto rendimiento y aplicaciones que necesitan descargar cargas masivamente paralelas al hardware GPU.",
    },
    it: {
      name: "CUDA",
      description:
        "Piattaforma di programmazione per GPU di NVIDIA e estensioni C/C++ per il calcolo parallelo.",
      longDescription:
        "CUDA e la piattaforma di calcolo parallelo e il modello di programmazione per applicazioni accelerate da GPU di NVIDIA. I file sorgente CUDA C/C++ utilizzano estensioni per kernel, funzioni di dispositivo, spazi di memoria, griglie, blocchi e thread che vengono eseguiti su GPU NVIDIA.\n\nViene utilizzato in machine learning, calcolo scientifico, simulazioni, elaborazione di immagini, rendering, calcolo ad alte prestazioni e applicazioni che necessitano di scaricare carichi di lavoro massivamente paralleli sull'hardware GPU.",
    },
    fr: {
      name: "CUDA",
      description:
        "Plateforme de programmation GPU de NVIDIA et extensions C/C++ pour le calcul parallele.",
      longDescription:
        "CUDA est la plateforme de calcul parallele et le modele de programmation de NVIDIA pour les applications accelerees par GPU. Les fichiers source CUDA C/C++ utilisent des extensions pour les noyaux, les fonctions de peripherique, les espaces de memoire, les grilles, les blocs et les threads qui s'executent sur les GPU NVIDIA.\n\nElle est utilisee dans l'apprentissage automatique, le calcul scientifique, les simulations, le traitement d'images, le rendu, le calcul haute performance et les applications qui doivent deleguer des charges de travail massivement paralleles au materiel GPU.",
    },
  },
} satisfies Language;
