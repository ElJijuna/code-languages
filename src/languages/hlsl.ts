import type { Language } from "../types";

export const hlsl = {
  slug: "hlsl",
  publishedDate: "2002-12-01",
  extensions: [".hlsl", ".fx", ".fxh", ".hlsli"],
  author: "Microsoft",
  website: "https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl",
  paradigms: ["shader", "data-parallel", "graphics", "procedural"],
  tooling: {
    runtimes: ["Direct3D", "DirectX Shader Compiler", "Game Engines"],
    packageManagers: ["NuGet", "vcpkg"],
    ecosystems: ["Graphics", "Game Development", "GPU Programming", "DirectX"],
  },
  version: "Shader Model 6.9",
  logo: "https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_hlsl.svg",
  color: "#0078D4",
  i18n: {
    en: {
      name: "HLSL",
      description: "Microsoft's High-Level Shading Language for programmable graphics pipelines.",
      longDescription:
        "HLSL is a shader language for Direct3D and related graphics pipelines. It provides C-like syntax, vector and matrix types, textures, samplers, constant buffers, semantics, intrinsics, and shader stages for vertex, pixel, compute, geometry, hull, domain, mesh, amplification, and ray tracing workloads.\n\nIt is used in Windows games, rendering engines, GPU compute tasks, visual effects, real-time simulations, DirectX tools, and cross-compiled shader workflows that target modern graphics hardware.",
    },
    es: {
      name: "HLSL",
      description:
        "El High-Level Shading Language de Microsoft para pipelines graficos programables.",
      longDescription:
        "HLSL es un lenguaje de shaders para Direct3D y pipelines graficos relacionados. Ofrece sintaxis similar a C, tipos vectoriales y matriciales, texturas, samplers, constant buffers, semanticas, intrinsics y etapas de shader para vertex, pixel, compute, geometry, hull, domain, mesh, amplification y ray tracing.\n\nSe usa en juegos Windows, motores de rendering, tareas GPU compute, efectos visuales, simulaciones en tiempo real, herramientas DirectX y flujos de shaders cross-compiled hacia hardware grafico moderno.",
    },
  },
} satisfies Language;
