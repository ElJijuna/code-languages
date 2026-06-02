import { describe, it } from 'vitest';
import { mako } from '../../src/languages/mako';
import { expectValidLanguage } from '../language-contract';

describe('mako', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(mako, 'mako');
  });
});
