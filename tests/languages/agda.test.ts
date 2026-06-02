import { describe, it } from 'vitest';
import { agda } from '../../src/languages/agda';
import { expectValidLanguage } from '../language-contract';

describe('agda', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(agda, 'agda');
  });
});
