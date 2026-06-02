import { describe, it } from 'vitest';
import { javascript } from '../../src/languages/javascript';
import { expectValidLanguage } from '../language-contract';

describe('javascript', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(javascript, 'javascript');
  });
});
