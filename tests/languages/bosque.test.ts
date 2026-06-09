import { describe, it } from 'vitest';
import { bosque } from '../../src/languages/bosque';
import { expectValidLanguage } from '../language-contract';

describe('bosque', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(bosque, 'bosque');
  });
});
