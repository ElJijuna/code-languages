import type { Language } from "../types";

export const glsl = {
  slug: "glsl",
  publishedDate: "2004-04-30",
  extensions: [".glsl", ".vert", ".frag", ".geom", ".tesc", ".tese", ".comp", ".vs", ".fs"],
  author: "OpenGL ARB / Khronos Group",
  website: "https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)",
  paradigms: ["data-parallel", "graphics", "procedural", "shader"],
  tooling: {
    runtimes: ["OpenGL", "OpenGL ES", "WebGL", "Vulkan via SPIR-V"],
    packageManagers: ["npm", "vcpkg", "Conan"],
    ecosystems: ["Graphics", "Game Development", "WebGL", "Creative Coding"],
  },
  version: "4.60",
  logo: "https://cdn.simpleicons.org/opengl/5586A4",
  color: "#5586A4",
  i18n: {
    en: {
      name: "GLSL",
      description: "The OpenGL Shading Language for writing programmable GPU shader stages.",
      longDescription:
        "GLSL is the OpenGL Shading Language used to write GPU programs for vertex, fragment, geometry, tessellation, and compute shader stages. It provides C-like syntax, vector and matrix types, texture sampling, uniforms, varyings, and built-in functions for graphics pipelines.\n\nIt is used in game engines, visualization tools, WebGL applications, creative coding, rendering systems, simulations, and real-time graphics projects that need programmable GPU behavior.",
    },
    es: {
      name: "GLSL",
      description: "El lenguaje de shading de OpenGL para escribir etapas programables de GPU.",
      longDescription:
        "GLSL es el OpenGL Shading Language usado para escribir programas GPU en etapas vertex, fragment, geometry, tessellation y compute shader. Ofrece sintaxis similar a C, tipos vectoriales y matriciales, muestreo de texturas, uniforms, varyings y funciones integradas para pipelines graficos.\n\nSe usa en motores de juegos, herramientas de visualizacion, aplicaciones WebGL, creative coding, sistemas de rendering, simulaciones y proyectos de graficos en tiempo real que necesitan comportamiento programable en GPU.",
    },
  },
} satisfies Language;
