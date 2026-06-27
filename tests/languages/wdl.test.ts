import { describe, it } from 'vitest';
import { wdl } from '../../src/languages/wdl';
import { expectValidLanguage } from '../language-contract';

describe('wdl', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(wdl, 'wdl');
  });
});
