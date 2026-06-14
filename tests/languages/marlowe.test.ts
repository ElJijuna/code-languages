import { describe, it } from 'vitest';
import { marlowe } from '../../src/languages/marlowe';
import { expectValidLanguage } from '../language-contract';

describe('marlowe', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(marlowe, 'marlowe');
  });
});
