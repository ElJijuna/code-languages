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
  },
} satisfies Language;
