import { describe, it } from 'vitest';
import { oberon } from '../../src/languages/oberon';
import { expectValidLanguage } from '../language-contract';

describe('oberon', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(oberon, 'oberon');
  });
});
