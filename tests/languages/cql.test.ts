import { describe, it } from 'vitest';
import { cql } from '../../src/languages/cql';
import { expectValidLanguage } from '../language-contract';

describe('cql', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(cql, 'cql');
  });
});
