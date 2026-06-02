import { describe, it } from 'vitest';
import { lua } from '../../src/languages/lua';
import { expectValidLanguage } from '../language-contract';

describe('lua', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(lua, 'lua');
  });
});
