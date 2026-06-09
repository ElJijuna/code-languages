import { describe, it } from 'vitest';
import { ante } from '../../src/languages/ante';
import { expectValidLanguage } from '../language-contract';

describe('ante', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(ante, 'ante');
  });
});
