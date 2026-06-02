import { describe, it } from 'vitest';
import { plantuml } from '../../src/languages/plantuml';
import { expectValidLanguage } from '../language-contract';

describe('plantuml', () => {
  it('satisfies the Language contract', () => {
    expectValidLanguage(plantuml, 'plantuml');
  });
});
