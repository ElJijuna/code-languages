import { describe, it } from 'vitest';
import { ballerina } from '../../src/languages/ballerina';
import { expectValidLanguage } from '../language-contract';

describe('ballerina', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(ballerina, 'ballerina');
  });
});
