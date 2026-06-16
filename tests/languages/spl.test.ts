import { describe, it } from 'vitest';
import { spl } from '../../src/languages/spl';
import { expectValidLanguage } from '../language-contract';

describe('spl', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(spl, 'spl');
  });
});
