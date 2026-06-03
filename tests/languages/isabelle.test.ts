import { describe, it } from 'vitest';
import { isabelle } from '../../src/languages/isabelle';
import { expectValidLanguage } from '../language-contract';

describe('isabelle', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(isabelle, 'isabelle');
  });
});
