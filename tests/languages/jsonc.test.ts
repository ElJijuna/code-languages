import { describe, it } from 'vitest';
import { jsonc } from '../../src/languages/jsonc';
import { expectValidLanguage } from '../language-contract';

describe('jsonc', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(jsonc, 'jsonc');
  });
});
