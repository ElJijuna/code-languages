import type { Language } from '@/types';

export interface PackageManagerInfo {
  slug: string;
  name: string;
  website: string;
  logo: string;
  color: `#${string}`;
  aliases: string[];
}

type PackageManagerDefinition = Omit<PackageManagerInfo, 'slug'> & { targets: string[] };

const PACKAGE_MANAGER_REGISTRY: PackageManagerDefinition[] = [
  {
    name: 'npm',
    color: '#CB3837',
    logo: 'https://cdn.simpleicons.org/npm',
    website: 'https://npmjs.com',
    aliases: ['npm'],
    targets: ['npm'],
  },
  {
    name: 'pnpm',
    color: '#F69220',
    logo: 'https://cdn.simpleicons.org/pnpm',
    website: 'https://pnpm.io',
    aliases: ['pnpm'],
    targets: ['pnpm'],
  },
  {
    name: 'Yarn',
    color: '#2C8EBB',
    logo: 'https://cdn.simpleicons.org/yarn',
    website: 'https://yarnpkg.com',
    aliases: ['yarn'],
    targets: ['Yarn'],
  },
  {
    name: 'pip',
    color: '#3775A9',
    logo: 'https://cdn.simpleicons.org/pypi',
    website: 'https://pip.pypa.io',
    aliases: ['pip'],
    targets: ['pip'],
  },
  {
    name: 'Poetry',
    color: '#60A5FA',
    logo: 'https://cdn.simpleicons.org/poetry',
    website: 'https://python-poetry.org',
    aliases: ['poetry'],
    targets: ['Poetry'],
  },
  {
    name: 'uv',
    color: '#DE5FE9',
    logo: 'https://avatars.githubusercontent.com/u/115962839?v=4',
    website: 'https://docs.astral.sh/uv',
    aliases: ['uv'],
    targets: ['uv'],
  },
  {
    name: 'conda',
    color: '#44A833',
    logo: 'https://cdn.simpleicons.org/anaconda',
    website: 'https://conda.io',
    aliases: ['conda'],
    targets: ['conda'],
  },
  {
    name: 'Cargo',
    color: '#CE422B',
    logo: 'https://cdn.simpleicons.org/rust',
    website: 'https://doc.rust-lang.org/cargo',
    aliases: ['cargo'],
    targets: ['Cargo'],
  },
  {
    name: 'Maven',
    color: '#C71A36',
    logo: 'https://cdn.simpleicons.org/apachemaven',
    website: 'https://maven.apache.org',
    aliases: ['maven'],
    targets: ['Maven'],
  },
  {
    name: 'Gradle',
    color: '#02303A',
    logo: 'https://cdn.simpleicons.org/gradle',
    website: 'https://gradle.org',
    aliases: ['gradle'],
    targets: ['Gradle'],
  },
  {
    name: 'NuGet',
    color: '#004880',
    logo: 'https://cdn.simpleicons.org/nuget',
    website: 'https://nuget.org',
    aliases: ['nuget'],
    targets: ['NuGet'],
  },
  {
    name: 'Composer',
    color: '#885630',
    logo: 'https://cdn.simpleicons.org/composer',
    website: 'https://getcomposer.org',
    aliases: ['composer'],
    targets: ['Composer'],
  },
  {
    name: 'Hex',
    color: '#6E4A7E',
    logo: 'https://cdn.simpleicons.org/elixir',
    website: 'https://hex.pm',
    aliases: ['hex'],
    targets: ['Hex'],
  },
  {
    name: 'Mix',
    color: '#6E4A7E',
    logo: 'https://cdn.simpleicons.org/elixir',
    website: 'https://elixir-lang.org',
    aliases: ['mix'],
    targets: ['Mix'],
  },
  {
    name: 'Cabal',
    color: '#5D4F85',
    logo: 'https://cdn.simpleicons.org/haskell',
    website: 'https://cabal.readthedocs.io',
    aliases: ['cabal'],
    targets: ['Cabal'],
  },
  {
    name: 'Stack',
    color: '#5D4F85',
    logo: 'https://cdn.simpleicons.org/haskell',
    website: 'https://haskellstack.org',
    aliases: ['stack'],
    targets: ['Stack'],
  },
  {
    name: 'pub',
    color: '#0175C2',
    logo: 'https://cdn.simpleicons.org/dart',
    website: 'https://pub.dev',
    aliases: ['pub', 'dart-pub'],
    targets: ['pub'],
  },
  {
    name: 'CocoaPods',
    color: '#EE3322',
    logo: 'https://cdn.simpleicons.org/cocoapods',
    website: 'https://cocoapods.org',
    aliases: ['cocoapods', 'pods'],
    targets: ['CocoaPods'],
  },
  {
    name: 'Swift PM',
    color: '#F05138',
    logo: 'https://cdn.simpleicons.org/swift',
    website: 'https://swift.org/package-manager',
    aliases: ['spm', 'swift-pm', 'swiftpm'],
    targets: ['Swift Package Manager'],
  },
  {
    name: 'RubyGems',
    color: '#E9573F',
    logo: 'https://cdn.simpleicons.org/rubygems',
    website: 'https://rubygems.org',
    aliases: ['rubygems', 'gem', 'bundler'],
    targets: ['RubyGems', 'Bundler'],
  },
  {
    name: 'Go modules',
    color: '#00ADD8',
    logo: 'https://cdn.simpleicons.org/go',
    website: 'https://go.dev/ref/mod',
    aliases: ['go-mod', 'go-modules', 'gomod'],
    targets: ['Go modules'],
  },
  {
    name: 'LuaRocks',
    color: '#2C2D72',
    logo: 'https://cdn.simpleicons.org/lua',
    website: 'https://luarocks.org',
    aliases: ['luarocks'],
    targets: ['LuaRocks'],
  },
  {
    name: 'Opam',
    color: '#EF7A08',
    logo: 'https://avatars.githubusercontent.com/u/1841483?v=4',
    website: 'https://opam.ocaml.org',
    aliases: ['opam'],
    targets: ['opam'],
  },
  {
    name: 'CPAN',
    color: '#39457E',
    logo: 'https://cdn.simpleicons.org/perl',
    website: 'https://cpan.org',
    aliases: ['cpan'],
    targets: ['CPAN', 'cpanm'],
  },
];

