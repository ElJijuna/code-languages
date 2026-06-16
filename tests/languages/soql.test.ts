import { describe, it } from 'vitest';
import { soql } from '../../src/languages/soql';
import { expectValidLanguage } from '../language-contract';

describe('soql', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(soql, 'soql');
  });
});
