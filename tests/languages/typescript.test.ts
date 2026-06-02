import { describe, it } from 'vitest';
import { typescript } from '../../src/languages/typescript';
import { expectValidLanguage } from '../language-contract';

describe('typescript', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(typescript, 'typescript');
  });
});
