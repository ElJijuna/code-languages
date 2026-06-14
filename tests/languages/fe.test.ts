import { describe, it } from 'vitest';
import { fe } from '../../src/languages/fe';
import { expectValidLanguage } from '../language-contract';

describe('fe', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(fe, 'fe');
  });
});
