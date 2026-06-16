import { describe, it } from 'vitest';
import { jmespath } from '../../src/languages/jmespath';
import { expectValidLanguage } from '../language-contract';

describe('jmespath', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(jmespath, 'jmespath');
  });
});
