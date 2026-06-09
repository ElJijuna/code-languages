import { describe, it } from 'vitest';
import { factor } from '../../src/languages/factor';
import { expectValidLanguage } from '../language-contract';

describe('factor', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(factor, 'factor');
  });
});
