import { describe, it } from 'vitest';
import { dax } from '../../src/languages/dax';
import { expectValidLanguage } from '../language-contract';

describe('dax', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(dax, 'dax');
  });
});
