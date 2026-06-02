import { describe, it } from 'vitest';
import { nix } from '../../src/languages/nix';
import { expectValidLanguage } from '../language-contract';

describe('nix', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(nix, 'nix');
  });
});
