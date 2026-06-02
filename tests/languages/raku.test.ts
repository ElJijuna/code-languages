import { describe, it } from 'vitest';
import { raku } from '../../src/languages/raku';
import { expectValidLanguage } from '../language-contract';

describe('raku', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(raku, 'raku');
  });
});
