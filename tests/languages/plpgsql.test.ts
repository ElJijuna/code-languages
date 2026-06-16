import { describe, it } from 'vitest';
import { plpgsql } from '../../src/languages/plpgsql';
import { expectValidLanguage } from '../language-contract';

describe('plpgsql', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(plpgsql, 'plpgsql');
  });
});
