import { describe, it } from 'vitest';
import { freemarker } from '../../src/languages/freemarker';
import { expectValidLanguage } from '../language-contract';

describe('freemarker', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(freemarker, 'freemarker');
  });
});
