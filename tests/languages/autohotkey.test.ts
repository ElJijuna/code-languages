import { describe, it } from 'vitest';
import { autohotkey } from '../../src/languages/autohotkey';
import { expectValidLanguage } from '../language-contract';

describe('autohotkey', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(autohotkey, 'autohotkey');
  });
});
