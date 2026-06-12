import { describe, it } from 'vitest';
import { modula2 } from '../../src/languages/modula-2';
import { expectValidLanguage } from '../language-contract';

describe('modula-2', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(modula2, 'modula-2');
  });
});
