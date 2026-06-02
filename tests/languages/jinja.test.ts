import { describe, it } from 'vitest';
import { jinja } from '../../src/languages/jinja';
import { expectValidLanguage } from '../language-contract';

describe('jinja', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(jinja, 'jinja');
  });
});
