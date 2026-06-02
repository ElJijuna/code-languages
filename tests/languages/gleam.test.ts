import { describe, it } from 'vitest';
import { gleam } from '../../src/languages/gleam';
import { expectValidLanguage } from '../language-contract';

describe('gleam', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(gleam, 'gleam');
  });
});
