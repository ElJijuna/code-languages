import { describe, it } from 'vitest';
import { jsonata } from '../../src/languages/jsonata';
import { expectValidLanguage } from '../language-contract';

describe('jsonata', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(jsonata, 'jsonata');
  });
});
