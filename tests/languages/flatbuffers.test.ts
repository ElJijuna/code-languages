import { describe, it } from 'vitest';
import { flatbuffers } from '../../src/languages/flatbuffers';
import { expectValidLanguage } from '../language-contract';

describe('flatbuffers', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(flatbuffers, 'flatbuffers');
  });
});
