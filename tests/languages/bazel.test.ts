import { describe, it } from 'vitest';
import { bazel } from '../../src/languages/bazel';
import { expectValidLanguage } from '../language-contract';

describe('bazel', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(bazel, 'bazel');
  });
});
