import type { Language } from "../types";

export const swift = {
  slug: "swift",
  publishedDate: "2014-06-02",
  extensions: [".swift"],
  author: "Chris Lattner / Apple",
  website: "https://www.swift.org",
  paradigms: ["object-oriented", "functional", "imperative", "protocol-oriented"],
  version: "6.2.2",
  logo: "https://www.swift.org/assets/images/swift.svg",
  i18n: {
    en: {
      name: "Swift",
      description: "A safe, fast programming language for apps, systems, and server software.",
      longDescription:
        "Swift is a compiled programming language designed for safety, performance, expressiveness, and interoperability with Apple platform ecosystems.\n\nIt is used for iOS, macOS, watchOS, tvOS, server-side applications, command-line tools, systems programming, and cross-platform software.",
    },
  },
} satisfies Language;
