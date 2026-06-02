import { describe, it } from 'vitest';
import { unison } from '../../src/languages/unison';
import { expectValidLanguage } from '../language-contract';

describe('unison', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(unison, 'unison');
  });
});
