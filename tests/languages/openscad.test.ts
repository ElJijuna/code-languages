import { describe, it } from 'vitest';
import { openscad } from '../../src/languages/openscad';
import { expectValidLanguage } from '../language-contract';

describe('openscad', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(openscad, 'openscad');
  });
});
