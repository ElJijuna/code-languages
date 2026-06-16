import { describe, it } from 'vitest';
import { kql } from '../../src/languages/kql';
import { expectValidLanguage } from '../language-contract';

describe('kql', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(kql, 'kql');
  });
});
