import { describe, it } from 'vitest';
import { fennel } from '../../src/languages/fennel';
import { expectValidLanguage } from '../language-contract';

describe('fennel', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(fennel, 'fennel');
  });
});
