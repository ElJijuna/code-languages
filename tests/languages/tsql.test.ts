import { describe, it } from 'vitest';
import { tsql } from '../../src/languages/tsql';
import { expectValidLanguage } from '../language-contract';

describe('tsql', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(tsql, 'tsql');
  });
});
