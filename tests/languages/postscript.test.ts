import { describe, it } from 'vitest';
import { postscript } from '../../src/languages/postscript';
import { expectValidLanguage } from '../language-contract';

describe('postscript', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(postscript, 'postscript');
  });
});
