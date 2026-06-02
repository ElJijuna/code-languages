import { describe, it } from 'vitest';
import { moonbit } from '../../src/languages/moonbit';
import { expectValidLanguage } from '../language-contract';

describe('moonbit', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(moonbit, 'moonbit');
  });
});
