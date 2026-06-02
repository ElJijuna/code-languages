import { describe, it } from 'vitest';
import { cython } from '../../src/languages/cython';
import { expectValidLanguage } from '../language-contract';

describe('cython', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(cython, 'cython');
  });
});
