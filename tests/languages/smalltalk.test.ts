import { describe, it } from 'vitest';
import { smalltalk } from '../../src/languages/smalltalk';
import { expectValidLanguage } from '../language-contract';

describe('smalltalk', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(smalltalk, 'smalltalk');
  });
});
