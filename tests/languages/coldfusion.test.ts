import { describe, it } from 'vitest';
import { coldfusion } from '../../src/languages/coldfusion';
import { expectValidLanguage } from '../language-contract';

describe('coldfusion', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(coldfusion, 'coldfusion');
  });
});
