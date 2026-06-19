import { describe, it } from 'vitest';
import { pod } from '../../src/languages/pod';
import { expectValidLanguage } from '../language-contract';

describe('pod', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(pod, 'pod');
  });
});
