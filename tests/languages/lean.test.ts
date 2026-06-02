import { describe, it } from 'vitest';
import { lean } from '../../src/languages/lean';
import { expectValidLanguage } from '../language-contract';

describe('lean', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(lean, 'lean');
  });
});
