import { describe, it } from 'vitest';
import { rust } from '../../src/languages/rust';
import { expectValidLanguage } from '../language-contract';

describe('rust', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(rust, 'rust');
  });
});
