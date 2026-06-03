import { describe, it } from 'vitest';
import { kdl } from '../../src/languages/kdl';
import { expectValidLanguage } from '../language-contract';

describe('kdl', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(kdl, 'kdl');
  });
});
