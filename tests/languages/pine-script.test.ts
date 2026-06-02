import { describe, it } from 'vitest';
import { pineScript } from '../../src/languages/pine-script';
import { expectValidLanguage } from '../language-contract';

describe('pine-script', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(pineScript, 'pine-script');
  });
});
