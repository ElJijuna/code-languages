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
  color: "#999999",
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
    it: {
      name: "Metal",
      description:
        "Linguaggio di grafica e calcolo di Apple per la programmazione di GPU ad alte prestazioni.",
      longDescription:
        "Metal e la tecnologia grafica e di calcolo a basso livello di Apple, abbinata al Metal Shading Language per la scrittura di kernel GPU, funzioni di vertice, funzioni di frammento, shader di mesh, carichi di lavoro di ray tracing e pipeline di machine learning o elaborazione multimediale.\n\nE utilizzato su tutte le piattaforme Apple per giochi, motori di rendering, applicazioni ad alta intensita di calcolo, grafica in tempo reale, elaborazione di immagini, strumenti video, carichi di lavoro scientifici e applicazioni native ad alte prestazioni che necessitano di accesso diretto alle capacita della GPU di Apple.",
    },
    fr: {
      name: "Metal",
      description:
        "Langage de programmation graphique et de calcul de Apple pour la programmation GPU a haute performance.",
      longDescription:
        "Metal est la technologie graphique et de calcul de bas niveau d'Apple, associee au langage de programmation Metal pour ecrire des noyaux GPU, des fonctions de vertex, des fonctions de fragment, des shaders de maillage, des charges de travail de ray tracing et des pipelines d'apprentissage automatique ou de traitement multimedia.\n\nIl est utilise sur les plateformes Apple pour les jeux, les moteurs de rendu, les applications gourmandes en calcul, les graphiques en temps reel, le traitement d'images, les outils video, les charges de travail scientifiques et les applications natives performantes qui ont besoin d'un acces direct aux capacites de l'Apple GPU.",
    },
    de: {
      name: "Metal",
      description:
        "Apple's grafische und rechen-Shading-Sprache f\u00fcr High-Performance-GPU-Programmierung.",
      longDescription:
        "Metal ist Apples Low-Level-Grafik- und Compute-Technologie, zusammen mit der Metal Shading Language zum Schreiben von GPU-Kerneln, Vertex-Funktionen, Fragment-Funktionen, Mesh-Shader, Raytracing-Workloads und Machine-Learning- oder Media-Processing-Pipelines.\n\nEs wird auf allen Apple-Plattformen f\u00fcr Spiele, Rendering-Engines, rechenintensive Anwendungen, Echtzeit-Grafik, Bildverarbeitung, Videotools, wissenschaftliche Anwendungen und leistungsstarke native Anwendungen verwendet, die direkten Zugriff auf die Apple GPU-Funktionen ben\u00f6tigen.",
    },
    pt: {
      name: "Metal",
      description:
        "Linguagem de sombreamento de gr\u00e1ficos e computa\u00e7\u00e3o da Apple para programa\u00e7\u00e3o de GPU de alto desempenho.",
      longDescription:
        "Metal \u00e9 a tecnologia de gr\u00e1ficos e computa\u00e7\u00e3o de baixo n\u00edvel da Apple, juntamente com a Linguagem de Sombreamento Metal para escrever kernels de GPU, fun\u00e7\u00f5es de v\u00e9rtice, fun\u00e7\u00f5es de fragmento, shaders de malha, cargas de trabalho de ray tracing e pipelines de aprendizado de m\u00e1quina ou processamento de m\u00eddia.\n\n\u00c9 usada em todas as plataformas da Apple para jogos, engines de renderiza\u00e7\u00e3o, aplicativos de computa\u00e7\u00e3o intensiva, gr\u00e1ficos em tempo real, processamento de imagem, ferramentas de v\u00eddeo, cargas de trabalho cient\u00edficas e aplicativos nativos de alto desempenho que precisam de acesso direto \u00e0s capacidades da GPU da Apple.",
    },
  },
} satisfies Language;
