import { describe, it } from 'vitest';
import { llvmIr } from '../../src/languages/llvm-ir';
import { expectValidLanguage } from '../language-contract';

describe('llvm-ir', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(llvmIr, 'llvm-ir');
  });
});
