import { describe, it } from 'vitest';
import { basic } from '../../src/languages/basic';
import { expectValidLanguage } from '../language-contract';

describe('basic', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(basic, 'basic');
  });
});
