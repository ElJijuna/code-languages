import type { Language } from '@/types';

export const hlsl = {
  slug: 'hlsl',
  publishedDate: '2002-12-01',
  extensions: ['.hlsl', '.fx', '.fxh', '.hlsli'],
  author: 'Microsoft',
  website: 'https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl',
  paradigms: ['shader', 'data-parallel', 'graphics', 'procedural'],
  tooling: {
    runtimes: ['Direct3D', 'DirectX Shader Compiler', 'Game Engines'],
    packageManagers: ['NuGet', 'vcpkg'],
    ecosystems: ['Graphics', 'Game Development', 'GPU Programming', 'DirectX'],
  },
  version: 'Shader Model 6.9',
  logo: 'https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons@master/icons/file_type_hlsl.svg',
  color: '#0078D4',
  i18n: {
    en: {
      name: 'HLSL',
      description: "Microsoft's High-Level Shading Language for programmable graphics pipelines.",
      longDescription:
        'HLSL is a shader language for Direct3D and related graphics pipelines. It provides C-like syntax, vector and matrix types, textures, samplers, constant buffers, semantics, intrinsics, and shader stages for vertex, pixel, compute, geometry, hull, domain, mesh, amplification, and ray tracing workloads.\n\nIt is used in Windows games, rendering engines, GPU compute tasks, visual effects, real-time simulations, DirectX tools, and cross-compiled shader workflows that target modern graphics hardware.',
    },
    es: {
      name: 'HLSL',
      description:
        'El High-Level Shading Language de Microsoft para pipelines graficos programables.',
      longDescription:
        'HLSL es un lenguaje de shaders para Direct3D y pipelines graficos relacionados. Ofrece sintaxis similar a C, tipos vectoriales y matriciales, texturas, samplers, constant buffers, semanticas, intrinsics y etapas de shader para vertex, pixel, compute, geometry, hull, domain, mesh, amplification y ray tracing.\n\nSe usa en juegos Windows, motores de rendering, tareas GPU compute, efectos visuales, simulaciones en tiempo real, herramientas DirectX y flujos de shaders cross-compiled hacia hardware grafico moderno.',
    },
    it: {
      name: 'HLSL',
      description:
        'Linguaggio di shading di alto livello di Microsoft per pipeline grafiche programmabili.',
      longDescription:
        "HLSL e un linguaggio di shader per Direct3D e pipeline grafiche correlate. Fornisce una sintassi simile a C, tipi vettoriali e matriciali, texture, campionatori, buffer di costanti, semantiche, istruzioni intrinseche e stadi di shader per carichi di lavoro di vertex, pixel, compute, geometria, hull, domain, mesh, amplification e ray tracing.\n\nE utilizzato in giochi per Windows, motori di rendering, attivita di calcolo GPU, effetti visivi, simulazioni in tempo reale, strumenti DirectX e flussi di lavoro di shader cross-compilati che mirano all'hardware grafico moderno.",
    },
    fr: {
      name: 'HLSL',
      description:
        'HLSL (High-Level Shading Language) de Microsoft pour les pipelines graphiques programmables.',
      longDescription:
        "HLSL est un langage de shaders pour Direct3D et les pipelines graphiques associes. Il fournit une syntaxe semblable a C, des types de vecteurs et de matrices, des textures, des echantillonneurs, des tampons constants, des semantiques, des intrinseques et des etapes de shaders pour les charges de travail de vertex, de pixel, de calcul, de geometrie, de coque, de domaine, de maillage, d'amplification et de ray tracing.\n\nIl est utilise dans les jeux Windows, les moteurs de rendu, les taches de calcul GPU, les effets visuels, les simulations en temps reel, les outils DirectX et les flux de travail de shaders compiles pour le materiel graphique moderne.",
    },
    de: {
      name: 'HLSL',
      description: 'Microsofts High-Level Shading Language für programmierbare Grafik-Pipelines.',
      longDescription:
        'HLSL ist eine Shader-Sprache für Direct3D und verwandte Grafik-Pipelines. Sie bietet eine C-ähnliche Syntax, Vektor- und Matrix-Typen, Texturen, Sampler, konstante Puffer, Semantiken, Intrinsics und Shader-Stufen für Vertex-, Pixel-, Compute-, Geometrie-, Hull-, Domain-, Mesh-, Amplifizierungs- und Raytracing-Workloads.\n\nEs wird in Windows-Spielen, Rendering-Engines, GPU-Compute-Aufgaben, visuellen Effekten, Echtzeit-Simulationen, DirectX-Tools und cross-compiled Shader-Workflows verwendet, die auf moderne Grafik-Hardware abzielen.',
    },
    pt: {
      name: 'HLSL',
      description:
        'Linguagem de Shading de Nível Superior da Microsoft para pipelines gráficos programáveis.',
      longDescription:
        'HLSL é uma linguagem de shader para Direct3D e pipelines gráficos relacionados. Fornece uma sintaxe semelhante à C, tipos de vetores e matrizes, texturas, amostradores, buffers de constantes, semânticas, intrinsics e estágios de shader para cargas de trabalho de vértice, pixel, compute, geometria, hull, domínio, mesh, amplification e ray tracing.\n\nÉ usada em jogos do Windows, motores de renderização, tarefas de computação de GPU, efeitos visuais, simulações em tempo real, ferramentas DirectX e fluxos de trabalho de shader compilados que visam hardware gráfico moderno.',
    },
  },
} satisfies Language;
