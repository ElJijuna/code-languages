export interface Language {
  /** Display name. e.g. "TypeScript" */
  name: string;

  /** URL-safe identifier. e.g. "typescript" */
  slug: string;

  /** One-line summary, max 160 characters. */
  description: string;

  /** Rich multi-paragraph description in plain text. */
  longDescription: string;

  /** ISO 8601 date of first public release. e.g. "2012-10-01" */
  publishedDate: string;

  /** All file extensions associated with the language. e.g. [".ts", ".tsx"] */
  extensions: string[];

  /** Original author or organization. e.g. "Anders Hejlsberg / Microsoft" */
  author: string;

  /** Official website URL. e.g. "https://www.typescriptlang.org" */
  website: string;

  /** Programming paradigms. e.g. ["object-oriented", "functional", "imperative"] */
  paradigms: string[];

  /** Latest stable version at time of last data update. e.g. "5.4.5" */
  version: string;

  /** URL to the official language logo or icon. */
  logo: string;
}
