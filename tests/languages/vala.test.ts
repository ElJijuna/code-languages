import { describe, it } from 'vitest';
import { vala } from '../../src/languages/vala';
import { expectValidLanguage } from '../language-contract';

describe('vala', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(vala, 'vala');
  });
});
