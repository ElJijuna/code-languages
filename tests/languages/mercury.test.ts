import { describe, it } from 'vitest';
import { mercury } from '../../src/languages/mercury';
import { expectValidLanguage } from '../language-contract';

describe('mercury', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(mercury, 'mercury');
  });
});
