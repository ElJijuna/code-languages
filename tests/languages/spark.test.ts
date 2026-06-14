import { describe, it } from 'vitest';
import { spark } from '../../src/languages/spark';
import { expectValidLanguage } from '../language-contract';

describe('spark', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(spark, 'spark');
  });
});
