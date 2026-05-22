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
  },
} satisfies Language;
