import { describe, it } from 'vitest';
import { cuda } from '../../src/languages/cuda';
import { expectValidLanguage } from '../language-contract';

describe('cuda', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(cuda, 'cuda');
  });
});
