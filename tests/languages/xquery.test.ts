import { describe, it } from 'vitest';
import { xquery } from '../../src/languages/xquery';
import { expectValidLanguage } from '../language-contract';

describe('xquery', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(xquery, 'xquery');
  });
});
