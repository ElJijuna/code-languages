import type { LanguageSlug } from '@/domain/language/registry';

/**
 * Interpreter basename to language slug map used by shebang detection.
 *
 * Version suffixes such as `python3` or `perl5.36` are stripped before lookup,
 * so only the canonical interpreter names need entries here.
 */
const SHEBANG_INTERPRETERS: Record<string, LanguageSlug> = {
  awk: 'awk',
  bash: 'bash',
  bun: 'javascript',
  crystal: 'crystal',
  csh: 'tcsh',
  dash: 'bash',
  deno: 'typescript',
  elixir: 'elixir',
  escript: 'erlang',
  expect: 'tcl',
  fish: 'fish',
  gawk: 'awk',
  groovy: 'groovy',
  guile: 'scheme',
  janet: 'janet',
  julia: 'julia',
  ksh: 'bash',
  lua: 'lua',
  mawk: 'awk',
  nawk: 'awk',
  node: 'javascript',
  nodejs: 'javascript',
  nu: 'nushell',
  osascript: 'applescript',
  perl: 'perl',
  php: 'php',
  pwsh: 'powershell',
  python: 'python',
  racket: 'racket',
  raku: 'raku',
  rscript: 'r',
  ruby: 'ruby',
  scala: 'scala',
  sh: 'bash',
  tclsh: 'tcl',
  tcsh: 'tcsh',
  wish: 'tcl',
  zsh: 'zsh',
};
const trailingVersionPattern = /[-.]?\d[\d.]*$/;
const lookupInterpreter = (interpreter: string): LanguageSlug | undefined =>
  SHEBANG_INTERPRETERS[interpreter] ??
  SHEBANG_INTERPRETERS[interpreter.replace(trailingVersionPattern, '')];

/**
 * Detects a language slug from the shebang line of a file's content.
 *
 * Handles direct interpreter paths (`#!/bin/bash`), `env` indirection with flags
 * (`#!/usr/bin/env -S deno run`), and versioned interpreters (`#!/usr/bin/python3`).
 *
 * @example
 * detectLanguageSlugByShebang("#!/usr/bin/env python3\nprint('hi')");
 * // "python"
 */
export const detectLanguageSlugByShebang = (content: string): LanguageSlug | undefined => {
  if (!content.startsWith('#!')) {
    return undefined;
  }

  const newlineIndex = content.search(/\r?\n/);
  const firstLine = newlineIndex === -1 ? content : content.slice(0, newlineIndex);
  const parts = firstLine.slice(2).trim().split(/\s+/);

  let interpreter = parts[0]?.split('/').at(-1)?.toLowerCase();

  if (interpreter === 'env') {
    interpreter = parts
      .slice(1)
      .find((argument) => !argument.startsWith('-'))
      ?.split('/')
      .at(-1)
      ?.toLowerCase();
  }

  return interpreter ? lookupInterpreter(interpreter) : undefined;
};
