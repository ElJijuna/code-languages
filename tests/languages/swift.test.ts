import { describe, it } from 'vitest';
import { swift } from '../../src/languages/swift';
import { expectValidLanguage } from '../language-contract';

describe('swift', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(swift, 'swift');
  });
});
