import { describe, it } from 'vitest';
import { editorconfig } from '../../src/languages/editorconfig';
import { expectValidLanguage } from '../language-contract';

describe('editorconfig', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(editorconfig, 'editorconfig');
  });
});
