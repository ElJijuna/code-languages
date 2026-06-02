import { describe, it } from 'vitest';
import { python } from '../../src/languages/python';
import { expectValidLanguage } from '../language-contract';

describe('python', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(python, 'python');
  });
});
