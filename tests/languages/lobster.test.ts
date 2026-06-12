import { describe, it } from 'vitest';
import { lobster } from '../../src/languages/lobster';
import { expectValidLanguage } from '../language-contract';

describe('lobster', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(lobster, 'lobster');
  });
});
