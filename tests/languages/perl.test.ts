import { describe, it } from 'vitest';
import { perl } from '../../src/languages/perl';
import { expectValidLanguage } from '../language-contract';

describe('perl', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(perl, 'perl');
  });
});
