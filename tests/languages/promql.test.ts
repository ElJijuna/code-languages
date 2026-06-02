import { describe, it } from 'vitest';
import { promql } from '../../src/languages/promql';
import { expectValidLanguage } from '../language-contract';

describe('promql', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(promql, 'promql');
  });
});
