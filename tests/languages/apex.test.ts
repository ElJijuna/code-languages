import { describe, it } from 'vitest';
import { apex } from '../../src/languages/apex';
import { expectValidLanguage } from '../language-contract';

describe('apex', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(apex, 'apex');
  });
});
