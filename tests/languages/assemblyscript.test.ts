import { describe, it } from 'vitest';
import { assemblyscript } from '../../src/languages/assemblyscript';
import { expectValidLanguage } from '../language-contract';

describe('assemblyscript', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(assemblyscript, 'assemblyscript');
  });
});
