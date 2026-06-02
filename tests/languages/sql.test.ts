import { describe, it } from 'vitest';
import { sql } from '../../src/languages/sql';
import { expectValidLanguage } from '../language-contract';

describe('sql', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(sql, 'sql');
  });
});
