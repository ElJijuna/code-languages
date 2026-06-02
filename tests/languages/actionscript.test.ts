import { describe, it } from 'vitest';
import { actionscript } from '../../src/languages/actionscript';
import { expectValidLanguage } from '../language-contract';

describe('actionscript', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(actionscript, 'actionscript');
  });
});
