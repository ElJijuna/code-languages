import { describe, it } from 'vitest';
import { hy } from '../../src/languages/hy';
import { expectValidLanguage } from '../language-contract';

describe('hy', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(hy, 'hy');
  });
});
