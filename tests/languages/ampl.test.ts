import { describe, it } from 'vitest';
import { ampl } from '../../src/languages/ampl';
import { expectValidLanguage } from '../language-contract';

describe('ampl', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(ampl, 'ampl');
  });
});
