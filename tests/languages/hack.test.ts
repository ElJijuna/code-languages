import { describe, it } from 'vitest';
import { hack } from '../../src/languages/hack';
import { expectValidLanguage } from '../language-contract';

describe('hack', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(hack, 'hack');
  });
});
