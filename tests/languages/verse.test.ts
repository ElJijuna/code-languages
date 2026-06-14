import { describe, it } from 'vitest';
import { verse } from '../../src/languages/verse';
import { expectValidLanguage } from '../language-contract';

describe('verse', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(verse, 'verse');
  });
});
