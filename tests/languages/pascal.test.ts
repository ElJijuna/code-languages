import { describe, it } from 'vitest';
import { pascal } from '../../src/languages/pascal';
import { expectValidLanguage } from '../language-contract';

describe('pascal', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(pascal, 'pascal');
  });
});
