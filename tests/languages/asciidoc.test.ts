import { describe, it } from 'vitest';
import { asciidoc } from '../../src/languages/asciidoc';
import { expectValidLanguage } from '../language-contract';

describe('asciidoc', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(asciidoc, 'asciidoc');
  });
});
