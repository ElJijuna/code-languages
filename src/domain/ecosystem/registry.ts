import type { Language } from '@/types';

export interface EcosystemInfo {
  slug: string;
  name: string;
  description: string;
  aliases: string[];
}

type EcosystemDefinition = EcosystemInfo & { targets: string[] };

const ECOSYSTEM_REGISTRY: EcosystemDefinition[] = [
  // Web
  {
    slug: 'web',
    name: 'Web',
    description: 'Languages used for building websites, web apps, and web standards.',
    aliases: ['web', 'frontend', 'browser'],
    targets: ['Web', 'Frontend', 'JavaScript', 'Static Sites', 'CMS', 'Web Servers'],
  },
  // JavaScript ecosystem
  {
    slug: 'node',
    name: 'Node.js',
    description: 'Languages that run on or integrate with the Node.js server-side runtime.',
    aliases: ['node', 'nodejs', 'node.js'],
    targets: ['Node.js'],
  },
  // JVM
  {
    slug: 'jvm',
    name: 'JVM',
    description: 'Languages that run on the Java Virtual Machine.',
    aliases: ['jvm', 'java'],
    targets: ['JVM', 'Java', 'Kotlin', 'Groovy', 'Scala'],
  },
  // .NET
  {
    slug: 'dotnet',
    name: '.NET',
    description: 'Languages that target the .NET platform and runtime.',
    aliases: ['dotnet', '.net', 'net'],
    targets: ['.NET', 'ASP.NET', 'Blazor', 'ASP.NET Core'],
  },
  // DevOps / Cloud
  {
    slug: 'devops',
    name: 'DevOps',
    description: 'Languages used for CI/CD, infrastructure, and automation pipelines.',
    aliases: ['devops', 'cicd', 'ci-cd'],
    targets: ['DevOps', 'CI/CD', 'Platform Automation', 'Cloud tooling'],
  },
  {
    slug: 'cloud',
    name: 'Cloud',
    description: 'Languages used for cloud computing, cloud-native applications, and IaC.',
    aliases: ['cloud', 'cloud-native'],
    targets: [
      'Cloud',
      'Cloud Computing',
      'Cloud Native',
      'Infrastructure as Code',
      'Infrastructure',
    ],
  },
  {
    slug: 'kubernetes',
    name: 'Kubernetes',
    description: 'Languages and tools used in the Kubernetes ecosystem.',
    aliases: ['kubernetes', 'k8s'],
    targets: ['Kubernetes'],
  },
  // Data
  {
    slug: 'data-science',
    name: 'Data Science',
    description: 'Languages used for data analysis, machine learning, and statistical computing.',
    aliases: ['data-science', 'ml', 'machine-learning', 'ai'],
    targets: ['Data Science', 'Machine Learning', 'AI', 'ML', 'Data Analysis', 'Analytics'],
  },
  {
    slug: 'scientific',
    name: 'Scientific Computing',
    description: 'Languages used in research, numerical computing, and scientific simulations.',
    aliases: ['scientific', 'scientific-computing', 'hpc', 'research'],
    targets: [
      'Scientific Computing',
      'Research',
      'HPC',
      'Numerical Computing',
      'Numerical Analysis',
      'Bioinformatics',
    ],
  },
  // Systems & Embedded
  {
    slug: 'systems',
    name: 'Systems',
    description: 'Languages used for operating systems, system utilities, and native development.',
    aliases: ['systems', 'systems-programming', 'native'],
    targets: [
      'Systems',
      'Systems Programming',
      'Systems programming',
      'Operating Systems',
      'Native',
      'Native Applications',
      'Native applications',
    ],
  },
  {
    slug: 'embedded',
    name: 'Embedded',
    description: 'Languages used in firmware, microcontrollers, and embedded hardware.',
    aliases: ['embedded', 'firmware', 'iot'],
    targets: [
      'Embedded',
      'Embedded Systems',
      'Embedded systems',
      'Firmware',
      'IoT',
      'Microcontroller Firmware',
    ],
  },
  // Game development
  {
    slug: 'game-dev',
    name: 'Game Development',
    description: 'Languages used for building video games and game engines.',
    aliases: ['game-dev', 'games', 'game-development', 'gamedev'],
    targets: ['Game Development', 'Games', '2D Games', '3D Games', 'Indie Games', 'Modding'],
  },
  // Mobile
  {
    slug: 'mobile',
    name: 'Mobile',
    description: 'Languages used for iOS, Android, and cross-platform mobile development.',
    aliases: ['mobile', 'ios', 'android'],
    targets: ['Mobile', 'iOS', 'Android', 'Flutter', 'Mobile Applications', 'Mobile UI'],
  },
  // Blockchain
  {
    slug: 'blockchain',
    name: 'Blockchain',
    description: 'Languages used for smart contracts, DeFi, and blockchain development.',
    aliases: ['blockchain', 'web3', 'smart-contracts', 'crypto'],
    targets: ['Blockchain', 'Smart Contracts', 'Ethereum', 'Web3', 'EVM', 'DeFi'],
  },
  // GPU / Graphics
  {
    slug: 'gpu',
    name: 'GPU',
    description: 'Languages used for GPU computing, graphics, and shader programming.',
    aliases: ['gpu', 'graphics', 'gpu-programming'],
    targets: [
      'GPU Programming',
      'GPU Computing',
      'GPU Compute',
      'WebGPU',
      'WebGL',
      'DirectX',
      'Graphics',
      'Khronos',
    ],
  },
  // WebAssembly
  {
    slug: 'wasm',
    name: 'WebAssembly',
    description: 'Languages that compile to or run on WebAssembly.',
    aliases: ['wasm', 'webassembly'],
    targets: ['WebAssembly', 'WASI', 'WebAssembly Component Model'],
  },
  // Enterprise
  {
    slug: 'enterprise',
    name: 'Enterprise',
    description: 'Languages used in large-scale enterprise software and business applications.',
    aliases: ['enterprise'],
    targets: ['Enterprise', 'Enterprise Applications', 'Enterprise Data', 'Enterprise Integration'],
  },
  // Formal methods / Verification
  {
    slug: 'formal-methods',
    name: 'Formal Methods',
    description: 'Languages used for formal proofs, verification, and correctness guarantees.',
    aliases: ['formal-methods', 'verification', 'proof-assistants'],
    targets: [
      'Formal Methods',
      'Formal methods',
      'Verification',
      'Proof Assistants',
      'Proof assistants',
      'Low-level Verification',
    ],
  },
  // Compilers / Language tooling
  {
    slug: 'compilers',
    name: 'Compilers',
    description: 'Languages used in compiler development, language design, and tooling.',
    aliases: ['compilers', 'language-design', 'language-tooling'],
    targets: [
      'Compilers',
      'Language Design',
      'Language Research',
      'Language Tools',
      'Language Implementation',
      'Compiler Development',
    ],
  },
  // Unix / Linux
  {
    slug: 'unix',
    name: 'Unix',
    description: 'Languages and tools used in Unix-like operating systems and shell environments.',
    aliases: ['unix', 'linux', 'posix'],
    targets: ['Unix', 'Linux', 'macOS', 'BSD', 'Operating systems'],
  },
  // Documentation / Publishing
  {
    slug: 'documentation',
    name: 'Documentation',
    description: 'Languages used for writing, publishing, and technical documentation.',
    aliases: ['documentation', 'publishing', 'technical-writing'],
    targets: [
      'Documentation',
      'Publishing',
      'Technical Writing',
      'Technical writing',
      'Academic Writing',
      'Academic publishing',
    ],
  },
  // Configuration
  {
    slug: 'configuration',
    name: 'Configuration',
    description: 'Languages used for application and infrastructure configuration.',
    aliases: ['configuration', 'config'],
    targets: ['Configuration', 'Configuration Management'],
  },
  // Scripting / Automation
  {
    slug: 'automation',
    name: 'Automation',
    description: 'Languages used for task automation, scripting, and workflow orchestration.',
    aliases: ['automation', 'scripting'],
    targets: ['Automation', 'Scripting', 'DevOps', 'CLI', 'CLI Tools'],
  },
  // Apple / macOS
  {
    slug: 'apple',
    name: 'Apple',
    description: 'Languages used for macOS, iOS, and the broader Apple platform.',
    aliases: ['apple', 'macos', 'apple-platforms'],
    targets: ['Apple', 'Apple Platforms', 'macOS', 'iOS', 'tvOS', 'visionOS', 'iPadOS'],
  },
  // Windows
  {
    slug: 'windows',
    name: 'Windows',
    description: 'Languages used for Windows application and system development.',
    aliases: ['windows'],
    targets: ['Windows', 'Windows Forms', 'WPF', 'UWP', 'Desktop Applications'],
  },
  // Observability
  {
    slug: 'observability',
    name: 'Observability',
    description: 'Languages used for monitoring, metrics, logging, and security analytics.',
    aliases: ['observability', 'monitoring', 'metrics'],
    targets: ['Observability', 'Monitoring', 'Metrics', 'Security analytics'],
  },
];

export function findEcosystem(value: string): EcosystemDefinition | undefined {
  const key = value.trim().toLowerCase();

  return ECOSYSTEM_REGISTRY.find((e) => e.aliases.includes(key));
}

export function matchesEcosystem(lang: Language, targets: string[]): boolean {
  const pool = lang.tooling?.ecosystems ?? [];

  return targets.some((t) => pool.some((s) => s.toLowerCase().includes(t.toLowerCase())));
}

export function ecosystemInfoFromDefinition(def: EcosystemDefinition): EcosystemInfo {
  return {
    slug: def.slug,
    name: def.name,
    description: def.description,
    aliases: def.aliases,
  };
}

export function getEcosystems(): EcosystemInfo[] {
  return ECOSYSTEM_REGISTRY.map(ecosystemInfoFromDefinition);
}
