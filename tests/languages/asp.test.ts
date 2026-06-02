import { describe, it } from 'vitest';
import { asp } from '../../src/languages/asp';
import { expectValidLanguage } from '../language-contract';

describe('asp', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(asp, 'asp');
  });
});
