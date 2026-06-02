import { describe, it } from 'vitest';
import { idris } from '../../src/languages/idris';
import { expectValidLanguage } from '../language-contract';

describe('idris', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(idris, 'idris');
  });
});
