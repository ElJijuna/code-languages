import type { Language } from "../types";

export const arduino = {
  slug: "arduino",
  publishedDate: "2005-01-01",
  extensions: [".ino", ".pde"],
  author: "Arduino",
  website: "https://www.arduino.cc",
  paradigms: ["imperative", "procedural", "embedded"],
  tooling: {
    runtimes: ["Arduino Core", "Microcontroller Firmware"],
    packageManagers: ["Arduino Library Manager", "PlatformIO"],
    ecosystems: ["Embedded", "IoT", "Prototyping"],
  },
  version: "Arduino API 1.0",
  logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_arduino.svg",
  color: "#00979D",
  i18n: {
    en: {
      name: "Arduino Sketch",
      description:
        "A C/C++-based sketch format for programming Arduino boards and embedded devices.",
      longDescription:
        "Arduino sketches wrap embedded C and C++ development in a beginner-friendly project model with setup and loop entry points, board cores, and hardware libraries.\n\nThey are widely used for electronics prototyping, education, robotics, sensors, IoT devices, and small firmware projects that interact directly with physical components.",
    },
    es: {
      name: "Arduino Sketch",
      description:
        "Un formato de sketch basado en C/C++ para programar placas Arduino y dispositivos embebidos.",
      longDescription:
        "Los sketches de Arduino envuelven el desarrollo embebido en C y C++ en un modelo de proyecto accesible con puntos de entrada setup y loop, cores de placas y bibliotecas de hardware.\n\nSe usan ampliamente para prototipos electronicos, educacion, robotica, sensores, dispositivos IoT y pequenos proyectos de firmware que interactuan directamente con componentes fisicos.",
    },
  },
} satisfies Language;
