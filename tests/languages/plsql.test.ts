import { describe, it } from 'vitest';
import { plsql } from '../../src/languages/plsql';
import { expectValidLanguage } from '../language-contract';

describe('plsql', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(plsql, 'plsql');
  });
});
