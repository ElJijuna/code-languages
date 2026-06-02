import { describe, it } from 'vitest';
import { stata } from '../../src/languages/stata';
import { expectValidLanguage } from '../language-contract';

describe('stata', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(stata, 'stata');
  });
});
