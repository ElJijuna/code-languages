import { describe, it } from 'vitest';
import { puppet } from '../../src/languages/puppet';
import { expectValidLanguage } from '../language-contract';

describe('puppet', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(puppet, 'puppet');
  });
});
