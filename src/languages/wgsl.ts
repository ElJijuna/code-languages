import type { Language } from "../types";

export const wgsl = {
  slug: "wgsl",
  publishedDate: "2021-05-18",
  extensions: [".wgsl"],
  author: "W3C GPU for the Web Working Group",
  website: "https://www.w3.org/TR/WGSL/",
  paradigms: ["shader", "data-parallel", "graphics", "gpu-compute"],
  tooling: {
    runtimes: ["WebGPU", "Browsers", "wgpu"],
    packageManagers: ["npm", "Cargo"],
    ecosystems: ["WebGPU", "Graphics", "GPU Programming", "Web"],
  },
  version: "Candidate Recommendation Draft 2026-05-07",
  logo: "https://cdn.simpleicons.org/webgpu/005A9C",
  color: "#005A9C",
  i18n: {
    en: {
      name: "WGSL",
      description: "The WebGPU Shading Language for portable browser and native GPU programs.",
      longDescription:
        "WGSL is the shader language for WebGPU, designed for predictable validation, portability, and safety across graphics backends. It includes explicit types, address spaces, entry points, bindings, uniforms, storage buffers, textures, workgroups, and built-in functions for graphics and compute shaders.\n\nIt is used in WebGPU applications, browser rendering, native wgpu projects, visualization tools, compute workloads, creative coding, and graphics engines that target portable GPU execution.",
    },
    es: {
      name: "WGSL",
      description:
        "El lenguaje de shading de WebGPU para programas GPU portables en navegador y nativo.",
      longDescription:
        "WGSL es el lenguaje de shaders de WebGPU, disenado para validacion predecible, portabilidad y seguridad entre backends graficos. Incluye tipos explicitos, address spaces, entry points, bindings, uniforms, storage buffers, texturas, workgroups y funciones integradas para shaders graficos y compute.\n\nSe usa en aplicaciones WebGPU, rendering en navegador, proyectos nativos con wgpu, herramientas de visualizacion, cargas compute, creative coding y motores graficos que apuntan a ejecucion GPU portable.",
    },
  },
} satisfies Language;
