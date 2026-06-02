import { describe, it } from 'vitest';
import { move } from '../../src/languages/move';
import { expectValidLanguage } from '../language-contract';

describe('move', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(move, 'move');
  });
});
