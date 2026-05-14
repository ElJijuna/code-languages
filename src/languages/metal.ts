import type { Language } from "../types";

export const metal = {
  slug: "metal",
  publishedDate: "2014-06-02",
  extensions: [".metal"],
  author: "Apple Inc.",
  website: "https://developer.apple.com/metal/",
  paradigms: ["gpu-programming", "graphics", "compute", "shading"],
  tooling: {
    runtimes: ["Metal"],
    ecosystems: ["Apple Platforms", "iOS", "iPadOS", "macOS", "visionOS", "tvOS"],
  },
  version: "Metal 4",
  logo: "https://developer.apple.com/assets/elements/icons/metal/metal-256x256_2x.png",
  i18n: {
    en: {
      name: "Metal",
      description:
        "Apple's graphics and compute shading language for high-performance GPU programming.",
      longDescription:
        "Metal is Apple's low-level graphics and compute technology, paired with the Metal Shading Language for writing GPU kernels, vertex functions, fragment functions, mesh shaders, ray tracing workloads, and machine learning or media processing pipelines.\n\nIt is used across Apple platforms for games, rendering engines, compute-heavy apps, real-time graphics, image processing, video tools, scientific workloads, and performance-sensitive native applications that need direct access to Apple GPU capabilities.",
    },
    es: {
      name: "Metal",
      description: "El lenguaje y API de Apple para graficos y computo de alto rendimiento en GPU.",
      longDescription:
        "Metal es la tecnologia de bajo nivel de Apple para graficos y computo, junto con Metal Shading Language para escribir kernels de GPU, funciones de vertices, funciones de fragmentos, mesh shaders, cargas de ray tracing y pipelines de machine learning o procesamiento multimedia.\n\nSe usa en plataformas Apple para juegos, motores de render, apps con computo intensivo, graficos en tiempo real, procesamiento de imagen, herramientas de video, cargas cientificas y aplicaciones nativas sensibles al rendimiento que necesitan acceso directo a capacidades de GPU de Apple.",
    },
  },
} satisfies Language;
