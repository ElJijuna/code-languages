import { describe, it } from 'vitest';
import { dhall } from '../../src/languages/dhall';
import { expectValidLanguage } from '../language-contract';

describe('dhall', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(dhall, 'dhall');
  });
});
