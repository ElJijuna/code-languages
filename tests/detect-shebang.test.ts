import { describe, expect, it } from 'vitest';
import { detectLanguageByShebang, detectLanguageSlugByShebang } from '../src';

describe('detectLanguageSlugByShebang', () => {
  it('detects direct interpreter paths', () => {
    expect(detectLanguageSlugByShebang('#!/bin/bash\necho hi')).toBe('bash');
    expect(detectLanguageSlugByShebang('#!/bin/sh\necho hi')).toBe('bash');
    expect(detectLanguageSlugByShebang('#!/usr/bin/perl -w\nprint 1;')).toBe('perl');
  });

  it('detects a shebang-only line without a trailing newline', () => {
    expect(detectLanguageSlugByShebang('#!/bin/zsh')).toBe('zsh');
    expect(detectLanguageSlugByShebang('#!/bin/bash\r\necho hi')).toBe('bash');
  });

  it('detects env-based shebangs', () => {
    expect(detectLanguageSlugByShebang('#!/usr/bin/env python3\nprint(1)')).toBe('python');
    expect(detectLanguageSlugByShebang('#!/usr/bin/env node\nconsole.log(1)')).toBe('javascript');
    expect(detectLanguageSlugByShebang('#!/usr/bin/env ruby\nputs 1')).toBe('ruby');
  });

  it('skips env flags such as -S', () => {
    expect(detectLanguageSlugByShebang('#!/usr/bin/env -S deno run --allow-net\n')).toBe(
      'typescript',
    );
  });

  it('strips interpreter version suffixes', () => {
    expect(detectLanguageSlugByShebang('#!/usr/bin/python3.12\n')).toBe('python');
    expect(detectLanguageSlugByShebang('#!/usr/bin/perl5.36.0\n')).toBe('perl');
    expect(detectLanguageSlugByShebang('#!/usr/local/bin/php8\n')).toBe('php');
  });

  it('returns undefined without a shebang or for unknown interpreters', () => {
    expect(detectLanguageSlugByShebang('console.log(1)')).toBeUndefined();
    expect(detectLanguageSlugByShebang('')).toBeUndefined();
    expect(detectLanguageSlugByShebang('#!/usr/bin/unknown-interpreter\n')).toBeUndefined();
    expect(detectLanguageSlugByShebang('#!/usr/bin/env\n')).toBeUndefined();
  });
});

describe('detectLanguageByShebang', () => {
  it('returns the full language object', () => {
    const language = detectLanguageByShebang('#!/usr/bin/env python3\nprint(1)');

    expect(language?.slug).toBe('python');
    expect(language?.i18n.en.name).toBe('Python');
  });

  it('returns undefined for content without a shebang', () => {
    expect(detectLanguageByShebang('print(1)')).toBeUndefined();
  });
});
