import { describe, it } from 'vitest';
import { maxima } from '../../src/languages/maxima';
import { expectValidLanguage } from '../language-contract';

describe('maxima', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(maxima, 'maxima');
  });
});
