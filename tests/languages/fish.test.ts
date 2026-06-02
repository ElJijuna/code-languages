import { describe, it } from 'vitest';
import { fish } from '../../src/languages/fish';
import { expectValidLanguage } from '../language-contract';

describe('fish', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(fish, 'fish');
  });
});
