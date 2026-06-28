import { describe, it } from 'vitest';
import { xpath } from '../../src/languages/xpath';
import { expectValidLanguage } from '../language-contract';

describe('xpath', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(xpath, 'xpath');
  });
});
