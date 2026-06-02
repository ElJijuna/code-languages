import { describe, it } from 'vitest';
import { kotlin } from '../../src/languages/kotlin';
import { expectValidLanguage } from '../language-contract';

describe('kotlin', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(kotlin, 'kotlin');
  });
});
