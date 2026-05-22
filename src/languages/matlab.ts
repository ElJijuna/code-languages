import type { Language } from "../types";

export const matlab = {
  slug: "matlab",
  publishedDate: "1984-01-01",
  extensions: [".m", ".mlx"],
  author: "MathWorks",
  website: "https://www.mathworks.com/products/matlab.html",
  paradigms: ["array-oriented", "imperative", "object-oriented", "procedural"],
  tooling: {
    runtimes: ["MATLAB"],
    packageManagers: ["MATLAB Add-On Explorer"],
    ecosystems: ["Scientific Computing", "Numerical Computing", "Engineering", "Simulink"],
  },
  version: "R2026a",
  logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Matlab_Logo.png",
  color: "#E16737",
  i18n: {
    en: {
      name: "MATLAB",
      description:
        "A matrix-oriented language and environment for engineering, science, data, and simulation.",
      longDescription:
        "MATLAB is a programming language and numerical computing environment from MathWorks. It is centered on matrix and array operations, interactive analysis, visualization, algorithm development, and workflows for engineers and scientists.\n\nIt is commonly used for signal processing, control systems, robotics, data analysis, optimization, simulation, education, and model-based design alongside Simulink and MathWorks toolboxes.",
    },
    es: {
      name: "MATLAB",
      description:
        "Un lenguaje y entorno orientado a matrices para ingenieria, ciencia, datos y simulacion.",
      longDescription:
        "MATLAB es un lenguaje de programacion y entorno de computacion numerica de MathWorks. Esta centrado en operaciones con matrices y arreglos, analisis interactivo, visualizacion, desarrollo de algoritmos y flujos de trabajo para ingenieros y cientificos.\n\nSe usa comunmente en procesamiento de senales, sistemas de control, robotica, analisis de datos, optimizacion, simulacion, educacion y diseno basado en modelos junto con Simulink y las toolboxes de MathWorks.",
    },
  },
} satisfies Language;
