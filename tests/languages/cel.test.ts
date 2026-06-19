import { describe, it } from 'vitest';
import { cel } from '../../src/languages/cel';
import { expectValidLanguage } from '../language-contract';

describe('cel', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(cel, 'cel');
  });
});
