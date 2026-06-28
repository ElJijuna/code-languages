import { describe, it } from 'vitest';
import { processing } from '../../src/languages/processing';
import { expectValidLanguage } from '../language-contract';

describe('processing', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(processing, 'processing');
  });
});
