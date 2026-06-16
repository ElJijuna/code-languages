import { describe, it } from 'vitest';
import { dot } from '../../src/languages/dot';
import { expectValidLanguage } from '../language-contract';

describe('dot', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(dot, 'dot');
  });
});
