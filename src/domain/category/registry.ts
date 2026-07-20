import type { Language } from '@/types';

export type LanguageCategory =
  | 'frontend'
  | 'backend'
  | 'fullstack'
  | 'systems'
  | 'data-science'
  | 'scripting'
  | 'other';

export interface CategoryInfo {
  slug: LanguageCategory;
  name: string;
  description: string;
  aliases: string[];
}

type CategoryDefinition = CategoryInfo;

const CATEGORY_REGISTRY: CategoryDefinition[] = [
  {
    slug: 'frontend',
    name: 'Frontend',
    description: 'Languages that target the browser only.',
    aliases: ['frontend', 'front-end'],
  },
  {
    slug: 'backend',
    name: 'Backend',
    description: 'Languages that run on a server runtime.',
    aliases: ['backend', 'back-end', 'server'],
  },
  {
    slug: 'fullstack',
    name: 'Fullstack',
    description: 'Languages that target both the browser and a server runtime.',
    aliases: ['fullstack', 'full-stack'],
  },
  {
    slug: 'systems',
    name: 'Systems',
    description: 'Low-level, native, and embedded programming languages.',
    aliases: ['systems', 'systems-programming', 'low-level'],
  },
  {
    slug: 'data-science',
    name: 'Data Science',
    description: 'Languages for data analysis, machine learning, and scientific computing.',
    aliases: ['data-science', 'datascience', 'data'],
  },
  {
    slug: 'scripting',
    name: 'Scripting',
    description: 'Shell and scripting languages.',
    aliases: ['scripting', 'shell'],
  },
  {
    slug: 'other',
    name: 'Other',
    description: 'Languages that do not match any other category.',
    aliases: ['other'],
  },
];
// All matching is case-insensitive substring, same as matchesRuntime.
// Frontend/backend/fullstack are mutually exclusive; other categories can overlap.
const BROWSER_TARGETS = ['Browser'];
const SERVER_TARGETS = [
  'Node.js',
  'Deno',
  'Bun',
  'CPython',
  'PyPy',
  'JVM',
  'BEAM',
  'Erlang/OTP',
  'Ruby MRI',
  'JRuby',
  'TruffleRuby',
  'Go runtime',
  'PHP',
  '.NET',
  'Mono',
];
const SYSTEMS_TARGETS = [
  'Systems',
  'Systems Programming',
  'Embedded',
  'Native',
  'LLVM',
  'Firmware',
  'Linux Kernel',
  'Microcontroller',
];
const DATA_TARGETS = [
  'Data Science',
  'Machine Learning',
  'Scientific Computing',
  'Statistics',
  'Bioinformatics',
  'HPC',
  'Numerical Computing',
];
// 'shell' (lowercase) matches 'Bash shell', 'Z shell', 'Unix-like shells', 'Shell' ecosystem, etc.
const SCRIPT_TARGETS = ['shell', 'PowerShell', 'Scripting'];

function poolMatches(pool: string[], targets: string[]): boolean {
  return targets.some((t) => pool.some((s) => s.toLowerCase().includes(t.toLowerCase())));
}

function hasBrowser(lang: Language): boolean {
  return poolMatches(lang.tooling?.runtimes ?? [], BROWSER_TARGETS);
}

function hasServer(lang: Language): boolean {
  const pool = [...(lang.tooling?.runtimes ?? []), ...(lang.tooling?.ecosystems ?? [])];

  return poolMatches(pool, SERVER_TARGETS);
}

export function matchesCategory(lang: Language, category: LanguageCategory): boolean {
  const browser = hasBrowser(lang);
  const server = hasServer(lang);
  const pool = [...(lang.tooling?.runtimes ?? []), ...(lang.tooling?.ecosystems ?? [])];

  switch (category) {
    case 'frontend':
      return browser && !server;
    case 'backend':
      return server && !browser;
    case 'fullstack':
      return browser && server;
    case 'systems':
      return poolMatches(pool, SYSTEMS_TARGETS);
    case 'data-science':
      return poolMatches(pool, DATA_TARGETS);
    case 'scripting':
      return poolMatches(pool, SCRIPT_TARGETS);
    case 'other':
      return (
        !browser &&
        !server &&
        !poolMatches(pool, SYSTEMS_TARGETS) &&
        !poolMatches(pool, DATA_TARGETS) &&
        !poolMatches(pool, SCRIPT_TARGETS)
      );
  }
}

export function findCategory(value: string): CategoryDefinition | undefined {
  const key = value.trim().toLowerCase();

  return CATEGORY_REGISTRY.find((c) => c.aliases.includes(key));
}

export function categoryInfoFromDefinition(def: CategoryDefinition): CategoryInfo {
  return {
    slug: def.slug,
    name: def.name,
    description: def.description,
    aliases: def.aliases,
  };
}

export function getCategories(): LanguageCategory[] {
  return CATEGORY_REGISTRY.map((c) => c.slug);
}
