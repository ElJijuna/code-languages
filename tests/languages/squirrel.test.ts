import { describe, it } from 'vitest';
import { squirrel } from '../../src/languages/squirrel';
import { expectValidLanguage } from '../language-contract';

describe('squirrel', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(squirrel, 'squirrel');
  });
});
