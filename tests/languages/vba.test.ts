import { describe, it } from 'vitest';
import { vba } from '../../src/languages/vba';
import { expectValidLanguage } from '../language-contract';

describe('vba', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(vba, 'vba');
  });
});
