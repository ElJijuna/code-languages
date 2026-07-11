import type { Language } from '@/types';

export const wgsl = {
  slug: 'wgsl',
  publishedDate: '2021-05-18',
  extensions: ['.wgsl'],
  author: 'W3C GPU for the Web Working Group',
  website: 'https://www.w3.org/TR/WGSL/',
  paradigms: ['shader', 'data-parallel', 'graphics', 'gpu-compute'],
  tooling: {
    runtimes: ['WebGPU', 'Browsers', 'wgpu'],
    packageManagers: ['npm', 'Cargo'],
    ecosystems: ['WebGPU', 'Graphics', 'GPU Programming', 'Web'],
  },
  version: 'Candidate Recommendation Draft 2026-05-07',
  logo: 'https://cdn.simpleicons.org/webgpu/005A9C',
  color: '#005A9C',
  i18n: {
    en: {
      name: 'WGSL',
      description: 'The WebGPU Shading Language for portable browser and native GPU programs.',
      longDescription:
        'WGSL is the shader language for WebGPU, designed for predictable validation, portability, and safety across graphics backends. It includes explicit types, address spaces, entry points, bindings, uniforms, storage buffers, textures, workgroups, and built-in functions for graphics and compute shaders.\n\nIt is used in WebGPU applications, browser rendering, native wgpu projects, visualization tools, compute workloads, creative coding, and graphics engines that target portable GPU execution.',
    },
    es: {
      name: 'WGSL',
      description:
        'El lenguaje de shading de WebGPU para programas GPU portables en navegador y nativo.',
      longDescription:
        'WGSL es el lenguaje de shaders de WebGPU, disenado para validacion predecible, portabilidad y seguridad entre backends graficos. Incluye tipos explicitos, address spaces, entry points, bindings, uniforms, storage buffers, texturas, workgroups y funciones integradas para shaders graficos y compute.\n\nSe usa en aplicaciones WebGPU, rendering en navegador, proyectos nativos con wgpu, herramientas de visualizacion, cargas compute, creative coding y motores graficos que apuntan a ejecucion GPU portable.',
    },
    it: {
      name: 'WGSL',
      description: 'Il linguaggio di shading WebGPU per programmi browser e GPU portatili.',
      longDescription:
        "WGSL e il linguaggio di shading per WebGPU, progettato per la convalida prevedibile, la portabilita e la sicurezza su diversi backend grafici. Include tipi espliciti, spazi di indirizzamento, punti di ingresso, binding, uniformi, buffer di storage, texture, workgroup e funzioni integrate per shader grafici e di calcolo.\n\nE utilizzato in applicazioni WebGPU, rendering del browser, progetti nativi wgpu, strumenti di visualizzazione, carichi di lavoro di calcolo, coding creativo e motori grafici che mirano all'esecuzione portatile su GPU.",
    },
    fr: {
      name: 'WGSL',
      description:
        'Le langage de programmation de shaders WebGPU pour les applications de navigateur et natives sur GPU.',
      longDescription:
        "WGSL est le langage de shaders pour WebGPU, concu pour une validation previsible, la portabilite et la securite sur les backends graphiques. Il inclut des types explicites, des espaces d'adressage, des points d'entree, des liaisons, des uniformes, des tampons de stockage, des textures, des groupes de travail et des fonctions integrees pour les shaders graphiques et de calcul.\n\nIl est utilise dans les applications WebGPU, le rendu de navigateur, les projets natifs wgpu, les outils de visualisation, les charges de travail de calcul, le codage creatif et les moteurs de graphiques qui ciblent l'execution portable sur GPU.",
    },
    de: {
      name: 'WGSL',
      description:
        'Die WebGPU-Shader-Sprache für portables Browser- und natives GPU-Programmieren.',
      longDescription:
        'WGSL ist die Shader-Sprache für WebGPU, die für vorhersehbare Validierung, Portabilität und Sicherheit über verschiedene Grafik-Backends hinweg entwickelt wurde. Sie enthält explizite Typen, Adressräume, Eintrittspunkte, Bindungen, Uniformen, Speicherpuffer, Texturen, Workgroups und integrierte Funktionen für Grafik- und Compute-Shader.\n\nSie wird in WebGPU-Anwendungen, Browser-Rendering, nativen wgpu-Projekten, Visualisierungstools, Compute-Workloads, kreativem Coding und Grafik-Engines verwendet, die eine portable GPU-Ausführung anvisieren.',
    },
    pt: {
      name: 'WGSL',
      description:
        'A linguagem de shader WebGPU para programas portáteis no navegador e em GPUs nativas.',
      longDescription:
        'WGSL é a linguagem de shader para WebGPU, projetada para validação previsível, portabilidade e segurança em diferentes backends gráficos. Inclui tipos explícitos, espaços de endereço, pontos de entrada, bindings, uniforms, buffers de armazenamento, texturas, workgroups e funções embutidas para shaders gráficos e de computação.\n\nÉ utilizada em aplicações WebGPU, renderização no navegador, projetos nativos wgpu, ferramentas de visualização, cargas de trabalho de computação, programação criativa e engines gráficas que visam a execução portátil em GPUs.',
    },
  },
} satisfies Language;
