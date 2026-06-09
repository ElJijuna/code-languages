import { describe, it } from 'vitest';
import { austral } from '../../src/languages/austral';
import { expectValidLanguage } from '../language-contract';

describe('austral', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(austral, 'austral');
  });
});
