import { describe, it } from 'vitest';
import { brainfuck } from '../../src/languages/brainfuck';
import { expectValidLanguage } from '../language-contract';

describe('brainfuck', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(brainfuck, 'brainfuck');
  });
});
