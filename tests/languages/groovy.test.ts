import { describe, it } from 'vitest';
import { groovy } from '../../src/languages/groovy';
import { expectValidLanguage } from '../language-contract';

describe('groovy', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(groovy, 'groovy');
  });
});
