import type { Language } from '../../types';

export interface ParadigmInfo {
  slug: string;
  name: string;
  description: string;
  aliases: string[];
}

type ParadigmDefinition = ParadigmInfo & { targets: string[] };

const PARADIGM_REGISTRY: ParadigmDefinition[] = [
  {
    slug: 'functional',
    name: 'Functional',
    description:
      'Computation through function evaluation, immutability, and avoiding side effects.',
    aliases: ['functional', 'fp', 'pure-functional'],
    targets: ['functional', 'pure functional', 'pure'],
  },
  {
    slug: 'object-oriented',
    name: 'Object-Oriented',
    description: 'Organizes code around objects with encapsulation, inheritance, and polymorphism.',
    aliases: ['object-oriented', 'oop', 'object-oriented-programming'],
    targets: ['object-oriented', 'class-based', 'prototype-based'],
  },
  {
    slug: 'imperative',
    name: 'Imperative',
    description: 'Specifies sequences of statements that change program state step by step.',
    aliases: ['imperative', 'procedural'],
    targets: ['imperative', 'procedural', 'structured'],
  },
  {
    slug: 'declarative',
    name: 'Declarative',
    description: 'Expresses the logic of a computation without describing control flow.',
    aliases: ['declarative'],
    targets: ['declarative'],
  },
  {
    slug: 'logic',
    name: 'Logic',
    description: 'Programs expressed as logical facts, rules, and constraints.',
    aliases: ['logic', 'logic-programming', 'constraint'],
    targets: ['logic', 'constraint', 'relational'],
  },
  {
    slug: 'concurrent',
    name: 'Concurrent',
    description: 'Languages with first-class support for concurrency, actors, and message passing.',
    aliases: ['concurrent', 'actor-model', 'parallel'],
    targets: ['concurrent', 'actor-model', 'message-passing', 'parallel', 'distributed'],
  },
  {
    slug: 'reactive',
    name: 'Reactive',
    description: 'Languages oriented around data flows and propagation of change.',
    aliases: ['reactive', 'dataflow', 'event-driven'],
    targets: ['reactive', 'dataflow', 'event-driven'],
  },
  {
    slug: 'generic',
    name: 'Generic',
    description: 'Languages with parametric polymorphism and generic type abstractions.',
    aliases: ['generic', 'generics'],
    targets: ['generic'],
  },
  {
    slug: 'scripting',
    name: 'Scripting',
    description: 'Languages designed for automation, shell scripting, and task execution.',
    aliases: ['scripting', 'shell'],
    targets: ['scripting', 'shell'],
  },
  {
    slug: 'query',
    name: 'Query',
    description: 'Languages for querying structured data sources and databases.',
    aliases: ['query', 'querying'],
    targets: ['query'],
  },
  {
    slug: 'markup',
    name: 'Markup',
    description: 'Languages for annotating documents with structural tags and formatting.',
    aliases: ['markup'],
    targets: ['markup', 'hypertext'],
  },
  {
    slug: 'templating',
    name: 'Templating',
    description: 'Languages for generating text documents from parameterized templates.',
    aliases: ['templating', 'template'],
    targets: ['templating', 'template'],
  },
  {
    slug: 'array',
    name: 'Array',
    description: 'Languages built around vectorized array and matrix operations.',
    aliases: ['array', 'array-oriented'],
    targets: ['array', 'array-oriented'],
  },
  {
    slug: 'metaprogramming',
    name: 'Metaprogramming',
    description: 'Languages with strong support for macros, code generation, and reflection.',
    aliases: ['metaprogramming', 'meta', 'macro'],
    targets: ['metaprogramming', 'meta-programming', 'macro'],
  },
  {
    slug: 'systems',
    name: 'Systems',
    description: 'Low-level languages designed for systems, embedded, and OS programming.',
    aliases: ['systems', 'low-level'],
    targets: ['systems', 'low-level'],
  },
  {
    slug: 'stack-based',
    name: 'Stack-Based',
    description: 'Languages where computation operates on an explicit stack.',
    aliases: ['stack-based', 'concatenative', 'stack'],
    targets: ['stack-based', 'concatenative'],
  },
  {
    slug: 'shader',
    name: 'Shader',
    description: 'Languages for GPU programming, graphics pipelines, and shader stages.',
    aliases: ['shader', 'shading', 'gpu'],
    targets: ['shader', 'shading', 'gpu-programming', 'gpu-compute'],
  },
];

export function findParadigm(value: string): ParadigmDefinition | undefined {
  const key = value.trim().toLowerCase();

  return PARADIGM_REGISTRY.find((p) => p.aliases.includes(key));
}

export function matchesParadigm(lang: Language, targets: string[]): boolean {
  const pool = lang.paradigms;

  return targets.some((t) => pool.some((s) => s.toLowerCase().includes(t.toLowerCase())));
}

export function paradigmInfoFromDefinition(def: ParadigmDefinition): ParadigmInfo {
  return {
    slug: def.slug,
    name: def.name,
    description: def.description,
    aliases: def.aliases,
  };
}

export function getParadigms(): ParadigmInfo[] {
  return PARADIGM_REGISTRY.map(paradigmInfoFromDefinition);
}
