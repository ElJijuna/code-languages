import { describe, it } from 'vitest';
import { tlaPlus } from '../../src/languages/tla-plus';
import { expectValidLanguage } from '../language-contract';

describe('tla-plus', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(tlaPlus, 'tla-plus');
  });
});
