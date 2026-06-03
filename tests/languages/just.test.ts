import { describe, it } from 'vitest';
import { just } from '../../src/languages/just';
import { expectValidLanguage } from '../language-contract';

describe('just', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(just, 'just');
  });
});
