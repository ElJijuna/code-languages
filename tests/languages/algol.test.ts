import { describe, it } from 'vitest';
import { algol } from '../../src/languages/algol';
import { expectValidLanguage } from '../language-contract';

describe('algol', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(algol, 'algol');
  });
});
