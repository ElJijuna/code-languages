import { describe, it } from 'vitest';
import { cypher } from '../../src/languages/cypher';
import { expectValidLanguage } from '../language-contract';

describe('cypher', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(cypher, 'cypher');
  });
});
