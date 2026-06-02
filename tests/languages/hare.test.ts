import { describe, it } from 'vitest';
import { hare } from '../../src/languages/hare';
import { expectValidLanguage } from '../language-contract';

describe('hare', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(hare, 'hare');
  });
});
