import { describe, it } from 'vitest';
import { zeek } from '../../src/languages/zeek';
import { expectValidLanguage } from '../language-contract';

describe('zeek', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(zeek, 'zeek');
  });
});
