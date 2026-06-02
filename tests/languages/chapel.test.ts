import { describe, it } from 'vitest';
import { chapel } from '../../src/languages/chapel';
import { expectValidLanguage } from '../language-contract';

describe('chapel', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(chapel, 'chapel');
  });
});
