import { describe, it } from 'vitest';
import { bqn } from '../../src/languages/bqn';
import { expectValidLanguage } from '../language-contract';

describe('bqn', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(bqn, 'bqn');
  });
});
