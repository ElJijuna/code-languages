import type { Language } from '../../types';

export interface PackageManagerInfo {
  slug: string;
  name: string;
  website: string;
  logo: string;
  color: `#${string}`;
  aliases: string[];
}

type PackageManagerDefinition = PackageManagerInfo & { targets: string[] };

const PACKAGE_MANAGER_REGISTRY: PackageManagerDefinition[] = [
  {
    slug: 'npm',
    name: 'npm',
    color: '#CB3837',
    logo: 'https://cdn.simpleicons.org/npm',
    website: 'https://npmjs.com',
    aliases: ['npm'],
    targets: ['npm'],
  },
  {
    slug: 'pnpm',
    name: 'pnpm',
    color: '#F69220',
    logo: 'https://cdn.simpleicons.org/pnpm',
    website: 'https://pnpm.io',
    aliases: ['pnpm'],
    targets: ['pnpm'],
  },
  {
    slug: 'yarn',
    name: 'Yarn',
    color: '#2C8EBB',
    logo: 'https://cdn.simpleicons.org/yarn',
    website: 'https://yarnpkg.com',
    aliases: ['yarn'],
    targets: ['Yarn'],
  },
  {
    slug: 'pip',
    name: 'pip',
    color: '#3775A9',
    logo: 'https://cdn.simpleicons.org/pypi',
    website: 'https://pip.pypa.io',
    aliases: ['pip'],
    targets: ['pip'],
  },
  {
    slug: 'poetry',
    name: 'Poetry',
    color: '#60A5FA',
    logo: 'https://cdn.simpleicons.org/poetry',
    website: 'https://python-poetry.org',
    aliases: ['poetry'],
    targets: ['Poetry'],
  },
  {
    slug: 'uv',
    name: 'uv',
    color: '#DE5FE9',
    logo: 'https://avatars.githubusercontent.com/u/115962839?v=4',
    website: 'https://docs.astral.sh/uv',
    aliases: ['uv'],
    targets: ['uv'],
  },
  {
    slug: 'conda',
    name: 'conda',
    color: '#44A833',
    logo: 'https://cdn.simpleicons.org/anaconda',
    website: 'https://conda.io',
    aliases: ['conda'],
    targets: ['conda'],
  },
  {
    slug: 'cargo',
    name: 'Cargo',
    color: '#CE422B',
    logo: 'https://cdn.simpleicons.org/rust',
    website: 'https://doc.rust-lang.org/cargo',
    aliases: ['cargo'],
    targets: ['Cargo'],
  },
  {
    slug: 'maven',
    name: 'Maven',
    color: '#C71A36',
    logo: 'https://cdn.simpleicons.org/apachemaven',
    website: 'https://maven.apache.org',
    aliases: ['maven'],
    targets: ['Maven'],
  },
  {
    slug: 'gradle',
    name: 'Gradle',
    color: '#02303A',
    logo: 'https://cdn.simpleicons.org/gradle',
    website: 'https://gradle.org',
    aliases: ['gradle'],
    targets: ['Gradle'],
  },
  {
    slug: 'nuget',
    name: 'NuGet',
    color: '#004880',
    logo: 'https://cdn.simpleicons.org/nuget',
    website: 'https://nuget.org',
    aliases: ['nuget'],
    targets: ['NuGet'],
  },
  {
    slug: 'composer',
    name: 'Composer',
    color: '#885630',
    logo: 'https://cdn.simpleicons.org/composer',
    website: 'https://getcomposer.org',
    aliases: ['composer'],
    targets: ['Composer'],
  },
  {
    slug: 'hex',
    name: 'Hex',
    color: '#6E4A7E',
    logo: 'https://cdn.simpleicons.org/elixir',
    website: 'https://hex.pm',
    aliases: ['hex'],
    targets: ['Hex'],
  },
  {
    slug: 'mix',
    name: 'Mix',
    color: '#6E4A7E',
    logo: 'https://cdn.simpleicons.org/elixir',
    website: 'https://elixir-lang.org',
    aliases: ['mix'],
    targets: ['Mix'],
  },
  {
    slug: 'cabal',
    name: 'Cabal',
    color: '#5D4F85',
    logo: 'https://cdn.simpleicons.org/haskell',
    website: 'https://cabal.readthedocs.io',
    aliases: ['cabal'],
    targets: ['Cabal'],
  },
  {
    slug: 'stack',
    name: 'Stack',
    color: '#5D4F85',
    logo: 'https://cdn.simpleicons.org/haskell',
    website: 'https://haskellstack.org',
    aliases: ['stack'],
    targets: ['Stack'],
  },
  {
    slug: 'pub',
    name: 'pub',
    color: '#0175C2',
    logo: 'https://cdn.simpleicons.org/dart',
    website: 'https://pub.dev',
    aliases: ['pub', 'dart-pub'],
    targets: ['pub'],
  },
  {
    slug: 'cocoapods',
    name: 'CocoaPods',
    color: '#EE3322',
    logo: 'https://cdn.simpleicons.org/cocoapods',
    website: 'https://cocoapods.org',
    aliases: ['cocoapods', 'pods'],
    targets: ['CocoaPods'],
  },
  {
    slug: 'spm',
    name: 'Swift PM',
    color: '#F05138',
    logo: 'https://cdn.simpleicons.org/swift',
    website: 'https://swift.org/package-manager',
    aliases: ['spm', 'swift-pm', 'swiftpm'],
    targets: ['Swift Package Manager'],
  },
  {
    slug: 'rubygems',
    name: 'RubyGems',
    color: '#E9573F',
    logo: 'https://cdn.simpleicons.org/rubygems',
    website: 'https://rubygems.org',
    aliases: ['rubygems', 'gem', 'bundler'],
    targets: ['RubyGems', 'Bundler'],
  },
  {
    slug: 'go-mod',
    name: 'Go modules',
    color: '#00ADD8',
    logo: 'https://cdn.simpleicons.org/go',
    website: 'https://go.dev/ref/mod',
    aliases: ['go-mod', 'go-modules', 'gomod'],
    targets: ['Go modules'],
  },
  {
    slug: 'luarocks',
    name: 'LuaRocks',
    color: '#2C2D72',
    logo: 'https://cdn.simpleicons.org/lua',
    website: 'https://luarocks.org',
    aliases: ['luarocks'],
    targets: ['LuaRocks'],
  },
  {
    slug: 'opam',
    name: 'Opam',
    color: '#EF7A08',
    logo: 'https://avatars.githubusercontent.com/u/1841483?v=4',
    website: 'https://opam.ocaml.org',
    aliases: ['opam'],
    targets: ['opam'],
  },
  {
    slug: 'cpan',
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
  return {
    slug: def.slug,
    name: def.name,
    website: def.website,
    logo: def.logo,
    color: def.color,
    aliases: def.aliases,
  };
}
