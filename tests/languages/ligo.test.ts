import { describe, it } from 'vitest';
import { ligo } from '../../src/languages/ligo';
import { expectValidLanguage } from '../language-contract';

describe('ligo', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(ligo, 'ligo');
  });
});
