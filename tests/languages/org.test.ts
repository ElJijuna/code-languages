import { describe, it } from 'vitest';
import { org } from '../../src/languages/org';
import { expectValidLanguage } from '../language-contract';

describe('org', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(org, 'org');
  });
});
