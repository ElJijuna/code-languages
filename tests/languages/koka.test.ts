import { describe, it } from 'vitest';
import { koka } from '../../src/languages/koka';
import { expectValidLanguage } from '../language-contract';

describe('koka', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(koka, 'koka');
  });
});
