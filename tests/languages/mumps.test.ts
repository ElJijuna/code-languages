import { describe, it } from 'vitest';
import { mumps } from '../../src/languages/mumps';
import { expectValidLanguage } from '../language-contract';

describe('mumps', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(mumps, 'mumps');
  });
});
