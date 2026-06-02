import { describe, it } from 'vitest';
import { haskell } from '../../src/languages/haskell';
import { expectValidLanguage } from '../language-contract';

describe('haskell', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(haskell, 'haskell');
  });
});
