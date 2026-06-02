import { describe, it } from 'vitest';
import { hlsl } from '../../src/languages/hlsl';
import { expectValidLanguage } from '../language-contract';

describe('hlsl', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(hlsl, 'hlsl');
  });
});
