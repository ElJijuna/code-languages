import { describe, it } from 'vitest';
import { stylus } from '../../src/languages/stylus';
import { expectValidLanguage } from '../language-contract';

describe('stylus', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(stylus, 'stylus');
  });
});
