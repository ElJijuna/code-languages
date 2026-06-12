import { describe, it } from 'vitest';
import { self } from '../../src/languages/self';
import { expectValidLanguage } from '../language-contract';

describe('self', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(self, 'self');
  });
});
