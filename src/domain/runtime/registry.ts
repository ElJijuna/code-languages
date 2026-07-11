import type { Language } from '@/types';

export interface RuntimeInfo {
  slug: string;
  name: string;
  website: string;
  logo: string;
  color: `#${string}`;
  aliases: string[];
  packageManagers: string[];
}

type RuntimeDefinition = Omit<RuntimeInfo, 'slug'> & { targets: string[] };

const RUNTIME_REGISTRY: RuntimeDefinition[] = [
  // JavaScript runtimes
  {
    name: 'Node.js',
    color: '#339933',
    logo: 'https://cdn.simpleicons.org/nodedotjs',
    website: 'https://nodejs.org',
    aliases: ['node', 'nodejs', 'node.js'],
    packageManagers: ['npm', 'pnpm', 'Yarn', 'Bun'],
    targets: ['Node.js'],
  },
  {
    name: 'Bun',
    color: '#14151A',
    logo: 'https://cdn.simpleicons.org/bun',
    website: 'https://bun.sh',
    aliases: ['bun'],
    packageManagers: ['Bun'],
    targets: ['Bun'],
  },
  {
    name: 'Deno',
    color: '#070708',
    logo: 'https://cdn.simpleicons.org/deno',
    website: 'https://deno.com',
    aliases: ['deno'],
    packageManagers: ['jsr', 'npm'],
    targets: ['Deno'],
  },
  {
    name: 'Browser',
    color: '#4285F4',
    logo: 'https://cdn.simpleicons.org/googlechrome',
    website: 'https://developer.mozilla.org',
    aliases: ['browser', 'web-browser'],
    packageManagers: [],
    targets: ['Browser', 'Browsers', 'Web browsers'],
  },
  // .NET
  {
    name: '.NET',
    color: '#512BD4',
    logo: 'https://cdn.simpleicons.org/dotnet',
    website: 'https://dotnet.microsoft.com',
    aliases: ['net', '.net', 'dotnet'],
    packageManagers: ['NuGet'],
    targets: ['.NET'],
  },
  {
    name: '.NET Core',
    color: '#512BD4',
    logo: 'https://cdn.simpleicons.org/dotnet',
    website: 'https://dotnet.microsoft.com',
    aliases: ['net-core', 'dotnet-core', 'netcore'],
    packageManagers: ['NuGet'],
    targets: ['.NET Core'],
  },
  {
    name: '.NET Framework',
    color: '#512BD4',
    logo: 'https://cdn.simpleicons.org/dotnet',
    website: 'https://dotnet.microsoft.com',
    aliases: ['net-framework', 'dotnet-framework'],
    packageManagers: ['NuGet'],
    targets: ['.NET Framework'],
  },
  {
    name: '.NET MAUI',
    color: '#512BD4',
    logo: 'https://cdn.simpleicons.org/dotnet',
    website: 'https://dotnet.microsoft.com/apps/maui',
    aliases: ['maui', 'net-maui'],
    packageManagers: ['NuGet'],
    targets: ['.NET MAUI'],
  },
  // JVM
  {
    name: 'JVM',
    color: '#007396',
    logo: 'https://cdn.simpleicons.org/openjdk',
    website: 'https://java.com',
    aliases: ['jvm', 'java'],
    packageManagers: ['Maven', 'Gradle'],
    targets: ['JVM', 'Java'],
  },
  // Mobile
  {
    name: 'Android',
    color: '#3DDC84',
    logo: 'https://cdn.simpleicons.org/android',
    website: 'https://developer.android.com',
    aliases: ['android'],
    packageManagers: ['Gradle'],
    targets: ['Android'],
  },
  {
    name: 'iOS',
    color: '#000000',
    logo: 'https://cdn.simpleicons.org/apple',
    website: 'https://developer.apple.com/ios',
    aliases: ['ios'],
    packageManagers: ['Swift Package Manager', 'CocoaPods'],
    targets: ['iOS'],
  },
  {
    name: 'Apple',
    color: '#000000',
    logo: 'https://cdn.simpleicons.org/apple',
    website: 'https://developer.apple.com',
    aliases: ['apple', 'apple-platforms'],
    packageManagers: ['Swift Package Manager', 'CocoaPods'],
    targets: ['Apple Platforms', 'Apple platforms', 'Apple'],
  },
  // Python
  {
    name: 'Python',
    color: '#3776AB',
    logo: 'https://cdn.simpleicons.org/python',
    website: 'https://python.org',
    aliases: ['python', 'cpython'],
    packageManagers: ['pip', 'Poetry', 'uv', 'conda'],
    targets: ['CPython', 'Python', 'PyPy'],
  },
  // Ruby
  {
    name: 'Ruby',
    color: '#CC342D',
    logo: 'https://cdn.simpleicons.org/ruby',
    website: 'https://ruby-lang.org',
    aliases: ['ruby', 'mri'],
    packageManagers: ['RubyGems', 'Bundler'],
    targets: ['Ruby MRI', 'Ruby', 'JRuby', 'TruffleRuby'],
  },
  // Lua
  {
    name: 'Lua',
    color: '#2C2D72',
    logo: 'https://cdn.simpleicons.org/lua',
    website: 'https://lua.org',
    aliases: ['lua', 'luajit'],
    packageManagers: ['LuaRocks'],
    targets: ['Lua', 'LuaJIT'],
  },
  // BEAM
  {
    name: 'BEAM',
    color: '#A90533',
    logo: 'https://cdn.simpleicons.org/erlang',
    website: 'https://erlang.org',
    aliases: ['beam', 'erlang'],
    packageManagers: ['Hex', 'rebar3', 'Mix'],
    targets: ['BEAM', 'Erlang/OTP'],
  },
  // Go
  {
    name: 'Go',
    color: '#00ADD8',
    logo: 'https://cdn.simpleicons.org/go',
    website: 'https://go.dev',
    aliases: ['go', 'golang'],
    packageManagers: ['Go modules'],
    targets: ['Go runtime', 'Go'],
  },
  // Rust
  {
    name: 'Rust',
    color: '#CE422B',
    logo: 'https://cdn.simpleicons.org/rust',
    website: 'https://rust-lang.org',
    aliases: ['rust'],
    packageManagers: ['Cargo'],
    targets: ['Rust'],
  },
  // WebAssembly
  {
    name: 'WebAssembly',
    color: '#654FF0',
    logo: 'https://cdn.simpleicons.org/webassembly',
    website: 'https://webassembly.org',
    aliases: ['wasm', 'webassembly', 'wasi'],
    packageManagers: [],
    targets: ['Wasm', 'WASI', 'WebAssembly', 'Wasmer', 'Wasmtime'],
  },
  // SQL / databases
  {
    name: 'SQL',
    color: '#003B57',
    logo: 'https://cdn.simpleicons.org/sqlite',
    website: 'https://www.iso.org/standard/63555.html',
    aliases: ['sql'],
    packageManagers: [],
    targets: ['SQL', 'Relational databases'],
  },
  {
    name: 'PostgreSQL',
    color: '#4169E1',
    logo: 'https://cdn.simpleicons.org/postgresql',
    website: 'https://postgresql.org',
    aliases: ['postgres', 'postgresql', 'pg'],
    packageManagers: [],
    targets: ['PostgreSQL'],
  },
  {
    name: 'InfluxDB',
    color: '#22ADF6',
    logo: 'https://cdn.simpleicons.org/influxdb',
    website: 'https://influxdata.com',
    aliases: ['influxdb', 'influx'],
    packageManagers: [],
    targets: ['InfluxDB'],
  },
  {
    name: 'Splunk',
    color: '#65A637',
    logo: 'https://cdn.simpleicons.org/splunk',
    website: 'https://splunk.com',
    aliases: ['splunk'],
    packageManagers: [],
    targets: ['Splunk Enterprise', 'Splunk Cloud Platform'],
  },
  // GPU / Graphics
  {
    name: 'CUDA',
    color: '#76B900',
    logo: 'https://cdn.simpleicons.org/nvidia',
    website: 'https://developer.nvidia.com/cuda-zone',
    aliases: ['cuda', 'nvidia'],
    packageManagers: [],
    targets: ['CUDA Runtime', 'CUDA Driver API', 'CUDA Toolkit'],
  },
  {
    name: 'Metal',
    color: '#000000',
    logo: 'https://cdn.simpleicons.org/apple',
    website: 'https://developer.apple.com/metal',
    aliases: ['metal'],
    packageManagers: [],
    targets: ['Metal'],
  },
  {
    name: 'WebGL',
    color: '#990000',
    logo: 'https://cdn.simpleicons.org/opengl',
    website: 'https://khronos.org/webgl',
    aliases: ['webgl'],
    packageManagers: [],
    targets: ['WebGL'],
  },
  {
    name: 'WebGPU',
    color: '#005A9C',
    logo: 'https://avatars.githubusercontent.com/u/46742612?v=4',
    website: 'https://gpuweb.github.io/gpuweb',
    aliases: ['webgpu'],
    packageManagers: [],
    targets: ['WebGPU', 'wgpu'],
  },
  {
    name: 'Vulkan',
    color: '#AC162C',
    logo: 'https://cdn.simpleicons.org/vulkan',
    website: 'https://vulkan.org',
    aliases: ['vulkan'],
    packageManagers: [],
    targets: ['Vulkan via SPIR-V'],
  },
  {
    name: 'DirectX',
    color: '#0078D4',
    logo: 'https://cdn.simpleicons.org/microsoft',
    website: 'https://devblogs.microsoft.com/directx',
    aliases: ['directx', 'direct3d', 'd3d'],
    packageManagers: [],
    targets: ['Direct3D', 'DirectX Shader Compiler'],
  },
  {
    name: 'OpenCL',
    color: '#ED1C24',
    logo: 'https://cdn.simpleicons.org/opengl',
    website: 'https://khronos.org/opencl',
    aliases: ['opencl'],
    packageManagers: [],
    targets: ['OpenCL Runtime'],
  },
  {
    name: 'OpenGL',
    color: '#5586A4',
    logo: 'https://cdn.simpleicons.org/opengl',
    website: 'https://opengl.org',
    aliases: ['opengl'],
    packageManagers: [],
    targets: ['OpenGL', 'OpenGL ES'],
  },
  // Game engines
  {
    name: 'Unity',
    color: '#FFFFFF',
    logo: 'https://cdn.simpleicons.org/unity',
    website: 'https://unity.com',
    aliases: ['unity'],
    packageManagers: [],
    targets: ['Unity'],
  },
  {
    name: 'Unreal Engine',
    color: '#0E1128',
    logo: 'https://cdn.simpleicons.org/unrealengine',
    website: 'https://unrealengine.com',
    aliases: ['unreal', 'unreal-engine', 'ue'],
    packageManagers: [],
    targets: ['Unreal Engine', 'Unreal Editor for Fortnite'],
  },
  {
    name: 'Godot',
    color: '#478CBF',
    logo: 'https://cdn.simpleicons.org/godotengine',
    website: 'https://godotengine.org',
    aliases: ['godot'],
    packageManagers: ['Godot Asset Library'],
    targets: ['Godot Engine'],
  },
  {
    name: 'GameMaker',
    color: '#71B33C',
    logo: 'https://cdn.simpleicons.org/gamemaker',
    website: 'https://gamemaker.io',
    aliases: ['gamemaker', 'game-maker'],
    packageManagers: [],
    targets: ['GameMaker'],
  },
  {
    name: 'Roblox',
    color: '#E31F26',
    logo: 'https://cdn.simpleicons.org/roblox',
    website: 'https://roblox.com',
    aliases: ['roblox'],
    packageManagers: ['Wally'],
    targets: ['Roblox'],
  },
  // Low-level / native
  {
    name: 'LLVM',
    color: '#262D3A',
    logo: 'https://avatars.githubusercontent.com/u/1466038?v=4',
    website: 'https://llvm.org',
    aliases: ['llvm'],
    packageManagers: [],
    targets: ['LLVM'],
  },
  {
    name: 'Embedded',
    color: '#00878A',
    logo: 'https://cdn.simpleicons.org/arduino',
    website: 'https://en.wikipedia.org/wiki/Embedded_system',
    aliases: ['embedded', 'arduino', 'microcontroller'],
    packageManagers: ['PlatformIO'],
    targets: ['Arduino Core', 'Embedded Systems', 'Embedded', 'Microcontroller Firmware'],
  },
  // Cloud / infra
  {
    name: 'Azure',
    color: '#0078D4',
    logo: 'https://cdn.simpleicons.org/microsoftazure',
    website: 'https://azure.microsoft.com',
    aliases: ['azure'],
    packageManagers: [],
    targets: [
      'Azure',
      'Azure Data Explorer',
      'Azure Monitor',
      'Azure Quantum',
      'Azure Resource Manager',
    ],
  },
  {
    name: 'Docker',
    color: '#2496ED',
    logo: 'https://cdn.simpleicons.org/docker',
    website: 'https://docker.com',
    aliases: ['docker', 'containers'],
    packageManagers: [],
    targets: ['Docker', 'Containers'],
  },
  {
    name: 'Kubernetes',
    color: '#326CE5',
    logo: 'https://cdn.simpleicons.org/kubernetes',
    website: 'https://kubernetes.io',
    aliases: ['kubernetes', 'k8s'],
    packageManagers: ['Helm'],
    targets: ['Kubernetes'],
  },
  // OS
  {
    name: 'Windows',
    color: '#0078D4',
    logo: 'https://cdn.simpleicons.org/windows',
    website: 'https://microsoft.com/windows',
    aliases: ['windows'],
    packageManagers: ['winget', 'Chocolatey', 'Scoop'],
    targets: ['Windows', 'Windows PowerShell', 'WPF', 'UWP XAML', 'WinUI'],
  },
  {
    name: 'macOS',
    color: '#000000',
    logo: 'https://cdn.simpleicons.org/apple',
    website: 'https://apple.com/macos',
    aliases: ['macos', 'osx'],
    packageManagers: ['Homebrew'],
    targets: ['macOS'],
  },
  {
    name: 'Linux',
    color: '#FCC624',
    logo: 'https://cdn.simpleicons.org/linux',
    website: 'https://kernel.org',
    aliases: ['linux'],
    packageManagers: ['apt', 'dnf', 'pacman'],
    targets: ['Linux'],
  },
  // Enterprise
  {
    name: 'Salesforce',
    color: '#00A1E0',
    logo: 'https://cdn.simpleicons.org/salesforce',
    website: 'https://salesforce.com',
    aliases: ['salesforce', 'sfdc'],
    packageManagers: ['Salesforce CLI'],
    targets: ['Salesforce Platform', 'Salesforce CLI'],
  },
  {
    name: 'SAP',
    color: '#0070F2',
    logo: 'https://cdn.simpleicons.org/sap',
    website: 'https://sap.com',
    aliases: ['sap'],
    packageManagers: [],
    targets: ['SAP BTP', 'SAP S/4HANA', 'SAP NetWeaver AS ABAP'],
  },
  // Blockchain
  {
    name: 'Ethereum',
    color: '#627EEA',
    logo: 'https://cdn.simpleicons.org/ethereum',
    website: 'https://ethereum.org',
    aliases: ['ethereum', 'evm'],
    packageManagers: ['Foundry', 'Hardhat'],
    targets: ['Ethereum Virtual Machine', 'EVM', 'Ethereum', 'EVM-compatible chains'],
  },
  // Languages with notable runtimes/ecosystems
  {
    name: 'R',
    color: '#276DC3',
    logo: 'https://cdn.simpleicons.org/r',
    website: 'https://r-project.org',
    aliases: ['r', 'r-lang', 'cran'],
    packageManagers: ['CRAN', 'renv'],
    targets: ['R', 'CRAN'],
  },
  {
    name: 'OCaml',
    color: '#EF7A08',
    logo: 'https://avatars.githubusercontent.com/u/1841483?v=4',
    website: 'https://ocaml.org',
    aliases: ['ocaml'],
    packageManagers: ['opam'],
    targets: ['OCaml Runtime', 'OCaml'],
  },
];

