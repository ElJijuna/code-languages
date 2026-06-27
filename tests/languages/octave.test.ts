import { describe, it } from 'vitest';
import { octave } from '../../src/languages/octave';
import { expectValidLanguage } from '../language-contract';

describe('octave', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(octave, 'octave');
  });
});
