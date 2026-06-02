import { describe, it } from 'vitest';
import { carbon } from '../../src/languages/carbon';
import { expectValidLanguage } from '../language-contract';

describe('carbon', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(carbon, 'carbon');
  });
});
