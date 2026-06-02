import { describe, it } from 'vitest';
import { cobol } from '../../src/languages/cobol';
import { expectValidLanguage } from '../language-contract';

describe('cobol', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(cobol, 'cobol');
  });
});
