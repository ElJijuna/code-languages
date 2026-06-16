import { describe, it } from 'vitest';
import { fql } from '../../src/languages/fql';
import { expectValidLanguage } from '../language-contract';

describe('fql', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(fql, 'fql');
  });
});
