import { describe, it } from 'vitest';
import { assembly } from '../../src/languages/assembly';
import { expectValidLanguage } from '../language-contract';

describe('assembly', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(assembly, 'assembly');
  });
});
