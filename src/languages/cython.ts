import type { Language } from "../types";

export const cython = {
  slug: "cython",
  publishedDate: "2007-07-28",
  extensions: [".pyx", ".pxd", ".pxi"],
  author: "Robert Bradshaw, Stefan Behnel, Dag Sverre Seljebotn, Greg Ewing, et al.",
  website: "https://cython.org",
  paradigms: ["object-oriented", "imperative", "procedural"],
  tooling: {
    runtimes: ["CPython"],
    packageManagers: ["pip", "conda", "Poetry"],
    ecosystems: ["Python", "Native Extensions", "Scientific Computing"],
  },
  version: "3.1.4",
  logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_cython.svg",
  i18n: {
    en: {
      name: "Cython",
      description:
        "A Python superset for compiling typed Python-like code into C extension modules.",
      longDescription:
        "Cython extends Python with optional static types, C declarations, and direct calls into C and C++ APIs, allowing Python code to be compiled into native extension modules.\n\nIt is widely used to speed up numeric code, wrap native libraries, build scientific Python packages, and write performance-sensitive components while keeping Python-like syntax.",
    },
    es: {
      name: "Cython",
      description:
        "Un superconjunto de Python para compilar codigo tipado similar a Python como extensiones en C.",
      longDescription:
        "Cython extiende Python con tipos estaticos opcionales, declaraciones de C y llamadas directas a APIs de C y C++, permitiendo compilar codigo Python en modulos de extension nativos.\n\nSe usa ampliamente para acelerar codigo numerico, envolver bibliotecas nativas, crear paquetes cientificos de Python y escribir componentes sensibles al rendimiento manteniendo una sintaxis parecida a Python.",
    },
  },
} satisfies Language;
