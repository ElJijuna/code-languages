import { describe, it } from 'vitest';
import { scala } from '../../src/languages/scala';
import { expectValidLanguage } from '../language-contract';

describe('scala', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(scala, 'scala');
  });
});
