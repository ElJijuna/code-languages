import { describe, it } from 'vitest';
import { cpp } from '../../src/languages/cpp';
import { expectValidLanguage } from '../language-contract';

describe('cpp', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(cpp, 'cpp');
  });
});
