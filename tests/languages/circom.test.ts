import { describe, it } from 'vitest';
import { circom } from '../../src/languages/circom';
import { expectValidLanguage } from '../language-contract';

describe('circom', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(circom, 'circom');
  });
});
