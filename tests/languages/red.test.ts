import { describe, it } from 'vitest';
import { red } from '../../src/languages/red';
import { expectValidLanguage } from '../language-contract';

describe('red', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(red, 'red');
  });
});
