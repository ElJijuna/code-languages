import { describe, it } from 'vitest';
import { sas } from '../../src/languages/sas';
import { expectValidLanguage } from '../language-contract';

describe('sas', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(sas, 'sas');
  });
});
