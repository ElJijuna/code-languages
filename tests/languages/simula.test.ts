import { describe, it } from 'vitest';
import { simula } from '../../src/languages/simula';
import { expectValidLanguage } from '../language-contract';

describe('simula', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(simula, 'simula');
  });
});
