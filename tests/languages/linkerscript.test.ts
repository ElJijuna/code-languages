import { describe, it } from 'vitest';
import { linkerscript } from '../../src/languages/linkerscript';
import { expectValidLanguage } from '../language-contract';

describe('linkerscript', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(linkerscript, 'linkerscript');
  });
});
