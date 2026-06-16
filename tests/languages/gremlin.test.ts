import { describe, it } from 'vitest';
import { gremlin } from '../../src/languages/gremlin';
import { expectValidLanguage } from '../language-contract';

describe('gremlin', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(gremlin, 'gremlin');
  });
});
