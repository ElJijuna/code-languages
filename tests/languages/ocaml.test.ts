import { describe, it } from 'vitest';
import { ocaml } from '../../src/languages/ocaml';
import { expectValidLanguage } from '../language-contract';

describe('ocaml', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(ocaml, 'ocaml');
  });
});
