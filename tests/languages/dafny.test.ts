import { describe, it } from 'vitest';
import { dafny } from '../../src/languages/dafny';
import { expectValidLanguage } from '../language-contract';

describe('dafny', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(dafny, 'dafny');
  });
});
