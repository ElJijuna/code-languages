import { describe, it } from 'vitest';
import { roc } from '../../src/languages/roc';
import { expectValidLanguage } from '../language-contract';

describe('roc', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(roc, 'roc');
  });
});
