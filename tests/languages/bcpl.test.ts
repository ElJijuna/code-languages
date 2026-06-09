import { describe, it } from 'vitest';
import { bcpl } from '../../src/languages/bcpl';
import { expectValidLanguage } from '../language-contract';

describe('bcpl', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(bcpl, 'bcpl');
  });
});
