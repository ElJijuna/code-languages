import { describe, it } from 'vitest';
import { nickel } from '../../src/languages/nickel';
import { expectValidLanguage } from '../language-contract';

describe('nickel', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(nickel, 'nickel');
  });
});