export function findRuntime(value: string): RuntimeDefinition | undefined {
  const key = value.trim().toLowerCase();

  return RUNTIME_REGISTRY.find((r) => r.aliases.includes(key));
}

export function matchesRuntime(lang: Language, targets: string[]): boolean {
  const pool = [...(lang.tooling?.runtimes ?? []), ...(lang.tooling?.ecosystems ?? [])];

  return targets.some((t) => pool.some((s) => s.toLowerCase().includes(t.toLowerCase())));
}

export function runtimeInfoFromDefinition(def: RuntimeDefinition): RuntimeInfo {
  /* v8 ignore next -- all registry entries have at least one alias */
  const slug: string = def.aliases[0] ?? def.name.toLowerCase();

  return {
    slug,
    name: def.name,
    website: def.website,
    logo: def.logo,
    color: def.color,
    aliases: def.aliases,
    packageManagers: def.packageManagers,
  };
}

export function runtimesForPackageManager(targets: string[]): RuntimeInfo[] {
  return RUNTIME_REGISTRY.filter((r) =>
    targets.some((t) => r.packageManagers.some((pm) => pm.toLowerCase().includes(t.toLowerCase()))),
  ).map(runtimeInfoFromDefinition);
}

export function getRuntimes(): RuntimeInfo[] {
  return RUNTIME_REGISTRY.map(runtimeInfoFromDefinition);
}
