import { describe, it } from 'vitest';
import { smarty } from '../../src/languages/smarty';
import { expectValidLanguage } from '../language-contract';

describe('smarty', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(smarty, 'smarty');
  });
});
