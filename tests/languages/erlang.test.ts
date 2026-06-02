import { describe, it } from 'vitest';
import { erlang } from '../../src/languages/erlang';
import { expectValidLanguage } from '../language-contract';

describe('erlang', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(erlang, 'erlang');
  });
});
