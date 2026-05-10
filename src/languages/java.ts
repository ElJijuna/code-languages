import type { Language } from "../types";

export const java = {
  name: "Java",
  slug: "java",
  description: "A class-based, object-oriented language for portable applications and services.",
  longDescription:
    "Java is a statically typed language and runtime platform designed around portability, a large standard library, managed memory, and a mature virtual machine.\n\nIt is widely used for enterprise systems, Android applications, backend services, financial platforms, distributed systems, and long-lived production software.",
  publishedDate: "1995-05-23",
  extensions: [".java"],
  author: "James Gosling / Sun Microsystems",
  website: "https://www.java.com",
  paradigms: ["class-based", "concurrent", "generic", "imperative", "object-oriented"],
  version: "26",
  logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
} satisfies Language;
