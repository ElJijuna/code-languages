import type { Language } from '../types';

export const cuda = {
  slug: 'cuda',
  publishedDate: '2007-02-15',
  extensions: ['.cu', '.cuh'],
  author: 'NVIDIA',
  website: 'https://developer.nvidia.com/cuda-toolkit',
  paradigms: ['parallel', 'data-parallel', 'systems', 'heterogeneous-computing'],
  tooling: {
    runtimes: ['CUDA Runtime', 'CUDA Driver API'],
    packageManagers: ['CUDA Toolkit', 'conda'],
    ecosystems: ['GPU Computing', 'HPC', 'Machine Learning', 'Scientific Computing'],
  },
  version: '13.3.0',
  logo: 'https://cdn.simpleicons.org/nvidia/76B900',
  color: '#76B900',
  i18n: {
    en: {
      name: 'CUDA',
      description: "NVIDIA's GPU programming platform and C/C++ extensions for parallel computing.",
      longDescription:
        "CUDA is NVIDIA's parallel computing platform and programming model for GPU-accelerated applications. CUDA C/C++ source files use extensions for kernels, device functions, memory spaces, grids, blocks, and threads that execute on NVIDIA GPUs.\n\nIt is used in machine learning, scientific computing, simulations, image processing, rendering, high-performance computing, and applications that need to offload massively parallel workloads to GPU hardware.",
    },
    es: {
      name: 'CUDA',
      description: 'La plataforma GPU de NVIDIA y extensiones C/C++ para computacion paralela.',
      longDescription:
        'CUDA es la plataforma de computacion paralela y modelo de programacion de NVIDIA para aplicaciones aceleradas por GPU. Los archivos CUDA C/C++ usan extensiones para kernels, funciones de dispositivo, espacios de memoria, grids, blocks y threads que se ejecutan en GPUs NVIDIA.\n\nSe usa en machine learning, computacion cientifica, simulaciones, procesamiento de imagenes, rendering, computacion de alto rendimiento y aplicaciones que necesitan descargar cargas masivamente paralelas al hardware GPU.',
    },
    it: {
      name: 'CUDA',
      description:
        'Piattaforma di programmazione per GPU di NVIDIA e estensioni C/C++ per il calcolo parallelo.',
      longDescription:
        "CUDA e la piattaforma di calcolo parallelo e il modello di programmazione per applicazioni accelerate da GPU di NVIDIA. I file sorgente CUDA C/C++ utilizzano estensioni per kernel, funzioni di dispositivo, spazi di memoria, griglie, blocchi e thread che vengono eseguiti su GPU NVIDIA.\n\nViene utilizzato in machine learning, calcolo scientifico, simulazioni, elaborazione di immagini, rendering, calcolo ad alte prestazioni e applicazioni che necessitano di scaricare carichi di lavoro massivamente paralleli sull'hardware GPU.",
    },
    fr: {
      name: 'CUDA',
      description:
        'Plateforme de programmation GPU de NVIDIA et extensions C/C++ pour le calcul parallele.',
      longDescription:
        "CUDA est la plateforme de calcul parallele et le modele de programmation de NVIDIA pour les applications accelerees par GPU. Les fichiers source CUDA C/C++ utilisent des extensions pour les noyaux, les fonctions de peripherique, les espaces de memoire, les grilles, les blocs et les threads qui s'executent sur les GPU NVIDIA.\n\nElle est utilisee dans l'apprentissage automatique, le calcul scientifique, les simulations, le traitement d'images, le rendu, le calcul haute performance et les applications qui doivent deleguer des charges de travail massivement paralleles au materiel GPU.",
    },
    de: {
      name: 'CUDA',
      description:
        'NVIDIAs GPU-Programmierungsplattform und C/C++-Erweiterungen f\u00fcr parallele Berechnungen.',
      longDescription:
        'CUDA ist NVIDIAs parallele Berechnungsplattform und Programmiermodell f\u00fcr GPU-beschleunigte Anwendungen. CUDA C/C++-Quellcode verwendet Erweiterungen f\u00fcr Kernel, Ger\u00e4tefunktionen, Speicherbereiche, Gitter, Bl\u00f6cke und Threads, die auf NVIDIA GPUs ausgef\u00fchrt werden.\n\nEs wird in maschinellem Lernen, wissenschaftlichen Berechnungen, Simulationen, Bildverarbeitung, Rendering, Hochleistungsrechnen und Anwendungen verwendet, die massiv parallele Arbeitslasten auf GPU-Hardware auslagern m\u00fcssen.',
    },
    pt: {
      name: 'CUDA',
      description:
        'Plataforma de programa\u00e7\u00e3o para GPUs da NVIDIA e extens\u00f5es C/C++ para computa\u00e7\u00e3o paralela.',
      longDescription:
        'CUDA \u00e9 a plataforma de computa\u00e7\u00e3o paralela e modelo de programa\u00e7\u00e3o da NVIDIA para aplica\u00e7\u00f5es aceleradas por GPU. Os arquivos de c\u00f3digo fonte CUDA C/C++ usam extens\u00f5es para kernels, fun\u00e7\u00f5es de dispositivo, espa\u00e7os de mem\u00f3ria, grids, blocos e threads que executam em GPUs NVIDIA.\n\n\u00c9 usado em aprendizado de m\u00e1quina, computa\u00e7\u00e3o cient\u00edfica, simula\u00e7\u00f5es, processamento de imagem, renderiza\u00e7\u00e3o, computa\u00e7\u00e3o de alto desempenho e aplica\u00e7\u00f5es que precisam transferir cargas de trabalho altamente paralelas para o hardware da GPU.',
    },
  },
} satisfies Language;
