import { describe, it } from 'vitest';
import { blade } from '../../src/languages/blade';
import { expectValidLanguage } from '../language-contract';

describe('blade', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(blade, 'blade');
  });
});
