import { describe, it } from 'vitest';
import { snobol } from '../../src/languages/snobol';
import { expectValidLanguage } from '../language-contract';

describe('snobol', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(snobol, 'snobol');
  });
});
