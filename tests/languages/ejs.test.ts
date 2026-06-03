import { describe, it } from 'vitest';
import { ejs } from '../../src/languages/ejs';
import { expectValidLanguage } from '../language-contract';

describe('ejs', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(ejs, 'ejs');
  });
});
