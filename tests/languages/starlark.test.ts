import { describe, it } from 'vitest';
import { starlark } from '../../src/languages/starlark';
import { expectValidLanguage } from '../language-contract';

describe('starlark', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(starlark, 'starlark');
  });
});
