import { describe, it } from 'vitest';
import { capnproto } from '../../src/languages/capnproto';
import { expectValidLanguage } from '../language-contract';

describe('capnproto', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(capnproto, 'capnproto');
  });
});
