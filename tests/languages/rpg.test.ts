import { describe, it } from 'vitest';
import { rpg } from '../../src/languages/rpg';
import { expectValidLanguage } from '../language-contract';

describe('rpg', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(rpg, 'rpg');
  });
});
