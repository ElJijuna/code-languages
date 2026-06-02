import { describe, it } from 'vitest';
import { css } from '../../src/languages/css';
import { expectValidLanguage } from '../language-contract';

describe('css', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(css, 'css');
  });
});
