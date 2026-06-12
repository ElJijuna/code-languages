import { describe, it } from 'vitest';
import { plI } from '../../src/languages/pl-i';
import { expectValidLanguage } from '../language-contract';

describe('pl-i', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(plI, 'pl-i');
  });
});
