import { describe, it } from 'vitest';
import { webassembly } from '../../src/languages/webassembly';
import { expectValidLanguage } from '../language-contract';

describe('webassembly', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(webassembly, 'webassembly');
  });
});
