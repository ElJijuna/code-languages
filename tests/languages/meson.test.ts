import { describe, it } from 'vitest';
import { meson } from '../../src/languages/meson';
import { expectValidLanguage } from '../language-contract';

describe('meson', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(meson, 'meson');
  });
});
