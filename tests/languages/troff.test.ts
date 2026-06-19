import { describe, it } from 'vitest';
import { troff } from '../../src/languages/troff';
import { expectValidLanguage } from '../language-contract';

describe('troff', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(troff, 'troff');
  });
});
