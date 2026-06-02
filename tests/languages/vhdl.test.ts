import { describe, it } from 'vitest';
import { vhdl } from '../../src/languages/vhdl';
import { expectValidLanguage } from '../language-contract';

describe('vhdl', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(vhdl, 'vhdl');
  });
});
