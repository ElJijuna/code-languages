import { describe, it } from 'vitest';
import { typst } from '../../src/languages/typst';
import { expectValidLanguage } from '../language-contract';

describe('typst', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(typst, 'typst');
  });
});
