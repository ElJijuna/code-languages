import { describe, it } from 'vitest';
import { tcsh } from '../../src/languages/tcsh';
import { expectValidLanguage } from '../language-contract';

describe('tcsh', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(tcsh, 'tcsh');
  });
});
