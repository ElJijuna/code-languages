import type { Language } from "../types";

export const rust = {
  name: "Rust",
  slug: "rust",
  description: "A systems programming language focused on safety, speed, and concurrency.",
  longDescription:
    "Rust provides memory safety without a garbage collector through ownership, borrowing, lifetimes, and strong compile-time checks.\n\nIt is used for systems software, command-line tools, web services, embedded development, WebAssembly, and performance-critical infrastructure.",
  publishedDate: "2015-05-15",
  extensions: [".rs"],
  author: "Graydon Hoare / Mozilla Research",
  website: "https://www.rust-lang.org",
  paradigms: ["concurrent", "functional", "imperative", "procedural"],
  version: "1.95.0",
  logo: "https://www.rust-lang.org/logos/rust-logo-512x512.png",
} satisfies Language;
