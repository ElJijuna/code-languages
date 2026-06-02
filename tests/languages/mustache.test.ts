import { describe, it } from 'vitest';
import { mustache } from '../../src/languages/mustache';
import { expectValidLanguage } from '../language-contract';

describe('mustache', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(mustache, 'mustache');
  });
});
