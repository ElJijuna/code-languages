import { describe, it } from 'vitest';
import { wren } from '../../src/languages/wren';
import { expectValidLanguage } from '../language-contract';

describe('wren', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(wren, 'wren');
  });
});
