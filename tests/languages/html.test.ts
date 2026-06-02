import { describe, it } from 'vitest';
import { html } from '../../src/languages/html';
import { expectValidLanguage } from '../language-contract';

describe('html', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(html, 'html');
  });
});
