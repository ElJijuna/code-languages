import { describe, it } from 'vitest';
import { bibtex } from '../../src/languages/bibtex';
import { expectValidLanguage } from '../language-contract';

describe('bibtex', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(bibtex, 'bibtex');
  });
});
