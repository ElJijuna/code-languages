import { describe, it } from 'vitest';
import { velocity } from '../../src/languages/velocity';
import { expectValidLanguage } from '../language-contract';

describe('velocity', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(velocity, 'velocity');
  });
});
