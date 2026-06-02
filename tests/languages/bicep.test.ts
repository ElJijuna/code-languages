import { describe, it } from 'vitest';
import { bicep } from '../../src/languages/bicep';
import { expectValidLanguage } from '../language-contract';

describe('bicep', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(bicep, 'bicep');
  });
});
