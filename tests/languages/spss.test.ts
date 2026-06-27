import { describe, it } from 'vitest';
import { spss } from '../../src/languages/spss';
import { expectValidLanguage } from '../language-contract';

describe('spss', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(spss, 'spss');
  });
});
