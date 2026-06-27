import { describe, it } from 'vitest';
import { inkNarrative } from '../../src/languages/ink-narrative';
import { expectValidLanguage } from '../language-contract';

describe('ink-narrative', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(inkNarrative, 'ink-narrative');
  });
});
