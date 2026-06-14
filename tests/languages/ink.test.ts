import { describe, it } from 'vitest';
import { ink } from '../../src/languages/ink';
import { expectValidLanguage } from '../language-contract';

describe('ink', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(ink, 'ink');
  });
});
