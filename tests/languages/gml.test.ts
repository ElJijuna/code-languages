import { describe, it } from 'vitest';
import { gml } from '../../src/languages/gml';
import { expectValidLanguage } from '../language-contract';

describe('gml', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(gml, 'gml');
  });
});
