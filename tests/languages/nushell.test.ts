import { describe, it } from 'vitest';
import { nushell } from '../../src/languages/nushell';
import { expectValidLanguage } from '../language-contract';

describe('nushell', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(nushell, 'nushell');
  });
});
