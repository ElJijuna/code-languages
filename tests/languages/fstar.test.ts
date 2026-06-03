import { describe, it } from 'vitest';
import { fstar } from '../../src/languages/fstar';
import { expectValidLanguage } from '../language-contract';

describe('fstar', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(fstar, 'fstar');
  });
});
