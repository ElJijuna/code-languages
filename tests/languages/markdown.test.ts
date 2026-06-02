import { describe, it } from 'vitest';
import { markdown } from '../../src/languages/markdown';
import { expectValidLanguage } from '../language-contract';

describe('markdown', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(markdown, 'markdown');
  });
});
