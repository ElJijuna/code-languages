import { describe, it } from 'vitest';
import { crystal } from '../../src/languages/crystal';
import { expectValidLanguage } from '../language-contract';

describe('crystal', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(crystal, 'crystal');
  });
});
