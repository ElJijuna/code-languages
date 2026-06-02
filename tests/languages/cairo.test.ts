import { describe, it } from 'vitest';
import { cairo } from '../../src/languages/cairo';
import { expectValidLanguage } from '../language-contract';

describe('cairo', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(cairo, 'cairo');
  });
});