export function findPackageManager(value: string): PackageManagerDefinition | undefined {
  const key = value.trim().toLowerCase();

  return PACKAGE_MANAGER_REGISTRY.find((r) => r.aliases.includes(key));
}

export function matchesPackageManager(lang: Language, targets: string[]): boolean {
  const pool = lang.tooling?.packageManagers ?? [];

  return targets.some((t) => pool.some((s) => s.toLowerCase().includes(t.toLowerCase())));
}

export function packageManagerInfoFromDefinition(
  def: PackageManagerDefinition,
): PackageManagerInfo {
  /* v8 ignore next -- all registry entries have at least one alias */
  const slug: string = def.aliases[0] ?? def.name.toLowerCase();

  return {
    slug,
    name: def.name,
    website: def.website,
    logo: def.logo,
    color: def.color,
    aliases: def.aliases,
  };
}

/**
 * Resolves runtime package-manager names (such as `['npm', 'Yarn']`) to registry entries.
 *
 * Names without a registry entry are omitted; matching is exact and case-insensitive
 * so `npm` never picks up `pnpm`.
 */
export function packageManagersForRuntime(names: string[]): PackageManagerInfo[] {
  const keys = names.map((name) => name.trim().toLowerCase());

  return PACKAGE_MANAGER_REGISTRY.filter((pm) =>
    keys.some(
      (key) =>
        pm.name.toLowerCase() === key ||
        pm.aliases.includes(key) ||
        pm.targets.some((target) => target.toLowerCase() === key),
    ),
  ).map(packageManagerInfoFromDefinition);
}

export function getPackageManagers(): PackageManagerInfo[] {
  return PACKAGE_MANAGER_REGISTRY.map(packageManagerInfoFromDefinition);
}
