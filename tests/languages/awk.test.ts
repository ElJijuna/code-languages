import { describe, it } from 'vitest';
import { awk } from '../../src/languages/awk';
import { expectValidLanguage } from '../language-contract';

describe('awk', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(awk, 'awk');
  });
});
