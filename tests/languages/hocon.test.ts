import { describe, it } from 'vitest';
import { hocon } from '../../src/languages/hocon';
import { expectValidLanguage } from '../language-contract';

describe('hocon', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(hocon, 'hocon');
  });
});
