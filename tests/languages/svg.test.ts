import { describe, it } from 'vitest';
import { svg } from '../../src/languages/svg';
import { expectValidLanguage } from '../language-contract';

describe('svg', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(svg, 'svg');
  });
});
