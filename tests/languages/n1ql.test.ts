import { describe, it } from 'vitest';
import { n1ql } from '../../src/languages/n1ql';
import { expectValidLanguage } from '../language-contract';

describe('n1ql', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(n1ql, 'n1ql');
  });
});
