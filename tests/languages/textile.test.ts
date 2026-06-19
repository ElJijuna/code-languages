import { describe, it } from 'vitest';
import { textile } from '../../src/languages/textile';
import { expectValidLanguage } from '../language-contract';

describe('textile', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(textile, 'textile');
  });
});
