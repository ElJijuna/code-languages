import { describe, it } from 'vitest';
import { avroIdl } from '../../src/languages/avro-idl';
import { expectValidLanguage } from '../language-contract';

describe('avro-idl', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(avroIdl, 'avro-idl');
  });
});
