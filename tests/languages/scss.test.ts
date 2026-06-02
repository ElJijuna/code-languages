import { describe, it } from 'vitest';
import { scss } from '../../src/languages/scss';
import { expectValidLanguage } from '../language-contract';

describe('scss', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(scss, 'scss');
  });
});
