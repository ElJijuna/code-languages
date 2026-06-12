import { describe, it } from 'vitest';
import { rebol } from '../../src/languages/rebol';
import { expectValidLanguage } from '../language-contract';

describe('rebol', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(rebol, 'rebol');
  });
});
