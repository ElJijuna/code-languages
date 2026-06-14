import { describe, it } from 'vitest';
import { aql } from '../../src/languages/aql';
import { expectValidLanguage } from '../language-contract';

describe('aql', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(aql, 'aql');
  });
});
