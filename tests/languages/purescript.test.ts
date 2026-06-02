import { describe, it } from 'vitest';
import { purescript } from '../../src/languages/purescript';
import { expectValidLanguage } from '../language-contract';

describe('purescript', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(purescript, 'purescript');
  });
});
