import { describe, it } from 'vitest';
import { rego } from '../../src/languages/rego';
import { expectValidLanguage } from '../language-contract';

describe('rego', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(rego, 'rego');
  });
});
