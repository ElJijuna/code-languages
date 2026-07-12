import type { Language } from '@/types';

export const slang = {
  slug: 'slang',
  publishedDate: '2017-01-01',
  extensions: ['.slang'],
  author: 'NVIDIA / Khronos Group',
  website: 'https://shader-slang.org',
  paradigms: ['imperative', 'shader', 'generic'],
  relations: {
    compilesTo: ['hlsl', 'glsl', 'metal', 'wgsl'],
  },
  tooling: {
    runtimes: ['Vulkan', 'Direct3D', 'Metal', 'WebGPU'],
    ecosystems: ['GPU', 'Graphics', 'Game Development'],
  },
  version: 'stable',
  logo: 'https://avatars.githubusercontent.com/u/29205606?v=4',
  color: '#1FBEC9',
  i18n: {
    en: {
      name: 'Slang',
      description: 'A modern shading language that cross-compiles to HLSL, GLSL, Metal, and WGSL.',
      longDescription:
        'Slang is a shading language that extends HLSL with modules, generics, interfaces, and automatic differentiation. A single Slang codebase cross-compiles to HLSL, GLSL, SPIR-V, Metal, WGSL, and CUDA, eliminating per-API shader duplication.\n\nOriginally developed at NVIDIA and now hosted by the Khronos Group, Slang powers production renderers and research frameworks, with differentiable shading making it popular for machine-learning graphics.',
    },
    es: {
      name: 'Slang',
      description:
        'Un lenguaje de shaders moderno que compila de forma cruzada a HLSL, GLSL, Metal y WGSL.',
      longDescription:
        'Slang es un lenguaje de shaders que extiende HLSL con módulos, genéricos, interfaces y diferenciación automática. Una sola base de código Slang se compila de forma cruzada a HLSL, GLSL, SPIR-V, Metal, WGSL y CUDA, eliminando la duplicación de shaders por API.\n\nDesarrollado originalmente en NVIDIA y ahora alojado por el Grupo Khronos, Slang impulsa renderizadores de producción y frameworks de investigación, y su shading diferenciable lo hace popular en gráficos con machine learning.',
    },
    it: {
      name: 'Slang',
      description: 'Un moderno linguaggio di shading che compila verso HLSL, GLSL, Metal e WGSL.',
      longDescription:
        'Slang è un linguaggio di shading che estende HLSL con moduli, generics, interfacce e differenziazione automatica. Una singola base di codice Slang si compila verso HLSL, GLSL, SPIR-V, Metal, WGSL e CUDA, eliminando la duplicazione degli shader per ogni API.\n\nSviluppato originariamente da NVIDIA e ora ospitato dal Khronos Group, Slang alimenta renderer di produzione e framework di ricerca, e lo shading differenziabile lo rende popolare nella grafica per il machine learning.',
    },
    fr: {
      name: 'Slang',
      description: 'Un langage de shading moderne qui se compile vers HLSL, GLSL, Metal et WGSL.',
      longDescription:
        "Slang est un langage de shading qui étend HLSL avec des modules, des génériques, des interfaces et la différentiation automatique. Une seule base de code Slang se compile vers HLSL, GLSL, SPIR-V, Metal, WGSL et CUDA, éliminant la duplication de shaders par API.\n\nDéveloppé à l'origine chez NVIDIA et désormais hébergé par le Khronos Group, Slang alimente des moteurs de rendu en production et des frameworks de recherche, et son shading différentiable le rend populaire pour les graphismes en machine learning.",
    },
    de: {
      name: 'Slang',
      description:
        'Eine moderne Shading-Sprache, die nach HLSL, GLSL, Metal und WGSL cross-kompiliert.',
      longDescription:
        'Slang ist eine Shading-Sprache, die HLSL um Module, Generics, Interfaces und automatische Differentiation erweitert. Eine einzige Slang-Codebasis wird nach HLSL, GLSL, SPIR-V, Metal, WGSL und CUDA cross-kompiliert und beseitigt so die Shader-Duplikation pro API.\n\nUrsprünglich bei NVIDIA entwickelt und heute von der Khronos Group betreut, treibt Slang Produktions-Renderer und Forschungs-Frameworks an; differenzierbares Shading macht es in der Machine-Learning-Grafik beliebt.',
    },
    pt: {
      name: 'Slang',
      description: 'Uma linguagem de shaders moderna que compila para HLSL, GLSL, Metal e WGSL.',
      longDescription:
        'Slang é uma linguagem de shaders que estende o HLSL com módulos, genéricos, interfaces e diferenciação automática. Uma única base de código Slang é compilada para HLSL, GLSL, SPIR-V, Metal, WGSL e CUDA, eliminando a duplicação de shaders por API.\n\nDesenvolvida originalmente na NVIDIA e agora mantida pelo Khronos Group, a Slang move renderizadores de produção e frameworks de pesquisa, e o shading diferenciável a torna popular em gráficos com machine learning.',
    },
  },
} satisfies Language;
