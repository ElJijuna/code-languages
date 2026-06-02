import { describe, it } from 'vitest';
import { protobuf } from '../../src/languages/protobuf';
import { expectValidLanguage } from '../language-contract';

describe('protobuf', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(protobuf, 'protobuf');
  });
});
