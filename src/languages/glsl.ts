import type { Language } from '../types';

export const glsl = {
  slug: 'glsl',
  publishedDate: '2004-04-30',
  extensions: ['.glsl', '.vert', '.frag', '.geom', '.tesc', '.tese', '.comp', '.vs', '.fs'],
  author: 'OpenGL ARB / Khronos Group',
  website: 'https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)',
  paradigms: ['data-parallel', 'graphics', 'procedural', 'shader'],
  tooling: {
    runtimes: ['OpenGL', 'OpenGL ES', 'WebGL', 'Vulkan via SPIR-V'],
    packageManagers: ['npm', 'vcpkg', 'Conan'],
    ecosystems: ['Graphics', 'Game Development', 'WebGL', 'Creative Coding'],
  },
  version: '4.60',
  logo: 'https://cdn.simpleicons.org/opengl/5586A4',
  color: '#5586A4',
  i18n: {
    en: {
      name: 'GLSL',
      description: 'The OpenGL Shading Language for writing programmable GPU shader stages.',
      longDescription:
        'GLSL is the OpenGL Shading Language used to write GPU programs for vertex, fragment, geometry, tessellation, and compute shader stages. It provides C-like syntax, vector and matrix types, texture sampling, uniforms, varyings, and built-in functions for graphics pipelines.\n\nIt is used in game engines, visualization tools, WebGL applications, creative coding, rendering systems, simulations, and real-time graphics projects that need programmable GPU behavior.',
    },
    es: {
      name: 'GLSL',
      description: 'El lenguaje de shading de OpenGL para escribir etapas programables de GPU.',
      longDescription:
        'GLSL es el OpenGL Shading Language usado para escribir programas GPU en etapas vertex, fragment, geometry, tessellation y compute shader. Ofrece sintaxis similar a C, tipos vectoriales y matriciales, muestreo de texturas, uniforms, varyings y funciones integradas para pipelines graficos.\n\nSe usa en motores de juegos, herramientas de visualizacion, aplicaciones WebGL, creative coding, sistemas de rendering, simulaciones y proyectos de graficos en tiempo real que necesitan comportamiento programable en GPU.',
    },
    it: {
      name: 'GLSL',
      description:
        'Il linguaggio di shading OpenGL per la scrittura di stadi di shader GPU programmabili.',
      longDescription:
        'GLSL e il linguaggio di shading OpenGL utilizzato per scrivere programmi GPU per gli stadi di vertex, fragment, geometry, tessellation e compute. Fornisce una sintassi simile a C, tipi di vettori e matrici, campionamento di texture, uniformi, variabili e funzioni integrate per le pipeline grafiche.\n\nE utilizzato in motori di gioco, strumenti di visualizzazione, applicazioni WebGL, coding creativo, sistemi di rendering, simulazioni e progetti di grafica in tempo reale che richiedono un comportamento GPU programmabile.',
    },
    fr: {
      name: 'GLSL',
      description:
        'Le langage de programmation GLSL pour ecrire des etapes de shaders GPU programmables.',
      longDescription:
        "GLSL est le langage de programmation GLSL utilise pour ecrire des programmes GPU pour les etapes de vertex, fragment, geometrie, tessellation et compute shader. Il fournit une syntaxe semblable a C, des types de vecteurs et de matrices, de l'echantillonnage de textures, des uniformes, des variables et des fonctions integrees pour les pipelines graphiques.\n\nIl est utilise dans les moteurs de jeu, les outils de visualisation, les applications WebGL, le codage creatif, les systemes de rendu, les simulations et les projets de graphiques en temps reel qui necessitent un comportement GPU programmable.",
    },
    de: {
      name: 'GLSL',
      description:
        'Die OpenGL Shading Language f\u00fcr das Schreiben von programmierbaren GPU-Shader-Stufen.',
      longDescription:
        'GLSL ist die OpenGL Shading Language, die zum Schreiben von GPU-Programmen f\u00fcr Vertex-, Fragment-, Geometry-, Tessellation- und Compute-Shader-Stufen verwendet wird. Sie bietet eine C-\u00e4hnliche Syntax, Vektor- und Matrixtypen, Textur-Sampling, Uniformen, Varyings und integrierte Funktionen f\u00fcr Grafikpipelines.\n\nSie wird in Spiel-Engines, Visualisierungstools, WebGL-Anwendungen, kreativem Coding, Rendering-Systemen, Simulationen und Echtzeit-Grafikprojekten verwendet, die programmierbares GPU-Verhalten ben\u00f6tigen.',
    },
    pt: {
      name: 'GLSL',
      description:
        'A linguagem de programa\u00e7\u00e3o GLSL para escrever est\u00e1gios de shaders GPU program\u00e1veis.',
      longDescription:
        'GLSL \u00e9 a linguagem de programa\u00e7\u00e3o GLSL usada para escrever programas GPU para est\u00e1gios de vertex, fragment, geometria, tessela\u00e7\u00e3o e compute. Fornece uma sintaxe semelhante \u00e0 C, tipos de vetores e matrizes, amostragem de texturas, uniformes, vari\u00e1veis e fun\u00e7\u00f5es embutidas para pipelines de gr\u00e1ficos.\n\n\u00c9 usada em motores de jogos, ferramentas de visualiza\u00e7\u00e3o, aplica\u00e7\u00f5es WebGL, codifica\u00e7\u00e3o criativa, sistemas de renderiza\u00e7\u00e3o, simula\u00e7\u00f5es e projetos de gr\u00e1ficos em tempo real que precisam de comportamento de GPU program\u00e1vel.',
    },
  },
} satisfies Language;
