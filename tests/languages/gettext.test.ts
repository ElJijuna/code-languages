import { describe, it } from 'vitest';
import { gettext } from '../../src/languages/gettext';
import { expectValidLanguage } from '../language-contract';

describe('gettext', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(gettext, 'gettext');
  });
});
