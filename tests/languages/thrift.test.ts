import { describe, it } from 'vitest';
import { thrift } from '../../src/languages/thrift';
import { expectValidLanguage } from '../language-contract';

describe('thrift', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(thrift, 'thrift');
  });
});
