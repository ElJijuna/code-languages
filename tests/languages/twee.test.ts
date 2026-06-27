import { describe, it } from 'vitest';
import { twee } from '../../src/languages/twee';
import { expectValidLanguage } from '../language-contract';

describe('twee', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(twee, 'twee');
  });
});
