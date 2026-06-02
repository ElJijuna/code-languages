import { describe, it } from 'vitest';
import { git } from '../../src/languages/git';
import { expectValidLanguage } from '../language-contract';

describe('git', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(git, 'git');
  });
});
