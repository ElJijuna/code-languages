import { describe, it } from 'vitest';
import { odin } from '../../src/languages/odin';
import { expectValidLanguage } from '../language-contract';

describe('odin', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(odin, 'odin');
  });
});
