import { describe, it } from 'vitest';
import { curry } from '../../src/languages/curry';
import { expectValidLanguage } from '../language-contract';

describe('curry', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(curry, 'curry');
  });
});
