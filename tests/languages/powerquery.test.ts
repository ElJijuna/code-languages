import { describe, it } from 'vitest';
import { powerquery } from '../../src/languages/powerquery';
import { expectValidLanguage } from '../language-contract';

describe('powerquery', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(powerquery, 'powerquery');
  });
});
