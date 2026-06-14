import { describe, it } from 'vitest';
import { vale } from '../../src/languages/vale';
import { expectValidLanguage } from '../language-contract';

describe('vale', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(vale, 'vale');
  });
});
