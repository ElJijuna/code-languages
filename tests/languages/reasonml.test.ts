import { describe, it } from 'vitest';
import { reasonml } from '../../src/languages/reasonml';
import { expectValidLanguage } from '../language-contract';

describe('reasonml', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(reasonml, 'reasonml');
  });
});
